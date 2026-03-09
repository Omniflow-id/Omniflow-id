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

export default function BizzcardPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("bizzcard.hero.title")}
				description={t("bizzcard.hero.subtitle")}
				keywords="Digital Business Card, Online Business Card, vCard, QR Code Business Card, Contactless Card, Digital Card, Electronic Business Card, Virtual Business Card, NFC Business Card, bizzcard Indonesia"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Bizzcard",
					description: t("bizzcard.hero.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("bizzcard.cta.getStarted"),
					},
					featureList: [
						t("bizzcard.features.digitalCard.title"),
						t("bizzcard.features.qrCode.title"),
						t("bizzcard.features.nfc.title"),
						t("bizzcard.features.analytics.title"),
					],
				}}
			/>

			<StructuredData
				type="Service"
				data={{
					name: "Bizzcard Implementation Services",
					description: t("bizzcard.hero.subtitle"),
					serviceType: "Digital Business Card System",
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
