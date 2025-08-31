import React, { useState } from 'react';
import makemytripLogo from '../assets/ota-logos/makemytrip.svg';
import { Calendar, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '2',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    try {
  // Formspree endpoint for Rovers Suites Booking
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqadqqon';
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          checkin: formData.checkin,
          checkout: formData.checkout,
          guests: formData.guests,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkin: '',
          checkout: '',
          guests: '2',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Plan Your Stay
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to experience the serenity of the mountains? Get in touch with us to book your perfect getaway
          </p>
        </div>

        {/* MakeMyTrip Best Value Button */}
        <div className="flex justify-center mb-10">
          <a
            href="https://www.makemytrip.com/hotels/hotel-details?hotelId=202406201722582603&checkin=date_3&checkout=date_4&country=IN&city=CTXMS&roomStayQualifier=2e0e&openDetail=true&currency=ENG&region=IN&checkAvailability=true&locusId=CTXMS&locusType=city&homestay=true&zcp=ddaf99be384d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-[#008CFF] hover:bg-[#006bb3] text-white font-bold rounded-full shadow-lg text-lg transition-colors border-2 border-[#008CFF] hover:border-[#006bb3] animate-pulse"
            style={{textDecoration: 'none'}}
          >
            <img src={makemytripLogo} alt="MakeMyTrip" className="h-7 w-7" style={{height:'28px'}} loading="lazy" />
            Book on MakeMyTrip for Best Value!
            <span className="ml-2 bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">Recommended</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">Phone</div>
                    <div className="text-slate-600">+91 99717 14172</div>
                    <div className="text-sm text-slate-500 mt-1">Available 9 AM - 9 PM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <div className="text-slate-600">contact@roverssuites.com</div>
                    <div className="text-sm text-slate-500 mt-1">We respond within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">WhatsApp</div>
                    <div className="text-slate-600">+91 99717 14172</div>
                    <div className="text-sm text-slate-500 mt-1">Quick responses</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-slate-800 mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    Book on Airbnb
                  </a>
                  <a href="#" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    Check Availability
                  </a>
                  <a href="#" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    Special Offers
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg" autoComplete="off" noValidate>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Book Your Mountain Retreat</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-slate-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 mb-6">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-slate-700 mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    required
                    value={formData.checkin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-slate-700 mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    required
                    value={formData.checkout}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Special Requests or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about any special requests or questions you have"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500/50 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={submitting}
                aria-busy={submitting}
              >
                {submitting ? (
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                ) : (
                  <Send className="h-5 w-5" />
                )}
                <span>{submitting ? 'Sending...' : 'Send Booking Inquiry'}</span>
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center mt-4 font-semibold">Thank you for your inquiry! We will get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center mt-4 font-semibold">Sorry, something went wrong. Please try again or contact us directly.</p>
              )}
              <p className="text-sm text-slate-500 text-center mt-4">
                We'll get back to you within 2 hours with availability and pricing information
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;