import React from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What makes Omniflow.id different from other ERP solutions?',
    answer: 'Omniflow.id offers a unique combination of comprehensive modules, modern technology, and seamless integration capabilities. Our AI-powered features, intuitive interface, and enterprise-grade security set us apart from traditional ERP systems. We focus on user experience while maintaining powerful functionality.'
  },
  {
    question: 'How long does implementation typically take?',
    answer: 'Implementation time varies based on your business size and requirements. Basic setup takes 2-4 weeks for small businesses, while enterprise implementations typically take 2-3 months. We provide dedicated project managers and 24/7 support throughout the entire process to ensure smooth deployment.'
  },
  {
    question: 'Can Omniflow.id be customized for my specific industry?',
    answer: 'Absolutely. Omniflow.id is highly customizable and can be tailored to meet the specific needs of your industry. Our modular architecture allows for flexible configuration, custom workflows, and industry-specific features. We have experience across manufacturing, retail, services, and more.'
  },
  {
    question: 'What kind of support and training do you provide?',
    answer: 'We provide comprehensive support including 24/7 technical assistance, regular system updates, personalized training sessions, and dedicated account managers. Our support team includes certified experts who understand your business needs and can provide strategic guidance.'
  },
  {
    question: 'How secure is my data with Omniflow.id?',
    answer: 'Security is our top priority. We maintain ISO 27001 certification, use enterprise-grade encryption, implement multi-factor authentication, and conduct regular security audits. Your data is stored in secure, compliant data centers with 99.9% uptime guarantee.'
  },
  {
    question: 'Can I integrate Omniflow.id with my existing systems?',
    answer: 'Yes, Omniflow.id offers robust integration capabilities with popular business tools, accounting software, CRM systems, and third-party applications. Our API-first approach ensures seamless data flow between systems, minimizing disruption to your current workflows.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="section-enterprise bg-white">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-enterprise-primary mb-6">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
            Find answers to common questions about our platform, implementation, and support services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card-enterprise overflow-hidden">
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-blue-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-enterprise-primary text-lg pr-4">
                  {faq.question}
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
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-enterprise-secondary mb-6">
            Still have questions? Our team is here to help.
          </p>
          <a href="#contact" className="btn-primary">
            Contact Our Experts
          </a>
        </div>
      </div>
    </section>
  );
}