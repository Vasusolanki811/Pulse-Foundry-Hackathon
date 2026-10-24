import React, { useState } from 'react';
import { Sparkles, DollarSign, Leaf, Wine, Users, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { FOUR_PERSON_VALUE_MEAL } from '../data/restaurantData';

interface ConstraintHighlightsProps {
  onOpenReservation: () => void;
  onOpenGroupModal: () => void;
}

export const ConstraintHighlights: React.FC<ConstraintHighlightsProps> = ({
  onOpenReservation,
  onOpenGroupModal
}) => {
  const [showFeastDetails, setShowFeastDetails] = useState(false);

  return (
    <section id="value-feast" className="py-16 md:py-20 bg-[#F4EFE6] border-y border-[#3D5A40]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D5A40] uppercase mb-2">
            <span>Diner-First Hospitality · Zero Guesswork</span>
          </div>
          <h2 className="font-serif-greek text-3xl sm:text-4xl font-bold text-[#1B3044] text-balance">
            Designed for Conscious Diners & Social Tables
          </h2>
          <p className="mt-3 text-base text-[#2C3539]/80 text-balance">
            Whether you are eating plant-based, planning a 4-person dinner under $25/guest, or unwinding on the garden patio during Happy Hour, Café Athena delivers unmatched Mediterranean authenticity without pretense.
          </p>
        </div>

        {/* 4 Feature Cards solving constraint-led queries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: $25 Dinner for 4 */}
          <div className="bg-[#FAF7F2] p-6 rounded-lg border border-[#3D5A40]/15 flex flex-col justify-between hover:border-[#C86446]/40 transition-colors shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#FAF7F2] border border-[#3D5A40]/20 flex items-center justify-center text-[#C86446] mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-serif-greek text-xl font-bold text-[#1B3044] mb-2">
                Dinner Under $25 / Person
              </h3>
              <p className="text-sm text-[#2C3539]/80 leading-relaxed mb-4">
                Four guests feast generously for <strong className="font-semibold text-[#1B3044]">$23.75 each</strong> ($95 total) with our shareable mezze spread, charcoal-grilled souvlaki, Greek gyro platter, falafel, and dessert baklava.
              </p>
            </div>
            <button
              onClick={() => setShowFeastDetails(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C86446] hover:text-[#B05439] transition-colors pt-2 border-t border-[#3D5A40]/10 cursor-pointer"
            >
              <span>View 5-Course Breakdown</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Plant-Based & Dietary Safety */}
          <div className="bg-[#FAF7F2] p-6 rounded-lg border border-[#3D5A40]/15 flex flex-col justify-between hover:border-[#3D5A40]/40 transition-colors shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#FAF7F2] border border-[#3D5A40]/20 flex items-center justify-center text-[#3D5A40] mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif-greek text-xl font-bold text-[#1B3044] mb-2">
                18+ Vegan & Gluten-Free Choices
              </h3>
              <p className="text-sm text-[#2C3539]/80 leading-relaxed mb-4">
                Complete dietary transparency. From scratch-made falafel with house garlic tahini and stuffed dolmades to flame-grilled souvlaki skewers and lemon herb potatoes prepared with separate cookware.
              </p>
            </div>
            <a
              href="#menu"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3D5A40] hover:text-[#2D4230] transition-colors pt-2 border-t border-[#3D5A40]/10"
            >
              <span>Explore Vegan & GF Menu</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Happy Hour Specials */}
          <div className="bg-[#FAF7F2] p-6 rounded-lg border border-[#3D5A40]/15 flex flex-col justify-between hover:border-[#C86446]/40 transition-colors shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#FAF7F2] border border-[#3D5A40]/20 flex items-center justify-center text-[#C86446] mb-4">
                <Wine className="w-5 h-5" />
              </div>
              <h3 className="font-serif-greek text-xl font-bold text-[#1B3044] mb-2">
                Happy Hour Tue–Sun 4–6 PM
              </h3>
              <p className="text-sm text-[#2C3539]/80 leading-relaxed mb-4">
                Unwind on our garden patio with small mezze plates under $12, $7 Greek boutique wines by the glass, $5.50 imported Mythos lager, and $9 Mediterranean fig spritzes.
              </p>
            </div>
            <a
              href="#happy-hour"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C86446] hover:text-[#B05439] transition-colors pt-2 border-t border-[#3D5A40]/10"
            >
              <span>See Happy Hour Pricing</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 4: Group Gatherings & Patio */}
          <div className="bg-[#FAF7F2] p-6 rounded-lg border border-[#3D5A40]/15 flex flex-col justify-between hover:border-[#1B3044]/40 transition-colors shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#FAF7F2] border border-[#3D5A40]/20 flex items-center justify-center text-[#1B3044] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif-greek text-xl font-bold text-[#1B3044] mb-2">
                Parties of 10+ & Private Patio
              </h3>
              <p className="text-sm text-[#2C3539]/80 leading-relaxed mb-4">
                No booking ambiguity. We coordinate family-style banquet feasts and patio buyouts for birthdays, graduations, and wedding rehearsals with personal coordination.
              </p>
            </div>
            <button
              onClick={onOpenGroupModal}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B3044] hover:text-[#C86446] transition-colors pt-2 border-t border-[#3D5A40]/10 cursor-pointer"
            >
              <span>Request Group Booking</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal: The 4-Person $25/Person Mediterranean Feast Breakdown */}
        {showFeastDetails && (
          <div className="fixed inset-0 z-50 bg-[#1B3044]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#FAF7F2] max-w-xl w-full rounded-lg shadow-2xl border border-[#3D5A40]/20 p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between gap-4 border-b border-[#3D5A40]/15 pb-4">
                <div>
                  <span className="text-xs uppercase font-semibold text-[#3D5A40] tracking-wider">
                    Transparent Value Formula
                  </span>
                  <h3 className="font-serif-greek text-2xl font-bold text-[#1B3044]">
                    {FOUR_PERSON_VALUE_MEAL.title}
                  </h3>
                  <p className="text-xs text-[#2C3539]/70 mt-1">
                    Total: <span className="font-mono font-semibold text-[#1B3044]">${FOUR_PERSON_VALUE_MEAL.totalPrice.toFixed(2)}</span> · Exactly <span className="font-mono font-semibold text-[#C86446]">${FOUR_PERSON_VALUE_MEAL.perPersonPrice.toFixed(2)} per person</span>
                  </p>
                </div>
                <button
                  onClick={() => setShowFeastDetails(false)}
                  className="p-1 text-[#2C3539]/60 hover:text-[#1B3044] rounded"
                  aria-label="Close feast breakdown"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-3.5">
                <p className="text-xs text-[#2C3539]/80 leading-relaxed">
                  {FOUR_PERSON_VALUE_MEAL.description}
                </p>
                <div className="divide-y divide-[#3D5A40]/10 bg-white rounded border border-[#3D5A40]/15 p-3">
                  {FOUR_PERSON_VALUE_MEAL.courses.map((course, idx) => (
                    <div key={idx} className="py-2.5 flex items-start justify-between gap-3 text-xs">
                      <div>
                        <div className="font-semibold text-[#1B3044]">{course.name}</div>
                        <div className="text-[#2C3539]/70 text-[11px] mt-0.5">{course.detail}</div>
                      </div>
                      <div className="font-mono font-semibold text-[#3D5A40] tabular-nums whitespace-nowrap">
                        ${course.value.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F4EFE6] p-3 rounded text-xs text-[#1B3044] flex items-center justify-between">
                  <span>Generous portioning includes warm hand-stretched pita and fresh lemon wedges.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3D5A40]/15 flex items-center justify-between gap-3">
                <button
                  onClick={() => setShowFeastDetails(false)}
                  className="px-4 py-2 text-xs font-medium text-[#1B3044] hover:bg-[#F4EFE6] rounded transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowFeastDetails(false);
                    onOpenReservation();
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#C86446] hover:bg-[#B05439] rounded shadow transition-colors cursor-pointer"
                >
                  Reserve Table for 4 Guests
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
