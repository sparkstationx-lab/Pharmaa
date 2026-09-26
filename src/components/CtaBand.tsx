import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBandProps {
  onOpenQuoteModal: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="contact-cta"
      className="bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0EA5E9] text-white py-16 sm:py-24 text-center relative overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Subtle radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(56, 189, 248, 0.25), transparent 70%)',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        <span className="inline-block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#BAE6FD] font-bold mb-3">
          Institutional Supply &amp; Tender Inquiries
        </span>

        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] font-semibold text-white leading-[1.2] max-w-[28ch] mx-auto mb-4">
          Request Hospital-Grade Formulations &amp; Critical-Care Quotes.
        </h2>

        <p className="text-white/90 text-base sm:text-lg max-w-[660px] mx-auto mb-9 leading-relaxed">
          Operating under CDSCO Wholesale License Wholesale-819-A. We supply tertiary hospitals,
          military commands, and pharmacy chains with authorized manufacturer batches, unbroken
          2°C–8°C cold-chain monitoring, and complete CoA documentation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#F0F9FF] text-[#0284C7] font-bold text-sm sm:text-base px-7 py-3.5 rounded-[4px] transition-colors shadow-sm cursor-pointer"
          >
            <span>Request Institutional Quote</span>
            <ArrowRight className="w-4 h-4 text-[#0284C7]" />
          </button>

          <a
            href="#compliance"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#0284C7] border border-white/50 text-sm sm:text-base px-7 py-3.5 rounded-[4px] transition-all cursor-pointer"
          >
            <span>Verify License Wholesale-819-A</span>
          </a>

          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#0284C7] border border-white/50 text-sm sm:text-base px-7 py-3.5 rounded-[4px] transition-all cursor-pointer"
          >
            <span>Browse Formulations</span>
          </a>
        </div>
      </div>
    </section>
  );
};
