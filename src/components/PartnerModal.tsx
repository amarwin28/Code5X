import React, { useState } from 'react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (message: string) => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    onSubmitSuccess('Partnership inquiry submitted! Our team will contact you shortly.');
    setOrgName('');
    setEmail('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "36px",
          maxWidth: "520px",
          width: "100%",
          boxShadow: "0 25px 60px rgba(15,23,42,0.18)",
          border: "1px solid #e7e8ed",
          position: "relative",
        }}
        className="space-y-6 animate-in fade-in zoom-in-95 duration-200"
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6b707b] hover:text-black transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        <div className="space-y-2">
          <span style={{ color: "#5141df", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px" }}>
            PARTNERSHIP INQUIRY
          </span>
          <h3 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-1px", color: "#111111", margin: "4px 0" }}>
            Partner With Eleva
          </h3>
          <p style={{ color: "#5d6370", fontSize: "14.5px", lineHeight: 1.6, margin: 0 }}>
            Provide your details and our institutional partnerships team will get in touch with you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">Organization Name</label>
            <input 
              type="text" 
              required 
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="e.g. Stanford University / Tech Corp" 
              className="w-full px-4 py-2.5 rounded-lg border border-[#e7e8ed] text-[14px] focus:ring-2 focus:ring-[#5141df] focus:border-[#5141df] outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">Work Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@institution.edu" 
              className="w-full px-4 py-2.5 rounded-lg border border-[#e7e8ed] text-[14px] focus:ring-2 focus:ring-[#5141df] focus:border-[#5141df] outline-none transition-all"
            />
          </div>
          <button 
            type="submit" 
            style={{
              width: "100%",
              padding: "14px",
              background: "#5141df",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 650,
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(81,65,223,0.25)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#4335c4")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#5141df")}
          >
            Submit Partnership Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};
