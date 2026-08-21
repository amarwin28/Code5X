import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 md:py-12 px-6 sm:px-10 lg:px-12 bg-[#f8f9fc] border-t border-[#e7e8ed] mt-10">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10 lg:gap-16">
        {/* Left Corner: Brand & Info */}
        <div className="space-y-3 max-w-sm">
          <a className="font-headline text-[24px] font-extrabold text-[#111111] tracking-tight inline-block" href="#">
            ELEVA
          </a>
          <p className="text-[14px] text-[#6b707b] leading-relaxed">
            Connecting education with opportunity through a unified, intelligent ecosystem.
          </p>
          <p className="text-[13px] text-[#888d99] pt-2">
            © {new Date().getFullYear()} ELEVA. All rights reserved.
          </p>
        </div>

        {/* Right Corner: Link Groups */}
        <div className="flex flex-wrap sm:flex-nowrap gap-10 sm:gap-14 lg:gap-20">
          <div className="flex flex-col space-y-2.5">
            <span className="text-[12px] font-bold text-[#5141df] uppercase tracking-[1px]">Ecosystem</span>
            <a className="text-[14px] text-[#555b68] hover:text-[#5141df] transition-colors" href="#hero">
              Home
            </a>
            <a className="text-[14px] text-[#555b68] hover:text-[#5141df] transition-colors" href="#how-it-works">
              How It Works
            </a>
            <a className="text-[14px] text-[#555b68] hover:text-[#5141df] transition-colors" href="#institutions">
              Institutions
            </a>
          </div>

          <div className="flex flex-col space-y-2.5">
            <span className="text-[12px] font-bold text-[#5141df] uppercase tracking-[1px]">Stakeholders</span>
            <a className="text-[14px] text-[#555b68] hover:text-[#5141df] transition-colors" href="#recruiters">
              Recruiters
            </a>
            <a className="text-[14px] text-[#555b68] hover:text-[#5141df] transition-colors" href="#about">
              About Eleva
            </a>
          </div>

          <div className="flex flex-col space-y-2.5">
            <span className="text-[12px] font-bold text-[#5141df] uppercase tracking-[1px]">Legal</span>
            <a className="text-[14px] text-[#555b68] hover:text-[#5141df] transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-[14px] text-[#555b68] hover:text-[#5141df] transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

