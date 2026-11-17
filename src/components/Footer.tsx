import { SITE_CONFIG } from '../data/siteConfig';
import { FOOTER_COLUMNS, type PageId } from '../utils/routing';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Company Info Column */}
          <div className="md:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2.5 text-lg font-display font-bold text-white cursor-pointer"
            >
              <img
                src={SITE_CONFIG.logoSrc}
                alt="Barta logo"
                width={28}
                height={28}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-lg object-cover"
              />
              <span>{SITE_CONFIG.brandName}</span>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.overview.companyName} is an Indian technology company building secure,
              private, and future-ready digital communication software.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-slate-400">
              <p>
                <span className="text-slate-300 font-medium">Website:</span>{' '}
                <a
                  href={SITE_CONFIG.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  {SITE_CONFIG.domain}
                </a>
              </p>
              <p>
                <span className="text-slate-300 font-medium">General:</span>{' '}
                <a
                  href={`mailto:${SITE_CONFIG.emails.general}`}
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  {SITE_CONFIG.emails.general}
                </a>
              </p>
              <p>
                <span className="text-slate-300 font-medium">Security:</span>{' '}
                <a
                  href={`mailto:${SITE_CONFIG.emails.security}`}
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  {SITE_CONFIG.emails.security}
                </a>
              </p>
              <p className="text-slate-400 pt-1">
                {SITE_CONFIG.overview.country} · {SITE_CONFIG.overview.industry}
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading} className="space-y-3">
                <h2 className="text-sm font-display font-semibold text-white">
                  {col.heading}
                </h2>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#/${link.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(link.id);
                        }}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Official Channels */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {SITE_CONFIG.overview.companyName} All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {SITE_CONFIG.socials.map((social) =>
              social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ) : (
                <span key={social.label} className="text-slate-400">
                  {social.label}: {social.handle}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
