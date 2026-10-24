import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Info, Wine, Check } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDish, onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'vegetarian' | 'vegan' | 'glutenFree' | 'under20'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'mezze', label: 'Greek Mezze' },
    { id: 'entrees', label: 'Charcoal Souvlaki & Mains' },
    { id: 'plant-based', label: 'Plant-Based & Vegan' },
    { id: 'gluten-free', label: 'Gluten-Free Specialties' },
    { id: 'dessert-wine', label: 'Desserts & Boutique Wines' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Dietary & Budget filter
      if (dietaryFilter === 'vegetarian' && !item.dietary?.vegetarian) return false;
      if (dietaryFilter === 'vegan' && !item.dietary?.vegan) return false;
      if (dietaryFilter === 'glutenFree' && !item.dietary?.glutenFree) return false;
      if (dietaryFilter === 'under20' && item.price >= 20) return false;

      // Text query match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesGreek = item.greekName?.toLowerCase().includes(query) ?? false;
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIngredients = item.ingredients.some(ing => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesGreek && !matchesDesc && !matchesIngredients) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#FAF7F2] border-b border-[#3D5A40]/15 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D5A40] uppercase mb-2">
            <span>Crawlable HTML Menu · Transparent Pricing & Ingredients</span>
          </div>
          <h2 className="font-serif-greek text-3xl sm:text-4xl font-bold text-[#1B3044] text-balance">
            Authentic Greek & Mediterranean Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#2C3539]/80 text-balance">
            Handcrafted with cold-pressed olive oil, mountain herbs, and imported Greek cheeses. Every dish is cooked fresh to order with clear dietary transparency.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="space-y-4 mb-8">
          {/* Top row: Category Segmented Navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-[#3D5A40]/15">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1B3044] text-white shadow-sm'
                    : 'text-[#1B3044]/75 hover:bg-[#F4EFE6] hover:text-[#1B3044]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Bottom row: Dietary Sub-filters + Search Input */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            {/* Functional Dietary Segmented Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <span className="text-xs font-semibold text-[#1B3044]/60 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Filter:
              </span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#3D5A40] text-white'
                    : 'bg-[#F4EFE6] text-[#2C3539] hover:bg-[#FAF7F2] border border-[#3D5A40]/15'
                }`}
              >
                All Diets
              </button>
              <button
                onClick={() => setDietaryFilter('vegetarian')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  dietaryFilter === 'vegetarian'
                    ? 'bg-[#3D5A40] text-white'
                    : 'bg-[#F4EFE6] text-[#2C3539] hover:bg-[#FAF7F2] border border-[#3D5A40]/15'
                }`}
              >
                Vegetarian
              </button>
              <button
                onClick={() => setDietaryFilter('vegan')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  dietaryFilter === 'vegan'
                    ? 'bg-[#3D5A40] text-white'
                    : 'bg-[#F4EFE6] text-[#2C3539] hover:bg-[#FAF7F2] border border-[#3D5A40]/15'
                }`}
              >
                100% Vegan
              </button>
              <button
                onClick={() => setDietaryFilter('glutenFree')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  dietaryFilter === 'glutenFree'
                    ? 'bg-[#3D5A40] text-white'
                    : 'bg-[#F4EFE6] text-[#2C3539] hover:bg-[#FAF7F2] border border-[#3D5A40]/15'
                }`}
              >
                Gluten-Free
              </button>
              <button
                onClick={() => setDietaryFilter('under20')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  dietaryFilter === 'under20'
                    ? 'bg-[#3D5A40] text-white'
                    : 'bg-[#F4EFE6] text-[#2C3539] hover:bg-[#FAF7F2] border border-[#3D5A40]/15'
                }`}
              >
                Under $20
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-[#3D5A40] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dish, lamb, falafel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#2C3539]/50 hover:text-[#1B3044]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Count & Current Filter Indicators */}
        <div className="flex items-center justify-between text-xs text-[#2C3539]/70 mb-6">
          <div>
            Showing <strong className="text-[#1B3044] font-semibold">{filteredItems.length}</strong> authentic dishes
            {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
          </div>
          <div className="text-right">
            <span>All entrees include herbed pilaf or Athenian lemon potatoes</span>
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#F4EFE6] rounded-lg border border-[#3D5A40]/15 my-6">
            <Info className="w-8 h-8 text-[#3D5A40] mx-auto mb-3" />
            <h3 className="font-serif-greek text-lg font-bold text-[#1B3044]">No dishes matched your filters</h3>
            <p className="text-xs text-[#2C3539]/70 mt-1 max-w-md mx-auto">
              Try resetting your dietary filter or search query. You can also ask our chef for custom preparations!
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#1B3044] rounded hover:bg-[#1B3044]/90 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] rounded-lg border border-[#3D5A40]/20 p-5 flex flex-col justify-between hover:shadow-md hover:border-[#C86446]/40 transition-all group"
            >
              <div>
                {/* Visual Image if Available */}
                {item.image && (
                  <div className="relative mb-3.5 h-44 overflow-hidden rounded bg-[#EAE2D5]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.isSignature && (
                      <span className="absolute top-2.5 left-2.5 text-[11px] font-semibold tracking-wider text-white bg-[#C86446] px-2 py-0.5 rounded shadow">
                        Chef Signature
                      </span>
                    )}
                  </div>
                )}

                {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#3D5A40] font-medium mb-1.5">
                  {item.greekName && <span className="font-serif-display italic text-[#1B3044]/80">{item.greekName}</span>}
                  {item.greekName && <span aria-hidden="true" className="text-[#3D5A40]/40">·</span>}
                  {item.dietary?.vegan && <span>Vegan</span>}
                  {item.dietary?.vegan && item.dietary?.glutenFree && <span aria-hidden="true" className="text-[#3D5A40]/40">·</span>}
                  {item.dietary?.glutenFree && <span>Gluten-Free</span>}
                  {!item.dietary?.vegan && item.dietary?.vegetarian && <span>Vegetarian</span>}
                  {item.happyHourSpecial && (
                    <>
                      <span aria-hidden="true" className="text-[#3D5A40]/40">·</span>
                      <span className="text-[#C86446]">Happy Hour $8-$9</span>
                    </>
                  )}
                </div>

                {/* Header: Title and Price */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif-greek text-lg font-bold text-[#1B3044] leading-snug group-hover:text-[#C86446] transition-colors">
                    {item.name}
                  </h3>
                  <div className="font-mono text-base font-bold text-[#1B3044] tabular-nums whitespace-nowrap">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#2C3539]/80 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Actions & Wine Pairing */}
              <div className="pt-3 border-t border-[#3D5A40]/10 flex items-center justify-between text-xs">
                {item.winePairing ? (
                  <span className="text-[11px] text-[#3D5A40] flex items-center gap-1 truncate max-w-[200px]" title={`Pairing: ${item.winePairing}`}>
                    <Wine className="w-3.5 h-3.5 shrink-0 text-[#C86446]" />
                    <span className="truncate">{item.winePairing}</span>
                  </span>
                ) : (
                  <span className="text-[11px] text-[#2C3539]/60">Fresh Pacific Beach preparation</span>
                )}

                <button
                  onClick={() => onSelectDish(item)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B3044] hover:text-[#C86446] transition-colors cursor-pointer shrink-0 ml-2"
                >
                  <span>Details</span>
                  <Info className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Call to Action Strip */}
        <div className="mt-12 p-6 bg-[#F4EFE6] rounded-lg border border-[#3D5A40]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif-greek text-lg font-bold text-[#1B3044]">
              Planning a group meal or have dietary questions?
            </h3>
            <p className="text-xs text-[#2C3539]/80 mt-0.5">
              Our kitchen easily accommodates celiac, dairy-free, and vegan diners. Tables fill fast on Friday & Saturday evenings.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:8582741140"
              className="px-4 py-2 text-xs font-semibold text-[#1B3044] border border-[#1B3044]/30 rounded hover:bg-white transition-colors"
            >
              Call Kitchen (858) 274-1140
            </a>
            <button
              onClick={onOpenReservation}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#C86446] hover:bg-[#B05439] rounded transition-colors shadow cursor-pointer"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
