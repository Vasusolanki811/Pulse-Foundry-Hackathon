import React from 'react';
import { Wine, Clock, Sparkles, Beer, Utensils } from 'lucide-react';
import { HAPPY_HOUR_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

interface HappyHourSectionProps {
  onOpenReservation: () => void;
}

export const HappyHourSection: React.FC<HappyHourSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="happy-hour" className="py-20 bg-[#F4EFE6] border-b border-[#3D5A40]/15 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C86446] uppercase mb-2">
            <span>Tuesday – Sunday · 4:00 PM to 6:00 PM</span>
          </div>
          <h2 className="font-serif-greek text-3xl sm:text-4xl font-bold text-[#1B3044] text-balance">
            Pacific Beach Mediterranean Happy Hour
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#2C3539]/80 text-balance">
            Escape the Garnet Avenue rush. Savor discounted small plates under $12, chilled boutique Greek wines, imported Mythos lager, and signature spritzes on our sunlit garden patio.
          </p>
        </div>

        {/* Happy Hour Terms Bar */}
        <div className="max-w-4xl mx-auto bg-[#FAF7F2] p-4 rounded-lg border border-[#3D5A40]/15 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-[#1B3044] mb-10 shadow-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C86446]" />
            <span>Tue – Sun: 4:00 PM – 6:00 PM</span>
          </div>
          <span className="hidden sm:inline text-[#3D5A40]/30">|</span>
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-[#3D5A40]" />
            <span>Mezze Bites $7.00 – $8.50</span>
          </div>
          <span className="hidden sm:inline text-[#3D5A40]/30">|</span>
          <div className="flex items-center gap-2">
            <Wine className="w-4 h-4 text-[#C86446]" />
            <span>Greek Wine by the Glass $7.00</span>
          </div>
          <span className="hidden sm:inline text-[#3D5A40]/30">|</span>
          <div className="flex items-center gap-2">
            <Beer className="w-4 h-4 text-[#3D5A40]" />
            <span>Mythos Greek Beer $5.50</span>
          </div>
        </div>

        {/* Happy Hour Crawlable Item Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {HAPPY_HOUR_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] p-4 rounded-lg border border-[#3D5A40]/15 flex items-center justify-between gap-4 hover:border-[#C86446]/40 transition-colors"
            >
              <div>
                <span className="text-[11px] font-medium text-[#3D5A40] block mb-0.5">
                  {item.tag}
                </span>
                <h3 className="font-semibold text-sm text-[#1B3044]">
                  {item.name}
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs text-[#2C3539]/40 line-through mr-2 font-mono tabular-nums">
                  ${item.originalPrice.toFixed(2)}
                </span>
                <span className="font-mono text-base font-bold text-[#C86446] tabular-nums">
                  ${item.specialPrice.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Policy & Patio Seating Notice */}
        <div className="max-w-4xl mx-auto mt-8 p-4 bg-[#FAF7F2] rounded-md border border-[#3D5A40]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2C3539]/80">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C86446] shrink-0" />
            <span>Happy Hour pricing applies to dine-in patio and bar seating only. No reservations required for bar walk-ins.</span>
          </div>
          <button
            onClick={onOpenReservation}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#C86446] hover:bg-[#B05439] rounded transition-colors whitespace-nowrap cursor-pointer"
          >
            Reserve Patio Table
          </button>
        </div>
      </div>
    </section>
  );
};
