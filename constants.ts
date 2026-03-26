import { LucideIcon, TrendingUp, PieChart, Users, Mail } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  detail: string;
  highlights: string[];
}

export interface CaseStudy {
  company: string;
  sector: string;
  challenge: string;
  structure: string;
  result: string;
  metric: string;
}

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Capital Advisory',
    description: 'Underwrite the decision before you approach the market.',
    icon: PieChart,
    detail: 'We help leadership teams evaluate acquisitions, facility investments, and major equipment decisions with lender-ready analysis and capital-stack guidance.',
    highlights: ['Acquisition and expansion modeling', 'Lender-ready financial packaging']
  },
  {
    id: '02',
    title: 'Loan Origination',
    description: 'Source debt from lenders that actually fit the mandate.',
    icon: TrendingUp,
    detail: 'We run disciplined lender outreach across banks, independents, and private credit providers to secure terms that match the asset, timeline, and operating profile.',
    highlights: ['Senior debt and equipment finance', 'Term, lease, and structured solutions']
  },
  {
    id: '03',
    title: 'Vendor Finance',
    description: 'Build financing programs that help equipment sellers close.',
    icon: Users,
    detail: 'For dealers and manufacturers, we design and manage vendor-finance programs that support sales teams, improve conversion, and protect portfolio quality.',
    highlights: ['Program design and lender placement', 'Ongoing portfolio support']
  },
  {
    id: '04',
    title: 'Affiliate Marketing',
    description: 'Activate demand with finance-led outreach.',
    icon: Mail,
    detail: 'We create targeted financing promotions and affiliate campaigns that open qualified conversations with buyers who are ready to move.',
    highlights: ['Campaign strategy and copy', 'Lead generation for finance offers']
  }
];

export const NAV_LINKS = [
  { label: 'Approach', href: '#narrative' },
  { label: 'Capabilities', href: '#services' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Contact', href: '#contact' },
];

export const TESTIMONIALS = [
  {
    quote: "They didn't just find us money; they found us the *right* money. Great Bay understood our manufacturing cycle better than our own bank.",
    author: "Elena V.",
    role: "CFO, Vertex Manufacturing",
    metric: "$12M Funded"
  },
  {
    quote: "Speed was critical. Great Bay closed a complex equipment lease in 14 days that other brokers said would take months.",
    author: "Marcus J.",
    role: "Founder, Logistics One",
    metric: "14 Day Close"
  }
];

export const STATS = [
  { label: 'Capital Arranged', value: '$500M+' },
  { label: 'Industries Served', value: '40+' },
  { label: 'Client Retention', value: '96%' },
  { label: 'Lender Relationships', value: '50+' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    company: 'Vertex Manufacturing',
    sector: 'Manufacturing',
    challenge: 'Needed capital for an acquisition and equipment refresh without starving working capital during a busy production cycle.',
    structure: 'Structured an equipment-backed facility with a phased draw schedule and covenant design aligned to seasonal cash flow.',
    result: 'Delivered a financing package that supported the transaction and preserved operating flexibility through integration.',
    metric: '$12M commitment',
  },
  {
    company: 'Logistics One',
    sector: 'Transportation',
    challenge: 'Had an urgent fleet opportunity with a compressed close window and lenders pushing timelines beyond the operating need.',
    structure: 'Matched the deal to an execution-focused capital partner and managed diligence tightly from application through documentation.',
    result: 'Closed the transaction quickly enough to keep the expansion plan intact and the equipment deployment on schedule.',
    metric: '14-day close',
  },
];
