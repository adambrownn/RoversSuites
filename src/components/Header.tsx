import React, { useState } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Mountain className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-slate-800">Rovers Suites</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('features')} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.amenities')}</button>
            <button onClick={() => scrollToSection('location')} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.location')}</button>
            <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.gallery')}</button>
            <button onClick={() => scrollToSection('booking')} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.contact')}</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <button 
              onClick={() => scrollToSection('booking')}
              className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {t('nav.book')}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600">{t('nav.about')}</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600">{t('nav.amenities')}</button>
              <button onClick={() => scrollToSection('location')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600">{t('nav.location')}</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600">{t('nav.gallery')}</button>
              <button onClick={() => scrollToSection('booking')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600">{t('nav.contact')}</button>
              <div className="px-3 py-2">
                <LanguageToggle />
              </div>
              <button 
                onClick={() => scrollToSection('booking')}
                className="block w-full mt-2 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-center"
              >
                {t('nav.book')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;