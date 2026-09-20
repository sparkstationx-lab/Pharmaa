import React from 'react';
import { INSIGHT_ARTICLES } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

interface InsightsSectionProps {
  onOpenQuoteModal: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="insights"
      className="bg-[#E4F1E8] border-y border-[#D4DCD6] py-14 sm:py-20"
      aria-labelledby="insights-title"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[800px] mb-10">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            07 · Regulatory &amp; Trade Notes
          </span>
          <h2
            id="insights-title"
            className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A3F23] leading-[1.2] mb-3"
          >
            Practical Notes From the Trade Lanes We Run.
          </h2>
          <p className="text-[#55675D] text-base sm:text-lg leading-relaxed">
            Your description covering import protocols, local agent frameworks, temperature profiling,
            and customs documentation packets.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSIGHT_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={onOpenQuoteModal}
              className="bg-white border border-[#D4DCD6] rounded-[12px] p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#C9A451] hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <div>
                <span className="block font-mono-ui text-xs text-[#A38442] font-semibold tracking-wider mb-2.5">
                  {article.tag}
                </span>
                <h3 className="font-editorial text-2xl font-semibold text-[#0A3F23] mb-3 leading-snug group-hover:text-[#0F5B2E] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#55675D] leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D4DCD6]/60 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#A38442] group-hover:text-[#0A3F23] transition-colors">
                <span>Read note</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-transparent hover:bg-[#0A3F23] text-[#0A3F23] hover:text-white border border-[#0A3F23] font-medium text-sm sm:text-base px-7 py-3 rounded-[4px] transition-all cursor-pointer shadow-2xs"
          >
            <span>All insights</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
