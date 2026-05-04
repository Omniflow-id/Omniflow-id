import type { LucideIcon } from "lucide-react";
import {
	BarChart3,
	Bot,
	Boxes,
	Briefcase,
	Building2,
	CalendarRange,
	CreditCard,
	GraduationCap,
	Headset,
	HeartHandshake,
	Landmark,
	Link2,
	Package,
	ReceiptText,
	ShieldCheck,
	ShoppingBag,
	ShoppingCart,
	Store,
	Ticket,
	TrendingUp,
	Users,
} from "lucide-react";

export type ModuleId =
	| "hris"
	| "ecommerce"
	| "vecta"
	| "xrm"
	| "accounting"
	| "analytics"
	| "helpdesk"
	| "urls"
	| "bizzcard"
	| "pos"
	| "lms"
	| "telemarketing"
	| "payment-gateway"
	| "sales"
	| "purchasing"
	| "inventory"
	| "asset-management"
	| "booking-engine"
	| "event-ticketing"
	| "property-management-system"
	| "habitat"
	| "profilex"
	| "ecf";

export interface ModuleCatalogItem {
	id: ModuleId;
	href: string;
	icon: LucideIcon;
	color: string;
	titleKey: string;
	descriptionKey: string;
	pageType: "dedicated" | "overview";
}

export const moduleCatalog: ModuleCatalogItem[] = [
	{
		id: "hris",
		href: "/modules/hris",
		icon: Users,
		color: "from-blue-500 to-blue-600",
		titleKey: "navigation.hris",
		descriptionKey: "modulesPage.modules.hris",
		pageType: "dedicated",
	},
	{
		id: "ecommerce",
		href: "/modules/ecommerce",
		icon: Store,
		color: "from-emerald-500 to-emerald-600",
		titleKey: "navigation.ecommerce",
		descriptionKey: "modulesPage.modules.ecommerce",
		pageType: "dedicated",
	},
	{
		id: "vecta",
		href: "/modules/vecta",
		icon: Bot,
		color: "from-violet-500 to-indigo-600",
		titleKey: "navigation.vecta",
		descriptionKey: "modulesPage.modules.vecta",
		pageType: "overview",
	},
	{
		id: "xrm",
		href: "/modules/xrm",
		icon: HeartHandshake,
		color: "from-purple-500 to-purple-600",
		titleKey: "navigation.xrm",
		descriptionKey: "modulesPage.modules.xrm",
		pageType: "dedicated",
	},
	{
		id: "accounting",
		href: "/modules/accounting",
		icon: ReceiptText,
		color: "from-orange-500 to-orange-600",
		titleKey: "navigation.accounting",
		descriptionKey: "modulesPage.modules.accounting",
		pageType: "dedicated",
	},
	{
		id: "analytics",
		href: "/modules/analytics",
		icon: BarChart3,
		color: "from-fuchsia-500 to-fuchsia-600",
		titleKey: "navigation.analytics",
		descriptionKey: "modulesPage.modules.analytics",
		pageType: "dedicated",
	},
	{
		id: "helpdesk",
		href: "/modules/helpdesk",
		icon: Headset,
		color: "from-amber-500 to-orange-600",
		titleKey: "navigation.helpdesk",
		descriptionKey: "modulesPage.modules.helpdesk",
		pageType: "overview",
	},
	{
		id: "urls",
		href: "/modules/urls",
		icon: Link2,
		color: "from-pink-500 to-pink-600",
		titleKey: "navigation.urls",
		descriptionKey: "modulesPage.modules.urls",
		pageType: "dedicated",
	},
	{
		id: "bizzcard",
		href: "/modules/bizzcard",
		icon: CreditCard,
		color: "from-indigo-500 to-indigo-600",
		titleKey: "navigation.bizzcard",
		descriptionKey: "modulesPage.modules.bizzcard",
		pageType: "dedicated",
	},
	{
		id: "pos",
		href: "/modules/pos",
		icon: ShoppingBag,
		color: "from-red-500 to-red-600",
		titleKey: "navigation.pos",
		descriptionKey: "modulesPage.modules.pos",
		pageType: "dedicated",
	},
	{
		id: "lms",
		href: "/modules/lms",
		icon: GraduationCap,
		color: "from-cyan-500 to-cyan-600",
		titleKey: "navigation.lms",
		descriptionKey: "modulesPage.modules.lms",
		pageType: "dedicated",
	},
	{
		id: "telemarketing",
		href: "/modules/telemarketing",
		icon: Headset,
		color: "from-yellow-500 to-yellow-600",
		titleKey: "navigation.telemarketing",
		descriptionKey: "modulesPage.modules.telemarketing",
		pageType: "dedicated",
	},
	{
		id: "payment-gateway",
		href: "/modules/payment-gateway",
		icon: CreditCard,
		color: "from-teal-500 to-teal-600",
		titleKey: "navigation.paymentGateway",
		descriptionKey: "modulesPage.modules.payment-gateway",
		pageType: "dedicated",
	},
	{
		id: "sales",
		href: "/modules/sales",
		icon: TrendingUp,
		color: "from-blue-500 to-blue-600",
		titleKey: "navigation.sales",
		descriptionKey: "modulesPage.modules.sales",
		pageType: "dedicated",
	},
	{
		id: "purchasing",
		href: "/modules/purchasing",
		icon: ShoppingCart,
		color: "from-blue-500 to-indigo-600",
		titleKey: "navigation.purchasing",
		descriptionKey: "modulesPage.modules.purchasing",
		pageType: "dedicated",
	},
	{
		id: "inventory",
		href: "/modules/inventory",
		icon: Boxes,
		color: "from-sky-500 to-blue-600",
		titleKey: "navigation.inventory",
		descriptionKey: "modulesPage.modules.inventory",
		pageType: "dedicated",
	},
	{
		id: "asset-management",
		href: "/modules/asset-management",
		icon: Package,
		color: "from-indigo-500 to-sky-600",
		titleKey: "navigation.assetManagement",
		descriptionKey: "modulesPage.modules.assetManagement",
		pageType: "dedicated",
	},
	{
		id: "booking-engine",
		href: "/modules/booking-engine",
		icon: CalendarRange,
		color: "from-emerald-500 to-teal-600",
		titleKey: "navigation.bookingEngine",
		descriptionKey: "modulesPage.modules.booking-engine",
		pageType: "overview",
	},
	{
		id: "event-ticketing",
		href: "/modules/event-ticketing",
		icon: Ticket,
		color: "from-rose-500 to-pink-600",
		titleKey: "navigation.eventTicketing",
		descriptionKey: "modulesPage.modules.event-ticketing",
		pageType: "overview",
	},
	{
		id: "property-management-system",
		href: "/modules/property-management-system",
		icon: Building2,
		color: "from-slate-500 to-slate-700",
		titleKey: "navigation.propertyManagement",
		descriptionKey: "modulesPage.modules.property-management-system",
		pageType: "overview",
	},
	{
		id: "habitat",
		href: "/modules/habitat",
		icon: Building2,
		color: "from-green-500 to-emerald-600",
		titleKey: "navigation.habitat",
		descriptionKey: "modulesPage.modules.habitat",
		pageType: "overview",
	},
	{
		id: "profilex",
		href: "/modules/profilex",
		icon: Briefcase,
		color: "from-cyan-500 to-blue-600",
		titleKey: "navigation.profilex",
		descriptionKey: "modulesPage.modules.profilex",
		pageType: "overview",
	},
	{
		id: "ecf",
		href: "/modules/ecf",
		icon: Landmark,
		color: "from-lime-500 to-green-600",
		titleKey: "navigation.ecf",
		descriptionKey: "modulesPage.modules.ecf",
		pageType: "overview",
	},
];

export const moduleOverviewIds: ModuleId[] = moduleCatalog
	.filter((module) => module.pageType === "overview")
	.map((module) => module.id);

export function getModuleById(moduleId: ModuleId) {
	return moduleCatalog.find((module) => module.id === moduleId);
}

export function getModuleByHref(pathname: string) {
	return moduleCatalog.find((module) => module.href === pathname);
}

export const moduleOverviewAccentIcons: Partial<Record<ModuleId, LucideIcon>> = {
	vecta: Bot,
	helpdesk: ShieldCheck,
	"booking-engine": CalendarRange,
	"event-ticketing": Ticket,
	"property-management-system": Building2,
	habitat: Building2,
	profilex: Briefcase,
	ecf: Landmark,
};
