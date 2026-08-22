import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ProfileEditor } from '../../components/dashboard/ProfileEditor';
import { SettingsPanel } from '../../components/dashboard/SettingsPanel';
import { DashboardNotifications } from '../../components/dashboard/DashboardNotifications';
import { Candidate, JobOpportunity, Application, Project } from '../../types/dashboard';
import {
  Briefcase,
  UserSearch,
  FileCheck,
  Users,
  TrendingUp,
  Plus,
  Search,
  ExternalLink,
  Award,
} from 'lucide-react';

const mockCandidatesPool: Candidate[] = [
  {
    id: 'c1',
    name: 'Alex Morgan',
    department: 'Computer Science & AI',
    institution: 'MIT',
    cgpa: 3.92,
    graduationYear: 2025,
    skills: ['TypeScript', 'React', 'Node.js', 'Python', 'Docker'],
    email: 'alex.morgan@university.edu',
    phone: '+1 (555) 234-5678',
  },
  {
    id: 'c2',
    name: 'Sophia Lin',
    department: 'Data Science & Machine Learning',
    institution: 'Stanford University',
    cgpa: 3.88,
    graduationYear: 2025,
    skills: ['Python', 'PyTorch', 'SQL', 'Computer Vision'],
    email: 'slin@stanford.edu',
    phone: '+1 (555) 876-5432',
  },
  {
    id: 'c3',
    name: 'David Kim',
    department: 'Software Engineering',
    institution: 'UC Berkeley',
    cgpa: 3.81,
    graduationYear: 2026,
    skills: ['Go', 'Rust', 'Kubernetes', 'Distributed Systems'],
    email: 'dkim@berkeley.edu',
    phone: '+1 (555) 987-6543',
  },
];

const mockRecruiterJobs: JobOpportunity[] = [
  {
    id: 'j1',
    title: 'Senior Software Engineer - Distributed Systems',
    company: 'Apex Innovations Tech',
    recruiterId: 'r1',
    jobType: 'FULL_TIME',
    location: 'San Francisco, CA (Hybrid)',
    salary: '$140,000 - $175,000 / yr',
    minCgpa: 3.5,
    eligibleDepartments: ['Computer Science'],
    deadline: 'Aug 30, 2026',
    status: 'OPEN',
    description: 'We are seeking an outstanding software engineer to build next-generation distributed AI data pipelines.',
    requirements: ['C++ or Rust or Go', 'Distributed systems'],
    applicantsCount: 18,
    postedDate: '3 days ago',
  },
  {
    id: 'j4',
    title: 'Full Stack Engineering Intern',
    company: 'Apex Innovations Tech',
    recruiterId: 'r1',
    jobType: 'INTERNSHIP',
    location: 'Remote',
    salary: '$50 / hr',
    minCgpa: 3.2,
    eligibleDepartments: ['Computer Science', 'Software Engineering'],
    deadline: 'Sep 10, 2026',
    status: 'OPEN',
    description: 'Build enterprise application interfaces and API services.',
    requirements: ['React', 'TypeScript', 'Node.js'],
    applicantsCount: 29,
    postedDate: 'Yesterday',
  },
];

const mockRecruiterApplications: Application[] = [
  {
    id: 'app1',
    opportunityId: 'j1',
    jobTitle: 'Senior Software Engineer - Distributed Systems',
    company: 'Apex Innovations Tech',
    studentId: 'c1',
    studentName: 'Alex Morgan',
    department: 'Computer Science & AI',
    cgpa: 3.92,
    status: 'INTERVIEW_SCHEDULED',
    appliedDate: 'Aug 18, 2026',
    interviewDate: 'Aug 23, 2026 at 2:00 PM EST',
    remarks: 'Technical interview scheduled with Staff Engineer',
  },
  {
    id: 'app3',
    opportunityId: 'j1',
    jobTitle: 'Senior Software Engineer - Distributed Systems',
    company: 'Apex Innovations Tech',
    studentId: 'c2',
    studentName: 'Sophia Lin',
    department: 'Data Science & Machine Learning',
    cgpa: 3.88,
    status: 'SHORTLISTED',
    appliedDate: 'Aug 19, 2026',
    remarks: 'Shortlisted for initial screening phone call',
  },
];

const mockTalentProjects: Project[] = [
  {
    id: 'p1',
    title: 'Distributed Neural Cluster',
    description: 'High-performance AI model orchestration framework.',
    authorName: 'Alex Morgan',
    authorId: 'c1',
    department: 'Computer Science',
    institution: 'MIT',
    tags: ['Python', 'PyTorch', 'gRPC'],
    githubUrl: 'https://github.com/alexmorgan-dev/neural-cluster',
    createdAt: '2 days ago',
    status: 'PUBLISHED',
    likesCount: 24,
  },
];

export const RecruiterDashboard: React.FC = () => {
  const { activeTab, recruiterProfile, theme, setActiveTab } = useAuth();
  const isDark = theme === 'dark';

  const [jobs, setJobs] = useState<JobOpportunity[]>(mockRecruiterJobs);
  const [apps, setApps] = useState<Application[]>(mockRecruiterApplications);
  const [candidateSearch, setCandidateSearch] = useState('');

  // Create Job Form Drawer State
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState<'FULL_TIME' | 'INTERNSHIP' | 'PART_TIME'>('FULL_TIME');
  const [jobLocation, setJobLocation] = useState('');
  const [jobSalary, setJobSalary] = useState('');
  const [jobMinCgpa, setJobMinCgpa] = useState('3.2');
  const [jobDesc, setJobDesc] = useState('');

  const cardClass = `p-6 rounded-2xl border shadow-sm ${
    isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
  }`;

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    const created: JobOpportunity = {
      id: `j_${Date.now()}`,
      title: jobTitle,
      company: recruiterProfile.companyName,
      recruiterId: 'r1',
      jobType,
      location: jobLocation,
      salary: jobSalary,
      minCgpa: parseFloat(jobMinCgpa) || 3.0,
      eligibleDepartments: ['ALL'],
      deadline: 'Sep 30, 2026',
      status: 'OPEN',
      description: jobDesc,
      requirements: ['Strong engineering fundamentals'],
      applicantsCount: 0,
      postedDate: 'Just now',
    };
    setJobs([created, ...jobs]);
    setIsCreateJobOpen(false);
    setJobTitle('');
    setJobLocation('');
    setJobSalary('');
    setJobDesc('');
  };

  const handleUpdateAppStatus = (appId: string, newStatus: Application['status']) => {
    setApps(apps.map((a) => (a.id === appId ? { ...a, status: newStatus } : a)));
  };

  const filteredCandidates = mockCandidatesPool.filter((c) => {
    return (
      !candidateSearch ||
      c.name.toLowerCase().includes(candidateSearch.toLowerCase()) ||
      c.department.toLowerCase().includes(candidateSearch.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(candidateSearch.toLowerCase()))
    );
  });

  return (
    <div className="space-y-6">
      {/* 1. DASHBOARD OVERVIEW */}
      {activeTab === 'dashboard' && (
        <>
          {/* Welcome Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-[#5141df] text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="bg-white/20 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                Recruiter Portal • {recruiterProfile.companyName}
              </span>
              <h1 className="text-3xl font-black tracking-tight">
                Welcome back, {recruiterProfile.recruiterName}! 💼
              </h1>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Managing talent acquisition drives for <strong className="text-white">{recruiterProfile.companyName}</strong>.{' '}
                You have <strong className="text-white">47 active candidate applications</strong> requiring review.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('jobs')}
                className="bg-white text-emerald-700 font-extrabold text-xs px-5 py-3 rounded-xl hover:bg-emerald-50 transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Post New Job
              </button>
              <button
                onClick={() => setActiveTab('candidates')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-xs px-5 py-3 rounded-xl hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <UserSearch className="w-4 h-4" /> Search Candidates
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Open Jobs</span>
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">{jobs.length}</p>
              <span className="text-xs text-slate-400 mt-1 block">Active openings</span>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Applicants</span>
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-[#5141df]">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">47</p>
              <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1 mt-1">
                <TrendingUp className="w-3.5 h-3.5" /> +15 this week
              </span>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Shortlisted</span>
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600">
                  <FileCheck className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">12</p>
              <span className="text-xs text-slate-400 mt-1 block">In interview pipeline</span>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Verified Recruiter</span>
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">Verified</p>
              <span className="text-xs text-emerald-500 font-semibold mt-1 block">Full Campus Access</span>
            </div>
          </div>

          {/* Hiring Pipeline Applications Preview */}
          <div className={cardClass}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#5141df]" /> Candidate Application Pipeline
              </h2>
              <button
                onClick={() => setActiveTab('applications')}
                className="text-xs font-bold text-[#5141df] hover:underline cursor-pointer"
              >
                Review All Applications →
              </button>
            </div>

            <div className="space-y-3">
              {apps.map((a) => (
                <div
                  key={a.id}
                  className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                    isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50/60'
                  }`}
                >
                  <div>
                    <h3 className="text-sm font-bold">{a.studentName}</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Applied for: <strong>{a.jobTitle}</strong> • CGPA: {a.cgpa} ({a.department})
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                      a.status === 'INTERVIEW_SCHEDULED'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                        : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                    }`}
                  >
                    {a.status.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* 2. CANDIDATES TAB */}
      {activeTab === 'candidates' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-black">Talent Search & Candidate Pool</h1>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Discover top engineering candidates across university campuses.
            </p>
          </div>

          <div className={cardClass}>
            <div className="flex items-center px-3 py-2 rounded-xl border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 w-full">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input
                type="text"
                value={candidateSearch}
                onChange={(e) => setCandidateSearch(e.target.value)}
                placeholder="Search candidate name, major, or skill (e.g., Python, React, Rust)..."
                className="w-full bg-transparent text-xs outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCandidates.map((cand) => (
              <div key={cand.id} className={cardClass}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-black flex items-center justify-center text-lg">
                      {cand.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold">{cand.name}</h3>
                      <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {cand.institution} • {cand.department}
                      </p>
                      <p className="text-xs font-bold text-emerald-500 mt-0.5">CGPA: {cand.cgpa} / 4.0</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cand.skills.map((sk) => (
                      <span key={sk} className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        {sk}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-slate-400">{cand.email}</span>
                    <button className="bg-[#5141df] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg hover:bg-[#4335c4] cursor-pointer">
                      Shortlist Candidate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. JOBS TAB */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black">Manage Job Openings</h1>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Create and manage recruitment postings for campus students.
              </p>
            </div>

            <button
              onClick={() => setIsCreateJobOpen(!isCreateJobOpen)}
              className="bg-[#5141df] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#4335c4] flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" /> Create Job Opening
            </button>
          </div>

          {/* Job Creation Drawer */}
          {isCreateJobOpen && (
            <div className={cardClass}>
              <h3 className="text-base font-bold mb-4">Post New Job Opening</h3>
              <form onSubmit={handleCreateJob} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">Job Title</label>
                    <input
                      type="text"
                      required
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="e.g. Senior Frontend Engineer"
                      className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                        isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Job Type</label>
                    <select
                      value={jobType}
                      onChange={(e: any) => setJobType(e.target.value)}
                      className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                        isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <option value="FULL_TIME">Full-Time</option>
                      <option value="INTERNSHIP">Internship</option>
                      <option value="PART_TIME">Part-Time</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Location</label>
                    <input
                      type="text"
                      required
                      value={jobLocation}
                      onChange={(e) => setJobLocation(e.target.value)}
                      placeholder="e.g. San Francisco, CA / Remote"
                      className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                        isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Compensation / Salary</label>
                    <input
                      type="text"
                      required
                      value={jobSalary}
                      onChange={(e) => setJobSalary(e.target.value)}
                      placeholder="e.g. $140,000 / yr or $50/hr"
                      className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                        isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Minimum Cutoff CGPA</label>
                    <input
                      type="number"
                      step="0.1"
                      required
                      value={jobMinCgpa}
                      onChange={(e) => setJobMinCgpa(e.target.value)}
                      placeholder="3.2"
                      className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                        isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Job Description</label>
                  <textarea
                    rows={3}
                    required
                    value={jobDesc}
                    onChange={(e) => setJobDesc(e.target.value)}
                    placeholder="Role responsibilities and core tech expectations..."
                    className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCreateJobOpen(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#5141df] text-white text-xs font-bold px-5 py-2 rounded-xl hover:bg-[#4335c4]"
                  >
                    Publish Job Listing
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className={cardClass}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base font-bold">{job.title}</h3>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        {job.status}
                      </span>
                    </div>
                    <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{job.description}</p>
                    <p className="text-xs text-slate-400">
                      📍 {job.location} • 💰 {job.salary} • Posted: {job.postedDate}
                    </p>
                  </div>

                  <span className="text-xs font-bold text-[#5141df]">{job.applicantsCount} Applicants</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. APPLICATIONS TAB */}
      {activeTab === 'applications' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-black">Candidate Applications Review</h1>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Review applicants, update hiring status, and schedule candidate interviews.
            </p>
          </div>

          <div className="space-y-4">
            {apps.map((app) => (
              <div key={app.id} className={cardClass}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold">{app.studentName}</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Applied for: <strong>{app.jobTitle}</strong> • Major: {app.department} (CGPA: {app.cgpa})
                    </p>
                    {app.remarks && <p className="text-xs text-indigo-500 font-semibold mt-1">{app.remarks}</p>}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleUpdateAppStatus(app.id, 'SHORTLISTED')}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 hover:bg-emerald-200 cursor-pointer"
                    >
                      Shortlist
                    </button>
                    <button
                      onClick={() => handleUpdateAppStatus(app.id, 'INTERVIEW_SCHEDULED')}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 hover:bg-purple-200 cursor-pointer"
                    >
                      Interview
                    </button>
                    <button
                      onClick={() => handleUpdateAppStatus(app.id, 'REJECTED')}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 hover:bg-red-200 cursor-pointer"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. PROJECTS TAB */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-black">Student Capstone & Research Showcase</h1>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Discover early technical talent by exploring top verified student capstone projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockTalentProjects.map((p) => (
              <div key={p.id} className={cardClass}>
                <h3 className="text-base font-bold">{p.title}</h3>
                <p className={`text-xs my-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{p.description}</p>
                <p className="text-xs text-slate-400">Created by: {p.authorName} ({p.institution})</p>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#5141df] hover:underline flex items-center gap-1"
                  >
                    View Code <ExternalLink className="w-3 h-3" />
                  </a>
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
