import { ChevronDown, Globe } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const languages = [
	{ code: "en", name: "English", flag: "🇺🇸" },
	{ code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
	{ code: "zh", name: "中文", flag: "🇨🇳" },
];

export default function LanguageSwitcher() {
	const { i18n, t } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	const [isOpen, setIsOpen] = React.useState(false);

	const currentLanguage =
		languages.find((lang) => lang.code === i18n.language) || languages[0];

	const handleLanguageChange = (languageCode: string) => {
		// Get current path without language prefix
		const currentPath = location.pathname;
		const pathWithoutLang = currentPath.replace(/^\/(en|id|zh)/, "") || "/";

		// Change i18n language
		i18n.changeLanguage(languageCode);

		// Navigate to new language path
		const newPath = `/${languageCode}${pathWithoutLang === "/" ? "" : pathWithoutLang}`;
		navigate(newPath);

		setIsOpen(false);
	};

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
				aria-label={t("common.language")}
			>
				<Globe className="h-4 w-4 text-gray-600" />
				<span className="text-sm font-medium text-gray-700">
					{currentLanguage.flag}
				</span>
				<span className="hidden sm:inline text-sm font-medium text-gray-700">
					{currentLanguage.name}
				</span>
				<ChevronDown
					className={`h-4 w-4 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
				/>
			</button>

			{isOpen && (
				<>
					<div
						className="fixed inset-0 z-10"
						onClick={() => setIsOpen(false)}
					/>
					<div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-enterprise border border-gray-100 py-2 z-20">
						{languages.map((language) => (
							<button
								key={language.code}
								onClick={() => handleLanguageChange(language.code)}
								className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
									i18n.language === language.code
										? "bg-blue-50 text-blue-700"
										: "text-gray-700"
								}`}
							>
								<span className="text-lg">{language.flag}</span>
								<span className="font-medium">{language.name}</span>
								{i18n.language === language.code && (
									<div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
								)}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
