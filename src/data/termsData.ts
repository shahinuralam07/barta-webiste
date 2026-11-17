import { SITE_CONFIG } from './siteConfig';

export interface TermsClause {
  id: string;
  number: string;
  title: string;
  inBrief: string;
  paragraphs: string[];
  bullets?: string[];
  importantNotice?: {
    title: string;
    body: string;
  };
}

export const TERMS_METADATA = {
  title: 'Terms of Service & Conditions of Use',
  subtitle:
    'Comprehensive legal agreement governing use of Barta’s post-quantum end-to-end encrypted messaging, voice, video, and digital communication services.',
  effectiveDate: 'November 17, 2026',
  lastUpdated: 'November 17, 2026',
  jurisdictionSummary:
    'Drafted with alignment to India’s Digital Personal Data Protection (DPDP) Act, EU GDPR, California CCPA/CPRA, and Apple App Store / Google Play guidelines.',
};

export const TERMS_SECTIONS: TermsClause[] = [
  {
    id: 'acceptance-eligibility',
    number: '1',
    title: 'Acceptance of Terms & Eligibility',
    inBrief:
      'By creating a Barta account or using our app or website, you agree to these Terms. You must meet the minimum age in your region (13+ globally, 16+ in the EU/EEA) and register with a valid phone number tied to your device-bound cryptographic identity.',
    paragraphs: [
      'These Terms of Service & Conditions of Use ("Terms") constitute a legally binding agreement between you ("User", "you") and Barta Technology Pvt. Ltd. ("Barta", "the Service", "the App", "we", "us", "our"), governing your access to and use of the Barta mobile applications, web properties (including chatbybarta.com), protocols, and related digital services.',
      'By downloading, installing, registering for, or accessing Barta, you confirm that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy. If you do not agree, you must not access or use the Service.',
      'Registration requires verifying an active mobile telephone number and generating device-bound cryptographic identity keys on your local hardware. You represent that all registration information is accurate and that you are authorized to use the telephone number registered to your account.',
    ],
    bullets: [
      'Global Minimum Age: You must be at least 13 years of age (or the minimum digital consent age in your country) to use Barta.',
      'EU/EEA & UK Residents: You must be at least 16 years of age (or the applicable member-state age of consent under GDPR) unless verifiable parental consent is provided where permitted by law.',
      'India (DPDP Act): Users under 18 years of age must obtain verifiable consent from a parent or lawful guardian in accordance with the Digital Personal Data Protection Act, 2023.',
      'Legal Authority: You confirm that you are not barred from receiving digital communications services under applicable international sanctions or export-control regulations.',
    ],
  },
  {
    id: 'zero-knowledge-cryptography',
    number: '2',
    title: 'Zero-Knowledge Architecture & Cryptographic Disclosure',
    inBrief:
      'Barta uses NIST-standardized Post-Quantum End-to-End Encryption (ML-KEM-768 + X25519) with PQXDH Double Ratchet forward secrecy. Private keys never leave your device—meaning Barta cannot read your messages and cannot recover lost chats or keys for you.',
    paragraphs: [
      'Barta is engineered on a Zero-Knowledge, Post-Quantum End-to-End Encrypted ("PQC-E2EE") architecture. All communications—including direct and group text messages, voice notes, media files (photos, videos, documents), reactions, and encrypted session metadata—are encrypted locally on the sender’s device prior to network transmission.',
      'Cryptographic key establishment utilizes hybrid post-quantum key encapsulation combining NIST-standardized ML-KEM-768 (Kyber) with X25519 elliptic-curve Diffie-Hellman, authenticated using ML-DSA and Ed25519 digital signatures, and maintained via PQXDH Double Ratchet forward secrecy and post-compromise security.',
      'Barta servers operate strictly as blind, zero-knowledge relays and temporary encrypted persistence buffers for undelivered packets. Private cryptographic keys are generated exclusively on user devices and never transmitted to Barta servers. Neither Barta operators, employees, hosting providers, nor third parties or government authorities possess the technical capability to decrypt, inspect, or reconstruct plaintext message or media content.',
      'Technical Limitation of Recovery: Because Barta has zero plaintext access and never holds your private keys, Barta cannot recover deleted conversations, lost chat history, forgotten passcodes, or unbacked-up cryptographic keys if you lose, reset, or damage your device. You are solely responsible for securing your physical device, screen lock, passcodes, and encrypted local backups.',
    ],
  },
  {
    id: 'acceptable-use',
    number: '3',
    title: 'User Conduct & Acceptable Use Policy (Zero-Tolerance Rules)',
    inBrief:
      'Use Barta lawfully and respectfully. We enforce zero tolerance for CSAM, terrorism, non-consensual intimate imagery, fraud, malware, and platform attacks. User-initiated abuse reports voluntarily submit only the specific reported snippet for human review without weakening E2EE.',
    paragraphs: [
      'You agree to use Barta only for lawful, peaceful, and authorized purposes. While Barta cannot proactively scan end-to-end encrypted communications, we maintain strict zero-tolerance enforcement against abuse reported by users or detected through non-content anti-spam and network integrity signals.',
      'Encrypted User-Initiated Reporting: If you encounter abusive or unlawful behavior, you may use Barta’s in-app reporting tool. Submitting a report explicitly authorizes your device to re-encrypt and transmit only the specific reported message snippet(s), sender identifier, and minimal context you choose to include to Barta’s Trust & Safety review team. This voluntary mechanism allows human moderation of reported abuse without compromising end-to-end encryption for any other conversation.',
    ],
    bullets: [
      'Child Sexual Abuse Material (CSAM) & Exploitation: Absolute zero tolerance. Confirmed violations result in immediate permanent termination and reporting to competent law-enforcement authorities (such as NCMEC or Indian cybercrime authorities) to the extent permitted by our zero-knowledge architecture.',
      'Terrorism & Violent Extremism: Organizing, promoting, or inciting terrorism, violent extremism, or credible threats of physical harm is strictly prohibited.',
      'Non-Consensual Intimate Imagery (NCII) & Harassment: Sharing intimate imagery without consent, doxxing, stalking, extortion, or targeted harassment is forbidden.',
      'Fraud, Malware & Impersonation: Phishing, financial scams, impersonating Barta personnel or other individuals, or distributing viruses, spyware, or malicious code is prohibited.',
      'Platform Integrity Attacks: Reverse engineering, decompiling, DDoS attacks, automated scraping, bulk unsolicited messaging (spam), or operating unauthorized bots against Barta infrastructure is strictly prohibited.',
    ],
  },
  {
    id: 'ugc-intellectual-property',
    number: '4',
    title: 'User-Generated Content & Intellectual Property',
    inBrief:
      'You retain 100% ownership of everything you send on Barta. You grant us only the bare-minimum technical license needed to route and buffer encrypted packets. Barta’s brand, code, UI design, and protocols belong exclusively to Barta.',
    paragraphs: [
      'User Ownership: You retain 100% ownership and all intellectual property rights in the messages, voice recordings, photos, videos, documents, stories, and other content you create or transmit through Barta ("User Content"). Barta claims no ownership over your User Content.',
      'Limited Technical License: To operate the Service, you grant Barta a limited, non-exclusive, revocable, royalty-free technical license solely to transmit, route, temporarily buffer in encrypted form, and deliver your encrypted data packets to the recipients you designate. This license terminates automatically upon delivery or expiration of buffered packets.',
      'Barta Intellectual Property: The Barta name, logo, domain (chatbybarta.com), visual interface, software source code, compiled binaries, documentation, and proprietary protocol implementations are the exclusive intellectual property of Barta Technology Pvt. Ltd. and are protected by Indian and international copyright, trademark, and trade-secret laws. Nothing in these Terms grants you a right to use Barta trademarks without prior written authorization.',
    ],
  },
  {
    id: 'ephemeral-features',
    number: '5',
    title: 'Ephemeral Features, Disappearing Messages & View-Once Media',
    inBrief:
      'Disappearing messages, View-Once media, 24-hour Stories, and screenshot alerts/blocking add meaningful privacy, but no software can stop someone from photographing a screen with another camera. Share sensitive content only with people you trust.',
    paragraphs: [
      'Barta offers privacy-enhancing ephemeral features including Disappearing Messages, View-Once Media, 24-Hour Stories / Status Updates, hidden phone numbers, pseudonymized username handles, and Privacy Shielding (screenshot detection and OS-level screen-capture blocking where supported by the device operating system).',
      'Functional Limitations Disclaimer: Ephemeral timers instruct recipient clients to delete local copies once the configured window expires or after a single view. However, due to inherent technical limitations of consumer hardware and operating systems, recipients may still capture content using an external physical camera, screen-recording hardware, or modified/rooted devices.',
      'You acknowledge that Privacy Shielding and ephemeral timers are assistive privacy controls rather than absolute technical guarantees against external capture. Always exercise personal discretion before transmitting sensitive information.',
    ],
  },
  {
    id: 'voice-video-emergency',
    number: '6',
    title: 'Voice, Video & Telecommunications Disclaimer',
    inBrief:
      'Barta provides end-to-end secured WebRTC voice notes and audio/video calls over data networks, but Barta is NOT a telephone service and CANNOT dial 911, 112, 999, or any emergency services.',
    importantNotice: {
      title: 'NO EMERGENCY SERVICES SUPPORT',
      body: 'BARTA IS NOT A REPLACEMENT FOR TRADITIONAL LANDLINE OR MOBILE CELLULAR TELEPHONE SERVICE. BARTA DOES NOT SUPPORT EMERGENCY CALLS OR MESSAGES TO 911, 112, 999, 100, 101, 102, 108, OR ANY LOCAL POLICE, FIRE, MEDICAL, OR EMERGENCY DISPATCH SERVICES. ALWAYS MAINTAIN ALTERNATIVE ACCESS TO STANDARD CELLULAR OR LANDLINE TELEPHONY FOR EMERGENCIES.',
    },
    paragraphs: [
      'Voice Notes and High-Definition Audio/Video Calls on Barta operate over packet-switched internet connections using end-to-end secured WebRTC channels. Call quality, latency, and availability depend on your broadband or mobile data network, device hardware, and firewall configurations.',
      'Barta does not provide interconnection to the Public Switched Telephone Network (PSTN) and bears no liability for any inability to reach emergency responders through the Service.',
    ],
  },
  {
    id: 'subscriptions-payments',
    number: '7',
    title: 'Subscriptions, Payments & Digital Goods',
    inBrief:
      'Barta offers optional monthly subscriptions (₹99 Barta Standard and ₹199 Barta Plus) billed via Google Play, Apple App Store, or authorized payment gateways. Cancel anytime before renewal; refunds follow store policies and applicable law.',
    paragraphs: [
      'Subscription Tiers & Billing: Barta offers optional recurring subscription plans—including Barta Standard (₹99/month) and Barta Plus (₹199/month)—as well as any future digital services clearly described inside the App or at chatbybarta.com. Pricing is presented transparently prior to purchase, inclusive or exclusive of applicable taxes (such as GST in India) as displayed at checkout.',
      'Auto-Renewal & Cancellation: Subscriptions billed through Apple App Store, Google Play, or authorized payment gateways automatically renew at the end of each billing cycle unless canceled at least 24 hours before the renewal date through your store account settings. Upon cancellation, paid benefits remain active through the end of the current paid period.',
      'Refund Policy: In-app purchases and subscriptions processed via Apple App Store or Google Play are governed by the respective platform’s billing and refund procedures, alongside mandatory consumer-protection rights under applicable law (including Indian consumer law and EU statutory rights where applicable). See our Refund & Cancellation Policy for full details.',
      'Pricing Changes: We reserve the right to modify subscription pricing or tier features with reasonable advance notice (at least 30 days via in-app notice or email) prior to any price increase taking effect on your next renewal cycle.',
    ],
  },
  {
    id: 'suspension-termination-inactivity',
    number: '8',
    title: 'Account Suspension, Termination & Inactivity',
    inBrief:
      'You can delete your account anytime for immediate prekey revocation. We may suspend accounts that violate our Acceptable Use Policy. Inactive accounts (180+ days) may have cryptographic prekey bundles purged to preserve security hygiene.',
    paragraphs: [
      'Suspension or Termination by Barta: We may suspend, restrict, or permanently terminate your access to Barta if we determine, based on user-submitted abuse reports, anti-spam telemetry, or legal obligations, that you have violated Section 3 (Acceptable Use Policy), compromised platform integrity, or engaged in fraudulent billing activity.',
      'Voluntary Account Deletion: You may delete your Barta account at any time from in-app Settings. Upon deletion, your account identifier, pseudonymized handle reservation, and published cryptographic prekey bundles are immediately revoked and purged from our distribution servers. Local message copies already delivered to other users’ devices remain subject to those recipients’ device settings.',
      'Inactivity & Cryptographic Hygiene (180+ Days): To maintain forward-secrecy hygiene and prevent stale key material from lingering on distribution servers, accounts that remain continuously inactive for 180 consecutive days or more may have their published prekey bundles purged and dormant account records deactivated after reasonable in-app or SMS notice where feasible.',
    ],
  },
  {
    id: 'disclaimers-warranties',
    number: '9',
    title: 'Disclaimers of Warranties ("AS IS" & "AS AVAILABLE")',
    inBrief:
      'Barta is provided "AS IS" and "AS AVAILABLE". We engineer carefully for reliability, but cannot guarantee uninterrupted uptime, zero packet loss, or immunity from carrier or battery issues.',
    paragraphs: [
      'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BARTA IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.',
      'Barta does not warrant that the Service will be uninterrupted, error-free, or completely free of latency, network packet loss, mobile carrier throttling, device battery consumption, operating system incompatibilities, or third-party infrastructure outages. No software system can be guaranteed immune to every future hardware, operating system, or cryptographic vulnerability.',
    ],
  },
  {
    id: 'limitation-liability',
    number: '10',
    title: 'Limitation of Liability',
    inBrief:
      'To the extent permitted by law, Barta is not liable for indirect or consequential damages—such as lost unbacked-up device keys, hardware theft, or unauthorized physical device access—and aggregate liability is capped.',
    paragraphs: [
      'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL BARTA TECHNOLOGY PVT. LTD., ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, LOSS OF PROFITS, GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE—INCLUDING DAMAGES RESULTING FROM DEVICE THEFT, UNBACKED-UP CRYPTOGRAPHIC KEYS, FORGOTTEN PASSCODES, OR UNAUTHORIZED PHYSICAL ACCESS TO YOUR HARDWARE.',
      'TO THE FULLEST EXTENT PERMITTED BY LAW, BARTA’S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL SUBSCRIPTION FEES PAID BY YOU TO BARTA IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR (B) INR ₹5,000 (OR EQUIVALENT IN LOCAL CURRENCY).',
      'Some jurisdictions (including certain consumer protection frameworks in the EU/EEA and India) do not allow the exclusion of certain warranties or the limitation of liability for gross negligence, fraud, or statutory consumer rights; in such jurisdictions, Barta’s liability is limited to the minimum extent permitted by law.',
    ],
  },
  {
    id: 'indemnification-dispute',
    number: '11',
    title: 'Indemnification & Dispute Resolution',
    inBrief:
      'You agree to indemnify Barta against claims arising from your unlawful conduct. Disputes are resolved via good-faith negotiation and binding individual arbitration (with a 30-day opt-out window where required by law), governed by the laws of India.',
    paragraphs: [
      'Indemnification: You agree to defend, indemnify, and hold harmless Barta Technology Pvt. Ltd. and its officers, directors, employees, and agents from and against any third-party claims, damages, liabilities, costs, and reasonable legal fees arising out of (i) your breach of these Terms, (ii) your unlawful use of the Service, or (iii) your violation of any third-party intellectual property or privacy right.',
      'Informal Resolution First: Before initiating formal proceedings, you agree to contact us at legal@chatbybarta.com with a written summary of your dispute so both parties can attempt good-faith resolution within 30 days.',
      'Binding Individual Arbitration & Class-Action Waiver: Except where prohibited by mandatory consumer law in your jurisdiction (such as EU/EEA consumer rights to bring claims in local courts), any unresolved dispute arising out of or relating to these Terms shall be resolved through final and binding individual arbitration seated in India under the Arbitration and Conciliation Act, 1996 (as amended), conducted in English. To the fullest extent permitted by law, you and Barta waive any right to participate in a class action, collective proceeding, or representative lawsuit.',
      '30-Day Arbitration Opt-Out: Where mandated or applicable in your jurisdiction (including US/California users), you may opt out of the binding arbitration and class-action waiver provision within 30 days of first accepting these Terms by sending written notice from your registered email to legal@chatbybarta.com with the subject line "Arbitration Opt-Out".',
      'Governing Law & Jurisdiction: Subject to mandatory local consumer-protection statutes, these Terms are governed by and construed in accordance with the laws of India, without regard to conflict-of-law principles, and subject to the exclusive jurisdiction of competent courts in India for non-arbitrable matters.',
    ],
  },
  {
    id: 'modifications-contact',
    number: '12',
    title: 'Modifications to Terms & Contact Information',
    inBrief:
      'We will notify you in-app or on our website before material changes take effect. Reach us anytime at legal@chatbybarta.com or support@chatbybarta.com.',
    paragraphs: [
      'Modifications to Terms: We may update these Terms periodically to reflect new features, cryptographic upgrades, or regulatory requirements (including updates under the India DPDP Act, GDPR, CCPA/CPRA, or App Store / Google Play policies). For material changes, we will provide advance notice via an in-app banner, update prompt, or prominent notice on chatbybarta.com and update the "Last Updated" and "Effective Date" at the top of this document. Continued use of Barta after the effective date constitutes acceptance of the revised Terms.',
      'Official Contact Details: For legal notices, privacy inquiries, arbitration opt-outs, or general support, please contact Barta Technology Pvt. Ltd. using the official channels below.',
    ],
    bullets: [
      `Legal & Compliance Email: ${SITE_CONFIG.emails.legal}`,
      `Customer Support Email: ${SITE_CONFIG.emails.support}`,
      `Security Disclosures: ${SITE_CONFIG.emails.security}`,
      `Official Website: ${SITE_CONFIG.websiteUrl}`,
      'Registered Physical Mailing Address: Barta Technology Pvt. Ltd., [Registered Corporate Office Street Address, City, State, PIN Code], India.',
    ],
  },
];

export function formatTermsAsMarkdown(): string {
  const lines: string[] = [
    `# ${TERMS_METADATA.title} — ${SITE_CONFIG.brandName}`,
    '',
    `**Company:** ${SITE_CONFIG.overview.companyName}  `,
    `**Effective Date:** ${TERMS_METADATA.effectiveDate}  `,
    `**Last Updated:** ${TERMS_METADATA.lastUpdated}  `,
    `**Website:** ${SITE_CONFIG.websiteUrl}`,
    '',
    `> ${TERMS_METADATA.jurisdictionSummary}`,
    '',
    '---',
    '',
  ];

  for (const section of TERMS_SECTIONS) {
    lines.push(`## ${section.number}. ${section.title}`);
    lines.push('');
    lines.push(`> **In Brief:** ${section.inBrief}`);
    lines.push('');

    if (section.importantNotice) {
      lines.push(`> **IMPORTANT — ${section.importantNotice.title}:** ${section.importantNotice.body}`);
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

  return lines.join('\n');
}
