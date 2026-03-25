import {
	BarChart3,
	ChevronDown,
	Contact,
	CreditCard,
	GraduationCap,
	Headset,
	Link2,
	Menu,
	ReceiptText,
	ShoppingBag,
	Store,
	Users,
	WalletCards,
	X,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
	const { t } = useTranslation();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isModulesOpen, setIsModulesOpen] = React.useState(false);
	const [isMobileModulesOpen, setIsMobileModulesOpen] = React.useState(false);

	// Get current language from URL
	const getCurrentLang = () => {
		const match = location.pathname.match(/^\/(en|id|zh)/);
		return match ? match[1] : "en";
	};

	const currentLang = getCurrentLang();
	const langPrefix = `/${currentLang}`;
	const currentPath = location.pathname;
	const modules = [
		{
			key: "hris",
			href: `${langPrefix}/modules/hris`,
			icon: Users,
			title: t("navigation.hris"),
			description: t("modules.hris.description"),
		},
		{
			key: "ecommerce",
			href: `${langPrefix}/modules/ecommerce`,
			icon: Store,
			title: t("navigation.ecommerce"),
			description: t("modulesPage.modules.ecommerce"),
		},
		{
			key: "xrm",
			href: `${langPrefix}/modules/xrm`,
			icon: Contact,
			title: t("navigation.xrm"),
			description: t("modulesPage.modules.xrm"),
		},
		{
			key: "accounting",
			href: `${langPrefix}/modules/accounting`,
			icon: ReceiptText,
			title: t("navigation.accounting"),
			description: t("modules.accounting.description"),
		},
		{
			key: "analytics",
			href: `${langPrefix}/modules/analytics`,
			icon: BarChart3,
			title: t("navigation.analytics"),
			description: t("modules.analytics.description"),
		},
		{
			key: "urls",
			href: `${langPrefix}/modules/urls`,
			icon: Link2,
			title: t("navigation.urls"),
			description: t("modules.urls.description"),
		},
		{
			key: "bizzcard",
			href: `${langPrefix}/modules/bizzcard`,
			icon: CreditCard,
			title: t("navigation.bizzcard"),
			description: t("modules.bizzcard.description"),
		},
		{
			key: "pos",
			href: `${langPrefix}/modules/pos`,
			icon: ShoppingBag,
			title: t("navigation.pos"),
			description: t("modules.pos.description"),
		},
		{
			key: "lms",
			href: `${langPrefix}/modules/lms`,
			icon: GraduationCap,
			title: t("navigation.lms"),
			description: t("modules.lms.description"),
		},
		{
			key: "telemarketing",
			href: `${langPrefix}/modules/telemarketing`,
			icon: Headset,
			title: t("navigation.telemarketing"),
			description: t("modulesPage.modules.telemarketing"),
		},
		{
			key: "payment-gateway",
			href: `${langPrefix}/modules/payment-gateway`,
			icon: WalletCards,
			title: t("navigation.paymentGateway"),
			description: t("modulesPage.modules.payment-gateway"),
		},
	];

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

	const getModuleLinkClass = (path: string, isMobile = false) =>
		`block transition-all duration-300 ${isMobile ? "rounded-xl px-3.5 py-2.5 text-lg " : "rounded-2xl p-4 "}${currentPath === path ? "bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100" : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"}`;

	React.useEffect(() => {
		setIsModulesOpen(false);
		setIsMenuOpen(false);
		setIsMobileModulesOpen(false);
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
						<Link to={`${langPrefix}/integrations`} className={getNavLinkClass(`${langPrefix}/integrations`)}>
							{t("navigation.integrations")}
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
								className={`absolute left-1/2 top-full w-[min(96vw,1180px)] -translate-x-1/2 pt-4 transition-all duration-200 ${isModulesOpen ? "visible opacity-100" : "invisible opacity-0"}`}
							>
								<div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-enterprise-lg">
									<div className="grid grid-cols-[320px_minmax(0,1fr)]">
										<div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700 p-8 text-white">
											<div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
											<div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
											<div className="relative">
												<p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100/80">
													{t("navigation.modules")}
												</p>
												<h3 className="mt-3 text-2xl font-semibold leading-tight">
													{t("navigation.allModules")}
												</h3>
												<p className="mt-4 max-w-[28ch] text-[15px] leading-7 text-blue-50/88">
													{t("modules.subtitle")}
												</p>
												<Link
													to={`${langPrefix}/modules`}
													className="mt-7 inline-flex items-center rounded-full border border-white/20 bg-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
												>
													{t("common.learnMore")}
												</Link>
											</div>
										</div>
										<div className="p-5">
											<div className="grid grid-cols-3 gap-2.5">
												{modules.map((module) => {
													const Icon = module.icon;

													return (
														<Link
															key={module.key}
															to={module.href}
															className={getModuleLinkClass(module.href)}
														>
															<div className="flex items-start gap-3">
																<div
																	className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
																		currentPath === module.href
																			? "bg-blue-600 text-white"
																			: "bg-blue-50 text-blue-700"
																	}`}
																>
																	<Icon className="h-4 w-4" />
																</div>
																<div className="min-w-0">
																	<p className="font-semibold leading-5 text-slate-900">
																		{module.title}
																	</p>
																	<p className="mt-1 line-clamp-2 text-[13px] leading-5 text-slate-500">
																		{module.description}
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
						<Link to={`${langPrefix}/blog`} className={getNavLinkClass(`${langPrefix}/blog`)}>
							{t("common.blog")}
						</Link>
						<Link to={`${langPrefix}/contact`} className={getNavLinkClass(`${langPrefix}/contact`)}>
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
					<div className="md:hidden mt-6 max-h-[calc(100vh-7.5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-gray-100 bg-white p-6 shadow-enterprise-lg">
						<div className="space-y-4 pb-2">
							<Link to={langPrefix} className={getNavLinkClass(langPrefix, true, true)}>
								{t("common.home")}
							</Link>
							<Link
								to={`${langPrefix}/integrations`}
								className={getNavLinkClass(`${langPrefix}/integrations`, false, true)}
							>
								{t("navigation.integrations")}
							</Link>
							<div className="border-t border-slate-200/80 pt-4">
								<button
									type="button"
									className="flex w-full items-center justify-between rounded-xl px-1 py-1 text-left transition-colors duration-200 hover:text-blue-700"
									onClick={() => setIsMobileModulesOpen((prev) => !prev)}
									aria-expanded={isMobileModulesOpen}
								>
									<p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
										{t("navigation.modulesDropdown")}
									</p>
									<ChevronDown
										className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
											isMobileModulesOpen ? "rotate-180" : ""
										}`}
									/>
								</button>
								<div
									className={`overflow-hidden transition-all duration-500 ease-out ${
										isMobileModulesOpen
											? "mt-3 max-h-[1200px] opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="space-y-2 border-l border-slate-200 pl-3">
									<Link
										to={`${langPrefix}/modules`}
										className={`block rounded-xl px-3 py-2.5 transition-all duration-300 ${
											currentPath === `${langPrefix}/modules`
												? "bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100"
												: "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
										}`}
									>
										<p className="text-base font-semibold">{t("navigation.allModules")}</p>
									</Link>
									{modules.map((module) => {
										const Icon = module.icon;

										return (
											<Link
												key={module.key}
												to={module.href}
												className={getModuleLinkClass(module.href, true)}
											>
												<div className="flex items-start gap-3">
													<div
														className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
															currentPath === module.href
																? "bg-blue-600 text-white"
																: "bg-blue-50 text-blue-700"
														}`}
													>
														<Icon className="h-4 w-4" />
													</div>
													<div className="min-w-0">
														<p className="text-base font-semibold leading-6">
															{module.title}
														</p>
														<p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">
															{module.description}
														</p>
													</div>
												</div>
											</Link>
										);
									})}
									</div>
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
								className={getNavLinkClass(`${langPrefix}/contact`, false, true)}
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
