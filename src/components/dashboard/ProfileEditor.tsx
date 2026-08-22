import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { UserCheck, Save, Upload, Building, GraduationCap, Briefcase, Award } from 'lucide-react';

export const ProfileEditor: React.FC = () => {
  const { role, studentProfile, institutionProfile, recruiterProfile, updateStudentProfile, updateInstitutionProfile, updateRecruiterProfile, theme } = useAuth();

  const isDark = theme === 'dark';

  const [savedSuccess, setSavedSuccess] = useState(false);

  // Student Form State
  const [studentForm, setStudentForm] = useState(studentProfile);
  // Institution Form State
  const [instForm, setInstForm] = useState(institutionProfile);
  // Recruiter Form State
  const [recForm, setRecForm] = useState(recruiterProfile);

  const handleSaveStudent = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudentProfile(studentForm);
    triggerSuccess();
  };

  const handleSaveInstitution = (e: React.FormEvent) => {
    e.preventDefault();
    updateInstitutionProfile(instForm);
    triggerSuccess();
  };

  const handleSaveRecruiter = (e: React.FormEvent) => {
    e.preventDefault();
    updateRecruiterProfile(recForm);
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
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
      {/* Top Banner */}
      <div className={cardClass}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#5141df] to-indigo-400 flex items-center justify-center text-white text-2xl font-black shadow-lg">
              {role === 'STUDENT' && <GraduationCap className="w-8 h-8" />}
              {role === 'INSTITUTION' && <Building className="w-8 h-8" />}
              {role === 'RECRUITER' && <Briefcase className="w-8 h-8" />}
            </div>
            <div>
              <h2 className="text-xl font-bold">
                {role === 'STUDENT' && `${studentProfile.firstName} ${studentProfile.lastName}`}
                {role === 'INSTITUTION' && institutionProfile.name}
                {role === 'RECRUITER' && recruiterProfile.companyName}
              </h2>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {role === 'STUDENT' && `${studentProfile.department} • ${studentProfile.institution}`}
                {role === 'INSTITUTION' && `Institution Code: ${institutionProfile.code}`}
                {role === 'RECRUITER' && `${recruiterProfile.industry} • ${recruiterProfile.location}`}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {savedSuccess && (
              <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1 animate-in fade-in">
                <UserCheck className="w-4 h-4" /> Profile Updated!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Role-Specific Form */}
      {role === 'STUDENT' && (
        <form onSubmit={handleSaveStudent} className="space-y-6">
          <div className={cardClass}>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#5141df]" /> Personal & Academic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  type="text"
                  value={studentForm.firstName}
                  onChange={(e) => setStudentForm({ ...studentForm, firstName: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  type="text"
                  value={studentForm.lastName}
                  onChange={(e) => setStudentForm({ ...studentForm, lastName: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  value={studentForm.email}
                  onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="text"
                  value={studentForm.phone}
                  onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Institution</label>
                <input
                  type="text"
                  value={studentForm.institution}
                  onChange={(e) => setStudentForm({ ...studentForm, institution: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Department / Major</label>
                <input
                  type="text"
                  value={studentForm.department}
                  onChange={(e) => setStudentForm({ ...studentForm, department: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Cumulative CGPA (0 - 4.0)</label>
                <input
                  type="number"
                  step="0.01"
                  value={studentForm.cgpa}
                  onChange={(e) => setStudentForm({ ...studentForm, cgpa: parseFloat(e.target.value) || 0 })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Graduation Year</label>
                <input
                  type="number"
                  value={studentForm.graduationYear}
                  onChange={(e) => setStudentForm({ ...studentForm, graduationYear: parseInt(e.target.value) || 2025 })}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className={labelClass}>Bio & Career Goals</label>
              <textarea
                rows={3}
                value={studentForm.bio}
                onChange={(e) => setStudentForm({ ...studentForm, bio: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className={cardClass}>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#5141df]" /> Skills & Portfolios
            </h3>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Technical Skills (Comma separated)</label>
                <input
                  type="text"
                  value={studentForm.skills.join(', ')}
                  onChange={(e) =>
                    setStudentForm({
                      ...studentForm,
                      skills: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                    })
                  }
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>LinkedIn URL</label>
                  <input
                    type="url"
                    value={studentForm.linkedinUrl || ''}
                    onChange={(e) => setStudentForm({ ...studentForm, linkedinUrl: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>GitHub URL</label>
                  <input
                    type="url"
                    value={studentForm.githubUrl || ''}
                    onChange={(e) => setStudentForm({ ...studentForm, githubUrl: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Resume Document</label>
                <div className={`p-4 border-2 border-dashed rounded-xl flex items-center justify-between ${isDark ? 'border-slate-700 bg-slate-800/40' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center space-x-3">
                    <Upload className="w-5 h-5 text-[#5141df]" />
                    <span className="text-xs font-semibold">{studentForm.resumeName || 'No resume uploaded'}</span>
                  </div>
                  <button type="button" className="text-xs font-bold text-[#5141df] hover:underline cursor-pointer">
                    Upload New
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#5141df] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#4335c4] transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save Profile Changes
            </button>
          </div>
        </form>
      )}

      {role === 'INSTITUTION' && (
        <form onSubmit={handleSaveInstitution} className="space-y-6">
          <div className={cardClass}>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-[#5141df]" /> Institution Profile Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Institution Name</label>
                <input
                  type="text"
                  value={instForm.name}
                  onChange={(e) => setInstForm({ ...instForm, name: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Institutional Code</label>
                <input
                  type="text"
                  value={instForm.code}
                  onChange={(e) => setInstForm({ ...instForm, code: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Placement Office Email</label>
                <input
                  type="email"
                  value={instForm.contactEmail}
                  onChange={(e) => setInstForm({ ...instForm, contactEmail: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Official Phone</label>
                <input
                  type="text"
                  value={instForm.phone}
                  onChange={(e) => setInstForm({ ...instForm, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Head Placement Coordinator</label>
                <input
                  type="text"
                  value={instForm.coordinatorName}
                  onChange={(e) => setInstForm({ ...instForm, coordinatorName: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Coordinator Email</label>
                <input
                  type="email"
                  value={instForm.coordinatorEmail}
                  onChange={(e) => setInstForm({ ...instForm, coordinatorEmail: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className={labelClass}>Campus Physical Address</label>
              <input
                type="text"
                value={instForm.address}
                onChange={(e) => setInstForm({ ...instForm, address: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#5141df] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#4335c4] transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save Institution Profile
            </button>
          </div>
        </form>
      )}

      {role === 'RECRUITER' && (
        <form onSubmit={handleSaveRecruiter} className="space-y-6">
          <div className={cardClass}>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#5141df]" /> Recruiter & Company Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Company Name</label>
                <input
                  type="text"
                  value={recForm.companyName}
                  onChange={(e) => setRecForm({ ...recForm, companyName: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Lead Recruiter Name</label>
                <input
                  type="text"
                  value={recForm.recruiterName}
                  onChange={(e) => setRecForm({ ...recForm, recruiterName: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Recruitment Contact Email</label>
                <input
                  type="email"
                  value={recForm.contactEmail}
                  onChange={(e) => setRecForm({ ...recForm, contactEmail: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="text"
                  value={recForm.phone}
                  onChange={(e) => setRecForm({ ...recForm, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Industry</label>
                <input
                  type="text"
                  value={recForm.industry}
                  onChange={(e) => setRecForm({ ...recForm, industry: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Office Location</label>
                <input
                  type="text"
                  value={recForm.location}
                  onChange={(e) => setRecForm({ ...recForm, location: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className={labelClass}>Company Bio / Overview</label>
              <textarea
                rows={3}
                value={recForm.bio}
                onChange={(e) => setRecForm({ ...recForm, bio: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#5141df] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#4335c4] transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save Recruiter Profile
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
