/**
 * Central editable configuration for Barta Technology Pvt. Ltd.
 * Update official contact emails, company overview fields, and confirmed
 * app store listing URLs here without editing layout components.
 */
export interface CompanyOverviewConfig {
  companyName: string;
  country: string;
  industry: string;
  focus: string;
}

export interface ContactEmailsConfig {
  general: string;
  legal: string;
  privacy: string;
  security: string;
  partnerships: string;
  sponsors: string;
  support: string;
  careers: string;
}

export interface AppStoreListingsConfig {
  googlePlayUrl: string | null;
  appleAppStoreUrl: string | null;
  webReleaseNote: string;
}

export interface SocialLinkConfig {
  label: string;
  handle: string;
  href: string | null;
}

export interface LeadershipProfileConfig {
  name: string;
  role: string;
  organization: string;
  location: string;
  photoSrc: string | null;
  quote: string;
  bio: string;
}

export const SITE_CONFIG = {
  brandName: 'Barta',
  domain: 'chatbybarta.com',
  websiteUrl: 'https://chatbybarta.com',
  logoSrc: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_13.49.12_a8c22921.jpeg',
  overview: {
    companyName: 'Barta Technology Pvt. Ltd.',
    country: 'India',
    industry: 'Technology and Software',
    focus: 'Secure Digital Communication',
  } satisfies CompanyOverviewConfig,
  emails: {
    general: 'contact@chatbybarta.com',
    legal: 'legal@chatbybarta.com',
    privacy: 'privacy@chatbybarta.com',
    security: 'security@chatbybarta.com',
    partnerships: 'partnerships@chatbybarta.com',
    sponsors: 'sponsors@chatbybarta.com',
    support: 'support@chatbybarta.com',
    careers: 'careers@chatbybarta.com',
  } satisfies ContactEmailsConfig,
  appListings: {
    // Only populate with verified official store URLs when published.
    googlePlayUrl: null,
    appleAppStoreUrl: null,
    webReleaseNote:
      'Official app store distribution links will appear here once public mobile store releases are published. No placeholder or unofficial download links are provided.',
  } satisfies AppStoreListingsConfig,
  socials: [
    { label: 'X (Twitter)', handle: '@chatbybarta', href: 'https://x.com/chatbybarta' },
    { label: 'Instagram', handle: '@chatbybarta', href: 'https://instagram.com/chatbybarta' },
    { label: 'LinkedIn', handle: 'Barta Technology Pvt. Ltd.', href: null },
    { label: 'GitHub', handle: '@chatbybarta', href: null },
  ] satisfies SocialLinkConfig[],
  leadership: {
    ceo: {
      name: 'S.A',
      role: 'Founder & Chief Executive Officer (CEO)',
      organization: 'Barta Technology Pvt. Ltd.',
      location: 'India',
      photoSrc: null,
      quote:
        'We started Barta with a clear conviction: everyday digital communication should belong solely to the people speaking—never stored on servers, never profiled, and engineered to remain private for the decades ahead.',
      bio: 'Guiding Barta Technology Pvt. Ltd. from India with a focus on post-quantum end-to-end encrypted messaging, zero-server message storage, and calm, accessible software design.',
    } satisfies LeadershipProfileConfig,
  },
};
