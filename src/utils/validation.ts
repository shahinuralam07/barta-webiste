export interface InquiryFormInput {
  name: string;
  email: string;
  organization?: string;
  category: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof InquiryFormInput, string>>;
}

export interface FaqEntry {
  id: string;
  category: 'General' | 'Product' | 'Security & Cryptography' | 'Company & Partnerships';
  question: string;
  answer: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim());
}

export function validateInquiryForm(input: InquiryFormInput): ValidationResult {
  const errors: Partial<Record<keyof InquiryFormInput, string>> = {};

  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedMessage = input.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  if (!trimmedEmail) {
    errors.email = 'Please provide an email address so we can reply.';
  } else if (!validateEmail(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (for example, name@company.com).';
  }

  if (!input.category.trim()) {
    errors.category = 'Please choose an enquiry topic.';
  }

  if (trimmedMessage.length < 15) {
    errors.message = 'Please share a brief message (at least 15 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildMailtoHref(recipientEmail: string, input: InquiryFormInput): string {
  const subject = `[Barta Website · ${input.category.trim()}] Enquiry from ${input.name.trim()}`;
  const lines = [
    `Name: ${input.name.trim()}`,
    `Email: ${input.email.trim()}`,
    input.organization?.trim() ? `Organization: ${input.organization.trim()}` : null,
    `Topic: ${input.category.trim()}`,
    '',
    'Message:',
    input.message.trim(),
  ].filter((line): line is string => line !== null);

  const params = new URLSearchParams({
    subject,
    body: lines.join('\n'),
  });

  return `mailto:${recipientEmail}?${params.toString()}`;
}

export function filterFaqItems(
  items: FaqEntry[],
  searchQuery: string,
  category: string
): FaqEntry[] {
  const query = searchQuery.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    if (!matchesCategory) return false;
    if (!query) return true;
    return (
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });
}
