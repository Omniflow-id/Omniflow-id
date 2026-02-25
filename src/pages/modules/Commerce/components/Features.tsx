import { ShoppingCart, BarChart3, CreditCard, Lock, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
	const { t } = useTranslation();

	const features = [
		{
			icon: <Package className="h-12 w-12 text-blue-600" />,
			title: t("commerce.features.products.title"),
			description: t("commerce.features.products.description"),
		},
		{
			icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
			title: t("commerce.features.inventory.title"),
			description: t("commerce.features.inventory.description"),
		},
		{
			icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
			title: t("commerce.features.orders.title"),
			description: t("commerce.features.orders.description"),
		},
		{
			icon: <CreditCard className="h-12 w-12 text-blue-600" />,
			title: t("commerce.features.payments.title"),
			description: t("commerce.features.payments.description"),
		},
		{
			icon: <Lock className="h-12 w-12 text-blue-600" />,
			title: t("commerce.features.reports.title"),
			description: t("commerce.features.reports.description"),
		},
		{
			icon: <Zap className="h-12 w-12 text-blue-600" />,
			title: t("commerce.features.analytics.title"),
			description: t("commerce.features.analytics.description"),
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("commerce.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("commerce.features.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div key={index} className="card-enterprise p-8 text-center">
							<div className="flex justify-center mb-4">
								{feature.icon}
							</div>
							<h3 className="text-xl font-bold text-enterprise-primary mb-2">
								{feature.title}
							</h3>
							<p className="text-enterprise-secondary">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
