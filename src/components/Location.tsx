import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import { MapPin, Clock, Car, Plane } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoibmV4Y21hcCIsImEiOiJjbTY5N3Q4OTgwODduMmxzY2s5aDA0bXp1In0.wnyDsAjgVJw794zpvWf93g';
const MAP_CENTER: [number, number] = [78.04647829910338, 30.461762594086988];

  const attractionsData = [
    {
      name: 'Mall Road',
      coords: [78.06452752072575, 30.459856598666345],
    },
    {
      name: 'Gun Hill Point',
      coords: [78.07426778844055, 30.4593317928267],
    },
    {
      name: 'Kempty Falls',
      coords: [78.0428016014733, 30.325376536870614],
    },
    {
      name: "Cloud's End",
      coords: [78.00814266256161, 30.468665257534347],
    },
    {
      name: 'Company Garden',
      coords: [78.05407316118375, 30.46115902285762],
    },
    {
      name: 'George Everest',
      coords: [78.02306249495835, 30.45887243858476],
    },
  ];

  const MapboxMap: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const [isClient, setIsClient] = React.useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      if (!isClient) return;
      if (!mapContainer.current) return;
      if (mapRef.current) return; // Prevent re-initialization
      mapboxgl.accessToken = MAPBOX_TOKEN;
      const map = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: MAP_CENTER,
        zoom: 15.5,
        attributionControl: false,
      });
      mapRef.current = map;

      // Add main green marker (Rovers Suites)
      new mapboxgl.Marker({ color: '#059669' })
        .setLngLat(MAP_CENTER)
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Rovers Suites'))
        .addTo(map);

      // Add blue markers for attractions
      attractionsData.forEach(attraction => {
        new mapboxgl.Marker({ color: '#2563eb' }) // Tailwind blue-600
          .setLngLat(attraction.coords as [number, number])
          .setPopup(new mapboxgl.Popup({ offset: 20 }).setText(attraction.name))
          .addTo(map);
      });

      // Clean up on unmount
      return () => {
        map.remove();
      };
    }, [isClient]);

    if (!isClient) {
      return (
        <div className="w-full h-full min-h-[24rem] flex items-center justify-center bg-stone-100 text-slate-400 text-center">
          Loading map…
        </div>
      );
    }

    return (
      <div className="relative w-full h-full min-h-[24rem]">
        <div
          ref={mapContainer}
          className="w-full h-full min-h-[24rem]"
          style={{ filter: 'grayscale(5%) contrast(1.08) brightness(0.99)', borderRadius: '1rem' }}
        />
        {/* Map legend/informer */}
        <div className="absolute top-3 left-3 bg-white/90 rounded-lg shadow px-4 py-2 flex items-center space-x-4 text-sm z-20 border border-emerald-100">
          <span className="flex items-center"><span className="inline-block w-3 h-3 rounded-full mr-1" style={{background:'#059669'}}></span>Our Location</span>
          <span className="flex items-center"><span className="inline-block w-3 h-3 rounded-full mr-1" style={{background:'#2563eb'}}></span>Nearby Attractions</span>
        </div>
        {/* Subtle zoom out comment */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 rounded px-3 py-1 text-xs text-slate-600 shadow z-20 border border-emerald-100">
          Tip: Zoom out to see all nearby locations on the map.
        </div>
      </div>
    );
  };

const Location: React.FC = () => {
  const { t } = useLanguage();
  const attractions = [
    { name: t('location.mallroad') || 'Mall Road', distance: '2.5 km', time: '8 min drive' },
    { name: t('location.gunhill') || 'Gun Hill Point', distance: '3.2 km', time: '12 min drive' },
    { name: t('location.kempty') || 'Kempty Falls', distance: '15 km', time: '35 min drive' },
    { name: t('location.cloudsend') || "Cloud's End", distance: '7 km', time: '20 min drive' },
    { name: 'Company Garden', distance: '1.2 km', time: '5 min drive' },
    { name: 'George Everest', distance: '6.5 km', time: '20 min drive' },
  ];

  return (
    <section id="location" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('location.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            {t('location.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 h-full flex flex-col justify-between">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">{t('location.prime')}</h3>
              </div>
              <p className="text-slate-600 mb-6">
                {t('location.prime.desc')}
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
              <h3 className="text-xl font-bold mb-4">{t('location.getting')}</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <Plane className="h-5 w-5 mr-3" />
                  {t('location.airport')}
                </p>
                <p className="flex items-center">
                  <Car className="h-5 w-5 mr-3" />
                  {t('location.delhi')}
                </p>
                <p className="text-sm opacity-90 mt-4">
                  {t('location.transfers')}
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[24rem] w-full border-2 border-emerald-100">
              <MapboxMap />
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://maps.google.com/?q=30.461762594086988,78.04647829910338"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-emerald-600 text-white font-semibold rounded-full shadow hover:bg-emerald-700 transition-colors text-lg"
                aria-label="Get directions to Rovers Suites on Google Maps"
              >
                {t('location.directions') || 'Get Directions'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;