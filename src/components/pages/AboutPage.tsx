import { useState } from 'react';
import { ArrowRight, Check, Pencil } from 'lucide-react';
import { SITE_CONFIG, type CompanyOverviewConfig } from '../../data/siteConfig';
import { ABOUT_VALUES } from '../../data/siteData';
import type { PageId } from '../../utils/routing';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [overview, setOverview] = useState<CompanyOverviewConfig>(SITE_CONFIG.overview);
  const [editingOverview, setEditingOverview] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-4">
          <p className="text-sm font-medium text-[#0066FF]">About Us</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950 max-w-3xl text-balance">
            An Indian technology company building trustworthy communication software.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Barta Technology Pvt. Ltd. was founded around a clear conviction: everyday digital
            communication should respect user privacy, run reliably across diverse networks, and be
            built with transparent engineering.
          </p>
        </div>
      </section>

      {/* Story + Company Overview (with editable fields) */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-display font-bold text-slate-950">Our Story</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Digital communication connects families, teams, students, and builders across India
                and around the world. Yet many modern messaging platforms treat user privacy as an
                afterthought or overwhelm people with cluttered interfaces.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Barta began with the goal of building a calm, disciplined alternative from India—an
                ambitious software company combining user-first product craft with modern
                cryptographic research and accountable data practices.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="border border-slate-200 rounded-xl p-6 space-y-2 bg-slate-50">
                <h3 className="text-base font-display font-semibold text-slate-950">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To make secure and accessible digital communication available to everyone through
                  innovation, responsible technology, and user-first design.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 space-y-2 bg-slate-50">
                <h3 className="text-base font-display font-semibold text-slate-950">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To contribute to a future where digital communication is private, intelligent,
                  reliable, and accessible worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Company Overview Card with Editable Fields */}
          <div className="lg:col-span-5">
            <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-slate-50 space-y-5">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-display font-semibold text-slate-950">
                  Company Overview
                </h2>
                <button
                  type="button"
                  onClick={() => setEditingOverview((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0066FF] hover:text-[#0052CC] cursor-pointer"
                >
                  {editingOverview ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      Done
                    </>
                  ) : (
                    <>
                      <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
                      Edit Fields
                    </>
                  )}
                </button>
              </div>

              {editingOverview ? (
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="overview-company"
                      className="block text-xs font-medium text-slate-600 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      id="overview-company"
                      type="text"
                      value={overview.companyName}
                      onChange={(e) => setOverview({ ...overview, companyName: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="overview-country"
                      className="block text-xs font-medium text-slate-600 mb-1"
                    >
                      Country
                    </label>
                    <input
                      id="overview-country"
                      type="text"
                      value={overview.country}
                      onChange={(e) => setOverview({ ...overview, country: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="overview-industry"
                      className="block text-xs font-medium text-slate-600 mb-1"
                    >
                      Industry
                    </label>
                    <input
                      id="overview-industry"
                      type="text"
                      value={overview.industry}
                      onChange={(e) => setOverview({ ...overview, industry: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="overview-focus"
                      className="block text-xs font-medium text-slate-600 mb-1"
                    >
                      Focus
                    </label>
                    <input
                      id="overview-focus"
                      type="text"
                      value={overview.focus}
                      onChange={(e) => setOverview({ ...overview, focus: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>
                </div>
              ) : (
                <dl className="divide-y divide-slate-200 text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">Company Name</dt>
                    <dd className="font-medium text-slate-950 text-right">
                      {overview.companyName}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">Country</dt>
                    <dd className="font-medium text-slate-950 text-right">{overview.country}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">Industry</dt>
                    <dd className="font-medium text-slate-950 text-right">{overview.industry}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-slate-500">Focus</dt>
                    <dd className="font-medium text-slate-950 text-right">{overview.focus}</dd>
                  </div>
                </dl>
              )}

              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                Corporate profile values are centrally configured and presented without unverified
                certifications, awards, or placeholder registration records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
              Our Values
            </h2>
            <p className="text-base text-slate-600">
              Principles that shape product decisions, engineering trade-offs, and external
              communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT_VALUES.map((val) => (
              <div key={val.title} className="border border-slate-200 rounded-xl p-6 space-y-2">
                <h3 className="text-lg font-display font-semibold text-slate-950">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation, Privacy, India Ecosystem */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2.5">
              <h3 className="text-lg font-display font-semibold text-slate-950">
                Our Approach to Innovation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We favor durable engineering over hype: modular architecture, reproducible security
                reviews, and thoughtful performance for real-world devices and networks.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2.5">
              <h3 className="text-lg font-display font-semibold text-slate-950">
                Our Commitment to Privacy
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Privacy-by-design and data minimization guide what we store, what we encrypt, and
                how user controls work—supported by open vulnerability disclosure.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2.5">
              <h3 className="text-lg font-display font-semibold text-slate-950">
                India&rsquo;s Technology Ecosystem
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                From India to the world, Barta aims to contribute practical privacy engineering,
                applied cryptography research, and globally competitive software craftsmanship.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('technology')}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors cursor-pointer"
            >
              Explore Our Technology
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('careers')}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              Careers at Barta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
