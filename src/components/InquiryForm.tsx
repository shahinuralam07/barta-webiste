import { useState, type FormEvent } from 'react';
import { CheckCircle2, Copy, Loader2, Mail, Send } from 'lucide-react';
import {
  buildMailtoHref,
  validateInquiryForm,
  type InquiryFormInput,
} from '../utils/validation';

interface InquiryFormProps {
  recipientEmail: string;
  categories: string[];
  defaultCategory: string;
  submitLabel?: string;
  heading?: string;
  description?: string;
  enableDirectEmailSend?: boolean;
}

type SendStatus = 'idle' | 'sending' | 'sent' | 'fallback';

export function InquiryForm({
  recipientEmail,
  categories,
  defaultCategory,
  submitLabel = 'Send Message',
  heading,
  description,
  enableDirectEmailSend = false,
}: InquiryFormProps) {
  const [formState, setFormState] = useState<InquiryFormInput>({
    name: '',
    email: '',
    organization: '',
    category: defaultCategory,
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormInput, string>>>({});
  const [submittedData, setSubmittedData] = useState<InquiryFormInput | null>(null);
  const [sendStatus, setSendStatus] = useState<SendStatus>('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validation = validateInquiryForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmittedData(null);
      setSendStatus('idle');
      return;
    }

    setErrors({});
    const payload = { ...formState };

    if (!enableDirectEmailSend) {
      setSubmittedData(payload);
      setSendStatus('fallback');
      return;
    }

    setSendStatus('sending');
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: payload.name.trim(),
            email: payload.email.trim(),
            organization: payload.organization?.trim() || 'Not provided',
            topic: payload.category,
            message: payload.message.trim(),
            _subject: `[Barta Contact] ${payload.category} — ${payload.name.trim()}`,
            _template: 'table',
            _captcha: 'false',
          }),
        }
      );

      if (response.ok) {
        setSubmittedData(payload);
        setSendStatus('sent');
      } else {
        setSubmittedData(payload);
        setSendStatus('fallback');
      }
    } catch {
      setSubmittedData(payload);
      setSendStatus('fallback');
    }
  };

  const handleReset = () => {
    setFormState({
      name: '',
      email: '',
      organization: '',
      category: defaultCategory,
      message: '',
    });
    setErrors({});
    setSubmittedData(null);
    setSendStatus('idle');
    setCopied(false);
  };

  const handleCopySummary = async () => {
    if (!submittedData) return;
    const summaryText = [
      `To: ${recipientEmail}`,
      `Topic: ${submittedData.category}`,
      `From: ${submittedData.name} <${submittedData.email}>`,
      submittedData.organization ? `Organization: ${submittedData.organization}` : null,
      '',
      submittedData.message,
    ]
      .filter((line): line is string => line !== null)
      .join('\n');

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const mailtoHref = submittedData ? buildMailtoHref(recipientEmail, submittedData) : '#';

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
      {heading && (
        <div className="mb-6">
          <h2 className="text-xl font-display font-semibold text-slate-950">{heading}</h2>
          {description && (
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{description}</p>
          )}
        </div>
      )}

      {submittedData ? (
        <div
          role="status"
          aria-live="polite"
          className="space-y-5 bg-slate-50 border border-slate-200 rounded-xl p-5"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              className={`w-5 h-5 shrink-0 mt-0.5 ${
                sendStatus === 'sent' ? 'text-emerald-600' : 'text-[#0066FF]'
              }`}
              aria-hidden="true"
            />
            <div className="space-y-1">
              <h3 className="text-base font-display font-semibold text-slate-950">
                {sendStatus === 'sent'
                  ? `Message sent to ${recipientEmail}`
                  : 'Enquiry summary ready to send'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {sendStatus === 'sent' ? (
                  <>
                    Your details have been submitted to{' '}
                    <span className="font-medium text-slate-900">{recipientEmail}</span>. Our team
                    will reply to{' '}
                    <span className="font-medium text-slate-900">{submittedData.email}</span>.
                  </>
                ) : (
                  <>
                    Direct email delivery could not be completed from this browser session. Open
                    your email client below or copy the formatted message to send directly to{' '}
                    <span className="font-medium text-slate-900">{recipientEmail}</span>.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 space-y-1.5">
            <p>
              <span className="font-medium text-slate-900">To:</span> {recipientEmail}
            </p>
            <p>
              <span className="font-medium text-slate-900">Topic:</span> {submittedData.category}
            </p>
            <p>
              <span className="font-medium text-slate-900">Name:</span> {submittedData.name}
            </p>
            <p>
              <span className="font-medium text-slate-900">Reply Email:</span> {submittedData.email}
            </p>
            {submittedData.organization && (
              <p>
                <span className="font-medium text-slate-900">Organization:</span>{' '}
                {submittedData.organization}
              </p>
            )}
            <p className="pt-2 border-t border-slate-100 whitespace-pre-line">
              {submittedData.message}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {sendStatus === 'sent' ? (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            ) : (
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Open Email Client
              </a>
            )}

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <Copy className="w-4 h-4" aria-hidden="true" />
              {copied ? 'Copied to Clipboard' : 'Copy Summary'}
            </button>

            {sendStatus !== 'sent' && (
              <button
                type="button"
                onClick={() => {
                  setSubmittedData(null);
                  setSendStatus('idle');
                }}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Edit Enquiry
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="inquiry-name"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                id="inquiry-name"
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Your full name"
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
                htmlFor="inquiry-email"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="inquiry-email"
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="name@organization.com"
                aria-invalid={Boolean(errors.email)}
                className="w-full px-3.5 py-2.5 min-h-[42px] text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="inquiry-organization"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Organization (Optional)
              </label>
              <input
                id="inquiry-organization"
                type="text"
                value={formState.organization ?? ''}
                onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                placeholder="Company, university, or team"
                className="w-full px-3.5 py-2.5 min-h-[42px] text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-category"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Enquiry Topic <span className="text-red-600">*</span>
              </label>
              <select
                id="inquiry-category"
                value={formState.category}
                onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                aria-invalid={Boolean(errors.category)}
                className="w-full px-3.5 py-2.5 min-h-[42px] text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-xs text-red-600" role="alert">
                  {errors.category}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="inquiry-message"
              className="block text-sm font-medium text-slate-800 mb-1.5"
            >
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="inquiry-message"
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Share details of your enquiry, proposal, or support question..."
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
              {enableDirectEmailSend
                ? `Sends directly to ${recipientEmail}`
                : `Validated locally in your browser · Direct email: ${recipientEmail}`}
            </p>
            <button
              type="submit"
              disabled={sendStatus === 'sending'}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 min-h-[42px] text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052CC] disabled:opacity-60 rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {sendStatus === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  {enableDirectEmailSend && <Send className="w-4 h-4" aria-hidden="true" />}
                  {submitLabel}
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
