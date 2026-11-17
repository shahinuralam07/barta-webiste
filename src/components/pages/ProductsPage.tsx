import { useState } from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { PRODUCT_FEATURES, SUBSCRIPTION_PLANS } from '../../data/siteData';
import type { PageId } from '../../utils/routing';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
}

type StoreOption = 'google-play' | 'apple-app-store';

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const { googlePlayUrl, appleAppStoreUrl, webReleaseNote } = SITE_CONFIG.appListings;
  const [selectedPendingStore, setSelectedPendingStore] = useState<StoreOption | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  return (
    <div className="bg-white">
      {/* Simple, Clean Product Hero + Get Barta Store Options */}
      <section id="get-barta" className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center space-y-6">
          <p className="text-sm font-medium text-[#0066FF]">Get Barta</p>

          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950 text-balance">
            Private messaging, built for clarity.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Post-quantum end-to-end encrypted communication with zero server message storage and no
            ad tracking. Available for Android and iOS through official stores.
          </p>

          {/* Direct Store Options */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {googlePlayUrl ? (
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 min-h-[46px] text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7l.1.1 9-9v-.2l-9-9-.1.1zm12 12l-3-3v-.2l3-3 .1.1 3.5 2c1 .6 1 1.5 0 2.1l-3.5 2-.1-.1zm-11.1 8l9.8-5.6-2.9-2.9-6.9 8.5zm0-20.6l6.9 8.5 2.9-2.9-9.8-5.6z" />
                </svg>
                <span>Google Play</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() =>
                  setSelectedPendingStore(
                    selectedPendingStore === 'google-play' ? null : 'google-play'
                  )
                }
                aria-expanded={selectedPendingStore === 'google-play'}
                className={`inline-flex items-center gap-2.5 px-6 py-3 min-h-[46px] text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                  selectedPendingStore === 'google-play'
                    ? 'bg-[#0066FF] text-white'
                    : 'bg-slate-950 text-white hover:bg-slate-800'
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7l.1.1 9-9v-.2l-9-9-.1.1zm12 12l-3-3v-.2l3-3 .1.1 3.5 2c1 .6 1 1.5 0 2.1l-3.5 2-.1-.1zm-11.1 8l9.8-5.6-2.9-2.9-6.9 8.5zm0-20.6l6.9 8.5 2.9-2.9-9.8-5.6z" />
                </svg>
                <span>Google Play</span>
              </button>
            )}

            {appleAppStoreUrl ? (
              <a
                href={appleAppStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 min-h-[46px] text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.7 19.5c-.8 1.2-1.7 2.4-3 2.4-1.3 0-1.7-.8-3.2-.8-1.5 0-2 .8-3.2.8-1.3 0-2.3-1.3-3.1-2.5-1.7-2.5-3-7-1.2-10 .9-1.5 2.4-2.4 4.1-2.5 1.3 0 2.5.9 3.2.9.8 0 2.2-1.1 3.7-.9.6 0 2.4.3 3.6 2-.1.1-2.1 1.2-2.1 3.7 0 2.9 2.5 3.9 2.6 3.9-.1.1-.4 1.4-1.6 3zm-3.1-14c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4z" />
                </svg>
                <span>Apple App Store</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() =>
                  setSelectedPendingStore(
                    selectedPendingStore === 'apple-app-store' ? null : 'apple-app-store'
                  )
                }
                aria-expanded={selectedPendingStore === 'apple-app-store'}
                className={`inline-flex items-center gap-2.5 px-6 py-3 min-h-[46px] text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                  selectedPendingStore === 'apple-app-store'
                    ? 'bg-[#0066FF] text-white'
                    : 'bg-white text-slate-950 border border-slate-300 hover:bg-slate-100'
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.7 19.5c-.8 1.2-1.7 2.4-3 2.4-1.3 0-1.7-.8-3.2-.8-1.5 0-2 .8-3.2.8-1.3 0-2.3-1.3-3.1-2.5-1.7-2.5-3-7-1.2-10 .9-1.5 2.4-2.4 4.1-2.5 1.3 0 2.5.9 3.2.9.8 0 2.2-1.1 3.7-.9.6 0 2.4.3 3.6 2-.1.1-2.1 1.2-2.1 3.7 0 2.9 2.5 3.9 2.6 3.9-.1.1-.4 1.4-1.6 3zm-3.1-14c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4z" />
                </svg>
                <span>Apple App Store</span>
              </button>
            )}
          </div>

          {selectedPendingStore && (
            <div
              role="status"
              aria-live="polite"
              className="mt-6 max-w-2xl mx-auto text-left bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 barta-fade-up"
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-950">
                  {selectedPendingStore === 'google-play'
                    ? 'Google Play Listing Pending Public Release'
                    : 'Apple App Store Listing Pending Public Release'}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{webReleaseNote}</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Notify Me
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Subscription Plans (₹99 and ₹199) */}
      <section id="subscription-plans" className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <p className="text-sm font-medium text-[#0066FF]">Plans</p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
              Simple Monthly Subscriptions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Transparent pricing that keeps Barta 100% ad-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {SUBSCRIPTION_PLANS.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 border ${
                    plan.featured
                      ? 'bg-slate-950 text-white border-slate-900'
                      : 'bg-white text-slate-900 border-slate-200'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p
                        className={`text-xs font-medium ${
                          plan.featured ? 'text-[#60A5FA]' : 'text-[#0066FF]'
                        }`}
                      >
                        {plan.featured ? 'Expanded Capacity' : 'Everyday Essential'}
                      </p>
                      <h3 className="text-xl font-display font-bold">{plan.name}</h3>
                    </div>

                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-display font-bold font-mono-tech">
                        ₹{plan.priceInr}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.featured ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        / {plan.billingPeriod}
                      </span>
                    </div>

                    <p
                      className={`text-sm leading-relaxed ${
                        plan.featured ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {plan.summary}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {plan.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              plan.featured ? 'text-[#60A5FA]' : 'text-[#0066FF]'
                            }`}
                            aria-hidden="true"
                          />
                          <span className={plan.featured ? 'text-slate-200' : 'text-slate-700'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPlanId(isSelected ? null : plan.id)}
                      className={`w-full py-3 px-6 min-h-[44px] text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                        plan.featured
                          ? 'bg-[#0066FF] text-white hover:bg-[#0052CC]'
                          : 'bg-slate-950 text-white hover:bg-slate-800'
                      }`}
                    >
                      {isSelected ? `Selected ₹${plan.priceInr} Plan` : `Choose ₹${plan.priceInr} Plan`}
                    </button>

                    {isSelected && (
                      <p
                        role="status"
                        className={`text-xs leading-relaxed ${
                          plan.featured ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        Subscriptions are managed in-app via Google Play or Apple App Store upon
                        release.{' '}
                        <button
                          type="button"
                          onClick={() => onNavigate('contact')}
                          className="underline font-medium cursor-pointer"
                        >
                          Contact us for early access
                        </button>
                        .
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-slate-500">
            Subscriptions follow standard store renewal rules and our{' '}
            <button
              type="button"
              onClick={() => onNavigate('refund-policy')}
              className="text-[#0066FF] hover:underline font-medium cursor-pointer"
            >
              Subscription Cancellation &amp; No-Refund Policy
            </button>
            .
          </p>
        </div>
      </section>

      {/* Minimal Capabilities Overview */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-10">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl font-display font-bold text-slate-950">What Barta Includes</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Clear status for every capability—no unverified claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {PRODUCT_FEATURES.map((feat) => (
              <div key={feat.title} className="space-y-1.5 border-t border-slate-200 pt-4">
                <p className="text-xs font-medium text-[#0066FF]">{feat.status}</p>
                <h3 className="text-base font-display font-semibold text-slate-950">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
