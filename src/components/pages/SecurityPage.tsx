import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import type { PageId } from '../../utils/routing';
import { InquiryForm } from '../InquiryForm';

interface SecurityPageProps {
  onNavigate: (page: PageId) => void;
}

const SECURITY_PILLARS = [
  {
    title: 'Encryption Principles',
    body: 'We rely on peer-reviewed, standardized cryptographic primitives rather than proprietary or unpublished ciphers. Key exchange, transport protection, and payload integrity are engineered around established best practices.',
  },
  {
    title: 'Account Security',
    body: 'Account verification and session hygiene are designed to reduce unauthorized access risks—emphasizing explicit device verification and clear session revocation controls.',
  },
  {
    title: 'Data Minimization',
    body: 'The most effective way to protect personal data is not to collect unnecessary metadata in the first place. Our architectures aim to retain only what is strictly required for delivery and reliability.',
  },
  {
    title: 'Privacy-by-Design',
    body: 'Privacy defaults are enabled from the first interaction. Users should never have to hunt through buried settings menus to stop behavioral profiling or ad tracking.',
  },
  {
    title: 'Security Updates',
    body: 'Timely dependency maintenance, reproducible release checks, and proactive patching help address newly discovered vulnerabilities across client and infrastructure layers.',
  },
  {
    title: 'User Safety',
    body: 'Respectful communication requires protection against abuse, impersonation, and malware distribution alongside clear reporting tools and community standards.',
  },
];

export function SecurityPage({ onNavigate }: SecurityPageProps) {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-4">
          <p className="text-sm font-medium text-[#0066FF]">Security &amp; Privacy</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950 max-w-3xl text-balance">
            Security philosophy rooted in transparency and responsible disclosure.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            No software system is infallible. Our responsibility is to engineer conservatively,
            minimize data exposure, verify capabilities honestly, and respond swiftly to researchers.
          </p>
        </div>
      </section>

      {/* Core Security Pillars */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECURITY_PILLARS.map((pillar) => (
            <div key={pillar.title} className="border border-slate-200 rounded-xl p-6 space-y-2.5">
              <h2 className="text-lg font-display font-semibold text-slate-950">{pillar.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Responsible Vulnerability Reporting Process */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[#0066FF]">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Coordinated Disclosure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                Responsible Vulnerability Reporting Process
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We welcome good-faith reports from security researchers, developers, and users who
                identify potential weaknesses in Barta software or web properties.
              </p>
            </div>

            <ol className="space-y-4 text-sm text-slate-700">
              <li className="bg-white border border-slate-200 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-slate-950">01. Document Minimal Reproduction</p>
                <p className="text-slate-600 leading-relaxed">
                  Include clear reproduction steps, affected component or URL, and observed impact
                  without accessing other users&rsquo; data or disrupting availability.
                </p>
              </li>
              <li className="bg-white border border-slate-200 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-slate-950">02. Report Confidentially</p>
                <p className="text-slate-600 leading-relaxed">
                  Send your findings to our dedicated security contact email or prepare a report
                  using the form alongside.
                </p>
              </li>
              <li className="bg-white border border-slate-200 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-slate-950">03. Coordinated Triage &amp; Fix</p>
                <p className="text-slate-600 leading-relaxed">
                  Our engineering team validates the report, works on remediation, and coordinates
                  disclosure timing once users are protected.
                </p>
              </li>
            </ol>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
              <p className="text-xs font-medium text-slate-500">Configurable Security Contact</p>
              <a
                href={`mailto:${SITE_CONFIG.emails.security}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-[#0066FF] hover:underline"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {SITE_CONFIG.emails.security}
              </a>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('security-disclosure')}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 cursor-pointer"
                >
                  Read full Security Disclosure Policy
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm
              recipientEmail={SITE_CONFIG.emails.security}
              categories={[
                'Vulnerability Report',
                'Cryptographic Architecture Question',
                'Privacy Policy Clarification',
                'Abuse / Safety Escalation',
              ]}
              defaultCategory="Vulnerability Report"
              submitLabel="Prepare Security Report"
              heading="Submit a Security Report"
              description="Prepare a structured security disclosure note ready to send directly from your email client."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
