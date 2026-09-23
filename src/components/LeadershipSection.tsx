import React from 'react';
import { LEADERSHIP_PROFILES } from '../data/mockData';
import { Award, CheckCircle2, Shield } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="py-14 sm:py-20 bg-white border-b border-[#D4DCD6]"
      aria-labelledby="leadership-title"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head - Ledger Style */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[840px] mb-12">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            Leadership &amp; Corporate Governance
          </span>
          <h2
            id="leadership-title"
            className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A3F23] leading-[1.2] mb-3"
          >
            Executive Leadership &amp; Operational Stewards.
          </h2>
          <p className="text-[#55675D] text-base sm:text-lg leading-relaxed">
            The leadership team at Jadon Pharmaceuticals India Private Limited combines deep
            institutional supply experience, rigorous WHO-GDP cold-chain discipline, and statutory
            governance to safeguard India’s critical healthcare supply corridors.
          </p>
        </div>

        {/* 3 Executive Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {LEADERSHIP_PROFILES.map((leader, idx) => (
            <div
              key={leader.name}
              className="bg-[#FBFAF6] border border-[#D4DCD6] rounded-[12px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#C9A451] hover:shadow-md transition-all duration-300 relative group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#0A3F23] text-[#C9A451] font-editorial text-lg font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="font-mono-ui text-[11px] text-[#A38442] font-semibold tracking-wider uppercase bg-[#F5EBD2] px-2.5 py-1 rounded-[4px] border border-[#E5CD93]">
                    Director Profile
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="font-editorial text-2xl sm:text-[26px] font-semibold text-[#0A3F23] mb-1 leading-snug">
                  {leader.name}
                </h3>
                <span className="block font-mono-ui text-xs font-semibold text-[#A38442] tracking-wide mb-4">
                  {leader.role}
                </span>

                {/* Bio paragraph */}
                <p className="text-sm text-[#55675D] leading-relaxed mb-6">
                  {leader.bio}
                </p>

                {/* Core Responsibilities Bullet Points */}
                <div className="border-t border-[#D4DCD6]/70 pt-4 mb-4">
                  <span className="block font-mono-ui text-[11px] uppercase tracking-[0.1em] text-[#0A3F23] font-bold mb-2.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A3C]" />
                    Key Strategic Domains:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-[#0F2118]">
                    {leader.focus.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A451] mt-1.5 shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="pt-3 border-t border-[#D4DCD6]/50 flex items-center gap-2 text-xs font-mono-ui text-[#55675D]">
                <Shield className="w-3.5 h-3.5 text-[#1B7A3C]" />
                <span>Jadon Pharmaceuticals Executive Board</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
