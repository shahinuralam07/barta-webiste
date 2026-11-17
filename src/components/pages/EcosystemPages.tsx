import { useState, type FormEvent } from 'react';
import { CheckCircle2, ChevronDown, Mail, Search, Send } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { FAQ_ITEMS } from '../../data/siteData';
import type { PageId } from '../../utils/routing';
import { filterFaqItems, validateEmail } from '../../utils/validation';
import { InquiryForm } from '../InquiryForm';

interface PageNavProps {
  onNavigate: (page: PageId) => void;
}

export function SponsorsPage({ onNavigate }: PageNavProps) {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-4">
          <p className="text-sm font-medium text-[#0066FF]">Sponsors</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950 max-w-3xl text-balance">
            Support independent privacy engineering and secure communication research.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Sponsorships help Barta Technology Pvt. Ltd. fund cryptographic research, security
            audits, open technical documentation, and accessibility initiatives without relying on
            advertising surveillance.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-slate-200 rounded-xl p-6 space-y-2.5">
            <h2 className="text-lg font-display font-semibold text-slate-950">
              Research &amp; Audit Grants
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Underwrite independent third-party security assessments, post-quantum cryptography
              benchmarking, and public technical papers.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 space-y-2.5">
            <h2 className="text-lg font-display font-semibold text-slate-950">
              Ecosystem &amp; Community Support
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Support student workshops, Indian security engineering fellowships, and lightweight
              accessibility tooling—with zero influence over user data privacy.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 text-sm">
            <p className="font-semibold text-slate-900">Direct Sponsorship Desk</p>
            <a
              href={`mailto:${SITE_CONFIG.emails.sponsors}`}
              className="inline-flex items-center gap-2 text-[#0066FF] hover:underline font-medium"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {SITE_CONFIG.emails.sponsors}
            </a>
            <p className="text-xs text-slate-500 pt-1">
              Looking for product or enterprise collaboration instead?{' '}
              <button
                type="button"
                onClick={() => onNavigate('partnerships')}
                className="text-[#0066FF] hover:underline font-medium cursor-pointer"
              >
                Visit Partnerships
              </button>
              .
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <InquiryForm
            recipientEmail={SITE_CONFIG.emails.sponsors}
            categories={[
              'Research & Audit Sponsorship',
              'University / Ecosystem Grant',
              'Corporate Patronage',
              'General Sponsorship Enquiry',
            ]}
            defaultCategory="Research & Audit Sponsorship"
            submitLabel="Prepare Sponsorship Enquiry"
            heading="Sponsorship Enquiry"
            description="Share your organization’s sponsorship goals and our team will follow up directly."
          />
        </div>
      </section>
    </div>
  );
}

export function PartnershipsPage({ onNavigate }: PageNavProps) {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-4">
          <p className="text-sm font-medium text-[#0066FF]">Partnerships</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950 max-w-3xl text-balance">
            Collaborate with Barta Technology Pvt. Ltd.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            We collaborate with research universities, independent security auditors, infrastructure
            providers, and organizations seeking privacy-respecting communication workflows.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div className="border border-slate-200 rounded-xl p-6 space-y-2">
            <h2 className="text-lg font-display font-semibold text-slate-950">
              Academic &amp; Cryptography Research
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Joint exploration of post-quantum key exchange performance, formal verification, and
              low-bandwidth protocol reliability.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 space-y-2">
            <h2 className="text-lg font-display font-semibold text-slate-950">
              Independent Security Audits
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Engagements with qualified security firms to assess protocol implementations, client
              hardening, and infrastructure posture.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 space-y-2">
            <h2 className="text-lg font-display font-semibold text-slate-950">
              Technology &amp; Ecosystem Integration
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Strategic collaborations across India and globally that align with our commitment to
              privacy-first communication.{' '}
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="text-[#0066FF] hover:underline font-medium cursor-pointer"
              >
                Read about our values
              </button>
              .
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <InquiryForm
            recipientEmail={SITE_CONFIG.emails.partnerships}
            categories={[
              'Technology Partnership',
              'Academic / Cryptography Research',
              'Independent Security Audit',
              'Enterprise Pilot Discussion',
            ]}
            defaultCategory="Technology Partnership"
            submitLabel="Prepare Partnership Proposal"
            heading="Partner With Us"
            description="Outline how your team or institution would like to collaborate with Barta."
          />
        </div>
      </section>
    </div>
  );
}

export function ContactPage({ onNavigate }: PageNavProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState<{
    name: string;
    email: string;
    message: string;
  } | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!validateEmail(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      nextErrors.message = 'Please enter your message.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const payload = {
      to: SITE_CONFIG.emails.general,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log('Contact form submission (simulated delivery to contact@chatbybarta.com):', payload);

    setErrors({});
    setSubmitted({
      name: payload.name,
      email: payload.email,
      message: payload.message,
    });
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setSubmitted(null);
  };

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-4">
          <p className="text-sm font-medium text-[#0066FF]">Contact Us</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950 max-w-3xl">
            Get in touch with our team.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Reach Barta Technology Pvt. Ltd. directly for corporate enquiries, product release
            updates, partnerships, sponsorships, or support.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-5">
          <div className="border border-slate-200 rounded-xl p-6 space-y-4 bg-slate-50">
            <h2 className="text-lg font-display font-semibold text-slate-950">
              Official Email Channels
            </h2>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-slate-500">General Enquiries</dt>
                <dd>
                  <a
                    href={`mailto:${SITE_CONFIG.emails.general}`}
                    className="font-medium text-[#0066FF] hover:underline"
                  >
                    {SITE_CONFIG.emails.general}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Customer Support</dt>
                <dd>
                  <a
                    href={`mailto:${SITE_CONFIG.emails.support}`}
                    className="font-medium text-[#0066FF] hover:underline"
                  >
                    {SITE_CONFIG.emails.support}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Security &amp; Vulnerability Reports</dt>
                <dd>
                  <a
                    href={`mailto:${SITE_CONFIG.emails.security}`}
                    className="font-medium text-[#0066FF] hover:underline"
                  >
                    {SITE_CONFIG.emails.security}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Partnerships &amp; Sponsors</dt>
                <dd>
                  <a
                    href={`mailto:${SITE_CONFIG.emails.partnerships}`}
                    className="font-medium text-[#0066FF] hover:underline"
                  >
                    {SITE_CONFIG.emails.partnerships}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 space-y-2 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">{SITE_CONFIG.overview.companyName}</p>
            <p>
              {SITE_CONFIG.overview.country} · {SITE_CONFIG.overview.industry} ·{' '}
              <a
                href={SITE_CONFIG.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066FF] hover:underline font-medium"
              >
                {SITE_CONFIG.domain}
              </a>
            </p>
            <p className="pt-1">
              Social: X{' '}
              <a
                href="https://x.com/chatbybarta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066FF] hover:underline font-medium"
              >
                @chatbybarta
              </a>{' '}
              · Instagram{' '}
              <a
                href="https://instagram.com/chatbybarta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066FF] hover:underline font-medium"
              >
                @chatbybarta
              </a>
            </p>
            <p className="pt-1">
              Need immediate answers? Check our{' '}
              <button
                type="button"
                onClick={() => onNavigate('faq')}
                className="text-[#0066FF] hover:underline font-medium cursor-pointer"
              >
                FAQ
              </button>{' '}
              or{' '}
              <button
                type="button"
                onClick={() => onNavigate('support')}
                className="text-[#0066FF] hover:underline font-medium cursor-pointer"
              >
                Support page
              </button>
              .
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-display font-semibold text-slate-950">Send a Message</h2>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                Fill out your Name, Email, and Message to contact{' '}
                <span className="font-medium text-slate-900">{SITE_CONFIG.emails.general}</span>.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="space-y-5 bg-slate-50 border border-slate-200 rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-semibold text-slate-950">
                      Message sent to {SITE_CONFIG.emails.general}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you, {submitted.name}. Your message has been logged for delivery to{' '}
                      <span className="font-medium text-slate-900">
                        {SITE_CONFIG.emails.general}
                      </span>
                      .
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 space-y-1.5">
                  <p>
                    <span className="font-medium text-slate-900">To:</span>{' '}
                    {SITE_CONFIG.emails.general}
                  </p>
                  <p>
                    <span className="font-medium text-slate-900">Name:</span> {submitted.name}
                  </p>
                  <p>
                    <span className="font-medium text-slate-900">Email:</span> {submitted.email}
                  </p>
                  <p className="pt-2 border-t border-slate-100 whitespace-pre-line">
                    {submitted.message}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className="w-full px-3.5 py-2.5 min-h-[42px] text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="w-full px-3.5 py-2.5 min-h-[42px] text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    aria-invalid={Boolean(errors.message)}
                    className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-xs text-slate-500">
                    Recipient: {SITE_CONFIG.emails.general}
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 min-h-[42px] text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export { SupportPage } from './SupportPage';

export function FaqPage({ onNavigate }: PageNavProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const categories = [
    'All',
    'General',
    'Product',
    'Security & Cryptography',
    'Company & Partnerships',
  ];

  const filteredItems = filterFaqItems(FAQ_ITEMS, searchQuery, selectedCategory);

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-4">
          <p className="text-sm font-medium text-[#0066FF]">FAQ</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Clear answers about Barta Technology Pvt. Ltd., product availability, cryptography
            practices, and how to collaborate with us.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        {/* Search and Category Filter Controls */}
        <div className="space-y-4">
          <div className="relative">
            <Search
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            />
            <label htmlFor="faq-search" className="sr-only">
              Search frequently asked questions
            </label>
            <input
              id="faq-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., encryption, download, partnerships)..."
              className="w-full pl-10 pr-4 py-2.5 min-h-[44px] text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
            />
          </div>

          <div
            role="group"
            aria-label="Filter FAQ by category"
            className="flex flex-wrap items-center gap-1.5"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 min-h-[36px] text-xs font-medium rounded-full border transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0066FF] text-white border-[#0066FF]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        {filteredItems.length === 0 ? (
          <div className="border border-slate-200 rounded-xl p-8 text-center space-y-3 bg-slate-50">
            <p className="text-sm font-medium text-slate-900">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-semibold text-[#0066FF] hover:underline cursor-pointer"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
            {filteredItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="bg-white">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500">{item.category}</p>
                      <p className="text-base font-display font-semibold text-slate-950">
                        {item.question}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="pt-4 text-sm text-slate-600">
          Still have a specific question?{' '}
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="text-[#0066FF] font-semibold hover:underline cursor-pointer"
          >
            Contact our team directly
          </button>
          .
        </div>
      </section>
    </div>
  );
}

export function CareersPage() {
  const focusAreas = [
    {
      title: 'Applied Cryptography & Security Engineering',
      detail:
        'Protocol design, key management ergonomics, post-quantum hybrid experiments, and reproducible security tooling.',
    },
    {
      title: 'Mobile & Cross-Platform Systems',
      detail:
        'Fast, resilient messaging clients tuned for battery efficiency and variable network conditions across India.',
    },
    {
      title: 'Product Design & Accessibility',
      detail:
        'Calm, high-contrast user interfaces that make privacy verification effortless for everyday communicators.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-4">
          <p className="text-sm font-medium text-[#0066FF]">Careers</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950 max-w-3xl text-balance">
            Build calm, privacy-first communication systems from India.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Barta Technology Pvt. Ltd. values thoughtful engineers, security researchers, and
            product designers who care deeply about craft, honesty, and long-term impact.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-xl font-display font-semibold text-slate-950">
            Core Disciplines We Value
          </h2>
          {focusAreas.map((area) => (
            <div key={area.title} className="border border-slate-200 rounded-xl p-5 space-y-1.5">
              <h3 className="text-base font-display font-semibold text-slate-950">{area.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{area.detail}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7">
          <InquiryForm
            recipientEmail={SITE_CONFIG.emails.careers}
            categories={[
              'Cryptography / Security Engineering',
              'Software / Mobile Engineering',
              'Product Design & Research',
              'General Expression of Interest',
            ]}
            defaultCategory="Software / Mobile Engineering"
            submitLabel="Prepare Career Introduction"
            heading="Express Interest in Joining Barta"
            description="Introduce your background, areas of work, and links to public projects or papers."
          />
        </div>
      </section>
    </div>
  );
}
