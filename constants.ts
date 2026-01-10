import { LucideIcon, TrendingUp, ShieldCheck, Zap, Globe, PieChart, Users, Layers, Factory, Coins } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  detail: string;
}

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Capital Advisory',
    description: 'Strategic guidance on capital projects.',
    icon: PieChart,
    detail: 'Steering clients through projects ranging from acquisitions to location buildouts that require strategic guidance and complex financing.'
  },
  {
    id: '02',
    title: 'Loan Brokerage',
    description: 'Access to the right capital partners.',
    icon: TrendingUp,
    detail: 'Matching clients’ financing needs with banks and private lenders to find the best suitability and lowest interest rates.'
  },
  {
    id: '03',
    title: 'Vendor Finance',
    description: 'Expertly managed vendor finance portfolios.',
    icon: Users,
    detail: 'Partnering with equipment dealers and manufacturers to manage their vendor-finance portfolios.'
  }
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
  { label: 'Capital Deployed', value: '$500M+' },
  { label: 'Industries Served', value: '40+' },
  { label: 'Client Retention', value: '96%' },
  { label: 'Partner Banks', value: '50+' },
];