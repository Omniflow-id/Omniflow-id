import { ShoppingCart, Package, CreditCard, TrendingUp, Shield, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
	const { t } = useTranslation();

	return (
		<section className="section-hero">
			<div className="container-enterprise">
				<div className="text-center max-w-4xl mx-auto">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						<ShoppingCart className="h-4 w-4 mr-2" />
						{t("commerce.hero.badge")}
					</div>
					<h1 className="text-enterprise-primary mb-6">
						{t("commerce.hero.title")}
					</h1>
					<p className="text-xl text-enterprise-secondary mb-12">
						{t("commerce.hero.subtitle")}
					</p>
				</div>
			</div>
		</section>
	);
}
