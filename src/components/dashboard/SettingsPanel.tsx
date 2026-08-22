import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Bell, Key, Moon, Sun, CheckCircle } from 'lucide-react';

export const SettingsPanel: React.FC = () => {
  const { theme, toggleTheme } = useAuth();
  const isDark = theme === 'dark';

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [opportunityDigest, setOpportunityDigest] = useState(true);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword === confirmPassword) {
      setPasswordSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPasswordSuccess(false), 3000);
    }
  };

  const cardClass = `p-6 rounded-2xl border shadow-sm ${
    isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
  }`;
  const inputClass = `w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
    isDark
      ? 'bg-slate-800 border-slate-700 text-white focus:ring-2 focus:ring-[#5141df]'
      : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#5141df] focus:bg-white'
  }`;
  const labelClass = `block text-xs font-bold uppercase tracking-wider mb-1.5 ${
    isDark ? 'text-slate-400' : 'text-slate-600'
  }`;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Visual Preference / Theme Toggle */}
      <div className={cardClass}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-[#5141df]">
              {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-base font-bold">Dashboard Theme Preference</h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Switch between Light and Dark theme mode. Strictly affects authenticated dashboard views.
              </p>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-xl font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer ${
              isDark
                ? 'bg-slate-800 text-amber-400 hover:bg-slate-700 border border-slate-700'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>

      {/* Security / Password Change */}
      <div className={cardClass}>
        <h3 className="text-base font-bold mb-4 flex items-center gap-2">
          <Key className="w-5 h-5 text-[#5141df]" /> Account Security & Password
        </h3>

        {passwordSuccess && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> Password updated successfully!
          </div>
        )}

        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className={labelClass}>Current Password</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>New Password</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Confirm New Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#5141df] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#4335c4] transition-all cursor-pointer"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* Notification Preferences */}
      <div className={cardClass}>
        <h3 className="text-base font-bold mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5 text-[#5141df]" /> Notification Preferences
        </h3>

        <div className="space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
          <div className="pt-2 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold">Email Application Updates</h4>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Receive instant emails when interview requests or application statuses change.
              </p>
            </div>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
              className="w-5 h-5 accent-[#5141df] rounded cursor-pointer"
            />
          </div>

          <div className="pt-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold">Weekly Opportunity Digest</h4>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                A curated summary of top matching candidates and recruitment drives.
              </p>
            </div>
            <input
              type="checkbox"
              checked={opportunityDigest}
              onChange={(e) => setOpportunityDigest(e.target.checked)}
              className="w-5 h-5 accent-[#5141df] rounded cursor-pointer"
            />
          </div>

          <div className="pt-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold">SMS Security Alerts</h4>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                SMS notification for sign-ins from unrecognized devices.
              </p>
            </div>
            <input
              type="checkbox"
              checked={smsAlerts}
              onChange={(e) => setSmsAlerts(e.target.checked)}
              className="w-5 h-5 accent-[#5141df] rounded cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
