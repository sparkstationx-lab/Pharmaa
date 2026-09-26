import React from 'react';
import { MARQUEE_CATEGORIES } from '../data/mockData';

export const MarqueeTicker: React.FC = () => {
  return (
    <div
      id="therapeutic-marquee"
      className="overflow-hidden py-4 bg-white border-y border-[#BAE6FD] relative"
      role="region"
      aria-label="Therapeutic and product categories"
    >
      {/* Subtle edge fades */}
      <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-10 sm:gap-14 whitespace-nowrap">
        {/* First set */}
        {MARQUEE_CATEGORIES.map((cat, idx) => (
          <div key={`cat-1-${idx}`} className="inline-flex items-center gap-3">
            <span className="font-editorial text-lg sm:text-xl font-medium text-[#0369A1] hover:text-[#0284C7] transition-colors cursor-pointer">
              {cat}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]/60" />
          </div>
        ))}

        {/* Duplicated set for seamless loop */}
        {MARQUEE_CATEGORIES.map((cat, idx) => (
          <div key={`cat-2-${idx}`} className="inline-flex items-center gap-3">
            <span className="font-editorial text-lg sm:text-xl font-medium text-[#0369A1] hover:text-[#0284C7] transition-colors cursor-pointer">
              {cat}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]/60" />
          </div>
        ))}
      </div>
    </div>
  );
};
