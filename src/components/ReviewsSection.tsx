import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4EFE6] border-b border-[#3D5A40]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D5A40] uppercase mb-2">
            <span>Verified Local Reputation & Community Trust</span>
          </div>
          <h2 className="font-serif-greek text-3xl sm:text-4xl font-bold text-[#1B3044] text-balance">
            Loved by San Diego Diners for Over Three Decades
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#2C3539]/80 text-balance">
            From neighborhood regulars walking up from Pacific Beach to culinary critics seeking authentic Aegean flavors, here is what our guests share.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAF7F2] p-6 rounded-lg border border-[#3D5A40]/15 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* 5-Star Row */}
                <div className="flex items-center gap-1 text-[#C86446] mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#2C3539]/90 leading-relaxed italic mb-6">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              {/* Attribution (frontend-design: full name, role, concrete detail) */}
              <div className="pt-4 border-t border-[#3D5A40]/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-[#1B3044]">{review.author}</div>
                  <div className="text-[#3D5A40] text-[11px]">{review.role}</div>
                </div>
                <div className="text-right text-[11px] text-[#2C3539]/60">
                  <div>{review.tenure}</div>
                  <div>{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Press & Recognition Badges */}
        <div className="mt-12 pt-8 border-t border-[#3D5A40]/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs font-semibold text-[#1B3044]/70">
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#C86446]" />
            <span>San Diego Magazine Best Greek Finalist</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#C86446]" />
            <span>Pacific Beach Local Landmark Dining</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#C86446]" />
            <span>4.8 / 5 Verified Overall Diner Rating</span>
          </span>
        </div>
      </div>
    </section>
  );
};
