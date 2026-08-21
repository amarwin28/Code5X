import React from "react";

interface AboutProps {
  onOpenPartner?: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenPartner }) => {
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
          ABOUT ELEVA
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
          Connecting{" "}
          <span style={{ color: "#5141df" }}>education</span>
          <br />
          with opportunity.
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
          ELEVA is a connected ecosystem designed to bring students,
          educational institutions, and recruiters together to create better
          opportunities for everyone.
        </p>
      </section>

      {/* OUR STORY */}
      <section
        style={{
          padding: "110px 8%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              color: "#5141df",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            OUR STORY
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 3.8vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              fontWeight: 700,
              color: "#111111",
              margin: "15px 0 25px",
            }}
          >
            The gap between{" "}
            <span style={{ color: "#5141df" }}>potential</span> and
            opportunity.
          </h2>

          <p
            style={{
              color: "#5d6370",
              fontSize: "18px",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            Students have talent. Institutions have talented communities.
            Recruiters have opportunities. Yet these three groups often
            operate in disconnected systems.
          </p>

          <p
            style={{
              color: "#5d6370",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            ELEVA was created to change that. We are building a platform where
            education and employment can connect naturally, efficiently, and
            meaningfully.
          </p>
        </div>

        {/* Visual */}
        <div
          style={{
            minHeight: "400px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, #f2f0ff 0%, #ffffff 50%, #eeeeff 100%)",
            border: "1px solid #e6e6ef",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* SVG Connecting Dashed Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-[1]" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            {/* STUDENTS to Center E */}
            <line 
              x1="22%" 
              y1="25%" 
              x2="50%" 
              y2="50%" 
              stroke="#5141df" 
              strokeWidth="1.5" 
              strokeDasharray="3 3" 
              strokeOpacity="0.4"
              className="animate-dash-flow"
            />
            {/* INSTITUTIONS to Center E */}
            <line 
              x1="78%" 
              y1="25%" 
              x2="50%" 
              y2="50%" 
              stroke="#5141df" 
              strokeWidth="1.5" 
              strokeDasharray="3 3" 
              strokeOpacity="0.4"
              className="animate-dash-flow"
            />
            {/* RECRUITERS to Center E */}
            <line 
              x1="48%" 
              y1="78%" 
              x2="50%" 
              y2="50%" 
              stroke="#5141df" 
              strokeWidth="1.5" 
              strokeDasharray="3 3" 
              strokeOpacity="0.4"
              className="animate-dash-flow"
            />
          </svg>

          {/* CENTER */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "#5141df",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "35px",
              fontWeight: 700,
              boxShadow: "0 15px 40px rgba(81,65,223,0.3)",
              zIndex: 2,
            }}
          >
            E
          </div>

          {[
            {
              label: "STUDENTS",
              top: "18%",
              left: "12%",
            },
            {
              label: "INSTITUTIONS",
              top: "18%",
              right: "10%",
            },
            {
              label: "RECRUITERS",
              bottom: "18%",
              left: "38%",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                position: "absolute",
                top: item.top,
                left: item.left,
                right: item.right,
                padding: "15px 20px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1px solid #dedee9",
                color: "#5141df",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                boxShadow: "0 8px 25px rgba(30,30,70,0.08)",
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section
        style={{
          padding: "100px 8%",
          background: "#11142b",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#9c93ff",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            OUR MISSION
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
            Make opportunity more{" "}
            <span style={{ color: "#8d82ff" }}>accessible.</span>
          </h2>

          <p
            style={{
              color: "#c5c7d2",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            We believe every student should have access to meaningful career
            opportunities, every institution should be able to showcase its
            talent, and every recruiter should be able to discover the right
            people.
          </p>
        </div>
      </section>

      {/* VALUES */}
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
            WHAT WE BELIEVE
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
            Built around{" "}
            <span style={{ color: "#5141df" }}>people.</span>
          </h2>
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
              title: "Student First",
              text: "We put students and their potential at the center of the ecosystem.",
            },
            {
              number: "02",
              title: "Meaningful Connections",
              text: "We create connections that go beyond applications and profiles.",
            },
            {
              number: "03",
              title: "Equal Opportunity",
              text: "We believe great opportunities should be accessible to talented people everywhere.",
            },
            {
              number: "04",
              title: "Continuous Growth",
              text: "We help students, institutions, and organizations grow together.",
            },
          ].map((value) => (
            <div
              key={value.number}
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
                {value.number}
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
                {value.title}
              </h3>

              <p
                style={{
                  color: "#6b707b",
                  lineHeight: 1.7,
                  fontSize: "15px",
                  margin: 0,
                }}
              >
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
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
            fontWeight: 700,
            color: "#111111",
            margin: "0 0 15px",
            lineHeight: 1.15,
          }}
        >
          The future starts with a{" "}
          <span style={{ color: "#5141df" }}>connection.</span>
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
          Join ELEVA and become part of an ecosystem connecting education,
          talent, and opportunity.
        </p>

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
      </section>
    </div>
  );
};

export default About;
