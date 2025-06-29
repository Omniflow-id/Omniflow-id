import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Building2, Users, Award, Shield, Globe, Headphones } from 'lucide-react';

export default function ContactPage() {
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
      title: 'Email Us',
      details: 'contact@omniflow.id',
      description: 'Get in touch anytime',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+62 (21) 1234-5678',
      description: 'Mon-Fri, 8AM-6PM WIB',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Jakarta, Indonesia',
      description: 'Schedule an office visit',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      details: 'Always Available',
      description: 'Enterprise support',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Product Demo',
    'Technical Support',
    'Sales Question',
    'Partnership Opportunity',
    'Enterprise Solutions',
    'Other'
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const features = [
    { icon: Building2, text: 'Enterprise-grade security' },
    { icon: Users, text: '10,000+ satisfied customers' },
    { icon: Award, text: 'ISO 27001 certified' },
    { icon: Shield, text: '99.9% uptime guarantee' },
    { icon: Globe, text: 'Global support coverage' },
    { icon: CheckCircle, text: 'Proven ROI results' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-enterprise">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Trusted by Enterprise Leaders
            </div>
            <h1 className="text-enterprise-primary mb-6">
              Ready to Transform Your Business?
            </h1>
            <p className="text-xl text-enterprise-secondary mb-12">
              Connect with our enterprise solutions experts and discover how Omniflow.id can streamline your operations, boost productivity, and accelerate growth.
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
                  <h2 className="text-3xl font-bold text-enterprise-primary mb-4">Let's Start a Conversation</h2>
                  <p className="text-enterprise-secondary">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-green-800">Message sent successfully!</p>
                      <p className="text-green-700">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center">
                    <AlertCircle className="h-6 w-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-semibold text-red-800">Error sending message</p>
                      <p className="text-red-700">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+62 xxx-xxxx-xxxx"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="CEO, CTO, Manager, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                        Company Size
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Select company size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-enterprise-primary mb-3">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell us about your business needs, challenges, or how we can help you..."
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
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
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
                <h3 className="text-xl font-bold text-enterprise-primary mb-6">Our Office</h3>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <p className="font-semibold text-enterprise-primary">Jakarta Office</p>
                    <p className="text-enterprise-muted">Indonesia</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-enterprise-primary">Address:</span>
                    <p className="text-enterprise-secondary">Jl. Sudirman No. 123<br />Jakarta Pusat 10220</p>
                  </div>
                  <div>
                    <span className="font-semibold text-enterprise-primary">Business Hours:</span>
                    <p className="text-enterprise-secondary">Monday - Friday: 8:00 AM - 6:00 PM WIB</p>
                  </div>
                  <div>
                    <span className="font-semibold text-enterprise-primary">Nearest Station:</span>
                    <p className="text-enterprise-secondary">MRT Bundaran HI (5 min walk)</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card-enterprise p-8">
                <h3 className="text-xl font-bold text-enterprise-primary mb-6">Why Choose Us</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-enterprise-primary">2-4 Hours</div>
                      <div className="text-sm text-enterprise-muted">Average response time</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-enterprise-primary">10,000+</div>
                      <div className="text-sm text-enterprise-muted">Happy customers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-enterprise-primary">99.9%</div>
                      <div className="text-sm text-enterprise-muted">Uptime guarantee</div>
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
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-12 max-w-3xl mx-auto text-xl">
            Join thousands of businesses that trust Omniflow.id to streamline their operations and boost productivity. Let's discuss how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-primary bg-white text-blue-700 hover:bg-blue-50">
              Schedule a Demo
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-blue-700">
              View Pricing Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}