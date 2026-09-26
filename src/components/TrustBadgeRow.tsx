import React from 'react';
import { TRUST_BADGES } from '../data/mockData';
import { ShieldCheck } from 'lucide-react';

export const TrustBadgeRow: React.FC = () => {
  return (
    <section
      id="trust-badge-row"
      className="bg-[#F0F9FF] border-y border-[#BAE6FD] py-4.5"
      aria-label="Quality and compliance credentials"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-4 overflow-x-auto py-1">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-[4px] border border-[#0284C7]/20 text-xs sm:text-[13px] font-semibold text-[#082F49] shadow-2xs whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
