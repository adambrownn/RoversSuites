import { useLanguage } from '../contexts/LanguageContext';
import bedroomMaster from '../assets/images/bedroom-master.jpeg';
import kitchenModern from '../assets/images/kitchen-modern.jpeg';
import livingRoom from '../assets/images/living-room.jpeg';
import balconyView from '../assets/images/balcony-view.jpeg';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                <div className="text-slate-600">{t('about.bedrooms')}</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                <div className="text-slate-600">{t('about.bathrooms')}</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
                <div className="text-slate-600">{t('about.guests')}</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-slate-600">{t('about.support')}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={bedroomMaster}
                  alt="Cozy bedroom with mountain view"
                  loading="lazy"
                  className="w-full h-32 xs:h-40 sm:h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                  Master Bedroom
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={kitchenModern}
                  alt="Modern kitchen"
                  loading="lazy"
                  className="w-full h-32 xs:h-40 sm:h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                  Fully Equipped Kitchen
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:mt-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={livingRoom}
                  alt="Living room with mountain view"
                  loading="lazy"
                  className="w-full h-32 xs:h-40 sm:h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                  Spacious Living Area
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={balconyView}
                  alt="Balcony with panoramic mountain views"
                  loading="lazy"
                  className="w-full h-32 xs:h-40 sm:h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                  Private Balcony
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;