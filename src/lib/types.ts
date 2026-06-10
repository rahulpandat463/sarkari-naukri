export interface Job {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  department: string;
  category: string[];
  totalPosts: number;
  vacancyDetails: VacancyDetail[];
  qualification: string;
  ageLimit: AgeLimit;
  applicationFee: ApplicationFee;
  importantDates: ImportantDates;
  selectionProcess: string[];
  officialWebsite: string;
  applyLink: string;
  state: string;
  isActive: boolean;
  createdAt: string;
  lastDate: string;
}

export interface VacancyDetail {
  category: string;
  posts: number;
}

export interface AgeLimit {
  min: number;
  max: number;
}

export interface ApplicationFee {
  general: number;
  obc: number;
  sc_st: number;
}

export interface ImportantDates {
  notificationDate: string;
  applyStart: string;
  applyEnd: string;
  examDate: string;
}

export interface Category {
  id: string;
  label: string;
  labelEn: string;
  icon: string;
  slug: string;
  description: string;
}

export interface Result {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  examDate: string;
  resultDate: string;
  organization: string;
  description: string;
  officialLink: string;
  isActive: boolean;
}

export interface AdmitCard {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  examDate: string;
  releaseDate: string;
  organization: string;
  description: string;
  officialLink: string;
  isActive: boolean;
}

export interface AnswerKey {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  examDate: string;
  releaseDate: string;
  organization: string;
  description: string;
  officialLink: string;
  isActive: boolean;
}
