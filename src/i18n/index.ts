import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import idTranslations from './locales/id.json';
import zhTranslations from './locales/zh.json';

const resources = {
  en: {
    translation: enTranslations
  },
  id: {
    translation: idTranslations
  },
  zh: {
    translation: zhTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['path', 'localStorage', 'navigator', 'htmlTag'],
      lookupFromPathIndex: 0,
      checkWhitelist: true,
      caches: ['localStorage'],
      convertDetectedLanguage: (lng: string) => {
        // Handle path-based language detection
        const pathMatch = window.location.pathname.match(/^\/(en|id|zh)/);
        if (pathMatch) {
          return pathMatch[1];
        }
        return lng;
      }
    },
    
    // Whitelist supported languages
    supportedLngs: ['en', 'id', 'zh'],
    nonExplicitSupportedLngs: true,
    
    // Load namespace
    ns: ['translation'],
    defaultNS: 'translation',
    
    // React options
    react: {
      useSuspense: false
    }
  });

export default i18n;