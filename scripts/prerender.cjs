const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");
const { getPrerenderPaths } = require("./routes.cjs");

const DIST = path.join(__dirname, "..", "dist");
const PORT = Number(process.env.PRERENDER_PORT) || 45678;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY) || 4;

const MIME = {
	".html": "text/html; charset=utf-8",
	".js": "text/javascript; charset=utf-8",
	".mjs": "text/javascript; charset=utf-8",
	".css": "text/css; charset=utf-8",
	".json": "application/json; charset=utf-8",
	".svg": "image/svg+xml",
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".webp": "image/webp",
	".gif": "image/gif",
	".ico": "image/x-icon",
	".woff": "font/woff",
	".woff2": "font/woff2",
	".ttf": "font/ttf",
	".txt": "text/plain; charset=utf-8",
	".xml": "application/xml; charset=utf-8",
};

// Serve built assets from dist/, with SPA fallback to the original index.html.
function createServer(indexHtml) {
	return http.createServer((req, res) => {
		try {
			const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
			const filePath = path.join(DIST, urlPath);

			if (
				filePath.startsWith(DIST) &&
				urlPath !== "/" &&
				fs.existsSync(filePath) &&
				fs.statSync(filePath).isFile()
			) {
				const ext = path.extname(filePath).toLowerCase();
				res.writeHead(200, {
					"Content-Type": MIME[ext] || "application/octet-stream",
				});
				fs.createReadStream(filePath).pipe(res);
				return;
			}

			// SPA fallback — always the pristine shell so the router renders the route.
			res.writeHead(200, { "Content-Type": MIME[".html"] });
			res.end(indexHtml);
		} catch (error) {
			res.writeHead(500, { "Content-Type": "text/plain" });
			res.end(`Prerender server error: ${error.message}`);
		}
	});
}

function writeHtml(routePath, html) {
	const outDir = path.join(DIST, routePath);
	fs.mkdirSync(outDir, { recursive: true });
	fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
}

async function renderRoute(browser, routePath) {
	const page = await browser.newPage();
	try {
		await page.setViewport({ width: 1280, height: 800 });
		// Skip external/analytics requests to keep rendering deterministic and fast.
		await page.setRequestInterception(true);
		page.on("request", (request) => {
			const url = request.url();
			if (url.startsWith(ORIGIN) || url.startsWith("data:")) {
				request.continue();
			} else {
				request.abort();
			}
		});

		await page.goto(`${ORIGIN}${routePath}`, {
			waitUntil: "networkidle0",
			timeout: 45000,
		});
		await page.waitForSelector("#root > *", { timeout: 45000 });

		const html = await page.content();
		writeHtml(routePath, html);
		return true;
	} finally {
		await page.close();
	}
}

async function main() {
	if (!fs.existsSync(path.join(DIST, "index.html"))) {
		console.error(
			"dist/index.html not found. Run `vite build` before prerendering."
		);
		process.exit(1);
	}

	const indexHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
	let routes = getPrerenderPaths();
	const limit = Number(process.env.PRERENDER_LIMIT) || 0;
	if (limit > 0) {
		routes = routes.slice(0, limit);
	}
	const server = createServer(indexHtml);
	await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));
	console.log(`Prerendering ${routes.length} routes from ${ORIGIN}`);

	const browser = await puppeteer.launch({
		args: chromium.default.args,
		executablePath: await chromium.default.executablePath(),
		headless: true,
	});

	let ok = 0;
	let failed = 0;
	const queue = [...routes];

	async function worker() {
		while (queue.length > 0) {
			const routePath = queue.shift();
			try {
				await renderRoute(browser, routePath);
				ok += 1;
				console.log(`  ✓ ${routePath}`);
			} catch (error) {
				failed += 1;
				console.error(`  ✗ ${routePath} — ${error.message}`);
			}
		}
	}

	try {
		await Promise.all(
			Array.from({ length: Math.min(CONCURRENCY, routes.length) }, worker)
		);
	} finally {
		await browser.close();
		server.close();
	}

	console.log(`Done. ${ok} prerendered, ${failed} failed.`);
	if (failed > 0) {
		process.exit(1);
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
