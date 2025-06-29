import React from 'react';
import { CheckCircle, TrendingUp, Shield, Zap, Globe, Award } from 'lucide-react';

const advantages = [
  {
    icon: CheckCircle,
    title: 'All-in-One Solution',
    description: 'Integrate all business processes in a single platform, eliminating the need for multiple software solutions.',
    stats: '90% reduction in software complexity'
  },
  {
    icon: TrendingUp,
    title: 'Real-time Analytics',
    description: 'Access comprehensive business insights and reports in real-time for better decision-making.',
    stats: '3x faster decision making'
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Grow your business without worrying about system limitations. Our platform scales with you.',
    stats: 'Supports 100K+ users'
  },
  {
    icon: Award,
    title: 'Cost-Effective',
    description: 'Reduce operational costs by streamlining processes and eliminating redundant systems.',
    stats: '40% cost reduction average'
  },
  {
    icon: Globe,
    title: 'Enhanced Productivity',
    description: 'Automate routine tasks and improve team collaboration across departments.',
    stats: '60% productivity increase'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security measures to protect your sensitive business data.',
    stats: 'ISO 27001 certified'
  }
];

export default function Advantages() {
  return (
    <section className="section-enterprise gradient-secondary">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <h2 className="text-enterprise-primary mb-6">
            Why Choose Omniflow.id?
          </h2>
          <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
            Join thousands of forward-thinking companies that have transformed their operations with our enterprise-grade solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={advantage.title} className="card-enterprise p-8 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-enterprise-primary mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-enterprise-secondary mb-4 leading-relaxed">
                    {advantage.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {advantage.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}