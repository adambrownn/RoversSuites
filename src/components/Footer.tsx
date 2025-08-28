import React from 'react';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Mountain className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">Rovers Suites</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Your serene mountain escape in the heart of Mussoorie. Experience luxury, comfort, 
              and breathtaking views in our carefully curated 2BHK apartment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <button onClick={() => scrollToSection('hero')} className="block text-slate-300 hover:text-emerald-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-slate-300 hover:text-emerald-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('features')} className="block text-slate-300 hover:text-emerald-400 transition-colors">
                Amenities
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block text-slate-300 hover:text-emerald-400 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('booking')} className="block text-slate-300 hover:text-emerald-400 transition-colors">
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <div>Mussoorie, Uttarakhand</div>
                  <div className="text-sm opacity-75">India - 248179</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div className="text-slate-300">+91 98765 43210</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div className="text-slate-300">hello@roverssuites.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-700 text-center text-slate-400">
          <p className="text-sm">
            © 2025 Rovers Suites. All rights reserved. | Luxury vacation rental in Mussoorie, Uttarakhand
          </p>
          <p className="text-xs mt-2 opacity-75">
            Designed for travelers seeking comfort, luxury, and unforgettable mountain experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;