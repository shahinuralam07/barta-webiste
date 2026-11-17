import { SITE_CONFIG } from './siteConfig';

export interface PrivacySection {
  id: string;
  number: string;
  title: string;
  takeaway: string;
  paragraphs: string[];
  bullets?: string[];
  highlightCallout?: {
    title: string;
    body: string;
  };
}

export interface DataSafetyRow {
  category: string;
  collected: string;
  encryption: string;
  linkedToIdentity: string;
  sharedForAds: string;
  purpose: string;
}

export const PRIVACY_METADATA = {
  title: 'Privacy Policy',
  subtitle:
    'How Barta protects your communications using Zero-Knowledge Post-Quantum End-to-End Encryption (PQC-E2EE), hardware-bound keys, and strict data minimization.',
  effectiveDate: 'November 17, 2026',
  lastUpdated: 'November 17, 2026',
  complianceSummary:
    'Designed for transparency under GDPR, CCPA/CPRA, India’s Digital Personal Data Protection (DPDP) Act 2023, and Apple App Store / Google Play Data Safety standards.',
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'introduction-commitment',
    number: '1',
    title: 'Introduction & Privacy Commitment',
    takeaway:
      'Barta is engineered from the ground up to know as little about you as technically possible. Everything you send is 100% end-to-end encrypted; operational metadata is minimized, encrypted at rest, and never monetized.',
    paragraphs: [
      'Barta Technology Pvt. Ltd. ("Barta", "the App", "we", "us", "our") builds private messaging, voice, video calling, and media software where privacy is enforced cryptographically rather than by promise alone.',
      'We maintain a strict architectural boundary between "What You Send" and "Operational Metadata". What you send—text messages, voice notes, photos, videos, documents, audio clips, reactions, and call streams—is protected by Zero-Knowledge Post-Quantum End-to-End Encryption (PQC-E2EE) using NIST-standardized ML-KEM-768 (Kyber) hybrid key exchange combined with X25519 and ML-DSA / Ed25519 digital signatures. Messages are never stored on Barta servers—even when a recipient’s device is offline, messages remain saved exclusively on user devices.',
      'Private cryptographic keys and Double Ratchet session states are generated exclusively on your device and stored inside hardware-backed secure enclaves (iOS Keychain / Android Keystore). They never leave your hardware and never touch Barta servers or cloud backups.',
      '100% Ad-Free Guarantee: Barta contains zero third-party advertising networks, zero data brokers, zero behavioral tracking SDKs, and zero cross-app tracking.',
    ],
  },
  {
    id: 'never-collect',
    number: '2',
    title: 'Information We NEVER Collect or Store',
    takeaway:
      'We never store your messages on our servers—even when a device is offline, messages remain saved exclusively on the device. We never read or listen to your communications, never store unencrypted contact books, and never track GPS location.',
    paragraphs: [
      'Our zero-knowledge, device-only message storage architecture ensures that Barta does not collect, store on servers, or have access to the following categories of personal data:',
    ],
    bullets: [
      'Messages & Offline Message Storage (Zero Server Storage): Barta never stores your messages—neither plaintext nor encrypted copies—on our servers. Even if a recipient’s device is offline, messages are never saved or buffered on Barta servers; they remain stored strictly on the user’s device.',
      'Message & Media Content: We never read, inspect, scan, or retain text messages, voice notes, photos, videos, documents, reactions, or call audio/video streams.',
      'Private Cryptographic Keys: We never receive, escrow, or store your private identity keys, signed prekey secrets, or session ratchet keys.',
      'Unencrypted Contact Books: We do not upload or retain plaintext address books or raw third-party phone number lists on our servers.',
      'Precise Real-Time Location: We do not track or collect your continuous GPS coordinates or background location history.',
      'Surveillance & Social Graphs: We do not maintain behavioral profiles, advertising identifiers (IDFA/GAID), or historical communication graphs mapping who you talk to or when.',
    ],
  },
  {
    id: 'information-we-collect',
    number: '3',
    title: 'Information We Collect & Why (Data Minimization)',
    takeaway:
      'We collect only the bare minimum operational data required to route encrypted packets, deliver push notifications, and verify accounts—protected at rest with authenticated AES-256-GCM field-level encryption.',
    paragraphs: [
      'To deliver reliable messaging and calling without storing messages on servers, Barta processes strictly minimized operational records. Sensitive account identifiers stored in our database (phone numbers, usernames, emails, and profile metadata) are encrypted at rest using authenticated AES-256-GCM with keyed HMAC search indexes.',
    ],
    bullets: [
      'Account Identifiers: Your verified phone number (protected with AES-256-GCM field-level encryption and keyed HMAC indexing), optional pseudonymous username, and user-chosen display name so contacts can reach you.',
      'Public Cryptographic Keys: Public Identity Keys, Signed Prekeys, and One-Time Prekey Pools published to our zero-knowledge prekey distribution server so your contacts can establish PQC-E2EE sessions.',
      'Zero-Storage Live Transit Routing: Barta never stores or buffers messages on our servers—even when a recipient’s device is offline. Pending messages remain saved exclusively on the user’s device and pass through live encrypted transit (opaque PQC:... ciphertext) only during active delivery, with zero server-side persistence.',
      'Push Notification Tokens: Apple Push Notification service (APNs) or Firebase Cloud Messaging (FCM) device tokens used strictly to wake your device for incoming messages and calls. When Privacy Mode is enabled, push payloads contain zero plaintext previews.',
      'Crash Diagnostics (Optional): Only if you explicitly opt in, de-identified crash stack traces and device OS version diagnostics containing zero message content, contacts, or identifying phone numbers.',
    ],
  },
  {
    id: 'privacy-controls',
    number: '4',
    title: 'In-App Privacy Features & User Controls',
    takeaway:
      'You control your visibility and retention directly inside Barta—hide your phone number with usernames, block screenshots, set disappearing timers, and wipe your account instantly.',
    paragraphs: [
      'Barta places practical privacy controls directly in your hands without burying them behind complex menus:',
    ],
    bullets: [
      'Phone Number Privacy: Hide your phone number from other users and connect exclusively using a pseudonymous username handle.',
      'Screenshot Protection: Built-in screenshot detection alerts and OS-level screen-capture blocking where supported by your operating system.',
      'Disappearing Messages & View-Once Media: Configure automatic message expiration timers or send View-Once photos and videos that delete locally immediately after viewing.',
      '24-Hour Stories: Ephemeral status updates that automatically expire and purge within 24 hours.',
      'Local Database Encryption & Instant Account Deletion: Messages stored locally on your device are protected by hardware-backed encryption, and you can permanently wipe local data and delete your server account in one action.',
    ],
  },
  {
    id: 'legal-bases',
    number: '5',
    title: 'Legal Bases for Processing (GDPR Article 6 & DPDP Act)',
    takeaway:
      'We process minimal operational data only under strict legal bases: performing our messaging contract with you, protecting network security, fulfilling valid legal duties, or honoring your explicit consent.',
    paragraphs: [
      'For users in the European Economic Area (EEA), the United Kingdom, India, and other jurisdictions requiring an explicit legal basis for processing personal data, Barta relies on the following grounds under GDPR Article 6 and India’s DPDP Act 2023:',
    ],
    bullets: [
      'Performance of Contract (GDPR Art. 6(1)(b)): Processing account identifiers, public prekey bundles, push tokens, and live zero-storage encrypted routing strictly to provide the Barta communication service you requested.',
      'Legitimate Interests (GDPR Art. 6(1)(f)): Maintaining server availability, preventing DDoS attacks, mitigating automated spam/abuse, and protecting infrastructure integrity—balanced against your fundamental privacy rights.',
      'Explicit Consent (GDPR Art. 6(1)(a) & DPDP Act Sec. 6): Optional crash diagnostics, optional profile details, and verifiable parental consent where required for minors.',
      'Compliance with Legal Obligations (GDPR Art. 6(1)(c)): Complying with valid, binding legal requirements strictly within the technical limits of our zero-knowledge architecture.',
    ],
  },
  {
    id: 'government-requests',
    number: '6',
    title: 'Government & Law Enforcement Requests (Warrant Canary & Cryptographic Reality)',
    takeaway:
      'What Barta does not possess, Barta cannot produce. Even under a binding court order, we have zero technical ability to decrypt messages, calls, voice notes, or media.',
    highlightCallout: {
      title: 'ZERO-KNOWLEDGE CRYPTOGRAPHIC REALITY',
      body: 'Barta responds only to valid, legally binding judicial orders served through proper legal channels. Because of Barta’s Post-Quantum Zero-Knowledge architecture and strict zero server message storage (messages are never stored on our servers even when a device is offline—they stay only on user devices), Barta CANNOT comply with requests for message plaintext, encrypted message archives, call recordings, voice notes, media files, or private decryption keys. At most, Barta could confirm only whether an account exists, its creation date, and last connection timestamp—never who you spoke with or what was said.',
    },
    paragraphs: [
      'We scrutinize every legal request for jurisdictional validity, legal authority, and narrow scope. Where legally permitted, we notify affected users before disclosing any minimal non-content account metadata.',
      'Warrant Canary Statement: As of the Effective Date of this Privacy Policy, Barta Technology Pvt. Ltd. has never installed a cryptographic backdoor, never weakened its Post-Quantum End-to-End Encryption implementation, and never turned over private decryption keys (which we do not possess) to any government or third party.',
    ],
  },
  {
    id: 'retention-deletion',
    number: '7',
    title: 'Data Retention & Deletion',
    takeaway:
      'Barta never stores messages on our servers—even when a device is offline, messages remain saved strictly on the user’s device. Deleting your account permanently removes all minimal server-side keys and identifiers.',
    paragraphs: [
      'Barta retains zero message history on our servers and keeps minimal operational account data only for the shortest duration technically necessary:',
    ],
    bullets: [
      'Zero Server Message Storage (Online or Offline): Barta never stores messages on our servers at any time. Even if a recipient’s device is offline, messages are never saved or queued on Barta servers—they remain stored exclusively on the user’s device.',
      '24-Hour Stories: Ephemeral status updates automatically expire and purge within 24 hours.',
      'Account Deletion: When you delete your account in Settings, your encrypted phone identifier, username handle, public identity keys, signed prekeys, one-time prekey pools, and push tokens are permanently removed from our active servers.',
      'Dormant Accounts (180+ Days): Inactive accounts may have prekey bundles purged after 180 consecutive days of inactivity to preserve cryptographic hygiene.',
    ],
  },
  {
    id: 'international-rights',
    number: '8',
    title: 'International Privacy Rights',
    takeaway:
      'Whether you are protected by GDPR, California CCPA/CPRA, or India’s DPDP Act 2023, you have clear rights to access, correct, export, or erase your minimal account records—and we never sell or share personal data.',
    paragraphs: [
      'Barta respects and honors statutory privacy rights worldwide:',
    ],
    bullets: [
      'GDPR (EU / EEA / UK): You have the right to access your minimal account metadata, rectify inaccurate profile fields, request erasure ("right to be forgotten"), restrict or object to processing, request data portability, and lodge a complaint with your local Data Protection Authority.',
      'CCPA / CPRA (California Residents): You have the Right to Know what categories of personal information are collected, the Right to Delete, the Right to Correct, and the Right to Non-Discrimination. Explicit Notice: We do not sell or share personal information for cross-context behavioral advertising.',
      'India DPDP Act 2023 (Data Principals): You have the right to obtain a summary of personal data processed, request correction or erasure of your account identifiers, withdraw consent at any time, nominate an individual to exercise rights in the event of incapacity, and seek timely redressal from our designated Grievance Officer.',
    ],
  },
  {
    id: 'childrens-privacy',
    number: '9',
    title: 'Children’s Privacy (COPPA & Global Standards)',
    takeaway:
      'Barta requires users to be at least 13+ globally (16+ in the EU/EEA) and does not knowingly collect personal information from underage children.',
    paragraphs: [
      'Barta is not directed to children under the minimum digital consent age in their jurisdiction—at least 13 years old globally (including under US COPPA), at least 16 years old in the EU/EEA (or applicable member-state threshold under GDPR), and subject to verifiable parental/guardian consent for users under 18 under India’s DPDP Act 2023.',
      'We do not knowingly collect personal information from children below these thresholds. If a parent or guardian believes a child has registered an account in violation of this policy, please contact privacy@chatbybarta.com (or privacy@barta.app) so we can promptly delete the account and purge its server records.',
    ],
  },
  {
    id: 'third-party-infrastructure',
    number: '10',
    title: 'Third-Party Services & Infrastructure',
    takeaway:
      'Infrastructure providers act strictly as blind processors handling encrypted data, and payment gateways process subscriptions without sharing your card credentials with Barta.',
    paragraphs: [
      'Barta minimizes third-party dependencies and never integrates advertising or data-broker SDKs. Limited sub-processors are engaged solely for essential infrastructure and billing:',
    ],
    bullets: [
      'Cloud Infrastructure Providers (AWS / EC2): Hosting and compute infrastructure providers act strictly as blind data processors storing only field-level encrypted account records and public keys—never your messages, which are never stored on servers even when a device is offline.',
      'Push Notification Gateways (Apple APNs / Google FCM): Used solely to wake your device hardware for incoming encrypted notifications or calls.',
      'Payment Processors (Apple App Store, Google Play In-App Purchases & UnoPay): Subscription billing for Barta Standard (₹99/month) and Barta Plus (₹199/month) is handled directly by official store billing or UnoPay. Barta receives only confirmation of subscription status—never your raw credit card, UPI PIN, or banking credentials.',
    ],
  },
  {
    id: 'grievance-contact',
    number: '11',
    title: 'Grievance Redressal & Contact Information',
    takeaway:
      'Contact our Data Protection Officer and Grievance Officer directly at privacy@chatbybarta.com or privacy@barta.app for any privacy request or regulatory inquiry.',
    paragraphs: [
      'In compliance with GDPR, CCPA/CPRA, and India’s DPDP Act 2023, Barta Technology Pvt. Ltd. maintains a dedicated Data Protection Officer (DPO) and Grievance Redressal channel. We acknowledge privacy and data-principal requests promptly and resolve them within statutory timelines.',
    ],
    bullets: [
      `Data Protection Officer & Privacy Email: ${SITE_CONFIG.emails.privacy} (and privacy@barta.app)`,
      `Legal & Compliance Desk: ${SITE_CONFIG.emails.legal}`,
      `Security Vulnerability Disclosures: ${SITE_CONFIG.emails.security}`,
      `Official Website: ${SITE_CONFIG.websiteUrl}`,
      'Grievance Officer & Registered Mailing Address: Grievance Officer / Data Protection Officer, Barta Technology Pvt. Ltd., [Registered Corporate Office Street Address, City, State, PIN Code], India.',
    ],
  },
];

export const DATA_SAFETY_TABLE: DataSafetyRow[] = [
  {
    category: 'Messages, Media & Calls',
    collected: 'No (Device-Only Storage)',
    encryption: 'PQC-E2EE (ML-KEM-768 + X25519)',
    linkedToIdentity: 'No',
    sharedForAds: 'Never',
    purpose: 'Never stored on servers (even offline); saved exclusively on user devices',
  },
  {
    category: 'Phone Number & Username',
    collected: 'Yes (Minimized)',
    encryption: 'TLS + AES-256-GCM & HMAC at rest',
    linkedToIdentity: 'Yes (Account ID)',
    sharedForAds: 'Never',
    purpose: 'Account verification & contact discovery',
  },
  {
    category: 'Public Cryptographic Keys',
    collected: 'Yes (Public Keys Only)',
    encryption: 'TLS in transit',
    linkedToIdentity: 'Yes (Account ID)',
    sharedForAds: 'Never',
    purpose: 'Asynchronous PQXDH session setup',
  },
  {
    category: 'Push Tokens (APNs / FCM)',
    collected: 'Yes (Device Token)',
    encryption: 'TLS in transit',
    linkedToIdentity: 'Yes (Device)',
    sharedForAds: 'Never',
    purpose: 'Wake device for incoming messages & calls',
  },
  {
    category: 'Contact Book / Address Book',
    collected: 'No',
    encryption: 'Not stored on server',
    linkedToIdentity: 'No',
    sharedForAds: 'Never',
    purpose: 'Unencrypted contacts are never uploaded',
  },
  {
    category: 'Precise GPS Location',
    collected: 'No',
    encryption: 'Not collected',
    linkedToIdentity: 'No',
    sharedForAds: 'Never',
    purpose: 'No location tracking performed',
  },
  {
    category: 'Crash Diagnostics',
    collected: 'Optional (Opt-in only)',
    encryption: 'TLS in transit (De-identified)',
    linkedToIdentity: 'No',
    sharedForAds: 'Never',
    purpose: 'App stability & bug fixes',
  },
  {
    category: 'Subscription Billing Status',
    collected: 'Receipt status only',
    encryption: 'TLS (Handled by Store / UnoPay)',
    linkedToIdentity: 'Yes (Plan Tier)',
    sharedForAds: 'Never',
    purpose: 'Unlock ₹99 / ₹199 subscription entitlements',
  },
];

export function formatPrivacyAsMarkdown(): string {
  const lines: string[] = [
    `# ${PRIVACY_METADATA.title} — ${SITE_CONFIG.brandName}`,
    '',
    `**Company:** ${SITE_CONFIG.overview.companyName}  `,
    `**Effective Date:** ${PRIVACY_METADATA.effectiveDate}  `,
    `**Last Updated:** ${PRIVACY_METADATA.lastUpdated}  `,
    `**Website:** ${SITE_CONFIG.websiteUrl}`,
    '',
    `> ${PRIVACY_METADATA.complianceSummary}`,
    '',
    '---',
    '',
  ];

  for (const section of PRIVACY_SECTIONS) {
    lines.push(`## ${section.number}. ${section.title}`);
    lines.push('');
    lines.push(`> **Key Takeaway at a Glance:** ${section.takeaway}`);
    lines.push('');

    if (section.highlightCallout) {
      lines.push(
        `> **${section.highlightCallout.title}:** ${section.highlightCallout.body}`
      );
      lines.push('');
    }

    for (const para of section.paragraphs) {
      lines.push(para);
      lines.push('');
    }

    if (section.bullets?.length) {
      for (const bullet of section.bullets) {
        lines.push(`- ${bullet}`);
      }
      lines.push('');
    }
  }

  lines.push('## App Store & Google Play Data Safety Summary');
  lines.push('');
  lines.push(
    '| Data Category | Collected? | Encryption | Linked to Identity? | Shared for Ads / Brokers? | Purpose |'
  );
  lines.push('| :--- | :--- | :--- | :--- | :--- | :--- |');
  for (const row of DATA_SAFETY_TABLE) {
    lines.push(
      `| ${row.category} | ${row.collected} | ${row.encryption} | ${row.linkedToIdentity} | ${row.sharedForAds} | ${row.purpose} |`
    );
  }
  lines.push('');

  return lines.join('\n');
}
