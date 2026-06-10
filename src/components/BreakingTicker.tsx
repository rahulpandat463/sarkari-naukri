"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/utils";
import Link from "next/link";

export default function BreakingTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % site.breakingNews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center">
        <span className="bg-white text-red-600 px-2 py-0.5 rounded text-xs font-bold mr-3 whitespace-nowrap">
          BREAKING
        </span>
        <div className="overflow-hidden flex-1 h-6 relative">
          {site.breakingNews.map((news, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 text-sm ${
                index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
              }`}
            >
              <Link href="/jobs" className="hover:underline">
                {news}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
