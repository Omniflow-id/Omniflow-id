import {
	ArrowRight,
	Briefcase,
	Calculator,
	CreditCard,
	GraduationCap,
	HeartHandshake,
	Link as LinkIcon,
	Megaphone,
	ShoppingCart,
	Store,
	Users,
	Layout,
	Database,
	Server,
	BarChart,
	TrendingUp,
	Package,
	Boxes,
	Brain,
	Bot,
	Calendar,
	Coins,
	Ticket,
	Home,
	Headphones,
	Building,
	HeartPulse,
} from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import { getCurrentLocaleFromPath, getLangPrefix } from "../../lib/website";

const modules = [
	{
		key: "hris",
		icon: Users,
		color: "from-blue-500 to-blue-600",
	},
	{
		key: "ecommerce",
		icon: ShoppingCart,
		color: "from-emerald-500 to-emerald-600",
	},
	{
		key: "xrm",
		icon: HeartHandshake,
		color: "from-purple-500 to-purple-600",
	},
	{
		key: "accounting",
		icon: Calculator,
		color: "from-orange-500 to-orange-600",
	},
	{
		key: "analytics",
		icon: BarChart,
		color: "from-fuchsia-500 to-fuchsia-600",
	},
	{
		key: "urls",
		icon: LinkIcon,
		color: "from-pink-500 to-pink-600",
	},
	{
		key: "bizzcard",
		icon: Briefcase,
		color: "from-indigo-500 to-indigo-600",
	},
	{
		key: "pos",
		icon: Store,
		color: "from-red-500 to-red-600",
	},
	{
		key: "lms",
		icon: GraduationCap,
		color: "from-cyan-500 to-cyan-600",
	},
	{
		key: "telemarketing",
		icon: Megaphone,
		color: "from-yellow-500 to-yellow-600",
	},
	{
		key: "payment-gateway",
		icon: CreditCard,
		color: "from-teal-500 to-teal-600",
	},
	{
		key: "sales",
		icon: TrendingUp,
		color: "from-blue-500 to-blue-600",
	},
	{
		key: "purchasing",
		icon: ShoppingCart,
		color: "from-blue-500 to-indigo-600",
	},
	{
		key: "assetManagement",
		icon: Package,
		color: "from-indigo-500 to-sky-600",
	},
	{
		key: "inventory",
		icon: Boxes,
		color: "from-sky-500 to-blue-600",
	},
	{
		key: "ai",
		icon: Brain,
		color: "from-violet-500 to-purple-600",
	},
	{
		key: "bookingEngine",
		icon: Calendar,
		color: "from-emerald-500 to-teal-600",
	},
	{
		key: "customers",
		icon: Users,
		color: "from-rose-500 to-pink-600",
	},
	{
		key: "ecf",
		icon: Coins,
		color: "from-amber-500 to-orange-600",
	},
	{
		key: "eventTicketing",
		icon: Ticket,
		color: "from-pink-500 to-rose-600",
	},
	{
		key: "habitat",
		icon: Home,
		color: "from-green-500 to-emerald-600",
	},
	{
		key: "helpdesk",
		icon: Headphones,
		color: "from-blue-500 to-cyan-600",
	},
	{
		key: "vecta",
		icon: Bot,
		color: "from-violet-500 to-indigo-600",
	},
	{
		key: "profilex",
		icon: Brain,
		color: "from-purple-500 to-fuchsia-600",
	},
	{
		key: "propertyManagement",
		icon: Building,
		color: "from-slate-500 to-gray-600",
	},
	{
		key: "simklinik",
		icon: HeartPulse,
		color: "from-red-500 to-rose-600",
	},
];

export default function ModulesPage() {
	const { t } = useTranslation();
	const location = useLocation();
	const currentLang = getCurrentLocaleFromPath(location.pathname);
	const langPrefix = getLangPrefix(currentLang);

	const getModulePath = (moduleKey: string) => {
		const slugMap: Record<string, string> = {
			assetManagement: "asset-management",
			bookingEngine: "booking-engine",
			eventTicketing: "event-ticketing",
			propertyManagement: "property-management",
		};
		const slug = slugMap[moduleKey] ?? moduleKey;
		return `${langPrefix}/modules/${slug}`;
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("modulesPage.title")}
				description={t("modulesPage.subtitle")}
				keywords="ERP modules, business software modules, HRIS, accounting, POS, CRM, LMS, Omniflow modules"
				type="website"
			/>

			<section className="section-hero relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
				{/* Background Decorations */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
					<div className="absolute top-[15%] left-[-5%] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-orb-float"></div>
					<div className="absolute bottom-[-10%] right-[5%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-orb-float" style={{ animationDelay: "-7s" }}></div>
					
					{/* Grid Pattern */}
					<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
				</div>

				<div className="container-enterprise relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8 animate-fade-in-left">
							<div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-bold shadow-sm border border-blue-200">
								<Layout className="h-4 w-4 mr-2 text-blue-600" />
								{t("modulesPage.badge")}
							</div>

							<h1 className="text-enterprise-primary leading-tight">
								{t("modulesPage.title")}
							</h1>

							<p className="text-xl text-enterprise-secondary max-w-2xl leading-relaxed">
								{t("modulesPage.subtitle")}
							</p>

							<div className="flex flex-col sm:flex-row gap-5">
								<Link to={`${langPrefix}/contact`} className="btn-primary group px-10">
									{t("modulesPage.getStarted")}
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>

						<div className="relative h-[550px] flex items-center justify-center animate-fade-in-right">
							{/* Large Floating Visual Element */}
							<div className="relative z-10 w-full max-w-lg">
								<div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-full blur-3xl animate-pulse"></div>
								<div className="relative glass-card bg-white/40 border-white/40 p-3 rounded-[2.5rem] shadow-2xl backdrop-blur-md">
									<img
										src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
										alt="Omniflow Modules"
										className="relative rounded-[2rem] w-full h-full object-cover shadow-inner"
									/>
								</div>
							</div>

							{/* Floating Icons as decorative elements */}
							<div className="absolute top-10 -left-10 w-20 h-20 bg-white p-5 rounded-3xl shadow-xl border border-gray-100 animate-float flex items-center justify-center">
								<Users className="h-10 w-10 text-blue-600" />
							</div>
							
							<div className="absolute -top-6 right-20 w-16 h-16 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 animate-float-slow flex items-center justify-center">
								<Database className="h-8 w-8 text-indigo-600" />
							</div>

							<div className="absolute bottom-10 -right-10 w-24 h-24 bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-100 animate-float flex items-center justify-center" style={{ animationDelay: "-3s" }}>
								<Calculator className="h-12 w-12 text-emerald-600" />
							</div>

							<div className="absolute -bottom-10 left-20 w-16 h-16 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 animate-float-slow" style={{ animationDelay: "-5s" }}>
								<Server className="h-8 w-8 text-purple-600" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-enterprise bg-white py-20">
				<div className="container-enterprise">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{modules.map((module) => {
							const Icon = module.icon;
							return (
								<Link
									key={module.key}
									to={getModulePath(module.key)}
									className="card-feature group cursor-pointer"
								>
								<div
									className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${module.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
										<Icon className="h-8 w-8 text-white" />
									</div>
									<h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors">
										{t(
											`navigation.${module.key === "payment-gateway" ? "paymentGateway" : module.key}`
										)}
									</h3>
									<p className="text-enterprise-secondary leading-relaxed">
										{t(`modulesPage.modules.${module.key}`)}
									</p>
									<div className="mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
										{t("common.learnMore")} →
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
