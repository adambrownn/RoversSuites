import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import galleryBedroomMaster from '../assets/images/gallery-bedroom-master.jpeg';
import galleryLivingRoom from '../assets/images/gallery-living-room.jpeg';
import galleryBalconyPanoramic from '../assets/images/gallery-balcony-panoramic.jpeg';
import galleryKitchenEquipped from '../assets/images/gallery-kitchen-equipped.jpeg';
import galleryBedroomSecond from '../assets/images/gallery-bedroom-second.jpeg';
import galleryMountainViews from '../assets/images/gallery-mountain-views.jpeg';
import galleryBathroomModern from '../assets/images/gallery-bathroom-modern.jpeg';
import galleryExteriorBuilding from '../assets/images/gallery-exterior-building.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t } = useLanguage();
  const images = [
    {
      src: galleryBedroomMaster,
      alt: t('gallery.bedroom1.alt') || "Master bedroom with mountain view",
      category: t('gallery.bedroom') || "Bedroom"
    },
    {
      src: galleryLivingRoom,
      alt: t('gallery.living.alt') || "Spacious living room",
      category: t('gallery.living') || "Living Area"
    },
    {
      src: galleryBalconyPanoramic,
      alt: t('gallery.balcony.alt') || "Private balcony with panoramic views",
      category: t('gallery.balcony') || "Balcony"
    },
    {
      src: galleryKitchenEquipped,
      alt: t('gallery.kitchen.alt') || "Modern fully equipped kitchen",
      category: t('gallery.kitchen') || "Kitchen"
    },
    {
      src: galleryBedroomSecond,
      alt: t('gallery.bedroom2.alt') || "Second bedroom",
      category: t('gallery.bedroom') || "Bedroom"
    },
    {
      src: galleryMountainViews,
      alt: t('gallery.view.alt') || "Mountain views from the property",
      category: t('gallery.view') || "View"
    },
    {
      src: galleryBathroomModern,
      alt: t('gallery.bathroom.alt') || "Modern bathroom",
      category: t('gallery.bathroom') || "Bathroom"
    },
    {
      src: galleryExteriorBuilding,
      alt: t('gallery.exterior.alt') || "Exterior view of the building",
      category: t('gallery.exterior') || "Exterior"
    }
  ];

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage(prev => prev !== null ? (prev + 1) % images.length : null);
  const prevImage = () => setSelectedImage(prev => prev !== null ? (prev - 1 + images.length) % images.length : null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                {images[selectedImage].category}
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;