import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('contact.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('contact.info.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>{t('contact.info.email.details')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>{t('contact.info.phone.details')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>{t('contact.info.address.details')}</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name')}</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={t('contact.form.messagePlaceholder')}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('contact.form.sendMessage')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}