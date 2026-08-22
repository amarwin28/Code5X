import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Search, X, Briefcase, GraduationCap, FolderGit2, ArrowRight } from 'lucide-react';

interface MockResult {
  id: string;
  type: 'job' | 'candidate' | 'project';
  title: string;
  subtitle: string;
  badge: string;
  linkTab: string;
}

const mockDatabaseResults: MockResult[] = [
  { id: '1', type: 'job', title: 'Senior Full Stack Engineer', subtitle: 'Apex Innovations Tech • Remote / SF', badge: 'Full-Time', linkTab: 'opportunities' },
  { id: '2', type: 'job', title: 'AI & Data Science Intern', subtitle: 'NextGen Robotics • Boston, MA', badge: 'Internship', linkTab: 'opportunities' },
  { id: '3', type: 'candidate', title: 'Alex Morgan', subtitle: 'MIT • Computer Science & AI (CGPA: 3.92)', badge: 'Student', linkTab: 'students' },
  { id: '4', type: 'candidate', title: 'Sophia Lin', subtitle: 'Stanford • Data Science (CGPA: 3.88)', badge: 'Student', linkTab: 'candidates' },
  { id: '5', type: 'project', title: 'Distributed Neural Cluster', subtitle: 'High-performance AI model orchestration framework', badge: 'Python / C++', linkTab: 'projects' },
  { id: '6', type: 'project', title: 'Smart Contract Audit Engine', subtitle: 'Automated vulnerability analysis for Solidity bytecode', badge: 'TypeScript / Rust', linkTab: 'projects' },
];

export const DashboardSearch: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery, setActiveTab, theme } = useAuth();
  const [filterType, setFilterType] = useState<'all' | 'job' | 'candidate' | 'project'>('all');

  if (!isSearchOpen) return null;

  const filteredResults = mockDatabaseResults.filter((item) => {
    const matchesCategory = filterType === 'all' || item.type === filterType;
    const matchesText =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesText;
  });

  const handleSelect = (tab: string) => {
    setActiveTab(tab);
    setIsSearchOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
      <div
        className={`w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border transition-all animate-in fade-in zoom-in-95 duration-150 ${
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Search Input Bar */}
        <div className={`flex items-center px-4 py-3.5 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
          <Search className={`w-5 h-5 mr-3 ${isDark ? 'text-slate-400' : 'text-slate-400'}`} />
          <input
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search opportunities, candidates, student projects..."
            className={`w-full text-base bg-transparent outline-none ${
              isDark ? 'placeholder-slate-500 text-white' : 'placeholder-slate-400 text-slate-900'
            }`}
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className={`p-1.5 rounded-lg transition-colors ${
              isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-black'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Categories */}
        <div className={`flex items-center space-x-2 px-4 py-2 border-b text-xs ${isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50'}`}>
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1 rounded-full transition-all ${
              filterType === 'all'
                ? 'bg-[#5141df] text-white font-semibold'
                : isDark ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Results
          </button>
          <button
            onClick={() => setFilterType('job')}
            className={`px-3 py-1 rounded-full flex items-center gap-1 transition-all ${
              filterType === 'job'
                ? 'bg-[#5141df] text-white font-semibold'
                : isDark ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Briefcase className="w-3 h-3" /> Opportunities
          </button>
          <button
            onClick={() => setFilterType('candidate')}
            className={`px-3 py-1 rounded-full flex items-center gap-1 transition-all ${
              filterType === 'candidate'
                ? 'bg-[#5141df] text-white font-semibold'
                : isDark ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <GraduationCap className="w-3 h-3" /> Candidates
          </button>
          <button
            onClick={() => setFilterType('project')}
            className={`px-3 py-1 rounded-full flex items-center gap-1 transition-all ${
              filterType === 'project'
                ? 'bg-[#5141df] text-white font-semibold'
                : isDark ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <FolderGit2 className="w-3 h-3" /> Projects
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-400">
              No matching results found for "{searchQuery}"
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.linkTab)}
                className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                  isDark ? 'hover:bg-slate-800' : 'hover:bg-indigo-50/70'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      item.type === 'job'
                        ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400'
                        : item.type === 'candidate'
                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400'
                        : 'bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400'
                    }`}
                  >
                    {item.type === 'job' && <Briefcase className="w-4 h-4" />}
                    {item.type === 'candidate' && <GraduationCap className="w-4 h-4" />}
                    {item.type === 'project' && <FolderGit2 className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                      isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item.badge}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
