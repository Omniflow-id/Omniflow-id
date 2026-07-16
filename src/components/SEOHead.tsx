import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: "website" | "article";
	publishedTime?: string;
	modifiedTime?: string;
	author?: string;
	section?: string;
	tags?: string[];
}

const OG_BASE = "https://omniflow.id/og";
const OG_WIDTH = "1200";
const OG_HEIGHT = "630";
const OG_TYPE = "image/webp";

// Known route segments that map to language-specific banners
const STATIC_BANNER_KEYS: Record<string, string> = {
	"": "home",
	modules: "modules",
	industries: "industries",
	integrations: "integrations",
	blog: "blog",
	contact: "contact",
	affiliate: "affiliate",
};

function toBannerKey(slug: string): string {
	return `banner_${slug}`;
}

function resolveOGImage(
	baseUrl: string,
	lang: string,
	explicitImage?: string
): string {
	if (explicitImage && explicitImage !== OG_BASE) return explicitImage;

	// Strip lang prefix: "/en/modules/hris" → "modules/hris"
	const normalized = baseUrl.replace(/^\/+/, "");
	const segments = normalized.replace(/\/$/, "").split("/");

	// Home (empty path)
	if (normalized === "" || normalized === "/") {
		return `${OG_BASE}/banner_home-${lang}.webp`;
	}

	// Check for known static pages by first segment
	const first = segments[0];
	const staticKey = STATIC_BANNER_KEYS[first];
	if (staticKey && segments.length === 1) {
		// Home always has lang suffix: banner_home-en.webp
		if (staticKey === "home") {
			return `${OG_BASE}/${toBannerKey(staticKey)}-${lang}.webp`;
		}
		// Other static pages: English = no suffix, others have -id / -zh
		if (lang === "en") {
			return `${OG_BASE}/${toBannerKey(staticKey)}.webp`;
		}
		return `${OG_BASE}/${toBannerKey(staticKey)}-${lang}.webp`;
	}

	// Module detail: "modules/hris" → banner_module-hris.webp (en) or banner_module-hris-{lang}.webp (id/zh)
	if (first === "modules" && segments.length >= 2) {
		const moduleSlug = segments[1];
		const key = `module-${moduleSlug}`;
		if (lang === "en") {
			return `${OG_BASE}/${toBannerKey(key)}.webp`;
		}
		return `${OG_BASE}/${toBannerKey(key)}-${lang}.webp`;
	}

	// Blog detail pages
	if (first === "blog" && segments.length >= 2) {
		if (lang === "en") return `${OG_BASE}/banner_blog.webp`;
		return `${OG_BASE}/banner_blog-${lang}.webp`;
	}

	// Fallback to home banner for the current language
	if (lang === "en") return `${OG_BASE}/banner_home-en.webp`;
	return `${OG_BASE}/banner_home-${lang}.webp`;
}

export default function SEOHead({
	title,
	description,
	keywords,
	image,
	url,
	type = "website",
	publishedTime,
	modifiedTime,
	author,
	section,
	tags = [],
}: SEOHeadProps) {
	const { t, i18n } = useTranslation();
	const location = useLocation();

	// Get base URL without language prefix
	const getBaseUrl = () => {
		const path = location.pathname;
		const langPrefix = path.match(/^\/(en|id|zh)/);
		return langPrefix ? path.replace(langPrefix[0], "") || "/" : path;
	};

	const baseUrl = getBaseUrl();
	const currentUrl = url || `${window.location.origin}${location.pathname}`;

	// Language-specific content
	const getLanguageSpecificContent = () => {
		const defaultContent = {
			en: {
				title: t("hero.title"),
				description: t("hero.subtitle"),
				keywords:
					"ERP Software, HRIS, Business Management, Enterprise Solutions, Omniflow, Indonesia, Human Resources, Accounting Software, CRM System, Digital Transformation, Business Automation, Inventory Management, Warehouse Software, Point of Sale, POS System, Payroll System, URL Shortener, Digital Business Card, Business Analytics, Payment Gateway Integration, Automated Telemarketing, Procurement Management, eCommerce Platform",
				author: "Omniflow.id Team",
				siteName: "Omniflow.id - Integrated ERP Solutions",
				companyName: "Omniflow.id",
				locale: "en_US",
				direction: "ltr",
			},
			id: {
				title: "Transformasi Bisnis Anda dengan Solusi ERP Terintegrasi",
				description:
					"Omniflow.id menghadirkan alat manajemen bisnis tingkat enterprise yang dirancang untuk menyederhanakan operasi, meningkatkan produktivitas, dan mempercepat pertumbuhan di seluruh organisasi Anda.",
				keywords:
					"Software ERP, HRIS, Manajemen Bisnis, Solusi Enterprise, Omniflow, Indonesia, Sistem Manajemen Bisnis, Sumber Daya Manusia, Software Akuntansi, Sistem CRM, Transformasi Digital, Otomasi Bisnis, Software Stok Barang, Aplikasi Gudang, Aplikasi Kasir, Point of Sale, Manajemen Inventory, Sistem Payroll, URL Shortener, Kartu Nama Digital, Analitik Bisnis, Payment Gateway Indonesia, Telemarketing Otomatis, Manajemen Pengadaan, Platform eCommerce",
				author: "Tim Omniflow.id",
				siteName: "Omniflow.id - Solusi ERP Terintegrasi",
				companyName: "Omniflow.id",
				locale: "id_ID",
				direction: "ltr",
			},
			zh: {
				title: "通过集成ERP解决方案转型您的业务",
				description:
					"Omniflow.id提供企业级业务管理工具，旨在简化运营、提高生产力，并加速整个组织的增长。",
				keywords:
					"ERP软件, 人力资源信息系统, 业务管理, 企业解决方案, Omniflow, 印度尼西亚, 业务管理系统, 人力资源, 会计软件, 客户关系管理系统, 数字化转型, 业务自动化, 进销存管理, 仓库软件, 收银系统, 销售终端, 薪资系统, 短链接生成器, 数字名片, 业务分析, 支付网关集成, 自动化电话营销, 采购管理, 电子商务平台",
				author: "Omniflow.id 团队",
				siteName: "Omniflow.id - 集成ERP解决方案",
				companyName: "Omniflow.id",
				locale: "zh_CN",
				direction: "ltr",
			},
		};

		return (
			defaultContent[i18n.language as keyof typeof defaultContent] ||
			defaultContent.en
		);
	};

	const langContent = getLanguageSpecificContent();
	const finalTitle = title
		? `${title} | ${langContent.siteName}`
		: `${langContent.title} | ${langContent.siteName}`;
	const finalDescription = description || langContent.description;
	const finalKeywords = keywords
		? `${keywords}, ${langContent.keywords}`
		: langContent.keywords;
	const finalAuthor = author || langContent.author;

	// Resolve OG image based on current route
	const ogImage = useMemo(
		() => resolveOGImage(baseUrl, i18n.language, image),
		[baseUrl, i18n.language, image]
	);

	// Get language-specific URLs
	const getLanguageUrls = () => {
		const origin = window.location.origin;
		return {
			en: `${origin}/en${baseUrl === "/" ? "" : baseUrl}`,
			id: `${origin}/id${baseUrl === "/" ? "" : baseUrl}`,
			zh: `${origin}/zh${baseUrl === "/" ? "" : baseUrl}`,
			"x-default": `${origin}/en${baseUrl === "/" ? "" : baseUrl}`,
		};
	};

	useEffect(() => {
		// Update HTML lang and dir attributes
		document.documentElement.lang = i18n.language;
		document.documentElement.dir = langContent.direction;

		// Update document title
		document.title = finalTitle;

		// Update or create meta tags
		const updateMetaTag = (
			name: string,
			content: string,
			property?: boolean
		) => {
			const selector = property
				? `meta[property="${name}"]`
				: `meta[name="${name}"]`;
			let meta = document.querySelector(selector) as HTMLMetaElement;

			if (!meta) {
				meta = document.createElement("meta");
				if (property) {
					meta.setAttribute("property", name);
				} else {
					meta.setAttribute("name", name);
				}
				document.head.appendChild(meta);
			}
			meta.setAttribute("content", content);
		};

		// Basic meta tags with language-specific content
		updateMetaTag("description", finalDescription);
		updateMetaTag("keywords", finalKeywords);
		updateMetaTag("author", finalAuthor);
		updateMetaTag(
			"robots",
			"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
		);
		updateMetaTag("language", i18n.language);
		updateMetaTag("content-language", i18n.language);
		updateMetaTag("revisit-after", "7 days");
		updateMetaTag("distribution", "global");
		updateMetaTag("rating", "general");
		updateMetaTag("theme-color", "#2563eb");
		updateMetaTag("msapplication-TileColor", "#2563eb");
		updateMetaTag("apple-mobile-web-app-capable", "yes");
		updateMetaTag("apple-mobile-web-app-status-bar-style", "default");
		updateMetaTag("format-detection", "telephone=no");

		// Geographic and regional targeting
		if (i18n.language === "id") {
			updateMetaTag("geo.region", "ID");
			updateMetaTag("geo.country", "Indonesia");
			updateMetaTag("geo.placename", "Jakarta");
		} else if (i18n.language === "zh") {
			updateMetaTag("geo.region", "CN");
			updateMetaTag("geo.country", "China");
		}

		// Open Graph tags with language-specific content
		updateMetaTag("og:title", finalTitle, true);
		updateMetaTag("og:description", finalDescription, true);
		updateMetaTag("og:image", ogImage, true);
		updateMetaTag("og:image:width", OG_WIDTH, true);
		updateMetaTag("og:image:height", OG_HEIGHT, true);
		updateMetaTag("og:image:type", OG_TYPE, true);
		updateMetaTag("og:image:alt", finalTitle, true);
		updateMetaTag("og:url", currentUrl, true);
		updateMetaTag("og:type", type, true);
		updateMetaTag("og:site_name", langContent.siteName, true);
		updateMetaTag("og:locale", langContent.locale, true);

		// Add alternate locales
		const localeMap = {
			en: "en_US",
			id: "id_ID",
			zh: "zh_CN",
		};

		// Remove existing alternate locale tags
		document
			.querySelectorAll('meta[property="og:locale:alternate"]')
			.forEach((meta) => meta.remove());

		// Add alternate locales
		Object.entries(localeMap).forEach(([lang, locale]) => {
			if (lang !== i18n.language) {
				const meta = document.createElement("meta");
				meta.setAttribute("property", "og:locale:alternate");
				meta.setAttribute("content", locale);
				document.head.appendChild(meta);
			}
		});

		// Twitter Card tags
		updateMetaTag("twitter:card", "summary_large_image");
		updateMetaTag("twitter:title", finalTitle);
		updateMetaTag("twitter:description", finalDescription);
		updateMetaTag("twitter:image", ogImage);
		updateMetaTag("twitter:image:alt", finalTitle);
		updateMetaTag("twitter:site", "@omniflowid");
		updateMetaTag("twitter:creator", "@omniflowid");

		// Article specific tags
		if (type === "article") {
			if (publishedTime)
				updateMetaTag("article:published_time", publishedTime, true);
			if (modifiedTime)
				updateMetaTag("article:modified_time", modifiedTime, true);
			if (finalAuthor) updateMetaTag("article:author", finalAuthor, true);
			if (section) updateMetaTag("article:section", section, true);

			// Remove existing article tags
			document
				.querySelectorAll('meta[property="article:tag"]')
				.forEach((meta) => meta.remove());

			// Add article tags
			tags.forEach((tag) => {
				const meta = document.createElement("meta");
				meta.setAttribute("property", "article:tag");
				meta.setAttribute("content", tag);
				document.head.appendChild(meta);
			});
		}

		// Canonical URL
		let canonical = document.querySelector(
			'link[rel="canonical"]'
		) as HTMLLinkElement;
		if (!canonical) {
			canonical = document.createElement("link");
			canonical.setAttribute("rel", "canonical");
			document.head.appendChild(canonical);
		}
		canonical.setAttribute("href", currentUrl);

		// Remove existing alternate language links
		document
			.querySelectorAll('link[rel="alternate"][hreflang]')
			.forEach((link) => link.remove());

		// Add language-specific alternate links
		const languageUrls = getLanguageUrls();
		Object.entries(languageUrls).forEach(([lang, href]) => {
			const alternate = document.createElement("link");
			alternate.setAttribute("rel", "alternate");
			alternate.setAttribute("hreflang", lang);
			alternate.setAttribute("href", href);
			document.head.appendChild(alternate);
		});

		// JSON-LD for multilingual website
		const existingJsonLd = document.querySelector(
			'script[type="application/ld+json"][data-seo="multilingual"]'
		);
		if (existingJsonLd) {
			existingJsonLd.remove();
		}

		const multilingualJsonLd = document.createElement("script");
		multilingualJsonLd.type = "application/ld+json";
		multilingualJsonLd.setAttribute("data-seo", "multilingual");
		multilingualJsonLd.textContent = JSON.stringify({
			"@context": "https://schema.org",
			"@type": "WebPage",
			url: currentUrl,
			inLanguage: i18n.language,
			name: finalTitle,
			description: finalDescription,
			isPartOf: {
				"@type": "WebSite",
				name: langContent.siteName,
				url: window.location.origin,
				inLanguage: ["en", "id", "zh"],
				potentialAction: {
					"@type": "SearchAction",
					target: {
						"@type": "EntryPoint",
						urlTemplate: `${window.location.origin}/${i18n.language}/search?q={search_term_string}`,
					},
					"query-input": "required name=search_term_string",
				},
			},
			publisher: {
				"@type": "Organization",
				name: langContent.companyName,
				url: window.location.origin,
			},
		});
		document.head.appendChild(multilingualJsonLd);

		// Language-specific structured data for organization
		const existingOrgJsonLd = document.querySelector(
			'script[type="application/ld+json"][data-seo="organization"]'
		);
		if (existingOrgJsonLd) {
			existingOrgJsonLd.remove();
		}

		const orgJsonLd = document.createElement("script");
		orgJsonLd.type = "application/ld+json";
		orgJsonLd.setAttribute("data-seo", "organization");
		orgJsonLd.textContent = JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Organization",
			name: langContent.companyName,
			alternateName: "Omniflow",
			url: `${window.location.origin}/${i18n.language}`,
			logo: `${window.location.origin}/logo-blue.svg`,
			description: finalDescription,
			foundingDate: "2020",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Jl. Letjen S. Parman No. 28",
				addressLocality: "Grogol Petamburan, Jakarta Barat",
				postalCode: "11470",
				addressCountry: "ID",
			},
			contactPoint: [
				{
					"@type": "ContactPoint",
					telephone: "+62 821 2560 9413",
					contactType: "customer service",
					email: "contact@omniflow.id",
					availableLanguage:
						i18n.language === "en"
							? "English"
							: i18n.language === "id"
								? "Indonesian"
								: "Chinese",
				},
			],
			sameAs: [
				"https://www.facebook.com/omniflowid",
				"https://www.twitter.com/omniflowid",
				"https://www.linkedin.com/company/omniflowid",
				"https://www.instagram.com/omniflowid",
			],
		});
		document.head.appendChild(orgJsonLd);
	}, [
		finalTitle,
		finalDescription,
		finalKeywords,
		ogImage,
		currentUrl,
		type,
		publishedTime,
		modifiedTime,
		finalAuthor,
		section,
		tags,
		i18n.language,
		langContent,
		getLanguageUrls,
	]);

	return null;
}
