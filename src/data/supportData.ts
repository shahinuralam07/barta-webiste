import type { PageId } from '../utils/routing';

export type SupportCategory =
  | 'Account & Safety'
  | 'Messaging & Privacy'
  | 'Subscriptions & Billing'
  | 'Release & Downloads';

export interface SupportGuide {
  id: string;
  category: SupportCategory;
  title: string;
  summary: string;
  steps: string[];
  relatedAction?: {
    label: string;
    page: PageId;
  };
}

export interface ReleaseStatusEntry {
  platform: string;
  stage: 'Live' | 'In Active Development' | 'Pending Store Listing';
  detail: string;
}

export interface SafetyChecklistItem {
  id: string;
  title: string;
  detail: string;
}

export interface TroubleshootingItem {
  id: string;
  title: string;
  symptom: string;
  cause: string;
  resolutionSteps: string[];
  ticketCategory: string;
}

export interface SecurityFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SupportTicketInput {
  name: string;
  email: string;
  category: string;
  platform: string;
  message: string;
}

export interface SupportTicketValidation {
  valid: boolean;
  errors: Partial<Record<keyof SupportTicketInput, string>>;
}

export const SUPPORT_CATEGORIES: Array<'All' | SupportCategory> = [
  'All',
  'Account & Safety',
  'Messaging & Privacy',
  'Subscriptions & Billing',
  'Release & Downloads',
];

export const SUPPORT_GUIDES: SupportGuide[] = [
  {
    id: 'device-only-storage-offline',
    category: 'Messaging & Privacy',
    title: 'Device-Only Message Storage & Offline Delivery',
    summary:
      'Barta never stores your messages on servers—even when a recipient’s device is offline, messages remain saved exclusively on user devices.',
    steps: [
      'Messages are encrypted on your device using Post-Quantum End-to-End Encryption (ML-KEM-768 + X25519) before leaving your phone.',
      'If a recipient is offline, pending messages stay saved on your device—never buffered or archived on Barta servers.',
      'Once both devices have an active network connection, Barta completes live zero-storage encrypted delivery.',
      'If a message shows as pending, verify your internet connection and keep Barta open briefly when your contact comes online.',
    ],
    relatedAction: {
      label: 'Read Privacy Policy',
      page: 'privacy-policy',
    },
  },
  {
    id: 'account-safety-phishing',
    category: 'Account & Safety',
    title: 'Account Safety, Impersonation & Phishing Protection',
    summary:
      'Protect your Barta identity by verifying official download sources and recognizing common social-engineering attempts.',
    steps: [
      'Download Barta only from official Google Play or Apple App Store links published on chatbybarta.com—never install unofficial APKs.',
      'Barta staff will never ask for your private cryptographic keys, hardware recovery credentials, or SMS verification codes.',
      'Enable username-only discovery in Settings if you prefer not to share your phone number with new contacts.',
      'If you encounter impersonation, phishing, or suspicious links, report them immediately to security@chatbybarta.com.',
    ],
    relatedAction: {
      label: 'Security & Privacy Overview',
      page: 'security',
    },
  },
  {
    id: 'hardware-keys-device-change',
    category: 'Messaging & Privacy',
    title: 'Hardware-Backed Keys & Changing Devices',
    summary:
      'Understand how iOS Keychain and Android Keystore protect your private keys and what happens when you switch phones.',
    steps: [
      'Your private identity keys and Double Ratchet session states are generated on your device and never leave your hardware secure enclave.',
      'Because Barta does not store message history or private keys on servers, switching to a new phone starts a fresh cryptographic session.',
      'Uninstalling the app or deleting your account permanently wipes local message data from your device.',
      'Use Safety Numbers inside a chat’s encryption details to verify your contact’s key fingerprint after a device change.',
    ],
    relatedAction: {
      label: 'Explore Cryptography Architecture',
      page: 'technology',
    },
  },
  {
    id: 'subscriptions-cancellation-billing',
    category: 'Subscriptions & Billing',
    title: 'Managing ₹99 & ₹199 Subscriptions and Cancellations',
    summary:
      'How Barta Standard (₹99/month) and Barta Plus (₹199/month) renewals, cancellations, and platform billing work.',
    steps: [
      'Subscriptions purchased through Google Play or the Apple App Store are billed and managed directly through your store account settings.',
      'You can cancel automatic renewal at any time from Google Play Subscriptions or Apple ID Subscriptions; access continues until the end of your current paid period.',
      'All subscription purchases are final and non-refundable, except where required by applicable consumer law or payment platform rules.',
      'For verified duplicate charges or billing errors on Google Play or Apple App Store, submit a billing review directly through the payment platform.',
    ],
    relatedAction: {
      label: 'Subscription Cancellation & No-Refund Policy',
      page: 'refund-policy',
    },
  },
  {
    id: 'release-status-official-downloads',
    category: 'Release & Downloads',
    title: 'Official App Release Status (Android & iOS)',
    summary:
      'Check where public mobile releases stand and how to receive verified launch updates without fake store links.',
    steps: [
      'Barta does not publish placeholder store links or unofficial test APKs from third-party websites.',
      'Verified Google Play and Apple App Store links will be published directly on the Get Barta / Products page as soon as public listings go live.',
      'Use the Support Contact form below with category "Release & Downloads" to request release updates.',
      'Verify official announcements on our X and Instagram channels (@chatbybarta) and at chatbybarta.com.',
    ],
    relatedAction: {
      label: 'Go to Get Barta / Products',
      page: 'products',
    },
  },
  {
    id: 'privacy-controls-account-deletion',
    category: 'Account & Safety',
    title: 'In-App Privacy Controls & Instant Account Deletion',
    summary:
      'Control disappearing messages, View-Once media, screenshot alerts, and permanent account deletion.',
    steps: [
      'Hide your phone number by setting a pseudonymous username handle under Privacy Settings.',
      'Enable Disappearing Messages or send View-Once media for sensitive conversations that automatically clear locally.',
      'Turn on Screenshot Protection where supported by your OS to block captures or receive alerts.',
      'To delete your account permanently, use Delete Account in Settings—removing your encrypted account identifiers, public prekeys, and push tokens from active servers.',
    ],
    relatedAction: {
      label: 'View Terms & Conditions',
      page: 'terms',
    },
  },
];

export const RELEASE_STATUS_ITEMS: ReleaseStatusEntry[] = [
  {
    platform: 'Android (Google Play)',
    stage: 'Pending Store Listing',
    detail:
      'Official Play Store listing will be linked on chatbybarta.com upon public rollout. No unofficial APK downloads.',
  },
  {
    platform: 'iOS (Apple App Store)',
    stage: 'Pending Store Listing',
    detail:
      'Official App Store listing undergoing release readiness and hardware enclave validation.',
  },
  {
    platform: 'PQC-E2EE Messaging Core',
    stage: 'In Active Development',
    detail:
      'Hybrid ML-KEM-768 + X25519 key exchange, device-only message storage, and local database encryption.',
  },
  {
    platform: 'Voice & Video Calling',
    stage: 'In Active Development',
    detail:
      'End-to-end encrypted WebRTC audio and video pathways undergoing bandwidth and reliability testing.',
  },
  {
    platform: 'Official Website & Legal Portal',
    stage: 'Live',
    detail:
      'Static, zero-tracker portal at chatbybarta.com with published Privacy, Terms, and Refund policies.',
  },
];

export const ACCOUNT_SAFETY_CHECKLIST: SafetyChecklistItem[] = [
  {
    id: 'verify-domain',
    title: 'Verify you are on chatbybarta.com',
    detail: 'Always check the official domain before contacting support or downloading releases.',
  },
  {
    id: 'no-unofficial-apks',
    title: 'Avoid unofficial APKs or third-party mirrors',
    detail: 'Install Barta only from verified Google Play or Apple App Store listings.',
  },
  {
    id: 'protect-codes',
    title: 'Never share verification codes or private keys',
    detail: 'Barta team members will never ask for OTPs, passwords, or device keys.',
  },
  {
    id: 'username-privacy',
    title: 'Use username privacy for public contacts',
    detail: 'Keep your phone number hidden when connecting with new people.',
  },
  {
    id: 'keep-os-updated',
    title: 'Keep iOS / Android security patches current',
    detail: 'Hardware Keychain / Keystore protection relies on an up-to-date operating system.',
  },
];

export const TROUBLESHOOTING_ITEMS: TroubleshootingItem[] = [
  {
    id: 'pending-offline-messages',
    title: 'Messages Showing as Pending / Waiting for Delivery',
    symptom: 'A sent message stays in pending state and has not been delivered to the recipient yet.',
    cause:
      'Barta never stores messages on servers—even when a device is offline. Pending encrypted messages stay saved on your device until both devices are online.',
    resolutionSteps: [
      'Confirm that your device has a stable Wi-Fi or mobile data connection.',
      'Ask your contact to open Barta once they reconnect to the internet so live zero-storage delivery can complete.',
      'Avoid force-closing Barta immediately after sending while your contact is reconnecting.',
      'If delivery still does not complete while both users are online, toggle Airplane Mode off and on to refresh your network socket.',
    ],
    ticketCategory: 'Messaging & Offline Delivery',
  },
  {
    id: 'delayed-push-notifications',
    title: 'Delayed or Missing Push Notifications',
    symptom: 'Incoming message or call alerts only appear after you manually open the Barta app.',
    cause:
      'Aggressive OS battery optimization (Android Doze/OEM battery savers) or disabled Background App Refresh on iOS can restrict wake notifications.',
    resolutionSteps: [
      'On Android, open System Settings -> Apps -> Barta -> Battery and set it to Unrestricted.',
      'On iOS, open Settings -> Barta and enable Notifications and Background App Refresh.',
      'Verify that Do Not Disturb or Focus Mode is not muting alerts from Barta.',
      'Restart your device to re-register your encrypted push notification token.',
    ],
    ticketCategory: 'Bug Report / Technical Issue',
  },
  {
    id: 'voice-video-call-issues',
    title: 'Voice & Video Call Audio or Connection Drops',
    symptom: 'Encrypted calls fail to connect, freeze, or have one-way audio.',
    cause:
      'Missing microphone/camera permissions, restrictive corporate firewalls, or unstable network handoffs between Wi-Fi and 4G/5G can interrupt WebRTC streams.',
    resolutionSteps: [
      'Confirm Microphone and Camera permissions are enabled for Barta in your OS privacy settings.',
      'Switch from congested public Wi-Fi to mobile data (or vice versa) to test network stability.',
      'If you use a VPN or private DNS firewall, temporarily pause it to verify whether UDP call traffic is being blocked.',
      'Close other active media or calling apps that may hold exclusive access to your device audio hardware.',
    ],
    ticketCategory: 'Bug Report / Technical Issue',
  },
  {
    id: 'subscription-not-reflecting',
    title: '₹99 or ₹199 Subscription Not Reflecting in App',
    symptom: 'Your Barta Standard (₹99/mo) or Barta Plus (₹199/mo) plan features are not active after purchase.',
    cause:
      'Google Play or Apple App Store receipt sync may be delayed, or the device may be signed into a different store account than the one used at checkout.',
    resolutionSteps: [
      'Verify that your phone is signed into the exact Google Play or Apple ID account used for the purchase.',
      'Open Barta -> Settings -> Subscription and tap Restore Purchases to re-verify your store receipt.',
      'Check your Google Play or Apple Subscriptions page to confirm the plan status is Active and not Pending Payment.',
      'If the receipt is confirmed active for over 30 minutes and still not reflected, submit a billing ticket below with your store order date (never share card details).',
    ],
    ticketCategory: 'Subscriptions & Billing (₹99 / ₹199)',
  },
];

export const SECURITY_FAQS: SecurityFaqItem[] = [
  {
    id: 'sec-faq-offline-storage',
    question: 'Does Barta store my messages on servers when a device is offline?',
    answer:
      'No. Barta never stores your messages on servers—even if your device or the recipient’s device is offline. Messages remain saved exclusively on user devices and are delivered directly once both devices are reachable.',
  },
  {
    id: 'sec-faq-pqc-encryption',
    question: 'How does Barta’s Post-Quantum Encryption (ML-KEM-768 + X25519) work?',
    answer:
      'Barta pairs classical X25519 elliptic-curve key agreement with NIST-standardized ML-KEM-768 post-quantum key encapsulation and a Double Ratchet session layer. This protects conversations against both present-day interception and future "harvest now, decrypt later" quantum attacks.',
  },
  {
    id: 'sec-faq-hardware-keys',
    question: 'Where are my private encryption keys stored?',
    answer:
      'Private identity and session keys are generated locally on your phone and sealed inside hardware-backed storage (Apple iOS Keychain / Secure Enclave and Android Keystore). Barta servers never receive, escrow, or back up your private keys.',
  },
  {
    id: 'sec-faq-legal-requests',
    question: 'Can Barta hand over chat history if requested by a third party or authority?',
    answer:
      'Because Barta enforces end-to-end encryption and zero server-side message storage, Barta does not possess message plaintext, media files, call recordings, or decryption keys and therefore cannot disclose chat contents.',
  },
  {
    id: 'sec-faq-report-vulnerability',
    question: 'How should researchers or users report a security vulnerability or phishing attempt?',
    answer:
      'Email clear reproduction steps, affected platform version, or suspicious domain details directly to security@chatbybarta.com. Please avoid public disclosure before our engineering team can validate and patch the issue.',
  },
];

export function filterSupportTopics(
  guides: SupportGuide[],
  query: string,
  category: 'All' | SupportCategory
): SupportGuide[] {
  const normalizedQuery = query.trim().toLowerCase();
  return guides.filter((guide) => {
    const matchesCategory = category === 'All' || guide.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const haystack = [guide.title, guide.summary, guide.category, ...guide.steps]
      .join(' ')
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

export function validateSupportTicket(input: SupportTicketInput): SupportTicketValidation {
  const errors: Partial<Record<keyof SupportTicketInput, string>> = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }
  if (!emailPattern.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address so support can reply.';
  }
  if (!input.category.trim()) {
    errors.category = 'Please choose a support category.';
  }
  if (!input.message.trim() || input.message.trim().length < 10) {
    errors.message = 'Please describe your question or issue (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateSupportReferenceId(timestampMs: number = Date.now()): string {
  const suffix = Math.abs(Math.floor(timestampMs)).toString(36).toUpperCase().slice(-6);
  return `BRT-${suffix.padStart(6, '0')}`;
}
