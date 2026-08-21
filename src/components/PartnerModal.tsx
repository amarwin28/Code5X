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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl border border-[#c6c6cd] space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#45464d] hover:text-black"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="space-y-2">
          <h3 className="font-headline text-[24px] font-bold text-black">Partner With Eleva</h3>
          <p className="text-sm text-[#45464d]">
            Provide your details and our institutional partnerships team will get in touch with you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-black mb-1">Organization Name</label>
            <input 
              type="text" 
              required 
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="e.g. Stanford University / Tech Corp" 
              className="w-full px-4 py-2.5 rounded-lg border border-[#c6c6cd] text-sm focus:ring-2 focus:ring-[#4b41e1] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-black mb-1">Work Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@institution.edu" 
              className="w-full px-4 py-2.5 rounded-lg border border-[#c6c6cd] text-sm focus:ring-2 focus:ring-[#4b41e1] outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-[#4b41e1] text-white font-semibold text-sm rounded-lg shadow-md hover:opacity-90 transition-opacity"
          >
            Submit Partnership Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};
