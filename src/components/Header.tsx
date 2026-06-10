"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/utils";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/jobs?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="bg-secondary text-white shadow-lg sticky top-0 z-50">
      <div className="bg-primary text-center py-1.5 px-4 text-sm font-semibold">
        <a href={site.telegramLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
          📢 {site.shortName} Telegram Group से जुड़ें - नवीनतम अपडेट के लिए यहाँ क्लिक करें!
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-primary">{site.shortName.split(" ")[0]}</span>
              <span className="text-white"> {site.shortName.split(" ").slice(1).join(" ")}</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {site.navigation.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="px-3 py-2 rounded text-sm hover:bg-secondary-light transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:bg-secondary-light rounded" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 hover:bg-secondary-light rounded" aria-label="Menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="नौकरी खोजें / Search jobs..."
                className="flex-1 px-4 py-2 rounded text-gray-800 focus:outline-none"
              />
              <button type="submit" className="bg-primary px-6 py-2 rounded font-semibold hover:bg-primary-dark">
                खोजें
              </button>
            </form>
          </div>
        )}
      </div>

      {menuOpen && (
        <div className="md:hidden bg-secondary-light border-t border-blue-700">
          <nav className="px-4 py-2 space-y-1">
            {site.navigation.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="bg-secondary-light hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-1 overflow-x-auto py-1">
            {site.categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="px-3 py-1.5 text-xs whitespace-nowrap hover:bg-secondary rounded transition-colors"
              >
                {cat.icon} {cat.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
