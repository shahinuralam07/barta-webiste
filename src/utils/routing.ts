export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'technology'
  | 'security'
  | 'sponsors'
  | 'partnerships'
  | 'contact'
  | 'support'
  | 'faq'
  | 'careers'
  | 'privacy-policy'
  | 'terms'
  | 'cookie-policy'
  | 'disclaimer'
  | 'refund-policy'
  | 'community-guidelines'
  | 'security-disclosure';

export interface PageMeta {
  id: PageId;
  label: string;
  title: string;
  description: string;
  path: string;
}

export const PAGES: Record<PageId, PageMeta> = {
  home: {
    id: 'home',
    label: 'Home',
    title: 'Barta Technology — Communication, Reimagined.',
    description:
      'Barta Technology Pvt. Ltd. is an Indian technology startup building secure, private, and intelligent digital communication experiences.',
    path: '/',
  },
  about: {
    id: 'about',
    label: 'About Us',
    title: 'About Us — Barta Technology Pvt. Ltd.',
    description:
      'Learn about Barta Technology Pvt. Ltd., our mission, vision, values, commitment to privacy, and contribution to India’s technology ecosystem.',
    path: '/about',
  },
  products: {
    id: 'products',
    label: 'Products',
    title: 'Products — Barta Messaging & Communication',
    description:
      'Explore Barta, a privacy-focused digital communication product built for private messaging, secure media sharing, and modern usability.',
    path: '/products',
  },
  technology: {
    id: 'technology',
    label: 'Technology',
    title: 'Technology — Engineering & Cryptography Architecture | Barta',
    description:
      'Explore Barta’s secure communication architecture, modern encryption practices, post-quantum cryptography research, and responsible engineering.',
    path: '/technology',
  },
  security: {
    id: 'security',
    label: 'Security & Privacy',
    title: 'Security & Privacy — Barta Technology Pvt. Ltd.',
    description:
      'Understand Barta’s privacy-by-design architecture, data minimization principles, security updates, and responsible vulnerability disclosure.',
    path: '/security',
  },
  sponsors: {
    id: 'sponsors',
    label: 'Sponsors',
    title: 'Sponsors — Support Secure Communication Research | Barta',
    description:
      'Sponsorship opportunities supporting privacy engineering, open security research, and digital communication accessibility at Barta Technology.',
    path: '/sponsors',
  },
  partnerships: {
    id: 'partnerships',
    label: 'Partnerships',
    title: 'Partnerships — Collaborate With Barta Technology',
    description:
      'Partner with Barta Technology Pvt. Ltd. across technology integration, academic research, security audits, and enterprise initiatives.',
    path: '/partnerships',
  },
  contact: {
    id: 'contact',
    label: 'Contact Us',
    title: 'Contact Us — Barta Technology Pvt. Ltd.',
    description:
      'Reach Barta Technology Pvt. Ltd. for general enquiries, sponsorships, partnerships, support, or security communications.',
    path: '/contact',
  },
  support: {
    id: 'support',
    label: 'Support',
    title: 'Support — Help & Assistance | Barta',
    description:
      'Get help with Barta products, account safety, troubleshooting, and customer support channels.',
    path: '/support',
  },
  faq: {
    id: 'faq',
    label: 'FAQ',
    title: 'Frequently Asked Questions — Barta Technology',
    description:
      'Answers to common questions about Barta Technology Pvt. Ltd., product availability, privacy principles, encryption, and partnerships.',
    path: '/faq',
  },
  careers: {
    id: 'careers',
    label: 'Careers',
    title: 'Careers — Build at Barta Technology Pvt. Ltd.',
    description:
      'Explore engineering, cryptography, design, and security opportunities at Barta Technology Pvt. Ltd. in India.',
    path: '/careers',
  },
  'privacy-policy': {
    id: 'privacy-policy',
    label: 'Privacy Policy',
    title: 'Privacy Policy — Barta Technology Pvt. Ltd.',
    description:
      'How Barta Technology Pvt. Ltd. approaches data minimization, website privacy, and user information protection.',
    path: '/privacy-policy',
  },
  terms: {
    id: 'terms',
    label: 'Terms & Conditions',
    title: 'Terms & Conditions — Barta Technology Pvt. Ltd.',
    description:
      'Terms and conditions governing use of the Barta Technology Pvt. Ltd. website and communication services.',
    path: '/terms',
  },
  'cookie-policy': {
    id: 'cookie-policy',
    label: 'Cookie Policy',
    title: 'Cookie Policy — Barta Technology Pvt. Ltd.',
    description:
      'Information about minimal essential browser storage and cookies on the Barta Technology website.',
    path: '/cookie-policy',
  },
  disclaimer: {
    id: 'disclaimer',
    label: 'Disclaimer',
    title: 'Disclaimer — Barta Technology Pvt. Ltd.',
    description:
      'General corporate, product roadmap, and security capability disclaimers for Barta Technology Pvt. Ltd.',
    path: '/disclaimer',
  },
  'refund-policy': {
    id: 'refund-policy',
    label: 'Refund & Cancellation Policy',
    title: 'Refund & Cancellation Policy — Barta Technology Pvt. Ltd.',
    description:
      'Refund and cancellation terms applicable to any future paid offerings or confirmed services from Barta Technology Pvt. Ltd.',
    path: '/refund-policy',
  },
  'community-guidelines': {
    id: 'community-guidelines',
    label: 'Community Guidelines',
    title: 'Community Guidelines — Barta Technology Pvt. Ltd.',
    description:
      'Standards for respectful, lawful, and safe participation across Barta communication spaces.',
    path: '/community-guidelines',
  },
  'security-disclosure': {
    id: 'security-disclosure',
    label: 'Security Disclosure',
    title: 'Security Disclosure Policy — Barta Technology Pvt. Ltd.',
    description:
      'Responsible vulnerability disclosure guidelines, scope, safe harbor principles, and reporting instructions for Barta Technology.',
    path: '/security-disclosure',
  },
};

export interface NavItem {
  id: PageId;
  label: string;
}

export const HEADER_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'technology', label: 'Technology' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'contact', label: 'Contact' },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  { id: 'security', label: 'Security & Privacy' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'support', label: 'Support' },
  { id: 'faq', label: 'FAQ' },
  { id: 'careers', label: 'Careers' },
];

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Product & Tech',
    links: [
      { id: 'products', label: 'Barta Product' },
      { id: 'technology', label: 'Technology' },
      { id: 'security', label: 'Security & Privacy' },
      { id: 'faq', label: 'FAQ' },
      { id: 'support', label: 'Support' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { id: 'about', label: 'About Us' },
      { id: 'sponsors', label: 'Sponsors' },
      { id: 'partnerships', label: 'Partnerships' },
      { id: 'careers', label: 'Careers' },
      { id: 'contact', label: 'Contact Us' },
    ],
  },
  {
    heading: 'Legal & Trust',
    links: [
      { id: 'privacy-policy', label: 'Privacy Policy' },
      { id: 'terms', label: 'Terms & Conditions' },
      { id: 'cookie-policy', label: 'Cookie Policy' },
      { id: 'disclaimer', label: 'Disclaimer' },
      { id: 'refund-policy', label: 'Refund & Cancellation Policy' },
      { id: 'community-guidelines', label: 'Community Guidelines' },
      { id: 'security-disclosure', label: 'Security Disclosure' },
    ],
  },
];

const PATH_TO_PAGE = new Map<string, PageId>(
  Object.values(PAGES).map((p) => [p.path, p.id])
);

export function normalizePageId(rawInput: string | null | undefined): PageId {
  if (!rawInput) return 'home';
  const cleaned = rawInput.trim().replace(/^#\/?/, '/').toLowerCase();
  if (cleaned === '' || cleaned === '/' || cleaned === '/home') return 'home';

  const withoutLeadingSlash = cleaned.replace(/^\/+/, '').replace(/\/+$/, '');
  if (withoutLeadingSlash in PAGES) {
    return withoutLeadingSlash as PageId;
  }

  const normalizedPath = `/${withoutLeadingSlash}`;
  const matched = PATH_TO_PAGE.get(normalizedPath);
  if (matched) return matched;

  return 'home';
}

export function getPageMeta(pageId: PageId): PageMeta {
  return PAGES[pageId] ?? PAGES.home;
}
