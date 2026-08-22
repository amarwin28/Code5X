import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Bell, CheckCheck, Info, CheckCircle2, AlertTriangle, Briefcase } from 'lucide-react';

interface DashboardNotificationsProps {
  onClose?: () => void;
  isFullView?: boolean;
}

export const DashboardNotifications: React.FC<DashboardNotificationsProps> = ({ onClose, isFullView = false }) => {
  const { notifications, unreadCount, markNotificationRead, markAllNotificationsRead, setActiveTab, theme } = useAuth();

  const isDark = theme === 'dark';

  const getIcon = (type: string) => {
    switch (type) {
      case 'SUCCESS':
        return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case 'WARNING':
        return <AlertTriangle className="w-4 h-4 text-amber-500" />;
      case 'APPLICATION':
        return <Briefcase className="w-4 h-4 text-indigo-500" />;
      case 'INFO':
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const handleNotificationClick = (id: string, linkTab?: string) => {
    markNotificationRead(id);
    if (linkTab) {
      setActiveTab(linkTab);
      if (onClose) onClose();
    }
  };

  return (
    <div
      className={`rounded-2xl shadow-xl border overflow-hidden transition-all ${
        isFullView ? 'w-full max-w-4xl mx-auto' : 'w-80 md:w-96'
      } ${isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}
    >
      {/* Header */}
      <div className={`p-4 flex items-center justify-between border-b ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-100 bg-slate-50/80'}`}>
        <div className="flex items-center space-x-2">
          <Bell className="w-5 h-5 text-[#5141df]" />
          <h3 className="font-bold text-sm">Notifications</h3>
          {unreadCount > 0 && (
            <span className="bg-[#5141df] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
              {unreadCount} new
            </span>
          )}
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllNotificationsRead}
            className="text-xs font-semibold text-[#5141df] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <CheckCheck className="w-3.5 h-3.5" /> Mark all read
          </button>
        )}
      </div>

      {/* List */}
      <div className={`${isFullView ? 'max-h-[600px]' : 'max-h-80'} overflow-y-auto divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-100'}`}>
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            No notifications available
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNotificationClick(item.id, item.linkTab)}
              className={`p-4 cursor-pointer transition-all flex items-start space-x-3 ${
                !item.isRead
                  ? isDark
                    ? 'bg-slate-800/60 hover:bg-slate-800'
                    : 'bg-indigo-50/50 hover:bg-indigo-50'
                  : isDark
                  ? 'hover:bg-slate-800/40'
                  : 'hover:bg-slate-50'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">{getIcon(item.type)}</div>
              <div className="flex-grow space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className={`text-xs font-bold ${!item.isRead ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-slate-300' : 'text-slate-700')}`}>
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-slate-400">{item.timestamp}</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.message}</p>
              </div>
              {!item.isRead && (
                <span className="w-2 h-2 rounded-full bg-[#5141df] mt-1.5 flex-shrink-0" />
              )}
            </div>
          ))
        )}
      </div>

      {isFullView && (
        <div className={`p-3 text-center text-xs border-t ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
          Showing all recent activity notifications
        </div>
      )}
    </div>
  );
};
