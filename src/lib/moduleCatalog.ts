import type { LucideIcon } from "lucide-react";
import {
	BarChart3,
	Bot,
	Boxes,
	Brain,
	Building2,
	CalendarClock,
	Coins,
	Contact,
	CreditCard,
	GraduationCap,
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
} from "lucide-react";

export type ModuleId =
	| "hris"
	| "accounting"
	| "sales"
	| "purchasing"
	| "inventory"
	| "asset-management"
	| "analytics"
	| "xrm"
	| "customers"
	| "ecommerce"
	| "pos"
	| "telemarketing"
	| "helpdesk"
	| "vecta"
	| "payment-gateway"
	| "lms"
	| "booking-engine"
	| "event-ticketing"
	| "habitat"
	| "property-management"
	| "simklinik"
	| "profilex"
	| "urls"
	| "bizzcard"
	| "ai"
	| "ecf";

export type ModuleCategoryKey = "core" | "customer" | "industry" | "tools";

export const categoryOrder: ModuleCategoryKey[] = [
	"core",
	"customer",
	"industry",
	"tools",
];

export interface ModuleCatalogItem {
	/** Canonical route slug, also used as the stable identifier. */
	id: ModuleId;
	category: ModuleCategoryKey;
	icon: LucideIcon;
	color: string;
	/** i18n key for the module display name. */
	titleKey: string;
	/** i18n key for the module short description. */
	descriptionKey: string;
	pageType: "dedicated" | "overview";
}

export const moduleCatalog: ModuleCatalogItem[] = [
	// Core operations
	{
		id: "hris",
		category: "core",
		icon: Users,
		color: "from-blue-500 to-blue-600",
		titleKey: "navigation.hris",
		descriptionKey: "modules.hris.description",
		pageType: "dedicated",
	},
	{
		id: "accounting",
		category: "core",
		icon: ReceiptText,
		color: "from-orange-500 to-orange-600",
		titleKey: "navigation.accounting",
		descriptionKey: "modules.accounting.description",
		pageType: "dedicated",
	},
	{
		id: "sales",
		category: "core",
		icon: TrendingUp,
		color: "from-blue-500 to-blue-600",
		titleKey: "navigation.sales",
		descriptionKey: "modules.sales.description",
		pageType: "dedicated",
	},
	{
		id: "purchasing",
		category: "core",
		icon: ShoppingCart,
		color: "from-blue-500 to-indigo-600",
		titleKey: "navigation.purchasing",
		descriptionKey: "modulesPage.modules.purchasing",
		pageType: "dedicated",
	},
	{
		id: "inventory",
		category: "core",
		icon: Boxes,
		color: "from-sky-500 to-blue-600",
		titleKey: "navigation.inventory",
		descriptionKey: "modules.inventory.description",
		pageType: "dedicated",
	},
	{
		id: "asset-management",
		category: "core",
		icon: Package,
		color: "from-indigo-500 to-sky-600",
		titleKey: "navigation.assetManagement",
		descriptionKey: "modulesPage.modules.assetManagement",
		pageType: "dedicated",
	},
	{
		id: "analytics",
		category: "core",
		icon: BarChart3,
		color: "from-fuchsia-500 to-fuchsia-600",
		titleKey: "navigation.analytics",
		descriptionKey: "modules.analytics.description",
		pageType: "dedicated",
	},
	// Customer & commerce
	{
		id: "xrm",
		category: "customer",
		icon: Contact,
		color: "from-purple-500 to-purple-600",
		titleKey: "navigation.xrm",
		descriptionKey: "modulesPage.modules.xrm",
		pageType: "dedicated",
	},
	{
		id: "customers",
		category: "customer",
		icon: UserRound,
		color: "from-rose-500 to-pink-600",
		titleKey: "navigation.customers",
		descriptionKey: "modulesPage.modules.customers",
		pageType: "dedicated",
	},
	{
		id: "ecommerce",
		category: "customer",
		icon: Store,
		color: "from-emerald-500 to-emerald-600",
		titleKey: "navigation.ecommerce",
		descriptionKey: "modulesPage.modules.ecommerce",
		pageType: "dedicated",
	},
	{
		id: "pos",
		category: "customer",
		icon: ShoppingBag,
		color: "from-red-500 to-red-600",
		titleKey: "navigation.pos",
		descriptionKey: "modules.pos.description",
		pageType: "dedicated",
	},
	{
		id: "telemarketing",
		category: "customer",
		icon: LifeBuoy,
		color: "from-yellow-500 to-yellow-600",
		titleKey: "navigation.telemarketing",
		descriptionKey: "modulesPage.modules.telemarketing",
		pageType: "dedicated",
	},
	{
		id: "helpdesk",
		category: "customer",
		icon: LifeBuoy,
		color: "from-blue-500 to-cyan-600",
		titleKey: "navigation.helpdesk",
		descriptionKey: "modulesPage.modules.helpdesk",
		pageType: "dedicated",
	},
	{
		id: "vecta",
		category: "customer",
		icon: Bot,
		color: "from-violet-500 to-indigo-600",
		titleKey: "navigation.vecta",
		descriptionKey: "modulesPage.modules.vecta",
		pageType: "overview",
	},
	{
		id: "payment-gateway",
		category: "customer",
		icon: WalletCards,
		color: "from-teal-500 to-teal-600",
		titleKey: "navigation.paymentGateway",
		descriptionKey: "modulesPage.modules.payment-gateway",
		pageType: "dedicated",
	},
	// Industry solutions
	{
		id: "lms",
		category: "industry",
		icon: GraduationCap,
		color: "from-cyan-500 to-cyan-600",
		titleKey: "navigation.lms",
		descriptionKey: "modules.lms.description",
		pageType: "dedicated",
	},
	{
		id: "booking-engine",
		category: "industry",
		icon: CalendarClock,
		color: "from-emerald-500 to-teal-600",
		titleKey: "navigation.bookingEngine",
		descriptionKey: "modulesPage.modules.bookingEngine",
		pageType: "dedicated",
	},
	{
		id: "event-ticketing",
		category: "industry",
		icon: Ticket,
		color: "from-pink-500 to-rose-600",
		titleKey: "navigation.eventTicketing",
		descriptionKey: "modulesPage.modules.eventTicketing",
		pageType: "dedicated",
	},
	{
		id: "habitat",
		category: "industry",
		icon: Home,
		color: "from-green-500 to-emerald-600",
		titleKey: "navigation.habitat",
		descriptionKey: "modulesPage.modules.habitat",
		pageType: "dedicated",
	},
	{
		id: "property-management",
		category: "industry",
		icon: Building2,
		color: "from-slate-500 to-gray-600",
		titleKey: "navigation.propertyManagement",
		descriptionKey: "modulesPage.modules.propertyManagement",
		pageType: "dedicated",
	},
	{
		id: "simklinik",
		category: "industry",
		icon: Stethoscope,
		color: "from-red-500 to-rose-600",
		titleKey: "navigation.simklinik",
		descriptionKey: "modulesPage.modules.simklinik",
		pageType: "dedicated",
	},
	{
		id: "profilex",
		category: "industry",
		icon: Brain,
		color: "from-purple-500 to-fuchsia-600",
		titleKey: "navigation.profilex",
		descriptionKey: "modulesPage.modules.profilex",
		pageType: "dedicated",
	},
	// Tools & add-ons
	{
		id: "urls",
		category: "tools",
		icon: Link2,
		color: "from-pink-500 to-pink-600",
		titleKey: "navigation.urls",
		descriptionKey: "modules.urls.description",
		pageType: "dedicated",
	},
	{
		id: "bizzcard",
		category: "tools",
		icon: CreditCard,
		color: "from-indigo-500 to-indigo-600",
		titleKey: "navigation.bizzcard",
		descriptionKey: "modules.bizzcard.description",
		pageType: "dedicated",
	},
	{
		id: "ai",
		category: "tools",
		icon: Sparkles,
		color: "from-violet-500 to-purple-600",
		titleKey: "navigation.ai",
		descriptionKey: "modulesPage.modules.ai",
		pageType: "dedicated",
	},
	{
		id: "ecf",
		category: "tools",
		icon: Coins,
		color: "from-amber-500 to-orange-600",
		titleKey: "navigation.ecf",
		descriptionKey: "modulesPage.modules.ecf",
		pageType: "dedicated",
	},
];

export const moduleSlugs: ModuleId[] = moduleCatalog.map((module) => module.id);

export function getModuleById(moduleId: ModuleId) {
	return moduleCatalog.find((module) => module.id === moduleId);
}

export const moduleOverviewAccentIcons: Partial<Record<ModuleId, LucideIcon>> =
	{
		vecta: Bot,
	};
