import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo1.jpg';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
  onOpenMeetingModal?: () => void;
}

interface NavItemDef {
  label: string;
  path: string;
  isCta?: boolean;
}

const NAV_ITEMS: NavItemDef[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Markets', path: '/markets' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
  { label: 'Book a Meeting', path: '/book-a-meeting', isCta: true },
];

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onOpenMeetingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isItemActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === path;
  };

  const handleNavClick = (item: NavItemDef) => {
    setMobileMenuOpen(false);
    navigate(item.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <button
            id="site-logo"
            type="button"
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0 cursor-pointer text-left"
            aria-label="Jadon Pharmaceuticals Homepage"
          >
            <img
              src={logoImg}
              alt="Jadon Pharmaceuticals Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-contain bg-white border border-[#BAE6FD] shadow-xs group-hover:border-[#0284C7] transition-all shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#0369A1] leading-none group-hover:text-[#0284C7] transition-colors">
                JADON PHARMACEUTICALS
              </span>
              <span className="font-mono-ui text-[9px] tracking-[0.12em] uppercase text-[#475569] mt-0.5">
                INDIA PVT. LTD. · LIC. WHOLESALE-819-A
              </span>
            </div>
          </button>

          {/* Desktop Primary Navigation */}
          <nav
            id="main-navigation"
            className="hidden lg:flex items-center gap-1 sm:gap-1.5 xl:gap-2 text-[13px] xl:text-[14px] font-medium text-[#082F49]"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.path);

              if (item.isCta) {
                return (
                  <button
                    key={item.label}
                    id="nav-btn-book-meeting"
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className={`ml-2 inline-flex items-center gap-1.5 font-semibold text-xs sm:text-[13px] px-3.5 py-2 rounded-lg transition-all cursor-pointer shadow-xs ${
                      active
                        ? 'bg-[#0369A1] text-white ring-2 ring-[#38BDF8] shadow-sm'
                        : 'bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-[#0284C7]/20'
                    }`}
                    aria-label="Book a Meeting"
                    aria-current={active ? 'page' : undefined}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={item.label}
                  id={`nav-btn-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-medium ${
                    active
                      ? 'bg-[#E0F2FE] text-[#0284C7] font-semibold border border-[#BAE6FD]'
                      : 'text-[#082F49] hover:text-[#0284C7] hover:bg-[#E0F2FE]/70'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
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

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            className="lg:hidden border-t border-[#BAE6FD] px-4 pt-3 pb-5 space-y-1 animate-in slide-in-from-top-2 duration-200"
          >
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.path);

              if (item.isCta) {
                return (
                  <div key={item.label} className="pt-2">
                    <button
                      id="mobile-nav-btn-book-meeting"
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm py-2.5 rounded-lg transition-all cursor-pointer shadow-xs ${
                        active
                          ? 'bg-[#0369A1] text-white ring-2 ring-[#38BDF8]'
                          : 'bg-[#0284C7] hover:bg-[#0369A1] text-white'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  id={`mobile-nav-btn-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left py-2.5 px-3 text-[15px] rounded-lg transition-colors cursor-pointer border-b border-[#BAE6FD]/40 last:border-b-0 ${
                    active
                      ? 'bg-[#E0F2FE] text-[#0284C7] font-semibold'
                      : 'text-[#082F49] hover:text-[#0284C7] hover:bg-[#E0F2FE]/50 font-medium'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
