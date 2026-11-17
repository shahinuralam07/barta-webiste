import type { FaqEntry } from '../utils/validation';
import type { PageId } from '../utils/routing';

export interface CapabilityItem {
  title: string;
  stage: 'Implemented' | 'In Development' | 'Research Initiative';
  summary: string;
  detail: string;
}

export const TECHNOLOGY_CAPABILITIES: CapabilityItem[] = [
  {
    title: 'End-to-End Transport & Session Protection',
    stage: 'Implemented',
    summary:
      'Modern transport encryption and authenticated session channels built on established cryptographic standards.',
    detail:
      'All website communications and core protocol prototypes enforce strict TLS transport protection and standard modern authenticated encryption primitives rather than custom, unreviewed ciphers.',
  },
  {
    title: 'Data Minimization & Local-First State Design',
    stage: 'Implemented',
    summary:
      'Architectural separation between message payloads and minimal operational routing metadata.',
    detail:
      'Designed so user communication workflows do not depend on behavioral tracking profiles, third-party ad networks, or unnecessary server-side retention.',
  },
  {
    title: 'Private Messaging & Encrypted Media Pipeline',
    stage: 'In Development',
    summary:
      'Client-side key management, media envelope encryption, and multi-device synchronization workflows.',
    detail:
      'Active engineering focus on low-latency messaging delivery, verified key exchange UX, and reliable media handling across constrained mobile networks.',
  },
  {
    title: 'Voice & Video Communication Pathways',
    stage: 'In Development',
    summary:
      'Real-time media transport engineered for clarity and privacy where network conditions allow.',
    detail:
      'Currently undergoing internal engineering validation and bandwidth resilience testing prior to public availability.',
  },
  {
    title: 'Post-Quantum Cryptography (PQC) Hybrid Key Exchange',
    stage: 'Research Initiative',
    summary:
      'Evaluating NIST-standardized post-quantum key encapsulation alongside classical elliptic-curve algorithms.',
    detail:
      'We are researching hybrid key-establishment patterns designed to mitigate future "harvest now, decrypt later" risks as standards mature. Barta does not claim to be "quantum-proof" or immune to attack.',
  },
  {
    title: 'Independent Security Verification & Audit Readiness',
    stage: 'Research Initiative',
    summary:
      'Preparing protocol specifications and client implementations for independent third-party review.',
    detail:
      'Security claims require independent verification. Before broad release, critical cryptographic components are scoped for external review and reproducible builds.',
  },
];

export const WHY_BARTA_CARDS = [
  {
    index: '01',
    title: 'Privacy First',
    description:
      'Privacy is treated as an architectural foundation—built into data models, encryption boundaries, and defaults rather than bolted on later.',
  },
  {
    index: '02',
    title: 'Innovation Driven',
    description:
      'Thoughtful engineering in India focused on modern cryptography, bandwidth efficiency, and resilient communication software.',
  },
  {
    index: '03',
    title: 'User Focused',
    description:
      'Security only works when everyday people can use it effortlessly. Clear interfaces and calm workflows come before complexity.',
  },
  {
    index: '04',
    title: 'Built for the Future',
    description:
      'Designed to evolve alongside emerging cryptographic standards, including hybrid post-quantum research and open interoperability.',
  },
];

export const ABOUT_VALUES = [
  {
    title: 'Engineering Honesty',
    description:
      'We distinguish clearly between shipped capabilities, work in active development, and long-term research. We never make absolute security guarantees.',
  },
  {
    title: 'Respect for Attention & Data',
    description:
      'Communication tools should serve conversations—not harvest attention, build behavioral profiles, or monetize personal metadata.',
  },
  {
    title: 'Accessibility Across Conditions',
    description:
      'Building from India means engineering for real-world network variability, diverse devices, and multilingual everyday communication.',
  },
  {
    title: 'Accountability & Transparency',
    description:
      'Open vulnerability reporting, clear policies written in plain language, and responsible stewardship of user trust.',
  },
];

export const PRODUCT_FEATURES = [
  {
    title: 'Private Messaging',
    status: 'Core Focus',
    description:
      'Clean one-to-one and group conversations engineered with privacy-by-design principles and minimal metadata exposure.',
  },
  {
    title: 'Calm, Modern User Experience',
    status: 'Core Focus',
    description:
      'Distraction-free interface with clear visual hierarchy, fast navigation, and accessible typography across desktop and mobile.',
  },
  {
    title: 'Secure Media Sharing',
    status: 'In Development',
    description:
      'Share documents, images, and attachments with integrity checks and compression tuned for reliable delivery.',
  },
  {
    title: 'Voice & Video Communication',
    status: 'Planned / Where Available',
    description:
      'Real-time voice and video communication capabilities are under active engineering development and will roll out progressively where supported.',
  },
  {
    title: 'Privacy-Focused Controls',
    status: 'Core Focus',
    description:
      'Sensible defaults for read indicators, profile visibility, and session verification so users remain in control of their presence.',
  },
  {
    title: 'Future-Ready Cryptography',
    status: 'Research & Roadmap',
    description:
      'Architecture designed for modular cryptographic upgrades as post-quantum hybrid standards mature and undergo independent review.',
  },
];

export interface SubscriptionPlan {
  id: string;
  name: string;
  priceInr: number;
  billingPeriod: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'standard-99',
    name: 'Barta Standard',
    priceInr: 99,
    billingPeriod: 'per month',
    summary:
      'Essential private communication and everyday encrypted media sharing with zero ad tracking.',
    highlights: [
      'Private 1-to-1 and group messaging',
      'Standard encrypted media and document sharing',
      'Session verification and device management',
      'No behavioral profiling or third-party ad networks',
    ],
  },
  {
    id: 'plus-199',
    name: 'Barta Plus',
    priceInr: 199,
    billingPeriod: 'per month',
    summary:
      'Expanded attachment limits, priority support, and early access to new communication capabilities.',
    featured: true,
    highlights: [
      'Everything in Barta Standard (₹99)',
      'Expanded encrypted media and attachment limits',
      'Priority access to voice, video & PQC previews as released',
      'Priority customer support channel',
    ],
  },
];

export const FAQ_ITEMS: FaqEntry[] = [
  {
    id: 'what-is-barta',
    category: 'General',
    question: 'What is Barta Technology Pvt. Ltd.?',
    answer:
      'Barta Technology Pvt. Ltd. is an Indian technology startup focused on building secure, private, and reliable digital communication software and related infrastructure.',
  },
  {
    id: 'where-is-barta-based',
    category: 'General',
    question: 'Where is Barta Technology located?',
    answer:
      'Barta Technology Pvt. Ltd. is an Indian technology initiative building products for both Indian and international users.',
  },
  {
    id: 'product-availability',
    category: 'Product',
    question: 'Where can I download the Barta application?',
    answer:
      'Official app store listings will be linked directly on our Products page once public mobile releases are published. We do not publish unofficial APK links or placeholder store URLs.',
  },
  {
    id: 'voice-video-status',
    category: 'Product',
    question: 'Are voice and video calls currently available?',
    answer:
      'Voice and video communication capabilities are under active development and will be enabled progressively where implemented, tested, and reliable.',
  },
  {
    id: 'subscription-pricing',
    category: 'Product',
    question: 'What are Barta’s subscription plans?',
    answer:
      'Barta offers two transparent monthly plans—₹99/month (Barta Standard) and ₹199/month (Barta Plus)—with zero ad-funded tracking. Full billing details and Google Play / Apple App Store refund rules are documented on the Products and Refund & Cancellation Policy pages.',
  },
  {
    id: 'pqc-plain-language',
    category: 'Security & Cryptography',
    question: 'What is post-quantum cryptography and what is Barta actually doing with it?',
    answer:
      'Post-quantum cryptography (PQC) refers to mathematical algorithms designed to stay strong even if large-scale quantum computers are built in the future. Today, Barta researches hybrid key-exchange patterns combining classical algorithms with emerging PQC standards. We do not claim to be "quantum-proof" or impossible to compromise.',
  },
  {
    id: 'security-guarantees',
    category: 'Security & Cryptography',
    question: 'Does Barta guarantee that communication cannot be hacked?',
    answer:
      'No responsible security organization claims that software is impossible to hack. Security is an ongoing engineering discipline involving careful architecture, timely updates, independent review, and responsible vulnerability disclosure.',
  },
  {
    id: 'report-vulnerability',
    category: 'Security & Cryptography',
    question: 'How do I report a security vulnerability to Barta?',
    answer:
      'Please visit our Security & Privacy or Security Disclosure page for our reporting guidelines and direct security contact email.',
  },
  {
    id: 'sponsorships-partnerships',
    category: 'Company & Partnerships',
    question: 'How can organizations sponsor or partner with Barta Technology?',
    answer:
      'Organizations interested in research sponsorships, technology collaborations, security audits, or ecosystem partnerships can reach out through our Sponsors or Partnerships pages.',
  },
  {
    id: 'careers-hiring',
    category: 'Company & Partnerships',
    question: 'How can engineers or researchers express interest in joining Barta?',
    answer:
      'Visit the Careers page to review focus areas and submit an introductory note via our static inquiry workflow or careers email.',
  },
];

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDocumentData {
  id: PageId;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const LEGAL_DOCUMENTS: Record<
  | 'privacy-policy'
  | 'terms'
  | 'cookie-policy'
  | 'disclaimer'
  | 'refund-policy'
  | 'community-guidelines'
  | 'security-disclosure',
  LegalDocumentData
> = {
  'privacy-policy': {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    subtitle: 'Our commitment to minimal data collection and respectful information handling.',
    lastUpdated: 'November 2026',
    sections: [
      {
        heading: '1. Scope & Overview',
        body: [
          'This Privacy Policy describes how Barta Technology Pvt. Ltd. ("Barta", "we", "us") handles information when you visit our official corporate website or contact us directly.',
          'This corporate website is static and does not run user accounts, behavioral advertising trackers, or third-party data broker scripts.',
        ],
      },
      {
        heading: '2. Information You Voluntarily Provide',
        body: [
          'When you prepare an enquiry through our Contact, Sponsors, Partnerships, Support, or Careers forms, your form inputs remain in your browser until you choose to send them via your own email client or copy the structured summary.',
          'If you email us directly, we receive your email address and the contents of your message strictly to respond to your enquiry, provide support, or evaluate a proposed collaboration.',
        ],
      },
      {
        heading: '3. Data Minimization & No Sale of Personal Data',
        body: [
          'We do not sell, rent, or trade personal information to third parties. Information received through direct correspondence is retained only as long as reasonably necessary to address your request or satisfy applicable legal obligations in India.',
        ],
      },
      {
        heading: '4. Hosting & Standard Server Logs',
        body: [
          'Standard static hosting providers may process transient technical request metadata (such as IP address, user-agent, and request timestamp) strictly for transport delivery, DDoS mitigation, and operational reliability.',
        ],
      },
      {
        heading: '5. Your Rights & Contact',
        body: [
          'You may request access, correction, or deletion of direct email correspondence you have sent to us by writing to our general contact address listed on the Contact Us page.',
        ],
      },
    ],
  },
  terms: {
    id: 'terms',
    title: 'Terms & Conditions',
    subtitle: 'General terms governing access to the Barta Technology Pvt. Ltd. website.',
    lastUpdated: 'November 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: [
          'By accessing or using this website operated by Barta Technology Pvt. Ltd., you agree to comply with these Terms & Conditions and applicable laws of India.',
        ],
      },
      {
        heading: '2. Informational Purpose',
        body: [
          'Materials published on this website describe Barta’s corporate identity, product direction, and engineering research. Descriptions of features under development or research initiatives are informational and do not constitute binding delivery commitments.',
        ],
      },
      {
        heading: '3. Intellectual Property',
        body: [
          'The Barta name, logo, visual design, and original written materials on this website belong to Barta Technology Pvt. Ltd. You may not misrepresent affiliation with Barta or reuse brand marks in misleading contexts.',
        ],
      },
      {
        heading: '4. Acceptable Use of Website',
        body: [
          'You agree not to disrupt website availability, attempt unauthorized access to hosting infrastructure, or send automated spam through published contact channels.',
        ],
      },
      {
        heading: '5. Updates to Terms',
        body: [
          'We may revise these Terms & Conditions as products launch or corporate operations evolve. The "Last Updated" date reflects the current version.',
        ],
      },
    ],
  },
  'cookie-policy': {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    subtitle: 'Plain-language summary of cookies and browser storage on this website.',
    lastUpdated: 'November 2026',
    sections: [
      {
        heading: '1. Minimalist Approach to Cookies',
        body: [
          'The official Barta Technology website is designed as a lightweight static website without advertising cookies, cross-site tracking pixels, or behavioral analytics cookies.',
        ],
      },
      {
        heading: '2. Essential Browser Functionality',
        body: [
          'Your browser may temporarily hold standard session state in memory while navigating pages or drafting an inquiry form. No persistent tracking identifiers are created by this site.',
        ],
      },
      {
        heading: '3. Third-Party Hosting Infrastructure',
        body: [
          'If deployed behind a static CDN or security edge (such as Cloudflare Pages, Vercel, or Netlify), the hosting layer may set strictly necessary security cookies solely to distinguish legitimate visitors from automated traffic.',
        ],
      },
    ],
  },
  disclaimer: {
    id: 'disclaimer',
    title: 'Disclaimer',
    subtitle: 'Important clarity regarding product stages, cryptographic research, and external links.',
    lastUpdated: 'November 2026',
    sections: [
      {
        heading: '1. Honest Representation of Capabilities',
        body: [
          'Barta Technology Pvt. Ltd. clearly separates currently implemented capabilities from features under active development and longer-term research initiatives (such as hybrid post-quantum cryptography).',
        ],
      },
      {
        heading: '2. No Absolute Security Guarantees',
        body: [
          'No digital system or cryptographic protocol can be guaranteed immune to all future vulnerabilities, endpoint compromise, or implementation flaws. We commit to responsible engineering, timely updates, and transparent disclosure.',
        ],
      },
      {
        heading: '3. No Unverified External Claims',
        body: [
          'This website intentionally avoids unverified claims, third-party certifications not formally held, or placeholder app store links. Official releases and audits will be documented explicitly as they are completed.',
        ],
      },
    ],
  },
  'refund-policy': {
    id: 'refund-policy',
    title: 'Refund & Cancellation Policy',
    subtitle: 'Policy framework for any confirmed future paid plans, enterprise agreements, or sponsorships.',
    lastUpdated: 'November 2026',
    sections: [
      {
        heading: '1. Subscription Plans (₹99 & ₹199)',
        body: [
          'Barta offers two monthly subscription tiers: Barta Standard (₹99/month) and Barta Plus (₹199/month). Subscriptions processed through official app marketplaces are billed directly via Google Play or Apple App Store.',
        ],
      },
      {
        heading: '2. Cancellation & Store Refunds',
        body: [
          'You may cancel an active subscription at any time before the next renewal cycle via your Google Play or Apple App Store account settings. Refund eligibility for in-app subscriptions follows the respective store platform policy and applicable Indian consumer law.',
        ],
      },
      {
        heading: '3. Sponsorships & Enterprise Agreements',
        body: [
          'Commercial partnerships, research sponsorships, and custom enterprise engagements are governed by the written agreement executed between the parties, including any milestone cancellation or refund clauses specified therein.',
        ],
      },
    ],
  },
  'community-guidelines': {
    id: 'community-guidelines',
    title: 'Community Guidelines',
    subtitle: 'Shared standards for safe, respectful, and lawful communication.',
    lastUpdated: 'November 2026',
    sections: [
      {
        heading: '1. Respectful Conduct',
        body: [
          'We expect all interactions across Barta community spaces, support channels, and open technical collaborations to remain respectful, constructive, and free from harassment or hate speech.',
        ],
      },
      {
        heading: '2. Lawful & Safe Use',
        body: [
          'Users must not employ Barta communication channels or software to distribute malware, conduct phishing, impersonate individuals or organizations, or engage in unlawful activity.',
        ],
      },
      {
        heading: '3. Privacy of Others',
        body: [
          'Do not publish private personal information (doxxing) or confidential credentials belonging to others without explicit authorization.',
        ],
      },
    ],
  },
  'security-disclosure': {
    id: 'security-disclosure',
    title: 'Security Disclosure Policy',
    subtitle: 'Coordinated vulnerability reporting guidelines for security researchers.',
    lastUpdated: 'November 2026',
    sections: [
      {
        heading: '1. Our Commitment to Researchers',
        body: [
          'We welcome good-faith security research that helps improve the safety of Barta Technology’s systems, protocols, and web properties.',
        ],
      },
      {
        heading: '2. How to Report a Vulnerability',
        body: [
          'Please send clear reproduction steps, affected URLs or components, and potential impact assessment to our security contact address listed on the Security & Privacy page.',
          'Allow a reasonable coordination window for us to investigate, validate, and remediate verified issues before public disclosure.',
        ],
      },
      {
        heading: '3. Responsible Testing Boundaries',
        body: [
          'Avoid destructive testing, denial-of-service attempts, social engineering of team members, or accessing data that does not belong to you. Use proof-of-concept steps that demonstrate impact minimally.',
        ],
      },
    ],
  },
};
