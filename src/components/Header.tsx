import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoFull from '../assets/logos/rovers-logo-full.png';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="flex items-center space-x-2 cursor-pointer" onClick={e => { e.preventDefault(); scrollToSection('hero'); }}>
            <img src={logoFull} alt="Rovers Suites logo" className="h-10 sm:h-12 md:h-14 w-auto" style={{maxWidth:'180px'}} />
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" onClick={e => { e.preventDefault(); scrollToSection('about'); }} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.about')}</a>
            <a href="#features" onClick={e => { e.preventDefault(); scrollToSection('features'); }} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.amenities')}</a>
            <a href="#location" onClick={e => { e.preventDefault(); scrollToSection('location'); }} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.location')}</a>
            <a href="#gallery" onClick={e => { e.preventDefault(); scrollToSection('gallery'); }} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.gallery')}</a>
            <a href="#booking" onClick={e => { e.preventDefault(); scrollToSection('booking'); }} className="text-slate-700 hover:text-emerald-600 transition-colors">{t('nav.contact')}</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <a 
              href="#booking"
              onClick={e => { e.preventDefault(); scrollToSection('booking'); }}
              className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {t('nav.book')}
            </a>
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
            <nav className="flex flex-col space-y-4 py-4 px-4">
              <a href="#about" onClick={e => { e.preventDefault(); scrollToSection('about'); setIsMenuOpen(false); }} className="text-slate-700 hover:text-emerald-600 transition-colors py-2">{t('nav.about')}</a>
              <a href="#features" onClick={e => { e.preventDefault(); scrollToSection('features'); setIsMenuOpen(false); }} className="text-slate-700 hover:text-emerald-600 transition-colors py-2">{t('nav.amenities')}</a>
              <a href="#location" onClick={e => { e.preventDefault(); scrollToSection('location'); setIsMenuOpen(false); }} className="text-slate-700 hover:text-emerald-600 transition-colors py-2">{t('nav.location')}</a>
              <a href="#gallery" onClick={e => { e.preventDefault(); scrollToSection('gallery'); setIsMenuOpen(false); }} className="text-slate-700 hover:text-emerald-600 transition-colors py-2">{t('nav.gallery')}</a>
              <a href="#booking" onClick={e => { e.preventDefault(); scrollToSection('booking'); setIsMenuOpen(false); }} className="text-slate-700 hover:text-emerald-600 transition-colors py-2">{t('nav.contact')}</a>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <LanguageToggle />
                <a 
                  href="#booking"
                  onClick={e => { e.preventDefault(); scrollToSection('booking'); setIsMenuOpen(false); }}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-200 text-sm"
                >
                  {t('nav.book')}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;