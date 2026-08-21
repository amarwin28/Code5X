import { useState, useEffect } from 'react';
import { Navbar, PageType } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EcosystemSection } from './components/EcosystemSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PartnerModal } from './components/PartnerModal';
import { SignInModal } from './components/SignInModal';
import { ToastContainer } from './components/ToastContainer';
import { ToastMessage } from './types';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Recruiters from './pages/Recruiters';

export function App() {
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'how-it-works') {
        setCurrentPage('how-it-works');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'recruiters') {
        setCurrentPage('recruiters');
      } else if (hash === 'ecosystem' || hash === 'institutions') {
        setCurrentPage('institutions');
      } else if (hash === 'hero' || hash === '' || hash === 'home') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const addToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const newToast: ToastMessage = {
      id: Date.now().toString(),
      message,
      type,
    };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4000);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'how-it-works':
        return (
          <HowItWorks 
            onOpenPartner={() => setIsPartnerOpen(true)}
            onOpenSignIn={() => setIsSignInOpen(true)}
          />
        );
      case 'about':
        return <About />;
      case 'recruiters':
        return <Recruiters />;
      case 'institutions':
      case 'home':
      default:
        return (
          <>
            <HeroSection 
              onOpenPartner={() => setIsPartnerOpen(true)}
              onOpenSignIn={() => setIsSignInOpen(true)}
            />
            <EcosystemSection />
            <CTASection onOpenPartner={() => setIsPartnerOpen(true)} />
          </>
        );
    }
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-body antialiased pt-20 min-h-screen flex flex-col">
      <Navbar 
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenPartner={() => setIsPartnerOpen(true)}
        onOpenSignIn={() => setIsSignInOpen(true)}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />

      <PartnerModal 
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
        onSubmitSuccess={(msg) => addToast(msg, 'success')}
      />

      <SignInModal 
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSubmitSuccess={(msg) => addToast(msg, 'success')}
      />

      <ToastContainer toasts={toasts} />
    </div>
  );
}

export default App;
