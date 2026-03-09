import {
	BarChart3,
	Contact,
	Download,
	Globe,
	Nfc,
	QrCode,
	Smartphone,
	Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
	{
		icon: Contact,
		key: "digitalCard",
	},
	{
		icon: QrCode,
		key: "qrCode",
	},
	{
		icon: Nfc,
		key: "nfc",
	},
	{
		icon: BarChart3,
		key: "analytics",
	},
	{
		icon: Download,
		key: "vcard",
	},
	{
		icon: Users,
		key: "team",
	},
	{
		icon: Globe,
		key: "customDomain",
	},
	{
		icon: Smartphone,
		key: "responsive",
	},
];

export default function Features() {
	const { t } = useTranslation();

	return (
		<section className="section-features">
			<div className="container-enterprise">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
						{t("bizzcard.features.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-4">
						{t("bizzcard.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary">
						{t("bizzcard.features.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-enterprise transition-all duration-300"
						>
							<div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
								<feature.icon className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors" />
							</div>
							<h3 className="text-xl font-bold text-enterprise-primary mb-3">
								{t(`bizzcard.features.${feature.key}.title`)}
							</h3>
							<p className="text-enterprise-secondary">
								{t(`bizzcard.features.${feature.key}.description`)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
