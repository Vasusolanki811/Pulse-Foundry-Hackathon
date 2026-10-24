import React, { useState } from 'react';
import { X, Users, Calendar, Phone, Mail, CheckCircle2, HeartHandshake } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface GroupDiningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToStandard: () => void;
}

export const GroupDiningModal: React.FC<GroupDiningModalProps> = ({
  isOpen,
  onClose,
  onSwitchToStandard
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    partySize: 14,
    eventDate: '',
    timeSlot: 'Dinner (6:30 PM)',
    eventStyle: 'Family-Style Greek Banquet',
    budgetTier: '$35 – $48 per person (Most Popular)',
    dietaryNotes: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'ATH-GRP-' + Math.floor(1000 + Math.random() * 9000);
    setInquiryId(code);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1B3044]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF7F2] max-w-xl w-full rounded-lg shadow-2xl border border-[#3D5A40]/20 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#1B3044] text-[#FAF7F2] px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C86446]">
              Parties of 10 or More & Private Buyouts
            </span>
            <h3 className="font-serif-greek text-xl font-bold">
              Group Dining & Event Inquiry
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 text-[#FAF7F2]/70 hover:text-white rounded"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="bg-[#F4EFE6] p-3 rounded text-xs text-[#2C3539]/80 flex items-center justify-between">
              <span>Looking for a regular table under 10 guests?</span>
              <button
                type="button"
                onClick={onSwitchToStandard}
                className="font-semibold text-[#C86446] hover:underline"
              >
                Standard Reservations (1–9) →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Organizer Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Elena Costas"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Estimated Party Size *
                </label>
                <input
                  type="number"
                  min={10}
                  max={80}
                  required
                  value={formData.partySize}
                  onChange={(e) => setFormData({ ...formData, partySize: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(858) 555-0182"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Desired Event Date *
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Service Timeframe
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                >
                  <option value="Lunch Gathering (12:00 PM)">Lunch Gathering (12:00 PM)</option>
                  <option value="Afternoon Patio (2:30 PM)">Afternoon Patio (2:30 PM)</option>
                  <option value="Dinner Early (5:30 PM)">Early Dinner (5:30 PM)</option>
                  <option value="Dinner Prime (6:30 PM)">Prime Dinner (6:30 PM)</option>
                  <option value="Dinner Late (7:30 PM)">Evening Gathering (7:30 PM)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Dining Format
                </label>
                <select
                  value={formData.eventStyle}
                  onChange={(e) => setFormData({ ...formData, eventStyle: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                >
                  <option value="Family-Style Greek Banquet">Family-Style Shared Banquet (Mezze + Mains)</option>
                  <option value="Plated Prix-Fixe Menu">Individually Plated 3-Course Dinner</option>
                  <option value="Mezze & Cocktail Reception">Mezze & Wine Social Reception</option>
                  <option value="Full Garden Patio Buyout">Full Garden Patio Buyout (Up to 80 Guests)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Target Budget Tier
                </label>
                <select
                  value={formData.budgetTier}
                  onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                >
                  <option value="$25 – $35 per person">$25 – $35 / person (Value Feast)</option>
                  <option value="$35 – $48 per person (Most Popular)">$35 – $48 / person (Most Popular)</option>
                  <option value="$50 – $75 per person (Signature Aegean)">$50 – $75 / person (Signature Aegean)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                Occasion & Dietary Notes
              </label>
              <textarea
                rows={2}
                placeholder="e.g., 40th birthday celebration, need 3 vegan options, 2 gluten-free, preference for heated patio"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-xs font-medium text-[#1B3044] hover:bg-[#F4EFE6] rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1B3044] hover:bg-[#1B3044]/90 rounded shadow transition-colors cursor-pointer"
              >
                Submit Event Request
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#3D5A40]">
                Inquiry Received
              </span>
              <h3 className="font-serif-greek text-2xl font-bold text-[#1B3044] mt-1">
                Thank You, {formData.name}!
              </h3>
              <p className="text-xs text-[#2C3539]/80 mt-1 max-w-md mx-auto">
                Your group inquiry reference is <span className="font-mono font-bold text-[#C86446]">{inquiryId}</span>. Our event coordinator will review table configuration and follow up within 4 hours.
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-[#3D5A40]/15 text-left text-xs font-mono space-y-1.5 max-w-sm mx-auto">
              <div>Party: <strong>{formData.partySize} Guests</strong></div>
              <div>Date: <strong>{formData.eventDate || 'Flexible'} ({formData.timeSlot})</strong></div>
              <div>Style: <strong>{formData.eventStyle}</strong></div>
              <div>Tier: <strong>{formData.budgetTier}</strong></div>
            </div>

            <p className="text-[11px] text-[#2C3539]/60">
              Need immediate assistance? Call our Pacific Beach host directly at <strong className="font-mono text-[#1B3044]">{RESTAURANT_INFO.phone}</strong>.
            </p>

            <button
              onClick={handleClose}
              className="mt-2 px-6 py-2 text-xs font-semibold text-white bg-[#1B3044] rounded hover:bg-[#1B3044]/90"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
