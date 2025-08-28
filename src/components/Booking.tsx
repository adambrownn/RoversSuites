import React, { useState } from 'react';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log('Booking inquiry submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <section id="booking" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Plan Your Stay
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to experience the serenity of the mountains? Get in touch with us to book your perfect getaway
          </p>
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
                    <div className="text-slate-600">+91 98765 43210</div>
                    <div className="text-sm text-slate-500 mt-1">Available 9 AM - 9 PM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <div className="text-slate-600">hello@roverssuites.com</div>
                    <div className="text-sm text-slate-500 mt-1">We respond within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">WhatsApp</div>
                    <div className="text-slate-600">+91 98765 43210</div>
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
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Book Your Mountain Retreat</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
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

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                className="w-full bg-emerald-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Booking Inquiry</span>
              </button>

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