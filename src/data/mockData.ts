import {
  NavItem,
  StatItem,
  ProductItem,
  ServiceItem,
  MarketItem,
  ShipmentPattern,
  InsightArticle,
  LeadershipProfile,
  StructureStep,
} from '../types';

export const COMPANY_INFO = {
  name: 'Jadon Pharmaceuticals India Private Limited',
  shortName: 'Jadon Pharmaceuticals',
  licenseNo: 'Wholesale-819-A',
  regulator: 'CDSCO-Authorized Wholesale Operations',
  location: 'Gwalior, Madhya Pradesh, India',
  coldChain: '2°C–8°C Active Temperature Monitoring',
  partners: ['Senores Pharmaceuticals', 'Concord Biotech (INCA)'],
  email: 'inquiry@jadonpharma.com',
  phone: '+91 (0) 751-000-0000',
  hours: 'Mon–Sat · 09:30–18:30 IST · Dedicated Institutional Desk',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About & Depot', href: '#operations' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Structure', href: '#structure' },
  { label: 'Services', href: '#services' },
  { label: 'Formulations', href: '#products' },
  { label: 'PAN-India Network', href: '#markets' },
  { label: 'Quality & Compliance', href: '#compliance' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_BAR_ITEMS = [
  'Wholesale License: Wholesale-819-A',
  'CDSCO-Authorized Wholesale Distribution',
  'WHO-GDP Compliant Hub · Gwalior (M.P.)',
  '2°C–8°C Active Cold-Chain Monitored',
  'Distribution Partner: Senores Pharma & Concord Biotech (INCA)',
  'PAN-India Institutional Supply',
];

export const HERO_STATS: StatItem[] = [
  { value: 'Wholesale-819-A', label: 'CDSCO Wholesale Drug License' },
  { value: '2°C–8°C', label: 'Active Cold-Chain Monitoring' },
  { value: 'PAN-India', label: 'Hospitals, Clinics & Pharmacies' },
  { value: '100% Traceable', label: 'Batch CoAs & GST Invoiced' },
];

export const TRUST_BADGES = [
  'Wholesale License Wholesale-819-A',
  'CDSCO Regulated Distribution',
  'WHO-GDP Compliant Gwalior Depot',
  '2°C–8°C Active Telemetry Monitored',
  'Authorized: Senores & Concord Biotech',
  'Drug License + GST Verified Buyers',
];

export const LEADERSHIP_PROFILES: LeadershipProfile[] = [
  {
    name: 'Aman Jadon',
    role: 'Executive Director · Strategic Direction & Alliances',
    focus: [
      'Strategic direction and overall corporate growth',
      'Institutional pharmaceutical supply networks',
      'Manufacturer and healthcare-provider partnerships',
      'Logistics modernization and regulatory standards',
    ],
    bio: 'Steering long-term strategic direction and institutional alliances for Jadon Pharmaceuticals, cultivating key distribution relationships with premier manufacturers and modernizing logistics infrastructure across Indian healthcare networks.',
  },
  {
    name: 'Achal Jadon',
    role: 'Director of Operations & Supply Chain Logistics',
    focus: [
      'Daily operations and supply chain logistics',
      'Hospital, institutional, and pharmacy distribution',
      'Cold-chain integrity (2°C–8°C) & WHO-GDP compliance',
      'Gwalior warehouse workflows and tech integration',
    ],
    bio: 'Directing operational workflows at our central Gwalior distribution hub, ensuring stringent 2°C–8°C cold-chain integrity, end-to-end batch traceability, inventory precision, and seamless multi-destination dispatch.',
  },
  {
    name: 'Radhe Shyam Jadon',
    role: 'Senior Director · Governance & Regulatory Affairs',
    focus: [
      'Corporate governance and institutional experience',
      'Statutory compliance and pharmaceutical business ethics',
      'Comprehensive quality assurance frameworks',
      'Long-term organizational guidance & stewardship',
    ],
    bio: 'Providing foundational institutional guidance and compliance oversight, ensuring Jadon Pharmaceuticals operates with uncompromising regulatory fidelity, strict ethical standards, and high-trust institutional governance.',
  },
];

export const STRUCTURE_STEPS: StructureStep[] = [
  {
    step: '01',
    title: 'WHO-GMP Manufacturers',
    subtitle: 'Authorized Direct Sourcing',
    details:
      'Direct distribution alliances with leading pharmaceutical manufacturers including Senores Pharmaceuticals and Concord Biotech (INCA), securing authentic hospital-grade formulations.',
  },
  {
    step: '02',
    title: 'Jadon Pharmaceuticals Hub',
    subtitle: 'Gwalior (M.P.) Central Depot',
    details:
      'Centralized wholesale facility operating under strict WHO-GDP compliance and Drug License Wholesale-819-A, featuring regulated quarantine, batch sorting, and quality controls.',
  },
  {
    step: '03',
    title: 'Active Cold-Chain & Storage',
    subtitle: '2°C–8°C Monitored Logistics',
    details:
      'Active telemetry refrigeration and temperature-validated packaging ensuring unbroken cold-chain transit for plasma derivatives, critical care injectables, and biologicals.',
  },
  {
    step: '04',
    title: 'PAN-India Clinical Handover',
    subtitle: 'Hospitals, Clinics & Pharmacies',
    details:
      'Verified delivery to licensed institutional buyers with complete batch traceability, manufacturer Certificate of Analysis (CoA), and GST tax invoices.',
  },
];

export const PRODUCT_LIST: ProductItem[] = [
  {
    id: 'prod-01',
    category: 'Critical Care Therapeutics',
    name: 'Specialty Injectable Solution',
    description: 'Hospital-grade critical care formulation supplied with batch traceability, CoA, and calibrated thermal packout.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
    code: 'JP-CC-01',
  },
  {
    id: 'prod-02',
    category: 'Plasma & Blood Derivatives',
    name: 'Human Albumin & Factor Infusions',
    description: 'Validated 2°C–8°C biological line with end-to-end data logging, cold-room handling, and institutional batch release.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
    code: 'JP-PL-02',
  },
  {
    id: 'prod-03',
    category: 'Hospital-Grade Formulations',
    name: 'Broad-Spectrum Antimicrobial Vials',
    description: 'Lyophilized anti-infectives sourced under authorized manufacturer agreements for intensive care and surgical units.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
    code: 'JP-HF-03',
  },
  {
    id: 'prod-04',
    category: 'Oncology & Immunosuppressants',
    name: 'Targeted Specialty Oncology Series',
    description: 'Concord Biotech (INCA) & Senores authorized lines supplied with verified batch documentation and secure chain of custody.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80',
    code: 'JP-ON-04',
  },
  {
    id: 'prod-05',
    category: 'Nephrology & Organ Care',
    name: 'Specialized Dialysis & Renal Infusions',
    description: 'Hospital institutional packs maintained under continuous batch logging and rapid dispatch corridors from Gwalior depot.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=80',
    code: 'JP-NP-05',
  },
  {
    id: 'prod-06',
    category: 'Emergency & Anesthesia',
    name: 'Pre-Filled Resuscitation Ampoules',
    description: 'Vital critical-response therapeutics supplied directly to hospital pharmacies and surgical emergency departments.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&auto=format&fit=crop&q=80',
    code: 'JP-EM-06',
  },
  {
    id: 'prod-07',
    category: 'Hospital Pharmacy Wholesale',
    name: 'Cardiovascular Infusions & Tablets',
    description: 'High-turnover hospital oral and injectable lines supplied with GST invoices, batch records, and compliance dossiers.',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&auto=format&fit=crop&q=80',
    code: 'JP-CV-07',
  },
  {
    id: 'prod-08',
    category: 'Specialty Biologics',
    name: 'Recombinant Biological Line',
    description: 'Active 2°C–8°C telemetry maintained therapeutics for tertiary care hospital networks and specialized clinics.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
    code: 'JP-BIO-08',
  },
  {
    id: 'prod-09',
    category: 'Institutional Procurement',
    name: 'Government & Military Tender Pack',
    description: 'High-volume tender packaging prepared for public health boards, military medical stores, and pooled procurement desks.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
    code: 'JP-TD-09',
  },
  {
    id: 'prod-10',
    category: 'Clinical Care Consumables',
    name: 'Sterile Parenteral Electrolyte Packs',
    description: 'Certified intravenous clinical infusions handled with rigorous WHO-GDP quality verification and zero-damage freight.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
    code: 'JP-CL-10',
  },
];

export const MARQUEE_CATEGORIES = [
  'Critical Care Formulations',
  'Plasma & Albumin Derivatives',
  'Hospital-Grade Therapeutics',
  'Senores Pharmaceuticals Lines',
  'Concord Biotech (INCA) Specialty',
  'WHO-GDP Compliant Cold-Chain',
  '2°C–8°C Monitored Logistics',
  'Government & Military Procurement',
  'Tertiary Hospital Supply',
  'Super-Specialty Clinics',
  'Retail & Hospital Pharmacies',
  'Batch Traceability & CoA',
  'Wholesale License Wholesale-819-A',
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'serv-01',
    icon: '❄',
    title: 'Active Cold-Chain Storage & Transit',
    description:
      'WHO-GDP certified 2°C–8°C refrigerated warehousing in Gwalior (M.P.) with real-time IoT temperature data logging and calibrated insulated transit packouts.',
    linkText: 'Cold-Chain Protocol',
  },
  {
    id: 'serv-02',
    icon: 'Rx',
    title: 'Hospital & Institutional Distribution',
    description:
      'Direct scheduled supply to tertiary hospital departments, critical-care units, and pharmacy networks with genuine manufacturer CoAs and tax invoices.',
    linkText: 'Institutional Framework',
  },
  {
    id: 'serv-03',
    icon: '⚕',
    title: 'Government & Military Procurement',
    description:
      'Empaneled wholesale capacity for state healthcare departments, defense medical procurement, armed forces hospitals, and institutional healthcare tenders.',
    linkText: 'Tender Capabilities',
  },
  {
    id: 'serv-04',
    icon: '◈',
    title: 'Batch Traceability & Quality Assurance',
    description:
      'End-to-end chain of custody with CDSCO compliance under License Wholesale-819-A, verifying genuine batch sourcing from WHO-GMP certified facilities.',
    linkText: 'Compliance Dossier',
  },
];

export const TOP_MARKETS: MarketItem[] = [
  { id: 'm-01', name: 'Tertiary Hospitals', regulator: 'ICU & Specialty Inpatient', flagCode: 'TH' },
  { id: 'm-02', name: 'Military Healthcare', regulator: 'Defense Medical Services', flagCode: 'MH' },
  { id: 'm-03', name: 'Government Tenders', regulator: 'State Health Procurement', flagCode: 'GT' },
  { id: 'm-04', name: 'Private Clinics', regulator: 'Super-Specialty Centers', flagCode: 'PC' },
  { id: 'm-05', name: 'Hospital Pharmacies', regulator: 'Licensed In-House Desks', flagCode: 'HP' },
  { id: 'm-06', name: 'Retail Pharmacies', regulator: 'PAN-India Licensed Stores', flagCode: 'RP' },
  { id: 'm-07', name: 'Institutional Groups', regulator: 'Corporate Hospital Chains', flagCode: 'IG' },
  { id: 'm-08', name: 'Clinical Centers', regulator: 'Regulated Specialty Units', flagCode: 'CC' },
  { id: 'm-09', name: 'Regional Depots', regulator: 'WHO-GDP Transit Hubs', flagCode: 'RD' },
];

export const SHIPMENT_PATTERNS: ShipmentPattern[] = [
  {
    id: 'ship-01',
    route: 'GWALIOR CENTRAL DEPOT → TERTIARY HOSPITAL NETWORK',
    title: 'Critical Care Cold-Chain Corridor (2°C–8°C).',
    description:
      'Consignment of plasma derivatives and critical-care infusions dispatched with active IoT temperature sensors, recording zero excursion throughout transit.',
    entity: 'Leading Regional Tertiary Hospital Desk',
    meta: 'Wholesale-819-A Release · Calibrated Cold-Pack · Verified CoA',
  },
  {
    id: 'ship-02',
    route: 'MANUFACTURER PARTNER → JADON PHARMACEUTICALS WAREHOUSE',
    title: 'Senores & Concord Biotech (INCA) Specialty Sourcing.',
    description:
      'Direct authorized manufacturer intake received at Gwalior facility, quarantined, quality audited, and indexed into batch-traceable distribution inventory.',
    entity: 'Authorized Manufacturer Distribution Line',
    meta: 'Direct Manufacturer Invoiced · WHO-GDP Verified · Full Traceability',
  },
  {
    id: 'ship-03',
    route: 'CENTRAL WAREHOUSE → GOVERNMENT & MILITARY MEDICAL STORES',
    title: 'Institutional Healthcare Framework Supply.',
    description:
      'High-volume consignment fulfilled against institutional healthcare tender specifications, complete with batch-testing certificates, GST invoices, and port handover.',
    entity: 'Defense & State Healthcare Procurement Board',
    meta: 'Government Tender Batch · Legalized CoAs · Signed Delivery',
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'ins-01',
    tag: 'REGULATORY COMPLIANCE · CDSCO STANDARDS',
    title: 'Wholesale Drug License Wholesale-819-A Governance',
    summary:
      'How Jadon Pharmaceuticals enforces statutory compliance, proper storage condition maintenance, and authorized B2B wholesale distribution across India.',
  },
  {
    id: 'ins-02',
    tag: 'COLD-CHAIN INTEGRITY · WHO-GDP PROTOCOL',
    title: '2°C–8°C Active Telemetry in Pharmaceutical Logistics',
    summary:
      'A deep dive into Gwalior warehouse cold-room calibration, temperature data logging, and active packout strategies for biologicals and plasma products.',
  },
  {
    id: 'ins-03',
    tag: 'INSTITUTIONAL BUYER ONBOARDING',
    title: 'Drug License & GST Compliance Requirements for Purchasers',
    summary:
      'Mandatory documentation protocols ensuring all supplies are delivered strictly to verified, licensed hospitals, clinics, and pharmacies.',
  },
];
