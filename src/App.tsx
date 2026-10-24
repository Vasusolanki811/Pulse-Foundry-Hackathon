import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ConstraintHighlights } from './components/ConstraintHighlights';
import { MenuSection } from './components/MenuSection';
import { HeritageSection } from './components/HeritageSection';
import { HappyHourSection } from './components/HappyHourSection';
import { LargePartySection } from './components/LargePartySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationFooter } from './components/LocationFooter';
import { ReservationModal } from './components/ReservationModal';
import { GroupDiningModal } from './components/GroupDiningModal';
import { DishDetailModal } from './components/DishDetailModal';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [groupDiningModalOpen, setGroupDiningModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Booking widget prefill
  const [bookingPrefill, setBookingPrefill] = useState({
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    time: '18:00'
  });

  const handleQuickBook = (guests: number, date: string, time: string) => {
    setBookingPrefill({ guests, date, time });
    setReservationModalOpen(true);
  };

  const handleOpenStandardReservation = () => {
    setGroupDiningModalOpen(false);
    setReservationModalOpen(true);
  };

  const handleOpenGroupDining = () => {
    setReservationModalOpen(false);
    setGroupDiningModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C3539] flex flex-col font-sans selection:bg-[#C86446]/20 selection:text-[#1B3044]">
      {/* 1. Global Navigation & Top Bar */}
      <Header
        onOpenReservation={handleOpenStandardReservation}
        onOpenGroupDining={handleOpenGroupDining}
      />

      {/* 2. Parallax Hero Section */}
      <main className="flex-1">
        <Hero
          onQuickBook={handleQuickBook}
          onOpenGroupModal={handleOpenGroupDining}
        />

        {/* 3. Constraint-Led Value & Highlights */}
        <ConstraintHighlights
          onOpenReservation={handleOpenStandardReservation}
          onOpenGroupModal={handleOpenGroupDining}
        />

        {/* 4. Full Crawlable HTML Menu with Filters & Search */}
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={handleOpenStandardReservation}
        />

        {/* 5. 35-Year Heritage & Culinary Story */}
        <HeritageSection
          onOpenReservation={handleOpenStandardReservation}
        />

        {/* 6. Happy Hour & Patio Dining Module */}
        <HappyHourSection
          onOpenReservation={handleOpenStandardReservation}
        />

        {/* 7. Large Party (10+) & Private Banquet Experience */}
        <LargePartySection
          onOpenGroupModal={handleOpenGroupDining}
          onOpenReservation={handleOpenStandardReservation}
        />

        {/* 8. Verified Local Diner Proof & Accolades */}
        <ReviewsSection />

        {/* 9. Conversational AI-Optimized FAQ Section */}
        <FaqSection />
      </main>

      {/* 10. Pacific Beach Location & Footer NAP */}
      <LocationFooter
        onOpenReservation={handleOpenStandardReservation}
        onOpenGroupModal={handleOpenGroupDining}
      />

      {/* Interactive Reservation Modal (1–9 Guests) */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        initialGuests={bookingPrefill.guests}
        initialDate={bookingPrefill.date}
        initialTime={bookingPrefill.time}
        onSwitchToGroup={handleOpenGroupDining}
      />

      {/* Group Dining Inquiry Modal (10+ Guests & Banquets) */}
      <GroupDiningModal
        isOpen={groupDiningModalOpen}
        onClose={() => setGroupDiningModalOpen(false)}
        onSwitchToStandard={handleOpenStandardReservation}
      />

      {/* Dish Detailed Culinary Breakdown Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onBookTable={handleOpenStandardReservation}
      />
    </div>
  );
}
