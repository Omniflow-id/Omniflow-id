import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Modules from '../components/Modules';
import Advantages from '../components/Advantages';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('hero.title')}
        description={t('hero.subtitle')}
        keywords="ERP Software, HRIS, Business Management, Enterprise Solutions, Omniflow, Indonesia, Sistem Manajemen Bisnis, Human Resources, Accounting Software, CRM System"
        type="website"
      />
      <StructuredData type="WebSite" />
      <StructuredData type="Organization" />
      <StructuredData type="SoftwareApplication" />
      
      <Hero />
      <Modules />
      <Advantages />
      <FAQ />
      <Contact />
    </>
  );
}