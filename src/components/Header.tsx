import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Calendar, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenGroupDining: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation, onOpenGroupDining }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Quick-Contact Utility Strip */}
      <div className="bg-[#1B3044] text-[#FAF7F2]/90 text-xs py-2 px-4 border-b border-[#FAF7F2]/10 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C86446]" />
              <span>{RESTAURANT_INFO.address.street}, Pacific Beach</span>
            </span>
            <span className="hidden sm:inline-block text-[#FAF7F2]/30">·</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C86446]" />
              <span>Open Today: 11:30 AM – 9:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#FAF7F2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C86446]" />
              <span className="font-mono tabular-nums">{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-[#FAF7F2]/30">·</span>
            <span className="text-[#FAF7F2]/80">Est. 1990 · 35+ Years in PB</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar (Strict 3-zone contract) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#3D5A40]/15 py-3'
            : 'bg-[#FAF7F2] border-b border-[#3D5A40]/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
          <a
            href="#"
            className="flex flex-col text-[#1B3044] whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <span className="font-serif-greek text-2xl font-bold tracking-wider group-hover:text-[#C86446] transition-colors">
              CAFÉ ATHENA
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#3D5A40]">
              Greek & Mediterranean · Est. 1990
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1B3044]/80">
            <a
              href="#menu"
              className="hover:text-[#C86446] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Menu
            </a>
            <a
              href="#value-feast"
              className="hover:text-[#C86446] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              $25 Feast & Dietary
            </a>
            <a
              href="#happy-hour"
              className="hover:text-[#C86446] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Happy Hour
            </a>
            <a
              href="#heritage"
              className="hover:text-[#C86446] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Our Heritage
            </a>
            <a
              href="#groups"
              className="hover:text-[#C86446] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Groups & Events
            </a>
            <a
              href="#faq"
              className="hover:text-[#C86446] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action CTA Button (+ Mobile Toggle) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReservation}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#C86446] hover:bg-[#B05439] active:scale-[0.98] transition-all rounded-md shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book a Table
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1B3044] hover:text-[#C86446] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#3D5A40]/15 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 text-base font-medium text-[#1B3044]">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#FAF7F2]/60 hover:text-[#C86446]"
              >
                Full Menu & Dietary Filters
              </a>
              <a
                href="#value-feast"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#FAF7F2]/60 hover:text-[#C86446]"
              >
                $25/Person Feasts & Plant-Based
              </a>
              <a
                href="#happy-hour"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#FAF7F2]/60 hover:text-[#C86446]"
              >
                Happy Hour Specials (Tue–Sun 4–6pm)
              </a>
              <a
                href="#heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#FAF7F2]/60 hover:text-[#C86446]"
              >
                Our 35-Year Heritage
              </a>
              <a
                href="#groups"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#FAF7F2]/60 hover:text-[#C86446]"
              >
                Large Groups & Patio Dining (10+)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#FAF7F2]/60 hover:text-[#C86446]"
              >
                Questions & Directions
              </a>

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-[#C86446] rounded-md"
                >
                  Book a Table (1–9 Guests)
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGroupDining();
                  }}
                  className="w-full py-2.5 text-center text-sm font-medium text-[#1B3044] border border-[#1B3044]/30 rounded-md hover:bg-[#F4EFE6]"
                >
                  Plan Group Event (10+ Guests)
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
