export type UserRole = 'STUDENT' | 'INSTITUTION' | 'RECRUITER';

export type DashboardTheme = 'light' | 'dark';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  title?: string;
  organization?: string;
}

export interface StudentProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
  department: string;
  cgpa: number;
  graduationYear: number;
  rollNumber: string;
  bio: string;
  skills: string[];
  resumeName?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface InstitutionProfileData {
  name: string;
  code: string;
  contactEmail: string;
  phone: string;
  address: string;
  coordinatorName: string;
  coordinatorEmail: string;
  website: string;
  establishedYear: number;
  totalStudents: number;
}

export interface RecruiterProfileData {
  companyName: string;
  recruiterName: string;
  contactEmail: string;
  phone: string;
  industry: string;
  website: string;
  location: string;
  companySize: string;
  bio: string;
  isVerified: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  authorName: string;
  authorId: string;
  department: string;
  institution: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  createdAt: string;
  status: 'PUBLISHED' | 'UNDER_REVIEW' | 'DRAFT';
  likesCount: number;
}

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  recruiterId: string;
  jobType: 'FULL_TIME' | 'INTERNSHIP' | 'PART_TIME';
  location: string;
  salary: string;
  minCgpa: number;
  eligibleDepartments: string[];
  deadline: string;
  status: 'OPEN' | 'CLOSED' | 'ARCHIVED';
  description: string;
  requirements: string[];
  applicantsCount: number;
  postedDate: string;
}

export interface Application {
  id: string;
  opportunityId: string;
  jobTitle: string;
  company: string;
  studentId: string;
  studentName: string;
  department: string;
  cgpa: number;
  status: 'APPLIED' | 'SHORTLISTED' | 'INTERVIEW_SCHEDULED' | 'ACCEPTED' | 'REJECTED';
  appliedDate: string;
  interviewDate?: string;
  remarks?: string;
}

export interface Candidate {
  id: string;
  name: string;
  department: string;
  institution: string;
  cgpa: number;
  graduationYear: number;
  skills: string[];
  resumeUrl?: string;
  email: string;
  phone: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'INFO' | 'SUCCESS' | 'WARNING' | 'APPLICATION';
  timestamp: string;
  isRead: boolean;
  linkTab?: string;
}
