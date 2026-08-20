import React from 'react';

interface CTASectionProps {
  onOpenPartner: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenPartner }) => {
  return (
    <section className="py-16 md:py-20 px-6 max-w-[1280px] mx-auto text-center border-t border-[#c6c6cd]/20 mt-12">
      <div className="bg-[#f2f4f6] rounded-[24px] p-10 md:p-16 premium-shadow border border-[#c6c6cd]/30 max-w-4xl mx-auto space-y-8 relative overflow-hidden">
        {/* Subtle radial grid background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, #4b41e1 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }} 
        />

        <div className="relative z-10 space-y-4">
          <h2 className="font-headline text-[36px] md:text-[48px] font-extrabold text-black leading-tight">
            Ready to Elevate the Journey From Campus to Career?
          </h2>
          <p className="text-[18px] text-[#45464d] max-w-2xl mx-auto">
            Join the ecosystem that is redefining how emerging talent connects with industry leaders.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button 
            onClick={onOpenPartner}
            className="inline-flex justify-center items-center px-8 py-4 bg-[#4b41e1] text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Partner With Eleva
          </button>
        </div>
      </div>
    </section>
  );
};
