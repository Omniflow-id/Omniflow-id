import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { getCurrentLocaleFromPath, getLangPrefix } from "../../../lib/website";
import type { BlogPost } from "../../../types/blog";

interface BlogCardProps {
	post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
	const { t } = useTranslation();
	const location = useLocation();
	const currentLang = getCurrentLocaleFromPath(location.pathname);
	const langPrefix = getLangPrefix(currentLang);

	const formatDate = (dateString: string) => {
		const [datePart] = dateString.split(", ");
		const [day, month, year] = datePart.split("/");
		const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	const getExcerpt = (content: string, maxLength = 120) => {
		const plainText = content
			.replace(/#{1,6}\s+/g, "")
			.replace(/\*\*(.*?)\*\*/g, "$1")
			.replace(/\*(.*?)\*/g, "$1")
			.replace(/\[(.*?)\]\(.*?\)/g, "$1")
			.replace(/\n/g, " ")
			.trim();

		return plainText.length > maxLength
			? `${plainText.substring(0, maxLength)}...`
			: plainText;
	};

	const getReadingTime = (content: string) => {
		const wordsPerMinute = 200;
		const wordCount = content.split(" ").length;
		return Math.ceil(wordCount / wordsPerMinute);
	};

	return (
		<Link to={`${langPrefix}/blog/${post.slug}`} className="group block">
			<article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
				{/* Image Container */}
				<div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
					<img
						src={
							post.banner_url ||
							"https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
						}
						alt={post.title}
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
					
					{/* Primary Tag Overlay */}
					<div className="absolute top-4 left-4">
						<span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
							<Tag className="h-3 w-3 mr-1.5" />
							{post.meta_keywords.split(", ")[0]}
						</span>
					</div>

					{/* Reading Time Overlay */}
					<div className="absolute bottom-4 right-4">
						<span className="inline-flex items-center bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
							<Clock className="h-3 w-3 mr-1.5" />
							{getReadingTime(post.content)} min
						</span>
					</div>
				</div>

				{/* Content Container */}
				<div className="p-6">
					{/* Date */}
					<div className="flex items-center text-gray-500 text-sm mb-3">
						<Calendar className="h-4 w-4 mr-2" />
						<span>{formatDate(post.created_at)}</span>
					</div>

					{/* Title */}
					<h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
						{post.title}
					</h2>

					{/* Excerpt */}
					<p className="text-gray-600 mb-6 leading-relaxed">
						{post.meta_description || getExcerpt(post.content)}
					</p>

					{/* Footer */}
					<div className="flex items-center justify-between">
						{/* Read More Link */}
						<span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
							{t("blog.readMore")}
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
						</span>

						{/* Additional Tags */}
						<div className="flex gap-1">
							{post.meta_keywords
								.split(", ")
								.slice(1, 3)
								.map((keyword, index) => (
									<span
										key={index}
										className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium"
									>
										{keyword}
									</span>
								))}
						</div>
					</div>
				</div>
			</article>
		</Link>
	);
}