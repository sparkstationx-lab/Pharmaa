import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBandProps {
  onOpenQuoteModal: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="contact-cta"
      className="bg-gradient-to-r from-[#0A3F23] via-[#0F5B2E] to-[#1B7A3C] text-white py-16 sm:py-24 text-center relative overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Subtle radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201, 164, 81, 0.2), transparent 70%)',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        <span className="inline-block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#D9B870] font-bold mb-3">
          Start the Conversation
        </span>

        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] font-semibold text-white leading-[1.2] max-w-[26ch] mx-auto mb-4">
          Tell Us Which Specification, Which Destination, Which Volume.
        </h2>

        <p className="text-white/80 text-base sm:text-lg max-w-[620px] mx-auto mb-9 leading-relaxed">
          One working day to a written formal response with pricing, batch lead-times, and destination
          regulatory status. Dedicated direct desk handling on every inquiry.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-[#C9A451] hover:bg-[#D9B870] text-[#0A3F23] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-[4px] transition-colors shadow-sm cursor-pointer"
          >
            <span>Request a quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#0A3F23] border border-white/45 text-sm sm:text-base px-7 py-3.5 rounded-[4px] transition-all cursor-pointer"
          >
            <span>Request data package</span>
          </button>

          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#0A3F23] border border-white/45 text-sm sm:text-base px-7 py-3.5 rounded-[4px] transition-all cursor-pointer"
          >
            <span>Browse portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
};
