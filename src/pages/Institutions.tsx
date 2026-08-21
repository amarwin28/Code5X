import React, { useState } from 'react';
import {
  Building2,
  Users,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Sparkles,
  ShieldCheck,
  Layers,
  Award,
  BookOpen,
  Target,
  Compass,
  FileText,
  Zap,
  School,
  UserPlus,
  Network,
  Globe,
  Activity,
  FileSpreadsheet,
  AlertTriangle,
  Link2Off,
  Handshake,
  Settings,
  Brain,
  Rocket
} from 'lucide-react';

interface InstitutionsPageProps {
  onOpenPartner?: () => void;
  onOpenSignIn?: () => void;
  onToastSuccess?: (message: string) => void;
}

export const Institutions: React.FC<InstitutionsPageProps> = ({
  onOpenPartner,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'activity' | 'opportunities'>('overview');

  const handlePartnerClick = () => {
    if (onOpenPartner) {
      onOpenPartner();
    } else {
      const formEl = document.getElementById('contact');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 2: Problem Cards Data
  const problemCards = [
    {
      icon: Link2Off,
      title: 'Disconnected Opportunities',
      description: 'Students and recruiters often struggle to find the right connection.',
      tag: 'Scattered Networks',
    },
    {
      icon: FileSpreadsheet,
      title: 'Manual Placement Processes',
      description: 'Managing student information and recruitment activities across multiple systems can become difficult.',
      tag: 'Administrative Overhead',
    },
    {
      icon: Building2,
      title: 'Limited Industry Connections',
      description: 'Institutions need stronger and more structured connections with companies.',
      tag: 'Narrow Recruiter Reach',
    },
    {
      icon: AlertTriangle,
      title: 'Difficult Student Tracking',
      description: 'Placement teams need better visibility into student applications and outcomes.',
      tag: 'Data Silos',
    },
  ];

  // Section 3: Eleva Solution Data
  const solutionCards = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Maintain organized student profiles and career information.',
    },
    {
      icon: Compass,
      title: 'Placement Coordination',
      description: 'Simplify communication and coordination throughout recruitment activities.',
    },
    {
      icon: Network,
      title: 'Recruiter Connections',
      description: 'Connect institutions with companies looking for emerging talent.',
    },
    {
      icon: Briefcase,
      title: 'Opportunity Management',
      description: 'Manage relevant job and internship opportunities for students.',
    },
    {
      icon: GraduationCap,
      title: 'Student Profiles',
      description: 'Maintain structured academic, skill, and career information.',
    },
    {
      icon: BarChart3,
      title: 'Placement Tracking',
      description: 'Track applications, shortlisting, interviews, and placement outcomes.',
    },
  ];

  // Section 4: Process Steps Data
  const workflowSteps = [
    {
      number: '01',
      title: 'Partner With Eleva',
      description: 'The institution contacts Eleva and begins the onboarding process.',
      icon: Handshake,
    },
    {
      number: '02',
      title: 'Institution Onboarding',
      description: 'Eleva works with the institution to set up its platform environment.',
      icon: Settings,
    },
    {
      number: '03',
      title: 'Connect Students',
      description: 'The institution adds and manages student profiles.',
      icon: UserPlus,
    },
    {
      number: '04',
      title: 'Connect With Recruiters',
      description: "Students can be connected with relevant opportunities from Eleva's recruiter network.",
      icon: Globe,
    },
  ];

  // Section 6: Benefits Data
  const benefitCards = [
    {
      icon: Award,
      title: 'Better Student Opportunities',
      description: 'Give students access to relevant career opportunities.',
      highlight: 'Enhanced Outcomes',
    },
    {
      icon: Network,
      title: 'Stronger Industry Relationships',
      description: 'Build structured relationships with recruiters and companies.',
      highlight: 'Direct Corporate Links',
    },
    {
      icon: Layers,
      title: 'Centralized Placement Management',
      description: 'Bring student and recruitment information into one platform.',
      highlight: 'Unified Hub',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Placement Insights',
      description: 'Help institutions understand recruitment activity and placement progress.',
      highlight: 'Real-time Analytics',
    },
  ];

  // Section 7: Student Impact Journey Nodes
  const studentImpactSteps = [
    { label: 'Institution', subtitle: 'Onboarded Platform', icon: School },
    { label: 'Student Profile', subtitle: 'Verified Skills & Data', icon: GraduationCap },
    { label: 'Skills & Opportunities', subtitle: 'Role Matching', icon: Target },
    { label: 'Recruiter Discovery', subtitle: 'Company Shortlisting', icon: Building2 },
    { label: 'Interview', subtitle: 'Direct Coordination', icon: Users },
    { label: 'Career', subtitle: 'Successful Placement', icon: Rocket },
  ];

  // Section 8: Future Capabilities Data
  const futureCapabilities = [
    { title: 'Learning Resources', icon: BookOpen, tag: 'Self-Paced Modules' },
    { title: 'Skill Development', icon: Brain, tag: 'Industry Curricula' },
    { title: 'Assessments', icon: CheckCircle2, tag: 'Proctored Evaluations' },
    { title: 'Projects', icon: Layers, tag: 'Real-World Briefs' },
    { title: 'Certifications', icon: Award, tag: 'Verified Credentials' },
    { title: 'Career Preparation', icon: Target, tag: 'Interview Readiness' },
  ];

  const futureFlowSteps = ['Learn', 'Develop Skills', 'Build', 'Discover', 'Get Hired'];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-body antialiased selection:bg-[#4b41e1]/20 selection:text-[#4b41e1]">
      
      {/* -------------------------------------------------------------
          1. PAGE HERO
      ------------------------------------------------------------- */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-purple-50/40 via-[#f7f9fb] to-[#f7f9fb]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Copy & CTA */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4b41e1]/10 text-[#4b41e1] text-xs font-extrabold tracking-wider uppercase border border-[#4b41e1]/20">
                <School className="w-3.5 h-3.5" />
                <span>FOR EDUCATIONAL INSTITUTIONS</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#191c1e] leading-[1.15]">
                Empower Your Institution.{' '}
                <span className="gradient-text">Elevate Your Students.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#45464d] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Connect your students with trusted industry opportunities, streamline placement activities, and build stronger connections between your institution and recruiters through Eleva.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={handlePartnerClick}
                  className="w-full sm:w-auto bg-[#4b41e1] text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#3b32c8] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <span>Partner With Eleva</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleExploreClick}
                  className="w-full sm:w-auto bg-white text-[#191c1e] border border-[#c6c6cd]/60 px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 hover:border-[#4b41e1]/40 transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Explore How It Works</span>
                  <ChevronRight className="w-4 h-4 text-[#45464d]" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-[#c6c6cd]/30 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="font-headline font-bold text-xl sm:text-2xl text-[#191c1e]">94%</p>
                  <p className="text-xs text-[#45464d] font-medium">Placement Visibility</p>
                </div>
                <div>
                  <p className="font-headline font-bold text-xl sm:text-2xl text-[#4b41e1]">100%</p>
                  <p className="text-xs text-[#45464d] font-medium">Controlled Access</p>
                </div>
                <div>
                  <p className="font-headline font-bold text-xl sm:text-2xl text-[#191c1e]">1 Platform</p>
                  <p className="text-xs text-[#45464d] font-medium">End-to-End Hub</p>
                </div>
              </div>
            </div>

            {/* Right Column: Abstract Institution Dashboard/Network Visual */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Glowing decorative backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4b41e1]/20 to-purple-400/20 rounded-3xl blur-2xl opacity-70"></div>

                {/* Main Card Container */}
                <div className="relative bg-white border border-[#c6c6cd]/40 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                  
                  {/* Visual Header Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#eceef0]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4b41e1] text-white flex items-center justify-center font-extrabold font-headline">
                        <School className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-base text-[#191c1e]">Apex University Network</h3>
                        <p className="text-xs text-[#45464d]">Placement Coordination Hub</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold flex items-center gap-1 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Onboarded
                    </span>
                  </div>

                  {/* Network Node Mapping Graphic */}
                  <div className="bg-[#f7f9fb] rounded-xl p-4 border border-[#e6e8ea] space-y-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#45464d]">
                      <span>INSTITUTION ECOSYSTEM NODE</span>
                      <span className="text-[#4b41e1]">Eleva Verified</span>
                    </div>

                    {/* Nodes Visual */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white p-3 rounded-lg border border-[#c6c6cd]/40 text-center space-y-1 shadow-xs">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-[#4b41e1] flex items-center justify-center mx-auto">
                          <Users className="w-4 h-4" />
                        </div>
                        <p className="text-xs font-bold text-[#191c1e]">1,248</p>
                        <p className="text-[10px] text-[#45464d]">Students</p>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-[#c6c6cd]/40 text-center space-y-1 shadow-xs">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs font-bold text-[#191c1e]">45+</p>
                        <p className="text-[10px] text-[#45464d]">Recruiters</p>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-[#c6c6cd]/40 text-center space-y-1 shadow-xs">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs font-bold text-[#191c1e]">184</p>
                        <p className="text-[10px] text-[#45464d]">Placed</p>
                      </div>
                    </div>

                    {/* Connected Status Line */}
                    <div className="pt-2 border-t border-[#eceef0] flex items-center justify-between text-xs text-[#45464d]">
                      <span className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#4b41e1]" />
                        Active Placement Drive 2025
                      </span>
                      <span className="font-semibold text-emerald-600">32 Opportunities Live</span>
                    </div>
                  </div>

                  {/* Floating Action Badge overlay */}
                  <div className="p-3.5 rounded-xl bg-[#4b41e1]/5 border border-[#4b41e1]/20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#4b41e1] text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-[#191c1e]">Controlled Institutional Access</p>
                      <p className="text-[#45464d]">Eleva approaches & onboards institutions directly for verified recruitment.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. PROBLEM SECTION
      ------------------------------------------------------------- */}
      <section id="problem" className="py-16 md:py-24 bg-white border-y border-[#c6c6cd]/30">
        <div className="max-w-[1280px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              CURRENT CHALLENGES
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c1e]">
              Placement Management Shouldn't Be Complicated.
            </h2>
            <p className="text-sm sm:text-base text-[#45464d]">
              Educational institutions face significant operational roadblocks when managing student placement activities manually across disjointed systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemCards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f7f9fb] border border-[#c6c6cd]/40 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:border-rose-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-headline font-bold text-lg text-[#191c1e]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#45464d] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          3. ELEVA SOLUTION
      ------------------------------------------------------------- */}
      <section id="solution" className="py-16 md:py-24 bg-[#f7f9fb]">
        <div className="max-w-[1280px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#4b41e1] bg-[#4b41e1]/10 px-3 py-1 rounded-full border border-[#4b41e1]/20">
              THE ELEVA ADVANTAGE
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c1e]">
              One Platform for Your Institution's Career Ecosystem.
            </h2>
            <p className="text-sm sm:text-base text-[#45464d]">
              Eleva provides institutions with a centralized environment to manage student career opportunities, track placements, and build structured connections with recruiters.
            </p>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionCards.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#c6c6cd]/40 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#4b41e1]/40 hover:-translate-y-1 transition-all duration-300 space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4b41e1]/10 text-[#4b41e1] flex items-center justify-center group-hover:bg-[#4b41e1] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-headline font-bold text-lg text-[#191c1e] group-hover:text-[#4b41e1] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#45464d] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          4. HOW INSTITUTIONS WORK WITH ELEVA (TIMELINE)
      ------------------------------------------------------------- */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white border-y border-[#c6c6cd]/30">
        <div className="max-w-[1280px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#4b41e1] bg-[#4b41e1]/10 px-3 py-1 rounded-full border border-[#4b41e1]/20">
              STRUCTURED ONBOARDING
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c1e]">
              From Institution to Opportunity
            </h2>
            <p className="text-sm sm:text-base text-[#45464d]">
              Our onboarding model ensures high verification, controlled data privacy, and direct connections to trusted recruiters.
            </p>
          </div>

          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
            
            {/* Connecting Line behind numbers */}
            <div className="absolute top-8 left-12 right-12 h-0.5 bg-gradient-to-r from-[#4b41e1]/20 via-[#4b41e1] to-[#4b41e1]/20 -z-0"></div>

            {workflowSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative z-10 space-y-4 text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#4b41e1] text-[#4b41e1] font-headline font-extrabold text-xl flex items-center justify-center mx-auto shadow-md group-hover:bg-[#4b41e1] group-hover:text-white transition-all duration-300">
                    {step.number}
                  </div>

                  <div className="bg-[#f7f9fb] border border-[#c6c6cd]/40 rounded-2xl p-6 space-y-2.5 h-[calc(100%-80px)] hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[#4b41e1]/10 text-[#4b41e1] flex items-center justify-center mx-auto">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline font-bold text-base text-[#191c1e]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Timeline (Vertical) */}
          <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-[#4b41e1]/40 ml-4">
            {workflowSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative space-y-2 pl-4">
                  {/* Node Dot */}
                  <div className="absolute -left-[35px] top-1.5 w-8 h-8 rounded-full bg-[#4b41e1] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                    {step.number}
                  </div>

                  <div className="bg-[#f7f9fb] border border-[#c6c6cd]/40 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-[#4b41e1]" />
                      <h3 className="font-headline font-bold text-base text-[#191c1e]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#45464d] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          5. INSTITUTION DASHBOARD PREVIEW
      ------------------------------------------------------------- */}
      <section id="dashboard" className="py-16 md:py-24 bg-[#f7f9fb]">
        <div className="max-w-[1280px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#4b41e1] bg-[#4b41e1]/10 px-3 py-1 rounded-full border border-[#4b41e1]/20">
              MANAGEMENT SUITE
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c1e]">
              Everything Your Placement Team Needs.
            </h2>
            <p className="text-sm sm:text-base text-[#45464d]">
              Monitor recruitment drives, manage student cohorts, track interview stages, and analyze outcomes with complete institutional visibility.
            </p>
          </div>

          {/* SaaS Mockup Container */}
          <div className="bg-white border border-[#c6c6cd]/50 rounded-2xl shadow-xl overflow-hidden">
            
            {/* Top Navigation Bar Mockup */}
            <div className="bg-[#191c1e] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-xs text-gray-400 font-mono pl-2 border-l border-gray-700">
                  eleva.app/institution/dashboard
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center bg-gray-800/80 p-1 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'overview'
                      ? 'bg-[#4b41e1] text-white font-semibold shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('activity')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'activity'
                      ? 'bg-[#4b41e1] text-white font-semibold shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Recruiter Activity
                </button>
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'opportunities'
                      ? 'bg-[#4b41e1] text-white font-semibold shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Live Roles
                </button>
              </div>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="p-6 sm:p-8 space-y-8 bg-[#f7f9fb]">
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                
                <div className="bg-white p-5 rounded-xl border border-[#c6c6cd]/40 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#45464d]">
                    <span className="font-semibold">Students</span>
                    <Users className="w-4 h-4 text-[#4b41e1]" />
                  </div>
                  <p className="font-headline font-extrabold text-2xl sm:text-3xl text-[#191c1e]">
                    1,248
                  </p>
                  <div className="flex items-center text-[11px] text-emerald-600 font-semibold gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+12% verified candidates</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#c6c6cd]/40 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#45464d]">
                    <span className="font-semibold">Active Opportunities</span>
                    <Briefcase className="w-4 h-4 text-[#4b41e1]" />
                  </div>
                  <p className="font-headline font-extrabold text-2xl sm:text-3xl text-[#191c1e]">
                    32
                  </p>
                  <div className="flex items-center text-[11px] text-[#4b41e1] font-semibold gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>8 recruitment drives closing</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#c6c6cd]/40 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#45464d]">
                    <span className="font-semibold">Applications</span>
                    <FileText className="w-4 h-4 text-[#4b41e1]" />
                  </div>
                  <p className="font-headline font-extrabold text-2xl sm:text-3xl text-[#191c1e]">
                    486
                  </p>
                  <div className="flex items-center text-[11px] text-emerald-600 font-semibold gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>89% shortlisting rate</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#c6c6cd]/40 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#45464d]">
                    <span className="font-semibold">Students Placed</span>
                    <GraduationCap className="w-4 h-4 text-[#4b41e1]" />
                  </div>
                  <p className="font-headline font-extrabold text-2xl sm:text-3xl text-[#191c1e]">
                    184
                  </p>
                  <div className="flex items-center text-[11px] text-emerald-600 font-semibold gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>74% drive conversion rate</span>
                  </div>
                </div>

              </div>

              {/* Main Visualization & Recruiter Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Placement Activity Chart Graphic */}
                <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-[#c6c6cd]/40 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#eceef0]">
                    <div>
                      <h4 className="font-headline font-bold text-base text-[#191c1e]">
                        Placement Activity Pipeline
                      </h4>
                      <p className="text-xs text-[#45464d]">Drive progress & candidate conversion funnel</p>
                    </div>
                    <span className="text-xs font-semibold text-[#4b41e1] bg-[#4b41e1]/10 px-2.5 py-1 rounded-md">
                      Current Term
                    </span>
                  </div>

                  {/* Funnel Progress Bars */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#45464d]">
                        <span>Profiles Verified & Active</span>
                        <span className="font-bold text-[#191c1e]">1,248 (100%)</span>
                      </div>
                      <div className="w-full bg-[#f2f4f6] h-3 rounded-full overflow-hidden">
                        <div className="bg-[#4b41e1] h-full rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#45464d]">
                        <span>Applications Submitted</span>
                        <span className="font-bold text-[#191c1e]">486 (39%)</span>
                      </div>
                      <div className="w-full bg-[#f2f4f6] h-3 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#45464d]">
                        <span>Candidates Shortlisted</span>
                        <span className="font-bold text-[#191c1e]">290 (23%)</span>
                      </div>
                      <div className="w-full bg-[#f2f4f6] h-3 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '55%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#45464d]">
                        <span>Interviews Conducted</span>
                        <span className="font-bold text-[#191c1e]">215 (17%)</span>
                      </div>
                      <div className="w-full bg-[#f2f4f6] h-3 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#45464d]">
                        <span>Offers Extended & Confirmed</span>
                        <span className="font-bold text-emerald-600">184 (15%)</span>
                      </div>
                      <div className="w-full bg-[#f2f4f6] h-3 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Recruiter Activity List */}
                <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#c6c6cd]/40 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#eceef0]">
                    <h4 className="font-headline font-bold text-base text-[#191c1e]">
                      Recent Recruiter Activity
                    </h4>
                    <Activity className="w-4 h-4 text-[#4b41e1]" />
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-[#f7f9fb] rounded-lg border border-[#e6e8ea] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs space-y-0.5">
                        <p className="font-bold text-[#191c1e]">TechCorp Solutions</p>
                        <p className="text-[#45464d]">Scheduled 24 final round interviews for CS cohort.</p>
                        <span className="text-[10px] text-gray-400">2 hours ago</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#f7f9fb] rounded-lg border border-[#e6e8ea] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#4b41e1] flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div className="text-xs space-y-0.5">
                        <p className="font-bold text-[#191c1e]">InnovateX Technologies</p>
                        <p className="text-[#45464d]">Published 5 new Software Engineer opportunities.</p>
                        <span className="text-[10px] text-gray-400">5 hours ago</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#f7f9fb] rounded-lg border border-[#e6e8ea] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs space-y-0.5">
                        <p className="font-bold text-[#191c1e]">Apex Global Inc.</p>
                        <p className="text-[#45464d]">Extended 12 offer letters for Product Design batch.</p>
                        <span className="text-[10px] text-gray-400">1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          6. BENEFITS SECTION
      ------------------------------------------------------------- */}
      <section id="benefits" className="py-16 md:py-24 bg-white border-y border-[#c6c6cd]/30">
        <div className="max-w-[1280px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#4b41e1] bg-[#4b41e1]/10 px-3 py-1 rounded-full border border-[#4b41e1]/20">
              INSTITUTIONAL VALUE
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c1e]">
              Built Around Institutional Success.
            </h2>
            <p className="text-sm sm:text-base text-[#45464d]">
              Designed to help placement officers, department heads, and university leaders scale career outcomes efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitCards.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f7f9fb] border border-[#c6c6cd]/40 rounded-2xl p-7 sm:p-8 space-y-4 hover:shadow-md hover:border-[#4b41e1]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#4b41e1]/10 text-[#4b41e1] flex items-center justify-center group-hover:bg-[#4b41e1] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#4b41e1] bg-white px-3 py-1 rounded-full border border-[#4b41e1]/20 shadow-xs">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-xl text-[#191c1e]">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#45464d] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          7. STUDENT IMPACT SECTION
      ------------------------------------------------------------- */}
      <section id="student-impact" className="py-16 md:py-24 bg-[#f7f9fb]">
        <div className="max-w-[1280px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#4b41e1] bg-[#4b41e1]/10 px-3 py-1 rounded-full border border-[#4b41e1]/20">
              STUDENT IMPACT
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c1e]">
              When Institutions Connect Better, Students Go Further.
            </h2>
            <blockquote className="text-base sm:text-lg text-[#45464d] italic max-w-2xl mx-auto">
              "Eleva helps institutions create a more connected path from education to employment."
            </blockquote>
          </div>

          {/* Visual Journey Flow */}
          <div className="bg-white border border-[#c6c6cd]/40 rounded-2xl p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {studentImpactSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isLast = idx === studentImpactSteps.length - 1;
                return (
                  <div key={idx} className="flex flex-col items-center text-center space-y-3 relative group">
                    <div className="w-14 h-14 rounded-2xl bg-[#4b41e1]/10 text-[#4b41e1] flex items-center justify-center group-hover:bg-[#4b41e1] group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-sm text-[#191c1e]">
                        {step.label}
                      </h4>
                      <p className="text-[11px] text-[#45464d] font-medium">
                        {step.subtitle}
                      </p>
                    </div>

                    {!isLast && (
                      <div className="hidden lg:block absolute top-7 -right-3 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-[#4b41e1]/40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          8. FUTURE VISION
      ------------------------------------------------------------- */}
      <section id="future-vision" className="py-16 md:py-24 bg-white border-y border-[#c6c6cd]/30">
        <div className="max-w-[1280px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#4b41e1] text-xs font-extrabold uppercase tracking-wider border border-[#4b41e1]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FUTURE CAPABILITIES</span>
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c1e]">
              Building More Than a Placement Platform.
            </h2>

            <p className="text-sm sm:text-base text-[#45464d] max-w-2xl mx-auto">
              Eleva is designed to evolve into a complete career ecosystem for students and institutions.
            </p>
          </div>

          {/* Visual Capabilities Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {futureCapabilities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f7f9fb] border border-[#c6c6cd]/40 rounded-xl p-6 space-y-3 hover:border-[#4b41e1]/40 transition-all shadow-xs relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#4b41e1]/10 text-[#4b41e1] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#4b41e1] bg-purple-50 px-2 py-0.5 rounded border border-[#4b41e1]/20 uppercase">
                      Future Capability
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-base text-[#191c1e]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#45464d]">{item.tag}</p>
                </div>
              );
            })}
          </div>

          {/* Visual Flow Banner */}
          <div className="bg-gradient-to-r from-[#191c1e] to-[#2d3135] text-white rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-xl">
            <p className="text-xs font-bold tracking-widest text-[#4b41e1] uppercase">
              UPCOMING ECOSYSTEM EVOLUTION
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold">
              {futureFlowSteps.map((stepName, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4b41e1]"></span>
                    <span>{stepName}</span>
                  </div>
                  {index < futureFlowSteps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-gray-500 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          9. FINAL CTA
      ------------------------------------------------------------- */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-[#f7f9fb] to-purple-50/50">
        <div className="max-w-[1280px] mx-auto px-6">
          
          <div className="bg-white border border-[#c6c6cd]/50 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl space-y-8 relative overflow-hidden">
            
            {/* Background Decorative Blur */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4b41e1]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>

            <div className="relative space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#4b41e1] text-white flex items-center justify-center mx-auto shadow-md">
                <School className="w-7 h-7" />
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191c1e] tracking-tight">
                Ready to Elevate Your Institution?
              </h2>

              <p className="text-base sm:text-lg text-[#45464d] leading-relaxed max-w-2xl mx-auto">
                Partner with Eleva and create stronger connections between your students and the opportunities waiting for them.
              </p>
            </div>

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={handlePartnerClick}
                className="w-full sm:w-auto bg-[#4b41e1] text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#3b32c8] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Partner With Eleva</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handlePartnerClick}
                className="w-full sm:w-auto bg-white text-[#191c1e] border border-[#c6c6cd] px-8 py-4 rounded-xl font-semibold text-base hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Contact Eleva</span>
              </button>
            </div>

            <div className="relative pt-6 border-t border-[#eceef0] text-xs text-[#45464d] flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#4b41e1]" />
              <span>Controlled Onboarding • Institutional Verification Guaranteed</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Institutions;
