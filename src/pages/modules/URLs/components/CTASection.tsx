import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CTASection() {
	const { t } = useTranslation();

	return (
		<section className="section-cta">
			<div className="container-enterprise">
				<div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
					<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
					<div className="relative z-10">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							{t("urls.cta.title")}
						</h2>
						<p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
							{t("urls.cta.subtitle")}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center group">
								{t("urls.cta.getStarted")}
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</button>
							<button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-400 transition-colors border border-blue-400">
								{t("urls.cta.contactSales")}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
