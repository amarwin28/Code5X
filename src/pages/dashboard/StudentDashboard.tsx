import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ProfileEditor } from '../../components/dashboard/ProfileEditor';
import { SettingsPanel } from '../../components/dashboard/SettingsPanel';
import { DashboardNotifications } from '../../components/dashboard/DashboardNotifications';
import { Project, JobOpportunity, Application } from '../../types/dashboard';
import {
  Briefcase,
  FileCheck,
  FolderGit2,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Clock,
  Plus,
  ExternalLink,
  Github,
  Search,
  Check,
} from 'lucide-react';

const mockStudentProjects: Project[] = [
  {
    id: 'p1',
    title: 'Distributed Neural Cluster',
    description: 'A fault-tolerant distributed system for training neural models across edge devices.',
    authorName: 'Alex Morgan',
    authorId: 's1',
    department: 'Computer Science',
    institution: 'MIT',
    tags: ['Python', 'PyTorch', 'Docker', 'gRPC'],
    githubUrl: 'https://github.com/alexmorgan-dev/neural-cluster',
    createdAt: '2 days ago',
    status: 'PUBLISHED',
    likesCount: 24,
  },
  {
    id: 'p2',
    title: 'Solidity Bytecode Audit Engine',
    description: 'Static security scanner detecting reentrancy and integer overflow bugs in Ethereum smart contracts.',
    authorName: 'Alex Morgan',
    authorId: 's1',
    department: 'Computer Science',
    institution: 'MIT',
    tags: ['TypeScript', 'Rust', 'Web3'],
    githubUrl: 'https://github.com/alexmorgan-dev/solidity-audit',
    createdAt: '1 week ago',
    status: 'PUBLISHED',
    likesCount: 42,
  },
];

const mockJobOpportunities: JobOpportunity[] = [
  {
    id: 'j1',
    title: 'Senior Software Engineer - Distributed Systems',
    company: 'Apex Innovations Tech',
    recruiterId: 'r1',
    jobType: 'FULL_TIME',
    location: 'San Francisco, CA (Hybrid)',
    salary: '$140,000 - $175,000 / yr',
    minCgpa: 3.5,
    eligibleDepartments: ['Computer Science', 'Electrical Engineering'],
    deadline: 'Aug 30, 2026',
    status: 'OPEN',
    description: 'We are seeking an outstanding software engineer to build next-generation distributed AI data pipelines.',
    requirements: ['Proficiency in C++ or Rust or Go', 'Distributed databases experience', 'Strong CS fundamentals'],
    applicantsCount: 18,
    postedDate: '3 days ago',
  },
  {
    id: 'j2',
    title: 'AI & Data Science Intern (Summer 2027)',
    company: 'NextGen Robotics',
    recruiterId: 'r2',
    jobType: 'INTERNSHIP',
    location: 'Boston, MA',
    salary: '$55 / hr',
    minCgpa: 3.2,
    eligibleDepartments: ['Computer Science', 'Data Science', 'AI'],
    deadline: 'Sep 15, 2026',
    status: 'OPEN',
    description: 'Join our robotics perception team developing real-time computer vision models.',
    requirements: ['PyTorch or TensorFlow', 'ROS/ROS2 experience is a plus'],
    applicantsCount: 34,
    postedDate: '1 day ago',
  },
  {
    id: 'j3',
    title: 'Frontend Platform Engineer',
    company: 'CloudScale Ecosystems',
    recruiterId: 'r3',
    jobType: 'FULL_TIME',
    location: 'Remote',
    salary: '$130,000 - $160,000 / yr',
    minCgpa: 3.0,
    eligibleDepartments: ['ALL'],
    deadline: 'Oct 01, 2026',
    status: 'OPEN',
    description: 'Build hyper-responsive UI frameworks and cloud management dashboards.',
    requirements: ['React', 'TypeScript', 'TailwindCSS', 'Performance optimization'],
    applicantsCount: 22,
    postedDate: '5 days ago',
  },
];

const mockApplications: Application[] = [
  {
    id: 'app1',
    opportunityId: 'j1',
    jobTitle: 'Senior Software Engineer - Distributed Systems',
    company: 'Apex Innovations Tech',
    studentId: 's1',
    studentName: 'Alex Morgan',
    department: 'Computer Science',
    cgpa: 3.92,
    status: 'INTERVIEW_SCHEDULED',
    appliedDate: 'Aug 18, 2026',
    interviewDate: 'Aug 23, 2026 at 2:00 PM EST',
    remarks: 'Technical round with Senior Staff Engineer',
  },
  {
    id: 'app2',
    opportunityId: 'j2',
    jobTitle: 'AI & Data Science Intern',
    company: 'NextGen Robotics',
    studentId: 's1',
    studentName: 'Alex Morgan',
    department: 'Computer Science',
    cgpa: 3.92,
    status: 'SHORTLISTED',
    appliedDate: 'Aug 20, 2026',
    remarks: 'Application passed preliminary recruiter screen',
  },
];

export const StudentDashboard: React.FC = () => {
  const { activeTab, studentProfile, theme, setActiveTab } = useAuth();
  const isDark = theme === 'dark';

  const [projects, setProjects] = useState<Project[]>(mockStudentProjects);
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const [appliedJobIds, setAppliedJobIds] = useState<string[]>(['j1', 'j2']);

  // New Project Form State
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjTags, setNewProjTags] = useState('');
  const [newProjGithub, setNewProjGithub] = useState('');

  // Opportunities Search State
  const [jobSearchText, setJobSearchText] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState<string>('ALL');

  const cardClass = `p-6 rounded-2xl border shadow-sm ${
    isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
  }`;

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Project = {
      id: `p_${Date.now()}`,
      title: newProjTitle,
      description: newProjDesc,
      authorName: `${studentProfile.firstName} ${studentProfile.lastName}`,
      authorId: 's1',
      department: studentProfile.department,
      institution: studentProfile.institution,
      tags: newProjTags.split(',').map((t) => t.trim()).filter(Boolean),
      githubUrl: newProjGithub,
      createdAt: 'Just now',
      status: 'PUBLISHED',
      likesCount: 1,
    };
    setProjects([created, ...projects]);
    setIsAddProjectOpen(false);
    setNewProjTitle('');
    setNewProjDesc('');
    setNewProjTags('');
    setNewProjGithub('');
  };

  const handleApplyJob = (job: JobOpportunity) => {
    if (appliedJobIds.includes(job.id)) return;
    const newApp: Application = {
      id: `app_${Date.now()}`,
      opportunityId: job.id,
      jobTitle: job.title,
      company: job.company,
      studentId: 's1',
      studentName: `${studentProfile.firstName} ${studentProfile.lastName}`,
      department: studentProfile.department,
      cgpa: studentProfile.cgpa,
      status: 'APPLIED',
      appliedDate: 'Just now',
      remarks: 'Application successfully received by recruiter',
    };
    setApplications([newApp, ...applications]);
    setAppliedJobIds([...appliedJobIds, job.id]);
  };

  const filteredJobs = mockJobOpportunities.filter((j) => {
    const matchesType = jobTypeFilter === 'ALL' || j.jobType === jobTypeFilter;
    const matchesSearch =
      !jobSearchText ||
      j.title.toLowerCase().includes(jobSearchText.toLowerCase()) ||
      j.company.toLowerCase().includes(jobSearchText.toLowerCase()) ||
      j.description.toLowerCase().includes(jobSearchText.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* 1. DASHBOARD OVERVIEW TAB */}
      {activeTab === 'dashboard' && (
        <>
          {/* Welcome Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#5141df] via-indigo-600 to-purple-600 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="bg-white/20 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                Student Portal • {studentProfile.institution}
              </span>
              <h1 className="text-3xl font-black tracking-tight">
                Welcome back, {studentProfile.firstName}! 👋
              </h1>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Your profile is active for campus recruitment drives. You have{' '}
                <strong className="text-white">1 interview scheduled</strong> and{' '}
                <strong className="text-white">3 recommended opportunities</strong> matching your skillset.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('opportunities')}
                className="bg-white text-[#5141df] font-extrabold text-xs px-5 py-3 rounded-xl hover:bg-indigo-50 transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Briefcase className="w-4 h-4" /> Explore Jobs
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-xs px-5 py-3 rounded-xl hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4" /> Add Project
              </button>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Applications</span>
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-[#5141df]">
                  <FileCheck className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">{applications.length}</p>
              <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1 mt-1">
                <TrendingUp className="w-3.5 h-3.5" /> 1 Interview Active
              </span>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Published Projects</span>
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600">
                  <FolderGit2 className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">{projects.length}</p>
              <span className="text-xs text-slate-400 mt-1 block">66 portfolio likes</span>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Academic CGPA</span>
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">{studentProfile.cgpa}</p>
              <span className="text-xs text-slate-400 mt-1 block">Graduation: {studentProfile.graduationYear}</span>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Recruiter Match</span>
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black mt-2">96%</p>
              <span className="text-xs text-emerald-500 font-semibold mt-1 block">Top 5% Talent Pool</span>
            </div>
          </div>

          {/* Active Applications Section */}
          <div className={cardClass}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#5141df]" /> Recent Applications & Live Status
              </h2>
              <button
                onClick={() => setActiveTab('applications')}
                className="text-xs font-bold text-[#5141df] hover:underline cursor-pointer"
              >
                View All Applications →
              </button>
            </div>

            <div className="space-y-3">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                    isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50/60'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold">{app.jobTitle}</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {app.company} • Applied on {app.appliedDate}
                    </p>
                    {app.interviewDate && (
                      <p className="text-xs font-semibold text-[#5141df]">
                        🗓 Interview: {app.interviewDate}
                      </p>
                    )}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5 ${
                      app.status === 'INTERVIEW_SCHEDULED'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                        : app.status === 'SHORTLISTED'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                    }`}
                  >
                    {app.status.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* 2. PROJECTS TAB */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black">Student Projects & Portfolio</h1>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Showcase capstones, research projects, and code repositories to hiring recruiters.
              </p>
            </div>

            <button
              onClick={() => setIsAddProjectOpen(!isAddProjectOpen)}
              className="bg-[#5141df] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#4335c4] transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" /> Add New Project
            </button>
          </div>

          {/* Add Project Form Drawer */}
          {isAddProjectOpen && (
            <div className={cardClass}>
              <h3 className="text-base font-bold mb-4">Create Project Showcase</h3>
              <form onSubmit={handleCreateProject} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    value={newProjTitle}
                    onChange={(e) => setNewProjTitle(e.target.value)}
                    placeholder="e.g. Distributed Neural Cluster"
                    className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Description</label>
                  <textarea
                    required
                    rows={3}
                    value={newProjDesc}
                    onChange={(e) => setNewProjDesc(e.target.value)}
                    placeholder="Describe problem solved, architecture, and tech stack..."
                    className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">Tech Stack Tags (Comma separated)</label>
                    <input
                      type="text"
                      value={newProjTags}
                      onChange={(e) => setNewProjTags(e.target.value)}
                      placeholder="React, Python, Docker"
                      className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                        isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">GitHub / Demo Repository Link</label>
                    <input
                      type="url"
                      value={newProjGithub}
                      onChange={(e) => setNewProjGithub(e.target.value)}
                      placeholder="https://github.com/..."
                      className={`w-full px-4 py-2 rounded-xl text-sm border outline-none ${
                        isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAddProjectOpen(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#5141df] text-white text-xs font-bold px-5 py-2 rounded-xl hover:bg-[#4335c4]"
                  >
                    Publish Project
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Project List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div key={proj.id} className={cardClass}>
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-bold">{proj.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    {proj.status}
                  </span>
                </div>
                <p className={`text-xs my-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{proj.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] px-2.5 py-0.5 rounded-md font-medium ${
                        isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <span className="text-slate-400">{proj.createdAt}</span>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5141df] font-semibold hover:underline flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" /> Repository <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. OPPORTUNITIES TAB */}
      {activeTab === 'opportunities' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-black">Campus Opportunities & Job Board</h1>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Browse active recruiting drives, internships, and full-time engineering roles.
            </p>
          </div>

          {/* Filters Bar */}
          <div className={cardClass}>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex-1 flex items-center px-3 py-2 rounded-xl border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 w-full">
                <Search className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="text"
                  value={jobSearchText}
                  onChange={(e) => setJobSearchText(e.target.value)}
                  placeholder="Filter by job title, company name, or tech requirement..."
                  className="w-full bg-transparent text-xs outline-none"
                />
              </div>

              <div className="flex items-center space-x-2 w-full md:w-auto">
                <button
                  onClick={() => setJobTypeFilter('ALL')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold ${
                    jobTypeFilter === 'ALL'
                      ? 'bg-[#5141df] text-white'
                      : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  All Types
                </button>
                <button
                  onClick={() => setJobTypeFilter('FULL_TIME')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold ${
                    jobTypeFilter === 'FULL_TIME'
                      ? 'bg-[#5141df] text-white'
                      : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  Full-Time
                </button>
                <button
                  onClick={() => setJobTypeFilter('INTERNSHIP')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold ${
                    jobTypeFilter === 'INTERNSHIP'
                      ? 'bg-[#5141df] text-white'
                      : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  Internship
                </button>
              </div>
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isApplied = appliedJobIds.includes(job.id);
              return (
                <div key={job.id} className={cardClass}>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-[#5141df]">{job.company}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-400">{job.location}</span>
                      </div>
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                          💰 {job.salary}
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                          🎓 Min CGPA: {job.minCgpa}
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                          ⏰ Deadline: {job.deadline}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                      <button
                        onClick={() => handleApplyJob(job)}
                        disabled={isApplied}
                        className={`w-full md:w-auto px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                          isApplied
                            ? 'bg-emerald-500 text-white cursor-default'
                            : 'bg-[#5141df] text-white hover:bg-[#4335c4] shadow-md'
                        }`}
                      >
                        {isApplied ? (
                          <span className="flex items-center justify-center gap-1">
                            <Check className="w-4 h-4" /> Applied
                          </span>
                        ) : (
                          'Apply Now'
                        )}
                      </button>
                      <span className="text-[11px] text-slate-400">{job.applicantsCount} applicants</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. APPLICATIONS TAB */}
      {activeTab === 'applications' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-black">My Applications Tracker</h1>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Real-time pipeline monitoring for your submitted candidate applications.
            </p>
          </div>

          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className={cardClass}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#5141df]">{app.company}</span>
                    <h3 className="text-base font-bold">{app.jobTitle}</h3>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Applied: {app.appliedDate} • Candidate: {app.studentName} ({app.department})
                    </p>
                    {app.remarks && (
                      <p className="text-xs font-semibold text-slate-500 mt-2">
                        Note: {app.remarks}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                        app.status === 'INTERVIEW_SCHEDULED'
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                          : app.status === 'SHORTLISTED'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                      }`}
                    >
                      {app.status.replace('_', ' ')}
                    </span>
                    {app.interviewDate && (
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        {app.interviewDate}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. NOTIFICATIONS TAB */}
      {activeTab === 'notifications' && <DashboardNotifications isFullView />}

      {/* 6. PROFILE TAB */}
      {activeTab === 'profile' && <ProfileEditor />}

      {/* 7. SETTINGS TAB */}
      {activeTab === 'settings' && <SettingsPanel />}
    </div>
  );
};
