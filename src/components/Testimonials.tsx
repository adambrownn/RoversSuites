import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Rajesh Sharma",
      location: "Delhi",
      rating: 5,
      text: "Rovers Suites exceeded our expectations in every way. The apartment was immaculately clean, the views were absolutely breathtaking, and the host went above and beyond to ensure our comfort. We felt like we were staying in our own private mountain retreat.",
      date: "December 2024"
    },
    {
      name: "Amit Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Perfect location for exploring Mussoorie while having a peaceful retreat to return to. The kitchen was fully equipped, which made our stay so much more convenient. The host was incredibly responsive and helpful throughout our stay.",
      date: "November 2024"
    },
    {
      name: "Sarah & David Wilson",
      location: "London, UK",
      rating: 5,
      text: "As international travelers, we were amazed by the level of hospitality and attention to detail. The apartment felt like a luxury hotel but with the warmth of a home. The mountain views from the balcony were simply magical at sunrise.",
      date: "October 2024"
    }
  ];

  const { t } = useLanguage();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('testimonials.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-stone-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative">
              <Quote className="h-8 w-8 text-emerald-600 mb-4 opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-gray-200">
                <div className="font-semibold text-slate-800">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.location}</div>
                <div className="text-xs text-emerald-600 mt-1">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">{t('testimonials.join')}</p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-slate-800">4.9/5</span>
            <span className="text-slate-500">(127 {t('testimonials.reviews')})</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;