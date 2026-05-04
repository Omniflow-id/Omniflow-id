import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import StructuredData from "../../components/StructuredData";
import {
	getModuleById,
	moduleOverviewAccentIcons,
	type ModuleId,
} from "../../lib/moduleCatalog";
import { getModuleOverviewContent } from "../../lib/moduleOverviewContent";
import { getCurrentLocaleFromPath, getLangPrefix } from "../../lib/website";

interface ModuleOverviewPageProps {
	moduleId: ModuleId;
}

export default function ModuleOverviewPage({
	moduleId,
}: ModuleOverviewPageProps) {
	const { t } = useTranslation();
	const location = useLocation();
	const locale = getCurrentLocaleFromPath(location.pathname);
	const langPrefix = getLangPrefix(locale);
	const module = getModuleById(moduleId);
	const content = getModuleOverviewContent(moduleId, locale);
	const uiCopy = {
		en: {
			viewAllModules: "View All Modules",
			stackTitle: "Bring this module into your Omniflow stack",
			stackDescription:
				"Pair {{badge}} with the rest of Omniflow to connect operations, reporting, and customer workflows in one business system.",
			exploreModules: "Explore Modules",
		},
		id: {
			viewAllModules: "Lihat Semua Modul",
			stackTitle: "Masukkan modul ini ke dalam ekosistem Omniflow Anda",
			stackDescription:
				"Padukan {{badge}} dengan modul Omniflow lainnya untuk menyambungkan operasional, pelaporan, dan workflow pelanggan dalam satu sistem bisnis.",
			exploreModules: "Jelajahi Modul",
		},
		zh: {
			viewAllModules: "查看所有模块",
			stackTitle: "把这个模块接入您的 Omniflow 体系",
			stackDescription:
				"将 {{badge}} 与其他 Omniflow 模块配合使用，把运营、报表与客户工作流连接进同一业务系统。",
			exploreModules: "浏览模块",
		},
	}[locale];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!module || !content) {
		return null;
	}

	const Icon = moduleOverviewAccentIcons[moduleId] || module.icon;

	return (
		<>
			<SEOHead
				title={content.badge}
				description={content.subtitle}
				keywords={`${content.badge}, ${content.title}, Omniflow`}
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: `Omniflow ${content.badge}`,
					description: content.subtitle,
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					featureList: content.capabilities,
				}}
			/>

			<div className="min-h-screen bg-white">
				<section className="section-hero relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white">
					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						<div className="absolute left-[-6%] top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
						<div className="absolute bottom-[-12%] right-[-5%] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
					</div>
					<div className="container-enterprise relative z-10">
						<div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-center">
							<div className="max-w-3xl">
								<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
									<Icon className="h-4 w-4" />
									{content.badge}
								</div>
								<h1 className="mt-6 text-white">{content.title}</h1>
								<p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/88">
									{content.subtitle}
								</p>
								<p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
									{content.description}
								</p>
								<div className="mt-10 flex flex-col gap-4 sm:flex-row">
									<Link to={`${langPrefix}/contact`} className="btn-primary group">
										{t("common.scheduleDemo")}
										<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
									</Link>
									<Link
										to={`${langPrefix}/modules`}
										className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
									>
										{uiCopy.viewAllModules}
									</Link>
								</div>
							</div>

							<div className="relative">
								<div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/0 blur-2xl" />
								<div className="relative rounded-[2rem] border border-white/10 bg-white/8 p-8 backdrop-blur">
									<div
										className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${module.color} shadow-2xl`}
									>
										<module.icon className="h-8 w-8 text-white" />
									</div>
									<h2 className="mt-8 text-2xl font-semibold text-white">
										{content.capabilitiesTitle}
									</h2>
									<div className="mt-6 space-y-4">
										{content.capabilities.map((capability) => (
											<div
												key={capability}
												className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-blue-50/90"
											>
												{capability}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-enterprise bg-slate-50">
					<div className="container-enterprise">
						<div className="max-w-2xl">
							<h2 className="text-enterprise-primary">{content.useCasesTitle}</h2>
							<p className="mt-4 text-lg leading-8 text-enterprise-secondary">
								{content.description}
							</p>
						</div>
						<div className="mt-12 grid gap-6 md:grid-cols-3">
							{content.useCases.map((useCase) => (
								<div
									key={useCase}
									className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
								>
									<CheckCircle2 className="h-6 w-6 text-blue-600" />
									<p className="mt-4 text-base leading-7 text-slate-700">
										{useCase}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="section-enterprise bg-white">
					<div className="container-enterprise">
						<div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 px-8 py-12 text-white shadow-enterprise-lg md:px-12">
							<h2 className="text-white">{uiCopy.stackTitle}</h2>
							<p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50/88">
								{uiCopy.stackDescription.replace("{{badge}}", content.badge)}
							</p>
							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<Link to={`${langPrefix}/contact`} className="btn-primary">
									{t("common.contactSales")}
								</Link>
								<Link
									to={`${langPrefix}/modules`}
									className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
								>
									{uiCopy.exploreModules}
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
