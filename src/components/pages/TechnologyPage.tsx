import { useState } from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { TECHNOLOGY_CAPABILITIES, type CapabilityItem } from '../../data/siteData';
import type { PageId } from '../../utils/routing';

interface TechnologyPageProps {
  onNavigate: (page: PageId) => void;
}

type StageFilter = 'All' | CapabilityItem['stage'];

export function TechnologyPage({ onNavigate }: TechnologyPageProps) {
  const [stageFilter, setStageFilter] = useState<StageFilter>('All');

  const visibleCapabilities =
    stageFilter === 'All'
      ? TECHNOLOGY_CAPABILITIES
      : TECHNOLOGY_CAPABILITIES.filter((item) => item.stage === stageFilter);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-950 text-white border-b border-slate-800">
        <div className="barta-grid-dark">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-5">
            <p className="text-sm font-medium text-[#60A5FA]">Technology &amp; Engineering</p>
            <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight max-w-3xl text-balance">
              Engineering privacy with clarity, discipline, and verifiable claims.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We build on established cryptographic standards, minimize operational data exposure,
              and clearly separate implemented architecture from active development and post-quantum
              research.
            </p>
          </div>
        </div>
      </section>

      {/* Capability Matrix with Interactive Stage Filter */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                Implementation Status &amp; Architecture Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Filter by maturity stage to review what is currently implemented, under active
                development, or part of long-term research.
              </p>
            </div>

            <div
              role="group"
              aria-label="Filter technology capabilities by stage"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-full self-start"
            >
              {(['All', 'Implemented', 'In Development', 'Research Initiative'] as const).map(
                (stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setStageFilter(stage)}
                    className={`px-3.5 py-1.5 min-h-[36px] text-xs font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                      stageFilter === stage
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {stage}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleCapabilities.map((item) => (
              <div
                key={item.title}
                className="border border-slate-200 rounded-xl p-6 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span
                    className={`font-semibold ${
                      item.stage === 'Implemented'
                        ? 'text-emerald-700'
                        : item.stage === 'In Development'
                        ? 'text-[#0066FF]'
                        : 'text-slate-700'
                    }`}
                  >
                    {item.stage}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-slate-950">{item.title}</h3>
                <p className="text-sm font-medium text-slate-800">{item.summary}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plain-Language Explainer: Post-Quantum Cryptography */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 text-balance">
              Post-Quantum Cryptography, Explained Simply
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Today&rsquo;s secure messaging relies on mathematical problems—like factoring large
              numbers or elliptic-curve math—that ordinary computers cannot solve in a practical
              amount of time.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Future large-scale quantum computers, if built, could solve some of those specific
              math problems much faster. Even before such computers exist, encrypted traffic
              recorded today could potentially be stored and decrypted years later (&ldquo;harvest
              now, decrypt later&rdquo;).
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              <strong>Post-Quantum Cryptography (PQC)</strong> uses newer mathematical approaches—such
              as lattice-based key encapsulation—designed to stay difficult for both classical and
              quantum computers. At Barta, our research focuses on <em>hybrid</em> key exchange that
              pairs proven classical cryptography with standardized PQC candidates so security does
              not depend solely on a new algorithm alone.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2.5 text-slate-950">
              <ShieldAlert className="w-5 h-5 text-[#0066FF]" aria-hidden="true" />
              <h3 className="text-base font-display font-semibold">
                Honest Security Boundaries
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <li>
                • We do <strong>not</strong> claim Barta is &ldquo;quantum-proof&rdquo; or
                impossible to hack.
              </li>
              <li>
                • Cryptographic research prototypes are clearly distinguished from production-ready,
                independently audited software.
              </li>
              <li>
                • Endpoint device safety, dependency hygiene, and timely updates matter just as much
                as mathematical algorithms.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Infrastructure, Data Protection & Reliability */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-6 space-y-2.5">
              <h3 className="text-lg font-display font-semibold text-slate-950">
                Data Protection
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Minimal operational state, strict access separation, and zero reliance on ad-tech
                tracking or user profiling.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 space-y-2.5">
              <h3 className="text-lg font-display font-semibold text-slate-950">
                Secure Infrastructure
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hardened static web delivery, automated dependency checks, and least-privilege
                deployment pipelines.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 space-y-2.5">
              <h3 className="text-lg font-display font-semibold text-slate-950">
                Performance &amp; Reliability
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lightweight payloads and resilient delivery patterns designed for both high-speed
                fiber and variable mobile connections across India.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('security')}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors cursor-pointer"
            >
              Read Security &amp; Privacy Philosophy
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('partnerships')}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              Research Partnerships
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
