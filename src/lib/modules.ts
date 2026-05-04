import {
	BarChart3,
	Boxes,
	Brain,
	Building2,
	CalendarClock,
	Coins,
	Contact,
	CreditCard,
	Bot,
	GraduationCap,
	Headset,
	Home,
	LifeBuoy,
	Link2,
	Package,
	ReceiptText,
	ShoppingBag,
	ShoppingCart,
	Sparkles,
	Stethoscope,
	Store,
	Ticket,
	TrendingUp,
	UserRound,
	Users,
	WalletCards,
	type LucideIcon,
} from "lucide-react";

export type ModuleEntry = {
	key: string;
	slug: string;
	icon: LucideIcon;
	color: string;
	titleKey: string;
	descKey: string;
};

export type ModuleCategoryKey = "core" | "customer" | "industry" | "tools";

export type ModuleCategory = {
	key: ModuleCategoryKey;
	modules: ModuleEntry[];
};

export const moduleCategories: ModuleCategory[] = [
	{
		key: "core",
		modules: [
			{ key: "hris", slug: "hris", icon: Users, color: "from-blue-500 to-blue-600", titleKey: "navigation.hris", descKey: "modules.hris.description" },
			{ key: "accounting", slug: "accounting", icon: ReceiptText, color: "from-orange-500 to-orange-600", titleKey: "navigation.accounting", descKey: "modules.accounting.description" },
			{ key: "sales", slug: "sales", icon: TrendingUp, color: "from-blue-500 to-blue-600", titleKey: "navigation.sales", descKey: "modules.sales.description" },
			{ key: "purchasing", slug: "purchasing", icon: ShoppingCart, color: "from-blue-500 to-indigo-600", titleKey: "navigation.purchasing", descKey: "modulesPage.modules.purchasing" },
			{ key: "inventory", slug: "inventory", icon: Boxes, color: "from-sky-500 to-blue-600", titleKey: "navigation.inventory", descKey: "modules.inventory.description" },
			{ key: "assetManagement", slug: "asset-management", icon: Package, color: "from-indigo-500 to-sky-600", titleKey: "navigation.assetManagement", descKey: "modulesPage.modules.assetManagement" },
			{ key: "analytics", slug: "analytics", icon: BarChart3, color: "from-fuchsia-500 to-fuchsia-600", titleKey: "navigation.analytics", descKey: "modules.analytics.description" },
		],
	},
	{
		key: "customer",
		modules: [
			{ key: "xrm", slug: "xrm", icon: Contact, color: "from-purple-500 to-purple-600", titleKey: "navigation.xrm", descKey: "modulesPage.modules.xrm" },
			{ key: "customers", slug: "customers", icon: UserRound, color: "from-rose-500 to-pink-600", titleKey: "navigation.customers", descKey: "modulesPage.modules.customers" },
			{ key: "ecommerce", slug: "ecommerce", icon: Store, color: "from-emerald-500 to-emerald-600", titleKey: "navigation.ecommerce", descKey: "modulesPage.modules.ecommerce" },
			{ key: "pos", slug: "pos", icon: ShoppingBag, color: "from-red-500 to-red-600", titleKey: "navigation.pos", descKey: "modules.pos.description" },
			{ key: "telemarketing", slug: "telemarketing", icon: Headset, color: "from-yellow-500 to-yellow-600", titleKey: "navigation.telemarketing", descKey: "modulesPage.modules.telemarketing" },
			{ key: "helpdesk", slug: "helpdesk", icon: LifeBuoy, color: "from-blue-500 to-cyan-600", titleKey: "navigation.helpdesk", descKey: "modulesPage.modules.helpdesk" },
			{ key: "vecta", slug: "vecta", icon: Bot, color: "from-violet-500 to-indigo-600", titleKey: "navigation.vecta", descKey: "modulesPage.modules.vecta" },
			{ key: "payment-gateway", slug: "payment-gateway", icon: WalletCards, color: "from-teal-500 to-teal-600", titleKey: "navigation.paymentGateway", descKey: "modulesPage.modules.payment-gateway" },
		],
	},
	{
		key: "industry",
		modules: [
			{ key: "lms", slug: "lms", icon: GraduationCap, color: "from-cyan-500 to-cyan-600", titleKey: "navigation.lms", descKey: "modules.lms.description" },
			{ key: "bookingEngine", slug: "booking-engine", icon: CalendarClock, color: "from-emerald-500 to-teal-600", titleKey: "navigation.bookingEngine", descKey: "modulesPage.modules.bookingEngine" },
			{ key: "eventTicketing", slug: "event-ticketing", icon: Ticket, color: "from-pink-500 to-rose-600", titleKey: "navigation.eventTicketing", descKey: "modulesPage.modules.eventTicketing" },
			{ key: "habitat", slug: "habitat", icon: Home, color: "from-green-500 to-emerald-600", titleKey: "navigation.habitat", descKey: "modulesPage.modules.habitat" },
			{ key: "propertyManagement", slug: "property-management", icon: Building2, color: "from-slate-500 to-gray-600", titleKey: "navigation.propertyManagement", descKey: "modulesPage.modules.propertyManagement" },
			{ key: "simklinik", slug: "simklinik", icon: Stethoscope, color: "from-red-500 to-rose-600", titleKey: "navigation.simklinik", descKey: "modulesPage.modules.simklinik" },
			{ key: "profilex", slug: "profilex", icon: Brain, color: "from-purple-500 to-fuchsia-600", titleKey: "navigation.profilex", descKey: "modulesPage.modules.profilex" },
		],
	},
	{
		key: "tools",
		modules: [
			{ key: "urls", slug: "urls", icon: Link2, color: "from-pink-500 to-pink-600", titleKey: "navigation.urls", descKey: "modules.urls.description" },
			{ key: "bizzcard", slug: "bizzcard", icon: CreditCard, color: "from-indigo-500 to-indigo-600", titleKey: "navigation.bizzcard", descKey: "modules.bizzcard.description" },
			{ key: "ai", slug: "ai", icon: Sparkles, color: "from-violet-500 to-purple-600", titleKey: "navigation.ai", descKey: "modulesPage.modules.ai" },
			{ key: "ecf", slug: "ecf", icon: Coins, color: "from-amber-500 to-orange-600", titleKey: "navigation.ecf", descKey: "modulesPage.modules.ecf" },
		],
	},
];
