import { site, getAllJobs, getBaseUrl } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const allJobs = getAllJobs();

  const jobUrls = allJobs.map((job) => ({
    url: `${baseUrl}/jobs/${job.slug}/`,
    lastModified: new Date(job.createdAt.split("/").reverse().join("-")),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/jobs/`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/results/`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/admit-card/`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/answer-key/`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    ...site.categories.map((cat) => ({
      url: `${baseUrl}/category/${cat.slug}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...jobUrls,
  ];
}
