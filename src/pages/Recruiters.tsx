import React from "react";

const Recruiters: React.FC = () => {
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
          minHeight: "680px",
          padding: "90px 8%",
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
              fontSize: "clamp(42px, 5vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              margin: "20px 0",
              fontWeight: 750,
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
              color: "#555b68",
              maxWidth: "520px",
            }}
          >
            Connect with ambitious students from leading educational
            institutions and discover the talent your organization needs.
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
              style={{
                padding: "15px 26px",
                borderRadius: "8px",
                border: "none",
                background: "#5141df",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 650,
                cursor: "pointer",
              }}
            >
              Partner With Eleva
            </button>

            <button
              style={{
                padding: "15px 26px",
                borderRadius: "8px",
                border: "1.5px solid #5141df",
                background: "#ffffff",
                color: "#5141df",
                fontSize: "15px",
                fontWeight: 650,
                cursor: "pointer",
              }}
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
              boxShadow: "0 20px 60px rgba(30,35,70,0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "28px",
                fontSize: "20px",
                fontWeight: 700,
                color: "#151a4b",
              }}
            >
              ELEVA{" "}
              <span style={{ fontWeight: 400, color: "#737886" }}>
                | Talent Network
              </span>
            </div>

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
              { text: "S", top: "25%", left: "20%" },
              { text: "T", top: "23%", right: "20%" },
              { text: "R", bottom: "20%", left: "22%" },
              { text: "C", bottom: "19%", right: "22%" },
              { text: "S", top: "48%", left: "8%" },
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
              fontSize: "clamp(38px, 5vw, 52px)",
              letterSpacing: "-2px",
              margin: "15px 0",
            }}
          >
            Built for modern{" "}
            <span style={{ color: "#5141df" }}>recruitment.</span>
          </h2>

          <p
            style={{
              color: "#666b77",
              fontSize: "17px",
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
                border: "1px solid #e8e9ef",
                borderRadius: "15px",
              }}
            >
              <span
                style={{
                  color: "#5141df",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                {item.number}
              </span>

              <h3 style={{ fontSize: "22px", margin: "25px 0 12px" }}>
                {item.title}
              </h3>

              <p
                style={{
                  color: "#6c707a",
                  lineHeight: 1.65,
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
          margin: "20px 8% 100px",
          padding: "70px",
          borderRadius: "20px",
          background: "#11142b",
          color: "#ffffff",
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
          READY TO CONNECT?
        </span>

        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 50px)",
            lineHeight: 1.1,
            letterSpacing: "-2px",
            margin: "15px 0",
          }}
        >
          Your next great hire
          <br />
          could be on ELEVA.
        </h2>

        <p
          style={{
            color: "#c4c7d2",
            maxWidth: "550px",
            lineHeight: 1.7,
          }}
        >
          Partner with ELEVA and connect your organization with the next
          generation of talent.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "15px 28px",
            borderRadius: "8px",
            border: "none",
            background: "#5141df",
            color: "#ffffff",
            fontWeight: 650,
            cursor: "pointer",
          }}
        >
          Partner With Eleva
        </button>
      </section>
    </div>
  );
};

export default Recruiters;
