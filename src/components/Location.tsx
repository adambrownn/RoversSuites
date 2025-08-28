import React from 'react';
import { MapPin, Clock, Car, Plane } from 'lucide-react';

const Location = () => {
  const attractions = [
    { name: "Mall Road", distance: "2.5 km", time: "8 min drive" },
    { name: "Gun Hill Point", distance: "3.2 km", time: "12 min drive" },
    { name: "Kempty Falls", distance: "15 km", time: "35 min drive" },
    { name: "Cloud's End", distance: "7 km", time: "20 min drive" },
  ];

  return (
    <section id="location" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Perfectly Located for Exploration & Relaxation
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Situated in a peaceful part of Mussoorie, Rovers Suites offers easy access to the town's most popular spots. 
            Enjoy a short walk or drive to Mall Road, Gun Hill Point, and other local gems while retreating to a calm, private haven afterwards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Prime Location</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Nestled in the serene hills of Mussoorie, our property offers the perfect balance of tranquility 
                and accessibility to major attractions.
              </p>
              
              <div className="space-y-4">
                {attractions.map((attraction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-slate-800">{attraction.name}</div>
                      <div className="text-sm text-slate-500 flex items-center mt-1">
                        <Car className="h-4 w-4 mr-1" />
                        {attraction.distance}
                      </div>
                    </div>
                    <div className="text-emerald-600 font-medium flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {attraction.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-600 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Getting Here</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <Plane className="h-5 w-5 mr-3" />
                  Dehradun Airport - 54 km (1.5 hrs)
                </p>
                <p className="flex items-center">
                  <Car className="h-5 w-5 mr-3" />
                  Delhi - 290 km (6 hrs drive)
                </p>
                <p className="text-sm opacity-90 mt-4">
                  Airport transfers available on request
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Map placeholder - in a real implementation, you'd integrate with Google Maps */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden shadow-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=800')`
                }}
              />
              <div className="relative z-10 text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">Rovers Suites</div>
                <div className="text-lg">Mussoorie, Uttarakhand</div>
                <button className="mt-4 px-6 py-2 bg-white text-slate-800 rounded-full hover:bg-gray-100 transition-colors">
                  View on Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;