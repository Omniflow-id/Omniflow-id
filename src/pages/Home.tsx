import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Advantages from "../components/Advantages";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Modules from "../components/Modules";
import SEOHead from "../components/SEOHead";
import StructuredData from "../components/StructuredData";

export default function HomePage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("hero.title")}
				description={t("hero.subtitle")}
				keywords="ERP Software, HRIS, Business Management, Enterprise Solutions, Omniflow, Indonesia, Sistem Manajemen Bisnis, Human Resources, Accounting Software, CRM System"
				type="website"
			/>
			<StructuredData type="WebSite" />
			<StructuredData type="Organization" />
			<StructuredData type="SoftwareApplication" />

			<Hero />
			<Modules />
			<Advantages />
			<FAQ />
			<Contact />
		</>
	);
}
