import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { moduleCategories, type ModuleCategoryKey } from "../lib/modules";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
	const { t } = useTranslation();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isModulesOpen, setIsModulesOpen] = React.useState(false);
	const [activeCategory, setActiveCategory] =
		React.useState<ModuleCategoryKey>("core");
	const [mobileOpenCategory, setMobileOpenCategory] =
		React.useState<ModuleCategoryKey | null>(null);

	const getCurrentLang = () => {
		const match = location.pathname.match(/^\/(en|id|zh)/);
		return match ? match[1] : "en";
	};

	const currentLang = getCurrentLang();
	const langPrefix = `/${currentLang}`;
	const currentPath = location.pathname;

	const buildHref = (slug: string) => `${langPrefix}/modules/${slug}`;

	const activeCategoryDef =
		moduleCategories.find((c) => c.key === activeCategory) ??
		moduleCategories[0];

	const isLinkActive = (path: string, exact = false) => {
		if (exact) {
			return currentPath === path || currentPath === path + "/";
		}
		return currentPath === path || currentPath.startsWith(path + "/");
	};

	const getNavLinkClass = (path: string, exact = false, isMobile = false) => {
		const baseClass = isMobile ? "block nav-link text-lg" : "nav-link";
		return `${baseClass} ${isLinkActive(path, exact) ? "active" : ""}`;
	};

	React.useEffect(() => {
		setIsModulesOpen(false);
		setIsMenuOpen(false);
		setMobileOpenCategory(null);
	}, [location.pathname]);

	React.useEffect(() => {
		if (!isMenuOpen) {
			document.body.style.overflow = "";
			return;
		}

		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	return (
		<header className="fixed w-full backdrop-enterprise shadow-enterprise z-50">
			<nav className="container-enterprise py-6">
				<div className="flex items-center justify-between">
					<Link to={langPrefix} className="flex items-center group">
						<img
							src="/logo-blue.svg"
							alt="Omniflow.id Logo"
							className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
						/>
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						<Link to={langPrefix} className={getNavLinkClass(langPrefix, true)}>
							{t("common.home")}
						</Link>
						<Link
							to={`${langPrefix}/integrations`}
							className={getNavLinkClass(
								`${langPrefix}/integrations`,
								false,
								true
							)}
						>
							{t("navigation.integrations")}
						</Link>
						<Link
							to={`${langPrefix}/industries`}
							className={getNavLinkClass(`${langPrefix}/industries`)}
						>
							{t("navigation.industries")}
						</Link>
						<div
							className="relative"
							onMouseEnter={() => setIsModulesOpen(true)}
							onMouseLeave={() => setIsModulesOpen(false)}
						>
							<button
								type="button"
								className={`nav-link inline-flex items-center gap-1 ${currentPath.startsWith(`${langPrefix}/modules`) ? "active" : ""}`}
								onClick={() => setIsModulesOpen((prev) => !prev)}
								aria-expanded={isModulesOpen}
							>
								{t("navigation.modulesDropdown")}
								<ChevronDown
									className={`h-4 w-4 transition-transform duration-200 ${isModulesOpen ? "rotate-180" : ""}`}
								/>
							</button>
							<div
								className={`absolute left-1/2 top-full w-[min(96vw,1240px)] -translate-x-1/2 pt-4 transition-all duration-200 ${isModulesOpen ? "visible opacity-100" : "invisible opacity-0"}`}
							>
								<div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-enterprise-lg">
									<div className="grid grid-cols-[300px_minmax(0,1fr)]">
										{/* Sidebar: category tabs */}
										<div className="relative flex flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700 p-6 text-white">
											<div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
											<div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl" />
											<div className="relative flex h-full flex-col">
												<p className="px-3 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-100/80">
													{t("navigation.modules")}
												</p>
												<div className="mt-4 flex flex-col gap-1">
													{moduleCategories.map((cat) => {
														const isActive = activeCategory === cat.key;
														return (
															<button
																key={cat.key}
																type="button"
																onMouseEnter={() => setActiveCategory(cat.key)}
																onFocus={() => setActiveCategory(cat.key)}
																onClick={() => setActiveCategory(cat.key)}
																className={`group flex items-start justify-between rounded-2xl px-4 py-3.5 text-left transition-all duration-200 ${
																	isActive
																		? "bg-white text-blue-900 shadow-lg"
																		: "text-white hover:bg-white/10"
																}`}
															>
																<div className="min-w-0">
																	<p
																		className={`text-[15px] font-semibold ${isActive ? "text-blue-800" : "text-white"}`}
																	>
																		{t(
																			`navigation.categories.${cat.key}.label`
																		)}
																	</p>
																	<p
																		className={`mt-0.5 truncate text-xs ${isActive ? "text-slate-500" : "text-blue-100/80"}`}
																	>
																		{t(
																			`navigation.categories.${cat.key}.tagline`
																		)}
																	</p>
																</div>
																<ArrowRight
																	className={`mt-1 h-4 w-4 shrink-0 transition-all duration-200 ${
																		isActive
																			? "translate-x-0 text-blue-600 opacity-100"
																			: "-translate-x-1 text-white/60 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
																	}`}
																/>
															</button>
														);
													})}
												</div>
												<div className="mt-auto pt-6">
													<div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
														<p className="text-sm font-semibold text-white">
															{t("navigation.megaMenuTitle")}
														</p>
														<p className="mt-1 text-xs leading-5 text-blue-50/85">
															{t("navigation.megaMenuSubtitle")}
														</p>
														<Link
															to={`${langPrefix}/modules`}
															className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-100"
														>
															{t("navigation.exploreAll")}
															<ArrowRight className="h-4 w-4" />
														</Link>
													</div>
												</div>
											</div>
										</div>

										{/* Content: active category's modules */}
										<div className="p-7">
											<div className="mb-5 flex items-baseline justify-between">
												<div>
													<p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
														{t(
															`navigation.categories.${activeCategoryDef.key}.label`
														)}
													</p>
													<h3 className="mt-1 text-lg font-semibold text-slate-900">
														{t(
															`navigation.categories.${activeCategoryDef.key}.tagline`
														)}
													</h3>
												</div>
												<span className="text-xs font-medium text-slate-400">
													{activeCategoryDef.modules.length}{" "}
													{t("navigation.modules").toLowerCase()}
												</span>
											</div>
											<div className="grid grid-cols-3 gap-2">
												{activeCategoryDef.modules.map((module) => {
													const Icon = module.icon;
													const href = buildHref(module.slug);
													const active = currentPath === href;
													return (
														<Link
															key={module.key}
															to={href}
															className={`group/item block rounded-2xl p-3.5 transition-all duration-200 ${
																active
																	? "bg-blue-50 ring-1 ring-blue-100"
																	: "hover:bg-slate-50"
															}`}
														>
															<div className="flex items-start gap-3">
																<div
																	className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
																		active
																			? "bg-blue-600 text-white"
																			: "bg-blue-50 text-blue-700 group-hover/item:bg-blue-600 group-hover/item:text-white"
																	}`}
																>
																	<Icon className="h-[18px] w-[18px]" />
																</div>
																<div className="min-w-0">
																	<p
																		className={`text-[14px] font-semibold leading-5 ${active ? "text-blue-700" : "text-slate-900"}`}
																	>
																		{t(module.titleKey)}
																	</p>
																	<p className="mt-1 line-clamp-2 text-[12.5px] leading-5 text-slate-500">
																		{t(module.descKey)}
																	</p>
																</div>
															</div>
														</Link>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Link
							to={`${langPrefix}/blog`}
							className={getNavLinkClass(`${langPrefix}/blog`)}
						>
							{t("common.blog")}
						</Link>
						<Link
							to={`${langPrefix}/contact`}
							className={getNavLinkClass(`${langPrefix}/contact`)}
						>
							{t("common.contact")}
						</Link>
						<LanguageSwitcher />
						<Link to={`${langPrefix}/contact`} className="btn-primary ml-4">
							{t("common.getStarted")}
						</Link>
					</div>

					<button
						className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{isMenuOpen && (
					<div className="md:hidden mt-6 max-h-[calc(100dvh-7.5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-gray-100 bg-white p-6 shadow-enterprise-lg">
						<div className="space-y-4 pb-[calc(env(safe-area-inset-bottom)+1.5rem)]">
							<Link
								to={langPrefix}
								className={getNavLinkClass(langPrefix, true, true)}
							>
								{t("common.home")}
							</Link>
							<Link
								to={`${langPrefix}/integrations`}
								className={getNavLinkClass(
									`${langPrefix}/integrations`,
									false,
									true
								)}
							>
								{t("navigation.integrations")}
							</Link>
							<div className="border-t border-slate-200/80 pt-4">
								<p className="px-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
									{t("navigation.modulesDropdown")}
								</p>
								<Link
									to={`${langPrefix}/modules`}
									className={`mt-3 flex items-center justify-between rounded-xl px-3.5 py-3 transition-all duration-300 ${
										currentPath === `${langPrefix}/modules`
											? "bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100"
											: "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
									}`}
								>
									<span className="text-base font-semibold">
										{t("navigation.allModules")}
									</span>
									<ArrowRight className="h-4 w-4" />
								</Link>
								<div className="mt-3 space-y-2">
									{moduleCategories.map((cat) => {
										const open = mobileOpenCategory === cat.key;
										return (
											<div
												key={cat.key}
												className="rounded-xl border border-slate-200/80"
											>
												<button
													type="button"
													onClick={() =>
														setMobileOpenCategory(open ? null : cat.key)
													}
													className="flex w-full items-center justify-between px-3.5 py-3 text-left"
													aria-expanded={open}
												>
													<div>
														<p className="text-base font-semibold text-slate-900">
															{t(`navigation.categories.${cat.key}.label`)}
														</p>
														<p className="mt-0.5 text-xs text-slate-500">
															{t(`navigation.categories.${cat.key}.tagline`)}
														</p>
													</div>
													<ChevronDown
														className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
													/>
												</button>
												<div
													className={`overflow-hidden transition-all duration-400 ease-out ${open ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"}`}
												>
													<div className="space-y-1.5 border-t border-slate-200/80 p-2">
														{cat.modules.map((module) => {
															const Icon = module.icon;
															const href = buildHref(module.slug);
															const active = currentPath === href;
															return (
																<Link
																	key={module.key}
																	to={href}
																	className={`flex items-start gap-3 rounded-lg px-2.5 py-2.5 transition-colors ${
																		active
																			? "bg-blue-50 text-blue-700"
																			: "text-slate-700 hover:bg-slate-50"
																	}`}
																>
																	<div
																		className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
																			active
																				? "bg-blue-600 text-white"
																				: "bg-blue-50 text-blue-700"
																		}`}
																	>
																		<Icon className="h-4 w-4" />
																	</div>
																	<div className="min-w-0">
																		<p className="text-[15px] font-semibold leading-5">
																			{t(module.titleKey)}
																		</p>
																		<p className="mt-0.5 line-clamp-2 text-[12.5px] leading-5 text-slate-500">
																			{t(module.descKey)}
																		</p>
																	</div>
																</Link>
															);
														})}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
							<Link
								to={`${langPrefix}/blog`}
								className={getNavLinkClass(`${langPrefix}/blog`, false, true)}
							>
								{t("common.blog")}
							</Link>
							<Link
								to={`${langPrefix}/contact`}
								className={getNavLinkClass(
									`${langPrefix}/contact`,
									false,
									true
								)}
							>
								{t("common.contact")}
							</Link>
							<div className="pt-4 border-t border-gray-200">
								<LanguageSwitcher />
							</div>
							<Link
								to={`${langPrefix}/contact`}
								className="btn-primary w-full mt-4"
							>
								{t("common.getStarted")}
							</Link>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
