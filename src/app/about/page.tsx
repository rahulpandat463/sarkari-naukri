import Link from "next/link";
import { site } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "हमारे बारे में",
  description: `${site.name} के बारे में जानें। हम सरकारी नौकरियों की जानकारी प्रदान करने वाला एक भरोसेमंद पोर्टल हैं।`,
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-primary">होम</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">हमारे बारे में</span>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary mb-6">हमारे बारे में / About Us</h1>

        <div className="content-card space-y-6">
          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">{site.name}</h2>
            <p className="text-gray-700 leading-relaxed">
              {site.shortName} एक भरोसेमंद और अग्रणी सरकारी नौकरी सूचना पोर्टल है। हमारा मिशन भारत के हर नागरिक तक सरकारी नौकरियों की सटीक, अद्यतित और व्यापक जानकारी पहुंचाना है।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">हमारा उद्देश्य / Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              हमारा उद्देश्य सरकारी नौकरी की तैयारी कर रहे लाखों युवाओं को एक ही मंच पर सभी आवश्यक जानकारी प्रदान करना है। हम यह सुनिश्चित करते हैं कि हमारे उपयोगकर्ताओं को नवीनतम भर्तियों, परिणामों, एडमिट कार्ड और उत्तर कुंजियों की जानकारी सबसे पहले मिले।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">हम क्या प्रदान करते हैं / What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>भारतीय रेलवे, SSC, बैंकिंग, पुलिस, शिक्षण, रक्षा और राज्य सरकार की नवीनतम भर्तियां</li>
              <li>प्रत्येक भर्ती की विस्तृत जानकारी (पात्रता, आवेदन शुल्क, महत्वपूर्ण तिथियां)</li>
              <li>परीक्षा परिणाम, एडमिट कार्ड और उत्तर कुंजियां</li>
              <li>नियमित अपडेट और सूचनाएं</li>
              <li>मुफ्त और उपयोगकर्ता के अनुकूल इंटरफेस</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">हमसे संपर्क / Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              किसी भी प्रश्न या सुझाव के लिए कृपया हमारे <Link href="/contact" className="text-primary hover:underline">सम्पर्क पृष्ठ</Link> पर जाएं या हमारे Telegram Group से जुड़ें।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
