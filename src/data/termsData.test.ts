import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TERMS_METADATA,
  TERMS_SECTIONS,
  formatTermsAsMarkdown,
} from './termsData';

test('termsData contains all 12 required legal sections with In Brief summaries', () => {
  assert.equal(TERMS_SECTIONS.length, 12);
  for (let i = 0; i < TERMS_SECTIONS.length; i++) {
    const section = TERMS_SECTIONS[i];
    assert.equal(section.number, String(i + 1));
    assert.ok(section.inBrief.length > 20, `Section ${section.number} missing In Brief`);
    assert.ok(section.paragraphs.length > 0, `Section ${section.number} missing paragraphs`);
  }
});

test('termsData includes prominent No Emergency Services notice in Section 6', () => {
  const section6 = TERMS_SECTIONS[5];
  assert.ok(section6.importantNotice);
  assert.match(section6.importantNotice.title, /NO EMERGENCY SERVICES/i);
  assert.match(section6.importantNotice.body, /911/);
  assert.match(section6.importantNotice.body, /112/);
});

test('formatTermsAsMarkdown outputs clean Markdown with Effective Date, Last Updated, and PQC details', () => {
  const md = formatTermsAsMarkdown();
  assert.ok(md.includes(TERMS_METADATA.effectiveDate));
  assert.ok(md.includes(TERMS_METADATA.lastUpdated));
  assert.ok(md.includes('ML-KEM-768'));
  assert.ok(md.includes('PQXDH'));
  assert.ok(md.includes('legal@chatbybarta.com'));
  assert.ok(md.includes('support@chatbybarta.com'));
});
