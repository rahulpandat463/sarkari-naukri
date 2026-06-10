"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams?: Record<string, string>;
}

export default function Pagination({ currentPage, totalPages, baseUrl, searchParams = {} }: PaginationProps) {
  if (totalPages <= 1) return null;

  const buildUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2;
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-1 mt-8">
      {currentPage > 1 && (
        <a
          href={buildUrl(currentPage - 1)}
          className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm"
        >
          ← पिछला
        </a>
      )}
      {getPageNumbers().map((page, idx) =>
        typeof page === "string" ? (
          <span key={`ellipsis-${idx}`} className="px-3 py-2 text-gray-400">
            ...
          </span>
        ) : (
          <a
            key={page}
            href={buildUrl(page)}
            className={`px-4 py-2 border rounded text-sm ${
              page === currentPage
                ? "bg-primary text-white border-primary"
                : "bg-white border-gray-300 hover:bg-gray-50"
            }`}
          >
            {page}
          </a>
        )
      )}
      {currentPage < totalPages && (
        <a
          href={buildUrl(currentPage + 1)}
          className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm"
        >
          अगला →
        </a>
      )}
    </div>
  );
}
