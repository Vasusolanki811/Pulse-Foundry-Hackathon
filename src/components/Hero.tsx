import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, ShieldCheck, UtensilsCrossed, Sparkles, ChevronDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onQuickBook: (guests: number, date: string, time: string) => void;
  onOpenGroupModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickBook, onOpenGroupModal }) => {
  const [scrollY, setScrollY] = useState(0);

  // Quick booking inputs
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('18:00');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guests >= 10) {
      onOpenGroupModal();
    } else {
      onQuickBook(guests, date, time);
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex flex-col justify-between overflow-hidden bg-[#1B3044]">
      {/* Parallax Background Media Layer */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center pointer-events-none transition-transform duration-75 ease-out will-change-transform"
        style={{
          backgroundImage: `url('/src/assets/images/hero_cafe_athena_1792860092364.jpg')`,
          transform: `translate3d(0, ${scrollY * 0.35}px, 0)`,
        }}
      >
        {/* Measured Scrim for WCAG 4.5:1 Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3044] via-[#1B3044]/65 to-[#1B3044]/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Subtle Heritage Tagline */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FAF7F2]/90 uppercase">
            <span className="w-6 h-px bg-[#C86446]" />
            <span>Family-Owned on Garnet Ave Since 1990</span>
            <span className="w-6 h-px bg-[#C86446]" />
          </div>

          {/* H1 Main Title */}
          <h1 className="font-serif-greek text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF7F2] leading-[1.15] text-balance">
            Authentic Greek & Mediterranean Dining in Pacific Beach
          </h1>

          {/* Subheadline with key differentiators */}
          <p className="text-base sm:text-lg md:text-xl text-[#FAF7F2]/90 leading-relaxed max-w-2xl font-normal">
            Fresh, vibrant Mediterranean cuisine family-crafted in San Diego for over 35 years.
            Charcoal-grilled souvlaki, grandmother's flaky spanakopita, and rich vegan and gluten-free choices on our heated coastal patio.
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#FAF7F2]/80 pt-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C86446]" />
              <span>35+ Years Local Pacific Beach Trust</span>
            </span>
            <span aria-hidden="true" className="text-[#FAF7F2]/40">·</span>
            <span className="flex items-center gap-1.5">
              <UtensilsCrossed className="w-4 h-4 text-[#C86446]" />
              <span>18+ Vegan & Gluten-Free Dishes</span>
            </span>
            <span aria-hidden="true" className="text-[#FAF7F2]/40">·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C86446]" />
              <span>Dine-In • Garden Patio • Takeout</span>
            </span>
          </div>
        </div>

        {/* Quick Table Reservation Engine Bar */}
        <div className="mt-10 max-w-4xl bg-[#FAF7F2] p-4 sm:p-5 rounded-lg shadow-2xl border border-[#3D5A40]/15">
          <form onSubmit={handleBookSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Party Size */}
            <div className="space-y-1.5">
              <label htmlFor="hero-guests" className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider">
                Guests
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-[#3D5A40] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="hero-guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-2 focus:ring-[#C86446]"
                >
                  <option value={1}>1 Guest (Solo Dining)</option>
                  <option value={2}>2 Guests (Table for Two)</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Social Feast)</option>
                  <option value={5}>5 Guests</option>
                  <option value={6}>6 Guests</option>
                  <option value={7}>7 Guests</option>
                  <option value={8}>8 Guests</option>
                  <option value={10}>10+ Guests (Large Party / Banquet)</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="space-y-1.5">
              <label htmlFor="hero-date" className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider">
                Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#3D5A40] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="hero-date"
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-2 focus:ring-[#C86446]"
                  required
                />
              </div>
            </div>

            {/* Time Slot */}
            <div className="space-y-1.5">
              <label htmlFor="hero-time" className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider">
                Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-[#3D5A40] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="hero-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-2 focus:ring-[#C86446]"
                >
                  <option value="12:00">12:00 PM (Lunch)</option>
                  <option value="13:00">1:00 PM (Lunch)</option>
                  <option value="16:30">4:30 PM (Happy Hour)</option>
                  <option value="17:30">5:30 PM (Happy Hour)</option>
                  <option value="18:00">6:00 PM (Dinner)</option>
                  <option value="18:30">6:30 PM (Dinner)</option>
                  <option value="19:00">7:00 PM (Dinner)</option>
                  <option value="19:30">7:30 PM (Dinner)</option>
                  <option value="20:00">8:00 PM (Late Patio)</option>
                </select>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#C86446] hover:bg-[#B05439] active:scale-[0.98] transition-all rounded shadow cursor-pointer text-center"
              >
                {guests >= 10 ? 'Plan Group Dining (10+)' : 'Find a Table'}
              </button>
            </div>
          </form>

          {/* Quick Notice */}
          <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] text-[#2C3539]/70 pt-2 border-t border-[#3D5A40]/10">
            <span>Instant on-site booking confirmation • Zero booking fee</span>
            <span>Walk-ins welcome daily • Heated garden patio seating</span>
          </div>
        </div>
      </div>

      {/* Bottom Floating Scroll Indicator & Quick Anchor Strip */}
      <div className="relative z-10 bg-[#FAF7F2] border-t border-[#3D5A40]/15 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-[#1B3044]">
          <div className="flex items-center gap-6">
            <span>📍 1846 Garnet Ave, Pacific Beach</span>
            <span className="hidden sm:inline">🅿️ Free Plaza Parking Lot</span>
            <span className="hidden md:inline">🍷 Happy Hour Tue–Sun 4–6 PM</span>
          </div>
          <a
            href="#value-feast"
            className="inline-flex items-center gap-1 text-[#C86446] hover:text-[#B05439] font-semibold transition-colors"
          >
            <span>Explore $25/Person Feasts & Specials</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
