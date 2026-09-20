import React from 'react';
import { TRUST_BAR_ITEMS } from '../data/mockData';

export const TrustBar: React.FC = () => {
  return (
    <div
      id="trust-bar"
      className="bg-[#0A3F23] text-white/85 py-3 border-b border-[#D9B870]/15"
      role="region"
      aria-label="Trust credentials"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs tracking-[0.06em] font-medium font-sans-ui">
        {TRUST_BAR_ITEMS.map((item, idx) => (
          <React.Fragment key={item}>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A451]" />
              {item}
            </span>
            {idx < TRUST_BAR_ITEMS.length - 1 && (
              <span className="hidden lg:inline text-white/20">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
