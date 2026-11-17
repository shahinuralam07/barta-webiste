import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Lock,
  Mail,
  Search,
  Send,
  ShieldCheck,
  ThumbsDown,
  ThumbsUp,
  Wrench,
} from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import {
  ACCOUNT_SAFETY_CHECKLIST,
  filterSupportTopics,
  generateSupportReferenceId,
  RELEASE_STATUS_ITEMS,
  SECURITY_FAQS,
  SUPPORT_CATEGORIES,
  SUPPORT_GUIDES,
  TROUBLESHOOTING_ITEMS,
  validateSupportTicket,
  type SupportCategory,
  type SupportTicketInput,
} from '../../data/supportData';
import type { PageId } from '../../utils/routing';

interface SupportPageProps {
  onNavigate: (page: PageId) => void;
}

interface SubmittedTicket extends SupportTicketInput {
  referenceId: string;
  submittedAt: string;
}

const TICKET_CATEGORIES = [
  'Account & Safety',
  'Messaging & Offline Delivery',
  'Subscriptions & Billing (₹99 / ₹199)',
  'Release & Downloads (Android / iOS)',
  'Privacy & Data Request',
  'Bug Report / Technical Issue',
  'General Support',
];

const PLATFORM_OPTIONS = ['Android', 'iOS', 'Web / General'];

export function SupportPage({ onNavigate }: SupportPageProps) {
  // Interactive Help Guides state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | SupportCategory>('All');
  const [openGuideId, setOpenGuideId] = useState<string | null>(SUPPORT_GUIDES[0]?.id ?? null);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, 'yes' | 'no'>>({});

  // Interactive Security FAQs state
  const [openSecurityFaqId, setOpenSecurityFaqId] = useState<string | null>(
    SECURITY_FAQS[0]?.id ?? null
  );

  // Interactive Account Safety Checklist state
  const [checkedSafetyIds, setCheckedSafetyIds] = useState<string[]>([]);

  // Interactive Direct Support Form state
  const [ticketForm, setTicketForm] = useState<SupportTicketInput>({
    name: '',
    email: '',
    category: TICKET_CATEGORIES[0],
    platform: PLATFORM_OPTIONS[0],
    message: '',
  });
  const [ticketErrors, setTicketErrors] = useState<
    Partial<Record<keyof SupportTicketInput, string>>
  >({});
  const [submittedTicket, setSubmittedTicket] = useState<SubmittedTicket | null>(null);
  const [copiedTicket, setCopiedTicket] = useState(false);

  const filteredGuides = filterSupportTopics(SUPPORT_GUIDES, searchQuery, selectedCategory);

  const toggleSafetyItem = (id: string) => {
    setCheckedSafetyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleVote = (guideId: string, vote: 'yes' | 'no') => {
    setHelpfulVotes((prev) => ({ ...prev, [guideId]: vote }));
  };

  const handleReportTroubleshootingIssue = (ticketCategory: string) => {
    setTicketForm((prev) => ({ ...prev, category: ticketCategory }));
    setSubmittedTicket(null);
    setTicketErrors({});
    document.getElementById('direct-support')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitTicket = (event: FormEvent) => {
    event.preventDefault();
    const validation = validateSupportTicket(ticketForm);
    if (!validation.valid) {
      setTicketErrors(validation.errors);
      return;
    }

    const referenceId = generateSupportReferenceId();
    const submittedAt = new Date().toISOString();
    const payload: SubmittedTicket = {
      name: ticketForm.name.trim(),
      email: ticketForm.email.trim(),
      category: ticketForm.category,
      platform: ticketForm.platform,
      message: ticketForm.message.trim(),
      referenceId,
      submittedAt,
    };

    console.log('Barta Support Request (simulated delivery to support@chatbybarta.com):', {
      to: SITE_CONFIG.emails.support,
      ...payload,
    });

    setTicketErrors({});
    setSubmittedTicket(payload);
    setCopiedTicket(false);
  };

  const handleResetTicket = () => {
    setTicketForm({
      name: '',
      email: '',
      category: TICKET_CATEGORIES[0],
      platform: PLATFORM_OPTIONS[0],
      message: '',
    });
    setTicketErrors({});
    setSubmittedTicket(null);
    setCopiedTicket(false);
  };

  const buildTicketMailto = (ticket: SubmittedTicket) => {
    const subject = `[Barta Support ${ticket.referenceId}] ${ticket.category} (${ticket.platform})`;
    const body = [
      `Reference ID: ${ticket.referenceId}`,
      `Name: ${ticket.name}`,
      `Reply Email: ${ticket.email}`,
      `Category: ${ticket.category}`,
      `Platform: ${ticket.platform}`,
      '',
      'Message:',
      ticket.message,
    ].join('\n');

    return `mailto:${SITE_CONFIG.emails.support}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyTicket = async () => {
    if (!submittedTicket) return;
    const text = [
      `To: ${SITE_CONFIG.emails.support}`,
      `Reference ID: ${submittedTicket.referenceId}`,
      `Category: ${submittedTicket.category}`,
      `Platform: ${submittedTicket.platform}`,
      `From: ${submittedTicket.name} <${submittedTicket.email}>`,
      '',
      submittedTicket.message,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopiedTicket(true);
      setTimeout(() => setCopiedTicket(false), 2500);
    } catch {
      setCopiedTicket(false);
    }
  };

  const stageStyle = (stage: (typeof RELEASE_STATUS_ITEMS)[number]['stage']) => {
    if (stage === 'Live') return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    if (stage === 'In Active Development') return 'text-[#0066FF] bg-blue-50 border-blue-200';
    return 'text-slate-700 bg-slate-100 border-slate-200';
  };

  return (
    <div className="bg-white">
      {/* Hero with Instant Help Search */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-medium text-[#0066FF]">Support</p>
            <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950 text-balance">
              Help &amp; User Assistance
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Step-by-step guidance for Barta users, account safety checks, transparent release
              status, and direct support contact.
            </p>
          </div>

          <div className="max-w-2xl space-y-3">
            <div className="relative">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <label htmlFor="support-search" className="sr-only">
                Search help guides and troubleshooting topics
              </label>
              <input
                id="support-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search help topics (e.g., offline, subscription, keys, deletion, download)..."
                className="w-full pl-11 pr-4 py-3 min-h-[46px] text-sm text-slate-900 bg-white border border-slate-300 rounded-full focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  document.getElementById('support-guides')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-full transition-colors cursor-pointer"
              >
                Help Guides
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('troubleshooting')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-full transition-colors cursor-pointer"
              >
                Troubleshooting
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('security-faqs')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-full transition-colors cursor-pointer"
              >
                Security FAQs
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('safety-checklist')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-full transition-colors cursor-pointer"
              >
                Account Safety Checklist
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('release-status')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-full transition-colors cursor-pointer"
              >
                Release Status
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('direct-support')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-4 py-1.5 text-xs font-medium text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors cursor-pointer"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Help Guides & Troubleshooting */}
      <section id="support-guides" className="border-b border-slate-200 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                User Guidance &amp; Troubleshooting
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Select a topic below for actionable instructions and official policy references.
              </p>
            </div>

            <div
              role="group"
              aria-label="Filter support topics by category"
              className="flex flex-wrap items-center gap-1.5"
            >
              {SUPPORT_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 min-h-[36px] text-xs font-medium rounded-full border transition-colors cursor-pointer whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#0066FF] text-white border-[#0066FF]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-950'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredGuides.length === 0 ? (
            <div className="border border-slate-200 rounded-2xl p-8 text-center space-y-3 bg-slate-50">
              <p className="text-sm font-medium text-slate-900">
                No help guides matched &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors cursor-pointer"
              >
                Reset Search &amp; Filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
              {filteredGuides.map((guide) => {
                const isOpen = openGuideId === guide.id;
                const vote = helpfulVotes[guide.id];
                return (
                  <div key={guide.id} className="bg-white">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenGuideId(isOpen ? null : guide.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-[#0066FF]">{guide.category}</p>
                        <h3 className="text-base sm:text-lg font-display font-semibold text-slate-950">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-slate-600">{guide.summary}</p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 space-y-5 bg-slate-50/70 border-t border-slate-100">
                        <ol className="space-y-2.5 text-sm text-slate-700 leading-relaxed list-decimal pl-5">
                          {guide.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>

                        <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600">
                            <span>Was this guide helpful?</span>
                            <button
                              type="button"
                              onClick={() => handleVote(guide.id, 'yes')}
                              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                                vote === 'yes'
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              <ThumbsUp className="w-3.5 h-3.5" aria-hidden="true" />
                              Yes
                            </button>
                            <button
                              type="button"
                              onClick={() => handleVote(guide.id, 'no')}
                              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                                vote === 'no'
                                  ? 'bg-slate-900 text-white border-slate-900'
                                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              <ThumbsDown className="w-3.5 h-3.5" aria-hidden="true" />
                              Need more help
                            </button>
                            {vote === 'yes' && (
                              <span className="text-emerald-700 font-medium">
                                Glad this helped.
                              </span>
                            )}
                            {vote === 'no' && (
                              <button
                                type="button"
                                onClick={() =>
                                  document
                                    .getElementById('direct-support')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                                }
                                className="text-[#0066FF] font-medium hover:underline cursor-pointer"
                              >
                                Send us a direct support ticket below
                              </button>
                            )}
                          </div>

                          {guide.relatedAction && (
                            <button
                              type="button"
                              onClick={() => onNavigate(guide.relatedAction!.page)}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:text-[#0052CC] cursor-pointer self-start sm:self-auto"
                            >
                              {guide.relatedAction.label}
                              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Troubleshooting Diagnostics */}
      <section id="troubleshooting" className="border-b border-slate-200 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0066FF]">
              <Wrench className="w-4 h-4" aria-hidden="true" />
              <span>Troubleshooting Diagnostics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
              Fix Common App &amp; Delivery Issues
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Follow these step-by-step checks for offline delivery, notifications, encrypted calls,
              and subscription billing before opening a ticket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TROUBLESHOOTING_ITEMS.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-semibold text-slate-950">Symptom: </span>
                      {item.symptom}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-950">Likely cause: </span>
                      {item.cause}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Resolution Steps
                    </p>
                    <ol className="space-y-2 text-sm text-slate-700 leading-relaxed list-decimal pl-5">
                      {item.resolutionSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">{item.ticketCategory}</span>
                  <button
                    type="button"
                    onClick={() => handleReportTroubleshootingIssue(item.ticketCategory)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0066FF] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full transition-colors cursor-pointer shrink-0"
                  >
                    Still stuck? Report this issue
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Security FAQs */}
      <section id="security-faqs" className="border-b border-slate-200 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0066FF]">
                <Lock className="w-4 h-4" aria-hidden="true" />
                <span>Security &amp; Encryption FAQs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                Cryptography, Storage &amp; Account Protection
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Direct answers on device-only offline storage, post-quantum encryption, hardware key
                enclaves, and vulnerability reporting.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => onNavigate('privacy-policy')}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onNavigate('security-disclosure')}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full transition-colors cursor-pointer"
              >
                Security Disclosure Policy
              </button>
            </div>
          </div>

          <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
            {SECURITY_FAQS.map((faq) => {
              const isOpen = openSecurityFaqId === faq.id;
              return (
                <div key={faq.id} className="bg-white">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenSecurityFaqId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-base font-display font-semibold text-slate-950">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50/70 border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Account Safety Checklist + Transparent Release Status */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Interactive Account Safety Checklist */}
          <div id="safety-checklist" className="lg:col-span-6 space-y-5 scroll-mt-24">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0066FF]">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Account Safety Self-Check</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-950">
                  Stay Safe on Barta
                </h2>
              </div>
              <span className="text-xs font-mono-tech font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-full">
                {checkedSafetyIds.length} / {ACCOUNT_SAFETY_CHECKLIST.length} checked
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-200 overflow-hidden">
              {ACCOUNT_SAFETY_CHECKLIST.map((item) => {
                const checked = checkedSafetyIds.includes(item.id);
                return (
                  <label
                    key={item.id}
                    className="flex items-start gap-3.5 p-4 sm:p-5 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSafetyItem(item.id)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0066FF] focus:ring-[#0066FF]"
                    />
                    <span className="space-y-0.5">
                      <span
                        className={`block text-sm font-semibold ${
                          checked ? 'text-emerald-700' : 'text-slate-950'
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="block text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.detail}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Transparent Release Status */}
          <div id="release-status" className="lg:col-span-6 space-y-5 scroll-mt-24">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-[#0066FF]">Release Transparency</p>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-950">
                Current Release Status
              </h2>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-200 overflow-hidden">
              {RELEASE_STATUS_ITEMS.map((item) => (
                <div key={item.platform} className="p-4 sm:p-5 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-display font-semibold text-slate-950">
                      {item.platform}
                    </h3>
                    <span
                      className={`text-xs font-medium px-3 py-0.5 rounded-full border ${stageStyle(
                        item.stage
                      )}`}
                    >
                      {item.stage}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
              >
                Check Get Barta / Store Listings
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('faq')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                Browse Full FAQ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Support Contact Form & Escalation Channels */}
      <section id="direct-support" className="bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels Sidebar */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#0066FF]">Direct Support</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                Contact Our Support Team
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Submit a support request with your device platform and topic, or reach a dedicated
                Barta desk directly by email.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 space-y-4">
              <h3 className="text-sm font-display font-semibold text-slate-950">
                Dedicated Assistance Desks
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-slate-500">User Support &amp; Billing Help</dt>
                  <dd>
                    <a
                      href={`mailto:${SITE_CONFIG.emails.support}`}
                      className="inline-flex items-center gap-1.5 font-medium text-[#0066FF] hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                      {SITE_CONFIG.emails.support}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Security &amp; Phishing Reports</dt>
                  <dd>
                    <a
                      href={`mailto:${SITE_CONFIG.emails.security}`}
                      className="inline-flex items-center gap-1.5 font-medium text-[#0066FF] hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                      {SITE_CONFIG.emails.security}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Privacy &amp; Data Protection (DPO)</dt>
                  <dd>
                    <a
                      href={`mailto:${SITE_CONFIG.emails.privacy}`}
                      className="inline-flex items-center gap-1.5 font-medium text-[#0066FF] hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                      {SITE_CONFIG.emails.privacy}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 space-y-1.5">
              <p className="font-semibold text-slate-900">Privacy Reminder</p>
              <p className="leading-relaxed">
                Never include private encryption keys, payment card numbers, or OTP codes in any
                support message. Barta support will never request them.
              </p>
            </div>
          </div>

          {/* Interactive Support Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold text-slate-950">
                  Submit a Support Request
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Generates a reference ID and routes your details to{' '}
                  <span className="font-medium text-slate-900">{SITE_CONFIG.emails.support}</span>.
                </p>
              </div>

              {submittedTicket ? (
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
                      <h4 className="text-base font-display font-semibold text-slate-950">
                        Support Request Submitted ({submittedTicket.referenceId})
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Your request has been logged for{' '}
                        <span className="font-medium text-slate-900">
                          {SITE_CONFIG.emails.support}
                        </span>
                        . You can also open it directly in your email client or copy the formatted
                        summary below.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 space-y-1.5">
                    <p>
                      <span className="font-medium text-slate-900">Reference ID:</span>{' '}
                      <span className="font-mono-tech">{submittedTicket.referenceId}</span>
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">Category:</span>{' '}
                      {submittedTicket.category}
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">Platform:</span>{' '}
                      {submittedTicket.platform}
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">From:</span>{' '}
                      {submittedTicket.name} ({submittedTicket.email})
                    </p>
                    <p className="pt-2 border-t border-slate-100 whitespace-pre-line">
                      {submittedTicket.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={buildTicketMailto(submittedTicket)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      Open in Email Client
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyTicket}
                      className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                    >
                      {copiedTicket ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                          Copied Summary
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" aria-hidden="true" />
                          Copy Ticket Summary
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleResetTicket}
                      className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      New Support Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitTicket} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="support-name"
                        className="block text-sm font-medium text-slate-800 mb-1.5"
                      >
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="support-name"
                        type="text"
                        value={ticketForm.name}
                        onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                        placeholder="Your name"
                        aria-invalid={Boolean(ticketErrors.name)}
                        className="w-full px-3.5 py-2.5 min-h-[42px] text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
                      />
                      {ticketErrors.name && (
                        <p className="mt-1 text-xs text-red-600" role="alert">
                          {ticketErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="support-email"
                        className="block text-sm font-medium text-slate-800 mb-1.5"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="support-email"
                        type="email"
                        value={ticketForm.email}
                        onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(ticketErrors.email)}
                        className="w-full px-3.5 py-2.5 min-h-[42px] text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
                      />
                      {ticketErrors.email && (
                        <p className="mt-1 text-xs text-red-600" role="alert">
                          {ticketErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="support-category"
                        className="block text-sm font-medium text-slate-800 mb-1.5"
                      >
                        Issue Category <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="support-category"
                        value={ticketForm.category}
                        onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 min-h-[42px] text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
                      >
                        {TICKET_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="support-platform"
                        className="block text-sm font-medium text-slate-800 mb-1.5"
                      >
                        Device / Platform
                      </label>
                      <select
                        id="support-platform"
                        value={ticketForm.platform}
                        onChange={(e) => setTicketForm({ ...ticketForm, platform: e.target.value })}
                        className="w-full px-3.5 py-2.5 min-h-[42px] text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
                      >
                        {PLATFORM_OPTIONS.map((platform) => (
                          <option key={platform} value={platform}>
                            {platform}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="support-message"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      How can we help? <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="support-message"
                      rows={5}
                      value={ticketForm.message}
                      onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                      placeholder="Describe your question, account safety concern, or issue in detail..."
                      aria-invalid={Boolean(ticketErrors.message)}
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
                    />
                    {ticketErrors.message && (
                      <p className="mt-1 text-xs text-red-600" role="alert">
                        {ticketErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">
                      Support Desk: {SITE_CONFIG.emails.support}
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 min-h-[42px] text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Submit Support Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Call-to-Action Banner */}
      <section id="support-cta" className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Need Direct Assistance?
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Reach the Barta Support Team Directly
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Didn&apos;t find the answer in our guides, troubleshooting checks, or security FAQs?
                Open a ticket above, message us on the Contact page, or email{' '}
                <span className="text-white font-medium">{SITE_CONFIG.emails.support}</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() =>
                  document.getElementById('direct-support')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors cursor-pointer"
              >
                Submit Support Ticket
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-full transition-colors cursor-pointer"
              >
                Go to Contact Page
              </button>
              <a
                href={`mailto:${SITE_CONFIG.emails.support}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white rounded-full transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {SITE_CONFIG.emails.support}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
