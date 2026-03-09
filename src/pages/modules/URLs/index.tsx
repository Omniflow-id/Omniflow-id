import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../../components/SEOHead";
import StructuredData from "../../../components/StructuredData";
import Benefits from "./components/Benefits";
import CTASection from "./components/CTASection";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Screenshots from "./components/Screenshots";
import Testimonials from "./components/Testimonials";

export default function URLsPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("urls.hero.title")}
				description={t("urls.hero.subtitle")}
				keywords="URL Shortener, Link Shortener, URL Redirect, Link Management, QR Code Generator, URL Analytics, Custom URL, URL Tracking, short link, bitly alternative, shorten url Indonesia"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow URLs",
					description: t("urls.hero.subtitle"),
					applicationCategory: "UtilitiesApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("urls.cta.getStarted"),
					},
					featureList: [
						t("urls.features.shortener.title"),
						t("urls.features.analytics.title"),
						t("urls.features.qrcode.title"),
						t("urls.features.customDomain.title"),
					],
				}}
			/>

			<StructuredData
				type="Service"
				data={{
					name: "URLs Implementation Services",
					description: t("urls.hero.subtitle"),
					serviceType: "URL Management System",
				}}
			/>

			<div className="min-h-screen bg-white">
				<HeroSection />
				<Features />
				<Screenshots />
				<Benefits />
				<Testimonials />
				<CTASection />
			</div>
		</>
	);
}
