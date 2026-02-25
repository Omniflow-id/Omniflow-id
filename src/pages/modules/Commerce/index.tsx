import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import SEOHead from "../../../components/SEOHead";
import StructuredData from "../../../components/StructuredData";
import Benefits from "./components/Benefits";
import CTASection from "./components/CTASection";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Screenshots from "./components/Screenshots";
import Testimonials from "./components/Testimonials";

export default function CommercePage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("commerce.title")}
				description={t("commerce.subtitle")}
				keywords="E-Commerce, Online Store, Shopping Cart, Product Management, Inventory, Payment Gateway, Indonesia E-Commerce, Omniflow"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow E-Commerce",
					description: t("commerce.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("commerce.cta.features.trial"),
					},
					featureList: [
						t("commerce.features.products.title"),
						t("commerce.features.inventory.title"),
						t("commerce.features.orders.title"),
						t("commerce.features.payments.title"),
						t("commerce.features.reports.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "E-Commerce Implementation Services",
					description: t("commerce.subtitle"),
					serviceType: "Online Store Management",
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
