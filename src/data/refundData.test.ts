import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatRefundAsMarkdown,
  REFUND_METADATA,
  REFUND_SECTIONS,
} from './refundData';

test('refund policy contains all 6 required sections in sequential order', () => {
  assert.equal(REFUND_SECTIONS.length, 6);
  REFUND_SECTIONS.forEach((section, index) => {
    assert.equal(section.number, index + 1);
    assert.ok(section.title.length > 0);
    assert.ok(section.paragraphs.length > 0);
  });
});

test('section 1 and section 6 contain required final-sale bullets and numbered acknowledgements', () => {
  const section1 = REFUND_SECTIONS[0];
  assert.equal(section1.bullets?.length, 8);
  assert.ok(
    section1.bullets?.includes('All subscription purchases are considered final.')
  );

  const section3 = REFUND_SECTIONS[2];
  assert.equal(section3.bullets?.length, 6);
  assert.ok(section3.closingParagraphs && section3.closingParagraphs.length === 1);

  const section6 = REFUND_SECTIONS[5];
  assert.equal(section6.numberedItems?.length, 5);
  assert.ok(
    section6.numberedItems?.includes(
      'You agree to this Subscription Cancellation and No-Refund Policy.'
    )
  );
});

test('formatRefundAsMarkdown includes headings, lists, and final bold policy statement', () => {
  const md = formatRefundAsMarkdown();
  assert.ok(md.includes('## SUBSCRIPTION CANCELLATION AND NO-REFUND POLICY'));
  assert.ok(md.includes('### 1. All Subscription Purchases Are Final'));
  assert.ok(md.includes('### 6. User Acknowledgement'));
  assert.ok(md.includes('1. You have reviewed the subscription price and billing period.'));
  assert.ok(md.includes(`**${REFUND_METADATA.policyBanner}**`));
});
