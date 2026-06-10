import Link from "next/link";
import { site } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "अस्वीकरण",
  description: `${site.name} का अस्वीकरण। वेबसाइट पर उपलब्ध जानकारी की सटीकता और उपयोग के संबंध में कानूनी अस्वीकरण।`,
};

export default function DisclaimerPage() {
  return (
    <div className="page-container">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-primary">होम</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">अस्वीकरण</span>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-secondary mb-6">अस्वीकरण / Disclaimer</h1>

        <div className="content-card space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">सूचना की सटीकता / Accuracy of Information</h2>
            <p>
              {site.name} ({site.shortName}) पर उपलब्ध कराई गई जानकारी केवल सामान्य सूचना उद्देश्यों के लिए है। हम जानकारी की सटीकता, पूर्णता और अद्यतितता सुनिश्चित करने का प्रयास करते हैं, लेकिन किसी भी प्रकार की त्रुटि या चूक के लिए जिम्मेदार नहीं होंगे।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">आधिकारिक स्रोत / Official Sources</h2>
            <p>
              उपयोगकर्ताओं को सलाह दी जाती है कि वे किसी भी सरकारी भर्ती के लिए आवेदन करने से पहले संबंधित विभाग की आधिकारिक वेबसाइट पर जाकर जानकारी की पुष्टि कर लें। यह वेबसाइट किसी भी सरकारी संगठन से संबद्ध नहीं है।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">बाहरी लिंक / External Links</h2>
            <p>
              हमारी वेबसाइट में तीसरे पक्ष की वेबसाइटों के लिंक शामिल हो सकते हैं। हम इन बाहरी साइटों की सामग्री, गोपनीयता नीतियों या प्रथाओं पर कोई नियंत्रण नहीं रखते हैं और उनके लिए जिम्मेदार नहीं हैं।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">कॉपीराइट / Copyright</h2>
            <p>
              इस वेबसाइट पर सभी सामग्री (टेक्स्ट, ग्राफिक्स, लोगो, इमेज) {site.name} की संपत्ति है, जब तक कि अन्यथा न कहा गया हो। बिना पूर्व अनुमति के किसी भी सामग्री के पुनरुत्पादन की अनुमति नहीं है।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">विज्ञापन / Advertisements</h2>
            <p>
              हमारी वेबसाइट Google AdSense और अन्य विज्ञापन नेटवर्क का उपयोग करती है। विज्ञापनदाता आपके ब्राउज़िंग व्यवहार के आधार पर विज्ञापन प्रदर्शित करने के लिए कुकीज़ का उपयोग कर सकते हैं।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">कानूनी सीमा / Limitation of Liability</h2>
            <p>
              किसी भी स्थिति में {site.name} इस वेबसाइट के उपयोग या उस पर उपलब्ध जानकारी के उपयोग से उत्पन्न किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक या परिणामी क्षति के लिए उत्तरदायी नहीं होगा।
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">हमसे संपर्क / Contact Us</h2>
            <p>
              इस अस्वीकरण के बारे में किसी भी प्रश्न के लिए, कृपया हमसे <Link href="/contact" className="text-primary hover:underline">संपर्क करें</Link>।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
