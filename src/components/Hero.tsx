import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import heroImage from '../assets/images/hero-main.jpeg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${heroImage}')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-3 xs:px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-light mb-8 opacity-90">
          {t('hero.subtitle')}
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-12 opacity-80 max-w-3xl mx-auto">
          {t('hero.description')}
        </p>
        
        <button 
          onClick={scrollToBooking}
          className="px-6 py-3 xs:px-8 xs:py-4 bg-emerald-600 text-white rounded-full text-base xs:text-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
        >
          {t('hero.cta')}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;