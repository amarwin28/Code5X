import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types/dashboard';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (message: string) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onSubmitSuccess }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('STUDENT');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(email, password, selectedRole);

      onClose();

      onSubmitSuccess(
        `Signed in successfully as ${selectedRole}! Welcome to your ELEVA Dashboard.`
      );

      setEmail('');
      setPassword('');
      setError(null);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'Unable to sign in. Please check your credentials.';

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const setDemoUser = (role: UserRole) => {
    setSelectedRole(role);
    if (role === 'STUDENT') setEmail('student@eleva.com');
    else if (role === 'INSTITUTION') setEmail('institution@eleva.com');
    else if (role === 'RECRUITER') setEmail('recruiter@eleva.com');
    setPassword('Eleva@123');
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "36px",
          maxWidth: "460px",
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

        <div className="space-y-2 text-center">
          <span style={{ color: "#5141df", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px" }}>
            PORTAL ACCESS
          </span>
          <h3 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-1px", color: "#111111", margin: "4px 0" }}>
            Welcome Back to ELEVA
          </h3>
          <p style={{ color: "#5d6370", fontSize: "14.5px", margin: 0 }}>
            Sign in to your connected ecosystem portal
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="bg-[#f4f5f8] p-1 rounded-xl flex items-center gap-1 border border-[#e7e8ed]">
          <button
            type="button"
            onClick={() => setDemoUser('STUDENT')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${selectedRole === 'STUDENT'
              ? 'bg-white text-[#5141df] shadow-xs font-bold'
              : 'text-[#5d6370] hover:text-black'
              }`}
          >
            🎓 Student
          </button>
          <button
            type="button"
            onClick={() => setDemoUser('INSTITUTION')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${selectedRole === 'INSTITUTION'
              ? 'bg-white text-[#5141df] shadow-xs font-bold'
              : 'text-[#5d6370] hover:text-black'
              }`}
          >
            🏛️ Institution
          </button>
          <button
            type="button"
            onClick={() => setDemoUser('RECRUITER')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${selectedRole === 'RECRUITER'
              ? 'bg-white text-[#5141df] shadow-xs font-bold'
              : 'text-[#5d6370] hover:text-black'
              }`}
          >
            💼 Recruiter
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs font-semibold border border-red-200 text-left">
              {error}
            </div>
          )}
          <div>
            <label className="block text-[13px] font-semibold text-[#111111] mb-1.5 text-left">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              placeholder="name@domain.com"
              className="w-full px-4 py-2.5 rounded-lg border border-[#e7e8ed] text-[14px] focus:ring-2 focus:ring-[#5141df] focus:border-[#5141df] outline-none transition-all text-[#111111]"
            />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-[#111111] mb-1.5 text-left">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(null);
              }}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-[#e7e8ed] text-[14px] focus:ring-2 focus:ring-[#5141df] focus:border-[#5141df] outline-none transition-all text-[#111111]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "#7b6ee6" : "#5141df",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 650,
              borderRadius: "8px",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 4px 14px rgba(81,65,223,0.25)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.background = "#4335c4";
            }}
            onMouseLeave={(e) => {
              if (!loading) e.currentTarget.style.background = "#5141df";
            }}
          >
            {loading
              ? "Signing in..."
              : `Sign In to ${selectedRole.charAt(0) + selectedRole.slice(1).toLowerCase()} Portal`}
          </button>
        </form>
      </div>
    </div>
  );
};
