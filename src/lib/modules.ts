import type { LucideIcon } from "lucide-react";
import {
	categoryOrder,
	type ModuleCategoryKey,
	moduleCatalog,
} from "./moduleCatalog";

export type { ModuleCategoryKey };

export type ModuleEntry = {
	key: string;
	slug: string;
	icon: LucideIcon;
	color: string;
	titleKey: string;
	descKey: string;
};

export type ModuleCategory = {
	key: ModuleCategoryKey;
	modules: ModuleEntry[];
};

export const moduleCategories: ModuleCategory[] = categoryOrder.map(
	(category) => ({
		key: category,
		modules: moduleCatalog
			.filter((module) => module.category === category)
			.map((module) => ({
				key: module.id,
				slug: module.id,
				icon: module.icon,
				color: module.color,
				titleKey: module.titleKey,
				descKey: module.descriptionKey,
			})),
	})
);
