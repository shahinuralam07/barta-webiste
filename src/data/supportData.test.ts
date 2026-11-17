import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ACCOUNT_SAFETY_CHECKLIST,
  filterSupportTopics,
  generateSupportReferenceId,
  RELEASE_STATUS_ITEMS,
  SECURITY_FAQS,
  SUPPORT_GUIDES,
  TROUBLESHOOTING_ITEMS,
  validateSupportTicket,
} from './supportData';

test('supportData provides detailed guides, troubleshooting, security FAQs, release status, and safety checklist', () => {
  assert.equal(SUPPORT_GUIDES.length, 6);
  assert.equal(TROUBLESHOOTING_ITEMS.length, 4);
  assert.equal(SECURITY_FAQS.length, 5);
  assert.ok(RELEASE_STATUS_ITEMS.length >= 4);
  assert.equal(ACCOUNT_SAFETY_CHECKLIST.length, 5);
  SUPPORT_GUIDES.forEach((guide) => {
    assert.ok(guide.steps.length >= 3, `Guide ${guide.id} should have actionable steps`);
  });
  TROUBLESHOOTING_ITEMS.forEach((item) => {
    assert.ok(item.resolutionSteps.length >= 3, `Troubleshooting ${item.id} needs steps`);
  });
  assert.ok(
    SECURITY_FAQS.some((faq) => faq.answer.includes('never stores your messages'))
  );
});

test('filterSupportTopics filters accurately by category and search query', () => {
  const offlineMatches = filterSupportTopics(SUPPORT_GUIDES, 'offline', 'All');
  assert.equal(offlineMatches.length, 1);
  assert.equal(offlineMatches[0].id, 'device-only-storage-offline');

  const billingMatches = filterSupportTopics(SUPPORT_GUIDES, '', 'Subscriptions & Billing');
  assert.equal(billingMatches.length, 1);
  assert.equal(billingMatches[0].id, 'subscriptions-cancellation-billing');

  const emptyMatches = filterSupportTopics(SUPPORT_GUIDES, 'xyznonexistent', 'All');
  assert.equal(emptyMatches.length, 0);
});

test('validateSupportTicket validates fields and generateSupportReferenceId formats BRT IDs', () => {
  const invalid = validateSupportTicket({
    name: 'A',
    email: 'bad-email',
    category: '',
    platform: 'Android',
    message: 'short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.category);
  assert.ok(invalid.errors.message);

  const valid = validateSupportTicket({
    name: 'Aarav Sen',
    email: 'aarav@example.com',
    category: 'Account & Safety',
    platform: 'Android',
    message: 'Checking how safety numbers work after switching to a new phone.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});

  const refId = generateSupportReferenceId(1731850000000);
  assert.match(refId, /^BRT-[A-Z0-9]{6}$/);
});
