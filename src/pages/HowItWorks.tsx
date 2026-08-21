import React from 'react';
import { 
  UserCheck, 
  Target, 
  TrendingUp, 
  GraduationCap, 
  Building2, 
  Briefcase, 
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
      title: "Build Your Profile",
      description: "Create a complete profile with your education, skills, projects, certifications, and achievements.",
    },
    {
      number: "02",
      title: "Discover Your Skills",
      description: "ELEVA understands your strengths and identifies the skills that can help you reach your career goals.",
    },
    {
      number: "03",
      title: "Find Opportunities",
      description: "Get matched with relevant opportunities based on your skills, profile, and career interests.",
    },
    {
      number: "04",
      title: "Connect & Grow",
      description: "Connect with recruiters and institutions while continuously improving your skills and career readiness.",
    }
  ];

  const flowNodes = [
    {
      step: "01",
      name: "Profile Creation",
      detail: "Comprehensive talent portfolio & verification",
      icon: UserCheck,
      highlight: false
    },
    {
      step: "02",
      name: "Skill Analysis",
      detail: "AI-driven competency mapping & gap review",
      icon: Cpu,
      highlight: true
    },
    {
      step: "03",
      name: "Opportunity Match",
      detail: "Algorithmic role & cohort alignment",
      icon: Target,
      highlight: false
    },
    {
      step: "04",
      name: "Direct Connection",
      detail: "Seamless recruiter & institution access",
      icon: Users,
      highlight: true
    },
    {
      step: "05",
      name: "Career Growth",
      detail: "Continuous development & tracking",
      icon: TrendingUp,
      highlight: false
    }
  ];

  const participants = [
    {
      number: "01",
      title: "Students",
      subtitle: "Learners & Emerging Talent",
      description: "Build verified skills, discover high-impact career pathways, and get discovered by top hiring teams.",
      icon: GraduationCap,
      highlights: [
        "Dynamic skill verification & badge showcase",
        "Curated career recommendations",
        "Direct visibility to actively hiring recruiters"
      ]
    },
    {
      number: "02",
      title: "Institutions",
      subtitle: "Colleges & Universities",
      description: "Gain deep visibility into student competencies, streamline placements, and track long-term career outcomes.",
      icon: Building2,
      highlights: [
        "Real-time cohort competency analytics",
        "Direct recruiter network management",
        "Accelerated placement conversion rates"
      ]
    },
    {
      number: "03",
      title: "Recruiters",
      subtitle: "Companies & Hiring Teams",
      description: "Discover pre-qualified candidates directly from partner institutions with verified skills and career readiness.",
      icon: Briefcase,
      highlights: [
        "Pre-qualified candidate pipeline",
        "Streamlined campus and early-career hiring",
        "Verified technical and professional proficiencies"
      ]
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111111",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      {/* 1. HERO */}
      <section
        style={{
          padding: "110px 8% 100px",
          background: "#f8f9fc",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "#5141df",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "1.5px",
          }}
        >
          HOW IT WORKS
        </span>

        <h1
          style={{
            maxWidth: "900px",
            margin: "20px auto",
            fontSize: "clamp(48px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-3px",
          }}
        >
          Connecting education{" "}
          <span style={{ color: "#5141df" }}>step by step.</span>
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "25px auto 0",
            color: "#5d6370",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          ELEVA creates an intelligent bridge between students, institutions, and recruiters to make career growth predictable and seamless.
        </p>

        {/* Visual Workflow Cards */}
        <div
          style={{
            maxWidth: "960px",
            margin: "60px auto 0",
            background: "#ffffff",
            borderRadius: "20px",
            border: "1px solid #e7e8ed",
            padding: "40px 30px",
            boxShadow: "0 10px 35px rgba(15,23,42,0.04)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Student Box */}
            <div className="p-6 rounded-xl border border-[#e7e8ed] bg-[#f8f9fc] text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#e7e8ed] flex items-center justify-center text-[#5141df] mb-3 shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-[1.5px] text-[#5141df] uppercase mb-1">Origin</span>
              <h3 style={{ fontSize: "19px", fontWeight: 700, margin: "6px 0 4px", color: "#111111" }}>Student</h3>
              <p style={{ color: "#6b707b", fontSize: "13.5px", lineHeight: 1.6, margin: 0 }}>
                Verified skills, coursework & aspirations
              </p>
            </div>

            {/* Middle Hub */}
            <div className="p-6 rounded-xl bg-[#5141df] text-white text-center flex flex-col items-center shadow-lg shadow-[#5141df]/20 md:scale-105">
              <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white mb-3 font-bold text-xl">
                E
              </div>
              <span className="text-[11px] font-bold tracking-[1.5px] text-white/80 uppercase mb-1">Unified Platform</span>
              <h3 style={{ fontSize: "19px", fontWeight: 700, margin: "6px 0 4px", color: "#ffffff" }}>ELEVA Hub</h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13.5px", lineHeight: 1.6, margin: 0 }}>
                Intelligent routing & competency matching
              </p>
            </div>

            {/* Opportunity Box */}
            <div className="p-6 rounded-xl border border-[#e7e8ed] bg-[#f8f9fc] text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#e7e8ed] flex items-center justify-center text-[#5141df] mb-3 shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold tracking-[1.5px] text-[#5141df] uppercase mb-1">Destination</span>
              <h3 style={{ fontSize: "19px", fontWeight: 700, margin: "6px 0 4px", color: "#111111" }}>Opportunity</h3>
              <p style={{ color: "#6b707b", fontSize: "13.5px", lineHeight: 1.6, margin: 0 }}>
                High-fit roles & institutional success
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE FOUR-STEP PROCESS */}
      <section
        style={{
          padding: "110px 8%",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>
          <span
            style={{
              color: "#5141df",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            THE PROCESS
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 3.8vw, 42px)",
              margin: "15px 0",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              fontWeight: 700,
              color: "#111111",
            }}
          >
            A clear path to{" "}
            <span style={{ color: "#5141df" }}>success.</span>
          </h2>

          <p
            style={{
              color: "#5d6370",
              fontSize: "18px",
              lineHeight: 1.7,
              margin: "15px auto 0",
            }}
          >
            A structured, transparent pathway designed to unlock potential and streamline career entry.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
            marginTop: "55px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                padding: "35px",
                border: "1px solid #e7e8ed",
                borderRadius: "15px",
                background: "#ffffff",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="hover:border-[#5141df]/40 hover:shadow-[0_12px_32px_rgba(81,65,223,0.08)] hover:-translate-y-1"
            >
              <span
                style={{
                  color: "#5141df",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                {step.number}
              </span>

              <h3
                style={{
                  fontSize: "21px",
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                  margin: "22px 0 12px",
                  color: "#111111",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  color: "#6b707b",
                  lineHeight: 1.7,
                  fontSize: "15px",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SIMPLE ELEVA FLOW */}
      <section
        style={{
          padding: "100px 8%",
          background: "#11142b",
          color: "#ffffff",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 60px" }}>
          <span
            style={{
              color: "#9c93ff",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            ARCHITECTURE
          </span>

          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 46px)",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              margin: "20px 0",
              fontWeight: 700,
            }}
          >
            Simple ELEVA <span style={{ color: "#8d82ff" }}>Flow.</span>
          </h2>

          <p
            style={{
              color: "#c5c7d2",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            How data and opportunity move seamlessly across the ELEVA ecosystem in real time.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {flowNodes.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.name}
                  style={{
                    padding: "26px 20px",
                    borderRadius: "15px",
                    background: item.highlight ? "rgba(141, 130, 255, 0.12)" : "rgba(255, 255, 255, 0.05)",
                    border: item.highlight ? "1px solid #8d82ff" : "1px solid rgba(255, 255, 255, 0.1)",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: item.highlight ? "#8d82ff" : "rgba(255,255,255,0.1)",
                      color: item.highlight ? "#11142b" : "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span style={{ color: "#8d82ff", fontSize: "11px", fontWeight: 700, letterSpacing: "1px" }}>
                    STEP {item.step}
                  </span>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, margin: "8px 0 6px", color: "#ffffff" }}>
                    {item.name}
                  </h4>
                  <p style={{ color: "#c5c7d2", fontSize: "12.5px", lineHeight: 1.5, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THREE ECOSYSTEM PARTICIPANTS */}
      <section
        style={{
          padding: "110px 8%",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>
          <span
            style={{
              color: "#5141df",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            THREE PILLARS
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 3.8vw, 42px)",
              margin: "15px 0",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              fontWeight: 700,
              color: "#111111",
            }}
          >
            Built for every{" "}
            <span style={{ color: "#5141df" }}>stakeholder.</span>
          </h2>

          <p
            style={{
              color: "#5d6370",
              fontSize: "18px",
              lineHeight: 1.7,
              margin: "15px auto 0",
            }}
          >
            Purpose-designed workflows catering specifically to students, institutions, and recruiters.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "55px",
          }}
        >
          {participants.map((item) => (
            <div
              key={item.title}
              style={{
                padding: "35px",
                border: "1px solid #e7e8ed",
                borderRadius: "15px",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="hover:border-[#5141df]/40 hover:shadow-[0_12px_32px_rgba(81,65,223,0.08)] hover:-translate-y-1"
            >
              <div>
                <span
                  style={{
                    color: "#5141df",
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  {item.number}
                </span>

                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                    margin: "18px 0 6px",
                    color: "#111111",
                  }}
                >
                  {item.title}
                </h3>

                <span
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#5141df",
                    marginBottom: "12px",
                  }}
                >
                  {item.subtitle}
                </span>

                <p
                  style={{
                    color: "#6b707b",
                    lineHeight: 1.7,
                    fontSize: "15px",
                    margin: "0 0 20px",
                  }}
                >
                  {item.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#f0f1f5]">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#45464d] font-medium pt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#5141df] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section
        style={{
          margin: "40px 8% 0px",
          padding: "70px 50px",
          borderRadius: "20px",
          background: "#f3f1ff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(31px, 3.8vw, 42px)",
            letterSpacing: "-2px",
            margin: "0 0 15px",
            fontWeight: 700,
            color: "#111111",
          }}
        >
          Ready to elevate your{" "}
          <span style={{ color: "#5141df" }}>journey?</span>
        </h2>

        <p
          style={{
            color: "#626775",
            maxWidth: "600px",
            margin: "0 auto 30px",
            lineHeight: 1.7,
            fontSize: "17px",
          }}
        >
          Join ELEVA and experience a platform that brings education, talent, and opportunity together seamlessly.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onOpenPartner}
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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#4335c4")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#5141df")}
          >
            Partner With Eleva
          </button>

          <button
            onClick={onOpenSignIn}
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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(81, 65, 223, 0.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
          >
            Sign In
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

