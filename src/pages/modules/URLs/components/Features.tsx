import {
	BarChart3,
	Globe,
	Link,
	Lock,
	QrCode,
	Shield,
	Timer,
	Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
	{
		icon: Link,
		key: "shortener",
	},
	{
		icon: BarChart3,
		key: "analytics",
	},
	{
		icon: QrCode,
		key: "qrcode",
	},
	{
		icon: Globe,
		key: "customDomain",
	},
	{
		icon: Timer,
		key: "expiration",
	},
	{
		icon: Lock,
		key: "password",
	},
	{
		icon: Users,
		key: "team",
	},
	{
		icon: Shield,
		key: "security",
	},
];

export default function Features() {
	const { t } = useTranslation();

	return (
		<section className="section-features">
			<div className="container-enterprise">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						{t("urls.features.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-4">
						{t("urls.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary">
						{t("urls.features.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-enterprise transition-all duration-300"
						>
							<div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
								<feature.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
							</div>
							<h3 className="text-xl font-bold text-enterprise-primary mb-3">
								{t(`urls.features.${feature.key}.title`)}
							</h3>
							<p className="text-enterprise-secondary">
								{t(`urls.features.${feature.key}.description`)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
