import { useEffect } from "react";
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

export default function SEOHead({
	title,
	description,
	keywords,
	image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
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
					"ERP Software, HRIS, Business Management, Enterprise Solutions, Omniflow, Indonesia, Human Resources, Accounting Software, CRM System, Digital Transformation, Business Automation",
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
					"Software ERP, HRIS, Manajemen Bisnis, Solusi Enterprise, Omniflow, Indonesia, Sistem Manajemen Bisnis, Sumber Daya Manusia, Software Akuntansi, Sistem CRM, Transformasi Digital, Otomasi Bisnis",
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
					"ERP软件, 人力资源信息系统, 业务管理, 企业解决方案, Omniflow, 印度尼西亚, 业务管理系统, 人力资源, 会计软件, 客户关系管理系统, 数字化转型, 业务自动化",
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
	const finalKeywords = keywords || langContent.keywords;
	const finalAuthor = author || langContent.author;

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

	// Language-specific Open Graph images
	const getLanguageSpecificImage = () => {
		const baseImageUrl =
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";

		// You can customize images per language if needed
		const languageImages = {
			en: baseImageUrl,
			id: baseImageUrl,
			zh: baseImageUrl,
		};

		return (
			image ||
			languageImages[i18n.language as keyof typeof languageImages] ||
			baseImageUrl
		);
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
		updateMetaTag("og:image", getLanguageSpecificImage(), true);
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

		// Twitter Card tags with language-specific content
		updateMetaTag("twitter:card", "summary_large_image");
		updateMetaTag("twitter:title", finalTitle);
		updateMetaTag("twitter:description", finalDescription);
		updateMetaTag("twitter:image", getLanguageSpecificImage());
		updateMetaTag("twitter:site", "@omniflowid");
		updateMetaTag("twitter:creator", "@omniflowid");
		updateMetaTag("twitter:image:alt", finalTitle);

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
		getLanguageSpecificImage(),
		currentUrl,
		type,
		publishedTime,
		modifiedTime,
		finalAuthor,
		section,
		tags,
		i18n.language,
		location.pathname,
		langContent,
	]);

	return null;
}
