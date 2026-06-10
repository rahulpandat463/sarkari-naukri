import Link from "next/link";
import { site, getActiveJobs, jobs } from "@/lib/utils";
import BreakingTicker from "@/components/BreakingTicker";
import CategoryCard from "@/components/CategoryCard";
import JobCard from "@/components/JobCard";
import Sidebar from "@/components/Sidebar";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  const activeJobs = getActiveJobs();
  const latestJobs = activeJobs.slice(0, 8);

  const categoryCounts = site.categories.map((cat) => ({
    ...cat,
    count: jobs.filter((j) => j.category.includes(cat.id) && !isDateExpired(j.lastDate)).length,
  }));

  return (
    <>
      <BreakingTicker />

      <div id="header-ad-mobile" className="md:hidden">
        <AdBanner slot="9988776655" format="horizontal" style={{ minHeight: "60px" }} />
      </div>

      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="section-title">📂 नौकरी श्रेणियां / Job Categories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {categoryCounts.slice(0, 7).map((cat) => (
                  <CategoryCard key={cat.id} category={cat} count={cat.count} />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="section-title mb-0">🔴 नवीनतम नौकरियां / Latest Jobs</h2>
                <Link href="/jobs" className="text-sm text-primary font-semibold hover:underline">
                  सभी देखें →
                </Link>
              </div>
              {latestJobs.length === 0 ? (
                <div className="text-center py-8 text-gray-500 bg-white rounded-lg border border-gray-200">
                  फिलहाल कोई सक्रिय नौकरी नहीं है / No active jobs at the moment
                </div>
              ) : (
                <div className="space-y-4">
                  {latestJobs.map((job, idx) => (
                    <JobCard key={job.id} job={job} showAd={idx === 2} />
                  ))}
                </div>
              )}
              <div className="text-center mt-6">
                <Link
                  href="/jobs"
                  className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-light transition inline-block"
                >
                  सभी नौकरियां देखें / View All Jobs →
                </Link>
              </div>
            </section>
          </div>

          <div>
            <Sidebar />
          </div>
        </div>

        <section className="mt-8">
          <h2 className="section-title">📢 महत्वपूर्ण लिंक / Important Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/results" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center">
              <span className="text-2xl block mb-1">📋</span>
              <span className="text-sm font-semibold text-gray-700">परीक्षा परिणाम</span>
              <span className="text-xs text-gray-500 block">Exam Results</span>
            </Link>
            <Link href="/admit-card" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center">
              <span className="text-2xl block mb-1">🎫</span>
              <span className="text-sm font-semibold text-gray-700">एडमिट कार्ड</span>
              <span className="text-xs text-gray-500 block">Admit Cards</span>
            </Link>
            <Link href="/answer-key" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center">
              <span className="text-2xl block mb-1">🔑</span>
              <span className="text-sm font-semibold text-gray-700">उत्तर कुंजी</span>
              <span className="text-xs text-gray-500 block">Answer Keys</span>
            </Link>
            <Link href="/about" className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center">
              <span className="text-2xl block mb-1">ℹ️</span>
              <span className="text-sm font-semibold text-gray-700">हमारे बारे में</span>
              <span className="text-xs text-gray-500 block">About Us</span>
            </Link>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-primary text-white rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">📱 Telegram Group से जुड़ें</h3>
            <p className="mb-4">नवीनतम नौकरी अपडेट, परिणाम और एडमिट कार्ड की जानकारी सबसे पहले पाने के लिए हमारे Telegram Group से जुड़ें!</p>
            <a
              href={site.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Join Telegram Now 🚀
            </a>
          </div>
        </section>
      </div>

      <div id="between-content-ad" className="max-w-7xl mx-auto px-4">
        <AdBanner slot="1122334455" format="auto" />
      </div>
    </>
  );
}

function isDateExpired(dateStr: string): boolean {
  const [day, month, year] = dateStr.split("/");
  const target = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return target < now;
}
