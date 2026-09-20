import React from 'react';

export const SupplyIntegritySection: React.FC = () => {
  const promises = [
    {
      ref: 'REF 07.01',
      title: 'Direct Sourcing Verification',
      description:
        'Every item is procured straight from verified facilities against your confirmed purchase order, ensuring uncompromised provenance without intermediate speculation.',
    },
    {
      ref: 'REF 07.02',
      title: 'Documented End to End',
      description:
        'Batch certificates, regulatory certifications, and cold-chain temperature telemetry logs accompany every consignment, prepared for destination customs clearance.',
    },
    {
      ref: 'REF 07.03',
      title: 'Licensed Entity Handover',
      description:
        'Deliveries are coordinated directly to your designated licensed importer of record, guided by a single named desk from order validation through receipt.',
    },
  ];

  return (
    <section
      id="integrity"
      className="bg-[#E4F1E8] border-y border-[#D4DCD6] py-14 sm:py-20"
      aria-label="Supply Integrity Promise"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[800px] mb-10">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            03 · Source to Signature
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A3F23] leading-[1.2] mb-3">
            Your Supply-Integrity Promise.
          </h2>
          <p className="text-[#55675D] text-base sm:text-lg leading-relaxed">
            Your description of the verified supply chain, batch testing standards, and regulatory
            documentation guaranteed on every shipment.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promises.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#D4DCD6] rounded-[12px] p-7 shadow-xs relative flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#E4F1E8] flex items-center justify-center text-[#1B7A3C] font-semibold text-sm">
                    0{idx + 1}
                  </span>
                  <span className="font-mono-ui text-xs tracking-wider text-[#A38442] font-semibold">
                    {item.ref}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl font-semibold text-[#0A3F23] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#55675D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
