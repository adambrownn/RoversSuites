import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Experience Comfort Amidst the Clouds
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Rovers Suites is a modern 2BHK luxury apartment nestled in the lush hills of Mussoorie. 
              Designed for travellers seeking peace, comfort, and convenience, it offers stunning views, 
              a fully equipped kitchen, and personalised service—all within easy reach of top attractions 
              like Mall Road and Gun Hill Point.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                <div className="text-slate-600">Bedrooms</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                <div className="text-slate-600">Bathrooms</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">4</div>
                <div className="text-slate-600">Max Guests</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-slate-600">Support</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Cozy bedroom with mountain view"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                  Master Bedroom
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Modern kitchen"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                  Fully Equipped Kitchen
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Living room with mountain view"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                  Spacious Living Area
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Balcony with panoramic mountain views"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
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