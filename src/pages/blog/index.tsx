import { BookOpen, Loader2, Search, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import StructuredData from "../../components/StructuredData";
import {
	fetchWebsiteBlogs,
	getCurrentLocaleFromPath,
	getLangPrefix,
	trackCTAEvent,
} from "../../lib/website";
import type { BlogPost, BlogResponse } from "../../types/blog";
import BlogCard from "./components/BlogCard";

export default function BlogPage() {
	const { t } = useTranslation();
	const location = useLocation();
	const currentLang = getCurrentLocaleFromPath(location.pathname);
	const langPrefix = getLangPrefix(currentLang);
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Scroll to top when component mounts or language changes
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location.pathname]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				setLoading(true);
				setError(null);

				const data = (await fetchWebsiteBlogs(
					currentLang,
					1,
					9
				)) as BlogResponse;

				if (data.success && data.data && data.data.blogs) {
					setPosts(data.data.blogs);
					return;
				}

				throw new Error("Invalid API response structure");
			} catch (err) {
				const errorMessage =
					err instanceof Error
						? err.message
						: "An error occurred while fetching blogs";
				setError(errorMessage);
			} finally {
				setLoading(false);
			}
		};

		fetchBlogs();
	}, [currentLang]);

	const handleScheduleDemoClick = () => {
		void trackCTAEvent({
			ctaKey: "blog_listing_schedule_demo",
			locale: currentLang,
			moduleKey: "blog",
		}).catch(() => undefined);
	};

	if (loading) {
		return (
			<>
				<SEOHead
					title={t("blog.title")}
					description={t("blog.subtitle")}
					keywords="Business Blog, ERP Insights, Technology Trends, Enterprise Solutions, Digital Transformation, HRIS Tips"
					type="website"
				/>

				<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
					<div className="flex items-center justify-center min-h-screen">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<Loader2 className="h-8 w-8 animate-spin text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								{t("blog.loading")}
							</h3>
							<p className="text-gray-600">
								{t("blog.loadingDescription")}
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}

	if (error) {
		return (
			<>
				<SEOHead
					title={t("blog.title")}
					description={t("blog.subtitle")}
					keywords="Business Blog, ERP Insights, Technology Trends, Enterprise Solutions, Digital Transformation, HRIS Tips"
					type="website"
				/>

				<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
					<div className="flex items-center justify-center min-h-screen">
						<div className="text-center max-w-md">
							<div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<BookOpen className="h-8 w-8 text-red-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								{t("blog.error.title")}
							</h3>
							<p className="text-gray-600 mb-6">{error}</p>
							<button
								onClick={() => window.location.reload()}
								className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
							>
								{t("blog.error.tryAgain")}
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<SEOHead
				title={t("blog.title")}
				description={t("blog.subtitle")}
				keywords="Business Blog, ERP Insights, Technology Trends, Enterprise Solutions, Digital Transformation, HRIS Tips, Business Management, Software Reviews"
				type="website"
			/>
			<StructuredData
				type="WebSite"
				data={{
					mainEntity: {
						"@type": "Blog",
						name: t("blog.title"),
						description: t("blog.subtitle"),
						url: window.location.href,
						author: {
							"@type": "Organization",
							name: "Omniflow.id",
						},
					},
				}}
			/>

			<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
				{/* Hero Section - Clean and Focused */}
				<section className="pt-32 pb-20 px-6">
					<div className="max-w-6xl mx-auto text-center">
						{/* Badge */}
						<div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-blue-200">
							<BookOpen className="h-4 w-4 mr-2" />
							{t("blog.badge")}
						</div>

						{/* Main Title */}
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
							{t("blog.title")}
						</h1>

						{/* Subtitle */}
						<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
							{t("blog.subtitle")}
						</p>
					</div>
				</section>

				{/* Blog Posts Section */}
				<section className="py-16 px-6">
					<div className="max-w-7xl mx-auto">
						{posts.length === 0 ? (
							<div className="text-center py-20">
								<div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
									<Search className="h-10 w-10 text-yellow-600" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{t("blog.comingSoon.title")}
								</h3>
								<p className="text-gray-600 text-lg max-w-md mx-auto">
									{t("blog.comingSoon.message")}
								</p>
							</div>
						) : (
							<>
								{/* Section Header */}
								<div className="flex items-center justify-between mb-12">
									<div>
										<h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
											<TrendingUp className="h-8 w-8 mr-3 text-blue-600" />
											{t("blog.latest")}
										</h2>
										<p className="text-gray-600 text-lg">
											{t("blog.latestSubtitle")}
										</p>
									</div>
									
									{/* Optional: Filter or Search could go here */}
									<div className="hidden md:block">
										<span className="text-sm text-gray-500">
											{posts.length} {t("blog.articles")}
										</span>
									</div>
								</div>

								{/* Blog Cards Grid */}
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{posts.map((post) => (
										<BlogCard key={post.id} post={post} />
									))}
								</div>
							</>
						)}
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
					<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10" />
					<div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-indigo-900/95" />
					
					<div className="relative z-10 max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							{t("blog.cta.title")}
						</h2>
						<p className="text-xl text-blue-100 mb-12 leading-relaxed">
							{t("blog.cta.subtitle")}
						</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link
								to={`${langPrefix}/contact`}
								onClick={handleScheduleDemoClick}
								className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								{t("blog.cta.consultation")}
							</Link>
							<Link
								to={`${langPrefix}`}
								className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200 transform hover:-translate-y-1"
							>
								{t("blog.cta.exploreProducts")}
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}