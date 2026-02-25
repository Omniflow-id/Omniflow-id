import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LanguageRedirect from "./components/LanguageRedirect.tsx";
import BlogPage from "./pages/blog";
import BlogDetailPage from "./pages/blog/[slug]";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import HRISPage from "./pages/modules/HRIS";
import CommercePage from "./pages/modules/Commerce/index.tsx";

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		// Set HTML lang attribute based on current language
		document.documentElement.lang = i18n.language;
	}, [i18n.language]);

	return (
		<Router>
			<div className="min-h-screen bg-white">
				<Header />
				<main>
					<Routes>
						{/* Root redirect */}
						<Route path="/" element={<LanguageRedirect />} />

						{/* English routes */}
						<Route path="/en" element={<HomePage />} />
						<Route path="/en/modules/hris" element={<HRISPage />} />
						<Route path="/en/modules/commerce" element={<CommercePage />} />
						<Route path="/en/blog" element={<BlogPage />} />
						<Route path="/en/blog/:slug" element={<BlogDetailPage />} />
						<Route path="/en/contact" element={<ContactPage />} />

						{/* Indonesian routes */}
						<Route path="/id" element={<HomePage />} />
						<Route path="/id/modules/hris" element={<HRISPage />} />
						<Route path="/id/modules/commerce" element={<CommercePage />} />
						<Route path="/id/blog" element={<BlogPage />} />
						<Route path="/id/blog/:slug" element={<BlogDetailPage />} />
						<Route path="/id/contact" element={<ContactPage />} />

						{/* Chinese routes */}
						<Route path="/zh" element={<HomePage />} />
						<Route path="/zh/modules/hris" element={<HRISPage />} />
						<Route path="/zh/modules/commerce" element={<CommercePage />} />
						<Route path="/zh/blog" element={<BlogPage />} />
						<Route path="/zh/blog/:slug" element={<BlogDetailPage />} />
						<Route path="/zh/contact" element={<ContactPage />} />

						{/* Legacy routes (redirect to language-specific) */}
						<Route path="/" element={<HomePage />} />
						<Route path="/modules/hris" element={<HRISPage />} />
						<Route path="/modules/commerce" element={<CommercePage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/blog/:slug" element={<BlogDetailPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
