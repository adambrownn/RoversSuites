import React from 'react';
import { 
  Bed, 
  Mountain, 
  ChefHat, 
  Tv, 
  Car, 
  Plane, 
  Users, 
  ShieldCheck 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Bed className="h-8 w-8" />,
      title: "Luxury 2BHK Apartment",
      description: "Spacious layout with two bedrooms and two bathrooms"
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Stunning Mountain Views",
      description: "Private balcony with panoramic vistas"
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Fully Equipped Kitchen",
      description: "Cook and dine with ease"
    },
    {
      icon: <Tv className="h-8 w-8" />,
      title: "Modern Amenities",
      description: "Flat-screen TV, free WiFi, bed linen, towels, and more"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Free Private Parking",
      description: "Safe and convenient parking space"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Airport Transfers Available",
      description: "Hassle-free travel arrangements"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalised Hospitality",
      description: "Dedicated host ensuring a memorable stay"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Non-Smoking Property",
      description: "For a cleaner, healthier environment"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Why Guests Love Rovers Suites
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every detail has been carefully considered to ensure your mountain retreat exceeds expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-stone-50 rounded-2xl hover:bg-emerald-50 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;