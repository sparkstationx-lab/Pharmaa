import React from 'react';
import { ShieldCheck, FileCheck2, ThermometerSnowflake, UserCheck, CheckCircle2, Lock } from 'lucide-react';

export const SupplyIntegritySection: React.FC = () => {
  const compliancePoints = [
    {
      ref: 'CDSCO LIC. 819-A',
      icon: ShieldCheck,
      title: 'CDSCO-Authorized Wholesale Operations',
      description:
        'Authorized wholesale operations conducted under Drug License Wholesale-819-A, adhering strictly to national statutory standards and regulated supply mandates.',
    },
    {
      ref: 'WHO-GDP GWALIOR',
      icon: ThermometerSnowflake,
      title: 'WHO-GDP & 2°C–8°C Cold-Chain Protocol',
      description:
        'Central warehousing in Gwalior (M.P.) engineered to WHO-GDP specifications, with continuous IoT temperature telemetry from storage to delivery.',
    },
    {
      ref: 'BATCH TRACEABILITY',
      icon: FileCheck2,
      title: 'Certificate of Analysis (CoA) & GST Invoices',
      description:
        'Every batch is sourced directly from WHO-GMP certified manufacturers, delivered with verified batch numbers, manufacturer CoAs, and compliant GST invoices.',
    },
    {
      ref: 'BUYER CREDENTIALS',
      icon: UserCheck,
      title: 'Mandatory Drug License & GST Verification',
      description:
        'Institutional supply is strictly provided to licensed healthcare entities with verified Drug Licenses and active GST registrations, guaranteeing zero unauthorized diversion.',
    },
  ];

  return (
    <section
      id="compliance"
      className="bg-[#F0F9FF] border-y border-[#BAE6FD] py-14 sm:py-20"
      aria-labelledby="compliance-title"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[840px] mb-10">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            03 · Quality &amp; Statutory Compliance
          </span>
          <h2
            id="compliance-title"
            className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0369A1] leading-[1.2] mb-3"
          >
            Uncompromising Compliance. Source to Ward.
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            At Jadon Pharmaceuticals India Private Limited, clinical safety depends on regulatory discipline.
            From WHO-GMP authorized production intake to hospital ward delivery, every unit complies with CDSCO
            and WHO-GDP benchmarks.
          </p>
        </div>

        {/* 4 Compliance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {compliancePoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#BAE6FD] rounded-[12px] p-6 shadow-xs relative flex flex-col justify-between hover:shadow-md hover:border-[#0284C7] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-ui text-[10px] tracking-wider text-[#0369A1] font-bold bg-[#E0F2FE] px-2 py-0.5 rounded">
                      {item.ref}
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#0369A1] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Verification Notice Banner */}
        <div className="bg-white border-l-4 border-l-[#0284C7] border border-[#BAE6FD] rounded-[8px] p-4.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#0284C7] shrink-0" />
            <div className="text-xs sm:text-sm text-[#082F49]">
              <strong className="font-semibold text-[#0369A1]">Institutional Buyer Verification Policy: </strong>
              As a CDSCO Wholesale-819-A regulated enterprise, supplies are dispatched exclusively to verified hospital pharmacies, registered clinics, government tender authorities, and licensed retail pharmacies.
            </div>
          </div>
          <span className="font-mono-ui text-[11px] text-[#0284C7] font-semibold bg-[#E0F2FE] px-3 py-1 rounded-[4px] shrink-0">
            Mandatory KYC: DL + GST
          </span>
        </div>
      </div>
    </section>
  );
};
