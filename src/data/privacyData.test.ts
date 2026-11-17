import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DATA_SAFETY_TABLE,
  PRIVACY_METADATA,
  PRIVACY_SECTIONS,
  formatPrivacyAsMarkdown,
} from './privacyData';

test('privacyData contains all 11 required sections with Key Takeaway callouts', () => {
  assert.equal(PRIVACY_SECTIONS.length, 11);
  for (let i = 0; i < PRIVACY_SECTIONS.length; i++) {
    const section = PRIVACY_SECTIONS[i];
    assert.equal(section.number, String(i + 1));
    assert.ok(section.takeaway.length > 20, `Section ${section.number} missing Key Takeaway`);
  }
});

test('privacyData includes Warrant Canary highlight and CCPA non-sale statement', () => {
  const govSection = PRIVACY_SECTIONS[5];
  assert.ok(govSection.highlightCallout);
  assert.match(govSection.highlightCallout.body, /CANNOT/);

  const rightsSection = PRIVACY_SECTIONS[7];
  const combined = (rightsSection.bullets ?? []).join(' ');
  assert.ok(
    combined.includes(
      'We do not sell or share personal information for cross-context behavioral advertising.'
    )
  );
});

test('formatPrivacyAsMarkdown outputs GFM Markdown with Data Safety table and technical details', () => {
  const md = formatPrivacyAsMarkdown();
  assert.ok(md.includes(PRIVACY_METADATA.effectiveDate));
  assert.ok(md.includes('ML-KEM-768'));
  assert.ok(md.includes('AES-256-GCM'));
  assert.ok(md.includes('privacy@barta.app'));
  assert.ok(md.includes('| Data Category | Collected? |'));
  assert.ok(DATA_SAFETY_TABLE.length >= 6);
});

test('privacyData explicitly states messages are never stored on servers even when offline', () => {
  const md = formatPrivacyAsMarkdown();
  assert.ok(md.includes('never stored on Barta servers'));
  assert.ok(md.includes('offline'));
  assert.ok(!md.includes('buffered temporarily on our relay servers for up to 30 days'));
  assert.ok(!md.includes('Undelivered Encrypted Buffers'));
});
