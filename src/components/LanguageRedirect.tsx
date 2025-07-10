import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LanguageRedirect() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.split('-')[0];
    
    // Get saved language from localStorage
    const savedLang = localStorage.getItem('i18nextLng');
    
    // Determine target language
    let targetLang = 'en'; // default
    
    if (savedLang && ['en', 'id', 'zh'].includes(savedLang)) {
      targetLang = savedLang;
    } else if (['id', 'zh'].includes(browserLang)) {
      targetLang = browserLang;
    }
    
    // Change i18n language if needed
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
    
    // Redirect to language-specific route
    navigate(`/${targetLang}`, { replace: true });
  }, [navigate, i18n]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}