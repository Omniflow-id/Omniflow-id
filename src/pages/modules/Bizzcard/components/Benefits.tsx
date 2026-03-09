import {
	BarChart3,
	Bolt,
	Shield,
	Smartphone,
	Star,
	Wallet,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const benefits = [
	{
		icon: Bolt,
		key: "instant",
	},
	{
		icon: BarChart3,
		key: "analytics",
	},
	{
		icon: Smartphone,
		key: "mobile",
	},
	{
		icon: Shield,
		key: "secure",
	},
	{
		icon: Wallet,
		key: "saveCost",
	},
	{
		icon: Star,
		key: "professional",
	},
];

export default function Benefits() {
	const { t } = useTranslation();

	return (
		<section className="section-benefits">
			<div className="container-enterprise">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						{t("bizzcard.benefits.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-4">
						{t("bizzcard.benefits.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary">
						{t("bizzcard.benefits.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => (
						<div
							key={index}
							className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl"
						>
							<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
								<benefit.icon className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-enterprise-primary mb-3">
								{t(`bizzcard.benefits.${benefit.key}.title`)}
							</h3>
							<p className="text-enterprise-secondary">
								{t(`bizzcard.benefits.${benefit.key}.description`)}
							</p>
						</div>
					))}
				</div>

				<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
					<div className="text-center">
						<div className="text-4xl font-bold text-blue-600 mb-2">
							{t("bizzcard.benefits.stats.scans")}
						</div>
						<div className="text-enterprise-muted">
							{t("bizzcard.benefits.stats.scansLabel")}
						</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-blue-600 mb-2">
							{t("bizzcard.benefits.stats.saved")}
						</div>
						<div className="text-enterprise-muted">
							{t("bizzcard.benefits.stats.savedLabel")}
						</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-blue-600 mb-2">
							{t("bizzcard.benefits.stats.time")}
						</div>
						<div className="text-enterprise-muted">
							{t("bizzcard.benefits.stats.timeLabel")}
						</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-blue-600 mb-2">
							{t("bizzcard.benefits.stats.support")}
						</div>
						<div className="text-enterprise-muted">
							{t("bizzcard.benefits.stats.supportLabel")}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
