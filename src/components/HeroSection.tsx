import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Briefcase, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onOpenPartner: () => void;
  onOpenSignIn: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPartner }) => {
  return (
    <section 
      id="hero" 
      className="relative overflow-hidden pt-4 sm:pt-6 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-12 border-b border-[#e5e7eb]"
      style={{
        background: "#ffffff",
        backgroundImage: `
          linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
      }}
    >
      {/* Soft Ambient Radial Glow */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none rounded-full blur-[140px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(255, 255, 255, 0) 70%)"
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10 min-h-[520px]">
        
        {/* LEFT COLUMN: Typography & Action */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7 pr-0 lg:pr-4 pt-2 sm:pt-0">
          <h1 className="font-headline font-extrabold text-[44px] sm:text-[56px] md:text-[68px] lg:text-[72px] leading-[1.04] tracking-[-3px] text-[#0a0e1a]">
            Elevating<br />
            Students.<br />
            Empowering<br />
            <span className="text-[#2563eb]">Careers.</span>
          </h1>

          <p className="text-[16px] sm:text-[17.5px] leading-[1.7] text-[#4b5563] max-w-[530px] font-normal">
            The next-generation autonomous AI career infrastructure connecting top campus talent with tier-1 global recruiters through real-time skill diagnostics and automated placement drives.
          </p>

          <div className="pt-2">
            <button 
              onClick={onOpenPartner}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0a0e1a] hover:bg-[#1e293b] text-white font-semibold text-[15px] rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.18)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Connected Ecosystem Network */}
        <div className="lg:col-span-6 relative w-full h-[520px] sm:h-[560px] flex items-center justify-center">
          
          {/* SVG Connecting Dashed Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 600 520" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Line 1: Student (top-left) to ELEVA Hub (center) */}
            <line 
              x1="180" 
              y1="130" 
              x2="310" 
              y2="245" 
              stroke="#3b82f6" 
              strokeWidth="1.75" 
              strokeDasharray="6 6" 
              strokeOpacity="0.75"
              className="animate-dash-flow"
            />
            {/* Line 2: College (top-right) to ELEVA Hub (center) */}
            <line 
              x1="450" 
              y1="130" 
              x2="350" 
              y2="245" 
              stroke="#3b82f6" 
              strokeWidth="1.75" 
              strokeDasharray="6 6" 
              strokeOpacity="0.75"
              className="animate-dash-flow"
            />
            {/* Line 3: ELEVA Hub (center) to Recruiter (bottom-right) */}
            <line 
              x1="340" 
              y1="285" 
              x2="420" 
              y2="370" 
              stroke="#3b82f6" 
              strokeWidth="1.75" 
              strokeDasharray="6 6" 
              strokeOpacity="0.75"
              className="animate-dash-flow"
            />
          </svg>

          {/* CARD 1: Student (Top Left) */}
          <div 
            className="absolute top-[35px] left-[5px] sm:left-[30px] z-10 bg-white rounded-[22px] p-5 border border-[#e2e8f0] shadow-[0_16px_36px_rgba(15,23,42,0.06)] w-[210px] sm:w-[230px] animate-float-1 transition-all hover:shadow-[0_20px_45px_rgba(37,99,235,0.16)] hover:border-[#3b82f6]/40 cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <span className="font-headline font-bold text-[14px] text-[#0f172a]">Student</span>
              </div>
              <span className="bg-[#eff6ff] text-[#2563eb] text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#bfdbfe]">
                Verified
              </span>
            </div>

            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3">
              <div className="flex justify-between items-center text-[11px] mb-1.5">
                <span className="text-[#64748b] font-medium">Placement Score</span>
                <span className="font-bold text-[#2563eb]">96%</span>
              </div>
              <div className="w-full h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
                <div className="w-[96%] h-full bg-[#2563eb] rounded-full" />
              </div>
            </div>
          </div>

          {/* CARD 2: College (Top Right) */}
          <div 
            className="absolute top-[30px] right-[5px] sm:right-[20px] z-10 bg-white rounded-[22px] p-5 border border-[#e2e8f0] shadow-[0_16px_36px_rgba(15,23,42,0.06)] w-[230px] sm:w-[255px] animate-float-2 transition-all hover:shadow-[0_20px_45px_rgba(37,99,235,0.16)] hover:border-[#3b82f6]/40 cursor-default"
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-8 h-8 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shadow-xs">
                <Building2 className="w-4.5 h-4.5" />
              </div>
              <span className="font-headline font-bold text-[14px] text-[#0f172a]">College</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-2 text-center">
                <div className="font-extrabold text-[13px] text-[#0f172a]">1,450</div>
                <div className="text-[9px] text-[#64748b] font-medium mt-0.5">Students</div>
              </div>
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-2 text-center">
                <div className="font-extrabold text-[13px] text-[#2563eb]">92%</div>
                <div className="text-[9px] text-[#64748b] font-medium mt-0.5">Rate</div>
              </div>
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-2 text-center">
                <div className="font-extrabold text-[13px] text-[#0f172a]">78</div>
                <div className="text-[9px] text-[#64748b] font-medium mt-0.5">Partners</div>
              </div>
            </div>
          </div>

          {/* CARD 3: Center ELEVA Hub */}
          <div 
            className="absolute top-[230px] left-[45%] z-20 bg-white rounded-[20px] px-6 py-4 border border-[#e2e8f0] shadow-[0_20px_45px_rgba(37,99,235,0.14)] flex items-center gap-3.5 animate-hub-pulse transition-all hover:border-[#3b82f6]/40 cursor-default"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2563eb] to-[#3b82f6] text-white flex items-center justify-center shadow-md shadow-blue-500/25">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-headline font-extrabold text-[15px] tracking-tight text-[#0f172a]">ELEVA</div>
              <div className="text-[11px] text-[#64748b] font-medium">ELEVA Hub</div>
            </div>
          </div>

          {/* CARD 4: Recruiter (Bottom Right) */}
          <div 
            className="absolute bottom-[25px] right-[5px] sm:right-[30px] z-10 bg-white rounded-[22px] p-5 border border-[#e2e8f0] shadow-[0_16px_36px_rgba(15,23,42,0.06)] w-[260px] sm:w-[285px] animate-float-3 transition-all hover:shadow-[0_20px_45px_rgba(37,99,235,0.16)] hover:border-[#3b82f6]/40 cursor-default"
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shadow-xs">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
                <span className="font-headline font-bold text-[14px] text-[#0f172a]">Recruiter</span>
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#2563eb]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
                Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#eff6ff] border border-[#dbeafe] rounded-xl p-2.5">
                <div className="text-[10px] text-[#64748b] font-medium">AI Matches</div>
                <div className="font-extrabold text-[15px] text-[#2563eb] mt-0.5">42</div>
                <div className="text-[11px] font-semibold text-[#2563eb]">Candidates</div>
              </div>
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-2.5 flex flex-col justify-between">
                <div className="text-[10px] text-[#64748b] font-medium">Available Today</div>
                <div className="font-extrabold text-[14px] text-[#0f172a] mt-1">18 Drives</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;

