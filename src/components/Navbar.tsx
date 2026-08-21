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
    if (targetHash && page === 'institutions') {
      window.location.hash = targetHash;
      const element = document.querySelector(targetHash);
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.location.hash = page === 'home' ? '' : page;
      window.scrollTo(0, 0);
    }
  };

  const getLinkClasses = (page: PageType) => {
    const isActive = currentPage === page;
    if (isActive) {
      return "text-[#5141df] font-bold border-b-2 border-[#5141df] pb-1 text-[14.5px] transition-all cursor-pointer";
    }
    return "text-[#555b68] hover:text-[#5141df] transition-colors text-[14.5px] font-medium px-2 py-1 cursor-pointer";
  };

  return (
    <nav className="bg-[#ffffff]/90 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-[#e7e8ed]">
      <div className="flex justify-between items-center h-20 px-6 sm:px-10 lg:px-12 w-full relative">
        {/* Brand - Left Corner */}
        <a 
          className="font-headline font-extrabold text-[26px] md:text-[28px] tracking-[-0.02em] text-[#111111] cursor-pointer select-none" 
          href="#"
          onClick={(e) => handleNav(e, 'home')}
        >
          ELEVA
        </a>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-8 absolute left-1/2 -translate-x-1/2">
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
            href="#institutions"
            onClick={(e) => handleNav(e, 'institutions')}
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

        {/* Actions - Right Corner */}
        <div className="hidden md:flex items-center space-x-3.5">
          <button 
            onClick={onOpenSignIn}
            className="text-[#45464d] hover:text-black hover:bg-black/5 active:scale-[0.97] transition-all text-[14.5px] font-semibold px-3.5 py-2 rounded-lg cursor-pointer"
          >
            Sign In
          </button>
          <button 
            onClick={onOpenPartner}
            className="bg-[#5141df] text-white px-5 py-2.5 rounded-lg text-[14.5px] font-semibold hover:bg-[#4335c4] hover:-translate-y-0.5 active:scale-[0.97] transition-all shadow-[0_4px_12px_rgba(81,65,223,0.2)] hover:shadow-[0_6px_16px_rgba(81,65,223,0.3)] cursor-pointer"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </nav>
  );
};

