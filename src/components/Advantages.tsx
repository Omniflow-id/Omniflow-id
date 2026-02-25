import {
	Award,
	CheckCircle,
	Globe,
	Shield,
	TrendingUp,
	Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Advantages() {
	const { t } = useTranslation();

	const advantages = [
		{
			icon: CheckCircle,
			titleKey: "advantages.allInOne.title",
			descriptionKey: "advantages.allInOne.description",
			statKey: "advantages.allInOne.stat",
		},
		{
			icon: TrendingUp,
			titleKey: "advantages.analytics.title",
			descriptionKey: "advantages.analytics.description",
			statKey: "advantages.analytics.stat",
		},
		{
			icon: Zap,
			titleKey: "advantages.scalable.title",
			descriptionKey: "advantages.scalable.description",
			statKey: "advantages.scalable.stat",
		},
		{
			icon: Award,
			titleKey: "advantages.costEffective.title",
			descriptionKey: "advantages.costEffective.description",
			statKey: "advantages.costEffective.stat",
		},
		{
			icon: Globe,
			titleKey: "advantages.productivity.title",
			descriptionKey: "advantages.productivity.description",
			statKey: "advantages.productivity.stat",
		},
		{
			icon: Shield,
			titleKey: "advantages.security.title",
			descriptionKey: "advantages.security.description",
			statKey: "advantages.security.stat",
		},
	];

	return (
		<section className="section-enterprise gradient-secondary">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-enterprise-primary mb-6">
						{t("advantages.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("advantages.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{advantages.map((advantage) => (
						<div key={advantage.titleKey} className="card-enterprise p-8 group">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
									<advantage.icon className="h-6 w-6 text-white" />
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-bold text-enterprise-primary mb-3">
										{t(advantage.titleKey)}
									</h3>
									<p className="text-enterprise-secondary mb-4 leading-relaxed">
										{t(advantage.descriptionKey)}
									</p>
									<div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
										{t(advantage.statKey)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
