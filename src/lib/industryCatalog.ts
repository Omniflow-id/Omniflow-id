import type { LucideIcon } from "lucide-react";
import {
	Briefcase,
	Building2,
	Car,
	Dumbbell,
	GraduationCap,
	PawPrint,
	Scissors,
	Stethoscope,
	Trophy,
} from "lucide-react";

export interface IndustryCategory {
	id: string;
	icon: LucideIcon;
	color: string;
}

// Category metadata only. Human-readable titles, taglines, and the list of
// verticals live in i18n under `industriesPage.categories.<id>` so copy can be
// translated per locale without touching this file.
export const industryCatalog: IndustryCategory[] = [
	{
		id: "fitness-wellness",
		icon: Dumbbell,
		color: "from-rose-500 to-orange-500",
	},
	{
		id: "sports-recreation",
		icon: Trophy,
		color: "from-amber-500 to-yellow-500",
	},
	{
		id: "beauty-personal-care",
		icon: Scissors,
		color: "from-pink-500 to-fuchsia-500",
	},
	{
		id: "medical-clinical",
		icon: Stethoscope,
		color: "from-red-500 to-rose-600",
	},
	{
		id: "education-training",
		icon: GraduationCap,
		color: "from-cyan-500 to-blue-600",
	},
	{
		id: "space-rental",
		icon: Building2,
		color: "from-slate-500 to-slate-700",
	},
	{
		id: "pet-services",
		icon: PawPrint,
		color: "from-emerald-500 to-teal-600",
	},
	{
		id: "automotive-services",
		icon: Car,
		color: "from-indigo-500 to-blue-700",
	},
	{
		id: "professional-services",
		icon: Briefcase,
		color: "from-violet-500 to-purple-600",
	},
];
