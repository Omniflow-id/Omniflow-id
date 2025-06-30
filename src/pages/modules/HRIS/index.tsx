import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import SEOHead from '../../../components/SEOHead';
import StructuredData from '../../../components/StructuredData';

export default function HRISPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('hris.title')}
        description={t('hris.subtitle')}
        keywords="HRIS Software, Human Resources Management, Employee Management, HR Automation, Payroll System, Leave Management, Performance Management, Indonesia HRIS"
        type="website"
      />
      <StructuredData 
        type="SoftwareApplication" 
        data={{
          name: "Omniflow HRIS",
          description: t('hris.subtitle'),
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": t('hris.cta.features.trial')
          },
          featureList: [
            t('hris.features.recruitment.title'),
            t('hris.features.records.title'),
            t('hris.features.leave.title'),
            t('hris.features.performance.title'),
            t('hris.features.attendance.title'),
            t('hris.features.compliance.title')
          ]
        }}
      />
      <StructuredData 
        type="Service" 
        data={{
          name: "HRIS Implementation Services",
          description: t('hris.subtitle'),
          serviceType: "Human Resources Information System"
        }}
      />
      
      <div className="min-h-screen bg-white">
        <HeroSection />
        <Features />
        <Screenshots />
        <Benefits />
        <Testimonials />
        <CTASection />
      </div>
    </>
  );
}