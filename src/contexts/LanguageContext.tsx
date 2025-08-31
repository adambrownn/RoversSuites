import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.amenities': 'Amenities',
    'nav.location': 'Location',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.book': 'Book Your Stay',
    
    // Hero
    'hero.title': 'Welcome to Rovers Suites',
    'hero.subtitle': 'Your Serene Mountain Escape',
    'hero.description': 'Modern 2BHK apartment with breathtaking views and personalised hospitality in the heart of Mussoorie',
    'hero.cta': 'Book Your Stay',
    
    // About
    'about.title': 'Experience Comfort Amidst the Clouds',
    'about.description': 'Rovers Suites is a modern 2BHK luxury apartment nestled in the lush hills of Mussoorie. Designed for travellers seeking peace, comfort, and convenience, it offers stunning views, a fully equipped kitchen, and personalised service—all within easy reach of top attractions like Mall Road and Gun Hill Point.',
    'about.bedrooms': 'Bedrooms',
    'about.bathrooms': 'Bathrooms',
    'about.guests': 'Max Guests',
    'about.support': 'Support',
    
    // Features
    'features.title': 'Why Guests Love Rovers Suites',
    'features.subtitle': 'Every detail has been carefully considered to ensure your mountain retreat exceeds expectations',
    'features.luxury': 'Luxury 2BHK Apartment',
    'features.luxury.desc': 'Spacious layout with two bedrooms and two bathrooms',
    'features.views': 'Stunning Mountain Views',
    'features.views.desc': 'Private balcony with panoramic vistas',
    'features.kitchen': 'Fully Equipped Kitchen',
    'features.kitchen.desc': 'Cook and dine with ease',
    'features.amenities': 'Modern Amenities',
    'features.amenities.desc': 'Flat-screen TV, free WiFi, bed linen, towels, and more',
    'features.parking': 'Free Private Parking',
    'features.parking.desc': 'Safe and convenient parking space',
    'features.transfers': 'Airport Transfers Available',
    'features.transfers.desc': 'Hassle-free travel arrangements',
    'features.hospitality': 'Personalised Hospitality',
    'features.hospitality.desc': 'Dedicated host ensuring a memorable stay',
    'features.nonsmoking': 'Non-Smoking Property',
    'features.nonsmoking.desc': 'For a cleaner, healthier environment',
    
    // Location
    'location.title': 'Perfectly Located for Exploration & Relaxation',
    'location.description': 'Situated in a peaceful part of Mussoorie, Rovers Suites offers easy access to the town\'s most popular spots. Enjoy a short walk or drive to Mall Road, Gun Hill Point, and other local gems while retreating to a calm, private haven afterwards.',
    'location.prime': 'Prime Location',
    'location.prime.desc': 'Nestled in the serene hills of Mussoorie, our property offers the perfect balance of tranquility and accessibility to major attractions.',
  'location.mallroad': 'Mall Road',
  'location.gunhill': 'Gun Hill Point',
  'location.kempty': 'Kempty Falls',
  'location.cloudsend': "Cloud's End",
    'location.getting': 'Getting Here',
    'location.airport': 'Dehradun Airport - 54 km (1.5 hrs)',
    'location.delhi': 'Delhi - 290 km (6 hrs drive)',
    'location.transfers': 'Airport transfers available on request',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Take a virtual tour of our luxury mountain retreat and discover the comfort that awaits',
    
  // Testimonials
  'testimonials.title': 'Guest Experiences',
  'testimonials.subtitle': 'Don\'t just take our word for it – hear what our guests have to say about their mountain retreat experience',
  'testimonials.join': 'Join hundreds of satisfied guests who chose Rovers Suites',
  'testimonials.reviews': 'reviews',

    
    // Booking
    'booking.title': 'Plan Your Stay',
    'booking.subtitle': 'Ready to experience the serenity of the mountains? Get in touch with us to book your perfect getaway',
    'booking.contact': 'Contact Information',
    'booking.phone': 'Phone',
    'booking.email': 'Email',
    'booking.whatsapp': 'WhatsApp',
    'booking.available': 'Available 9 AM - 9 PM',
    'booking.respond': 'We respond within 2 hours',
    'booking.quick': 'Quick responses',
    'booking.form.title': 'Book Your Mountain Retreat',
    'booking.form.name': 'Full Name',
    'booking.form.email': 'Email Address',
    'booking.form.phone': 'Phone Number',
    'booking.form.guests': 'Number of Guests',
    'booking.form.checkin': 'Check-in Date',
    'booking.form.checkout': 'Check-out Date',
    'booking.form.message': 'Special Requests or Message',
    'booking.form.submit': 'Send Booking Inquiry',
    'booking.form.response': 'We\'ll get back to you within 2 hours with availability and pricing information',
    
  // Footer
  'footer.description': 'Your serene mountain escape in the heart of Mussoorie. Experience luxury, comfort, and breathtaking views in our carefully curated 2BHK apartment.',
  'footer.links': 'Quick Links',
  'footer.contact': 'Contact Information',
  'footer.copyright': '© 2025 Rovers Suites. All rights reserved. | Luxury vacation rental in Mussoorie, Uttarakhand',
  'footer.tagline': 'Designed for travelers seeking comfort, luxury, and unforgettable mountain experiences',

  // ChatWidget
  'chat.greeting': 'Hello! Welcome to Rovers Suites. How can I help you today?',
  'chat.quick.label': 'Quick questions:',
  'chat.quick.check': 'Check availability',
  'chat.quick.amenities': 'View amenities',
  'chat.quick.location': 'Location details',
  'chat.quick.booking': 'Booking process',
  'chat.quick.contact': 'Contact information',
  'chat.response.check': "I'd be happy to help you check availability! Please use our booking form or call us at +91 99717 14172 for real-time availability.",
  'chat.response.amenities': 'Our 2BHK apartment features: Mountain views, fully equipped kitchen, free WiFi, private parking, and personalized hospitality. Check our amenities section for more details!',
  // removed old location response (see next line for updated value)
    'chat.response.location': `Our address: Flat A&B, Catherine Villa Estate, Jas Apartment, Hathi Paon Road, The Mall Road, Mussoorie, Uttarakhand 248179.\n\nView on Google Maps: https://maps.google.com/?q=30.461762594086988,78.04647829910338`,
  'chat.response.booking': "You can book by filling our inquiry form, calling +91 99717 14172, or WhatsApp us. We'll respond within 2 hours with availability and pricing.",
  'chat.response.contact': "📞 Phone: +91 99717 14172\n📧 Email: contact@roverssuites.com\n💬 WhatsApp: +91 99717 14172\nWe're available 9 AM - 9 PM daily!",
  'chat.response.default': "Thank you for your message! For immediate assistance, please call us at +91 99717 14172 or use our booking form.",
  'chat.input.placeholder': 'Type your message...',
  'chat.time.locale': 'en-US',
  'chat.wa.button': 'Chat with us on WhatsApp',
  'chat.wa.prefill': 'Hi Rovers Suites, I would like to chat with someone in person.',
  },
  hi: {
    // Header
    'nav.about': 'हमारे बारे में',
    'nav.amenities': 'सुविधाएं',
    'nav.location': 'स्थान',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क',
    'nav.book': 'बुकिंग करें',
    
    // Hero
    'hero.title': 'रोवर्स सूट्स में आपका स्वागत है',
    'hero.subtitle': 'आपका शांत पर्वतीय विश्राम स्थल',
    'hero.description': 'मसूरी के हृदय में स्थित आधुनिक 2BHK अपार्टमेंट जो मनमोहक दृश्यों और व्यक्तिगत आतिथ्य के साथ है',
    'hero.cta': 'अपना प्रवास बुक करें',
    
    // About
    'about.title': 'बादलों के बीच आराम का अनुभव करें',
    'about.description': 'रोवर्स सूट्स मसूरी की हरी-भरी पहाड़ियों में स्थित एक आधुनिक 2BHK लक्जरी अपार्टमेंट है। शांति, आराम और सुविधा की तलाश करने वाले यात्रियों के लिए डिज़ाइन किया गया, यह मॉल रोड और गन हिल पॉइंट जैसे प्रमुख आकर्षणों की आसान पहुंच के साथ शानदार दृश्य, पूरी तरह से सुसज्जित रसोई और व्यक्तिगत सेवा प्रदान करता है।',
    'about.bedrooms': 'शयनकक्ष',
    'about.bathrooms': 'स्नानघर',
    'about.guests': 'अधिकतम मेहमान',
    'about.support': 'सहायता',
    
    // Features
    'features.title': 'मेहमान रोवर्स सूट्स को क्यों पसंद करते हैं',
    'features.subtitle': 'हर विवरण को सावधानीपूर्वक माना गया है ताकि आपका पर्वतीय विश्राम अपेक्षाओं से अधिक हो',
    'features.luxury': 'लक्जरी 2BHK अपार्टमेंट',
    'features.luxury.desc': 'दो शयनकक्ष और दो स्नानघर के साथ विशाल लेआउट',
    'features.views': 'शानदार पर्वतीय दृश्य',
    'features.views.desc': 'मनोरम दृश्यों के साथ निजी बालकनी',
    'features.kitchen': 'पूरी तरह सुसज्जित रसोई',
    'features.kitchen.desc': 'आसानी से खाना बनाएं और भोजन करें',
    'features.amenities': 'आधुनिक सुविधाएं',
    'features.amenities.desc': 'फ्लैट-स्क्रीन टीवी, मुफ्त वाईफाई, बिस्तर की चादरें, तौलिए और बहुत कुछ',
    'features.parking': 'मुफ्त निजी पार्किंग',
    'features.parking.desc': 'सुरक्षित और सुविधाजनक पार्किंग स्थान',
    'features.transfers': 'हवाई अड्डा स्थानांतरण उपलब्ध',
    'features.transfers.desc': 'परेशानी मुक्त यात्रा व्यवस्था',
    'features.hospitality': 'व्यक्तिगत आतिथ्य',
    'features.hospitality.desc': 'यादगार प्रवास सुनिश्चित करने वाला समर्पित मेजबान',
    'features.nonsmoking': 'धूम्रपान मुक्त संपत्ति',
    'features.nonsmoking.desc': 'स्वच्छ, स्वस्थ वातावरण के लिए',
    
    // Location
    'location.title': 'अन्वेषण और विश्राम के लिए पूर्ण स्थित',
    'location.description': 'मसूरी के एक शांत हिस्से में स्थित, रोवर्स सूट्स शहर के सबसे लोकप्रिय स्थानों तक आसान पहुंच प्रदान करता है। मॉल रोड, गन हिल पॉइंट और अन्य स्थानीय रत्नों तक छोटी पैदल दूरी या ड्राइव का आनंद लें और बाद में एक शांत, निजी आश्रय में वापस लौटें।',
    'location.prime': 'प्रमुख स्थान',
    'location.prime.desc': 'मसूरी की शांत पहाड़ियों में स्थित, हमारी संपत्ति प्रमुख आकर्षणों की शांति और पहुंच का सही संतुलन प्रदान करती है।',
  'location.mallroad': 'मॉल रोड',
  'location.gunhill': 'गन हिल पॉइंट',
  'location.kempty': 'केम्प्टी फॉल्स',
  'location.cloudsend': 'क्लाउड्स एंड',
    'location.getting': 'यहाँ पहुँचना',
    'location.airport': 'देहरादून हवाई अड्डा - 54 किमी (1.5 घंटे)',
    'location.delhi': 'दिल्ली - 290 किमी (6 घंटे की ड्राइव)',
    'location.transfers': 'अनुरोध पर हवाई अड्डा स्थानांतरण उपलब्ध',
    
    // Gallery
    'gallery.title': 'गैलरी',
    'gallery.subtitle': 'हमारे लक्जरी पर्वतीय विश्राम स्थल का वर्चुअल टूर लें और आपका इंतजार कर रहे आराम की खोज करें',
    
    // Testimonials
    'testimonials.title': 'मेहमानों के अनुभव',
    'testimonials.subtitle': 'केवल हमारी बात न मानें - सुनें कि हमारे मेहमानों का अपने पर्वतीय विश्राम अनुभव के बारे में क्या कहना है',
    'testimonials.join': 'सैकड़ों संतुष्ट मेहमानों में शामिल हों जिन्होंने रोवर्स सूट्स को चुना',
    'testimonials.reviews': 'समीक्षाएं',
    
    // Booking
    'booking.title': 'अपने प्रवास की योजना बनाएं',
    'booking.subtitle': 'पहाड़ों की शांति का अनुभव करने के लिए तैयार हैं? अपनी परफेक्ट छुट्टी बुक करने के लिए हमसे संपर्क करें',
    'booking.contact': 'संपर्क जानकारी',
    'booking.phone': 'फोन',
    'booking.email': 'ईमेल',
    'booking.whatsapp': 'व्हाट्सऐप',
    'booking.available': 'सुबह 9 बजे - रात 9 बजे उपलब्ध',
    'booking.respond': 'हम 2 घंटे के भीतर जवाब देते हैं',
    'booking.quick': 'त्वरित प्रतिक्रिया',
    'booking.form.title': 'अपना पर्वतीय विश्राम बुक करें',
    'booking.form.name': 'पूरा नाम',
    'booking.form.email': 'ईमेल पता',
    'booking.form.phone': 'फोन नंबर',
    'booking.form.guests': 'मेहमानों की संख्या',
    'booking.form.checkin': 'चेक-इन तारीख',
    'booking.form.checkout': 'चेक-आउट तारीख',
    'booking.form.message': 'विशेष अनुरोध या संदेश',
    'booking.form.submit': 'बुकिंग पूछताछ भेजें',
    'booking.form.response': 'हम उपलब्धता और मूल्य निर्धारण की जानकारी के साथ 2 घंटे के भीतर आपसे संपर्क करेंगे',
    
  // Footer
  'footer.description': 'मसूरी के हृदय में आपका शांत पर्वतीय विश्राम स्थल। हमारे सावधानीपूर्वक तैयार किए गए 2BHK अपार्टमेंट में लक्जरी, आराम और मनमोहक दृश्यों का अनुभव करें।',
  'footer.links': 'त्वरित लिंक',
  'footer.contact': 'संपर्क जानकारी',
  'footer.copyright': '© 2025 रोवर्स सूट्स। सभी अधिकार सुरक्षित। | मसूरी, उत्तराखंड में लक्जरी वेकेशन रेंटल',
  'footer.tagline': 'आराम, लक्जरी और अविस्मरणीय पर्वतीय अनुभवों की तलाश करने वाले यात्रियों के लिए डिज़ाइन किया गया',

  // ChatWidget
  'chat.greeting': 'नमस्ते! रोवर्स सूट्स में आपका स्वागत है। मैं आपकी किस प्रकार सहायता कर सकता हूँ?',
  'chat.quick.label': 'त्वरित प्रश्न:',
  'chat.quick.check': 'उपलब्धता जांचें',
  'chat.quick.amenities': 'सुविधाएँ देखें',
  'chat.quick.location': 'स्थान विवरण',
  'chat.quick.booking': 'बुकिंग प्रक्रिया',
  'chat.quick.contact': 'संपर्क जानकारी',
  'chat.response.check': 'मैं आपकी उपलब्धता जांचने में सहायता कर सकता हूँ! कृपया हमारे बुकिंग फॉर्म का उपयोग करें या वास्तविक समय की उपलब्धता के लिए हमें +91 99717 14172 पर कॉल करें।',
  'chat.response.amenities': 'हमारे 2BHK अपार्टमेंट में हैं: पर्वतीय दृश्य, पूरी तरह सुसज्जित रसोई, मुफ्त वाईफाई, निजी पार्किंग, और व्यक्तिगत आतिथ्य। अधिक जानकारी के लिए हमारी सुविधाएँ अनुभाग देखें!',
  // removed old location response (see next line for updated value)
    'chat.response.location': `हमारा पता: फ्लैट A&B, कैथरीन विला एस्टेट, जस अपार्टमेंट, हाथी पाँव रोड, द मॉल रोड, मसूरी, उत्तराखंड 248179।\n\nGoogle Maps पर देखें: https://maps.google.com/?q=30.461762594086988,78.04647829910338`,
  'chat.response.booking': 'आप हमारे पूछताछ फॉर्म को भरकर, +91 99717 14172 पर कॉल करके, या व्हाट्सऐप के माध्यम से बुक कर सकते हैं। हम 2 घंटे के भीतर उपलब्धता और मूल्य के साथ उत्तर देंगे।',
  'chat.response.contact': '📞 फोन: +91 99717 14172\n📧 ईमेल: contact@roverssuites.com\n💬 व्हाट्सऐप: +91 99717 14172\nहम प्रतिदिन सुबह 9 बजे से रात 9 बजे तक उपलब्ध हैं!',
  'chat.response.default': 'आपके संदेश के लिए धन्यवाद! त्वरित सहायता के लिए कृपया हमें +91 99717 14172 पर कॉल करें या हमारे बुकिंग फॉर्म का उपयोग करें।',
  'chat.input.placeholder': 'अपना संदेश लिखें...',
  'chat.time.locale': 'hi-IN',
  'chat.wa.button': 'व्हाट्सऐप पर हमसे चैट करें',
  'chat.wa.prefill': 'नमस्ते रोवर्स सूट्स, मैं किसी व्यक्ति से बात करना चाहता हूँ।',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};