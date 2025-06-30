import React from 'react';
import { useTranslation } from 'react-i18next';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'Article' | 'SoftwareApplication' | 'Service';
  data?: any;
}

export default function StructuredData({ type = 'Organization', data = {} }: StructuredDataProps) {
  const { t, i18n } = useTranslation();

  const getOrganizationData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Omniflow.id",
    "alternateName": "Omniflow",
    "url": "https://omniflow.id",
    "logo": "https://omniflow.id/logo.png",
    "description": t('hero.subtitle'),
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "Omniflow Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Sudirman No. 123",
      "addressLocality": "Jakarta Pusat",
      "postalCode": "10220",
      "addressCountry": "ID"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+62-21-1234-5678",
        "contactType": "customer service",
        "email": "contact@omniflow.id",
        "availableLanguage": ["English", "Indonesian", "Chinese"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+62-21-1234-5678",
        "contactType": "sales",
        "email": "sales@omniflow.id"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/omniflowid",
      "https://www.twitter.com/omniflowid",
      "https://www.linkedin.com/company/omniflowid",
      "https://www.instagram.com/omniflowid"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise Software Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "HRIS System",
            "description": t('modules.hris.description'),
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "ERP System",
            "description": t('hero.subtitle'),
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser"
          }
        }
      ]
    },
    ...data
  });

  const getWebSiteData = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Omniflow.id",
    "url": "https://omniflow.id",
    "description": t('hero.subtitle'),
    "publisher": {
      "@type": "Organization",
      "name": "Omniflow.id"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://omniflow.id/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language", 
        "name": "Indonesian",
        "alternateName": "id"
      },
      {
        "@type": "Language",
        "name": "Chinese",
        "alternateName": "zh"
      }
    ],
    ...data
  });

  const getSoftwareApplicationData = () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Omniflow ERP System",
    "description": t('hero.subtitle'),
    "url": "https://omniflow.id",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free trial available"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Omniflow.id"
    },
    "datePublished": "2020-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "screenshot": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    "softwareVersion": "2.0",
    "requirements": "Modern web browser",
    "fileSize": "N/A",
    "installUrl": "https://omniflow.id/signup",
    "downloadUrl": "https://omniflow.id/signup",
    "supportingData": "https://omniflow.id/documentation",
    ...data
  });

  const getServiceData = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Enterprise Resource Planning Solutions",
    "description": t('hero.subtitle'),
    "provider": {
      "@type": "Organization",
      "name": "Omniflow.id"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ERP Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HRIS Implementation",
            "description": t('modules.hris.description')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Business Process Automation",
            "description": "Automate your business processes"
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Excellent ERP solution that transformed our business operations."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    },
    ...data
  });

  const getArticleData = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title || "Enterprise Insights",
    "description": data.description || t('blog.subtitle'),
    "image": data.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    "author": {
      "@type": "Organization",
      "name": "Omniflow.id"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Omniflow.id",
      "logo": {
        "@type": "ImageObject",
        "url": "https://omniflow.id/logo.png"
      }
    },
    "datePublished": data.publishedTime || new Date().toISOString(),
    "dateModified": data.modifiedTime || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    },
    "articleSection": data.section || "Business Technology",
    "keywords": data.keywords || "ERP, Business Management, Technology",
    "wordCount": data.wordCount || 1000,
    "articleBody": data.content || "",
    ...data
  });

  const getStructuredData = () => {
    switch (type) {
      case 'WebSite':
        return getWebSiteData();
      case 'Article':
        return getArticleData();
      case 'SoftwareApplication':
        return getSoftwareApplicationData();
      case 'Service':
        return getServiceData();
      default:
        return getOrganizationData();
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}