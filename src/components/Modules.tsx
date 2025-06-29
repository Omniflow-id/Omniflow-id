import React from 'react';
import { 
  Users, BoxesIcon, TrendingUp, Calculator, Store, UserCheck, HeartHandshake,
  Briefcase, Megaphone, GraduationCap, CreditCard, Package, Brain, Settings,
  Factory, Truck, ShoppingCart
} from 'lucide-react';

const modules = [
  { icon: Users, name: 'HRIS', description: 'Complete human resource management system', color: 'from-blue-500 to-blue-600' },
  { icon: BoxesIcon, name: 'Stock Management', description: 'Efficient inventory tracking and control', color: 'from-emerald-500 to-emerald-600' },
  { icon: TrendingUp, name: 'Sales Management', description: 'Streamline your sales operations', color: 'from-purple-500 to-purple-600' },
  { icon: Calculator, name: 'Accounting', description: 'Comprehensive financial management', color: 'from-orange-500 to-orange-600' },
  { icon: Store, name: 'PoS', description: 'Modern point of sale system', color: 'from-pink-500 to-pink-600' },
  { icon: UserCheck, name: 'Customers', description: 'Customer relationship management', color: 'from-indigo-500 to-indigo-600' },
  { icon: HeartHandshake, name: 'CRM', description: 'Build stronger customer relationships', color: 'from-red-500 to-red-600' },
  { icon: Briefcase, name: 'Project Management', description: 'Efficient project tracking and delivery', color: 'from-cyan-500 to-cyan-600' },
  { icon: Megaphone, name: 'Marketing', description: 'Integrated marketing solutions', color: 'from-yellow-500 to-yellow-600' },
  { icon: GraduationCap, name: 'LMS', description: 'Learning management system', color: 'from-teal-500 to-teal-600' },
  { icon: CreditCard, name: 'Payment Gateway', description: 'Secure payment processing', color: 'from-violet-500 to-violet-600' },
  { icon: Package, name: 'Inventory', description: 'Advanced inventory management', color: 'from-lime-500 to-lime-600' },
  { icon: Brain, name: 'AI', description: 'Intelligent business automation', color: 'from-rose-500 to-rose-600' },
  { icon: Settings, name: 'Administration', description: 'Centralized system administration', color: 'from-slate-500 to-slate-600' },
  { icon: Factory, name: 'Manufacturing', description: 'Manufacturing process management', color: 'from-amber-500 to-amber-600' },
  { icon: Truck, name: 'Supply Chain', description: 'End-to-end supply chain visibility', color: 'from-green-500 to-green-600' },
  { icon: ShoppingCart, name: 'Procurement', description: 'Streamlined procurement process', color: 'from-blue-500 to-indigo-600' }
];

export default function Modules() {
  return (
    <section className="section-enterprise bg-white">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            17 Integrated Modules
          </div>
          <h2 className="text-enterprise-primary mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
            From HR management to AI-powered analytics, our integrated modules work seamlessly together to power your entire business ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={module.name} className="card-feature group cursor-pointer">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${module.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors">
                  {module.name}
                </h3>
                <p className="text-enterprise-secondary leading-relaxed">
                  {module.description}
                </p>
                <div className="mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}