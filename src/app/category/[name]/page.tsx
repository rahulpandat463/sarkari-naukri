import Link from "next/link";
import { notFound } from "next/navigation";
import { site, getJobsByCategory, paginate } from "@/lib/utils";
import JobCard from "@/components/JobCard";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

interface Props {
  params: { name: string };
  searchParams: { [key: string]: string | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = site.categories.find((c) => c.slug === params.name);
  if (!cat) return { title: "श्रेणी नहीं मिली" };

  return {
    title: `${cat.label} - सरकारी नौकरी भर्ती 2026`,
    description: `${cat.description}. ${cat.label} में नवीनतम भर्तियां, आवेदन प्रक्रिया, पात्रता और महत्वपूर्ण तिथियां।`,
    openGraph: {
      title: `${cat.label} | Sarkari Naukri Help`,
      description: cat.description,
    },
  };
}

export default function CategoryPage({ params, searchParams }: Props) {
  const cat = site.categories.find((c) => c.slug === params.name);
  if (!cat) notFound();

  const page = parseInt(searchParams.page || "1");
  const perPage = 10;
  const filtered = getJobsByCategory(cat.id);

  const { items, totalPages, currentPage } = paginate(filtered, page, perPage);

  return (
    <div className="page-container">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-primary">होम</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">{cat.label}</span>
      </nav>

      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-3xl">{cat.icon}</span>
          <h1 className="text-2xl font-bold text-secondary">{cat.label}</h1>
        </div>
        <p className="text-gray-600">{cat.description}</p>
        <p className="text-sm font-semibold text-primary mt-1">कुल {filtered.length} नौकरियां उपलब्ध</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              इस श्रेणी में कोई नौकरी नहीं मिली / No jobs found in this category
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((job, idx) => (
                <JobCard key={job.id} job={job} showAd={idx === 3} />
              ))}
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl={`/category/${params.name}`}
          />
        </div>

        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
