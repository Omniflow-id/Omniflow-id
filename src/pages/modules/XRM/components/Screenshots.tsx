import { Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Screenshots() {
	const { t } = useTranslation();

	const screenshots = [
		{
			title: "Mobile App",
			image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
			description: "Native Flutter app for iOS and Android",
		},
		{
			title: "User Dashboard",
			image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
			description: "Complete user management interface",
		},
		{
			title: "Activity Logs",
			image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600",
			description: "Track all system activities and changes",
		},
		{
			title: "Permission Management",
			image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
			description: "Fine-grained access control system",
		},
		{
			title: "Queue Management",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
			description: "Monitor and manage background jobs",
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
						<Monitor className="h-4 w-4 mr-2" />
						{t("xrm.screenshots.badge")}
					</div>
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("xrm.screenshots.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("xrm.screenshots.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{screenshots.map((screenshot, index) => (
						<div key={index} className="card-enterprise overflow-hidden">
							<div className="relative">
								<img
									src={screenshot.image}
									alt={screenshot.title}
									className="w-full h-48 object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
									<h3 className="text-lg font-bold text-white">
										{screenshot.title}
									</h3>
									<p className="text-sm text-gray-200">
										{screenshot.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
