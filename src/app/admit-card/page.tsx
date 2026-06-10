import Link from "next/link";
import { getActiveAdmitCards } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "एडमिट कार्ड 2026",
  description: "सभी सरकारी परीक्षाओं के नवीनतम एडमिट कार्ड / प्रवेश पत्र। SSC, रेलवे, बैंकिंग और अन्य परीक्षाओं के एडमिट कार्ड।",
  openGraph: {
    title: "एडमिट कार्ड 2026 | Sarkari Naukri Help",
    description: "सभी सरकारी परीक्षाओं के नवीनतम एडमिट कार्ड।",
  },
};

export default function AdmitCardPage() {
  const cards = getActiveAdmitCards();

  return (
    <div className="page-container">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-primary">होम</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">एडमिट कार्ड</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-secondary mb-2">🎫 एडमिट कार्ड / Admit Cards</h1>
          <p className="text-gray-600 mb-6">सभी सरकारी परीक्षाओं के नवीनतम एडमिट कार्ड / प्रवेश पत्र</p>

          <div className="space-y-4">
            {cards.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-5 hover:shadow-lg transition">
                <h2 className="font-bold text-gray-800 text-lg">{card.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{card.titleEn}</p>
                <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                  <div>
                    <span className="text-gray-500">संगठन / Organization</span>
                    <p className="font-semibold">{card.organization}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">परीक्षा तिथि / Exam Date</span>
                    <p className="font-semibold">{card.examDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">जारी तिथि / Release Date</span>
                    <p className="font-semibold text-primary">{card.releaseDate}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">{card.description}</p>
                <div className="mt-4">
                  <a
                    href={card.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-6 py-2 rounded text-sm font-semibold hover:bg-primary-dark transition inline-block"
                  >
                    एडमिट कार्ड डाउनलोड करें / Download →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
