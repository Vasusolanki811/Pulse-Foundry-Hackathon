import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Navigation, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface LocationFooterProps {
  onOpenReservation: () => void;
  onOpenGroupModal: () => void;
}

export const LocationFooter: React.FC<LocationFooterProps> = ({
  onOpenReservation,
  onOpenGroupModal
}) => {
  return (
    <footer className="bg-[#1B3044] text-[#FAF7F2] border-t border-[#FAF7F2]/10">
      {/* Top Section: Location, Map, and Hours Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand & Address Info (Zone 1) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif-greek text-2xl font-bold tracking-wider text-[#FAF7F2]">
                CAFÉ ATHENA
              </span>
              <p className="text-xs text-[#FAF7F2]/70 mt-1 uppercase tracking-widest font-semibold text-[#C86446]">
                Greek & Mediterranean Cuisine · Est. 1990
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed">
              Proudly serving Pacific Beach, Mission Beach, Crown Point, and La Jolla for over 35 years with authentic multi-generational Mediterranean recipes.
            </p>

            <div className="space-y-2.5 text-xs text-[#FAF7F2]/90 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C86446] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">{RESTAURANT_INFO.address.street}</span>
                  <span className="text-[#FAF7F2]/70">
                    {RESTAURANT_INFO.address.neighborhood}, {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.zip}
                  </span>
                  <span className="block text-[11px] text-[#C86446] mt-0.5">
                    {RESTAURANT_INFO.address.landmark}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C86446] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="font-mono hover:text-[#C86446] transition-colors tabular-nums"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C86446] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-[#C86446] transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Car className="w-4 h-4 text-[#C86446] shrink-0 mt-0.5" />
                <span className="text-[11px] text-[#FAF7F2]/75 leading-normal">
                  {RESTAURANT_INFO.parking}
                </span>
              </div>
            </div>
          </div>

          {/* Hours Specification (Zone 2) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C86446]">
              <Clock className="w-4 h-4" />
              <span>Operating Hours</span>
            </div>
            <div className="divide-y divide-[#FAF7F2]/10 bg-white/5 p-4 rounded-lg border border-[#FAF7F2]/10 text-xs">
              {RESTAURANT_INFO.hours.map((h, i) => (
                <div key={i} className="py-2 flex items-center justify-between gap-2">
                  <span className="font-medium text-[#FAF7F2]/90">{h.days}</span>
                  <div className="text-right">
                    <span className="font-mono text-[#FAF7F2] tabular-nums">{h.time}</span>
                    <span className="block text-[10px] text-[#FAF7F2]/50">{h.note}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#C86446]/15 border border-[#C86446]/30 rounded text-xs text-[#FAF7F2]/90">
              <span className="font-semibold text-[#C86446]">Happy Hour:</span> Tuesday – Sunday from 4:00 PM to 6:00 PM on the outdoor patio and wine bar.
            </div>
          </div>

          {/* Interactive Map Visual & Direction Aids (Zone 3) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#C86446]">
              <span className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                <span>Map & Neighborhood</span>
              </span>
              <a
                href="https://maps.google.com/?q=Cafe+Athena+1846+Garnet+Ave+San+Diego+CA+92109"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-[#FAF7F2]/80 hover:text-[#C86446] underline lowercase"
              >
                open in google maps ↗
              </a>
            </div>

            {/* Simulated Styled Interactive Map Tile */}
            <div className="relative rounded-lg overflow-hidden border border-[#FAF7F2]/15 bg-[#243B53] h-48 flex flex-col justify-between p-4 group">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between text-xs">
                <span className="bg-[#1B3044]/90 px-2 py-0.5 rounded text-[11px] text-[#FAF7F2] font-medium border border-white/10">
                  Pacific Beach, San Diego
                </span>
                <span className="text-[11px] text-[#FAF7F2]/70">Garnet & Lamont</span>
              </div>

              {/* Pin indicator */}
              <div className="relative z-10 text-center my-auto">
                <div className="inline-flex items-center gap-1.5 bg-[#C86446] text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-bold animate-pulse">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Café Athena (1846 Garnet)</span>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] text-[#FAF7F2]/80 pt-2 border-t border-white/10">
                <span>4 mins to PB Boardwalk</span>
                <span>3 mins to Mission Bay Park</span>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={onOpenReservation}
                className="flex-1 py-2 text-center text-xs font-semibold text-white bg-[#C86446] hover:bg-[#B05439] rounded transition-colors"
              >
                Book Table Online
              </button>
              <button
                onClick={onOpenGroupModal}
                className="flex-1 py-2 text-center text-xs font-semibold text-[#FAF7F2] border border-[#FAF7F2]/30 hover:bg-white/10 rounded transition-colors"
              >
                Parties of 10+
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & AISEO Transparency Bar */}
      <div className="border-t border-[#FAF7F2]/10 py-6 px-4 bg-[#142434] text-xs text-[#FAF7F2]/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Café Athena. All rights reserved. Locally owned in Pacific Beach, San Diego since 1990.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a href="#menu" className="hover:text-[#FAF7F2] transition-colors">Menu Index</a>
            <span>·</span>
            <a href="#faq" className="hover:text-[#FAF7F2] transition-colors">AI Search Answers</a>
            <span>·</span>
            <a href="#heritage" className="hover:text-[#FAF7F2] transition-colors">Our Story</a>
            <span>·</span>
            <span className="text-[#FAF7F2]/40">WCAG 2.1 AA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
