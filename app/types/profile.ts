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

export interface UiTranslations {
  downloadCv: string;
  availableForWork: string;
  viewExperience: string;
  contactMe: string;
  aboutMe: string;
  coreFocus: string;
  yearsOfExp: string;
  projectsCompleted: string;
  industryCerts: string;
  skillsTitle: string;
  experienceTitle: string;
  projectsTitle: string;
  responsibilities: string;
  impactResults: string;
  liveDemo: string;
  sourceCode: string;
  educationTitle: string;
  certificationsTitle: string;
  verifyCredential: string;
  contactTitle: string;
  getInTouch: string;
  emailLabel: string;
  locationLabel: string;
  fullName: string;
  emailAddress: string;
  message: string;
  sendMessage: string;
  sending: string;
  successMessage: string;
  errorMessage: string;
  nameRequired: string;
  nameMinLength: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  messageMinLength: string;
  helloWorldPrefix: string;
  helloWorldStatus: string;
}

export interface LocalizedProfile {
  profile: PersonalProfile;
  translations: UiTranslations;
}
