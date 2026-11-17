import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  validateInquiryForm,
  buildMailtoHref,
  filterFaqItems,
  type FaqEntry,
} from './validation';

test('validateEmail validates standard formats and rejects malformed addresses', () => {
  assert.equal(validateEmail('founder@chatbybarta.com'), true);
  assert.equal(validateEmail('name+tag@domain.co.in'), true);
  assert.equal(validateEmail('not-an-email'), false);
  assert.equal(validateEmail('missing@tld'), false);
  assert.equal(validateEmail(''), false);
});

test('validateInquiryForm returns field-specific errors for invalid input', () => {
  const invalid = validateInquiryForm({
    name: 'A',
    email: 'invalid',
    category: '',
    message: 'Short',
  });

  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.category);
  assert.ok(invalid.errors.message);

  const valid = validateInquiryForm({
    name: 'Aarav Sen',
    email: 'aarav@example.org',
    organization: 'Example Labs',
    category: 'Partnerships',
    message: 'We would like to discuss a research partnership on client cryptography.',
  });

  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('buildMailtoHref creates properly encoded mailto URI with details', () => {
  const href = buildMailtoHref('security@chatbybarta.com', {
    name: 'Priya Nair',
    email: 'priya@research.in',
    organization: 'Security Lab',
    category: 'Vulnerability Report',
    message: 'Observed an edge-case validation issue during testing.',
  });

  assert.ok(href.startsWith('mailto:security@chatbybarta.com?'));
  assert.ok(href.includes('subject='));
  assert.ok(href.includes('Priya+Nair') || href.includes('Priya%20Nair'));
});

test('filterFaqItems filters by category and search query accurately', () => {
  const sample: FaqEntry[] = [
    {
      id: '1',
      category: 'Product',
      question: 'Where can I download Barta?',
      answer: 'Official links will be published on the Products page.',
    },
    {
      id: '2',
      category: 'Security & Cryptography',
      question: 'Does Barta claim to be quantum-proof?',
      answer: 'No. We research post-quantum cryptography responsibly without absolute claims.',
    },
  ];

  assert.equal(filterFaqItems(sample, '', 'All').length, 2);
  assert.equal(filterFaqItems(sample, 'quantum', 'All').length, 1);
  assert.equal(filterFaqItems(sample, '', 'Product').length, 1);
  assert.equal(filterFaqItems(sample, 'quantum', 'Product').length, 0);
});
