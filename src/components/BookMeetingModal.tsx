import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Video,
  Phone,
  Building2,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  CalendarPlus,
  Send,
} from 'lucide-react';

interface BookMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MEETING_TOPICS = [
  'Hospital Supply & Formulation Rate Contract',
  'Active Cold-Chain (2°C–8°C) Logistics & Telemetry',
  'Senores & Concord Biotech Direct Distribution',
  'Government & Defense Healthcare Tender Desk',
  'Buyer KYC & CDSCO Wholesale License Onboarding',
  'Urgent Critical-Care Formulation Allocation',
];

const TIME_SLOTS = [
  '10:00 AM IST',
  '11:30 AM IST',
  '02:00 PM IST',
  '03:30 PM IST',
  '05:00 PM IST',
];

export const BookMeetingModal: React.FC<BookMeetingModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState(MEETING_TOPICS[0]);
  const [meetingType, setMeetingType] = useState<'video' | 'phone' | 'depot'>('video');
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[1]);
  const [date, setDate] = useState(() => {
    // Tomorrow or next weekday in YYYY-MM-DD format
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    city: '',
    notes: '',
  });

  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `JADON-MTG-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  const downloadIcs = () => {
    const title = `Jadon Pharmaceuticals - ${topic}`;
    const desc = `Consultation with Jadon Pharmaceuticals Commercial Operations Desk (CDSCO Lic: Wholesale-819-A). Meeting Reference: ${bookingRef}`;
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Jadon Pharmaceuticals//Institutional Desk//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `jadon-meeting-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#082F49]/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="meeting-modal-title"
    >
      <div
        className="bg-[#FBFAF6] border border-[#BAE6FD] rounded-2xl shadow-2xl w-full max-w-xl max-h-[92vh] overflow-y-auto relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0EA5E9] text-white p-5 sm:p-6 rounded-t-2xl relative border-b border-[#BAE6FD]/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 bg-white/15 px-2.5 py-0.5 rounded-full font-mono-ui text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#E0F2FE] font-semibold border border-white/20">
              <Calendar className="w-3 h-3" />
              Institutional Desk Booking
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#BAE6FD] font-mono-ui hidden sm:inline">
              · Lic: Wholesale-819-A
            </span>
          </div>
          <h2 id="meeting-modal-title" className="font-editorial text-2xl sm:text-3xl font-bold">
            Schedule a Commercial Consultation
          </h2>
          <p className="text-white/85 text-xs sm:text-sm mt-1">
            Connect directly with Jadon Pharmaceuticals executive officers in Gwalior (M.P.) for institutional supply contracts and wholesale logistics.
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {isBooked ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E0F2FE] text-[#0284C7] mx-auto flex items-center justify-center border-2 border-[#38BDF8]/40 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="font-mono-ui text-xs font-semibold text-[#0284C7] uppercase tracking-wider block mb-1">
                  Confirmed · Slot Reserved
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0369A1]">
                  Meeting Request Confirmed
                </h3>
              </div>
              <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                Your consultation has been confirmed under reference{' '}
                <strong className="font-mono-ui text-[#0369A1] bg-[#E0F2FE] px-2 py-0.5 rounded">
                  {bookingRef}
                </strong>
                . A meeting invitation with direct Google Meet coordinates and calendar invite has been sent to{' '}
                <span className="font-semibold text-[#082F49]">{formData.email}</span>.
              </p>

              <div className="bg-[#F0F9FF] border border-[#0284C7]/20 rounded-xl p-4 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2 text-[#082F49]">
                <div className="flex justify-between items-center border-b border-[#BAE6FD]/60 pb-2">
                  <span className="text-[#475569]">Subject:</span>
                  <span className="font-semibold text-[#0369A1]">{topic}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#BAE6FD]/60 pb-2">
                  <span className="text-[#475569]">Date & Time:</span>
                  <span className="font-mono-ui font-semibold text-[#082F49]">
                    {date} · {selectedSlot}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-[#BAE6FD]/60 pb-2">
                  <span className="text-[#475569]">Format:</span>
                  <span className="capitalize font-semibold text-[#0284C7]">
                    {meetingType === 'video'
                      ? 'Google Meet Video Call'
                      : meetingType === 'phone'
                      ? 'Direct Phone Consultation'
                      : 'Central Depot Visit (Gwalior)'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#475569]">Organization:</span>
                  <span className="font-semibold">{formData.organization || 'Institutional Buyer'}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={downloadIcs}
                  className="inline-flex items-center gap-2 bg-white border border-[#0284C7] text-[#0284C7] hover:bg-[#E0F2FE] px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>Download .ICS Calendar Event</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Compliance banner */}
              <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg p-3 text-xs text-[#082F49] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>
                  <strong>Authorized Commercial Channel:</strong> B2B consultations for accredited hospitals, clinical networks, pharmacy groups, and tender committees.
                </span>
              </div>

              {/* Consultation Topic */}
              <div>
                <label className="block text-xs font-semibold text-[#082F49] uppercase tracking-wider mb-1.5">
                  1. Select Discussion Topic *
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 border border-[#BAE6FD] rounded-lg bg-white text-sm text-[#082F49] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                >
                  {MEETING_TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Meeting Format */}
              <div>
                <label className="block text-xs font-semibold text-[#082F49] uppercase tracking-wider mb-1.5">
                  2. Consultation Format *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMeetingType('video')}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      meetingType === 'video'
                        ? 'bg-[#E0F2FE] border-[#0284C7] text-[#0369A1] font-semibold ring-1 ring-[#0284C7]'
                        : 'bg-white border-[#BAE6FD] text-[#475569] hover:bg-[#F0F9FF]'
                    }`}
                  >
                    <Video className="w-4 h-4 mb-1 text-[#0284C7]" />
                    <span>Google Meet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeetingType('phone')}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      meetingType === 'phone'
                        ? 'bg-[#E0F2FE] border-[#0284C7] text-[#0369A1] font-semibold ring-1 ring-[#0284C7]'
                        : 'bg-white border-[#BAE6FD] text-[#475569] hover:bg-[#F0F9FF]'
                    }`}
                  >
                    <Phone className="w-4 h-4 mb-1 text-[#0284C7]" />
                    <span>Phone Call</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeetingType('depot')}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      meetingType === 'depot'
                        ? 'bg-[#E0F2FE] border-[#0284C7] text-[#0369A1] font-semibold ring-1 ring-[#0284C7]'
                        : 'bg-white border-[#BAE6FD] text-[#475569] hover:bg-[#F0F9FF]'
                    }`}
                  >
                    <Building2 className="w-4 h-4 mb-1 text-[#0284C7]" />
                    <span>Gwalior Depot</span>
                  </button>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#082F49] uppercase tracking-wider mb-1.5">
                    3. Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border border-[#BAE6FD] rounded-lg bg-white text-sm text-[#082F49] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#082F49] uppercase tracking-wider mb-1.5">
                    4. Time Slot *
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3 py-2 border border-[#BAE6FD] rounded-lg bg-white text-sm text-[#082F49] focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  >
                    {TIME_SLOTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-1">
                <label className="block text-xs font-semibold text-[#082F49] uppercase tracking-wider mb-1.5">
                  5. Participant Information *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name / Officer Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-[#BAE6FD] rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Official Institutional Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-[#BAE6FD] rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp (+91...)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-[#BAE6FD] rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Hospital / Institution / Entity"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3 py-2 border border-[#BAE6FD] rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Key agenda items, estimated formulation volumes, or questions (optional)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 border border-[#BAE6FD] rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-[#475569] hover:text-[#082F49] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                >
                  <span>Confirm Meeting Booking</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
