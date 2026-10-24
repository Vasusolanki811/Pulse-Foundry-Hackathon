import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Sparkles, MapPin, Phone, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGuests?: number;
  initialDate?: string;
  initialTime?: string;
  onSwitchToGroup: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialGuests = 2,
  initialDate,
  initialTime = '18:00',
  onSwitchToGroup
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [guests, setGuests] = useState(initialGuests);
  const [date, setDate] = useState(initialDate || new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(initialTime);
  const [seatingArea, setSeatingArea] = useState<'patio' | 'indoor' | 'bar'>('patio');

  // Contact details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [occasion, setOccasion] = useState('Casual Dinner');
  const [specialRequests, setSpecialRequests] = useState('');

  // Confirmation data
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleNextToContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (guests >= 10) {
      onSwitchToGroup();
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'ATH-' + Math.floor(10000 + Math.random() * 90000);
    setConfirmationCode(randomCode);
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1B3044]/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF7F2] max-w-lg w-full rounded-lg shadow-2xl border border-[#3D5A40]/20 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#1B3044] text-[#FAF7F2] px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C86446]">
              Instant Table Booking
            </span>
            <h3 className="font-serif-greek text-xl font-bold">
              Reserve at Café Athena
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1 text-[#FAF7F2]/70 hover:text-white rounded"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress indicator */}
        <div className="bg-[#F4EFE6] px-6 py-2.5 border-b border-[#3D5A40]/15 flex items-center justify-between text-xs font-semibold text-[#1B3044]">
          <div className={`flex items-center gap-1.5 ${step === 1 ? 'text-[#C86446]' : 'text-[#3D5A40]'}`}>
            <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-[11px]">1</span>
            <span>Date & Table</span>
          </div>
          <span className="text-[#3D5A40]/30">→</span>
          <div className={`flex items-center gap-1.5 ${step === 2 ? 'text-[#C86446]' : step === 3 ? 'text-[#3D5A40]' : 'text-[#2C3539]/40'}`}>
            <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-[11px]">2</span>
            <span>Guest Details</span>
          </div>
          <span className="text-[#3D5A40]/30">→</span>
          <div className={`flex items-center gap-1.5 ${step === 3 ? 'text-[#C86446]' : 'text-[#2C3539]/40'}`}>
            <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-[11px]">3</span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* STEP 1: Party, Date, Time, Seating */}
        {step === 1 && (
          <form onSubmit={handleNextToContact} className="p-6 space-y-4">
            {/* Party Size */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-[#1B3044] uppercase tracking-wider">
                  Number of Guests
                </label>
                {guests >= 9 && (
                  <button
                    type="button"
                    onClick={onSwitchToGroup}
                    className="text-xs text-[#C86446] hover:underline"
                  >
                    10+ guests? Use Group Inquiry
                  </button>
                )}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`py-2 text-xs font-semibold rounded border cursor-pointer transition-colors ${
                      guests === num
                        ? 'bg-[#1B3044] text-white border-[#1B3044]'
                        : 'bg-white text-[#1B3044] border-[#3D5A40]/25 hover:bg-[#F4EFE6]'
                    }`}
                  >
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={onSwitchToGroup}
                  className="py-2 text-xs font-semibold rounded border border-[#C86446]/40 text-[#C86446] bg-[#C86446]/10 hover:bg-[#C86446]/20 transition-colors"
                >
                  10+ Party
                </button>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Reservation Date
                </label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Time Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                >
                  <option value="11:30">11:30 AM (Lunch)</option>
                  <option value="12:00">12:00 PM (Lunch)</option>
                  <option value="12:30">12:30 PM (Lunch)</option>
                  <option value="13:00">1:00 PM (Lunch)</option>
                  <option value="16:00">4:00 PM (Happy Hour)</option>
                  <option value="17:00">5:00 PM (Happy Hour)</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM (Dinner)</option>
                  <option value="18:30">6:30 PM (Dinner)</option>
                  <option value="19:00">7:00 PM (Dinner)</option>
                  <option value="19:30">7:30 PM (Dinner)</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                </select>
              </div>
            </div>

            {/* Seating Preference */}
            <div>
              <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1.5">
                Seating Atmosphere
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSeatingArea('patio')}
                  className={`p-2.5 text-left rounded border transition-colors cursor-pointer ${
                    seatingArea === 'patio'
                      ? 'bg-[#3D5A40] text-white border-[#3D5A40]'
                      : 'bg-white text-[#1B3044] border-[#3D5A40]/25 hover:bg-[#F4EFE6]'
                  }`}
                >
                  <div className="text-xs font-bold">Heated Patio</div>
                  <div className="text-[10px] opacity-80">Coastal breeze & plants</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSeatingArea('indoor')}
                  className={`p-2.5 text-left rounded border transition-colors cursor-pointer ${
                    seatingArea === 'indoor'
                      ? 'bg-[#3D5A40] text-white border-[#3D5A40]'
                      : 'bg-white text-[#1B3044] border-[#3D5A40]/25 hover:bg-[#F4EFE6]'
                  }`}
                >
                  <div className="text-xs font-bold">Main Dining</div>
                  <div className="text-[10px] opacity-80">Rustic Greek taverna</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSeatingArea('bar')}
                  className={`p-2.5 text-left rounded border transition-colors cursor-pointer ${
                    seatingArea === 'bar'
                      ? 'bg-[#3D5A40] text-white border-[#3D5A40]'
                      : 'bg-white text-[#1B3044] border-[#3D5A40]/25 hover:bg-[#F4EFE6]'
                  }`}
                >
                  <div className="text-xs font-bold">Wine Bar</div>
                  <div className="text-[10px] opacity-80">Casual high-top</div>
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 text-sm font-semibold text-white bg-[#C86446] hover:bg-[#B05439] rounded shadow transition-colors cursor-pointer"
              >
                Continue to Guest Info →
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Contact, Dietary, and Notes */}
        {step === 2 && (
          <form onSubmit={handleFinalSubmit} className="p-6 space-y-4">
            <div className="bg-[#F4EFE6] p-3 rounded text-xs text-[#1B3044] flex items-center justify-between">
              <span>
                <strong>{guests} {guests === 1 ? 'Guest' : 'Guests'}</strong> on {date} at {time} ({seatingArea.toUpperCase()})
              </span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#C86446] font-semibold hover:underline"
              >
                Change
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Primary Guest Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Demetrios Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(858) 555-0192"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Occasion (Optional)
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                >
                  <option value="Casual Dinner">Casual Dinner with Friends/Family</option>
                  <option value="Birthday">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary / Date Night</option>
                  <option value="Business Dining">Business Dining</option>
                  <option value="Out of Town Guests">Showing Out-of-Town Guests Pacific Beach</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Dietary Preferences / Kitchen Allergy Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2 guests Vegan, 1 Celiac / Gluten-free"
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B3044] uppercase tracking-wider mb-1">
                  Special Seating Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Quiet corner table, high chair needed, celebrating grandma's 80th"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#3D5A40]/25 rounded text-[#1B3044] focus:outline-none focus:ring-1 focus:ring-[#C86446]"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-medium text-[#1B3044] hover:bg-[#F4EFE6] rounded"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#C86446] hover:bg-[#B05439] rounded shadow transition-colors cursor-pointer"
              >
                Confirm Table Reservation
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Instant Confirmed Receipt */}
        {step === 3 && (
          <div className="p-6 text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#3D5A40]">
                Reservation Confirmed
              </span>
              <h3 className="font-serif-greek text-2xl font-bold text-[#1B3044] mt-1">
                We Can&rsquo;t Wait to Welcome You, {name}!
              </h3>
              <p className="text-xs text-[#2C3539]/80 mt-1">
                A confirmation has been sent to <span className="font-semibold text-[#1B3044]">{email}</span> and SMS notification will follow.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-white p-4 rounded border border-[#3D5A40]/15 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between border-b pb-1.5 border-dashed border-[#3D5A40]/20">
                <span className="text-[#2C3539]/70">Confirmation #:</span>
                <span className="font-bold text-[#C86446]">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2C3539]/70">Party Size:</span>
                <span className="text-[#1B3044]">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2C3539]/70">Date & Time:</span>
                <span className="text-[#1B3044]">{date} at {time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2C3539]/70">Seating Area:</span>
                <span className="text-[#1B3044] capitalize">{seatingArea}</span>
              </div>
              {occasion && (
                <div className="flex justify-between">
                  <span className="text-[#2C3539]/70">Occasion:</span>
                  <span className="text-[#1B3044]">{occasion}</span>
                </div>
              )}
            </div>

            {/* Helpful Policies */}
            <div className="text-[11px] text-[#2C3539]/70 bg-[#F4EFE6] p-3 rounded text-left space-y-1">
              <div>📍 <strong>Location:</strong> 1846 Garnet Ave, Pacific Beach (free plaza parking)</div>
              <div>⏱️ <strong>Holding Policy:</strong> We hold tables for 15 minutes past reservation time.</div>
              <div>📞 <strong>Need to adjust?</strong> Call us anytime at <span className="font-mono">{RESTAURANT_INFO.phone}</span>.</div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1B3044] hover:bg-[#1B3044]/90 rounded transition-colors"
            >
              Back to Café Athena Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
