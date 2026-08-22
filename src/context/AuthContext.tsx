import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole, DashboardTheme, NotificationItem, StudentProfileData, InstitutionProfileData, RecruiterProfileData } from '../types/dashboard';

interface AuthContextType {
  user: User | null;
  role: UserRole;
  activeTab: string;
  theme: DashboardTheme;
  searchQuery: string;
  isSearchOpen: boolean;
  notifications: NotificationItem[];
  unreadCount: number;
  studentProfile: StudentProfileData;
  institutionProfile: InstitutionProfileData;
  recruiterProfile: RecruiterProfileData;
  login: (email: string, password: string, role?: UserRole) => Promise<void>;
  logout: () => void;
  setActiveTab: (tab: string) => void;
  setTheme: (theme: DashboardTheme) => void;
  toggleTheme: () => void;
  setSearchQuery: (query: string) => void;
  setIsSearchOpen: (open: boolean) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  updateStudentProfile: (data: Partial<StudentProfileData>) => void;
  updateInstitutionProfile: (data: Partial<InstitutionProfileData>) => void;
  updateRecruiterProfile: (data: Partial<RecruiterProfileData>) => void;
}

const defaultStudentProfile: StudentProfileData = {
  firstName: 'Alex',
  lastName: 'Morgan',
  email: 'alex.morgan@university.edu',
  phone: '+1 (555) 234-5678',
  institution: 'Massachusetts Institute of Technology',
  department: 'Computer Science & AI',
  cgpa: 3.92,
  graduationYear: 2025,
  rollNumber: 'CS-2021-0892',
  bio: 'Passionate software engineering student specializing in distributed systems, full-stack development, and machine learning.',
  skills: ['TypeScript', 'React', 'Node.js', 'Python', 'TailwindCSS', 'PostgreSQL', 'Docker', 'Git'],
  resumeName: 'Alex_Morgan_Resume_2025.pdf',
  linkedinUrl: 'https://linkedin.com/in/alexmorgan-dev',
  githubUrl: 'https://github.com/alexmorgan-dev',
};

const defaultInstitutionProfile: InstitutionProfileData = {
  name: 'Massachusetts Institute of Technology',
  code: 'MIT-CAMPUS-01',
  contactEmail: 'placements@mit.edu',
  phone: '+1 (617) 253-1000',
  address: '77 Massachusetts Ave, Cambridge, MA 02139',
  coordinatorName: 'Dr. Sarah Jenkins',
  coordinatorEmail: 'sjenkins@mit.edu',
  website: 'https://www.mit.edu',
  establishedYear: 1861,
  totalStudents: 11500,
};

const defaultRecruiterProfile: RecruiterProfileData = {
  companyName: 'Apex Innovations Tech',
  recruiterName: 'Marcus Vance',
  contactEmail: 'marcus.vance@apexinnovations.io',
  phone: '+1 (415) 889-2041',
  industry: 'Artificial Intelligence & Software',
  website: 'https://apexinnovations.io',
  location: 'San Francisco, CA (Hybrid)',
  companySize: '500-1000 employees',
  bio: 'Senior Technical Recruiter managing early-career engineering pipelines and university partnerships globally.',
  isVerified: true,
};

const initialNotifications: NotificationItem[] = [
  {
    id: 'n1',
    title: 'Interview Scheduled',
    message: 'Apex Innovations Tech scheduled your technical interview for tomorrow at 2:00 PM EST.',
    type: 'SUCCESS',
    timestamp: '10 mins ago',
    isRead: false,
    linkTab: 'applications',
  },
  {
    id: 'n2',
    title: 'New Opportunity Listed',
    message: 'NextGen Robotics added a new role: Senior Frontend Engineer (Internship).',
    type: 'INFO',
    timestamp: '1 hour ago',
    isRead: false,
    linkTab: 'opportunities',
  },
  {
    id: 'n3',
    title: 'Project Endorsement',
    message: 'Your project "Distributed Neural Cluster" received approval from the Institution coordinator.',
    type: 'APPLICATION',
    timestamp: '3 hours ago',
    isRead: true,
    linkTab: 'projects',
  },
  {
    id: 'n4',
    title: 'Profile Completion High',
    message: 'Your talent score is top 5% among applicants this term.',
    type: 'INFO',
    timestamp: 'Yesterday',
    isRead: true,
    linkTab: 'profile',
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('eleva_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [theme, setThemeState] = useState<DashboardTheme>(() => {
    return (localStorage.getItem('eleva_dashboard_theme') as DashboardTheme) || 'light';
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

  const [studentProfile, setStudentProfile] = useState<StudentProfileData>(defaultStudentProfile);
  const [institutionProfile, setInstitutionProfile] = useState<InstitutionProfileData>(defaultInstitutionProfile);
  const [recruiterProfile, setRecruiterProfile] = useState<RecruiterProfileData>(defaultRecruiterProfile);

  const role: UserRole = user?.role || 'STUDENT';

  useEffect(() => {
    if (user) {
      localStorage.setItem('eleva_user', JSON.stringify(user));
      localStorage.setItem('eleva_role', user.role);
    } else {
      localStorage.removeItem('eleva_user');
      localStorage.removeItem('eleva_role');
      localStorage.removeItem('eleva_token');
    }
  }, [user]);

  const login = async (
    email: string,
    password: string,
    selectedRole: UserRole = 'STUDENT'
  ): Promise<void> => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        role: selectedRole,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Invalid email or password');
    }

    const backendUser = result.data.user;

    const newUser: User = {
      id: String(backendUser.id),
      email: backendUser.email,
      name: backendUser.name || (backendUser.role === 'STUDENT' ? 'Alex Morgan' : backendUser.role === 'INSTITUTION' ? 'Dr. Sarah Jenkins' : 'Marcus Vance'),
      role: backendUser.role as UserRole,
      title: backendUser.title || (backendUser.role === 'STUDENT' ? 'Student / Candidate' : backendUser.role === 'INSTITUTION' ? 'Director of Career Services' : 'Head of University Talent'),
      organization: backendUser.organization || (backendUser.role === 'STUDENT' ? 'Massachusetts Institute of Technology' : backendUser.role === 'INSTITUTION' ? 'Massachusetts Institute of Technology' : 'Apex Innovations Tech'),
      avatarUrl:
        backendUser.avatarUrl ||
        `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
          backendUser.email
        )}`,
    };

    localStorage.setItem('eleva_token', result.data.token);

    setUser(newUser);
    setActiveTab('dashboard');
  };

  const logout = () => {
    localStorage.removeItem('eleva_token');
    localStorage.removeItem('eleva_user');
    localStorage.removeItem('eleva_role');
    setUser(null);
    setActiveTab('dashboard');
  };

  const setTheme = (newTheme: DashboardTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('eleva_dashboard_theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const updateStudentProfile = (data: Partial<StudentProfileData>) => {
    setStudentProfile((prev) => ({ ...prev, ...data }));
  };

  const updateInstitutionProfile = (data: Partial<InstitutionProfileData>) => {
    setInstitutionProfile((prev) => ({ ...prev, ...data }));
  };

  const updateRecruiterProfile = (data: Partial<RecruiterProfileData>) => {
    setRecruiterProfile((prev) => ({ ...prev, ...data }));
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        activeTab,
        theme,
        searchQuery,
        isSearchOpen,
        notifications,
        unreadCount,
        studentProfile,
        institutionProfile,
        recruiterProfile,
        login,
        logout,
        setActiveTab,
        setTheme,
        toggleTheme,
        setSearchQuery,
        setIsSearchOpen,
        markNotificationRead,
        markAllNotificationsRead,
        updateStudentProfile,
        updateInstitutionProfile,
        updateRecruiterProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
