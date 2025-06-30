import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';

export default function HRISPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Features />
      <Screenshots />
      <Benefits />
      <Testimonials />
      <CTASection />
    </div>
  );
}