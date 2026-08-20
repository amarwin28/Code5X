import React from 'react';

export type PageType = 'home' | 'how-it-works' | 'institutions' | 'recruiters' | 'about';

interface NavbarProps {
  currentPage?: PageType;
  onNavigate?: (page: PageType) => void;
  onOpenPartner: () => void;
  onOpenSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage = 'home',
  onNavigate,
  onOpenPartner, 
  onOpenSignIn 
}) => {
  const handleNav = (e: React.MouseEvent, page: PageType, targetHash?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    if (targetHash) {
      window.location.hash = targetHash;
      const element = document.querySelector(targetHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.hash = page === 'home' ? '' : page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getLinkClasses = (page: PageType) => {
    const isActive = currentPage === page;
    if (isActive) {
      return "text-[#4b41e1] font-bold border-b-2 border-[#4b41e1] pb-1 text-sm font-label cursor-pointer";
    }
    return "text-[#45464d] hover:text-[#4b41e1] transition-colors text-sm font-label hover:bg-[#e6e8ea]/50 rounded-lg px-2 py-1 cursor-pointer";
  };

  return (
    <nav className="bg-[#ffffff]/80 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50 border-b border-[#c6c6cd]/30">
      <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">
        {/* Brand */}
        <a 
          className="font-headline font-extrabold text-[30px] tracking-[-0.01em] text-black cursor-pointer" 
          href="#"
          onClick={(e) => handleNav(e, 'home')}
        >
          ELEVA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            className={getLinkClasses('home')} 
            href="#hero"
            onClick={(e) => handleNav(e, 'home')}
          >
            Home
          </a>
          <a 
            className={getLinkClasses('how-it-works')} 
            href="#how-it-works"
            onClick={(e) => handleNav(e, 'how-it-works')}
          >
            How It Works
          </a>
          <a 
            className={getLinkClasses('institutions')} 
            href="#ecosystem"
            onClick={(e) => handleNav(e, 'institutions', '#ecosystem')}
          >
            Institutions
          </a>
          <a 
            className={getLinkClasses('recruiters')} 
            href="#recruiters"
            onClick={(e) => handleNav(e, 'recruiters')}
          >
            Recruiters
          </a>
          <a 
            className={getLinkClasses('about')} 
            href="#about"
            onClick={(e) => handleNav(e, 'about')}
          >
            About
          </a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <button 
            onClick={onOpenSignIn}
            className="text-[#45464d] hover:text-black transition-colors text-sm font-semibold px-2 py-1"
          >
            Sign In
          </button>
          <button 
            onClick={onOpenPartner}
            className="bg-[#4b41e1] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </nav>
  );
};
