import {
	BoxesIcon,
	Brain,
	Briefcase,
	Calculator,
	CreditCard,
	Factory,
	GraduationCap,
	HeartHandshake,
	Megaphone,
	Package,
	Settings,
	ShoppingCart,
	Store,
	TrendingUp,
	Truck,
	UserCheck,
	Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const moduleKeys = [
	"hris",
	"stock",
	"sales",
	"accounting",
	"pos",
	"customers",
	"crm",
	"project",
	"marketing",
	"lms",
	"payment",
	"inventory",
	"ai",
	"admin",
	"manufacturing",
	"supply",
	"procurement",
];

const moduleIcons = [
	Users,
	BoxesIcon,
	TrendingUp,
	Calculator,
	Store,
	UserCheck,
	HeartHandshake,
	Briefcase,
	Megaphone,
	GraduationCap,
	CreditCard,
	Package,
	Brain,
	Settings,
	Factory,
	Truck,
	ShoppingCart,
];

const moduleColors = [
	"from-blue-500 to-blue-600",
	"from-emerald-500 to-emerald-600",
	"from-purple-500 to-purple-600",
	"from-orange-500 to-orange-600",
	"from-pink-500 to-pink-600",
	"from-indigo-500 to-indigo-600",
	"from-red-500 to-red-600",
	"from-cyan-500 to-cyan-600",
	"from-yellow-500 to-yellow-600",
	"from-teal-500 to-teal-600",
	"from-violet-500 to-violet-600",
	"from-lime-500 to-lime-600",
	"from-rose-500 to-rose-600",
	"from-slate-500 to-slate-600",
	"from-amber-500 to-amber-600",
	"from-green-500 to-green-600",
	"from-blue-500 to-indigo-600",
];

export default function Modules() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						{t("modules.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">{t("modules.title")}</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("modules.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{moduleKeys.map((moduleKey, index) => {
						const Icon = moduleIcons[index];
						const color = moduleColors[index];
						return (
							<div
								key={moduleKey}
								className="card-feature group cursor-pointer"
							>
								<div
									className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${color} mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<Icon className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors">
									{t(`modules.${moduleKey}.name`)}
								</h3>
								<p className="text-enterprise-secondary leading-relaxed">
									{t(`modules.${moduleKey}.description`)}
								</p>
								<div className="mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
									{t("common.learnMore")} →
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
