import React from "react";

interface RecruitersProps {
  onOpenPartner?: () => void;
  onOpenSignIn?: () => void;
}

const Recruiters: React.FC<RecruitersProps> = ({ onOpenPartner, onOpenSignIn }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111111",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "560px",
          padding: "50px 8% 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "70px",
          background: "#f8f9fc",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT */}
        <div style={{ maxWidth: "570px" }}>
          <span
            style={{
              color: "#5141df",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            FOR RECRUITERS
          </span>

          <h1
            style={{
              fontSize: "clamp(48px, 5.5vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              margin: "20px 0",
              fontWeight: 700,
            }}
          >
            Find the right
            <br />
            <span style={{ color: "#5141df" }}>talent faster.</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#5d6370",
              maxWidth: "520px",
            }}
          >
            Connect with ambitious students from leading educational
            institutions and discover the verified talent your organization needs.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              marginTop: "35px",
              flexWrap: "wrap",
            }}
          >
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
        </div>

        {/* RIGHT VISUAL */}
        <div
          style={{
            width: "50%",
            maxWidth: "560px",
            minWidth: "350px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "420px",
              borderRadius: "20px",
              background: "#ffffff",
              border: "1px solid #e5e7ef",
              boxShadow: "0 20px 60px rgba(30,35,70,0.06)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "28px",
                fontSize: "20px",
                fontWeight: 700,
                color: "#111111",
              }}
            >
              ELEVA{" "}
              <span style={{ fontWeight: 400, color: "#737886" }}>
                | Talent Network
              </span>
            </div>

            {/* SVG Connecting Dashed Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-[1]" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Node 1: Top-Left S to Center E */}
              <line 
                x1="24%" 
                y1="30%" 
                x2="50%" 
                y2="48%" 
                stroke="#5141df" 
                strokeWidth="1.5" 
                strokeDasharray="3 3" 
                strokeOpacity="0.45"
                className="animate-dash-flow"
              />
              {/* Node 2: Top-Right T to Center E */}
              <line 
                x1="76%" 
                y1="28%" 
                x2="50%" 
                y2="48%" 
                stroke="#5141df" 
                strokeWidth="1.5" 
                strokeDasharray="3 3" 
                strokeOpacity="0.45"
                className="animate-dash-flow"
              />
              {/* Node 3: Mid-Left S to Center E */}
              <line 
                x1="13%" 
                y1="53%" 
                x2="50%" 
                y2="48%" 
                stroke="#5141df" 
                strokeWidth="1.5" 
                strokeDasharray="3 3" 
                strokeOpacity="0.45"
                className="animate-dash-flow"
              />
              {/* Node 4: Bottom-Left R to Center E */}
              <line 
                x1="27%" 
                y1="76%" 
                x2="50%" 
                y2="48%" 
                stroke="#5141df" 
                strokeWidth="1.5" 
                strokeDasharray="3 3" 
                strokeOpacity="0.45"
                className="animate-dash-flow"
              />
              {/* Node 5: Bottom-Right C to Center E */}
              <line 
                x1="74%" 
                y1="77%" 
                x2="50%" 
                y2="48%" 
                stroke="#5141df" 
                strokeWidth="1.5" 
                strokeDasharray="3 3" 
                strokeOpacity="0.45"
                className="animate-dash-flow"
              />
            </svg>

            {/* Center */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "48%",
                transform: "translate(-50%, -50%)",
                width: "75px",
                height: "75px",
                borderRadius: "50%",
                background: "#5141df",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                boxShadow: "0 10px 30px rgba(81,65,223,0.35)",
                zIndex: 2,
              }}
            >
              E
            </div>

            {/* Nodes */}
            {[
              { text: "S", top: "25%", left: "20%", anim: "animate-float-1" },
              { text: "T", top: "23%", right: "20%", anim: "animate-float-2" },
              { text: "R", bottom: "20%", left: "22%", anim: "animate-float-3" },
              { text: "C", bottom: "19%", right: "22%", anim: "animate-float-1" },
              { text: "S", top: "48%", left: "8%", anim: "animate-float-2" },
            ].map((node, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: node.top,
                  left: node.left,
                  right: node.right,
                  bottom: node.bottom,
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "#ebe9ff",
                  border: "3px solid #5141df",
                  color: "#5141df",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  zIndex: 2,
                }}
                className={node.anim}
              >
                {node.text}
              </div>
            ))}

            {/* Labels */}
            <span
              style={{
                position: "absolute",
                top: "90px",
                left: "30px",
                fontSize: "10px",
                fontWeight: 700,
                color: "#777c89",
                letterSpacing: "1px",
              }}
            >
              INSTITUTIONS
            </span>

            <span
              style={{
                position: "absolute",
                top: "90px",
                right: "30px",
                fontSize: "10px",
                fontWeight: 700,
                color: "#777c89",
                letterSpacing: "1px",
              }}
            >
              COMPANIES
            </span>

            <span
              style={{
                position: "absolute",
                bottom: "25px",
                left: "45%",
                fontSize: "10px",
                fontWeight: 700,
                color: "#777c89",
                letterSpacing: "1px",
              }}
            >
              STUDENTS
            </span>
          </div>
        </div>
      </section>

      {/* WHY ELEVA */}
      <section
        style={{
          padding: "110px 8%",
          background: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <span
            style={{
              color: "#5141df",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            WHY ELEVA
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 3.8vw, 42px)",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              fontWeight: 700,
              margin: "15px 0",
              color: "#111111",
            }}
          >
            Built for modern{" "}
            <span style={{ color: "#5141df" }}>recruitment.</span>
          </h2>

          <p
            style={{
              color: "#5d6370",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            ELEVA brings recruiters, students, and educational institutions
            together in one connected ecosystem.
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
          {[
            {
              number: "01",
              title: "Access Better Talent",
              text: "Discover skilled and motivated students from partnered educational institutions.",
            },
            {
              number: "02",
              title: "Connect Directly",
              text: "Build meaningful connections with students and institutions without unnecessary barriers.",
            },
            {
              number: "03",
              title: "Hire With Confidence",
              text: "Find candidates based on skills, profiles, qualifications, and career interests.",
            },
          ].map((item) => (
            <div
              key={item.number}
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
                {item.number}
              </span>

              <h3 style={{ fontSize: "21px", fontWeight: 700, margin: "22px 0 12px", color: "#111111" }}>
                {item.title}
              </h3>

              <p
                style={{
                  color: "#6b707b",
                  lineHeight: 1.7,
                  fontSize: "15px",
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          margin: "40px 8% 0px",
          padding: "75px 40px",
          borderRadius: "24px",
          background: "#f3f1ff",
          textAlign: "center",
        }}
      >
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
          Ready to elevate your <span style={{ color: "#5141df" }}>hiring?</span>
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
          Join ELEVA and experience a platform that brings education, talent, and
          opportunity together seamlessly.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={onOpenPartner}
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
            onClick={onOpenSignIn}
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
            Sign In
          </button>
        </div>
      </section>
    </div>
  );
};

export default Recruiters;

