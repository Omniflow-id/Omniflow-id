import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
	const { t } = useTranslation();

	return (
		<section id="contact" className="py-16 bg-gray-50">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12">
					{t("contact.title")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div>
						<h3 className="text-xl font-semibold mb-6">
							{t("contact.info.title")}
						</h3>
						<div className="space-y-4">
							<div className="flex items-center space-x-4">
								<Mail className="h-5 w-5 text-blue-600" />
								<span>{t("contact.info.email.details")}</span>
							</div>
							<div className="flex items-center space-x-4">
								<a
									href="https://api.whatsapp.com/send?phone=6282125609413"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-4 text-blue-600 hover:text-blue-700 transition-colors"
								>
									<Phone className="h-5 w-5" />
									<span>{t("contact.info.phone.details")}</span>
								</a>
							</div>
							<div className="space-y-2">
								<div className="flex items-start space-x-4">
									<MapPin className="h-5 w-5 text-blue-600 mt-1" />
									<div>
										<p className="font-medium">{t("contact.office.name")}</p>
										<p className="text-sm text-gray-600 whitespace-pre-line">
											{t("contact.office.addressDetails")}
										</p>
									</div>
								</div>
							</div>
							<div className="mt-6">
								<a
									href="https://api.whatsapp.com/send?phone=6282125609413&text=Halo,%20dengan%20Admin%20Omniflow%3F%20Saya%20ingin%20konsultasi%20perihal%20produk%20Omniflow."
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
								>
									<MessageCircle className="h-5 w-5" />
									<span>Chat via WhatsApp</span>
								</a>
							</div>
						</div>
					</div>
					<form className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								{t("contact.form.name")}
							</label>
							<input
								type="text"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder={t("contact.form.namePlaceholder")}
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								{t("contact.form.email")}
							</label>
							<input
								type="email"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder={t("contact.form.emailPlaceholder")}
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								{t("contact.form.message")}
							</label>
							<textarea
								rows={4}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder={t("contact.form.messagePlaceholder")}
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							{t("contact.form.sendMessage")}
						</button>
					</form>
					<div className="mt-8">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6591830399225!2d106.78929841413706!3d-6.176359362240449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65f73d4c9cb%3A0x144ec1e5914e9cc3!2sAPL%20Tower%2C%20RT.3%2FRW.5%2C%20Tj.%20Duren%20Sel.%2C%20Kec.%20Grogol%20petamburan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011470!5e0!3m2!1sid!2sid!4v1640794746998!5m2!1sid!2sid"
							frameBorder="0"
							style={{ border: "0", width: "100%", height: "290px" }}
							allowFullScreen
							className="rounded-lg shadow-md"
							title="Office Location"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
