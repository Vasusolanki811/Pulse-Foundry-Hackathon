import React from 'react';
import { X, Wine, ShieldAlert, Sparkles, Check, Utensils } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onBookTable: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onBookTable
}) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1B3044]/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF7F2] max-w-lg w-full rounded-lg shadow-2xl border border-[#3D5A40]/20 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Visual Hero if image exists */}
        {dish.image && (
          <div className="relative h-56 bg-[#EAE2D5] overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B3044]/90 via-transparent to-transparent flex items-end p-5">
              <div className="text-white">
                {dish.greekName && (
                  <span className="font-serif-display italic text-sm text-[#FAF7F2]/80 block">
                    {dish.greekName}
                  </span>
                )}
                <h3 className="font-serif-greek text-2xl font-bold leading-tight">
                  {dish.name}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="p-6 space-y-4">
          {!dish.image && (
            <div className="flex items-start justify-between gap-4 border-b border-[#3D5A40]/15 pb-3">
              <div>
                {dish.greekName && (
                  <span className="font-serif-display italic text-sm text-[#3D5A40] block">
                    {dish.greekName}
                  </span>
                )}
                <h3 className="font-serif-greek text-xl font-bold text-[#1B3044]">
                  {dish.name}
                </h3>
              </div>
              <div className="font-mono text-xl font-bold text-[#1B3044] tabular-nums">
                ${dish.price.toFixed(2)}
              </div>
            </div>
          )}

          {dish.image && (
            <div className="flex items-center justify-between border-b border-[#3D5A40]/15 pb-2">
              <span className="text-xs uppercase font-semibold text-[#3D5A40] tracking-wider">
                Authentic Greek Preparation
              </span>
              <span className="font-mono text-xl font-bold text-[#1B3044] tabular-nums">
                ${dish.price.toFixed(2)}
              </span>
            </div>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#2C3539]/85 leading-relaxed">
            {dish.description}
          </p>

          {/* Ingredients Breakdown */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1B3044] mb-1.5 flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-[#3D5A40]" />
              <span>Key Fresh Ingredients</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {dish.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="text-xs text-[#1B3044] bg-white border border-[#3D5A40]/20 px-2.5 py-1 rounded"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Wine Pairing */}
          {dish.winePairing && (
            <div className="bg-[#F4EFE6] p-3 rounded border border-[#3D5A40]/15 flex items-start gap-2.5 text-xs">
              <Wine className="w-4 h-4 text-[#C86446] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1B3044] block">Sommelier Pairing Recommendation</strong>
                <span className="text-[#2C3539]/80">{dish.winePairing}</span>
              </div>
            </div>
          )}

          {/* Allergen & Dietary Transparency */}
          <div className="bg-[#FAF7F2] p-3 rounded border border-[#3D5A40]/15 text-xs space-y-1">
            <div className="font-semibold text-[#1B3044] flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-[#3D5A40]" />
              <span>Dietary & Kitchen Safety</span>
            </div>
            <div className="text-[11px] text-[#2C3539]/80">
              {dish.allergens || "Cooked in cold-pressed extra virgin olive oil. Gluten-free pita and dairy adjustments available on request."}
            </div>
          </div>

          {/* Modal Footer CTAs */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#3D5A40]/15">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#1B3044] hover:bg-[#F4EFE6] rounded transition-colors"
            >
              Back to Menu
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTable();
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#C86446] hover:bg-[#B05439] rounded shadow transition-colors cursor-pointer"
            >
              Reserve Table for This Dish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
