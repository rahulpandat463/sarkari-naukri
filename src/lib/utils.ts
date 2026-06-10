import siteData from "@/data/site.json";
import jobsData from "@/data/jobs.json";
import resultsData from "@/data/results.json";
import admitCardsData from "@/data/admit-cards.json";
import answerKeysData from "@/data/answer-keys.json";
import { Job, Result, AdmitCard, AnswerKey, Category } from "@/lib/types";

export const site = siteData as typeof siteData & { categories: Category[] };
export const jobs = jobsData as Job[];
export const results = resultsData as Result[];
export const admitCards = admitCardsData as AdmitCard[];
export const answerKeys = answerKeysData as AnswerKey[];

export function getActiveJobs(): Job[] {
  return jobs.filter((j) => j.isActive);
}

export function getInactiveJobs(): Job[] {
  return jobs.filter((j) => !j.isActive);
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getJobsByCategory(category: string): Job[] {
  return jobs.filter((j) => j.category.includes(category) && j.isActive);
}

export function getRelatedJobs(job: Job, limit = 4): Job[] {
  return jobs
    .filter((j) => j.id !== job.id && j.category.some((c) => job.category.includes(c)) && j.isActive)
    .slice(0, limit);
}

export function getJobsByState(state: string): Job[] {
  return jobs.filter((j) => j.state === state && j.isActive);
}

export function getActiveResults(): Result[] {
  return results.filter((r) => r.isActive);
}

export function getActiveAdmitCards(): AdmitCard[] {
  return admitCards.filter((a) => a.isActive);
}

export function getActiveAnswerKeys(): AnswerKey[] {
  return answerKeys.filter((k) => k.isActive);
}

export function searchJobs(query: string): Job[] {
  const q = query.toLowerCase();
  return getActiveJobs().filter(
    (j) =>
      j.title.toLowerCase().includes(q) ||
      j.department.toLowerCase().includes(q) ||
      j.qualification.toLowerCase().includes(q) ||
      j.state.toLowerCase().includes(q)
  );
}

export function getCategoryIcon(categoryId: string): string {
  const cat = site.categories.find((c) => c.id === categoryId);
  return cat?.icon || "📌";
}

export function getCategoryLabel(categoryId: string): string {
  const cat = site.categories.find((c) => c.id === categoryId);
  return cat?.label || categoryId;
}

export function getDaysRemaining(dateStr: string): number {
  const [day, month, year] = dateStr.split("/");
  const target = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const parts = dateStr.split("/");
  if (parts.length !== 3) return dateStr;
  const months = [
    "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून",
    "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"
  ];
  return `${parseInt(parts[0])} ${months[parseInt(parts[1]) - 1]} ${parts[2]}`;
}

export function formatDateEn(dateStr: string): string {
  if (!dateStr) return "";
  const parts = dateStr.split("/");
  if (parts.length !== 3) return dateStr;
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${months[parseInt(parts[1]) - 1]} ${parseInt(parts[0])}, ${parts[2]}`;
}

export function formatNumber(num: number): string {
  return num.toLocaleString("en-IN");
}

export function paginate<T>(items: T[], page: number, perPage: number): { items: T[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(items.length / perPage);
  const start = (page - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    totalPages,
    currentPage: page,
  };
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
