import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer
      id="site-footer"
      className="bg-[#FBFAF6] border-t-2 border-[#C9A451] pt-14 sm:pt-20 text-[#0F2118]"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12">
          {/* Column 1: Brand & Profile (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm bg-[#0A3F23] flex items-center justify-center text-[#C9A451] border border-[#C9A451]/40 shadow-xs">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-xl font-bold tracking-tight text-[#0A3F23] leading-none">
                  YOUR COMPANY
                </span>
                <span className="font-mono-ui text-[9px] tracking-[0.16em] uppercase text-[#55675D] mt-0.5">
                  GLOBAL EXPORT HOUSE
                </span>
              </div>
            </div>

            <p className="text-sm text-[#55675D] leading-relaxed mb-6 max-w-[340px]">
              An international merchant export enterprise supplying branded and generic formulations,
              biologicals, and regulated consumables to verified institutional and hospital desks
              across global trade corridors.
            </p>

            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold text-[#0F2118]">Connect</span>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-[6px] border border-[#0F2118]/20 flex items-center justify-center text-[#0A3F23] hover:bg-[#E4F1E8] hover:border-[#0A3F23] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-[6px] border border-[#0F2118]/20 flex items-center justify-center text-[#0A3F23] hover:bg-[#E4F1E8] hover:border-[#0A3F23] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-editorial text-xl font-semibold text-[#0A3F23] mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-[#55675D]">
              <li><a href="#operations" className="hover:text-[#0A3F23] transition-colors">About our operations</a></li>
              <li><a href="#services" className="hover:text-[#0A3F23] transition-colors">Specialty services</a></li>
              <li><a href="#products" className="hover:text-[#0A3F23] transition-colors">Product portfolio</a></li>
              <li><button onClick={onOpenQuoteModal} className="hover:text-[#0A3F23] transition-colors text-left cursor-pointer">Request an item</button></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Export markets</a></li>
              <li><a href="#insights" className="hover:text-[#0A3F23] transition-colors">Regulatory insights</a></li>
              <li><a href="#contact-cta" className="hover:text-[#0A3F23] transition-colors">Contact headquarters</a></li>
              <li><button onClick={onOpenQuoteModal} className="hover:text-[#0A3F23] transition-colors text-left cursor-pointer">Book a consultation</button></li>
              <li><button onClick={onOpenQuoteModal} className="hover:text-[#0A3F23] transition-colors text-left cursor-pointer">Open institutional account</button></li>
              <li><a href="#products" className="hover:text-[#0A3F23] transition-colors">Bulk supply &amp; wholesale</a></li>
            </ul>
          </div>

          {/* Column 3: Export Markets (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="font-editorial text-xl font-semibold text-[#0A3F23] mb-4">
              Export Markets
            </h3>
            <ul className="space-y-2 text-sm text-[#55675D]">
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">United Kingdom</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Gulf Cooperation Council</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Middle East &amp; North Africa</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Sub-Saharan Africa</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">South &amp; Southeast Asia</a></li>
              <li className="pt-1">
                <a href="#markets" className="text-[#A38442] font-semibold hover:text-[#0A3F23] transition-colors inline-flex items-center gap-1">
                  <span>See all 49 markets</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-editorial text-xl font-semibold text-[#0A3F23] mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 text-sm text-[#55675D]">
              <li>
                <strong className="text-[#0F2118] font-semibold block">
                  Central Operations HQ · Dispatch
                </strong>
              </li>
              <li>
                <span>Direct &amp; Inquiries:{' '}</span>
                <a href="tel:+00000000000" className="text-[#0A3F23] font-mono-ui font-semibold hover:underline">
                  +00 00000 00000
                </a>
              </li>
              <li>
                <span>Email:{' '}</span>
                <a href="mailto:desk@yourcompany.com" className="text-[#0A3F23] font-mono-ui hover:underline">
                  desk@yourcompany.com
                </a>
              </li>
              <li className="text-xs text-[#55675D]/90 pt-1 font-mono-ui">
                Mon–Sat · 04:00–13:00 UTC · 09:30–18:30 Regional Time
              </li>
              <li className="pt-2 text-xs">
                <span>International commercial desk presence in London &amp; Dubai.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0A1726]/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#55675D]">
          <span>&copy; 2005–2026 Your Company Name Pvt. Ltd. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <a href="#privacy" className="hover:text-[#0A3F23] transition-colors">Privacy Notice</a>
            <span>·</span>
            <a href="#compliance" className="hover:text-[#0A3F23] transition-colors">Compliance &amp; Ethics</a>
            <span>·</span>
            <a href="#terms" className="hover:text-[#0A3F23] transition-colors">Terms of Trade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
