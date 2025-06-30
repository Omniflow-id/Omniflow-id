import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  UserPlus, FileText, Calendar, BarChart, Clock, Shield, 
  Users, CheckCircle 
} from 'lucide-react';

const featureKeys = ['recruitment', 'records', 'leave', 'performance', 'attendance', 'compliance'];
const featureIcons = [UserPlus, FileText, Calendar, BarChart, Clock, Shield];
const featureColors = [
  'from-blue-500 to-blue-600',
  'from-emerald-500 to-emerald-600',
  'from-purple-500 to-purple-600',
  'from-orange-500 to-orange-600',
  'from-pink-500 to-pink-600',
  'from-indigo-500 to-indigo-600'
];

export default function Features() {
  const { t } = useTranslation();

  return (
    <section className="section-enterprise bg-white">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Users className="h-4 w-4 mr-2" />
            {t('hris.features.badge')}
          </div>
          <h2 className="text-enterprise-primary mb-6">
            {t('hris.features.title')}
          </h2>
          <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
            {t('hris.features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureKeys.map((featureKey, index) => {
            const Icon = featureIcons[index];
            const color = featureColors[index];
            return (
              <div key={featureKey} className="card-feature group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors">
                  {t(`hris.features.${featureKey}.title`)}
                </h3>
                <p className="text-enterprise-secondary leading-relaxed mb-4">
                  {t(`hris.features.${featureKey}.description`)}
                </p>
                <ul className="space-y-2">
                  {t(`hris.features.${featureKey}.benefits`, { returnObjects: true }).map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-center text-sm text-enterprise-muted">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('common.learnMore')} →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}