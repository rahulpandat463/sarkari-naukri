import Link from "next/link";
import { site, getBaseUrl } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "हमारे बारे में | About Us",
  description: `${site.name} के बारे में जानें। हम सरकारी नौकरियों की जानकारी प्रदान करने वाला एक भरोसेमंद पोर्टल हैं। हमारा मिशन, दृष्टिकोण और टीम के बारे में पढ़ें।`,
  alternates: { canonical: `${getBaseUrl()}/about/` },
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
            <h2 className="text-lg font-bold text-secondary mb-2">{site.name} - परिचय</h2>
            <p className="text-gray-700 leading-relaxed">
              {site.shortName} ({site.name}) एक विश्वसनीय और उपयोगकर्ता-अनुकूल सरकारी नौकरी सूचना पोर्टल है। 
              हमारा एकमात्र उद्देश्य भारत के प्रत्येक नागरिक तक सरकारी नौकरियों (Sarkari Naukri) की सटीक, 
              अद्यतन और व्यापक जानकारी पहुंचाना है। हम समझते हैं कि सरकारी नौकरी की तैयारी कर रहे लाखों 
              युवाओं के लिए सही समय पर सही जानकारी प्राप्त करना कितना महत्वपूर्ण है।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">हमारा मिशन / Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              हमारा मिशन सरकारी नौकरी की तैयारी कर रहे छात्रों और युवाओं को एक ही मंच पर सभी आवश्यक जानकारी 
              प्रदान करना है। हम यह सुनिश्चित करते हैं कि हमारे उपयोगकर्ताओं को नवीनतम भर्तियों, परीक्षा 
              परिणामों, एडमिट कार्ड और उत्तर कुंजियों की जानकारी सबसे पहले और सबसे सटीक रूप में मिले। 
              हम सरकारी नौकरी की जानकारी को आसान, सुलभ और समझने योग्य बनाने के लिए प्रतिबद्ध हैं।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">हमारा दृष्टिकोण / Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              भारत का सबसे भरोसेमंद और अग्रणी सरकारी नौकरी सूचना पोर्टल बनना, जहां हर उपयोगकर्ता को 
              बिना किसी परेशानी के सभी आवश्यक जानकारी प्राप्त हो सके। हम तकनीकी नवाचार और उपयोगकर्ता 
              अनुभव को सर्वोपरि रखते हुए अपनी सेवाओं को निरंतर बेहतर बनाने का प्रयास करते हैं।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">हम क्या प्रदान करते हैं / What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>भारतीय रेलवे, SSC, बैंकिंग, पुलिस, शिक्षण, रक्षा और राज्य सरकार की नवीनतम भर्तियां</li>
              <li>प्रत्येक भर्ती की विस्तृत जानकारी - पात्रता, आवेदन शुल्क, आयु सीमा, महत्वपूर्ण तिथियां</li>
              <li>परीक्षा परिणाम, एडमिट कार्ड और उत्तर कुंजियां</li>
              <li>श्रेणीवार और राज्यवार नौकरी फिल्टर</li>
              <li>मुफ्त और उपयोगकर्ता के अनुकूल इंटरफेस</li>
              <li>मोबाइल-फ्रेंडली डिज़ाइन</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">हमारी टीम / Our Team</h2>
            <p className="text-gray-700 leading-relaxed">
              {site.name} की टीम में अनुभवी प्रोफेशनल्स, कंटेंट राइटर्स और तकनीकी विशेषज्ञ शामिल हैं 
              जो सरकारी नौकरियों की सटीक और समय पर जानकारी प्रदान करने के लिए प्रतिबद्ध हैं। हमारी टीम 
              लगातार विभिन्न सरकारी विभागों की आधिकारिक वेबसाइटों की निगरानी करती है ताकि हमारे 
              उपयोगकर्ताओं को नवीनतम अपडेट मिल सके।
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h2 className="text-lg font-bold text-secondary mb-2">⚠️ महत्वपूर्ण सूचना / Important Notice</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              {site.name} किसी भी सरकारी विभाग या संगठन से संबद्ध नहीं है। यह एक सूचना पोर्टल है जो 
              विभिन्न सरकारी विभागों की आधिकारिक वेबसाइटों से जानकारी एकत्र करके उपयोगकर्ताओं तक पहुंचाता है। 
              किसी भी भर्ती के लिए आवेदन करने से पहले कृपया संबंधित विभाग की आधिकारिक वेबसाइट पर जाकर 
              जानकारी की पुष्टि अवश्य कर लें।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">हमसे संपर्क / Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              किसी भी प्रश्न, सुझाव या शिकायत के लिए कृपया हमारे <Link href="/contact" className="text-primary hover:underline">सम्पर्क पृष्ठ</Link> पर जाएं। 
              आप हमारे <a href={site.telegramLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram Group</a> से भी जुड़ सकते हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
