import { ArrowRight, Lock, Shield, Cpu, Layers } from 'lucide-react';
import type { PageId } from '../../utils/routing';
import { SITE_CONFIG } from '../../data/siteConfig';
import { WHY_BARTA_CARDS } from '../../data/siteData';
import { PhoneHeroDisplay } from '../PhoneHeroDisplay';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="barta-grid-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <p className="text-sm font-medium text-[#0066FF]">
                  Barta Technology Pvt. Ltd. · India
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold tracking-tight text-slate-950 leading-[1.08] text-balance">
                  Communication, Reimagined.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Building secure, private, and intelligent communication experiences for a more
                  connected world.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => onNavigate('products')}
                    className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Discover Barta
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('technology')}
                    className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 rounded-full transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Explore Our Technology
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <PhoneHeroDisplay />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Barta + Mission & Vision */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-950 text-balance">
                Privacy as a foundation, not an add-on.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Barta is an Indian technology initiative focused on building secure, accessible,
                and future-ready digital communication experiences. We believe privacy should be
                fundamental to communication, not an optional feature.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] cursor-pointer"
                >
                  Read our story and corporate overview
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2.5">
                <h3 className="text-base font-display font-semibold text-slate-950">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To make secure and accessible digital communication available to everyone through
                  innovation, responsible technology, and user-first design.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2.5">
                <h3 className="text-base font-display font-semibold text-slate-950">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To contribute to a future where digital communication is private, intelligent,
                  reliable, and accessible worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-950 text-balance">
              Designed for focused, private everyday conversations.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Barta combines calm product design with disciplined security engineering. We share our
              product direction transparently—separating core capabilities from active development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-6 space-y-3 bg-white">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center">
                <Lock className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-display font-semibold text-slate-950">
                Private Messaging &amp; Controls
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clean one-to-one and group messaging built around data minimization, sensible
                privacy defaults, and clear session verification.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 space-y-3 bg-white">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center">
                <Layers className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-display font-semibold text-slate-950">
                Media, Voice &amp; Video Pathways
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lightweight media sharing and real-time voice and video communication are under
                active engineering development for progressive rollout where supported.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 space-y-3 bg-white">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center">
                <Cpu className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-display font-semibold text-slate-950">
                Future-Ready Cryptography
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modular encryption architecture prepared for emerging post-quantum hybrid standards
                and independent security review prior to broad release.
              </p>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] cursor-pointer"
            >
              View full product overview and release status
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Technology Section (Dark Band) */}
      <section className="bg-slate-950 text-white border-b border-slate-800">
        <div className="barta-grid-dark">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[#60A5FA]">
                  <Shield className="w-4 h-4" aria-hidden="true" />
                  <span>Engineering &amp; Research</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white text-balance">
                  Technology Built Around Privacy.
                </h2>

                <p className="text-base text-slate-300 leading-relaxed">
                  Responsible software engineering means relying on well-studied cryptographic
                  primitives, minimizing data exposure, and clearly distinguishing shipped reality
                  from ongoing research.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('technology')}
                    className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors cursor-pointer"
                  >
                    Explore Architecture &amp; PQC Research
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-2">
                  <p className="text-xs font-mono-tech text-[#60A5FA]">01 · Architecture</p>
                  <h3 className="text-base font-display font-semibold text-white">
                    Modern Encryption Architecture
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Standard authenticated encryption and transport protection rather than bespoke,
                    untested ciphers.
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-2">
                  <p className="text-xs font-mono-tech text-[#60A5FA]">02 · Research</p>
                  <h3 className="text-base font-display font-semibold text-white">
                    Post-Quantum Cryptography
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Evaluating hybrid key encapsulation alongside classical algorithms—without
                    exaggerated &ldquo;quantum-proof&rdquo; claims.
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-2">
                  <p className="text-xs font-mono-tech text-[#60A5FA]">03 · Data Discipline</p>
                  <h3 className="text-base font-display font-semibold text-white">
                    Secure Data Handling
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Data minimization built into every layer so unnecessary personal metadata is
                    never collected or monetized.
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-2">
                  <p className="text-xs font-mono-tech text-[#60A5FA]">04 · Verification</p>
                  <h3 className="text-base font-display font-semibold text-white">
                    Responsible Engineering
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Coordinated vulnerability disclosure, timely patching, and readiness for
                    independent third-party audits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Barta? */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-10">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-950">
              Why Barta?
            </h2>
            <p className="text-base text-slate-600">
              Four engineering and product commitments guiding everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_BARTA_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3"
              >
                <span className="text-xs font-mono-tech font-medium text-[#0066FF]">
                  {card.index}
                </span>
                <h3 className="text-lg font-display font-semibold text-slate-950">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2.5 max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-950 text-balance">
                Be Part of the Future of Communication.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Follow our engineering progress, explore the Barta product roadmap, or collaborate
                with our team on security research and ecosystem partnerships.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors whitespace-nowrap cursor-pointer"
              >
                Explore Barta
              </button>
              <button
                type="button"
                onClick={() => onNavigate('partnerships')}
                className="px-6 py-3 min-h-[44px] text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-full transition-colors whitespace-nowrap cursor-pointer"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership — CEO */}
      <section id="leadership" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-8">
          <div className="max-w-xl space-y-2">
            <p className="text-sm font-medium text-[#0066FF]">Leadership</p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-950">
              Guided by Privacy-First Leadership.
            </h2>
          </div>

          <div className="border border-slate-200 rounded-2xl p-6 sm:p-10 bg-slate-50 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              {SITE_CONFIG.leadership.ceo.photoSrc ? (
                <img
                  src={SITE_CONFIG.leadership.ceo.photoSrc}
                  alt={`${SITE_CONFIG.leadership.ceo.name} — ${SITE_CONFIG.leadership.ceo.role}`}
                  loading="lazy"
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover object-top border-2 border-slate-200 shadow-sm bg-white"
                />
              ) : (
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-950 text-white flex flex-col items-center justify-center border-2 border-slate-800 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
                    {SITE_CONFIG.leadership.ceo.name}
                  </span>
                  <span className="mt-1 text-[11px] font-mono-tech tracking-wider text-[#60A5FA]">
                    CEO
                  </span>
                </div>
              )}

              <div className="space-y-1">
                <h3 className="text-xl font-display font-bold text-slate-950">
                  {SITE_CONFIG.leadership.ceo.name}
                </h3>
                <p className="text-sm font-medium text-[#0066FF]">
                  {SITE_CONFIG.leadership.ceo.role}
                </p>
                <p className="text-xs text-slate-500">
                  {SITE_CONFIG.leadership.ceo.organization} · {SITE_CONFIG.leadership.ceo.location}
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              <blockquote className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                &ldquo;{SITE_CONFIG.leadership.ceo.quote}&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {SITE_CONFIG.leadership.ceo.bio}
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[40px] text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
                >
                  About Barta
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[40px] text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                >
                  Contact Office
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
