// app/types/profile.ts

export interface SocialLink {
  name: string;
  url: string;
  iconName: string; // Used to identify which SVG icon to render
}

export interface NavMenuItem {
  name: string;
  href: string; // e.g. '#hero', '#about'
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string; // e.g. "Present" or "Dec 2025"
  techStack: string[];
  achievements: string[];
}

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  responsibilities: string[];
  results: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface Education {
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface PersonalProfile {
  name: string;
  title: string;
  bio: string;
  aboutText: string;
  yearsOfExperience: number;
  careerFocus: string[];
  availableForWork: boolean;
  email: string;
  location: string;
  socialLinks: SocialLink[];
  navItems: NavMenuItem[];
  skillGroups: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
