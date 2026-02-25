import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
	{
		quote: "Implementing Omniflow's E-Commerce has transformed our online store operations. The inventory management and order processing automation are remarkable.",
		author: "Michael Tan",
		position: "E-Commerce Director",
		company: "RetailMax Inc.",
		rating: 5,
		image: "https://images.unsplash.com/photo-155674073-325c-99a1ab3859e2511?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote: "The reporting and analytics capabilities have given us valuable insights into our sales performance. We can now make data-driven decisions.",
		author: "Sarah Wijaya",
		position: "Operations Manager",
		company: "Global Solutions",
		rating: 5,
		image: "https://images.unsplash.com/photo-1573497045130-2a4fb8f3b4b8?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote: "The shopping experience has improved significantly. Our customers love the intuitive interface and fast checkout process.",
		author: "David Pratama",
		position: "Customer Experience Lead",
		company: "Tech Retail",
		rating: 5,
		image: "https://images.unsplash.com/photo-1560250097-0b93528e650c?auto=format&fit=crop&q=80&w=150",
	},
];

export default function Testimonials() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise gradient-secondary">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						<Star className="h-4 w-4 mr-2" />
						{t("commerce.testimonials.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">
						{t("commerce.testimonials.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("commerce.testimonials.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="card-enterprise p-8 relative">
							<div className="absolute top-6 right-6 text-blue-200">
								<Quote className="h-8 w-8" />
							</div>

							<div className="flex items-center mb-4">
								<img
									src={testimonial.image}
									alt={testimonial.author}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<div>
									<p className="font-bold text-enterprise-primary">
										{testimonial.author}
									</p>
									<p className="text-sm text-enterprise-muted">
										{testimonial.position}
									</p>
									<p className="text-sm text-blue-600 font-medium">
										{testimonial.company}
									</p>
								</div>
							</div>

							<blockquote className="text-enterprise-secondary mb-6 leading-relaxed italic">
								"{testimonial.quote}"
							</blockquote>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="card-enterprise p-8 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold text-enterprise-primary mb-4">
							{t("commerce.testimonials.joinSuccess.title")}
						</h3>
						<p className="text-enterprise-secondary mb-6">
							{t("commerce.testimonials.joinSuccess.description")}
						</p>
						<button className="btn-primary">
							{t("commerce.testimonials.joinSuccess.scheduleDemo")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
