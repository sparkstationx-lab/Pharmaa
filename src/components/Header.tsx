import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/mockData';
import { ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className="sticky top-2 sm:top-4 z-50 w-full max-w-[1280px] mx-auto px-3 sm:px-6 my-2 sm:my-3 transition-all duration-300"
    >
      <div
        className={`bg-[#FBFAF6]/92 backdrop-blur-md border transition-all duration-300 rounded-2xl ${
          isScrolled
            ? 'border-[#0A3F23]/20 shadow-xl shadow-[#0A3F23]/12 bg-[#FBFAF6]/98'
            : 'border-[#D4DCD6] shadow-lg shadow-[#0A3F23]/6'
        }`}
      >
        <div className="px-4 sm:px-6 h-[68px] sm:h-[72px] flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            id="site-logo"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Jadon Pharmaceuticals Homepage"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0A3F23] flex items-center justify-center text-[#C9A451] border border-[#C9A451]/40 shadow-xs group-hover:bg-[#0F5B2E] transition-colors shrink-0">
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
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#0A3F23] leading-none">
                JADON PHARMACEUTICALS
              </span>
              <span className="font-mono-ui text-[9px] tracking-[0.12em] uppercase text-[#55675D] mt-0.5">
                INDIA PVT. LTD. · LIC. WHOLESALE-819-A
              </span>
            </div>
          </a>

          {/* Desktop Primary Navigation */}
          <nav
            id="main-navigation"
            className="hidden xl:flex items-center gap-6 text-[14px] font-medium text-[#0F2118]"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0A3F23] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A451] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenQuoteModal}
              className="text-[#0A3F23] font-semibold hover:text-[#0F5B2E] inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Request a quote</span>
              <span className="text-[#C9A451]">→</span>
            </button>
          </nav>

          {/* Header Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              id="header-cta-btn"
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center gap-2 bg-[#C9A451] hover:bg-[#D9B870] text-[#0A3F23] font-semibold text-xs sm:text-[13px] px-4 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <span>Request a quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#0A3F23] hover:bg-[#E4F1E8] rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            className="xl:hidden border-t border-[#D4DCD6]/80 px-4 pt-3 pb-5 space-y-1.5 animate-in slide-in-from-top-2 duration-200"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[15px] font-medium text-[#0F2118] hover:text-[#0A3F23] border-b border-[#D4DCD6]/30 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C9A451] hover:bg-[#D9B870] text-[#0A3F23] font-semibold text-sm py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                <span>Request a quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
