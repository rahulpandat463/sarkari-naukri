import { site, jobs } from "@/lib/utils";

export default function sitemap() {
  const baseUrl = site.url;

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "hourly" as const, priority: 1.0 },
    { url: `${baseUrl}/jobs`, lastModified: new Date(), changeFrequency: "hourly" as const, priority: 0.9 },
    { url: `${baseUrl}/results`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.7 },
    { url: `${baseUrl}/admit-card`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.7 },
    { url: `${baseUrl}/answer-key`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.2 },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.2 },
  ];

  const categoryPages = site.categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const jobPages = jobs.map((job) => ({
    url: `${baseUrl}/jobs/${job.slug}`,
    lastModified: new Date(job.createdAt.split("/").reverse().join("-")),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...jobPages];
}
