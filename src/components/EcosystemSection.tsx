import React from 'react';

export const EcosystemSection: React.FC = () => {
  const cards = [
    {
      id: 'institutions',
      icon: 'account_balance',
      title: 'Institutions',
      description: "Provide your students with direct pathways to premium employers. Track success metrics and elevate your institution's placement rates."
    },
    {
      id: 'students',
      icon: 'school',
      title: 'Students',
      description: 'Build a verified portfolio of skills. Get discovered by top recruiters actively seeking talent from your specific program.'
    },
    {
      id: 'recruiters',
      icon: 'work',
      title: 'Recruiters',
      description: 'Access a verified, pre-qualified talent pool directly from partner institutions. Streamline early-career hiring efficiently.'
    }
  ];

  return (
    <section id="ecosystem" className="py-16 md:py-20 px-6 bg-[#f2f4f6] border-y border-[#c6c6cd]/30">
      <div className="max-w-[1280px] mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-headline text-[30px] font-bold text-black leading-tight">
            One Platform. Three Connected Worlds.
          </h2>
          <p className="text-[16px] text-[#45464d]">
            Uniting the entire career lifecycle into a single, intelligent ecosystem designed for mutual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="bg-white p-8 rounded-xl premium-shadow premium-shadow-hover transition-all border border-[#c6c6cd]/50 flex flex-col items-start space-y-6"
            >
              <div className="w-12 h-12 rounded-lg bg-[#4b41e1]/10 text-[#4b41e1] flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[28px]">{card.icon}</span>
              </div>
              <h3 className="font-headline text-[24px] font-semibold text-black">
                {card.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#45464d] flex-grow">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
