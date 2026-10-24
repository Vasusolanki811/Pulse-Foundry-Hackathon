import React from 'react';
import { Users, Phone, CalendarCheck, Utensils, HeartHandshake, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface LargePartySectionProps {
  onOpenGroupModal: () => void;
  onOpenReservation: () => void;
}

export const LargePartySection: React.FC<LargePartySectionProps> = ({
  onOpenGroupModal,
  onOpenReservation
}) => {
  return (
    <section id="groups" className="py-20 bg-[#FAF7F2] border-b border-[#3D5A40]/15 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Group Dining Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D5A40] uppercase">
              <span>Large Groups, Banquets & Patio Events</span>
            </div>

            <h2 className="font-serif-greek text-3xl sm:text-4xl font-bold text-[#1B3044] leading-tight text-balance">
              Group Dining & Celebrations Made Simple
            </h2>

            <p className="text-sm sm:text-base text-[#2C3539]/85 leading-relaxed">
              Dining in Greece has always been a communal affair. Whether you are gathering 12 family members for a milestone birthday, hosting a 35-person wedding rehearsal, or booking the entire garden patio, Café Athena eliminates group dining confusion.
            </p>

            {/* Clear Group Rules Breakdown */}
            <div className="space-y-4 pt-2">
              <div className="bg-[#F4EFE6] p-4 rounded-lg border border-[#3D5A40]/15 flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#1B3044] text-white flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                  1–9
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#1B3044]">
                    Standard Table Reservations (1 to 9 Guests)
                  </h3>
                  <p className="text-xs text-[#2C3539]/80 mt-1">
                    Book instantly online with real-time seating confirmation for indoor or patio dining. No deposit required.
                  </p>
                  <button
                    onClick={onOpenReservation}
                    className="mt-2 text-xs font-semibold text-[#C86446] hover:text-[#B05439] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Instant Table Booking (1–9 Guests) →</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#F4EFE6] p-4 rounded-lg border border-[#3D5A40]/15 flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#C86446] text-white flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                  10+
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#1B3044]">
                    Large Parties & Banquets (10 to 80 Guests)
                  </h3>
                  <p className="text-xs text-[#2C3539]/80 mt-1">
                    Coordinated directly with our General Manager. Enjoy customized family-style mezze platters, personalized prix-fixe packages, dedicated servers, and optional patio buyouts.
                  </p>
                  <button
                    onClick={onOpenGroupModal}
                    className="mt-2 text-xs font-semibold text-[#1B3044] hover:text-[#C86446] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Submit Group Dining Request (10+) →</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 text-xs text-[#2C3539]/80 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3D5A40]" />
                <span>Family-Style Greek Platters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3D5A40]" />
                <span>Custom Dietary Menus (GF/Vegan)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3D5A40]" />
                <span>Heated Patio Buyouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3D5A40]" />
                <span>Free Guest Plaza Parking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Group Inquiry Card */}
          <div className="lg:col-span-5 bg-[#F4EFE6] p-6 sm:p-8 rounded-lg border border-[#3D5A40]/20 shadow-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C86446] uppercase mb-1">
              <CalendarCheck className="w-4 h-4" />
              <span>Dedicated Group Dining Coordinator</span>
            </div>
            <h3 className="font-serif-greek text-2xl font-bold text-[#1B3044] mb-3">
              Plan Your Celebration
            </h3>
            <p className="text-xs text-[#2C3539]/80 leading-relaxed mb-6">
              Tell us about your event. We will contact you within 4 business hours with customized menu options and floor plans.
            </p>

            <div className="space-y-4">
              <button
                onClick={onOpenGroupModal}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#1B3044] hover:bg-[#1B3044]/90 rounded transition-colors text-center cursor-pointer shadow"
              >
                Open Group Dining Form (10+ Guests)
              </button>

              <div className="text-center">
                <span className="text-xs text-[#2C3539]/60">Or call our event manager directly:</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="mt-1 flex items-center justify-center gap-2 text-sm font-bold text-[#C86446] hover:text-[#B05439] font-mono tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
