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
    window.location.hash = 'how-it-works';
    window.scrollTo(0, 0);
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
      icon: TrendingUp,
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
      description: 'Give students access to relevant career opportunities with top industry partners.',
      highlight: 'Enhanced Outcomes',
    },
    {
      icon: Globe,
      title: 'Stronger Industry Relationships',
      description: 'Build structured, lasting relationships with enterprise recruiters and hiring managers.',
      highlight: 'Direct Corporate Links',
    },
    {
      icon: Layers,
      title: 'Centralized Placement Management',
      description: 'Bring student profiles, evaluations, and recruitment information into one platform.',
      highlight: 'Unified Hub',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Placement Insights',
      description: 'Help institutions understand recruitment activity, cohort progress, and placement outcomes.',
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
    <div className="bg-[#ffffff] text-[#111111] font-sans antialiased selection:bg-[#5141df]/20 selection:text-[#5141df]">
      
      {/* -------------------------------------------------------------
          1. PAGE HERO
      ------------------------------------------------------------- */}
      <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-gradient-to-b from-purple-50/30 via-white to-white border-b border-[#e7e8ed]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Copy & CTA */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div>
                <span
                  style={{
                    color: "#5141df",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    display: "inline-block",
                  }}
                >
                  FOR EDUCATIONAL INSTITUTIONS
                </span>

                <h1
                  style={{
                    fontSize: "clamp(44px, 5.2vw, 68px)",
                    fontWeight: 750,
                    lineHeight: 1.08,
                    letterSpacing: "-2.5px",
                    margin: "18px 0",
                    color: "#111111",
                  }}
                >
                  Empower Your Institution.{' '}
                  <span style={{ color: "#5141df" }}>Elevate Your Students.</span>
                </h1>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    color: "#5d6370",
                    maxWidth: "540px",
                  }}
                >
                  Connect your students with trusted industry opportunities, streamline placement activities, and build stronger connections between your institution and recruiters through Eleva.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={handlePartnerClick}
                  style={{
                    padding: "15px 28px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#5141df",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 650,
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(81,65,223,0.25)",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#4335c4")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#5141df")}
                >
                  <span>Partner With Eleva</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleExploreClick}
                  style={{
                    padding: "14px 26px",
                    borderRadius: "8px",
                    border: "1.5px solid #5141df",
                    background: "#ffffff",
                    color: "#5141df",
                    fontSize: "15px",
                    fontWeight: 650,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(81, 65, 223, 0.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
                >
                  <span>Explore How It Works</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-[#e7e8ed] grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p style={{ fontSize: "24px", fontWeight: 700, color: "#111111", margin: 0 }}>94%</p>
                  <p style={{ fontSize: "13px", color: "#6b707b", marginTop: "2px" }}>Placement Visibility</p>
                </div>
                <div>
                  <p style={{ fontSize: "24px", fontWeight: 700, color: "#5141df", margin: 0 }}>100%</p>
                  <p style={{ fontSize: "13px", color: "#6b707b", marginTop: "2px" }}>Controlled Access</p>
                </div>
                <div>
                  <p style={{ fontSize: "24px", fontWeight: 700, color: "#111111", margin: 0 }}>1 Platform</p>
                  <p style={{ fontSize: "13px", color: "#6b707b", marginTop: "2px" }}>End-to-End Hub</p>
                </div>
              </div>
            </div>

            {/* Right Column: Abstract Institution Dashboard/Network Visual */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Glowing decorative backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#5141df]/20 to-purple-400/20 rounded-3xl blur-2xl opacity-70"></div>

                {/* Main Card Container */}
                <div className="relative bg-white border border-[#e7e8ed] rounded-[20px] p-6 sm:p-8 shadow-xl space-y-6">
                  
                  {/* Visual Header Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#eceef0]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#5141df] text-white flex items-center justify-center font-extrabold font-headline">
                        <School className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#111111", margin: 0 }}>Apex University Network</h3>
                        <p style={{ fontSize: "12px", color: "#6b707b", margin: 0 }}>Placement Coordination Hub</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold flex items-center gap-1 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Onboarded
                    </span>
                  </div>

                  {/* Network Node Mapping Graphic */}
                  <div className="bg-[#f8f9fc] rounded-xl p-4 border border-[#e7e8ed] space-y-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#5d6370]">
                      <span style={{ letterSpacing: "1px" }}>INSTITUTION ECOSYSTEM NODE</span>
                      <span style={{ color: "#5141df", fontWeight: 700 }}>Eleva Verified</span>
                    </div>

                    {/* Nodes Visual */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white p-3 rounded-lg border border-[#e7e8ed] text-center space-y-1 shadow-xs">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-[#5141df] flex items-center justify-center mx-auto">
                          <Users className="w-4 h-4" />
                        </div>
                        <p className="text-sm font-bold text-[#111111]">1,248</p>
                        <p className="text-[11px] text-[#6b707b]">Students</p>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-[#e7e8ed] text-center space-y-1 shadow-xs">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <p className="text-sm font-bold text-[#111111]">45+</p>
                        <p className="text-[11px] text-[#6b707b]">Recruiters</p>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-[#e7e8ed] text-center space-y-1 shadow-xs">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-sm font-bold text-[#111111]">184</p>
                        <p className="text-[11px] text-[#6b707b]">Placed</p>
                      </div>
                    </div>

                    {/* Connected Status Line */}
                    <div className="pt-2 border-t border-[#e7e8ed] flex items-center justify-between text-xs text-[#5d6370]">
                      <span className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#5141df]" />
                        Active Placement Drive 2025
                      </span>
                      <span className="font-semibold text-emerald-600">32 Opportunities Live</span>
                    </div>
                  </div>

                  {/* Floating Action Badge overlay */}
                  <div className="p-3.5 rounded-xl bg-[#5141df]/5 border border-[#5141df]/20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#5141df] text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p style={{ fontWeight: 700, color: "#111111", margin: 0 }}>Controlled Institutional Access</p>
                      <p style={{ color: "#6b707b", margin: 0 }}>Eleva approaches & onboards institutions directly for verified recruitment.</p>
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
      <section id="problem" className="py-20 md:py-28 bg-white border-b border-[#e7e8ed]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span
              style={{
                color: "#5141df",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              CURRENT CHALLENGES
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-2px",
                color: "#111111",
                margin: "12px 0",
              }}
            >
              Placement Management Shouldn't Be <span style={{ color: "#5141df" }}>Complicated.</span>
            </h2>

            <p
              style={{
                color: "#5d6370",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              Educational institutions face significant operational roadblocks when managing student placement activities manually across disjointed systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemCards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "32px 28px",
                    border: "1px solid #e7e8ed",
                    borderRadius: "16px",
                    background: "#ffffff",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="hover:border-[#5141df]/40 hover:shadow-[0_12px_32px_rgba(81,65,223,0.08)] hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5141df] flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#5141df",
                          background: "rgba(81, 65, 223, 0.08)",
                          padding: "3px 8px",
                          borderRadius: "6px",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        letterSpacing: "-0.5px",
                        color: "#111111",
                        margin: "16px 0 8px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: "#6b707b",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
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
      <section id="solution" className="py-20 md:py-28 bg-[#f8f9fc]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span
              style={{
                color: "#5141df",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              THE ELEVA ADVANTAGE
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-2px",
                color: "#111111",
                margin: "12px 0",
              }}
            >
              One Platform for Your Institution's <span style={{ color: "#5141df" }}>Career Ecosystem.</span>
            </h2>

            <p
              style={{
                color: "#5d6370",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
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
                  style={{
                    padding: "35px 30px",
                    border: "1px solid #e7e8ed",
                    borderRadius: "16px",
                    background: "#ffffff",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="hover:border-[#5141df]/40 hover:shadow-[0_12px_32px_rgba(81,65,223,0.08)] hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5141df] flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3
                    style={{
                      fontSize: "21px",
                      fontWeight: 700,
                      letterSpacing: "-0.5px",
                      color: "#111111",
                      margin: "0 0 10px",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      color: "#6b707b",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
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
      <section id="how-it-works-timeline" className="py-20 md:py-28 bg-white border-y border-[#e7e8ed]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span
              style={{
                color: "#5141df",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              STRUCTURED ONBOARDING
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-2px",
                color: "#111111",
                margin: "12px 0",
              }}
            >
              From Institution to <span style={{ color: "#5141df" }}>Opportunity</span>
            </h2>

            <p
              style={{
                color: "#5d6370",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              Our onboarding model ensures high verification, controlled data privacy, and direct connections to trusted recruiters.
            </p>
          </div>

          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
            
            {/* Connecting Line behind numbers */}
            <div className="absolute top-8 left-12 right-12 h-0.5 bg-gradient-to-r from-[#5141df]/20 via-[#5141df] to-[#5141df]/20 -z-0"></div>

            {workflowSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative z-10 space-y-4 text-center group">
                  <div 
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "16px",
                      background: "#ffffff",
                      border: "2px solid #5141df",
                      color: "#5141df",
                      fontSize: "20px",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                      boxShadow: "0 6px 18px rgba(81,65,223,0.15)",
                      transition: "all 0.3s ease",
                    }}
                    className="group-hover:bg-[#5141df] group-hover:text-white"
                  >
                    {step.number}
                  </div>

                  <div 
                    style={{
                      padding: "28px 22px",
                      border: "1px solid #e7e8ed",
                      borderRadius: "16px",
                      background: "#f8f9fc",
                      minHeight: "180px",
                      transition: "all 0.3s ease",
                    }}
                    className="group-hover:border-[#5141df]/40 group-hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-[#5141df] flex items-center justify-center mx-auto mb-3">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#111111",
                        margin: "0 0 8px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: "#6b707b",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Timeline (Vertical) */}
          <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-[#5141df]/40 ml-4">
            {workflowSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative space-y-2 pl-4">
                  {/* Node Dot */}
                  <div className="absolute -left-[35px] top-1.5 w-8 h-8 rounded-full bg-[#5141df] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                    {step.number}
                  </div>

                  <div className="bg-[#f8f9fc] border border-[#e7e8ed] rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-[#5141df]" />
                      <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#111111", margin: 0 }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ color: "#6b707b", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
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
      <section id="dashboard" className="py-20 md:py-28 bg-[#f8f9fc]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span
              style={{
                color: "#5141df",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              MANAGEMENT SUITE
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-2px",
                color: "#111111",
                margin: "12px 0",
              }}
            >
              Everything Your Placement Team <span style={{ color: "#5141df" }}>Needs.</span>
            </h2>

            <p
              style={{
                color: "#5d6370",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              Monitor recruitment drives, manage student cohorts, track interview stages, and analyze outcomes with complete institutional visibility.
            </p>
          </div>

          {/* SaaS Mockup Container */}
          <div className="bg-white border border-[#e7e8ed] rounded-2xl shadow-xl overflow-hidden">
            
            {/* Top Navigation Bar Mockup */}
            <div className="bg-[#11142b] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-800">
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
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-[#5141df] text-white font-semibold shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('activity')}
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    activeTab === 'activity'
                      ? 'bg-[#5141df] text-white font-semibold shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Recruiter Activity
                </button>
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    activeTab === 'opportunities'
                      ? 'bg-[#5141df] text-white font-semibold shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Live Roles
                </button>
              </div>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="p-6 sm:p-8 space-y-8 bg-[#f8f9fc]">
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                
                <div className="bg-white p-5 rounded-xl border border-[#e7e8ed] shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5d6370]">
                    <span className="font-semibold">Students</span>
                    <Users className="w-4 h-4 text-[#5141df]" />
                  </div>
                  <p style={{ fontSize: "28px", fontWeight: 800, color: "#111111", margin: "4px 0" }}>
                    1,248
                  </p>
                  <div className="flex items-center text-[12px] text-emerald-600 font-semibold gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+12% verified candidates</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#e7e8ed] shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5d6370]">
                    <span className="font-semibold">Active Opportunities</span>
                    <Briefcase className="w-4 h-4 text-[#5141df]" />
                  </div>
                  <p style={{ fontSize: "28px", fontWeight: 800, color: "#111111", margin: "4px 0" }}>
                    32
                  </p>
                  <div className="flex items-center text-[12px] text-[#5141df] font-semibold gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>8 recruitment drives closing</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#e7e8ed] shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5d6370]">
                    <span className="font-semibold">Applications</span>
                    <FileText className="w-4 h-4 text-[#5141df]" />
                  </div>
                  <p style={{ fontSize: "28px", fontWeight: 800, color: "#111111", margin: "4px 0" }}>
                    486
                  </p>
                  <div className="flex items-center text-[12px] text-emerald-600 font-semibold gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>89% shortlisting rate</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#e7e8ed] shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5d6370]">
                    <span className="font-semibold">Students Placed</span>
                    <GraduationCap className="w-4 h-4 text-[#5141df]" />
                  </div>
                  <p style={{ fontSize: "28px", fontWeight: 800, color: "#111111", margin: "4px 0" }}>
                    184
                  </p>
                  <div className="flex items-center text-[12px] text-emerald-600 font-semibold gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>74% drive conversion rate</span>
                  </div>
                </div>

              </div>

              {/* Main Visualization & Recruiter Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Placement Activity Chart Graphic */}
                <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-[#e7e8ed] space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#eceef0]">
                    <div>
                      <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#111111", margin: 0 }}>
                        Placement Activity Pipeline
                      </h4>
                      <p style={{ fontSize: "12px", color: "#6b707b", margin: 0 }}>Drive progress & candidate conversion funnel</p>
                    </div>
                    <span className="text-xs font-semibold text-[#5141df] bg-[#5141df]/10 px-2.5 py-1 rounded-md">
                      Current Term
                    </span>
                  </div>

                  {/* Funnel Progress Bars */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#5d6370]">
                        <span>Profiles Verified & Active</span>
                        <span className="font-bold text-[#111111]">1,248 (100%)</span>
                      </div>
                      <div className="w-full bg-[#f2f4f6] h-3 rounded-full overflow-hidden">
                        <div className="bg-[#5141df] h-full rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#5d6370]">
                        <span>Applications Submitted</span>
                        <span className="font-bold text-[#111111]">486 (39%)</span>
                      </div>
                      <div className="w-full bg-[#f2f4f6] h-3 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#5d6370]">
                        <span>Candidates Shortlisted</span>
                        <span className="font-bold text-[#111111]">290 (23%)</span>
                      </div>
                      <div className="w-full bg-[#f2f4f6] h-3 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '55%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#5d6370]">
                        <span>Interviews Conducted</span>
                        <span className="font-bold text-[#111111]">215 (17%)</span>
                      </div>
                      <div className="w-full bg-[#f2f4f6] h-3 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-[#5d6370]">
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
                <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#e7e8ed] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#eceef0]">
                    <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#111111", margin: 0 }}>
                      Recent Recruiter Activity
                    </h4>
                    <Activity className="w-4 h-4 text-[#5141df]" />
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-[#f8f9fc] rounded-lg border border-[#e7e8ed] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs space-y-0.5">
                        <p className="font-bold text-[#111111]">TechCorp Solutions</p>
                        <p className="text-[#5d6370]">Scheduled 24 final round interviews for CS cohort.</p>
                        <span className="text-[10px] text-gray-400">2 hours ago</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#f8f9fc] rounded-lg border border-[#e7e8ed] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#5141df] flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div className="text-xs space-y-0.5">
                        <p className="font-bold text-[#111111]">InnovateX Technologies</p>
                        <p className="text-[#5d6370]">Published 5 new Software Engineer opportunities.</p>
                        <span className="text-[10px] text-gray-400">5 hours ago</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#f8f9fc] rounded-lg border border-[#e7e8ed] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs space-y-0.5">
                        <p className="font-bold text-[#111111]">Apex Global Inc.</p>
                        <p className="text-[#5d6370]">Extended 12 offer letters for Product Design batch.</p>
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
      <section id="benefits" className="py-20 md:py-28 bg-white border-y border-[#e7e8ed]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span
              style={{
                color: "#5141df",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              INSTITUTIONAL VALUE
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-2px",
                color: "#111111",
                margin: "12px 0",
              }}
            >
              Built Around Institutional <span style={{ color: "#5141df" }}>Success.</span>
            </h2>

            <p
              style={{
                color: "#5d6370",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              Designed to help placement officers, department heads, and university leaders scale career outcomes efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitCards.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    padding: "36px 32px",
                    border: "1px solid #e7e8ed",
                    borderRadius: "16px",
                    background: "#ffffff",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="hover:border-[#5141df]/40 hover:shadow-[0_12px_32px_rgba(81,65,223,0.08)] hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5141df] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#5141df",
                        background: "rgba(81, 65, 223, 0.08)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {item.highlight}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "21px",
                      fontWeight: 700,
                      letterSpacing: "-0.5px",
                      color: "#111111",
                      margin: "0 0 10px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#6b707b",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
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
      <section id="student-impact" className="py-20 md:py-28 bg-[#f8f9fc]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span
              style={{
                color: "#5141df",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              STUDENT IMPACT
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-2px",
                color: "#111111",
                margin: "12px 0",
              }}
            >
              When Institutions Connect Better, <span style={{ color: "#5141df" }}>Students Go Further.</span>
            </h2>

            <p
              style={{
                color: "#5d6370",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              "Eleva helps institutions create a more connected path from education to employment."
            </p>
          </div>

          {/* Visual Journey Flow */}
          <div className="bg-white border border-[#e7e8ed] rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {studentImpactSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isLast = idx === studentImpactSteps.length - 1;
                return (
                  <div key={idx} className="flex flex-col items-center text-center space-y-3 relative group">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#5141df] flex items-center justify-center group-hover:bg-[#5141df] group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111111", margin: "0 0 2px" }}>
                        {step.label}
                      </h4>
                      <p style={{ fontSize: "12px", color: "#6b707b", margin: 0 }}>
                        {step.subtitle}
                      </p>
                    </div>

                    {!isLast && (
                      <div className="hidden lg:block absolute top-7 -right-3 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-[#5141df]/40" />
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
      <section id="future-vision" className="py-20 md:py-28 bg-white border-y border-[#e7e8ed]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span
              style={{
                color: "#5141df",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              FUTURE CAPABILITIES
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-2px",
                color: "#111111",
                margin: "12px 0",
              }}
            >
              Building More Than a <span style={{ color: "#5141df" }}>Placement Platform.</span>
            </h2>

            <p
              style={{
                color: "#5d6370",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
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
                  style={{
                    padding: "30px 26px",
                    border: "1px solid #e7e8ed",
                    borderRadius: "16px",
                    background: "#f8f9fc",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:border-[#5141df]/40 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-[#5141df] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#5141df",
                        background: "rgba(81, 65, 223, 0.08)",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      FUTURE CAPABILITY
                    </span>
                  </div>

                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111111", margin: "0 0 4px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#6b707b", margin: 0 }}>{item.tag}</p>
                </div>
              );
            })}
          </div>

          {/* Visual Flow Banner */}
          <div className="bg-gradient-to-r from-[#11142b] to-[#1c2042] text-white rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-xl">
            <p className="text-xs font-bold tracking-widest text-[#8d82ff] uppercase">
              UPCOMING ECOSYSTEM EVOLUTION
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold">
              {futureFlowSteps.map((stepName, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5141df]"></span>
                    <span>{stepName}</span>
                  </div>
                  {index < futureFlowSteps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          9. FINAL CTA (MATCHING STANDARD DESIGN)
      ------------------------------------------------------------- */}
      <section
        id="contact"
        style={{
          margin: "40px 8% 0px",
          padding: "75px 40px",
          borderRadius: "24px",
          background: "#f3f1ff",
          textAlign: "center",
        }}
      >
        <div className="w-14 h-14 rounded-2xl bg-[#5141df] text-white flex items-center justify-center mx-auto shadow-md mb-6">
          <School className="w-7 h-7" />
        </div>

        <h2
          style={{
            fontSize: "clamp(34px, 4.2vw, 46px)",
            lineHeight: 1.15,
            letterSpacing: "-2px",
            margin: "0 0 16px",
            fontWeight: 800,
            color: "#111111",
          }}
        >
          Ready to Elevate Your <span style={{ color: "#5141df" }}>Institution?</span>
        </h2>

        <p
          style={{
            color: "#555b68",
            maxWidth: "600px",
            margin: "0 auto 32px",
            lineHeight: 1.7,
            fontSize: "16px",
          }}
        >
          Partner with ELEVA and create stronger connections between your students and the opportunities waiting for them.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={handlePartnerClick}
            style={{
              padding: "14px 28px",
              borderRadius: "10px",
              border: "none",
              background: "#5141df",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 650,
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(81,65,223,0.3)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#4335c4")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#5141df")}
          >
            Partner With Eleva
          </button>

          <button
            onClick={handleExploreClick}
            style={{
              padding: "13px 26px",
              borderRadius: "10px",
              border: "1.5px solid #5141df",
              background: "#ffffff",
              color: "#5141df",
              fontSize: "15px",
              fontWeight: 650,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(81, 65, 223, 0.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
          >
            Explore How It Works
          </button>
        </div>
      </section>

    </div>
  );
};

export default Institutions;
