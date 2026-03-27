import { LucideIcon, Handshake, Network, Landmark } from 'lucide-react';

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
    title: 'M&A Advisory',
    description: 'Strategic guidance for mergers and acquisitions.',
    icon: Handshake,
    detail: 'Strategic guidance for small and medium businesses involved in mergers and acquisitions.'
  },
  {
    id: '02',
    title: 'Vendor Solutions',
    description: 'Programs that support vendor growth and cash flow.',
    icon: Network,
    detail: 'Building programs for vendors to help increase sales and improve cash flow.'
  },
  {
    id: '03',
    title: 'Alternative Assets',
    description: 'Helping businesses access capital.',
    icon: Landmark,
    detail: 'Helping small and medium businesses access capital.'
  }
];
