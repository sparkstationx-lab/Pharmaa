import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
  onOpenMeetingModal: () => void;
}

const NAV_BUTTONS = [
  'Home',
  'About',
  'Services',
  'Products',
  'Markets',
  'Insights',
  'Contact',
  'Book a Meeting',
];

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onOpenMeetingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    setMobileMenuOpen(false);

    if (label === 'Book a Meeting') {
      onOpenMeetingModal();
      return;
    }

    const targetMap: Record<string, string> = {
      Home: 'home',
      About: 'about',
      Services: 'services',
      Products: 'products',
      Markets: 'markets',
      Insights: 'insights',
      Contact: 'contact',
    };

    const targetId = targetMap[label];
    if (targetId) {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      id="site-header"
      className="sticky top-2 sm:top-4 z-50 w-full max-w-[1280px] mx-auto px-3 sm:px-6 my-2 sm:my-3 transition-all duration-300"
    >
      <div
        className={`bg-[#FBFAF6]/92 backdrop-blur-md border transition-all duration-300 rounded-2xl ${
          isScrolled
            ? 'border-[#0284C7]/30 shadow-xl shadow-[#0284C7]/12 bg-[#FBFAF6]/98'
            : 'border-[#BAE6FD] shadow-lg shadow-[#0284C7]/6'
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
            <div className="w-10 h-10 rounded-lg bg-[#0284C7] flex items-center justify-center text-white border border-[#38BDF8]/40 shadow-xs group-hover:bg-[#0369A1] transition-colors shrink-0">
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
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#0369A1] leading-none">
                JADON PHARMACEUTICALS
              </span>
              <span className="font-mono-ui text-[9px] tracking-[0.12em] uppercase text-[#475569] mt-0.5">
                INDIA PVT. LTD. · LIC. WHOLESALE-819-A
              </span>
            </div>
          </a>

          {/* Desktop Primary Navigation: Home, About, Services, Products, Markets, Insights, Contact, Book a Meeting */}
          <nav
            id="main-navigation"
            className="hidden lg:flex items-center gap-1 sm:gap-1.5 xl:gap-2 text-[13px] xl:text-[14px] font-medium text-[#082F49]"
            aria-label="Primary Navigation"
          >
            {NAV_BUTTONS.map((label) => {
              if (label === 'Book a Meeting') {
                return (
                  <button
                    key={label}
                    id="nav-btn-book-meeting"
                    type="button"
                    onClick={() => handleNavClick(label)}
                    className="ml-2 inline-flex items-center gap-1.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-xs sm:text-[13px] px-3.5 py-2 rounded-lg transition-colors cursor-pointer shadow-xs shadow-[#0284C7]/20"
                    aria-label="Book a Meeting"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={label}
                  id={`nav-btn-${label.toLowerCase()}`}
                  type="button"
                  onClick={() => handleNavClick(label)}
                  className="px-2.5 sm:px-3 py-1.5 rounded-lg text-[#082F49] hover:text-[#0284C7] hover:bg-[#E0F2FE]/70 transition-colors cursor-pointer font-medium"
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0284C7] hover:bg-[#E0F2FE] rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown: Home, About, Services, Products, Markets, Insights, Contact, Book a Meeting */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            className="lg:hidden border-t border-[#BAE6FD] px-4 pt-3 pb-5 space-y-1 animate-in slide-in-from-top-2 duration-200"
          >
            {NAV_BUTTONS.map((label) => {
              if (label === 'Book a Meeting') {
                return (
                  <div key={label} className="pt-2">
                    <button
                      id="mobile-nav-btn-book-meeting"
                      type="button"
                      onClick={() => handleNavClick(label)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{label}</span>
                    </button>
                  </div>
                );
              }

              return (
                <button
                  key={label}
                  id={`mobile-nav-btn-${label.toLowerCase()}`}
                  type="button"
                  onClick={() => handleNavClick(label)}
                  className="w-full text-left py-2.5 px-3 text-[15px] font-medium text-[#082F49] hover:text-[#0284C7] hover:bg-[#E0F2FE]/50 rounded-lg transition-colors cursor-pointer border-b border-[#BAE6FD]/40 last:border-b-0"
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
