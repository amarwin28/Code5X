import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { DashboardSearch } from './DashboardSearch';
import { DashboardNotifications } from './DashboardNotifications';
import {
  LayoutDashboard,
  FolderGit2,
  Briefcase,
  FileCheck,
  Bell,
  User,
  Settings,
  LogOut,
  Users,
  Building,
  UserSearch,
  Search,
  Moon,
  Sun,
  ChevronDown,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const {
    user,
    role,
    activeTab,
    setActiveTab,
    theme,
    toggleTheme,
    unreadCount,
    logout,
    setIsSearchOpen,
  } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationPopoverOpen, setIsNotificationPopoverOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const isDark = theme === 'dark';

  // Navigation Items per Role according to prompt specification
  const getNavItems = () => {
    switch (role) {
      case 'STUDENT':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'projects', label: 'Projects', icon: FolderGit2 },
          { id: 'opportunities', label: 'Opportunities', icon: Briefcase },
          { id: 'applications', label: 'Applications', icon: FileCheck },
          { id: 'notifications', label: 'Notifications', icon: Bell, badge: unreadCount },
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'settings', label: 'Settings', icon: Settings },
        ];
      case 'INSTITUTION':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'students', label: 'Students', icon: Users },
          { id: 'projects', label: 'Projects', icon: FolderGit2 },
          { id: 'opportunities', label: 'Opportunities', icon: Briefcase },
          { id: 'recruiters', label: 'Recruiters', icon: Building },
          { id: 'notifications', label: 'Notifications', icon: Bell, badge: unreadCount },
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'settings', label: 'Settings', icon: Settings },
        ];
      case 'RECRUITER':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'candidates', label: 'Candidates', icon: UserSearch },
          { id: 'jobs', label: 'Jobs', icon: Briefcase },
          { id: 'applications', label: 'Applications', icon: FileCheck },
          { id: 'projects', label: 'Projects', icon: FolderGit2 },
          { id: 'notifications', label: 'Notifications', icon: Bell, badge: unreadCount },
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'settings', label: 'Settings', icon: Settings },
        ];
      default:
        return [];
    }
  };

  const getSearchPlaceholder = () => {
    switch (role) {
      case 'STUDENT':
        return 'Search opportunities, projects...';
      case 'INSTITUTION':
        return 'Search students, opportunities, projects...';
      case 'RECRUITER':
        return 'Search candidates, jobs, projects...';
      default:
        return 'Search...';
    }
  };

  const getRoleAccountLabel = () => {
    switch (role) {
      case 'STUDENT':
        return 'Student Account';
      case 'INSTITUTION':
        return 'Institution Account';
      case 'RECRUITER':
        return 'Recruiter Account';
      default:
        return 'Account';
    }
  };

  const navItems = getNavItems();

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={isDark ? 'dark bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans' : 'bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans'}>
      {/* Global Search Overlay */}
      <DashboardSearch />

      {/* Top Header Bar - Strictly WITHOUT role switcher */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'}`}>
        <div className="flex items-center justify-between h-16 px-4 md:px-8">
          {/* Brand Logo & Role Portal Badge */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="flex items-center space-x-3">
              <span className="font-extrabold text-2xl tracking-tight text-[#111111] dark:text-white select-none">
                ELEVA
              </span>
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-md ${
                role === 'STUDENT'
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                  : role === 'INSTITUTION'
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                  : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
              }`}>
                {role} PORTAL
              </span>
            </div>
          </div>

          {/* Center Search Trigger */}
          <div className="hidden sm:flex flex-1 max-w-md mx-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`w-full flex items-center justify-between px-4 py-2 text-xs rounded-xl border transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-800 hover:border-slate-600'
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-slate-400" />
                <span>{getSearchPlaceholder()}</span>
              </div>
              <kbd className="px-2 py-0.5 text-[10px] rounded font-mono bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right Header Actions (Dark Mode, Notifications, User Profile) */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Notifications Popover */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationPopoverOpen(!isNotificationPopoverOpen)}
                className={`p-2 rounded-xl border relative transition-all cursor-pointer ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#5141df] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {isNotificationPopoverOpen && (
                <div className="absolute right-0 mt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <DashboardNotifications onClose={() => setIsNotificationPopoverOpen(false)} />
                </div>
              )}
            </div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className={`flex items-center space-x-2 p-1.5 rounded-xl border transition-all cursor-pointer ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 hover:bg-slate-700'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <img
                  src={user?.avatarUrl || 'https://api.dicebear.com/7.x/avataaars/svg?seed=User'}
                  alt={user?.name}
                  className="w-7 h-7 rounded-lg bg-indigo-100"
                />
                <span className="hidden sm:inline-block text-xs font-bold text-slate-800 dark:text-slate-200 max-w-[120px] truncate">
                  {user?.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {isUserDropdownOpen && (
                <div
                  className={`absolute right-0 mt-2 w-56 rounded-2xl shadow-xl border p-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
                  }`}
                >
                  <div className="p-3 border-b border-slate-100 dark:border-slate-800 space-y-1">
                    <p className="text-xs font-bold truncate">{user?.name}</p>
                    <p className="text-[11px] font-semibold text-[#5141df] truncate">{getRoleAccountLabel()}</p>
                    <p className="text-[10px] text-slate-400 truncate">{user?.email}</p>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setActiveTab('profile');
                        setIsUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs rounded-xl flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <User className="w-3.5 h-3.5 text-[#5141df]" /> Profile
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('settings');
                        setIsUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs rounded-xl flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <Settings className="w-3.5 h-3.5 text-[#5141df]" /> Settings
                    </button>
                  </div>
                  <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        logout();
                      }}
                      className="w-full text-left px-3 py-2 text-xs rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 flex items-center gap-2 font-semibold cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Body with Sidebar + Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation */}
        <aside
          className={`w-64 flex-shrink-0 border-r flex flex-col justify-between transition-all z-30 ${
            isMobileMenuOpen ? 'fixed inset-y-0 left-0 top-16 z-50 w-64 shadow-2xl' : 'hidden md:flex'
          } ${isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'}`}
        >
          <div className="p-4 space-y-6">
            {/* Active Workspace Banner */}
            <div className="px-3 py-2.5 rounded-xl bg-gradient-to-br from-[#5141df]/10 to-indigo-500/10 border border-[#5141df]/20 flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-[#5141df]" />
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#5141df] uppercase block">
                  Active Workspace
                </span>
                <span className="text-xs font-extrabold">{role.charAt(0) + role.slice(1).toLowerCase()} Control Center</span>
              </div>
            </div>

            {/* Menu List */}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#5141df] text-white shadow-md shadow-[#5141df]/20 font-bold'
                        : isDark
                        ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          isActive ? 'bg-white text-[#5141df]' : 'bg-[#5141df] text-white'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Logout at bottom of sidebar */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={logout}
              className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
