import React from 'react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      num: '①',
      title: 'Strategic Production Origin',
      description:
        'Established relationships with major verified pharmaceutical manufacturing hubs, providing reliable production volume, rigorous testing, and quality assurance.',
    },
    {
      num: '②',
      title: 'Destination-Ready Compliance',
      description:
        'Custom regulatory dossiers aligned specifically to target country health ministries, expediting port entry without template ambiguity.',
    },
    {
      num: '③',
      title: 'Dedicated Single-Point Desk',
      description:
        'Direct communication with a named operational manager who monitors your specification, pack sizes, customs clearance, and courier tracking.',
    },
  ];

  return (
    <section id="pillars" className="bg-white py-14 sm:py-20 border-b border-[#D4DCD6]" aria-label="Why customers choose us">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <span className="font-editorial text-4xl sm:text-5xl text-[#0A3F23] font-light leading-none shrink-0 select-none">
                {pillar.num}
              </span>
              <div>
                <h3 className="font-editorial text-2xl font-semibold text-[#0A3F23] mb-2.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#55675D] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
