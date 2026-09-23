import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Lock } from 'lucide-react';

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
    phone: '',
    organization: '',
    institutionType: 'Tertiary / Multi-Specialty Hospital',
    drugLicenseNo: '',
    gstin: '',
    itemSpec: initialQuery,
    quantity: '',
    temperature: 'Cold-Chain (2°C – 8°C) Active Telemetry',
    deliveryState: 'Madhya Pradesh',
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
            CDSCO Lic: Wholesale-819-A · Gwalior Hub
          </span>
          <h2 id="quote-modal-title" className="font-editorial text-2xl sm:text-3xl font-bold">
            Institutional Supply &amp; Quotation Request
          </h2>
          <p className="text-white/75 text-xs sm:text-sm mt-1">
            Official wholesale dispatch for hospitals, clinics, pharmacies, and government tenders across India.
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
                Your institutional inquiry has been logged under reference{' '}
                <strong className="font-mono-ui text-[#0A3F23]">JP-INQ-2026-8819</strong>. A dedicated
                commercial officer from our Gwalior operations desk will contact you with batch availability and CoA documentation.
              </p>
              <div className="bg-[#E4F1E8] border border-[#0A3F23]/15 rounded-[8px] p-4 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono-ui text-[#0A3F23]">
                <div><strong>Requested Line:</strong> {formData.itemSpec || 'Hospital-Grade Formulations'}</div>
                <div><strong>Institution:</strong> {formData.organization}</div>
                <div><strong>Storage Protocol:</strong> {formData.temperature}</div>
                <div><strong>Delivery State:</strong> {formData.deliveryState}</div>
                <div><strong>Compliance:</strong> Wholesale-819-A · Verified Batch Release</div>
              </div>
              <button
                onClick={handleReset}
                className="bg-[#0A3F23] hover:bg-[#0F5B2E] text-white px-6 py-2.5 rounded-[4px] font-medium text-sm transition-colors cursor-pointer mt-4"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="bg-[#F5EBD2] border border-[#E5CD93] rounded-[6px] p-3 text-xs text-[#0F2118] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#A38442] shrink-0" />
                <span>
                  <strong>Compliance Requirement:</strong> Valid Drug License &amp; GSTIN are required for order fulfillment under CDSCO wholesale rules.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Representative Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Authorized Officer"
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="purchase@hospital.com"
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Institution / Healthcare Entity *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Hospital, Clinic, or Pharmacy"
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Institution Category *
                  </label>
                  <select
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  >
                    <option value="Tertiary / Multi-Specialty Hospital">Tertiary / Multi-Specialty Hospital</option>
                    <option value="Private / Super-Specialty Clinic">Private / Super-Specialty Clinic</option>
                    <option value="Hospital Pharmacy Desk">Hospital Pharmacy Desk</option>
                    <option value="Retail Licensed Pharmacy Chain">Retail Licensed Pharmacy Chain</option>
                    <option value="Government Healthcare Procurement">Government Healthcare Procurement</option>
                    <option value="Military & Armed Forces Medical Store">Military &amp; Armed Forces Medical Store</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Buyer Drug License No.
                  </label>
                  <input
                    type="text"
                    value={formData.drugLicenseNo}
                    onChange={(e) => setFormData({ ...formData, drugLicenseNo: e.target.value })}
                    placeholder="e.g. DL-20B / 21B"
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    GSTIN
                  </label>
                  <input
                    type="text"
                    value={formData.gstin}
                    onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                    placeholder="GSTIN Number"
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0F2118] mb-1">
                  Required Formulation / Molecule / Specialty Line *
                </label>
                <input
                  type="text"
                  required
                  value={formData.itemSpec}
                  onChange={(e) => setFormData({ ...formData, itemSpec: e.target.value })}
                  placeholder="e.g. Critical-Care Injectable, Human Albumin, Senores / Concord line..."
                  className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Cold-Chain Storage Protocol
                  </label>
                  <select
                    value={formData.temperature}
                    onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  >
                    <option>Cold-Chain (2°C – 8°C) Active Telemetry</option>
                    <option>Ambient Controlled (15°C – 25°C)</option>
                    <option>Deep Frozen (-20°C)</option>
                    <option>Hospital Bulk Stock Consignment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0F2118] mb-1">
                    Destination State / Union Territory
                  </label>
                  <input
                    type="text"
                    value={formData.deliveryState}
                    onChange={(e) => setFormData({ ...formData, deliveryState: e.target.value })}
                    placeholder="e.g. Madhya Pradesh, Delhi NCR, Maharashtra..."
                    className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0F2118] mb-1">
                  Specific Requirements / Batch Documentation Needs
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Mandatory manufacturer CoA, specific expiry shelf-life mandate..."
                  className="w-full px-3 py-2 border border-[#D4DCD6] rounded-[6px] bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A451]"
                />
              </div>

              <div className="pt-3 border-t border-[#D4DCD6] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#55675D]">
                  <ShieldCheck className="w-4 h-4 text-[#1B7A3C]" />
                  <span>Licensed wholesale dispatch under Wholesale-819-A</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A451] hover:bg-[#D9B870] text-[#0A3F23] font-semibold px-6 py-2.5 rounded-[4px] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Institutional Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
