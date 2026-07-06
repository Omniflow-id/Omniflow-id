// Single source of truth for prerender + sitemap routes.
// Keep MODULE_SLUGS in sync with `moduleCatalog` in src/lib/moduleCatalog.ts

const LOCALES = ["en", "id", "zh"];

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

// Static (non-module) pages, relative to the locale prefix.
// `path: ""` is the locale home page.
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

// Concrete, locale-prefixed application paths to prerender (e.g. "/en/modules/hris").
function getPrerenderPaths() {
	const paths = [];
	for (const lang of LOCALES) {
		for (const page of ALL_PAGES) {
			paths.push(`/${lang}${page.path}`);
		}
	}
	return paths;
}

module.exports = {
	LOCALES,
	MODULE_SLUGS,
	STATIC_PAGES,
	MODULE_PAGES,
	ALL_PAGES,
	getPrerenderPaths,
};
