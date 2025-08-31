import React, { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Location from './components/Location';
import Gallery from './components/Gallery';
import OTASection from './components/OTASection';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Rovers Suites - Luxury 2BHK Mountain Retreat in Mussoorie | Vacation Rental';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience luxury at Rovers Suites - a modern 2BHK apartment with stunning mountain views in Mussoorie. Perfect vacation rental with personalized hospitality and premium amenities.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experience luxury at Rovers Suites - a modern 2BHK apartment with stunning mountain views in Mussoorie. Perfect vacation rental with personalized hospitality and premium amenities.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Add keywords meta tag for SEO
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = '2BHK Mussoorie stay, Mussoorie vacation rental, mountain view apartment Mussoorie, luxury stays Mussoorie, Mussoorie accommodation, hill station rental';
    document.getElementsByTagName('head')[0].appendChild(metaKeywords);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Features />
        <Location />
        <Gallery />
  <OTASection />
  <Booking />
  <Testimonials />
        <Footer />
        <ChatWidget />
      </div>
    </LanguageProvider>
  );
}

export default App;