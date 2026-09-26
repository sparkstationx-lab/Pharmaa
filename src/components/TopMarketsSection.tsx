import React from 'react';
import { TOP_MARKETS } from '../data/mockData';
import { ArrowRight, Globe2 } from 'lucide-react';

interface TopMarketsSectionProps {
  onOpenQuoteModal: () => void;
}

export const TopMarketsSection: React.FC<TopMarketsSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="markets" className="py-14 sm:py-20 bg-[#FBFAF6]" aria-label="Export Markets">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[840px] mb-10">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            05 · PAN-India Distribution Network
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0369A1] leading-[1.2] mb-3">
            Healthcare Markets &amp; Institutional Segments We Supply.
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            Operating a nationwide pharmaceutical wholesale corridor from Gwalior (M.P.), Jadon Pharmaceuticals
            supplies accredited tertiary hospitals, military medical commands, government procurement boards,
            and licensed retail and hospital pharmacies across India.
          </p>
        </div>

        {/* Desktop 10-Column Interlocking Honeycomb Hexagonal Layout */}
        <div className="market-tiles-desktop hidden md:grid grid-cols-10 gap-2.5 max-w-[1040px] mx-auto mt-10">
          {/* Row 1 (4 Hexagons, starting at column 2) */}
          <div className="col-start-2 col-span-2">
            <HexTile market={TOP_MARKETS[0]} onClick={onOpenQuoteModal} />
          </div>
          <div className="col-span-2">
            <HexTile market={TOP_MARKETS[1]} onClick={onOpenQuoteModal} />
          </div>
          <div className="col-span-2">
            <HexTile market={TOP_MARKETS[2]} onClick={onOpenQuoteModal} />
          </div>
          <div className="col-span-2">
            <HexTile market={TOP_MARKETS[3]} onClick={onOpenQuoteModal} />
          </div>

          {/* Row 2 (5 Hexagons, spanning cols 1 through 10, nested with -mt-[26%]) */}
          <div className="col-span-2 -mt-[26%]">
            <HexTile market={TOP_MARKETS[4]} onClick={onOpenQuoteModal} />
          </div>
          <div className="col-span-2 -mt-[26%]">
            <HexTile market={TOP_MARKETS[5]} onClick={onOpenQuoteModal} />
          </div>
          <div className="col-span-2 -mt-[26%]">
            <HexTile market={TOP_MARKETS[6]} onClick={onOpenQuoteModal} />
          </div>
          <div className="col-span-2 -mt-[26%]">
            <HexTile market={TOP_MARKETS[7]} onClick={onOpenQuoteModal} />
          </div>
          <div className="col-span-2 -mt-[26%]">
            <HexTile market={TOP_MARKETS[8]} onClick={onOpenQuoteModal} />
          </div>
        </div>

        {/* Mobile / Tablet Responsive Grid */}
        <div className="market-tiles-mobile md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
          {TOP_MARKETS.map((market) => (
            <div
              key={market.id}
              onClick={onOpenQuoteModal}
              className="bg-white border border-[#BAE6FD] rounded-[12px] p-4 flex items-center justify-between shadow-2xs hover:border-[#0284C7] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] shrink-0 font-bold text-xs">
                  {market.flagCode}
                </div>
                <div>
                  <h4 className="font-editorial text-lg font-semibold text-[#0369A1] leading-snug">
                    {market.name}
                  </h4>
                  <span className="font-mono-ui text-[11px] text-[#A38442] block">
                    {market.regulator}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0284C7] shrink-0" />
            </div>
          ))}
        </div>

        {/* Section Bottom Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-transparent hover:bg-[#0284C7] text-[#0284C7] hover:text-white border border-[#0284C7] font-medium text-sm sm:text-base px-7 py-3 rounded-[4px] transition-all cursor-pointer shadow-2xs"
          >
            <span>Browse all 49 export markets</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

interface HexTileProps {
  market: (typeof TOP_MARKETS)[0];
  onClick: () => void;
}

const HexTile: React.FC<HexTileProps> = ({ market, onClick }) => {
  return (
    <div onClick={onClick} className="market-tile-hex cursor-pointer group">
      <div className="flex flex-col items-center justify-center gap-1.5 px-2">
        <div className="w-7 h-7 rounded-full bg-[#0284C7]/15 text-[#0284C7] group-hover:bg-[#D9B870]/20 group-hover:text-[#D9B870] flex items-center justify-center text-[10px] font-mono-ui font-bold transition-colors">
          <Globe2 className="w-3.5 h-3.5" />
        </div>
        <span className="market-tile-name font-editorial text-[16px] font-semibold text-[#0369A1] leading-tight transition-colors">
          {market.name}
        </span>
        <span className="market-tile-regulator font-mono-ui text-[10px] text-[#A38442] leading-tight transition-colors tracking-wide max-w-[120px]">
          {market.regulator}
        </span>
      </div>
    </div>
  );
};
