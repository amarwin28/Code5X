import React, { useState } from 'react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (message: string) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    onSubmitSuccess('Signed in successfully! Welcome to ELEVA.');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl border border-[#c6c6cd] space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#45464d] hover:text-black"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="space-y-2 text-center">
          <h3 className="font-headline text-[24px] font-bold text-black">Welcome Back to ELEVA</h3>
          <p className="text-sm text-[#45464d]">Sign in to your ecosystem portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-black mb-1">Email Address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com" 
              className="w-full px-4 py-2.5 rounded-lg border border-[#c6c6cd] text-sm focus:ring-2 focus:ring-[#4b41e1] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-black mb-1">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full px-4 py-2.5 rounded-lg border border-[#c6c6cd] text-sm focus:ring-2 focus:ring-[#4b41e1] outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-[#4b41e1] text-white font-semibold text-sm rounded-lg shadow-md hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
