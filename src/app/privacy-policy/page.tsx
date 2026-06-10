import Link from "next/link";
import { site } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "प्राइवेसी पॉलिसी",
  description: `${site.name} की प्राइवेसी पॉलिसी। जानें कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-container">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-primary">होम</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">प्राइवेसी पॉलिसी</span>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary mb-6">प्राइवेसी पॉलिसी / Privacy Policy</h1>

        <div className="content-card space-y-6 text-gray-700 leading-relaxed">
          <p>
            Last updated: January 2026
          </p>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">1. परिचय / Introduction</h2>
            <p>
              {site.name} ({site.shortName}) आपकी गोपनीयता का सम्मान करता है। यह प्राइवेसी पॉलिसी बताती है कि हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करते हैं।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">2. हम कौन सी जानकारी एकत्र करते हैं / Information We Collect</h2>
            <p>हम निम्नलिखित जानकारी एकत्र कर सकते हैं:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>व्यक्तिगत जानकारी (नाम, ईमेल पता) जब आप हमसे संपर्क फॉर्म के माध्यम से संपर्क करते हैं</li>
              <li>ब्राउज़िंग डेटा (कुकीज़ के माध्यम से)</li>
              <li>वेबसाइट उपयोग डेटा (एनालिटिक्स के माध्यम से)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">3. हम आपकी जानकारी का उपयोग कैसे करते हैं / How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>वेबसाइट के अनुभव को बेहतर बनाने के लिए</li>
              <li>आपके प्रश्नों का उत्तर देने के लिए</li>
              <li>नवीनतम नौकरी अपडेट प्रदान करने के लिए</li>
              <li>वेबसाइट ट्रैफिक और उपयोग पैटर्न का विश्लेषण करने के लिए</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">4. कुकीज़ / Cookies</h2>
            <p>
              हम वेबसाइट के प्रदर्शन को बेहतर बनाने और उपयोगकर्ता अनुभव को बढ़ाने के लिए कुकीज़ का उपयोग करते हैं। आप अपने ब्राउज़र सेटिंग्स में कुकीज़ को नियंत्रित कर सकते हैं।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">5. तृतीय-पक्ष सेवाएं / Third-Party Services</h2>
            <p>
              हम Google AdSense और Google Analytics जैसी तृतीय-पक्ष सेवाओं का उपयोग कर सकते हैं। ये सेवाएं आपके ब्राउज़िंग व्यवहार के आधार पर वैयक्तिकृत विज्ञापन प्रदर्शित करने के लिए कुकीज़ का उपयोग कर सकती हैं।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">6. डेटा सुरक्षा / Data Security</h2>
            <p>
              हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुंच, परिवर्तन, प्रकटीकरण या विनाश से बचाने के लिए उचित सुरक्षा उपाय लागू करते हैं।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">7. हमसे संपर्क / Contact Us</h2>
            <p>
              इस प्राइवेसी पॉलिसी के बारे में किसी भी प्रश्न के लिए, कृपया हमसे <Link href="/contact" className="text-primary hover:underline">संपर्क करें</Link>।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
