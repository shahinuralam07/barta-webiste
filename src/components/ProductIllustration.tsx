import { useState } from 'react';
import { Lock, ShieldCheck, FileText, Send } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

type PreviewTab = 'messaging' | 'media' | 'verification';

export function ProductIllustration() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('messaging');

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Top interactive mode selector */}
      <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <img
            src={SITE_CONFIG.logoSrc}
            alt="Barta app icon"
            width={24}
            height={24}
            referrerPolicy="no-referrer"
            className="w-6 h-6 rounded-md object-cover"
          />
          <span className="text-sm font-display font-semibold text-slate-900">
            Barta Interface Concept
          </span>
        </div>
        <div
          role="tablist"
          aria-label="Product interface views"
          className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-full"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'messaging'}
            onClick={() => setActiveTab('messaging')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'messaging'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Chat
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'media'}
            onClick={() => setActiveTab('media')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'media'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Media
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'verification'}
            onClick={() => setActiveTab('verification')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'verification'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Safety
          </button>
        </div>
      </div>

      {/* Simulated lightweight conversation canvas */}
      <div className="p-5 space-y-4 bg-white min-h-[296px] flex flex-col justify-between">
        {activeTab === 'messaging' && (
          <div className="space-y-3.5 barta-fade-up">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span>Ananya Rao · Direct Thread</span>
              <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
                <Lock className="w-3.5 h-3.5 text-[#0066FF]" aria-hidden="true" />
                Private Session
              </span>
            </div>

            <div className="max-w-[82%] bg-slate-100 text-slate-800 text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-tl-sm">
              Shared the architecture notes for the Bengaluru review. Minimal metadata retained.
            </div>

            <div className="ml-auto max-w-[82%] bg-[#0066FF] text-white text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-tr-sm">
              Received cleanly. Let us confirm the key verification checklist before testing.
            </div>

            <div className="max-w-[78%] bg-slate-100 text-slate-800 text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-tl-sm">
              Confirmed. Works smoothly even on low-bandwidth mobile connections.
            </div>
          </div>
        )}

        {activeTab === 'media' && (
          <div className="space-y-3.5 barta-fade-up">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span>Encrypted Attachment Preview</span>
              <span>Integrity Checked</span>
            </div>

            <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-900 truncate">
                  Barta-Protocol-Overview.pdf
                </p>
                <p className="text-xs text-slate-500 font-mono-tech">
                  412 KB · Client-side envelope
                </p>
              </div>
            </div>

            <div className="ml-auto max-w-[85%] bg-[#0066FF] text-white text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-tr-sm">
              Documents and images are packaged with lightweight integrity verification before transfer.
            </div>
          </div>
        )}

        {activeTab === 'verification' && (
          <div className="space-y-3.5 barta-fade-up">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span>Session Verification</span>
              <span>Privacy by Design</span>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2.5">
              <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
                <ShieldCheck className="w-4 h-4 text-[#0066FF]" aria-hidden="true" />
                <span>Verification Fingerprint</span>
              </div>
              <p className="text-xs font-mono-tech text-slate-600 tracking-wider leading-relaxed bg-white border border-slate-200 rounded-lg p-2.5">
                4819 · 7024 · 1952 · 8830
                <br />
                6140 · 3391 · 5204 · 9176
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Participants can compare safety numbers out-of-band to verify key authenticity without relying on opaque central trust.
              </p>
            </div>
          </div>
        )}

        {/* Composer bar illustration */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex-1 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-400">
            Write a private message...
          </div>
          <div
            aria-hidden="true"
            className="w-9 h-9 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0"
          >
            <Send className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
