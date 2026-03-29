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
    title: 'B2B Solutions',
    description: 'Building B2B programs that generate new leads and accelerate receivables turnover.',
    icon: Network,
    detail: 'Building B2B programs that generate new leads and accelerate receivables turnover to increase sales and optimize cash flow.'
  },
  {
    id: '03',
    title: 'Alternative Assets',
    description: 'Helping small and medium businesses access private capital.',
    icon: Landmark,
    detail: 'Helping small and medium businesses access private capital.'
  }
];
