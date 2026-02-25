import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CTASection() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise gradient-primary">
			<div className="container-enterprise">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-white mb-6">
						{t("commerce.cta.title")}
					</h2>
					<p className="text-xl text-blue-50 mb-12 max-w-3xl mx-auto">
						{t("commerce.cta.subtitle")}
					</p>
					<div className="flex flex-col md:flex-row items-center justify-center gap-6">
						<button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
							{t("commerce.cta.getStarted")}
						</button>
						<button className="flex items-center px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-colors text-white">
							{t("commerce.cta.scheduleDemo")}
							<ArrowRight className="ml-2 h-5 w-5" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
