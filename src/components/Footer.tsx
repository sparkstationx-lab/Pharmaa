import React from 'react';
import { ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer
      id="contact"
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
                  JADON PHARMACEUTICALS
                </span>
                <span className="font-mono-ui text-[9px] tracking-[0.14em] uppercase text-[#55675D] mt-0.5">
                  INDIA PVT. LTD. · LIC. WHOLESALE-819-A
                </span>
              </div>
            </div>

            <p className="text-sm text-[#55675D] leading-relaxed mb-5 max-w-[340px]">
              A CDSCO-authorized pharmaceutical wholesale enterprise operating under Wholesale License
              Wholesale-819-A. Direct distribution relationships with Senores Pharmaceuticals and Concord
              Biotech (INCA), providing hospitals, clinics, and pharmacies nationwide with 2°C–8°C
              cold-chain integrity and full batch traceability.
            </p>

            <div className="bg-[#E4F1E8] border border-[#0A3F23]/15 rounded-[6px] p-3 text-xs font-mono-ui text-[#0A3F23] space-y-1">
              <div className="font-bold">CDSCO Wholesale Lic: Wholesale-819-A</div>
              <div>WHO-GDP Compliant Hub · Gwalior (M.P.)</div>
              <div className="text-[11px] text-[#55675D]">Strict B2B Licensed Supply Only</div>
            </div>
          </div>

          {/* Column 2: Governance & Structure (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-editorial text-xl font-semibold text-[#0A3F23] mb-4">
              Organization
            </h3>
            <ul className="space-y-2 text-sm text-[#55675D]">
              <li><a href="#operations" className="hover:text-[#0A3F23] transition-colors">About Gwalior Central Depot</a></li>
              <li><a href="#leadership" className="hover:text-[#0A3F23] transition-colors">Executive Leadership</a></li>
              <li><a href="#structure" className="hover:text-[#0A3F23] transition-colors">Distribution Architecture</a></li>
              <li><a href="#compliance" className="hover:text-[#0A3F23] transition-colors">WHO-GDP &amp; License 819-A</a></li>
              <li><a href="#services" className="hover:text-[#0A3F23] transition-colors">Active 2°C–8°C Cold-Chain</a></li>
              <li><a href="#products" className="hover:text-[#0A3F23] transition-colors">Therapeutic Formulations</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">PAN-India Supply Network</a></li>
              <li><button onClick={onOpenQuoteModal} className="hover:text-[#0A3F23] transition-colors text-left cursor-pointer">Institutional Tender Inquiries</button></li>
            </ul>
          </div>

          {/* Column 3: Segments Served (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="font-editorial text-xl font-semibold text-[#0A3F23] mb-4">
              Segments
            </h3>
            <ul className="space-y-2 text-sm text-[#55675D]">
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Tertiary Hospitals</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Super-Specialty Clinics</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Hospital Pharmacies</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Retail Pharmacy Chains</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Government Tenders</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Military Healthcare</a></li>
              <li><a href="#markets" className="hover:text-[#0A3F23] transition-colors">Institutional Groups</a></li>
            </ul>
          </div>

          {/* Column 4: Central Depot & Desk (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-editorial text-xl font-semibold text-[#0A3F23] mb-4">
              Central Operations
            </h3>
            <ul className="space-y-2.5 text-sm text-[#55675D]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0A3F23] mt-0.5 shrink-0" />
                <span>
                  <strong className="text-[#0F2118] font-semibold block">
                    Central Distribution Depot
                  </strong>
                  Gwalior, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0A3F23] shrink-0" />
                <a href="mailto:inquiry@jadonpharma.com" className="text-[#0A3F23] font-mono-ui hover:underline">
                  inquiry@jadonpharma.com
                </a>
              </li>
              <li className="text-xs text-[#55675D] pt-1 font-mono-ui">
                Operating Hours: Mon–Sat · 09:30–18:30 IST
              </li>
              <li className="pt-2">
                <div className="bg-white border border-[#D4DCD6] p-2.5 rounded-[6px] text-xs text-[#0F2118]">
                  <strong className="block text-[#0A3F23] mb-0.5">Authorized Partnerships:</strong>
                  Senores Pharmaceuticals · Concord Biotech (INCA)
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0A1726]/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#55675D]">
          <span>&copy; {new Date().getFullYear()} Jadon Pharmaceuticals India Private Limited. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span className="text-[#0A3F23] font-semibold">CDSCO Wholesale Lic: Wholesale-819-A</span>
            <span>·</span>
            <a href="#compliance" className="hover:text-[#0A3F23] transition-colors">WHO-GDP Compliance</a>
            <span>·</span>
            <a href="#compliance" className="hover:text-[#0A3F23] transition-colors">Buyer Onboarding Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
