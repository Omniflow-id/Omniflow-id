import { Monitor, Smartphone } from "lucide-react";

export default function Screenshots() {
	const screenshots = [
		{
			title: "Product Catalog",
			image: "https://images.unsplash.com/photo-155674074-325c-99a1ab3859e2511?auto=format&fit=crop&q=80&w=600",
			description: "Browse and search products with advanced filters",
		},
		{
			title: "Shopping Cart",
			image: "https://images.unsplash.com/photo-1576108243973-e6eb3e0ab3d4b8867488a50e0?auto=format&fit=crop&q=80&w=600",
			description: "Easy checkout with multiple payment options",
		},
		{
			title: "Order Management",
			image: "https://images.unsplash.com/photo-1544263882-8162-2269f0d7e6c66ed3d777e088c?auto=format&fit=crop&q=80&w=600",
			description: "Track and manage all your orders in one place",
		},
		{
			title: "Analytics Dashboard",
			image: "https://images.unsplash.com/photo-1551288049-3b0a628c29d09499a47c?auto=format&fit=crop&q=80&w=600",
			description: "Real-time sales and inventory insights",
		},
		{
			title: "Mobile App View",
			image: "https://images.unsplash.com/photo-151294193076-4a7b5f33b9331c448f?auto=format&fit=crop&q=80&w=600",
			description: "Manage your store on the go",
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						<Monitor className="h-4 w-4 mr-2" />
						Screenshots
					</div>
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						Application Interface
					</h2>
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
