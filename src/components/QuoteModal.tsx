import React, { useState } from 'react';
import { X, CheckCircle2, Send, Clock, ShieldCheck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialQuery = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: 'United Kingdom',
    itemSpec: initialQuery,
    quantity: '',
    temperature: 'Ambient (15°C – 25°C)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A3F23]/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        className="bg-[#FBFAF6] border border-[#C9A451]/40 rounded-[12px] shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0A3F23] text-white p-6 rounded-t-[12px] relative border-b border-[#C9A451]/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-[#D9B870] font-semibold block mb-1">
            Official Inquiry · Desk Dispatch
          </span>
          <h2 id="quote-modal-title" className="font-editorial text-2xl sm:text-3xl font-bold">
            Request a Formal Quotation
          </h2>
          <p className="text-white/75 text-xs sm:text-sm mt-1">
            24-hour turnaround with confirmed landed availability and destination dossier readiness.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E4F1E8] text-[#1B7A3C] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#0A3F23]">
                Inquiry Dispatch Received
              </h3>
              <p className="text-sm text-[#55675D] max-w-md mx-auto leading-relaxed">
                Your inquiry has been assigned reference{' '}
                <strong className="font-mono-ui text-[#0A3F23]">INQ-2026-9281</strong>. An operational
                desk officer has been assigned to your requirement.
              </p>
              <div className="bg-[#E4F1E8] border border-[#0A3F23]/15 rounded-[8px] p-4 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono-ui text-[#0A3F23]">
                <div><strong>Requested Spec:</strong> {formData.itemSpec || 'General Catalog Item'}</div>
                <div><strong>Destination:</strong> {formData.country}</div>
                <div><strong>Response Window:</strong> &lt; 24 Hours Standard</div>
              </div>
              <button
                onClick={handleReset}
                className="bg-[#0A3F23] hover:bg-[#0F5B2E] text-white px-6 py-2.5 rounded-[4px] font-medium text-sm transition-colors cursor-pointer mt-4"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Organization / Entity *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Hospital, Importer, Ministry..."
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Destination Market *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  >
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Germany">Germany</option>
                    <option value="Other Territory">Other Territory (Specify Below)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0F2118] mb-1">
                  Product / Molecule / Strength / Pack Requirement *
                </label>
                <input
                  type="text"
                  required
                  value={formData.itemSpec}
                  onChange={(e) => setFormData({ ...formData, itemSpec: e.target.value })}
                  placeholder="e.g., Specific Molecule 500mg, Injectable, 5000 packs"
                  className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Target Volume / Units
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g., 2,500 packs / monthly"
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Storage Band
                  </label>
                  <select
                    value={formData.temperature}
                    onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  >
                    <option>Ambient (15°C – 25°C)</option>
                    <option>Cold Chain (2°C – 8°C)</option>
                    <option>Deep Frozen (-20°C / -80°C)</option>
                    <option>Controlled Substance Protocol</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0F2118] mb-1">
                  Special Notes / Regulatory Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Legalized Certificate of Analysis needed, specific shelf-life mandate..."
                  className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                />
              </div>

              <div className="pt-3 border-t border-[#D4DCD6] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#55675D]">
                  <ShieldCheck className="w-4 h-4 text-[#1B7A3C]" />
                  <span>Confidential trade inquiry under NDA</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A451] hover:bg-[#D9B870] text-[#0A3F23] font-semibold px-6 py-2.5 rounded-[4px] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
