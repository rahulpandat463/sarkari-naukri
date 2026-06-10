"use client";

import Link from "next/link";
import { Job } from "@/lib/types";
import { formatDate, formatNumber, getDaysRemaining, getCategoryIcon } from "@/lib/utils";

interface JobCardProps {
  job: Job;
  showAd?: boolean;
}

export default function JobCard({ job, showAd = false }: JobCardProps) {
  const daysLeft = getDaysRemaining(job.lastDate);
  const isUrgent = daysLeft <= 7 && daysLeft > 0;

  return (
    <>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 hover:text-primary transition-colors">
                <Link href={`/jobs/${job.slug}`}>{job.title}</Link>
              </h3>
              <p className="text-sm text-gray-600 mt-1">{job.department}</p>
            </div>
            <div className="flex space-x-1">
              {job.category.map((cat) => (
                <span key={cat} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {getCategoryIcon(cat)}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-sm">
            <div>
              <span className="text-gray-500">कुल पद / Posts</span>
              <p className="font-semibold text-gray-800">{formatNumber(job.totalPosts)}</p>
            </div>
            <div>
              <span className="text-gray-500">योग्यता / Qualification</span>
              <p className="font-semibold text-gray-800 text-xs truncate">{job.qualification.split("(")[0].trim()}</p>
            </div>
            <div>
              <span className="text-gray-500">राज्य / State</span>
              <p className="font-semibold text-gray-800">{job.state}</p>
            </div>
            <div>
              <span className="text-gray-500">अंतिम तिथि / Last Date</span>
              <p className={`font-semibold ${isUrgent ? "text-red-600" : "text-gray-800"}`}>
                {formatDate(job.lastDate)}
                {daysLeft > 0 && (
                  <span className={`block text-xs ${isUrgent ? "text-red-500" : "text-gray-500"}`}>
                    {daysLeft} दिन शेष
                  </span>
                )}
                {daysLeft <= 0 && <span className="block text-xs text-red-500">समाप्त</span>}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link
              href={`/jobs/${job.slug}`}
              className="bg-primary text-white px-5 py-2 rounded text-sm font-semibold hover:bg-primary-dark transition-colors inline-block"
            >
              पूरी जानकारी / Details →
            </Link>
            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-5 py-2 rounded text-sm font-semibold hover:bg-secondary-light transition-colors inline-block"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {showAd && (
        <div className="bg-gray-100 py-3 rounded-lg text-center">
          <div className="bg-gray-200 h-[120px] flex items-center justify-center text-gray-400 text-sm mx-auto">
            Ad Space - After Job Card (Responsive)
          </div>
        </div>
      )}
    </>
  );
}
