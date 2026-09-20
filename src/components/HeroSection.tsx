import React, { useState } from 'react';
import { HERO_STATS } from '../data/mockData';
import { ArrowRight, Search } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-r from-[#0A3F23] via-[#0F5B2E] to-[#1B7A3C] text-white py-16 sm:py-24 lg:py-28"
      aria-labelledby="hero-title"
    >
      {/* Radial lighting ambient effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 75% 20%, rgba(201, 164, 81, 0.25), transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(201, 164, 81, 0.12), transparent 50%)',
        }}
      />

      {/* Geometric Molecular Network SVG Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1200 780"
          className="w-full h-full object-cover animate-pulse-subtle"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#D9B870" strokeWidth="1" fill="none" opacity="0.6">
            <circle cx="180" cy="120" r="36" />
            <circle cx="1020" cy="200" r="52" />
            <circle cx="920" cy="620" r="44" />
            <circle cx="260" cy="600" r="60" />
            <path d="M180,120 L420,260 L260,600" />
            <path d="M420,260 L700,180 L1020,200" />
            <path d="M700,180 L860,420 L920,620" />
            <path d="M260,600 L540,500 L920,620" />
            <path d="M540,500 L700,180" />
          </g>
          <g fill="#D9B870" opacity="0.8">
            <circle cx="180" cy="120" r="3.5" />
            <circle cx="420" cy="260" r="3.5" />
            <circle cx="260" cy="600" r="3.5" />
            <circle cx="540" cy="500" r="3.5" />
            <circle cx="700" cy="180" r="3.5" />
            <circle cx="860" cy="420" r="3.5" />
            <circle cx="920" cy="620" r="3.5" />
            <circle cx="1020" cy="200" r="3.5" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Origin Pill */}
        <div
          id="hero-origin-pill"
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C9A451]/15 border border-[#C9A451]/35 text-[#D9B870] font-mono-ui text-xs tracking-wider uppercase mb-6 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#B8D347] animate-ping" />
          <span>Regional Hub · International Desk · Global Corridor</span>
        </div>

        {/* Hero Title */}
        <h1
          id="hero-title"
          className="font-editorial text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-tight leading-[1.12] text-white max-w-[20ch] mb-6"
        >
          From the <em className="italic text-[#C9A451] font-medium font-editorial">source point of origin</em> to your institutional desk.
        </h1>

        {/* Hero Lede / Description */}
        <p className="font-editorial text-lg sm:text-xl lg:text-[22px] font-normal leading-[1.55] text-white/85 max-w-[58ch] mb-8">
          Your Company is an international merchant export house supplying{' '}
          <strong className="text-white font-semibold">standard and specialty</strong> lines,
          biologicals, and regulated consumables to hospitals, licensed importers, and tender
          desks across <strong className="text-white font-semibold">global priority markets</strong>,
          supported by validated cold-chain and dedicated single-contact management.
        </p>

        {/* Search Bar Form */}
        <form
          id="hero-search-form"
          onSubmit={handleSearchSubmit}
          className="max-w-[620px] flex flex-col sm:flex-row gap-2.5 mb-7"
          role="search"
          aria-label="Search the product portfolio"
        >
          <div className="relative flex-1">
            <input
              id="hero-search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by molecule, brand, code, or category..."
              className="w-full bg-white text-[#0F2118] px-4 py-3.5 rounded-[8px] border-2 border-[#D9B870] placeholder:text-[#55675D]/75 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C9A451] shadow-md"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-[#C9A451] hover:bg-[#D9B870] text-[#0A3F23] font-semibold px-6 py-3.5 rounded-[4px] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* CTA Buttons Row */}
        <div id="hero-cta-group" className="flex flex-wrap items-center gap-3.5 mb-12">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-[#C9A451] hover:bg-[#D9B870] text-[#0A3F23] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-[4px] transition-colors shadow-xs cursor-pointer"
          >
            <span>Request a quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#0A3F23] border border-white/45 text-sm sm:text-base px-6 py-3.5 rounded-[4px] transition-all cursor-pointer"
          >
            <span>Browse the portfolio</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#0A3F23] border border-white/45 text-sm sm:text-base px-6 py-3.5 rounded-[4px] transition-all cursor-pointer"
          >
            <span>Request an item</span>
          </a>
        </div>

        {/* Statistics Meta Grid */}
        <div
          id="hero-stats-row"
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 max-w-[760px]"
        >
          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="border-t-2 border-[#C9A451] pt-3">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none mb-1">
                {stat.value}
              </div>
              <div className="font-mono-ui text-[11px] sm:text-xs uppercase tracking-[0.1em] text-white/70 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
