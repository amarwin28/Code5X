import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ProfileEditor } from '../../components/dashboard/ProfileEditor';
import { SettingsPanel } from '../../components/dashboard/SettingsPanel';
import { DashboardNotifications } from '../../components/dashboard/DashboardNotifications';
import { Candidate, Project } from '../../types/dashboard';
import {
  Users,
  Building,
  FolderGit2,
  GraduationCap,
  TrendingUp,
  Search,
  CheckCircle2,
  Plus,
  ShieldCheck,
  Award,
} from 'lucide-react';

const mockStudentsList: Candidate[] = [
  {
    id: 's1',
    name: 'Alex Morgan',
    department: 'Computer Science & AI',
    institution: 'Massachusetts Institute of Technology',
    cgpa: 3.92,
    graduationYear: 2025,
    skills: ['TypeScript', 'React', 'Python', 'PyTorch'],
    resumeUrl: '#',
    email: 'alex.morgan@university.edu',
    phone: '+1 (555) 234-5678',
  },
  {
    id: 's2',
    name: 'Marcus Vance Jr',
    department: 'Electrical Engineering & CS',
    institution: 'Massachusetts Institute of Technology',
    cgpa: 3.85,
    graduationYear: 2025,
    skills: ['C++', 'Embedded Systems', 'FPGA', 'Rust'],
    resumeUrl: '#',
    email: 'mvance@university.edu',
    phone: '+1 (555) 345-6789',
  },
  {
    id: 's3',
    name: 'Elena Rostova',
    department: 'Data Science & Analytics',
    institution: 'Massachusetts Institute of Technology',
    cgpa: 3.96,
    graduationYear: 2026,
    skills: ['Python', 'SQL', 'TensorFlow', 'Spark'],
    resumeUrl: '#',
    email: 'elena.rostova@university.edu',
    phone: '+1 (555) 456-7890',
  },
];

const mockPartnerRecruiters = [
  {
    id: 'r1',
    name: 'Apex Innovations Tech',
    industry: 'AI & Enterprise Software',
    contactPerson: 'Marcus Vance',
    email: 'marcus.vance@apexinnovations.io',
    drivesCount: 4,
    status: 'VERIFIED',
  },
  {
    id: 'r2',
    name: 'NextGen Robotics',
    industry: 'Robotics & Automation',
    contactPerson: 'Dr. Sarah Connor',
    email: 'talent@nextgenrobotics.com',
    drivesCount: 2,
    status: 'VERIFIED',
  },
  {
    id: 'r3',
    name: 'Quantum Core Labs',
    industry: 'Quantum Computing',
    contactPerson: 'David Chen',
    email: 'dchen@quantumcore.io',
    drivesCount: 1,
    status: 'PENDING_APPROVAL',
  },
];

const mockCapstoneProjects: Project[] = [
  {
    id: 'p1',
    title: 'Distributed Neural Cluster',
    description: 'Fault-tolerant edge computing cluster for neural network inference.',
    authorName: 'Alex Morgan',
    authorId: 's1',
    department: 'Computer Science',
    institution: 'MIT',
    tags: ['Python', 'PyTorch', 'gRPC'],
    createdAt: '2 days ago',
    status: 'PUBLISHED',
    likesCount: 24,
  },
  {
    id: 'p3',
    title: 'Autonomous Drone Swarm Communication',
    description: 'Ultra-low latency mesh networking protocol for high-density aerial swarms.',
    authorName: 'Marcus Vance Jr',
    authorId: 's2',
    department: 'Electrical Engineering',
    institution: 'MIT',
    tags: ['C++', 'Embedded', 'Mesh'],
    createdAt: 'Yesterday',
    status: 'UNDER_REVIEW',
    likesCount: 12,
  },
];

export const InstitutionDashboard: React.FC = () => {
  const { activeTab, institutionProfile, theme, setActiveTab } = useAuth();
  const isDark = theme === 'dark';

  const [studentSearch, setStudentSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('ALL');
  const [capstones, setCapstones] = useState<Project[]>(mockCapstoneProjects);

  const cardClass = `p-6 rounded-2xl border shadow-sm ${
    isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
  }`;

  const filteredStudents = mockStudentsList.filter((s) => {
    const matchesDept = deptFilter === 'ALL' || s.department.includes(deptFilter);
    const matchesSearch =
      !studentSearch ||
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.skills.some((sk) => sk.toLowerCase().includes(studentSearch.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  const handleApproveProject = (id: string) => {
    setCapstones(capstones.map((c) => (c.id === id ? { ...c, status: 'PUBLISHED' } : c)));
  };

  return (
    <div className="space-y-6">
      {/* 1. DASHBOARD OVERVIEW */}
      {activeTab === 'dashboard' && (
        <>
          {/* Welcome Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-700 via-[#5141df] to-indigo-700 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="bg-white/20 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                Institution Portal • Code: {institutionProfile.code}
              </span>
              <h1 className="text-3xl font-black tracking-tight">
                {institutionProfile.name}
              </h1>
              <p className="text-purple-100 text-sm leading-relaxed">
                Campus placement overview. Coordinator:{' '}
                <strong className="text-white">{institutionProfile.coordinatorName}</strong>. 94.8% placement record achieved for the 2025 cohort.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('students')}
                className="bg-white text-purple-700 font-extrabold text-xs px-5 py-3 rounded-xl hover:bg-purple-50 transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Users className="w-4 h-4" /> Manage Students
              </button>
              <button
                onClick={() => setActiveTab('recruiters')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-xs px-5 py-3 rounded-xl hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Building className="w-4 h-4" /> Recruiter Partners
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Enrolled</span>
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">{institutionProfile.totalStudents.toLocaleString()}</p>
              <span className="text-xs text-slate-400 mt-1 block">Registered in ecosystem</span>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Partner Recruiters</span>
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-[#5141df]">
                  <Building className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">142</p>
              <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1 mt-1">
                <TrendingUp className="w-3.5 h-3.5" /> +12 this term
              </span>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Placement Rate</span>
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">94.8%</p>
              <span className="text-xs text-emerald-500 font-semibold mt-1 block">Top Tier Ranking</span>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Student Projects</span>
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600">
                  <FolderGit2 className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">480+</p>
              <span className="text-xs text-slate-400 mt-1 block">Approved capstones</span>
            </div>
          </div>

          {/* Institutional Recent Student Roster Preview */}
          <div className={cardClass}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#5141df]" /> High Performing Students
              </h2>
              <button
                onClick={() => setActiveTab('students')}
                className="text-xs font-bold text-[#5141df] hover:underline cursor-pointer"
              >
                Full Roster →
              </button>
            </div>

            <div className="space-y-3">
              {mockStudentsList.map((st) => (
                <div
                  key={st.id}
                  className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                    isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#5141df]/10 text-[#5141df] flex items-center justify-center font-bold text-sm">
                      {st.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">{st.name}</h3>
                      <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {st.department} • CGPA: <strong className="text-emerald-500">{st.cgpa}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      Grad {st.graduationYear}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* 2. STUDENTS TAB */}
      {activeTab === 'students' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black">Student Directory & Academic Roster</h1>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Filter students by department, CGPA, graduation batch, and skills.
              </p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex-1 flex items-center px-3 py-2 rounded-xl border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 w-full">
                <Search className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="text"
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder="Search student name, email, or skill keyword..."
                  className="w-full bg-transparent text-xs outline-none"
                />
              </div>

              <div className="flex items-center space-x-2 w-full md:w-auto">
                <button
                  onClick={() => setDeptFilter('ALL')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold ${
                    deptFilter === 'ALL'
                      ? 'bg-[#5141df] text-white'
                      : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  All Depts
                </button>
                <button
                  onClick={() => setDeptFilter('Computer Science')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold ${
                    deptFilter === 'Computer Science'
                      ? 'bg-[#5141df] text-white'
                      : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  CS & AI
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStudents.map((st) => (
              <div key={st.id} className={cardClass}>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#5141df] to-indigo-400 text-white font-black flex items-center justify-center text-lg">
                    {st.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{st.name}</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{st.department}</p>
                    <p className="text-xs font-bold text-emerald-500 mt-1">CGPA: {st.cgpa} / 4.0</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {st.skills.map((sk) => (
                      <span key={sk} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
                        {sk}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400">Batch of {st.graduationYear} • {st.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. PROJECTS TAB */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-black">Student Capstone & Research Approval</h1>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Review student submitted capstones for institution endorsement.
            </p>
          </div>

          <div className="space-y-4">
            {capstones.map((cp) => (
              <div key={cp.id} className={cardClass}>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base font-bold">{cp.title}</h3>
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                          cp.status === 'PUBLISHED'
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                        }`}
                      >
                        {cp.status}
                      </span>
                    </div>
                    <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{cp.description}</p>
                    <p className="text-xs text-slate-400">Author: {cp.authorName} ({cp.department})</p>
                  </div>

                  {cp.status === 'UNDER_REVIEW' && (
                    <button
                      onClick={() => handleApproveProject(cp.id)}
                      className="bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Endorse Project
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. OPPORTUNITIES TAB */}
      {activeTab === 'opportunities' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-black">Campus Recruitment Drives</h1>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Active recruitment opportunities posted by verified recruiters for campus students.
            </p>
          </div>

          <div className={cardClass}>
            <p className="text-sm font-semibold mb-2">Campus Placement Drives Active: 8</p>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Recruiter postings are automatically filtered based on CGPA and department eligibility criteria configured by the institution.
            </p>
          </div>
        </div>
      )}

      {/* 5. RECRUITERS TAB */}
      {activeTab === 'recruiters' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black">Partner Recruiter Companies</h1>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Manage corporate partnerships, verification badges, and placement drive permissions.
              </p>
            </div>

            <button className="bg-[#5141df] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#4335c4] flex items-center gap-2 cursor-pointer">
              <Plus className="w-4 h-4" /> Invite Recruiter
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockPartnerRecruiters.map((rec) => (
              <div key={rec.id} className={cardClass}>
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-bold">{rec.name}</h3>
                  <ShieldCheck
                    className={`w-5 h-5 ${
                      rec.status === 'VERIFIED' ? 'text-emerald-500' : 'text-amber-500'
                    }`}
                  />
                </div>
                <p className={`text-xs my-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{rec.industry}</p>
                <p className="text-xs font-medium">Contact: {rec.contactPerson}</p>
                <p className="text-[11px] text-slate-400">{rec.email}</p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#5141df]">{rec.drivesCount} Drives Hosted</span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                    {rec.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. NOTIFICATIONS TAB */}
      {activeTab === 'notifications' && <DashboardNotifications isFullView />}

      {/* 7. PROFILE TAB */}
      {activeTab === 'profile' && <ProfileEditor />}

      {/* 8. SETTINGS TAB */}
      {activeTab === 'settings' && <SettingsPanel />}
    </div>
  );
};
