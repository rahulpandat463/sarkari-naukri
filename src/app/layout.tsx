import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "sarkari naukri", "सरकारी नौकरी", "railway jobs", "ssc jobs", "banking jobs",
    "police jobs", "teaching jobs", "defence jobs", "state government jobs",
    "सरकारी नौकरी हेल्प", "govt jobs india", "latest govt jobs"
  ],
  authors: [{ name: site.name }],
  metadataBase: new URL(site.url),
  openGraph: {
    type: "website",
    locale: "hi_IN",
    siteName: site.name,
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <head>
        <link rel="canonical" href={site.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              alternateName: site.shortName,
              url: site.url,
              description: site.description,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${site.url}/jobs?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <div id="header-ad" className="bg-gray-100 py-2 text-center hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gray-200 h-[90px] flex items-center justify-center text-gray-400 text-sm mx-auto">
              Ad Space - Header Banner (728x90)
            </div>
          </div>
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
