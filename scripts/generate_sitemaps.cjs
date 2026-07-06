const fs = require("node:fs");
const path = require("node:path");

const SITE = "https://omniflow.id";
const LOCALES = ["en", "id", "zh"];
const X_DEFAULT = "en";
const TODAY = new Date().toISOString().split("T")[0];
const OUT_DIR = path.join(__dirname, "..", "public");

// Keep this list in sync with `moduleCatalog` in src/lib/moduleCatalog.ts
const MODULE_SLUGS = [
	"hris",
	"accounting",
	"sales",
	"purchasing",
	"inventory",
	"asset-management",
	"analytics",
	"xrm",
	"customers",
	"ecommerce",
	"pos",
	"telemarketing",
	"helpdesk",
	"vecta",
	"payment-gateway",
	"lms",
	"booking-engine",
	"event-ticketing",
	"habitat",
	"property-management",
	"simklinik",
	"profilex",
	"urls",
	"bizzcard",
	"ai",
	"ecf",
];

const STATIC_PAGES = [
	{ path: "", priority: "1.0", changefreq: "weekly" },
	{ path: "/modules", priority: "0.9", changefreq: "weekly" },
	{ path: "/integrations", priority: "0.8", changefreq: "monthly" },
	{ path: "/blog", priority: "0.7", changefreq: "daily" },
	{ path: "/contact", priority: "0.6", changefreq: "monthly" },
];

const MODULE_PAGES = MODULE_SLUGS.map((slug) => ({
	path: `/modules/${slug}`,
	priority: "0.8",
	changefreq: "monthly",
}));

const ALL_PAGES = [...STATIC_PAGES, ...MODULE_PAGES];

function buildAlternates(pagePath) {
	const lines = LOCALES.map(
		(lang) =>
			`    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE}/${lang}${pagePath}"/>`
	);
	lines.push(
		`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/${X_DEFAULT}${pagePath}"/>`
	);
	return lines.join("\n");
}

function buildUrlEntry(lang, page) {
	const loc = `${SITE}/${lang}${page.path}`;
	return [
		"  <url>",
		`    <loc>${loc}</loc>`,
		`    <lastmod>${TODAY}</lastmod>`,
		`    <changefreq>${page.changefreq}</changefreq>`,
		`    <priority>${page.priority}</priority>`,
		buildAlternates(page.path),
		"  </url>",
	].join("\n");
}

function buildLocaleSitemap(lang) {
	const urls = ALL_PAGES.map((page) => buildUrlEntry(lang, page)).join("\n\n");
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

function buildIndex() {
	const entries = LOCALES.map((lang) =>
		[
			"  <sitemap>",
			`    <loc>${SITE}/sitemap-${lang}.xml</loc>`,
			`    <lastmod>${TODAY}</lastmod>`,
			"  </sitemap>",
		].join("\n")
	).join("\n");
	return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>
`;
}

function writeFile(name, content) {
	const target = path.join(OUT_DIR, name);
	fs.writeFileSync(target, content, "utf8");
	const urls = (content.match(/<loc>/g) ?? []).length;
	console.log(`  ${name} — ${urls} <loc> entries (${content.length} bytes)`);
}

function main() {
	if (!fs.existsSync(OUT_DIR)) {
		console.error(`public/ not found at ${OUT_DIR}`);
		process.exit(1);
	}
	console.log(`Generating sitemaps (lastmod=${TODAY})`);
	writeFile("sitemap.xml", buildIndex());
	for (const lang of LOCALES) {
		writeFile(`sitemap-${lang}.xml`, buildLocaleSitemap(lang));
	}
	console.log(
		`Done. ${LOCALES.length} locales × ${ALL_PAGES.length} pages = ${LOCALES.length * ALL_PAGES.length} URLs total.`
	);
}

main();
