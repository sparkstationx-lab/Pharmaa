import React from 'react';
import { Phone, Mail, ShieldCheck, MapPin } from 'lucide-react';

export const UtilityBar: React.FC = () => {
  return (
    <div
      id="utility-bar"
      className="w-full bg-[#0A3F23] border-b border-[#D9B870]/20 py-2 text-xs text-white/90"
      role="complementary"
      aria-label="Contact and operating hours"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Contact info, Location and License */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="inline-flex items-center gap-1.5 text-[#D9B870] font-mono-ui text-[11px] sm:text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CDSCO Wholesale Lic: Wholesale-819-A</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-white/80 font-mono-ui text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#D9B870]" />
            <span>Central Hub: Gwalior, Madhya Pradesh</span>
          </div>

          <a
            id="utility-email"
            href="mailto:inquiry@jadonpharma.com"
            className="inline-flex items-center gap-2 hover:text-[#D9B870] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#D9B870]" />
            <span className="font-mono-ui text-[11px] sm:text-xs">inquiry@jadonpharma.com</span>
          </a>
        </div>

        {/* Right: Operational hours */}
        <div className="text-[11px] text-white/80 font-mono-ui tracking-wide">
          <span>Mon–Sat · 09:30–18:30 IST · Dedicated Institutional Desk</span>
        </div>
      </div>
    </div>
  );
};

