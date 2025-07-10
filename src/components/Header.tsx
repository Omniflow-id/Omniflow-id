import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, CircuitBoard } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Get current language from URL
  const getCurrentLang = () => {
    const match = location.pathname.match(/^\/(en|id|zh)/);
    return match ? match[1] : 'en';
  };

  const currentLang = getCurrentLang();
  const langPrefix = `/${currentLang}`;

  return (
    <header className="fixed w-full backdrop-enterprise shadow-enterprise z-50">
      <nav className="container-enterprise py-6">
        <div className="flex items-center justify-between">
          <Link to={langPrefix} className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <CircuitBoard className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-enterprise-primary">Omniflow.id</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to={langPrefix} className="nav-link">{t('common.home')}</Link>
            <Link to={`${langPrefix}/modules/hris`} className="nav-link">{t('navigation.hris')}</Link>
            <Link to={`${langPrefix}/blog`} className="nav-link">{t('common.blog')}</Link>
            <Link to={`${langPrefix}/contact`} className="nav-link">{t('common.contact')}</Link>
            <LanguageSwitcher />
            <Link to={`${langPrefix}/contact`} className="btn-primary ml-4">
              {t('common.getStarted')}
            </Link>
          </div>

          <button 
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 p-6 bg-white rounded-2xl shadow-enterprise-lg border border-gray-100">
            <div className="space-y-4">
              <Link to={langPrefix} className="block nav-link text-lg">{t('common.home')}</Link>
              <Link to={`${langPrefix}/modules/hris`} className="block nav-link text-lg">{t('navigation.hris')}</Link>
              <Link to={`${langPrefix}/blog`} className="block nav-link text-lg">{t('common.blog')}</Link>
              <Link to={`${langPrefix}/contact`} className="block nav-link text-lg">{t('common.contact')}</Link>
              <div className="pt-4 border-t border-gray-200">
                <LanguageSwitcher />
              </div>
              <Link to={`${langPrefix}/contact`} className="btn-primary w-full mt-4">
                {t('common.getStarted')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}