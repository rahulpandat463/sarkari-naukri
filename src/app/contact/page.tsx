import Link from "next/link";
import { site } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "सम्पर्क करें",
  description: `${site.name} से संपर्क करें। किसी भी प्रश्न, सुझाव या शिकायत के लिए हमसे संपर्क करें।`,
};

export default function ContactPage() {
  return (
    <div className="page-container">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-primary">होम</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">सम्पर्क करें</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-secondary mb-6">सम्पर्क करें / Contact Us</h1>

          <div className="content-card">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-700">📧 ईमेल / Email</p>
                <p className="text-gray-600">info@sarkarinaukrihelp.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">📱 टेलीग्राम / Telegram</p>
                <a href={site.telegramLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {site.telegramLink}
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-700">📱 व्हाट्सएप / WhatsApp</p>
                <a href={site.whatsappGroup} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {site.whatsappGroup}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-secondary mb-6">हमें संदेश भेजें / Send Message</h2>
          <div className="content-card">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">नाम / Name *</label>
                <input type="text" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">ईमेल / Email *</label>
                <input type="email" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">विषय / Subject *</label>
                <input type="text" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">संदेश / Message *</label>
                <textarea rows={5} required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"></textarea>
              </div>
              <button type="submit" className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition">
                संदेश भेजें / Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
