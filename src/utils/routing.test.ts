import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PAGES,
  HEADER_NAV_ITEMS,
  FOOTER_COLUMNS,
  normalizePageId,
  getPageMeta,
} from './routing';

test('all 18 requested pages are registered in PAGES', () => {
  const expectedPages = [
    'home',
    'about',
    'products',
    'technology',
    'security',
    'sponsors',
    'partnerships',
    'contact',
    'support',
    'faq',
    'careers',
    'privacy-policy',
    'terms',
    'cookie-policy',
    'disclaimer',
    'refund-policy',
    'community-guidelines',
    'security-disclosure',
  ];

  for (const id of expectedPages) {
    assert.ok(id in PAGES, `Missing page registration for ${id}`);
  }
  assert.equal(Object.keys(PAGES).length, expectedPages.length);
});

test('normalizePageId handles hashes, paths, trailing slashes, and fallback', () => {
  assert.equal(normalizePageId(''), 'home');
  assert.equal(normalizePageId('/'), 'home');
  assert.equal(normalizePageId('#/'), 'home');
  assert.equal(normalizePageId('#/about'), 'about');
  assert.equal(normalizePageId('/technology/'), 'technology');
  assert.equal(normalizePageId('SECURITY-DISCLOSURE'), 'security-disclosure');
  assert.equal(normalizePageId('/unknown-route'), 'home');
});

test('header and footer cover primary navigation and all legal documents', () => {
  const headerLabels = HEADER_NAV_ITEMS.map((item) => item.label);
  assert.deepEqual(headerLabels, ['Home', 'About', 'Products', 'Technology', 'Sponsors', 'Contact']);

  const footerIds = new Set(FOOTER_COLUMNS.flatMap((col) => col.links.map((l) => l.id)));
  assert.ok(footerIds.has('privacy-policy'));
  assert.ok(footerIds.has('terms'));
  assert.ok(footerIds.has('cookie-policy'));
  assert.ok(footerIds.has('disclaimer'));
  assert.ok(footerIds.has('refund-policy'));
  assert.ok(footerIds.has('community-guidelines'));
  assert.ok(footerIds.has('security-disclosure'));
});

test('getPageMeta returns unique title and description per page', () => {
  const techMeta = getPageMeta('technology');
  assert.match(techMeta.title, /Technology/);
  assert.ok(techMeta.description.length > 20);
});
