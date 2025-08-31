import { 
  Bed, 
  Mountain, 
  ChefHat, 
  Tv, 
  Car, 
  Plane, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: <Bed className="h-8 w-8" />,
      title: t('features.luxury'),
      description: t('features.luxury.desc')
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: t('features.views'),
      description: t('features.views.desc')
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: t('features.kitchen'),
      description: t('features.kitchen.desc')
    },
    {
      icon: <Tv className="h-8 w-8" />,
      title: t('features.amenities'),
      description: t('features.amenities.desc')
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: t('features.parking'),
      description: t('features.parking.desc')
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: t('features.transfers'),
      description: t('features.transfers.desc')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('features.hospitality'),
      description: t('features.hospitality.desc')
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: t('features.nonsmoking'),
      description: t('features.nonsmoking.desc')
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-stone-50 rounded-2xl hover:bg-emerald-50 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;