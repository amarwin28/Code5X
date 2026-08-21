import React from 'react';
import { ToastMessage } from '../types';

interface ToastContainerProps {
  toasts: ToastMessage[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto p-4 rounded-xl border-l-4 bg-slate-900 text-white border-[#4b41e1] shadow-2xl text-xs font-semibold flex items-center gap-3 transition-all duration-300 animate-in slide-in-from-bottom-5"
        >
          <span className="material-symbols-outlined text-lg text-emerald-400">check_circle</span>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
