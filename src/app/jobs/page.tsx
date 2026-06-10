import { site, getActiveJobs, paginate } from "@/lib/utils";
import JobCard from "@/components/JobCard";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "सभी सरकारी नौकरियां",
  description: "भारत सरकार की सभी नवीनतम सरकारी नौकरियां। रेलवे, SSC, बैंकिंग, पुलिस, शिक्षण, रक्षा और राज्य सरकार की भर्तियां।",
  openGraph: {
    title: "सभी सरकारी नौकरियां | Sarkari Naukri Help",
    description: "भारत सरकार की सभी नवीनतम सरकारी नौकरियां। रेलवे, SSC, बैंकिंग, पुलिस, शिक्षण, रक्षा और राज्य सरकार की भर्तियां।",
  },
};

export default function JobsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = parseInt(searchParams.page || "1");
  const categoryFilter = searchParams.category || "";
  const stateFilter = searchParams.state || "";
  const searchQuery = searchParams.q || "";
  const perPage = 10;

  let filtered = getActiveJobs();

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.department.toLowerCase().includes(q) ||
        j.qualification.toLowerCase().includes(q) ||
        j.state.toLowerCase().includes(q)
    );
  }

  if (categoryFilter) {
    filtered = filtered.filter((j) => j.category.includes(categoryFilter));
  }

  if (stateFilter) {
    filtered = filtered.filter((j) => j.state === stateFilter);
  }

  filtered.sort((a, b) => {
    const dateA = a.createdAt.split("/").reverse().join("");
    const dateB = b.createdAt.split("/").reverse().join("");
    return dateB.localeCompare(dateA);
  });

  const { items, totalPages, currentPage } = paginate(filtered, page, perPage);
  const states = Array.from(new Set(getActiveJobs().map((j) => j.state)));

  const params = new URLSearchParams();
  if (categoryFilter) params.set("category", categoryFilter);
  if (stateFilter) params.set("state", stateFilter);
  if (searchQuery) params.set("q", searchQuery);

  return (
    <div className="page-container">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary">सभी सरकारी नौकरियां / All Govt Jobs</h1>
        <p className="text-sm text-gray-600 mt-1">कुल {filtered.length} सक्रिय नौकरियां उपलब्ध</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 mb-6">
            <form method="GET" className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">श्रेणी / Category</label>
                <select name="category" defaultValue={categoryFilter} className="w-full border rounded px-3 py-2 text-sm">
                  <option value="">सभी श्रेणियां</option>
                  {site.categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">राज्य / State</label>
                <select name="state" defaultValue={stateFilter} className="w-full border rounded px-3 py-2 text-sm">
                  <option value="">सभी राज्य</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">खोज / Search</label>
                <input type="text" name="q" defaultValue={searchQuery} placeholder="नौकरी खोजें..." className="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div className="flex items-end space-x-2">
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-primary-dark w-full">
                  फ़िल्टर / Filter
                </button>
                <a href="/jobs" className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm font-semibold hover:bg-gray-300 whitespace-nowrap">
                  Reset
                </a>
              </div>
            </form>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              कोई नौकरी नहीं मिली / No jobs found
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((job, idx) => (
                <JobCard key={job.id} job={job} showAd={idx === 2} />
              ))}
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl="/jobs"
            searchParams={Object.fromEntries(params.entries())}
          />
        </div>

        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
