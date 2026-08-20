import React from 'react';

interface HeroSectionProps {
  onOpenPartner: () => void;
  onOpenSignIn: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPartner, onOpenSignIn }) => {
  return (
    <section id="hero" className="py-12 md:py-20 px-6 max-w-[1280px] mx-auto overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[716px]">
        {/* Left Content Column */}
        <div className="space-y-8 z-10">
          <div className="space-y-6">
            <h1 className="font-headline text-[48px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-extrabold text-black">
              Connecting Education With <span className="text-[#4b41e1]">Opportunity</span>
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#45464d] max-w-lg">
              The definitive platform bridging ambitious students, progressive educational institutions, and forward-thinking recruiters in one seamless ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={onOpenPartner}
              className="inline-flex justify-center items-center px-6 py-3 bg-[#4b41e1] text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Partner With Eleva
            </button>
            <button 
              onClick={onOpenSignIn}
              className="inline-flex justify-center items-center px-6 py-3 border-2 border-[#4b41e1] text-[#4b41e1] font-semibold text-sm rounded-lg hover:bg-[#4b41e1]/5 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Right Visual Graphic Container */}
        <div className="relative h-[400px] lg:h-[600px] rounded-xl premium-shadow overflow-hidden bg-white border border-[#c6c6cd]/30 flex items-center justify-center">
          <div 
            className="bg-cover bg-center w-full h-full absolute inset-0"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWuuIyLN7lQIW7tRq4PZ6hVD6ZDTRH2hmteSR3QzGPVEULfiOszHiXcw2dsDAxQxv0qvYX9RSDiAm39_XwdifReyWIFtuvLT1ubsKCcXuPIZo02FkJWshL3hiGcy7ffIAAbiQ92NqDFIzVinGWF9zzT7dA5Rvs6oUQGkJ2JolFqOB1Ew7nxAo1-EJ2xEQSevMFTSK3z-MmtyXh7xsJC3xcnzKBs8TuNd2elrvDpuHuqoJByzKfDX_gnQ')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};
