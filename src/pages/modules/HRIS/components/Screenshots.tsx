import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useTranslation } from "react-i18next";

const screenshotKeys = ["dashboard", "analytics", "leave"];

export default function Screenshots() {
	const { t } = useTranslation();

	const screenshots = [
		{
			image:
				"https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
		},
		{
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
		},
		{
			image:
				"https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						<Monitor className="h-4 w-4 mr-2" />
						{t("hris.screenshots.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">
						{t("hris.screenshots.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("hris.screenshots.subtitle")}
					</p>
				</div>

				<div className="space-y-20">
					{screenshotKeys.map((screenshotKey, index) => {
						const features = t(`hris.screenshots.${screenshotKey}.features`, {
							returnObjects: true,
						});
						const featuresArray = Array.isArray(features) ? features : [];

						return (
							<div
								key={index}
								className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
							>
								<div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
									<div className="relative">
										<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-700/10 rounded-3xl transform rotate-2"></div>
										<img
											src={screenshots[index].image}
											alt={t(`hris.screenshots.${screenshotKey}.title`)}
											className="relative rounded-3xl shadow-enterprise-lg w-full"
										/>
										<div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-enterprise">
											<div className="flex space-x-2">
												<Monitor className="h-5 w-5 text-blue-600" />
												<Tablet className="h-5 w-5 text-emerald-600" />
												<Smartphone className="h-5 w-5 text-purple-600" />
											</div>
										</div>
									</div>
								</div>
								<div
									className={`${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-6`}
								>
									<div>
										<h3 className="text-3xl font-bold text-enterprise-primary mb-4">
											{t(`hris.screenshots.${screenshotKey}.title`)}
										</h3>
										<p className="text-xl text-enterprise-secondary leading-relaxed">
											{t(`hris.screenshots.${screenshotKey}.description`)}
										</p>
									</div>
									<div className="grid grid-cols-2 gap-4">
										{featuresArray.map((feature: string, idx: number) => (
											<div key={idx} className="flex items-center space-x-3">
												<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
												<span className="text-enterprise-muted font-medium">
													{feature}
												</span>
											</div>
										))}
									</div>
									<button className="btn-primary">
										{t("hris.screenshots.exploreFeature")}
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
