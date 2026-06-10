import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobBySlug, getRelatedJobs, formatDate, formatNumber, site, jobs, getBaseUrl } from "@/lib/utils";
import ShareButtons from "@/components/ShareButtons";
import CountdownTimer from "@/components/CountdownTimer";
import JobCard from "@/components/JobCard";
import Sidebar from "@/components/Sidebar";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";

const baseUrl = getBaseUrl();

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getJobBySlug(params.slug);
  if (!job) return { title: "नौकरी नहीं मिली" };

  return {
    title: `${job.title} | ${site.name}`,
    description: `${job.title} - ${job.department}. कुल पद: ${formatNumber(job.totalPosts)}, अंतिम तिथि: ${formatDate(job.lastDate)}. आवेदन करें और पूरी जानकारी प्राप्त करें।`,
    openGraph: {
      title: `${job.title} | ${site.name}`,
      description: `${job.department} में ${formatNumber(job.totalPosts)} पदों पर भर्ती। अंतिम तिथि: ${formatDate(job.lastDate)}`,
      url: `${baseUrl}/jobs/${job.slug}`,
      type: "article",
    },
    alternates: {
      canonical: `${baseUrl}/jobs/${job.slug}`,
    },
  };
}

export default function JobDetailPage({ params }: Props) {
  const job = getJobBySlug(params.slug);
  if (!job) notFound();

  const relatedJobs = getRelatedJobs(job, 4);

  const jobPostingJsonLd = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.department} में ${formatNumber(job.totalPosts)} पदों पर भर्ती। शैक्षणिक योग्यता: ${job.qualification}। आयु सीमा: ${job.ageLimit.min}-${job.ageLimit.max} वर्ष।`,
    datePosted: job.createdAt,
    validThrough: job.lastDate,
    hiringOrganization: {
      "@type": "Organization",
      name: job.department,
      sameAs: job.officialWebsite,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: job.state,
      },
    },
    totalJobOpenings: job.totalPosts,
    employmentType: "FULL_TIME",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `${job.title} के लिए शैक्षणिक योग्यता क्या है?`,
        acceptedAnswer: { "@type": "Answer", text: job.qualification },
      },
      {
        "@type": "Question",
        name: `${job.title} के लिए अंतिम तिथि क्या है?`,
        acceptedAnswer: { "@type": "Answer", text: formatDate(job.lastDate) },
      },
      {
        "@type": "Question",
        name: `${job.title} में कुल कितने पद हैं?`,
        acceptedAnswer: { "@type": "Answer", text: `कुल ${formatNumber(job.totalPosts)} पद` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "होम", item: baseUrl },
              { "@type": "ListItem", position: 2, name: "नौकरियां", item: `${baseUrl}/jobs/` },
              { "@type": "ListItem", position: 3, name: job.title, item: `${baseUrl}/jobs/${job.slug}/` },
            ],
          }),
        }}
      />

      <div className="page-container">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-primary">होम</Link>
          <span className="mx-2">›</span>
          <Link href="/jobs" className="hover:text-primary">नौकरियां</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">{job.title.slice(0, 40)}...</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="content-card">
              <h1 className="text-2xl font-bold text-secondary mb-2">{job.title}</h1>
              <p className="text-gray-600 mb-4">{job.titleEn}</p>

              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-center space-x-2">
                  {job.category.map((cat) => (
                    <Link
                      key={cat}
                      href={`/category/${cat}`}
                      className="bg-gray-100 px-3 py-1 rounded text-sm hover:bg-primary hover:text-white transition"
                    >
                      {site.categories.find((c) => c.id === cat)?.label || cat}
                    </Link>
                  ))}
                  <span className={`px-3 py-1 rounded text-sm ${job.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {job.isActive ? "Active" : "Closed"}
                  </span>
                </div>
                <ShareButtons job={job} />
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-sm text-gray-600">अंतिम तिथि / Last Date</p>
                    <p className="font-bold text-lg text-red-600">{formatDate(job.lastDate)}</p>
                  </div>
                  <CountdownTimer targetDate={job.lastDate} />
                </div>
              </div>
            </div>

            <div className="content-card">
              <h2 className="text-lg font-bold text-secondary mb-4">📋 महत्वपूर्ण विवरण / Important Details</h2>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-semibold w-48">संगठन / Organization</td>
                    <td className="py-3">{job.department}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-semibold">कुल पद / Total Posts</td>
                    <td className="py-3 font-bold text-primary">{formatNumber(job.totalPosts)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-semibold">राज्य / State</td>
                    <td className="py-3">{job.state}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="content-card">
              <h2 className="text-lg font-bold text-secondary mb-4">📊 श्रेणीवार पद / Category-wise Vacancies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="table-header">श्रेणी / Category</th>
                      <th className="table-header">पदों की संख्या / Posts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {job.vacancyDetails.map((v, idx) => (
                      <tr key={idx} className="even:bg-gray-50">
                        <td className="table-cell">{v.category}</td>
                        <td className="table-cell font-semibold">{formatNumber(v.posts)}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-bold">
                      <td className="table-cell">कुल / Total</td>
                      <td className="table-cell">{formatNumber(job.totalPosts)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="content-card">
              <h2 className="text-lg font-bold text-secondary mb-4">🎯 पात्रता / Eligibility</h2>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-semibold w-48">शैक्षणिक योग्यता</td>
                    <td className="py-3">{job.qualification}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-semibold">आयु सीमा / Age Limit</td>
                    <td className="py-3">{job.ageLimit.min} - {job.ageLimit.max} वर्ष</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-semibold">आवेदन शुल्क / Fee</td>
                    <td className="py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>सामान्य / General: ₹{formatNumber(job.applicationFee.general)}</li>
                        <li>ओबीसी / OBC: ₹{formatNumber(job.applicationFee.obc)}</li>
                        <li>एससी/एसटी / SC/ST: ₹{formatNumber(job.applicationFee.sc_st)}</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="content-card">
              <h2 className="text-lg font-bold text-secondary mb-4">📅 महत्वपूर्ण तिथियां / Important Dates</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="table-header">घटना / Event</th>
                    <th className="table-header">तिथि / Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-gray-50">
                    <td className="table-cell">नोटिफिकेशन जारी / Notification Date</td>
                    <td className="table-cell font-semibold">{formatDate(job.importantDates.notificationDate)}</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="table-cell">आवेदन शुरू / Apply Start</td>
                    <td className="table-cell font-semibold">{formatDate(job.importantDates.applyStart)}</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="table-cell">आवेदन की अंतिम तिथि / Last Date</td>
                    <td className="table-cell font-semibold text-red-600">{formatDate(job.importantDates.applyEnd)}</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="table-cell">परीक्षा तिथि / Exam Date</td>
                    <td className="table-cell font-semibold">{formatDate(job.importantDates.examDate)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="content-card">
              <h2 className="text-lg font-bold text-secondary mb-4">📝 चयन प्रक्रिया / Selection Process</h2>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                {job.selectionProcess.map((step, idx) => (
                  <li key={idx} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </div>

            <div className="content-card no-print">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    आधिकारिक वेबसाइट / Official Website:
                    <a href={job.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline ml-1">
                      {job.officialWebsite}
                    </a>
                  </p>
                </div>
                <div className="flex space-x-3">
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition text-center"
                  >
                    Apply Now 🚀
                  </a>
                </div>
              </div>
            </div>

            <div className="content-card no-print">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-secondary">📢 Telegram Group से जुड़ें</h3>
                <a
                  href={site.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary-dark transition"
                >
                  Join Telegram
                </a>
              </div>
            </div>

            <div className="no-print">
              <AdBanner slot="5566778899" format="auto" style={{ minHeight: "120px" }} />
            </div>

            {relatedJobs.length > 0 && (
              <section>
                <h2 className="section-title">🔗 संबंधित नौकरियां / Related Jobs</h2>
                <div className="space-y-4">
                  {relatedJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
