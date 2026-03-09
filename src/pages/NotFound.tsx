import { ArrowLeft, Home, Search } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";

export default function NotFoundPage() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const getCurrentLang = () => {
		const match = location.pathname.match(/^\/(en|id|zh)/);
		return match ? match[1] : "en";
	};

	const currentLang = getCurrentLang();
	const homePath = `/${currentLang}`;

	return (
		<>
			<SEOHead
				title="404 - Page Not Found"
				description="The page you are looking for does not exist. Omniflow - Enterprise Business Solutions"
				keywords="404, page not found, Omniflow"
				type="website"
			/>
			<div className="min-h-screen bg-white flex flex-col">
				<section className="flex-grow flex items-center justify-center section-enterprise gradient-secondary">
					<div className="container-enterprise">
						<div className="max-w-3xl mx-auto text-center">
							<div className="mb-8">
								<div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mb-6 shadow-2xl">
									<Search className="h-16 w-16 text-white" />
								</div>
								<h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
									404
								</h1>
								<h2 className="text-3xl font-bold text-enterprise-primary mb-4">
									Page Not Found
								</h2>
								<p className="text-xl text-enterprise-secondary mb-12 max-w-2xl mx-auto">
									Sorry, we couldn't find the page you're looking for. The page
									might have been moved, deleted, or never existed.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button
									onClick={() => navigate(-1)}
									className="btn-cta-light flex items-center justify-center"
								>
									<ArrowLeft className="mr-2 h-5 w-5" />
									Go Back
								</button>
								<button
									onClick={() => navigate(homePath)}
									className="btn-primary flex items-center justify-center"
								>
									<Home className="mr-2 h-5 w-5" />
									Back to Home
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
