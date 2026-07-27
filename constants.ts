import { LucideIcon, Building2, Truck, HeartHandshake } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Commercial Real Estate',
    icon: Building2
  },
  {
    id: '02',
    title: 'Supply Chain Finance',
    icon: Truck
  },
  {
    id: '03',
    title: 'Community Investments',
    icon: HeartHandshake
  }
];
