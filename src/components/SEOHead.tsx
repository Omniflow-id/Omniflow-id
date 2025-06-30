import React from 'react';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function SEOHead({
  title,
  description,
  keywords,
  image = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}: SEOHeadProps) {
  const { t, i18n } = useTranslation();
  
  const currentUrl = url || window.location.href;
  const siteName = 'Omniflow.id';
  const defaultTitle = t('hero.title');
  const defaultDescription = t('hero.subtitle');
  const defaultKeywords = 'ERP, HRIS, Business Management, Enterprise Software, Omniflow, Indonesia, Sistem Manajemen Bisnis';
  
  const finalTitle = title ? `${title} | ${siteName}` : `${defaultTitle} | ${siteName}`;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;

  React.useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('author', author || 'Omniflow.id Team');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('language', i18n.language);
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    updateMetaTag('theme-color', '#2563eb');
    updateMetaTag('msapplication-TileColor', '#2563eb');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('format-detection', 'telephone=no');

    // Open Graph tags
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', i18n.language === 'id' ? 'id_ID' : i18n.language === 'zh' ? 'zh_CN' : 'en_US', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@omniflowid');
    updateMetaTag('twitter:creator', '@omniflowid');

    // Article specific tags
    if (type === 'article') {
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      if (author) updateMetaTag('article:author', author, true);
      if (section) updateMetaTag('article:section', section, true);
      tags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.setAttribute('content', tag);
        document.head.appendChild(meta);
      });
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Alternate language links
    const languages = [
      { code: 'en', href: currentUrl.replace(/\/(id|zh)\//, '/') },
      { code: 'id', href: currentUrl.includes('/id/') ? currentUrl : currentUrl.replace(window.location.origin, `${window.location.origin}/id`) },
      { code: 'zh', href: currentUrl.includes('/zh/') ? currentUrl : currentUrl.replace(window.location.origin, `${window.location.origin}/zh`) }
    ];

    // Remove existing alternate links
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());

    // Add new alternate links
    languages.forEach(lang => {
      const alternate = document.createElement('link');
      alternate.setAttribute('rel', 'alternate');
      alternate.setAttribute('hreflang', lang.code);
      alternate.setAttribute('href', lang.href);
      document.head.appendChild(alternate);
    });

    // Add x-default
    const xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    xDefault.setAttribute('href', languages[0].href);
    document.head.appendChild(xDefault);

  }, [finalTitle, finalDescription, finalKeywords, image, currentUrl, type, publishedTime, modifiedTime, author, section, tags, i18n.language]);

  return null;
}