import { Menu, X } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
	const { t } = useTranslation();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	// Get current language from URL
	const getCurrentLang = () => {
		const match = location.pathname.match(/^\/(en|id|zh)/);
		return match ? match[1] : "en";
	};

	const currentLang = getCurrentLang();
	const langPrefix = `/${currentLang}`;

	return (
		<header className="fixed w-full backdrop-enterprise shadow-enterprise z-50">
			<nav className="container-enterprise py-6">
				<div className="flex items-center justify-between">
					<Link to={langPrefix} className="flex items-center group">
						<img
							src="/logo-blue.svg"
							alt="Omniflow.id Logo"
							className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
						/>
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						<Link to={langPrefix} className="nav-link">
							{t("common.home")}
						</Link>
						<Link to={`${langPrefix}/modules/hris`} className="nav-link">
							{t("navigation.hris")}
						</Link>
						<Link to={`${langPrefix}/modules/commerce`} className="nav-link">
							{t("navigation.modules")}
						</Link>
						<Link to={`${langPrefix}/blog`} className="nav-link">
							{t("common.blog")}
						</Link>
						<Link to={`${langPrefix}/contact`} className="nav-link">
							{t("common.contact")}
						</Link>
						<LanguageSwitcher />
						<Link to={`${langPrefix}/contact`} className="btn-primary ml-4">
							{t("common.getStarted")}
						</Link>
					</div>

					<button
						className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{isMenuOpen && (
					<div className="md:hidden mt-6 p-6 bg-white rounded-2xl shadow-enterprise-lg border border-gray-100">
						<div className="space-y-4">
							<Link to={langPrefix} className="block nav-link text-lg">
								{t("common.home")}
							</Link>
							<Link
								to={`${langPrefix}/modules/hris`}
								className="block nav-link text-lg"
							>
								{t("navigation.hris")}
							</Link>
							<Link
								to={`${langPrefix}/blog`}
								className="block nav-link text-lg"
							>
								{t("common.blog")}
							</Link>
							<Link
								to={`${langPrefix}/contact`}
								className="block nav-link text-lg"
							>
								{t("common.contact")}
							</Link>
							<div className="pt-4 border-t border-gray-200">
								<LanguageSwitcher />
							</div>
							<Link
								to={`${langPrefix}/contact`}
								className="btn-primary w-full mt-4"
							>
								{t("common.getStarted")}
							</Link>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
