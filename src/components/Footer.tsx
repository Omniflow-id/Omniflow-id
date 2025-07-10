import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { CircuitBoard, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const location = useLocation();

  // Get current language from URL
  const getCurrentLang = () => {
    const match = location.pathname.match(/^\/(en|id|zh)/);
    return match ? match[1] : 'en';
  };

  const currentLang = getCurrentLang();
  const langPrefix = `/${currentLang}`;

  return (
    <footer className="gradient-dark text-white">
      <div className="container-enterprise py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <CircuitBoard className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">Omniflow.id</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-100">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>{t('contact.info.email.details')}</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>{t('contact.info.phone.details')}</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>{t('contact.info.address.details')}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.solutions')}</h3>
            <ul className="space-y-3">
              <li><a href={`${langPrefix}/modules/hris`} className="text-blue-100 hover:text-white transition-colors">{t('navigation.hris')}</a></li>
              <li><a href={`${langPrefix}#modules`} className="text-blue-100 hover:text-white transition-colors">{t('modules.accounting.name')}</a></li>
              <li><a href={`${langPrefix}#modules`} className="text-blue-100 hover:text-white transition-colors">{t('modules.crm.name')}</a></li>
              <li><a href={`${langPrefix}#modules`} className="text-blue-100 hover:text-white transition-colors">{t('modules.inventory.name')}</a></li>
              <li><a href={`${langPrefix}#modules`} className="text-blue-100 hover:text-white transition-colors">{t('modules.ai.name')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li><a href={`${langPrefix}/about`} className="text-blue-100 hover:text-white transition-colors">{t('footer.aboutUs')}</a></li>
              <li><a href={`${langPrefix}/blog`} className="text-blue-100 hover:text-white transition-colors">{t('common.blog')}</a></li>
              <li><a href={`${langPrefix}/careers`} className="text-blue-100 hover:text-white transition-colors">{t('footer.careers')}</a></li>
              <li><a href={`${langPrefix}/contact`} className="text-blue-100 hover:text-white transition-colors">{t('common.contact')}</a></li>
              <li><a href={`${langPrefix}/support`} className="text-blue-100 hover:text-white transition-colors">{t('footer.support')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-blue-100">
              <a href="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</a>
              <a href="/cookies" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-blue-800">
            <p className="text-blue-100">
              &copy; {new Date().getFullYear()} Omniflow.id. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}