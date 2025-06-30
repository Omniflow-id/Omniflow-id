import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Building2, Users, Award, Shield, Globe, Headphones } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    companySize: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        jobTitle: '',
        companySize: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      details: t('contact.info.email.details'),
      description: t('contact.info.email.description'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      details: t('contact.info.phone.details'),
      description: t('contact.info.phone.description'),
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: MapPin,
      title: t('contact.info.address.title'),
      details: t('contact.info.address.details'),
      description: t('contact.info.address.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Headphones,
      title: t('contact.info.support.title'),
      details: t('contact.info.support.details'),
      description: t('contact.info.support.description'),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const subjects = [
    t('contact.form.subjects.general'),
    t('contact.form.subjects.demo'),
    t('contact.form.subjects.support'),
    t('contact.form.subjects.sales'),
    t('contact.form.subjects.partnership'),
    t('contact.form.subjects.enterprise'),
    t('contact.form.subjects.other')
  ];

  const companySizes = [
    t('contact.form.companySizes.small'),
    t('contact.form.companySizes.medium'),
    t('contact.form.companySizes.large'),
    t('contact.form.companySizes.enterprise'),
    t('contact.form.companySizes.mega')
  ];

  const features = [
    { icon: Building2, text: t('contact.features.security') },
    { icon: Users, text: t('contact.features.customers') },
    { icon: Award, text: t('contact.features.certified') },
    { icon: Shield, text: t('contact.features.uptime') },
    { icon: Globe, text: t('contact.features.support') },
    { icon: CheckCircle, text: t('contact.features.roi') }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-enterprise">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              {t('contact.badge')}
            </div>
            <h1 className="text-enterprise-primary mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-enterprise-secondary mb-12">
              {t('contact.subtitle')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg">
                  <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-center text-enterprise-secondary">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-enterprise bg-white">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-enterprise p-8 text-center group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-enterprise-primary mb-2">{info.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{info.details}</p>
                <p className="text-enterprise-muted">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Additional Info */}
      <section className="section-enterprise gradient-secondary">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-enterprise p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-enterprise-primary mb-4">{t('contact.form.title')}</h2>
                  <p className="text-enterprise-secondary">{t('contact.form.subtitle')}</p>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-green-800">{t('contact.form.success.title')}</p>
                      <p className="text-green-700">{t('contact.form.success.message')}</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center">
                    <AlertCircle className="h-6 w-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-semibold text-red-800">{t('contact.form.error.title')}</p>
                      <p className="text-red-700">{t('contact.form.error.message')}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        {t('contact.form.name')} {t('contact.form.required')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        {t('contact.form.email')} {t('contact.form.required')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder={t('contact.form.companyPlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        {t('contact.form.jobTitle')}
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder={t('contact.form.jobTitlePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        {t('contact.form.companySize')}
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">{t('contact.form.selectCompanySize')}</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                      {t('contact.form.subject')} {t('contact.form.required')}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                    >
                      <option value="">{t('contact.form.selectSubject')}</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                      {t('contact.form.message')} {t('contact.form.required')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder={t('contact.form.messagePlaceholder')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.sendMessage')}
                        <Send className="ml-3 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Office Info */}
              <div className="card-enterprise p-8">
                <h3 className="text-xl font-bold text-enterprise-primary mb-6">{t('contact.office.title')}</h3>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <p className="font-semibold text-enterprise-primary">{t('contact.office.name')}</p>
                    <p className="text-enterprise-muted">{t('contact.office.country')}</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-enterprise-primary">{t('contact.office.address')}</span>
                    <p className="text-enterprise-secondary">{t('contact.office.addressDetails')}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-enterprise-primary">{t('contact.office.hours')}</span>
                    <p className="text-enterprise-secondary">{t('contact.office.hoursDetails')}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-enterprise-primary">{t('contact.office.station')}</span>
                    <p className="text-enterprise-secondary">{t('contact.office.stationDetails')}</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card-enterprise p-8">
                <h3 className="text-xl font-bold text-enterprise-primary mb-6">{t('contact.whyChoose.title')}</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-enterprise-primary">2-4 {t('contact.whyChoose.hours')}</div>
                      <div className="text-sm text-enterprise-muted">{t('contact.whyChoose.responseTime')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-enterprise-primary">10,000+</div>
                      <div className="text-sm text-enterprise-muted">{t('contact.whyChoose.customers')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-enterprise-primary">99.9%</div>
                      <div className="text-sm text-enterprise-muted">{t('contact.whyChoose.uptime')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-enterprise gradient-dark text-white">
        <div className="container-enterprise text-center">
          <h2 className="text-white mb-6">
            {t('contact.cta.title')}
          </h2>
          <p className="text-blue-100 mb-12 max-w-3xl mx-auto text-xl">
            {t('contact.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-cta-light">
              {t('contact.cta.scheduleDemo')}
            </button>
            <button className="btn-cta-outline">
              {t('contact.cta.viewPricing')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}