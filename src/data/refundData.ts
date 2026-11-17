export interface RefundSection {
  id: string;
  number: number;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  numberedItems?: string[];
  closingParagraphs?: string[];
}

export const REFUND_METADATA = {
  title: 'Subscription Cancellation & No-Refund Policy',
  subtitle:
    'Clear billing, cancellation, and no-refund terms governing paid Barta subscription plans and digital services.',
  effectiveDate: 'November 17, 2026',
  lastUpdated: 'November 17, 2026',
  scopeSummary:
    'Applies to Barta Standard (₹99/month), Barta Plus (₹199/month), and all paid digital subscriptions purchased via Apple App Store, Google Play Store, or authorized payment providers.',
  policyBanner:
    "BARTA'S REFUND POLICY: ALL SUBSCRIPTION SALES ARE FINAL, EXCEPT WHERE A REFUND IS REQUIRED UNDER APPLICABLE LAW OR THE RULES OF THE RELEVANT PAYMENT PLATFORM.",
};

export const REFUND_SECTIONS: RefundSection[] = [
  {
    id: 'all-subscription-purchases-are-final',
    number: 1,
    title: 'All Subscription Purchases Are Final',
    paragraphs: [
      'Barta operates on a subscription-based payment model for certain premium features, digital services, and enhanced application functionality.',
      'By purchasing or subscribing to any paid Barta plan, you expressly acknowledge and agree that:',
    ],
    bullets: [
      'All subscription purchases are considered final.',
      'Once a subscription payment has been successfully completed, the amount paid is non-refundable.',
      'Barta does not provide refunds for unused subscription periods, partially used subscription periods, or unused premium features.',
      'No refunds will be issued if you change your mind after purchasing a subscription.',
      'No refunds will be provided if you decide to stop using Barta after subscribing.',
      'No refunds will be provided if you uninstall the application, delete your account, change your device, or discontinue using the Service during an active subscription period.',
      'No refunds will be issued merely because you did not use the premium features included in your subscription.',
      'Downgrading or cancelling a subscription does not automatically entitle you to a refund for the remaining subscription period.',
    ],
  },
  {
    id: 'subscription-cancellation',
    number: 2,
    title: 'Subscription Cancellation',
    paragraphs: [
      'Users may cancel their subscriptions at any time through the applicable payment platform or subscription management settings.',
      'Cancellation will generally prevent the next automatic renewal. However, cancelling a subscription does not automatically terminate the benefits of the already-paid subscription period.',
      'Unless otherwise required by applicable law or the relevant payment platform, premium features will remain available until the end of the current paid billing period.',
    ],
  },
  {
    id: 'no-refund-account-suspension-termination',
    number: 3,
    title: 'No Refund for Account Suspension or Termination',
    paragraphs: [
      'If your Barta account is suspended, restricted, or terminated because of:',
    ],
    bullets: [
      'Violation of these Terms and Conditions.',
      'Fraudulent activities.',
      'Spam or abusive behaviour.',
      'Illegal activities.',
      'Misuse of Barta services.',
      'Violation of community guidelines.',
    ],
    closingParagraphs: [
      'You will not ordinarily be entitled to a refund for the remaining subscription period, to the extent permitted by applicable law and payment platform policies.',
    ],
  },
  {
    id: 'payment-processing-third-party-platforms',
    number: 4,
    title: 'Payment Processing and Third-Party Platforms',
    paragraphs: [
      'Subscriptions purchased through the Apple App Store, Google Play Store, or other authorized payment providers are subject to the applicable billing and refund procedures of those platforms.',
      'Barta does not independently control payment decisions made by third-party payment providers.',
      'Refund requests, where permitted, must be submitted through the relevant payment provider.',
    ],
  },
  {
    id: 'limited-legal-exceptions',
    number: 5,
    title: 'Limited Legal Exceptions',
    paragraphs: [
      'Notwithstanding the above no-refund policy, nothing in these Terms excludes or limits any mandatory refund, reimbursement, cancellation, or consumer rights that cannot legally be waived under applicable law.',
      'In particular, verified duplicate charges, unauthorized transactions, qualifying billing errors, or refunds required by applicable consumer protection laws or payment platform rules will be handled in accordance with the relevant legal and payment requirements.',
    ],
  },
  {
    id: 'user-acknowledgement',
    number: 6,
    title: 'User Acknowledgement',
    paragraphs: ['By purchasing any Barta subscription, you confirm that:'],
    numberedItems: [
      'You have reviewed the subscription price and billing period.',
      'You understand that subscriptions may automatically renew unless cancelled.',
      'You understand that subscription payments are generally non-refundable.',
      'You understand that cancelling a subscription does not automatically generate a refund.',
      'You agree to this Subscription Cancellation and No-Refund Policy.',
    ],
  },
];

export function formatRefundAsMarkdown(): string {
  const lines: string[] = [
    '## SUBSCRIPTION CANCELLATION AND NO-REFUND POLICY',
    '',
    `**Effective Date:** ${REFUND_METADATA.effectiveDate}  `,
    `**Last Updated:** ${REFUND_METADATA.lastUpdated}`,
    '',
    '---',
    '',
  ];

  for (const section of REFUND_SECTIONS) {
    lines.push(`### ${section.number}. ${section.title}`, '');

    for (const paragraph of section.paragraphs) {
      lines.push(paragraph, '');
    }

    if (section.bullets) {
      for (const bullet of section.bullets) {
        lines.push(`- ${bullet}`);
      }
      lines.push('');
    }

    if (section.numberedItems) {
      section.numberedItems.forEach((item, index) => {
        lines.push(`${index + 1}. ${item}`);
      });
      lines.push('');
    }

    if (section.closingParagraphs) {
      for (const closing of section.closingParagraphs) {
        lines.push(closing, '');
      }
    }
  }

  lines.push(`**${REFUND_METADATA.policyBanner}**`, '');

  return lines.join('\n');
}
