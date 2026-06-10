import Link from "next/link";
import { site, getBaseUrl } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "सम्पर्क करें | Contact Us",
  description: `${site.name} से संपर्क करें। किसी भी प्रश्न, सुझाव या शिकायत के लिए हमें संदेश भेजें। हम आपकी बात सुनने के लिए तैयार हैं।`,
  alternates: { canonical: `${getBaseUrl()}/contact/` },
};

export default function ContactPage() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

  return (
    <div className="page-container">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-primary">होम</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">सम्पर्क करें</span>
      </nav>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-secondary mb-2">सम्पर्क करें / Contact Us</h1>
          <p className="text-gray-600">हमें आपकी बात सुनने में खुशी होगी। कोई भी प्रश्न, सुझाव या शिकायत हो तो हमें बताएं।</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="content-card">
              <form
                action={`https://formspree.io/f/${formspreeId}`}
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      नाम / Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="आपका नाम"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      ईमेल / Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    विषय / Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="आपके संदेश का विषय"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    संदेश / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="आपका संदेश..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition w-full sm:w-auto"
                >
                  संदेश भेजें / Send Message →
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-4">
            <div className="content-card">
              <h3 className="font-bold text-lg text-secondary mb-3">📧 ईमेल / Email</h3>
              <p className="text-gray-600">info@sarkarinaukrihelp.com</p>
            </div>
            <div className="content-card">
              <h3 className="font-bold text-lg text-secondary mb-3">📱 टेलीग्राम / Telegram</h3>
              <a href={site.telegramLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                {site.telegramLink}
              </a>
            </div>
            <div className="content-card">
              <h3 className="font-bold text-lg text-secondary mb-3">⏰ प्रतिक्रिया समय</h3>
              <p className="text-gray-600 text-sm">हम 24-48 घंटों के भीतर आपके संदेश का उत्तर देने का प्रयास करते हैं।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
