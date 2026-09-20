import React, { useState } from 'react';
import { NAV_LINKS } from '../data/mockData';
import { ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 bg-[#FBFAF6]/95 backdrop-blur-md border-b border-[#D4DCD6] transition-all"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          id="site-logo"
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Your Company Homepage"
        >
          <div className="w-10 h-10 rounded-sm bg-[#0A3F23] flex items-center justify-center text-[#C9A451] border border-[#C9A451]/40 shadow-xs group-hover:bg-[#0F5B2E] transition-colors">
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
            className="hidden sm:inline-flex items-center gap-2 bg-[#C9A451] hover:bg-[#D9B870] text-[#0A3F23] font-semibold text-xs sm:text-[13px] px-4 py-2.5 rounded-[4px] transition-colors cursor-pointer shadow-xs"
          >
            <span>Request a quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#0A3F23] hover:bg-[#E4F1E8] rounded-[4px] transition-colors cursor-pointer"
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
          className="xl:hidden bg-[#FBFAF6] border-b border-[#D4DCD6] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#0F2118] hover:text-[#0A3F23] border-b border-[#D4DCD6]/40"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C9A451] hover:bg-[#D9B870] text-[#0A3F23] font-semibold text-sm py-3 rounded-[4px] transition-colors cursor-pointer"
            >
              <span>Request a quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
