import { useTranslation } from "react-i18next";

interface StructuredDataProps {
	type?:
		| "Organization"
		| "WebSite"
		| "Article"
		| "SoftwareApplication"
		| "Service";
	data?: Record<string, unknown>;
}

export default function StructuredData({
	type = "Organization",
	data = {},
}: StructuredDataProps) {
	const { t, i18n } = useTranslation();

	// Language-specific content
	const getLanguageSpecificContent = () => {
		const content = {
			en: {
				companyName: "Omniflow.id",
				description: t("hero.subtitle"),
				locale: "en_US",
			},
			id: {
				companyName: "Omniflow.id",
				description:
					"Omniflow.id menghadirkan alat manajemen bisnis tingkat enterprise yang dirancang untuk menyederhanakan operasi, meningkatkan produktivitas, dan mempercepat pertumbuhan di seluruh organisasi Anda.",
				locale: "id_ID",
			},
			zh: {
				companyName: "Omniflow.id",
				description:
					"Omniflow.id提供企业级业务管理工具，旨在简化运营、提高生产力，并加速整个组织的增长。",
				locale: "zh_CN",
			},
		};

		return content[i18n.language as keyof typeof content] || content.en;
	};

	const langContent = getLanguageSpecificContent();

	const getOrganizationData = () => ({
		"@context": "https://schema.org",
		"@type": "Organization",
		name: langContent.companyName,
		alternateName: "Omniflow",
		url: `${window.location.origin}/${i18n.language}`,
		logo: `${window.location.origin}/logo-blue.svg`,
		description: langContent.description,
		foundingDate: "2020",
		inLanguage: i18n.language,
		founders: [
			{
				"@type": "Person",
				name: "Omniflow Team",
			},
		],
		address: {
			"@type": "PostalAddress",
			streetAddress: "Jl. Sudirman No. 123",
			addressLocality: "Jakarta Pusat",
			postalCode: "10220",
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
			{
				"@type": "ContactPoint",
				telephone: "+62 821 2560 9413",
				contactType: "sales",
				email: "sales@omniflow.id",
			},
		],
		sameAs: [
			"https://www.facebook.com/omniflowid",
			"https://www.twitter.com/omniflowid",
			"https://www.linkedin.com/company/omniflowid",
			"https://www.instagram.com/omniflowid",
		],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Enterprise Software Solutions",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "SoftwareApplication",
						name: "HRIS System",
						description: t("modules.hris.description"),
						applicationCategory: "BusinessApplication",
						operatingSystem: "Web Browser",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "SoftwareApplication",
						name: "ERP System",
						description: t("hero.subtitle"),
						applicationCategory: "BusinessApplication",
						operatingSystem: "Web Browser",
					},
				},
			],
		},
		...data,
	});

	const getWebSiteData = () => ({
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: langContent.companyName,
		url: `${window.location.origin}/${i18n.language}`,
		description: langContent.description,
		inLanguage: i18n.language,
		publisher: {
			"@type": "Organization",
			name: langContent.companyName,
		},
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${window.location.origin}/${i18n.language}/search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
		availableLanguage: ["en", "id", "zh"],
		...data,
	});

	const getSoftwareApplicationData = () => ({
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "Omniflow ERP System",
		description: langContent.description,
		url: `${window.location.origin}/${i18n.language}`,
		applicationCategory: "BusinessApplication",
		operatingSystem: "Web Browser",
		inLanguage: i18n.language,
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
			description: "Free trial available",
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "1250",
			bestRating: "5",
			worstRating: "1",
		},
		author: {
			"@type": "Organization",
			name: langContent.companyName,
		},
		datePublished: "2020-01-01",
		dateModified: new Date().toISOString().split("T")[0],
		screenshot:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
		softwareVersion: "2.0",
		requirements: "Modern web browser",
		fileSize: "N/A",
		installUrl: "https://omniflow.id/signup",
		downloadUrl: "https://omniflow.id/signup",
		supportingData: "https://omniflow.id/documentation",
		...data,
	});

	const getServiceData = () => ({
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Enterprise Resource Planning Solutions",
		description: langContent.description,
		inLanguage: i18n.language,
		provider: {
			"@type": "Organization",
			name: langContent.companyName,
		},
		areaServed: {
			"@type": "Country",
			name: "Indonesia",
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "ERP Services",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "HRIS Implementation",
						description: t("modules.hris.description"),
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Business Process Automation",
						description: "Automate your business processes",
					},
				},
			],
		},
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          author: {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          reviewBody: "Implementing Omniflow's HRIS has transformed our HR operations. The automation and efficiency gains are remarkable."
        }
      ],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "1250",
		},
		...data,
	});

	const getArticleData = () => ({
		"@context": "https://schema.org",
		"@type": "Article",
		headline: data.title || "Enterprise Insights",
		description: data.description || langContent.description,
		image:
			data.image ||
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
		inLanguage: i18n.language,
		author: {
			"@type": "Organization",
			name: langContent.companyName,
		},
		publisher: {
			"@type": "Organization",
			name: langContent.companyName,
			logo: {
				"@type": "ImageObject",
				url: `${window.location.origin}/logo-blue.svg`,
			},
		},
		datePublished: data.publishedTime || new Date().toISOString(),
		dateModified: data.modifiedTime || new Date().toISOString(),
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": window.location.href,
		},
		articleSection: data.section || "Business Technology",
		keywords: data.keywords || "ERP, Business Management, Technology",
		wordCount: data.wordCount || 1000,
		articleBody: data.content || "",
		...data,
	});

	const getStructuredData = () => {
		switch (type) {
			case "WebSite":
				return getWebSiteData();
			case "Article":
				return getArticleData();
			case "SoftwareApplication":
				return getSoftwareApplicationData();
			case "Service":
				return getServiceData();
			default:
				return getOrganizationData();
		}
	};

	const structuredData = getStructuredData();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData, null, 2),
			}}
		/>
	);
}
