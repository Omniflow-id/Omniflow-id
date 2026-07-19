import {
	ArrowRight,
	Calendar,
	CheckCircle,
	Clock,
	Headphones,
	MessageSquare,
	Shield,
	Users,
} from "lucide-react";
import type React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";
import StructuredData from "../components/StructuredData";

export default function ConsultationPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		phone: "",
		module: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus("success");
			setFormData({
				name: "",
				email: "",
				company: "",
				phone: "",
				module: "",
				message: "",
			});
			setTimeout(() => setSubmitStatus("idle"), 5000);
		}, 2000);
	};

	const modules = [
		t("consultation.modules.hris"),
		t("consultation.modules.accounting"),
		t("consultation.modules.inventory"),
		t("consultation.modules.crm"),
		t("consultation.modules.pos"),
		t("consultation.modules.manufacturing"),
		t("consultation.modules.ai"),
		t("consultation.modules.other"),
	];

	const benefits = [
		{ icon: Calendar, text: t("consultation.benefits.schedule") },
		{ icon: MessageSquare, text: t("consultation.benefits.tailored") },
		{ icon: Shield, text: t("consultation.benefits.noObligation") },
		{ icon: Clock, text: t("consultation.benefits.quick") },
	];

	const stats = [
		{ icon: Users, value: "10,000+", label: t("consultation.stats.customers") },
		{ icon: Headphones, value: "24/7", label: t("consultation.stats.support") },
		{ icon: CheckCircle, value: "30 min", label: t("consultation.stats.session") },
	];

	return (
		<>
			<SEOHead
				title={t("consultation.title")}
				description={t("consultation.subtitle")}
				keywords="ERP consultation, free ERP demo, business software Indonesia, HRIS demo, Omniflow consultation, jadwalkan demo ERP, konsultasi ERP gratis"
				type="website"
			/>
			<StructuredData
				type="Organization"
				data={{
					contactPoint: [
						{
							"@type": "ContactPoint",
							telephone: "+62 821 2560 9413",
							contactType: "sales",
							email: "contact@omniflow.id",
							availableLanguage: ["English", "Indonesian", "Chinese"],
							hoursAvailable: "Mo-Fr 08:00-18:00",
						},
					],
				}}
			/>

			<div className="min-h-screen bg-white">
				{/* Hero */}
				<section className="section-hero relative overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
						<div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
						<div
							className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
							style={{ animationDelay: "-8s" }}
						></div>
					</div>

					<div className="container-enterprise relative z-10">
						<div className="text-center max-w-4xl mx-auto">
							<div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-bold shadow-sm border border-blue-200 mb-8">
								<CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
								{t("consultation.badge")}
							</div>
							<h1 className="text-enterprise-primary mb-8 leading-tight">
								{t("consultation.title")}
							</h1>
							<p className="text-xl text-enterprise-secondary mb-16 max-w-2xl mx-auto leading-relaxed">
								{t("consultation.subtitle")}
							</p>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{stats.map((stat, index) => (
									<div
										key={index}
										className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/40"
									>
										<div className="p-3 bg-blue-50 rounded-xl mb-4 text-blue-600">
											<stat.icon className="h-6 w-6" />
										</div>
										<div className="text-2xl font-bold text-slate-900 mb-1">
											{stat.value}
										</div>
										<div className="text-sm text-slate-500">{stat.label}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Benefits */}
				<section className="py-20 bg-slate-50">
					<div className="container-enterprise">
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold text-enterprise-primary mb-4">
								{t("consultation.benefits.title")}
							</h2>
							<p className="text-enterprise-secondary max-w-2xl mx-auto">
								{t("consultation.benefits.subtitle")}
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 text-center"
								>
									<div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
										<benefit.icon className="h-7 w-7 text-white" />
									</div>
									<p className="text-slate-700 font-medium leading-relaxed">
										{benefit.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Form Section */}
				<section className="py-20 bg-white">
					<div className="container-enterprise">
						<div className="max-w-3xl mx-auto">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-enterprise-primary mb-4">
									{t("consultation.form.title")}
								</h2>
								<p className="text-enterprise-secondary">
									{t("consultation.form.subtitle")}
								</p>
							</div>

							{submitStatus === "success" && (
								<div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center">
									<CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
									<div>
										<p className="font-semibold text-green-800">
											{t("consultation.form.successTitle")}
										</p>
										<p className="text-green-700">
											{t("consultation.form.successMessage")}
										</p>
									</div>
								</div>
							)}

							<div className="card-enterprise p-10">
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label className="block text-sm font-semibold text-enterprise-primary mb-3">
												{t("consultation.form.name")} *
											</label>
											<input
												type="text"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												required
												className="form-input"
												placeholder={t("consultation.form.namePlaceholder")}
											/>
										</div>
										<div>
											<label className="block text-sm font-semibold text-enterprise-primary mb-3">
												{t("consultation.form.email")} *
											</label>
											<input
												type="email"
												name="email"
												value={formData.email}
												onChange={handleInputChange}
												required
												className="form-input"
												placeholder={t("consultation.form.emailPlaceholder")}
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label className="block text-sm font-semibold text-enterprise-primary mb-3">
												{t("consultation.form.company")}
											</label>
											<input
												type="text"
												name="company"
												value={formData.company}
												onChange={handleInputChange}
												className="form-input"
												placeholder={t("consultation.form.companyPlaceholder")}
											/>
										</div>
										<div>
											<label className="block text-sm font-semibold text-enterprise-primary mb-3">
												{t("consultation.form.phone")}
											</label>
											<input
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleInputChange}
												className="form-input"
												placeholder={t("consultation.form.phonePlaceholder")}
											/>
										</div>
									</div>

									<div>
										<label className="block text-sm font-semibold text-enterprise-primary mb-3">
											{t("consultation.form.module")}
										</label>
										<select
											name="module"
											value={formData.module}
											onChange={handleInputChange}
											className="form-select"
										>
											<option value="">
												{t("consultation.form.selectModule")}
											</option>
											{modules.map((mod) => (
												<option key={mod} value={mod}>
													{mod}
												</option>
											))}
										</select>
									</div>

									<div>
										<label className="block text-sm font-semibold text-enterprise-primary mb-3">
											{t("consultation.form.message")}
										</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											rows={4}
											className="form-textarea"
											placeholder={t("consultation.form.messagePlaceholder")}
										></textarea>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{isSubmitting ? (
											<>
												<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
												{t("consultation.form.submitting")}
											</>
										) : (
											<>
												{t("consultation.form.submit")}
												<ArrowRight className="ml-3 h-5 w-5" />
											</>
										)}
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="section-enterprise gradient-dark text-white">
					<div className="container-enterprise text-center">
						<h2 className="text-white mb-6">{t("consultation.cta.title")}</h2>
						<p className="text-blue-100 mb-12 max-w-3xl mx-auto text-xl">
							{t("consultation.cta.subtitle")}
						</p>
						<a
							href={`/${window.location.pathname.split("/")[1] || "id"}/modules`}
							className="btn-cta-light inline-flex items-center"
						>
							{t("consultation.cta.explore")}
							<ArrowRight className="ml-2 h-5 w-5" />
						</a>
					</div>
				</section>
			</div>
		</>
	);
}
