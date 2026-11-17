import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import {
  HEADER_NAV_ITEMS,
  SECONDARY_NAV_ITEMS,
  type PageId,
} from '../utils/routing';
import type { ThemeMode } from '../utils/theme';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export function Navbar({ currentPage, onNavigate, theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="flex items-center gap-2.5 text-lg font-display font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066FF] rounded-md"
        >
          <img
            src={SITE_CONFIG.logoSrc}
            alt="Barta logo"
            width={28}
            height={28}
            referrerPolicy="no-referrer"
            className="w-7 h-7 rounded-lg object-cover shrink-0"
          />
          <span>{SITE_CONFIG.brandName}</span>
        </a>

        {/* Zone 2: Clean Single-Line Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium"
        >
          {HEADER_NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#/${item.id === 'home' ? '' : item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`py-2 whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                  isActive
                    ? 'text-[#0066FF] border-[#0066FF]'
                    : 'text-slate-600 border-transparent hover:text-slate-950 hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle + Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            id="theme-toggle-button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleNav('products')}
            className="hidden md:inline-flex items-center justify-center px-5 py-2 min-h-[40px] text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]"
          >
            Get Barta
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-b border-slate-200 bg-white shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="px-4 py-4 space-y-1">
            {HEADER_NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-4 py-3 min-h-[44px] rounded-full text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#0066FF]/10 text-[#0066FF]'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-3 mt-3 border-t border-slate-100 space-y-1">
              <p className="px-4 py-1 text-xs font-medium text-slate-500">
                Trust, Support &amp; Company
              </p>
              {SECONDARY_NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`w-full text-left px-4 py-2.5 min-h-[44px] rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#0066FF]/10 text-[#0066FF]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => handleNav('products')}
                className="w-full py-3 px-6 min-h-[44px] text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-full transition-colors cursor-pointer"
              >
                Get Barta
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
