import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import JobAlertPopup from "@/components/JobAlertPopup";
import { site, getBaseUrl } from "@/lib/utils";

const baseUrl = getBaseUrl();

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
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "hi_IN",
    siteName: site.name,
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    url: baseUrl,
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-XXXXXXXXXX";

  return (
    <html lang="hi">
      <head>
        <link rel="canonical" href={baseUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              alternateName: site.shortName,
              url: baseUrl,
              description: site.description,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${baseUrl}/jobs?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <div id="header-ad" className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <AdBanner slot="1234567890" format="horizontal" style={{ minHeight: "90px" }} />
          </div>
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <JobAlertPopup />
      </body>
    </html>
  );
}
