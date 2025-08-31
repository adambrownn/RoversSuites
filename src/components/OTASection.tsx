import bookingLogo from '../assets/ota-logos/booking.png';
import makemytripLogo from '../assets/ota-logos/makemytrip.svg';
import vrboLogo from '../assets/ota-logos/Vrbo.svg';

const OTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">Check Availability & Rates</h2>
          <p className="text-lg text-slate-600">Explore our property and book your stay through your favorite platform:</p>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Airbnb */}
          <a
            href="https://airbnb.co.in/h/roverssuites"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#FF5A5F] transition-all px-6 py-8 text-center space-y-3"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" alt="Airbnb" className="mb-2 h-8" style={{height:'32px'}} loading="lazy" />
            <div className="font-semibold text-[#FF5A5F] group-hover:underline">Airbnb</div>
            <span className="text-xs text-slate-500">Book on Airbnb</span>
          </a>
          {/* Booking.com */}
          <a
            href="https://www.booking.com/hotel/in/rovers-suites-2bhk-entire-luxury-apartment.en-gb.html?label=gen173nr-10CAsobEIqcm92ZXJzLXN1aXRlcy0yYmhrLWVudGlyZS1sdXh1cnktYXBhcnRtZW50SDNYBGhsiAEBmAEzuAEZyAEM2AED6AEB-AEBiAIBqAIBuAKH2M3FBsACAdICJDQ4MTMxOTM1LTI0MjktNDM4OS05ZmY3LWIzZWRhMjYxM2QxYtgCAeACAQ&sid=d7248f7e1b8aa20ea2847ad3ed450239&dist=0&keep_landing=1&sb_price_type=total&type=total&"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#003580] transition-all px-6 py-8 text-center space-y-3"
          >
            <img src={bookingLogo} alt="Booking.com" className="mb-2 h-8" style={{height:'32px'}} loading="lazy" />
            <div className="font-semibold text-[#003580] group-hover:underline">Booking.com</div>
            <span className="text-xs text-slate-500">Book on Booking.com</span>
          </a>
          {/* MakeMyTrip */}
          <a
            href="https://www.makemytrip.com/hotels/hotel-details?hotelId=202406201722582603&checkin=date_3&checkout=date_4&country=IN&city=CTXMS&roomStayQualifier=2e0e&openDetail=true&currency=ENG&region=IN&checkAvailability=true&locusId=CTXMS&locusType=city&homestay=true&zcp=ddaf99be384d"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#008CFF] transition-all px-6 py-8 text-center space-y-3 relative"
          >
            <span
              className="pointer-events-none absolute top-3 right-3 flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full shadow-sm border border-emerald-200 z-10"
              style={{ minWidth: 'max-content' }}
            >
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
              Recommended
            </span>
            <img src={makemytripLogo} alt="MakeMyTrip" className="mb-2 h-8" style={{height:'32px'}} loading="lazy" />
            <div className="font-semibold text-[#008CFF] group-hover:underline">MakeMyTrip</div>
            <span className="text-xs text-slate-500">Book on MakeMyTrip</span>
          </a>
          {/* VRBO (Expedia) */}
          <a
            href="https://www.expedia.com/Dehradun-Hotels-ROVERS-SUITES-2-BHK-Entire-Luxury-Apartment.h107049914.Hotel-Information"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#1C1C1C] transition-all px-6 py-8 text-center space-y-3"
          >
            <img src={vrboLogo} alt="VRBO" className="mb-2 h-8" style={{height:'32px'}} loading="lazy" />
            <div className="font-semibold text-[#1C1C1C] group-hover:underline">VRBO (Expedia)</div>
            <span className="text-xs text-slate-500">Book on VRBO</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OTASection;
