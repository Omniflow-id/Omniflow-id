import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="container-enterprise">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              <CheckCircle className="h-4 w-4 mr-2" />
              Trusted by 10,000+ Businesses
            </div>
            
            <h1 className="text-enterprise-primary">
              Transform Your Business with 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"> Integrated ERP Solutions</span>
            </h1>
            
            <p className="text-xl text-enterprise-secondary max-w-2xl">
              Omniflow.id delivers enterprise-grade business management tools designed to streamline operations, boost productivity, and accelerate growth across your entire organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-enterprise-muted">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-enterprise-muted">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-enterprise-muted">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              alt="Enterprise Management Dashboard"
              className="relative rounded-3xl shadow-enterprise-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-enterprise">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-enterprise-primary">ROI Increase</div>
                  <div className="text-2xl font-bold text-green-600">+247%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}