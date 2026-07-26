import {
  Droplets, Wrench, Settings, Filter, CircleDot, Calendar,
  Gauge, Cog, Zap, Activity, RefreshCw, Shield, Award, Clock, IndianRupee,
  CheckCircle, Headphones, Power, Users, Phone
} from 'lucide-react';

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

export const serviceIcons = {
  'ro-repair': Wrench,
  'ro-installation': Settings,
  'ro-uninstallation': Power,
  'filter-replacement': Filter,
  'membrane-replacement': CircleDot,
  'amc-plans': Calendar,
  'water-leakage-repair': Droplets,
  'low-water-flow': Gauge,
  'pump-repair': Cog,
  'motor-repair': Zap,
  'tds-adjustment': Activity,
  'periodic-maintenance': RefreshCw,
};

export const whyChooseIcons = { Clock, Award, Shield, IndianRupee, CheckCircle, Headphones };

export const steps = [
  { icon: Phone, num: '01', title: 'Book Service', desc: 'Call us or fill the form to schedule your RO service.' },
  { icon: Users, num: '02', title: 'Technician Assigned', desc: 'We assign the nearest trained technician to your area.' },
  { icon: Wrench, num: '03', title: 'Home Visit', desc: 'Our technician visits your home at the scheduled time.' },
  { icon: Settings, num: '04', title: 'Repair / Service', desc: 'Problem is diagnosed and fixed on the spot.' },
  { icon: CheckCircle, num: '05', title: 'Payment', desc: 'Pay only after the service is completed to your satisfaction.' },
];

export const problems = [
  { icon: Droplets, label: 'No Water' },
  { icon: Droplets, label: 'Water Leakage' },
  { icon: Droplets, label: 'Bad Taste' },
  { icon: Droplets, label: 'Bad Smell' },
  { icon: Gauge, label: 'Low Pressure' },
  { icon: Cog, label: 'Noise' },
  { icon: Filter, label: 'Filter Change' },
  { icon: Power, label: 'RO Not Starting' },
  { icon: Cog, label: 'Pump Problem' },
  { icon: Zap, label: 'UV Light Problem' },
];
