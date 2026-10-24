import React from 'react';
import { Award, Heart, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeritageSectionProps {
  onOpenReservation: () => void;
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="heritage" className="py-20 bg-[#FAF7F2] border-b border-[#3D5A40]/15 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-[#3D5A40]/20 bg-[#EAE2D5] h-[340px] sm:h-[400px]">
              <img
                src="/src/assets/images/patio_evening_ambiance_1792860093983.jpg"
                alt="Café Athena heated outdoor garden patio in Pacific Beach"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3044]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#C86446]">
                    Pacific Beach Patio Nights
                  </div>
                  <div className="font-serif-greek text-xl font-bold">
                    Heated Garden Terrace Under the Olive Trees
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary smaller asset & quote callout */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow border border-[#3D5A40]/20 h-40 bg-[#EAE2D5]">
                <img
                  src="/src/assets/images/baklava_honey_dessert_1792860094421.jpg"
                  alt="Traditional Greek honey and walnut baklava"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#F4EFE6] p-4 rounded-lg border border-[#3D5A40]/15 flex flex-col justify-center">
                <span className="font-serif-display italic text-lg text-[#1B3044]">
                  &ldquo;Philoxenia&rdquo;
                </span>
                <span className="text-xs text-[#3D5A40] font-medium mt-1">
                  The ancient Greek practice of welcoming every guest as family.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy & Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D5A40] uppercase">
              <span>Pacific Beach Culinary Heritage Since 1990</span>
            </div>

            <h2 className="font-serif-greek text-3xl sm:text-4xl font-bold text-[#1B3044] leading-tight text-balance">
              Over 35 Years of Multi-Generational Greek Cooking
            </h2>

            <div className="space-y-4 text-sm text-[#2C3539]/85 leading-relaxed">
              <p>
                In 1990, Café Athena opened its doors on Garnet Avenue with a single wood-burning grill, our grandmother&rsquo;s handwritten recipe notebook from the Peloponnese, and a profound commitment to honest Mediterranean hospitality.
              </p>
              <p>
                While Pacific Beach has grown into a bustling coastal enclave, our culinary philosophy remains untouched by fads. We still press our extra virgin olive oil from Kalamata estate groves, hand-layer paper-thin phyllo for our spanakopita each morning, and flame-grill tender California lamb over natural charcoal embers.
              </p>
              <p>
                Today, we take equal pride in welcoming the grandchildren of our original 1990 patrons, alongside a new generation of health-conscious diners who treasure our expansive plant-based, vegan, and celiac-safe menus.
              </p>
            </div>

            {/* 3 Heritage Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#3D5A40]/15">
              <div>
                <div className="font-mono text-xl font-bold text-[#1B3044]">1990</div>
                <div className="text-xs font-semibold text-[#3D5A40] mt-0.5">Founded in PB</div>
                <div className="text-[11px] text-[#2C3539]/70 mt-1">Operating on Garnet Ave for 36 consecutive years.</div>
              </div>

              <div>
                <div className="font-mono text-xl font-bold text-[#1B3044]">100%</div>
                <div className="text-xs font-semibold text-[#3D5A40] mt-0.5">Greek Olive Oil</div>
                <div className="text-[11px] text-[#2C3539]/70 mt-1">Cold-pressed extra virgin oil in every dressing and sauce.</div>
              </div>

              <div>
                <div className="font-mono text-xl font-bold text-[#1B3044]">Family</div>
                <div className="text-xs font-semibold text-[#3D5A40] mt-0.5">Owned & Operated</div>
                <div className="text-[11px] text-[#2C3539]/70 mt-1">Personal attention to every table and private gathering.</div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#C86446] hover:bg-[#B05439] rounded transition-all shadow cursor-pointer"
              >
                Join Us for Dinner Tonight
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
