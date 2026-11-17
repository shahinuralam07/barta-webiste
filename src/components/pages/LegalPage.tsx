import { useState } from 'react';
import { AlertTriangle, Check, Copy, Shield } from 'lucide-react';
import { LEGAL_DOCUMENTS } from '../../data/siteData';
import { SITE_CONFIG } from '../../data/siteConfig';
import {
  formatTermsAsMarkdown,
  TERMS_METADATA,
  TERMS_SECTIONS,
} from '../../data/termsData';
import {
  DATA_SAFETY_TABLE,
  formatPrivacyAsMarkdown,
  PRIVACY_METADATA,
  PRIVACY_SECTIONS,
} from '../../data/privacyData';
import {
  formatRefundAsMarkdown,
  REFUND_METADATA,
  REFUND_SECTIONS,
} from '../../data/refundData';
import type { PageId } from '../../utils/routing';

type LegalPageId = keyof typeof LEGAL_DOCUMENTS;

interface LegalPageProps {
  pageId: LegalPageId;
  onNavigate: (page: PageId) => void;
}

const LEGAL_NAV_ORDER: LegalPageId[] = [
  'privacy-policy',
  'terms',
  'cookie-policy',
  'disclaimer',
  'refund-policy',
  'community-guidelines',
  'security-disclosure',
];

export function LegalPage({ pageId, onNavigate }: LegalPageProps) {
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const doc = LEGAL_DOCUMENTS[pageId];
  const isTerms = pageId === 'terms';
  const isPrivacy = pageId === 'privacy-policy';
  const isRefund = pageId === 'refund-policy';
  const supportsMarkdownCopy = isTerms || isPrivacy || isRefund;

  const handleCopyMarkdown = async () => {
    try {
      const markdown = isTerms
        ? formatTermsAsMarkdown()
        : isPrivacy
        ? formatPrivacyAsMarkdown()
        : formatRefundAsMarkdown();
      await navigator.clipboard.writeText(markdown);
      setCopiedMarkdown(true);
      setTimeout(() => setCopiedMarkdown(false), 2500);
    } catch {
      setCopiedMarkdown(false);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const headerDateText = isTerms
    ? `Legal & Governance · Effective ${TERMS_METADATA.effectiveDate} · Last Updated ${TERMS_METADATA.lastUpdated}`
    : isPrivacy
    ? `Legal & Governance · Effective ${PRIVACY_METADATA.effectiveDate} · Last Updated ${PRIVACY_METADATA.lastUpdated}`
    : isRefund
    ? `Legal & Governance · Effective ${REFUND_METADATA.effectiveDate} · Last Updated ${REFUND_METADATA.lastUpdated}`
    : `Legal & Governance · Last updated ${doc.lastUpdated}`;

  const pageTitle = isTerms
    ? TERMS_METADATA.title
    : isPrivacy
    ? PRIVACY_METADATA.title
    : isRefund
    ? REFUND_METADATA.title
    : doc.title;

  const pageSubtitle = isTerms
    ? TERMS_METADATA.subtitle
    : isPrivacy
    ? PRIVACY_METADATA.subtitle
    : isRefund
    ? REFUND_METADATA.subtitle
    : doc.subtitle;

  const complianceNote = isTerms
    ? TERMS_METADATA.jurisdictionSummary
    : isPrivacy
    ? PRIVACY_METADATA.complianceSummary
    : isRefund
    ? REFUND_METADATA.scopeSummary
    : null;

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs font-medium text-slate-500">{headerDateText}</p>

            {supportsMarkdownCopy && (
              <button
                type="button"
                onClick={handleCopyMarkdown}
                className="inline-flex items-center gap-2 px-4 py-2 min-h-[38px] text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-full transition-colors self-start sm:self-auto whitespace-nowrap cursor-pointer"
              >
                {copiedMarkdown ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    Copied Markdown
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
                    Copy as Markdown
                  </>
                )}
              </button>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-950 text-balance">
            {pageTitle}
          </h1>

          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">{pageSubtitle}</p>

          {complianceNote && (
            <p className="text-xs text-slate-500 max-w-3xl leading-relaxed">{complianceNote}</p>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sidebar Legal Document Index + Section TOC */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <h2 className="px-3 py-2 text-xs font-semibold text-slate-500">
              Legal &amp; Trust Documents
            </h2>
            <nav aria-label="Legal documentation navigation" className="space-y-1">
              {LEGAL_NAV_ORDER.map((id) => {
                const item = LEGAL_DOCUMENTS[id];
                const isActive = id === pageId;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => onNavigate(id)}
                    className={`w-full text-left px-4 py-2.5 min-h-[40px] text-sm rounded-full transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#0066FF] text-white font-medium'
                        : 'text-slate-700 hover:bg-white hover:text-slate-950'
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </nav>
          </div>

          {isTerms && (
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <h2 className="px-3 py-2 text-xs font-semibold text-slate-500">
                Table of Contents (12 Sections)
              </h2>
              <nav aria-label="Terms sections" className="space-y-0.5 max-h-[420px] overflow-y-auto">
                {TERMS_SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:text-[#0066FF] hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                  >
                    {section.number}. {section.title}
                  </button>
                ))}
              </nav>
            </div>
          )}

          {isPrivacy && (
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <h2 className="px-3 py-2 text-xs font-semibold text-slate-500">
                Table of Contents (11 Sections + Data Safety)
              </h2>
              <nav
                aria-label="Privacy policy sections"
                className="space-y-0.5 max-h-[420px] overflow-y-auto"
              >
                {PRIVACY_SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:text-[#0066FF] hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                  >
                    {section.number}. {section.title}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollToSection('data-safety-summary')}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-[#0066FF] hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                >
                  App Store &amp; Google Play Data Safety Table
                </button>
              </nav>
            </div>
          )}
          {isRefund && (
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <h2 className="px-3 py-2 text-xs font-semibold text-slate-500">
                Table of Contents (6 Sections)
              </h2>
              <nav aria-label="Refund policy sections" className="space-y-0.5">
                {REFUND_SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:text-[#0066FF] hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                  >
                    {section.number}. {section.title}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </aside>

        {/* Main Policy Content */}
        {isPrivacy ? (
          <article className="lg:col-span-8 space-y-10">
            {PRIVACY_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 pb-8 border-b border-slate-200 space-y-4"
              >
                <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-950">
                  {section.number}. {section.title}
                </h2>

                {/* Key Takeaway at a Glance */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
                  <p className="text-xs font-semibold text-[#0066FF]">Key Takeaway at a Glance</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{section.takeaway}</p>
                </div>

                {/* Cryptographic Reality / Warrant Canary Callout */}
                {section.highlightCallout && (
                  <div
                    role="note"
                    className="bg-slate-950 text-white border border-slate-800 rounded-xl p-5 flex items-start gap-3"
                  >
                    <Shield
                      className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-1.5">
                      <p className="text-xs font-bold tracking-wide text-[#60A5FA]">
                        {section.highlightCallout.title}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {section.highlightCallout.body}
                      </p>
                    </div>
                  </div>
                )}

                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="space-y-2.5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed list-disc pl-5">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* App Store & Google Play Data Safety Summary Table */}
            <section id="data-safety-summary" className="scroll-mt-24 space-y-4">
              <div className="space-y-1.5">
                <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-950">
                  App Store &amp; Google Play Data Safety Summary
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Structured overview aligned with Apple App Store Privacy Nutrition Labels and
                  Google Play Data Safety declarations.
                </p>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                      <th className="py-3 px-4">Data Category</th>
                      <th className="py-3 px-4">Collected?</th>
                      <th className="py-3 px-4">Encryption</th>
                      <th className="py-3 px-4">Linked to Identity?</th>
                      <th className="py-3 px-4">Shared for Ads?</th>
                      <th className="py-3 px-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    {DATA_SAFETY_TABLE.map((row) => (
                      <tr key={row.category} className="bg-white hover:bg-slate-50/60">
                        <td className="py-3 px-4 font-medium text-slate-900">{row.category}</td>
                        <td className="py-3 px-4">{row.collected}</td>
                        <td className="py-3 px-4 font-mono-tech text-xs">{row.encryption}</td>
                        <td className="py-3 px-4">{row.linkedToIdentity}</td>
                        <td className="py-3 px-4 font-medium text-emerald-700">
                          {row.sharedForAds}
                        </td>
                        <td className="py-3 px-4">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="pt-4 border-t border-slate-200 text-sm text-slate-600 space-y-2">
              <p>
                Published by{' '}
                <strong className="text-slate-900">{SITE_CONFIG.overview.companyName}</strong> ·{' '}
                {SITE_CONFIG.domain}
              </p>
              <p>
                Data Protection Officer &amp; Privacy Desk:{' '}
                <a
                  href={`mailto:${SITE_CONFIG.emails.privacy}`}
                  className="text-[#0066FF] font-medium hover:underline"
                >
                  {SITE_CONFIG.emails.privacy}
                </a>{' '}
                ·{' '}
                <a
                  href="mailto:privacy@barta.app"
                  className="text-[#0066FF] font-medium hover:underline"
                >
                  privacy@barta.app
                </a>
              </p>
            </div>
          </article>
        ) : isTerms ? (
          <article className="lg:col-span-8 space-y-10">
            {TERMS_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 pb-8 border-b border-slate-200 last:border-b-0 space-y-4"
              >
                <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-950">
                  {section.number}. {section.title}
                </h2>

                {/* Plain-English "In Brief" Summary Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
                  <p className="text-xs font-semibold text-[#0066FF]">In Brief</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{section.inBrief}</p>
                </div>

                {/* Prominent Emergency Services Disclaimer Callout (Section 6) */}
                {section.importantNotice && (
                  <div
                    role="note"
                    className="bg-amber-50 border border-amber-300 rounded-xl p-5 flex items-start gap-3"
                  >
                    <AlertTriangle
                      className="w-5 h-5 text-amber-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-1.5">
                      <p className="text-xs font-bold tracking-wide text-amber-950">
                        {section.importantNotice.title}
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-amber-900 leading-relaxed">
                        {section.importantNotice.body}
                      </p>
                    </div>
                  </div>
                )}

                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="space-y-2.5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed list-disc pl-5">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="pt-4 text-sm text-slate-600 space-y-2">
              <p>
                Published by{' '}
                <strong className="text-slate-900">{SITE_CONFIG.overview.companyName}</strong> ·{' '}
                {SITE_CONFIG.domain}
              </p>
              <p>
                Legal inquiries:{' '}
                <a
                  href={`mailto:${SITE_CONFIG.emails.legal}`}
                  className="text-[#0066FF] font-medium hover:underline"
                >
                  {SITE_CONFIG.emails.legal}
                </a>{' '}
                · Support:{' '}
                <a
                  href={`mailto:${SITE_CONFIG.emails.support}`}
                  className="text-[#0066FF] font-medium hover:underline"
                >
                  {SITE_CONFIG.emails.support}
                </a>
              </p>
            </div>
          </article>
        ) : isRefund ? (
          <article className="lg:col-span-8 space-y-10">
            {REFUND_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 pb-8 border-b border-slate-200 space-y-4"
              >
                <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-950">
                  {section.number}. {section.title}
                </h2>

                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="space-y-2.5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed list-disc pl-5">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.numberedItems && (
                  <ol className="space-y-2.5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed list-decimal pl-5">
                    {section.numberedItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                )}

                {section.closingParagraphs?.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div
              role="note"
              className="bg-slate-950 text-white border border-slate-800 rounded-xl p-5 sm:p-6 flex items-start gap-3"
            >
              <AlertTriangle
                className="w-5 h-5 text-amber-400 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-xs sm:text-sm font-bold tracking-wide leading-relaxed text-white">
                {REFUND_METADATA.policyBanner}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-sm text-slate-600 space-y-2">
              <p>
                Published by{' '}
                <strong className="text-slate-900">{SITE_CONFIG.overview.companyName}</strong> ·{' '}
                {SITE_CONFIG.domain}
              </p>
              <p>
                Billing &amp; Support:{' '}
                <a
                  href={`mailto:${SITE_CONFIG.emails.support}`}
                  className="text-[#0066FF] font-medium hover:underline"
                >
                  {SITE_CONFIG.emails.support}
                </a>{' '}
                · Legal:{' '}
                <a
                  href={`mailto:${SITE_CONFIG.emails.legal}`}
                  className="text-[#0066FF] font-medium hover:underline"
                >
                  {SITE_CONFIG.emails.legal}
                </a>
              </p>
            </div>
          </article>
        ) : (
          <article className="lg:col-span-8 space-y-8">
            {doc.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-slate-950">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div className="pt-6 border-t border-slate-200 text-sm text-slate-600 space-y-2">
              <p>
                Published by{' '}
                <strong className="text-slate-900">{SITE_CONFIG.overview.companyName}</strong>.
              </p>
              <p>
                Questions regarding this document may be sent to{' '}
                <a
                  href={`mailto:${
                    pageId === 'security-disclosure'
                      ? SITE_CONFIG.emails.security
                      : SITE_CONFIG.emails.general
                  }`}
                  className="text-[#0066FF] font-medium hover:underline"
                >
                  {pageId === 'security-disclosure'
                    ? SITE_CONFIG.emails.security
                    : SITE_CONFIG.emails.general}
                </a>
                .
              </p>
            </div>
          </article>
        )}
      </section>
    </div>
  );
}
