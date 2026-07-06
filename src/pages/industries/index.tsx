import { ArrowRight, Building2, Layers } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import { industryCatalog } from "../../lib/industryCatalog";
import { getCurrentLocaleFromPath, getLangPrefix } from "../../lib/website";

export default function IndustriesPage() {
	const { t } = useTranslation();
	const location = useLocation();
	const currentLang = getCurrentLocaleFromPath(location.pathname);
	const langPrefix = getLangPrefix(currentLang);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("industriesPage.title")}
				description={t("industriesPage.subtitle")}
				keywords="industri yang didukung, vertical SaaS, booking system, fitness, beauty, klinik, sewa ruang, pet, otomotif, Omniflow industries"
				type="website"
			/>

			<section className="section-hero relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
					<div className="absolute top-[15%] left-[-5%] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-orb-float"></div>
					<div
						className="absolute bottom-[-10%] right-[5%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-orb-float"
						style={{ animationDelay: "-7s" }}
					></div>
					<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
				</div>

				<div className="container-enterprise relative z-10">
					<div className="max-w-3xl space-y-8 animate-fade-in-left">
						<div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-bold shadow-sm border border-blue-200">
							<Layers className="h-4 w-4 mr-2 text-blue-600" />
							{t("industriesPage.badge")}
						</div>

						<h1 className="text-enterprise-primary leading-tight">
							{t("industriesPage.title")}
						</h1>

						<p className="text-xl text-enterprise-secondary max-w-2xl leading-relaxed">
							{t("industriesPage.subtitle")}
						</p>

						<div className="flex flex-col sm:flex-row gap-5">
							<Link
								to={`${langPrefix}/contact`}
								className="btn-primary group px-10"
							>
								{t("industriesPage.getStarted")}
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</Link>
							<Link
								to={`${langPrefix}/modules`}
								className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-white"
							>
								{t("industriesPage.viewModules")}
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="section-enterprise bg-white py-20">
				<div className="container-enterprise">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{industryCatalog.map((category) => {
							const Icon = category.icon;
							const items = t(
								`industriesPage.categories.${category.id}.items`,
								{ returnObjects: true }
							) as Record<string, string>;
							const verticals = Object.values(items || {});
							return (
								<div key={category.id} className="card-feature group">
									<div
										className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
									>
										<Icon className="h-8 w-8 text-white" />
									</div>
									<h3 className="text-xl font-bold text-enterprise-primary mb-2">
										{t(`industriesPage.categories.${category.id}.title`)}
									</h3>
									<p className="text-enterprise-secondary leading-relaxed mb-5">
										{t(`industriesPage.categories.${category.id}.tagline`)}
									</p>
									<div className="flex flex-wrap gap-2">
										{verticals.map((vertical) => (
											<span
												key={vertical}
												className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
											>
												{vertical}
											</span>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="section-enterprise bg-gradient-to-b from-slate-50 to-white py-20">
				<div className="container-enterprise">
					<div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 px-8 py-12 text-white shadow-enterprise-lg md:px-12">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
							<Building2 className="h-4 w-4" />
							{t("industriesPage.badge")}
						</div>
						<h2 className="mt-6 text-white">{t("industriesPage.cta.title")}</h2>
						<p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50/88">
							{t("industriesPage.cta.description")}
						</p>
						<div className="mt-8 flex flex-col gap-4 sm:flex-row">
							<Link to={`${langPrefix}/contact`} className="btn-primary">
								{t("industriesPage.cta.button")}
							</Link>
							<Link
								to={`${langPrefix}/modules`}
								className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
							>
								{t("industriesPage.viewModules")}
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
