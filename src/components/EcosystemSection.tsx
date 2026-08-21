import React from 'react';

export const EcosystemSection: React.FC = () => {
  const cards = [
    {
      id: 'institutions',
      number: '01',
      title: 'Institutions',
      description: "Provide your students with direct pathways to premium employers. Track success metrics and elevate your institution's placement rates."
    },
    {
      id: 'students',
      number: '02',
      title: 'Students',
      description: 'Build a verified portfolio of skills. Get discovered by top recruiters actively seeking talent from your specific program.'
    },
    {
      id: 'recruiters',
      number: '03',
      title: 'Recruiters',
      description: 'Access a verified, pre-qualified talent pool directly from partner institutions. Streamline early-career hiring efficiently.'
    }
  ];

  return (
    <section id="ecosystem" className="py-24 px-6 md:px-8 max-w-[1280px] mx-auto">
      <div className="text-center max-w-[700px] mx-auto">
        <span
          style={{
            color: "#5141df",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "1.5px",
          }}
        >
          THE ECOSYSTEM
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
          One platform. Three{" "}
          <span style={{ color: "#5141df" }}>connected worlds.</span>
        </h2>

        <p
          style={{
            color: "#5d6370",
            fontSize: "18px",
            lineHeight: 1.7,
            margin: "15px auto 0",
          }}
        >
          Uniting the entire career lifecycle into a single, intelligent ecosystem designed for mutual growth.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "22px",
          marginTop: "55px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
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
              {card.number}
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
              {card.title}
            </h3>

            <p
              style={{
                color: "#6b707b",
                lineHeight: 1.7,
                fontSize: "15px",
                margin: 0,
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

