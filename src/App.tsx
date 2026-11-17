import { useEffect, useState } from 'react';
import { getPageMeta, normalizePageId, type PageId } from './utils/routing';
import {
  applyTheme,
  getNextTheme,
  readInitialTheme,
  type ThemeMode,
} from './utils/theme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { TechnologyPage } from './components/pages/TechnologyPage';
import { SecurityPage } from './components/pages/SecurityPage';
import {
  CareersPage,
  ContactPage,
  FaqPage,
  PartnershipsPage,
  SponsorsPage,
  SupportPage,
} from './components/pages/EcosystemPages';
import { LegalPage } from './components/pages/LegalPage';

function resolveInitialPage(): PageId {
  if (typeof window === 'undefined') return 'home';
  if (window.location.hash) {
    return normalizePageId(window.location.hash);
  }
  return normalizePageId(window.location.pathname);
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(resolveInitialPage);
  const [theme, setTheme] = useState<ThemeMode>(readInitialTheme);

  const handleToggleTheme = () => {
    setTheme((prev) => getNextTheme(prev));
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    const targetHash = page === 'home' ? '#/' : `#/${page}`;
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    const syncFromLocation = () => {
      if (window.location.hash) {
        setCurrentPage(normalizePageId(window.location.hash));
      } else {
        setCurrentPage(normalizePageId(window.location.pathname));
      }
    };

    window.addEventListener('hashchange', syncFromLocation);
    window.addEventListener('popstate', syncFromLocation);
    return () => {
      window.removeEventListener('hashchange', syncFromLocation);
      window.removeEventListener('popstate', syncFromLocation);
    };
  }, []);

  useEffect(() => {
    const meta = getPageMeta(currentPage);
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'products':
        return <ProductsPage onNavigate={navigate} />;
      case 'technology':
        return <TechnologyPage onNavigate={navigate} />;
      case 'security':
        return <SecurityPage onNavigate={navigate} />;
      case 'sponsors':
        return <SponsorsPage onNavigate={navigate} />;
      case 'partnerships':
        return <PartnershipsPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      case 'support':
        return <SupportPage onNavigate={navigate} />;
      case 'faq':
        return <FaqPage onNavigate={navigate} />;
      case 'careers':
        return <CareersPage />;
      case 'privacy-policy':
      case 'terms':
      case 'cookie-policy':
      case 'disclaimer':
      case 'refund-policy':
      case 'community-guidelines':
      case 'security-disclosure':
        return <LegalPage pageId={currentPage} onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#0B1120] dark:text-slate-100 transition-colors duration-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0066FF] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
