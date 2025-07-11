import type { CertificationItem } from "@/components/company/Certifications";
import type { StatItem } from "@/components/company/Impact";
import type { IFeature } from "@/components/Features";
import {
  Award,
  CheckCircle,
  Clock,
  HardHat,
  Heart,
  Leaf,
  MapPin,
  Phone,
  Shield,
  Star,
  Truck,
} from "lucide-react";

export const navItems = [
  { name: "Services", href: "#", hasDropdown: true },
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
];

export const serviceItems = [
  {
    name: "Environmental remediation",
    href: "environment",
    icon: Leaf,
    color: "text-green-500",
  },
  {
    name: "Selective demolition",
    href: "demolition",
    icon: HardHat,
    color: "text-red-500",
  },
  {
    name: "Transportation",
    href: "/transportation",
    icon: Truck,
    color: "text-blue-500",
  },
];

export const FeatureList: IFeature[] = [
  {
    id: "trust",
    title: "Trust & Reliability",
    subtitle: "Your Partner You Can Count On",
    description:
      "Built on transparent communication. Our commitment to excellence has earned us the trust of industry leaders across Missouri and Illinois.",
    icon: Shield,
    iconBg: "from-blue-500 to-blue-600",
    cardBg: "from-blue-50 to-blue-100",
    features: [
      "On-time project completion",
      "Transparent pricing & billing",
      "24/7 emergency response",
      "Fully insured & bonded",
      "Real-time project updates",
    ],

    height: "short",
  },
  {
    id: "expertise",
    title: "Certified Expertise",
    subtitle: "Industry-Leading Qualifications",
    description:
      "We are specialized in environmental remediation, demolition, and hazardous material handling.",
    icon: Award,
    iconBg: "from-yellow-500 to-orange-500",
    cardBg: "from-yellow-50 to-orange-50",
    features: [
      "EPA certified technicians",
      "DOT hazmat specialists",
      "OSHA safety compliance",
      "Continuous training programs",
    ],

    height: "short",
  },
  {
    id: "community",
    title: "Community Focus",
    subtitle: "Local Roots, Regional Impact",
    description:
      "We understand local regulations, support local jobs, and reinvest in the communities we serve. Our local expertise means faster response times and better outcomes.",
    icon: Heart,
    iconBg: "from-green-500 to-emerald-500",
    cardBg: "from-green-50 to-emerald-50",
    features: [
      "Local hiring priority",
      "Community partnerships",
      "Environmental stewardship",
      "Regional economic support",
      "Quick local response",
    ],
  },
  {
    id: "safety",
    title: "Safety First",
    subtitle: "Zero Compromise on Protection",
    description:
      "Rigorous safety protocols protecting our workers, your property, and the environment. Our safety record speaks for itself.",
    icon: HardHat,
    iconBg: "from-red-500 to-red-600",
    cardBg: "from-red-50 to-red-100",
    features: [
      "Zero accident goal",
      "Daily safety briefings",
      "Advanced PPE protocols",
      "Environmental protection",
    ],
    height: "short",
  },
  {
    id: "innovation",
    title: "Cutting-Edge Technology",
    subtitle: "Advanced Solutions for Complex Challenges",
    description:
      "We leverage the latest technology and innovative approaches to deliver superior results while maintaining cost-effectiveness.",
    icon: Star,
    iconBg: "from-purple-500 to-purple-600",
    cardBg: "from-purple-50 to-purple-100",
    features: [
      "Advanced equipment fleet",
      "Digital project management",
      "Real-time monitoring",
      "Innovative methodologies",
    ],

    height: "short",
  },
  {
    id: "results",
    title: "Proven Results",
    subtitle: "Track Record of Success",
    description:
      "Our portfolio speaks for itself - consistently delivering projects on time, within budget, and exceeding expectations.",
    icon: CheckCircle,
    iconBg: "from-teal-500 to-teal-600",
    cardBg: "from-teal-50 to-teal-100",
    features: [
      "On-time delivery",
      "Budget compliance",
      "Quality assurance",
      "Client satisfaction",
    ],
    height: "short",
  },
];

export const certifications: CertificationItem[] = [
  {
    name: "Environmental Protection Agency",
    shortName: "EPA",
    category: "environmental",
  },
  {
    name: "Occupational Safety and Health Administration",
    shortName: "OSHA",
    category: "safety",
  },
  {
    name: "National Institute for Occupational Safety and Health",
    shortName: "NIOSH",
    category: "safety",
  },
  {
    name: "Department of Transportation",
    shortName: "DOT",
    category: "transportation",
  },
  {
    name: "Minority Business Enterprise",
    shortName: "MBE",
    category: "business",
  },
];

export const stats: StatItem[] = [
  {
    number: "500+",
    label: "Projects Completed",
    icon: CheckCircle,
  },
  {
    number: "15+",
    label: "Years Experience",
    icon: Clock,
  },
  {
    number: "2",
    label: "States Served",
    icon: MapPin,
  },
  {
    number: "24/7",
    label: "Emergency Response",
    icon: Phone,
  },
];
