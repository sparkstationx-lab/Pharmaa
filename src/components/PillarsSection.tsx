import React from 'react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      num: '①',
      title: 'Authorized Distribution Alliances',
      description:
        'Established direct relationships with premier manufacturers such as Senores Pharmaceuticals and Concord Biotech (INCA), securing verified hospital-grade formulations directly from WHO-GMP facilities.',
    },
    {
      num: '②',
      title: 'WHO-GDP Central Hub in Gwalior (M.P.)',
      description:
        'State-of-the-art warehousing featuring active 2°C–8°C cold-chain chambers, real-time IoT temperature telemetry, calibrated thermal transit packaging, and comprehensive batch quarantine.',
    },
    {
      num: '③',
      title: 'Institutional & Government Tender Eligibility',
      description:
        'CDSCO Wholesale License Wholesale-819-A empaneled for Government healthcare departments, military medical procurement, tertiary hospital networks, and licensed pharmacy chains.',
    },
  ];

  return (
    <section id="pillars" className="bg-white py-14 sm:py-20 border-b border-[#BAE6FD]" aria-label="Why healthcare institutions choose us">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <span className="font-editorial text-4xl sm:text-5xl text-[#0284C7] font-light leading-none shrink-0 select-none">
                {pillar.num}
              </span>
              <div>
                <h3 className="font-editorial text-2xl font-semibold text-[#0369A1] mb-2.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
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
