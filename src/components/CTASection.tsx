import React from 'react';

interface CTASectionProps {
  onOpenPartner: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenPartner }) => {
  return (
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
        Ready to elevate the journey from{" "}
        <span style={{ color: "#5141df" }}>campus to career?</span>
      </h2>

      <p
        style={{
          color: "#626775",
          fontSize: "17px",
          maxWidth: "600px",
          margin: "0 auto 30px",
          lineHeight: 1.7,
        }}
      >
        Join the ecosystem that is redefining how emerging talent connects with forward-thinking employers.
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
  );
};

