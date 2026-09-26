import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';
import logoImg from '../assets/logo1.jpg';

interface FooterProps {
  onOpenQuoteModal: () => void;
  onOpenMeetingModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal, onOpenMeetingModal }) => {
  return (
    <footer
      id="contact"
      className="bg-[#FBFAF6] border-t-2 border-[#0284C7] pt-14 sm:pt-20 text-[#082F49]"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12">
          {/* Column 1: Brand & Profile (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 mb-4 group">
              <img
                src={logoImg}
                alt="Jadon Pharmaceuticals Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-contain bg-white border border-[#BAE6FD] shadow-xs shrink-0 group-hover:border-[#0284C7] transition-all"
              />
              <div className="flex flex-col justify-center">
                <span className="font-editorial text-xl font-bold tracking-tight text-[#0369A1] leading-none group-hover:text-[#0284C7] transition-colors">
                  JADON PHARMACEUTICALS
                </span>
                <span className="font-mono-ui text-[9px] tracking-[0.14em] uppercase text-[#475569] mt-0.5">
                  INDIA PVT. LTD. · LIC. WHOLESALE-819-A
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#475569] leading-relaxed mb-5 max-w-[340px]">
              A CDSCO-authorized pharmaceutical wholesale enterprise operating under Wholesale License
              Wholesale-819-A. Direct distribution relationships with Senores Pharmaceuticals and Concord
              Biotech (INCA), providing hospitals, clinics, and pharmacies nationwide with 2°C–8°C
              cold-chain integrity and full batch traceability.
            </p>

            <div className="bg-[#F0F9FF] border border-[#0284C7]/20 rounded-[6px] p-3 text-xs font-mono-ui text-[#0369A1] space-y-1">
              <div className="font-bold">CDSCO Wholesale Lic: Wholesale-819-A</div>
              <div>WHO-GDP Compliant Hub · Gwalior (M.P.)</div>
              <div className="text-[11px] text-[#475569]">Strict B2B Licensed Supply Only</div>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-editorial text-xl font-semibold text-[#0369A1] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#0284C7] transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#0284C7] transition-colors">About Us &amp; Depot</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#0284C7] transition-colors">Specialty Services</Link></li>
              <li><Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#0284C7] transition-colors">Pharmaceutical Products</Link></li>
              <li><Link to="/markets" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#0284C7] transition-colors">PAN-India Markets</Link></li>
              <li><Link to="/insights" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#0284C7] transition-colors">Regulatory Insights</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#0284C7] transition-colors">Contact Central Depot</Link></li>
              <li><Link to="/book-a-meeting" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#0284C7] font-semibold hover:text-[#0369A1] transition-colors">Book a Meeting</Link></li>
            </ul>
          </div>

          {/* Column 3: Segments Served (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="font-editorial text-xl font-semibold text-[#0369A1] mb-4">
              Segments
            </h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li><Link to="/markets" className="hover:text-[#0284C7] transition-colors">Tertiary Hospitals</Link></li>
              <li><Link to="/markets" className="hover:text-[#0284C7] transition-colors">Super-Specialty Clinics</Link></li>
              <li><Link to="/markets" className="hover:text-[#0284C7] transition-colors">Hospital Pharmacies</Link></li>
              <li><Link to="/markets" className="hover:text-[#0284C7] transition-colors">Retail Pharmacy Chains</Link></li>
              <li><Link to="/markets" className="hover:text-[#0284C7] transition-colors">Government Tenders</Link></li>
              <li><Link to="/markets" className="hover:text-[#0284C7] transition-colors">Military Healthcare</Link></li>
              <li><Link to="/markets" className="hover:text-[#0284C7] transition-colors">Institutional Groups</Link></li>
            </ul>
          </div>

          {/* Column 4: Central Depot & Desk (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-editorial text-xl font-semibold text-[#0369A1] mb-4">
              Central Operations
            </h3>
            <ul className="space-y-2.5 text-sm text-[#475569]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0284C7] mt-0.5 shrink-0" />
                <span>
                  <strong className="text-[#082F49] font-semibold block">
                    Central Distribution Depot
                  </strong>
                  Gwalior, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                <a href="mailto:inquiry@jadonpharma.com" className="text-[#0284C7] font-mono-ui hover:underline">
                  inquiry@jadonpharma.com
                </a>
              </li>
              <li className="text-xs text-[#475569] pt-1 font-mono-ui">
                Operating Hours: Mon–Sat · 09:30–18:30 IST
              </li>
              <li className="pt-2">
                <div className="bg-white border border-[#BAE6FD] p-2.5 rounded-[6px] text-xs text-[#082F49]">
                  <strong className="block text-[#0369A1] mb-0.5">Authorized Partnerships:</strong>
                  Senores Pharmaceuticals · Concord Biotech (INCA)
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#BAE6FD]/60 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
          <span>&copy; {new Date().getFullYear()} Jadon Pharmaceuticals India Private Limited. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span className="text-[#0369A1] font-semibold">CDSCO Wholesale Lic: Wholesale-819-A</span>
            <span>·</span>
            <Link to="/about" className="hover:text-[#0284C7] transition-colors">WHO-GDP Compliance</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-[#0284C7] transition-colors">Buyer Onboarding Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

