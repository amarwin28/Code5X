import React from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  UserCheck, 
  Compass, 
  Target, 
  TrendingUp, 
  GraduationCap, 
  Building2, 
  Briefcase, 
  Sparkles,
  CheckCircle2,
  Cpu,
  Users
} from 'lucide-react';

interface HowItWorksProps {
  onOpenPartner?: () => void;
  onOpenSignIn?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenPartner, onOpenSignIn }) => {
  const steps = [
    {
      number: "01",
      title: "BUILD YOUR PROFILE",
      description: "Create a complete profile with your education, skills, projects, certifications, and achievements.",
      icon: UserCheck,
      badge: "Step 1"
    },
    {
      number: "02",
      title: "DISCOVER YOUR SKILLS",
      description: "ELEVA understands your strengths and identifies the skills that can help you reach your career goals.",
      icon: Compass,
      badge: "Step 2"
    },
    {
      number: "03",
      title: "FIND THE RIGHT OPPORTUNITIES",
      description: "Get matched with relevant opportunities based on your skills, profile, and career interests.",
      icon: Target,
      badge: "Step 3"
    },
    {
      number: "04",
      title: "CONNECT & GROW",
      description: "Connect with recruiters and institutions while continuously improving your skills and career readiness.",
      icon: TrendingUp,
      badge: "Step 4"
    }
  ];

  const flowNodes = [
    {
      step: "01",
      name: "PROFILE",
      detail: "Comprehensive Talent Data",
      icon: UserCheck,
      highlight: false
    },
    {
      step: "02",
      name: "SKILL ANALYSIS",
      detail: "AI & Competency Mapping",
      icon: Cpu,
      highlight: true
    },
    {
      step: "03",
      name: "OPPORTUNITY MATCH",
      detail: "Precision Role Alignment",
      icon: Target,
      highlight: false
    },
    {
      step: "04",
      name: "CONNECTION",
      detail: "Direct Ecosystem Access",
      icon: Users,
      highlight: true
    },
    {
      step: "05",
      name: "CAREER GROWTH",
      detail: "Continuous Development",
      icon: TrendingUp,
      highlight: false
    }
  ];

  const participants = [
    {
      title: "STUDENTS",
      subtitle: "Learners & Emerging Talent",
      description: "Build skills, discover opportunities, and grow your career.",
      icon: GraduationCap,
      highlights: [
        "Dynamic skill verification",
        "Curated career pathways",
        "Direct recruiter visibility"
      ]
    },
    {
      title: "INSTITUTIONS",
      subtitle: "Colleges & Universities",
      description: "Understand student capabilities and improve placement outcomes.",
      icon: Building2,
      highlights: [
        "Real-time cohort insights",
        "Industry alignment metrics",
        "Higher placement conversion"
      ]
    },
    {
      title: "RECRUITERS",
      subtitle: "Companies & Hiring Teams",
      description: "Discover relevant candidates based on skills and requirements.",
      icon: Briefcase,
      highlights: [
        "Pre-qualified candidate pools",
        "Faster hiring turnaround",
        "Verified technical competencies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-body selection:bg-[#4b41e1]/20 selection:text-[#4b41e1]">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 px-6 max-w-[1280px] mx-auto overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#4b41e1]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4b41e1]/10 border border-[#4b41e1]/20 text-[#4b41e1] text-xs font-bold tracking-[1.5px] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#4b41e1]" />
            How It Works
          </div>

          <h1 className="font-headline text-[40px] sm:text-[52px] md:text-[64px] font-extrabold text-black leading-[1.08] tracking-[-0.03em]">
            How <span className="text-[#4b41e1]">ELEVA</span> Works
          </h1>

          <p className="text-[17px] sm:text-[19px] md:text-[20px] leading-[1.6] text-[#45464d] max-w-2xl mx-auto">
            Connecting students, institutions, and recruiters through one intelligent ecosystem.
          </p>

          <p className="text-sm sm:text-base text-[#45464d]/80 font-medium tracking-wide">
            From education to opportunity — ELEVA connects the entire ecosystem.
          </p>
        </div>

        {/* Hero Visual: Student → ELEVA → Opportunity */}
        <div className="relative z-10 mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#c6c6cd]/40 shadow-[0_10px_35px_rgba(15,23,42,0.06)] relative overflow-hidden">
            
            {/* Background subtle grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center relative z-10">
              
              {/* Node 1: Student */}
              <div className="group bg-[#f7f9fb] hover:bg-white rounded-xl p-6 border border-[#c6c6cd]/40 hover:border-[#4b41e1]/40 transition-all duration-300 hover:shadow-md text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-[#4b41e1]/10 border border-[#c6c6cd]/30 flex items-center justify-center text-[#4b41e1] shadow-sm mb-4 transition-colors">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-wider text-[#45464d] uppercase mb-1">Origin</span>
                <h3 className="font-headline text-lg font-bold text-black">Student</h3>
                <p className="text-xs text-[#45464d] mt-1 leading-relaxed">
                  Education, verified skills &amp; career aspirations
                </p>
              </div>

              {/* Connecting element 1 (Desktop) */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="flex items-center gap-1 text-[#4b41e1]">
                  <span className="w-8 h-[2px] bg-[#4b41e1]/30" />
                  <div className="w-8 h-8 rounded-full bg-[#4b41e1]/10 flex items-center justify-center text-[#4b41e1]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <span className="w-8 h-[2px] bg-[#4b41e1]/30" />
                </div>
                <span className="text-[11px] font-semibold text-[#45464d] mt-2 uppercase tracking-wider">Intelligent Match</span>
              </div>

              {/* Connecting element 1 (Mobile) */}
              <div className="flex md:hidden justify-center text-[#4b41e1]">
                <div className="w-8 h-8 rounded-full bg-[#4b41e1]/10 flex items-center justify-center text-[#4b41e1]">
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>

              {/* Node 2: ELEVA (Center Hub) */}
              <div className="bg-[#4b41e1] text-white rounded-xl p-6 shadow-lg shadow-[#4b41e1]/25 text-center flex flex-col items-center relative overflow-hidden transform md:scale-105 border border-[#4b41e1]">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-20 h-20 bg-white/10 rounded-full blur-lg" />
                
                <div className="w-14 h-14 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white shadow-inner mb-4">
                  <span className="font-headline font-extrabold text-2xl tracking-tighter">E</span>
                </div>
                <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase mb-1">Unified Platform</span>
                <h3 className="font-headline text-xl font-extrabold text-white tracking-wide">ELEVA</h3>
                <p className="text-xs text-white/80 mt-1 leading-relaxed">
                  The intelligent bridge aligning talent with demand
                </p>
              </div>

              {/* Connecting element 2 (Desktop) */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="flex items-center gap-1 text-[#4b41e1]">
                  <span className="w-8 h-[2px] bg-[#4b41e1]/30" />
                  <div className="w-8 h-8 rounded-full bg-[#4b41e1]/10 flex items-center justify-center text-[#4b41e1]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <span className="w-8 h-[2px] bg-[#4b41e1]/30" />
                </div>
                <span className="text-[11px] font-semibold text-[#45464d] mt-2 uppercase tracking-wider">Direct Access</span>
              </div>

              {/* Connecting element 2 (Mobile) */}
              <div className="flex md:hidden justify-center text-[#4b41e1]">
                <div className="w-8 h-8 rounded-full bg-[#4b41e1]/10 flex items-center justify-center text-[#4b41e1]">
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>

              {/* Node 3: Opportunity */}
              <div className="group bg-[#f7f9fb] hover:bg-white rounded-xl p-6 border border-[#c6c6cd]/40 hover:border-[#4b41e1]/40 transition-all duration-300 hover:shadow-md text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-[#4b41e1]/10 border border-[#c6c6cd]/30 flex items-center justify-center text-[#4b41e1] shadow-sm mb-4 transition-colors">
                  <Briefcase className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-wider text-[#45464d] uppercase mb-1">Destination</span>
                <h3 className="font-headline text-lg font-bold text-black">Opportunity</h3>
                <p className="text-xs text-[#45464d] mt-1 leading-relaxed">
                  Careers, placements &amp; institutional success
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR-STEP PROCESS */}
      <section className="py-16 md:py-24 px-6 bg-white border-y border-[#c6c6cd]/30 relative">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#4b41e1] text-xs font-bold tracking-[1.5px] uppercase">
              Step-By-Step Journey
            </span>
            <h2 className="font-headline text-[32px] sm:text-[40px] font-extrabold text-black leading-tight tracking-[-0.02em]">
              The Four-Step Process
            </h2>
            <p className="text-[16px] text-[#45464d] leading-relaxed">
              A structured, transparent pathway designed to unlock potential and streamline career entry.
            </p>
          </div>

          {/* Cards Grid with Desktop Connecting Flow */}
          <div className="relative">
            
            {/* Subtle connecting line across cards on desktop */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#4b41e1]/10 via-[#4b41e1]/30 to-[#4b41e1]/10 z-0 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.number}
                    className="bg-[#f7f9fb] hover:bg-white rounded-2xl p-7 border border-[#c6c6cd]/40 hover:border-[#4b41e1]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header with Number and Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white border border-[#c6c6cd]/40 flex items-center justify-center font-headline font-extrabold text-base text-[#4b41e1] shadow-sm group-hover:bg-[#4b41e1] group-hover:text-white transition-colors duration-300">
                          {step.number}
                        </div>

                        <div className="w-10 h-10 rounded-lg bg-[#4b41e1]/10 text-[#4b41e1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-headline text-lg font-extrabold text-black tracking-tight mb-3">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-[1.7] text-[#45464d]">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Step Indicator */}
                    <div className="mt-6 pt-4 border-t border-[#c6c6cd]/20 flex items-center justify-between text-xs font-semibold text-[#45464d]/80">
                      <span>{step.badge}</span>
                      {idx < steps.length - 1 && (
                        <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#4b41e1]" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. SIMPLE ELEVA FLOW */}
      <section className="py-16 md:py-24 px-6 max-w-[1280px] mx-auto">
        <div className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#4b41e1] text-xs font-bold tracking-[1.5px] uppercase">
              Connected Architecture
            </span>
            <h2 className="font-headline text-[32px] sm:text-[40px] font-extrabold text-black leading-tight tracking-[-0.02em]">
              Simple ELEVA Flow
            </h2>
            <p className="text-[16px] text-[#45464d] leading-relaxed">
              How data and opportunity move seamlessly across the ELEVA infrastructure.
            </p>
          </div>

          {/* Horizontal Flow on Desktop / Vertical Stack on Mobile */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#c6c6cd]/40 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
              {flowNodes.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <React.Fragment key={item.name}>
                    
                    {/* Node Card */}
                    <div 
                      className={`w-full lg:w-auto flex-1 p-5 rounded-xl border transition-all duration-300 text-center flex flex-col items-center ${
                        item.highlight 
                          ? 'bg-[#4b41e1]/5 border-[#4b41e1]/40 shadow-sm' 
                          : 'bg-[#f7f9fb] border-[#c6c6cd]/40 hover:bg-white'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                        item.highlight
                          ? 'bg-[#4b41e1] text-white shadow-sm'
                          : 'bg-white text-[#4b41e1] border border-[#c6c6cd]/30 shadow-xs'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <span className="text-[10px] font-extrabold tracking-wider text-[#4b41e1] uppercase mb-1">
                        Phase {item.step}
                      </span>

                      <h4 className="font-headline text-sm font-extrabold text-black tracking-tight whitespace-nowrap">
                        {item.name}
                      </h4>

                      <p className="text-[11px] text-[#45464d] mt-1 line-clamp-1">
                        {item.detail}
                      </p>
                    </div>

                    {/* Separator / Arrow */}
                    {index < flowNodes.length - 1 && (
                      <div className="flex items-center justify-center text-[#4b41e1] my-1 lg:my-0 lg:px-1">
                        {/* Horizontal Arrow for Desktop */}
                        <div className="hidden lg:flex items-center">
                          <ArrowRight className="w-5 h-5 text-[#4b41e1]" />
                        </div>
                        {/* Vertical Arrow for Mobile/Tablet */}
                        <div className="flex lg:hidden items-center">
                          <ArrowDown className="w-5 h-5 text-[#4b41e1]" />
                        </div>
                      </div>
                    )}

                  </React.Fragment>
                );
              })}
            </div>

            {/* Bottom summary bar */}
            <div className="mt-8 pt-6 border-t border-[#c6c6cd]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#45464d]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4b41e1] animate-pulse" />
                <span className="font-semibold text-black">Continuous Real-Time Feedback Loop</span>
              </div>
              <p className="text-center sm:text-right">
                Every node is synchronized through ELEVA&apos;s intelligent routing layer.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. THREE ECOSYSTEM PARTICIPANTS */}
      <section className="py-16 md:py-24 px-6 bg-[#f2f4f6] border-y border-[#c6c6cd]/30">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#4b41e1] text-xs font-bold tracking-[1.5px] uppercase">
              Three Pillars
            </span>
            <h2 className="font-headline text-[32px] sm:text-[40px] font-extrabold text-black leading-tight tracking-[-0.02em]">
              Three Ecosystem Participants
            </h2>
            <p className="text-[16px] text-[#45464d] leading-relaxed">
              Designed specifically to serve each core stakeholder with purpose-built tools and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {participants.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 border border-[#c6c6cd]/40 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Icon & Subtitle Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-[#4b41e1]/10 text-[#4b41e1] flex items-center justify-center">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#45464d]/80 bg-[#f7f9fb] px-3 py-1 rounded-full border border-[#c6c6cd]/30">
                        {item.subtitle}
                      </span>
                    </div>

                    {/* Heading */}
                    <div>
                      <h3 className="font-headline text-2xl font-extrabold text-black tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-[15px] leading-[1.6] text-[#45464d] mt-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Feature bullet list */}
                    <div className="space-y-2.5 pt-2">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-[#191c1e] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#4b41e1] flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card footer indicator */}
                  <div className="mt-8 pt-4 border-t border-[#c6c6cd]/20 flex items-center justify-between text-xs font-semibold text-[#4b41e1]">
                    <span>Explore for {item.title.toLowerCase()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-16 md:py-24 px-6 max-w-[1280px] mx-auto text-center">
        <div className="bg-[#f2f4f6] rounded-[24px] p-8 sm:p-12 md:p-16 border border-[#c6c6cd]/40 shadow-[0_10px_35px_rgba(15,23,42,0.06)] max-w-4xl mx-auto space-y-8 relative overflow-hidden">
          
          {/* Subtle radial grid background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at center, #4b41e1 1px, transparent 1px)', 
              backgroundSize: '24px 24px' 
            }} 
          />

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="text-[#4b41e1] text-xs font-bold tracking-[1.5px] uppercase">
              Join the Ecosystem
            </span>

            <h2 className="font-headline text-[32px] sm:text-[42px] md:text-[48px] font-extrabold text-black leading-tight tracking-[-0.02em]">
              Ready to Elevate Your Journey?
            </h2>

            <p className="text-[17px] sm:text-[19px] text-[#45464d] leading-relaxed">
              ELEVA brings education and opportunity together.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <button 
              type="button"
              onClick={onOpenSignIn}
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 border-2 border-[#4b41e1] text-[#4b41e1] bg-white font-semibold text-sm rounded-lg hover:bg-[#4b41e1]/5 transition-all shadow-xs active:scale-[0.98]"
            >
              Sign In
            </button>

            <button 
              type="button"
              onClick={onOpenPartner}
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 bg-[#4b41e1] text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:bg-[#3d33c7] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Partner With Us
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HowItWorks;
