import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqKeys = ['difference', 'implementation', 'customization', 'support', 'security', 'integration'];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="section-enterprise bg-white">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="h-4 w-4 mr-2" />
            {t('faq.badge')}
          </div>
          <h2 className="text-enterprise-primary mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqKeys.map((faqKey, index) => (
            <div key={index} className="card-enterprise overflow-hidden">
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-blue-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-enterprise-primary text-lg pr-4">
                  {t(`faq.questions.${faqKey}.question`)}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-enterprise-muted" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 border-t border-gray-100">
                  <p className="text-enterprise-secondary leading-relaxed pt-4">
                    {t(`faq.questions.${faqKey}.answer`)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-enterprise-secondary mb-6">
            {t('faq.stillHaveQuestions')}
          </p>
          <a href="#contact" className="btn-primary">
            {t('faq.contactExperts')}
          </a>
        </div>
      </div>
    </section>
  );
}