import React from 'react';
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react';

export const UtilityBar: React.FC = () => {
  return (
    <div
      id="utility-bar"
      className="w-full bg-[#0A3F23] border-b border-[#D9B870]/20 py-2 text-xs text-white/90"
      role="complementary"
      aria-label="Contact and operating hours"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Contact info and social icons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            id="utility-phone"
            href="tel:+00000000000"
            className="inline-flex items-center gap-2 hover:text-[#D9B870] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D9B870]" />
            <span className="font-mono-ui text-[11px] sm:text-xs">
              +00 00000 00000{' '}
              <span className="hidden md:inline text-white/60 font-sans-ui italic">
                · Primary Desk · Inquiries
              </span>
            </span>
          </a>

          <a
            id="utility-email"
            href="mailto:desk@yourcompany.com"
            className="inline-flex items-center gap-2 hover:text-[#D9B870] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#D9B870]" />
            <span className="font-mono-ui text-[11px] sm:text-xs">desk@yourcompany.com</span>
          </a>

          <div className="hidden sm:flex items-center gap-2.5 border-l border-white/20 pl-3">
            <a
              id="utility-linkedin"
              href="#linkedin"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-[#D9B870] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              id="utility-instagram"
              href="#instagram"
              aria-label="Instagram"
              className="text-white/80 hover:text-[#D9B870] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Operational hours */}
        <div className="text-[11px] text-white/70 font-mono-ui tracking-wide">
          <span>Mon–Sat · 04:00–13:00 UTC · Dedicated Global Desks</span>
        </div>
      </div>
    </div>
  );
};
