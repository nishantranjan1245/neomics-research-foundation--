
import React, { useEffect } from "react";
import { AlertTriangle, Info, Sparkles } from "lucide-react";

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Disclaimer | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Warning Signs in Field */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-19.jpg"
            alt="Disclaimer"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Info Signs with Plants */}
        <div className="hero-info-board">
          <div className="info-board">
            <div className="board-post"></div>
            <div className="board-sign">ℹ️</div>
            <div className="board-plant board-plant-left">🌿</div>
            <div className="board-plant board-plant-right">🌱</div>
          </div>
        </div>

        {/* Warning Icons */}
        <div className="hero-warnings">
          <div className="warning warning-1">⚠️</div>
          <div className="warning warning-2">📢</div>
          <div className="warning warning-3">ℹ️</div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Important Notice</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">⚠️</span> Disclaimer
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            Please read this information carefully before using our services.
          </p>
        </div>

        {/* Note: The 'jsx' attribute on the style tag implies the use of a library like 'styled-jsx'
            or a similar CSS-in-JS solution. If this component is not compiled with such a tool
            (e.g., in a standard Create React App setup without additional configuration),
            this style block might not be applied correctly or could cause a build error. */}
        <style jsx>{`
          .hero-section {
            position: relative;
            min-height: 50vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .hero-bg {
            position: absolute;
            inset: 0;
          }

          .hero-bg-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            animation: hero-zoom 20s ease-in-out infinite alternate;
          }

          @keyframes hero-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(46, 125, 50, 0.95), rgba(56, 142, 60, 0.92), rgba(76, 175, 80, 0.88));
          }

          .hero-info-board {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .info-board {
            position: relative;
            width: 150px;
            height: 180px;
            animation: hero-board-sway 4s ease-in-out infinite;
          }

          .board-post {
            width: 10px;
            height: 100px;
            background: linear-gradient(to bottom, rgba(139, 69, 19, 0.6), rgba(101, 67, 33, 0.7));
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }

          .board-sign {
            width: 120px;
            height: 120px;
            background: rgba(255, 235, 59, 0.2);
            border: 4px solid rgba(255, 235, 59, 0.5);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            color: #fff; /* Ensure emoji color is visible on overlay */
          }

          .board-plant {
            position: absolute;
            font-size: 2rem;
            bottom: -10px;
          }

          .board-plant-left {
            left: -30px;
          }

          .board-plant-right {
            right: -30px;
          }

          @keyframes hero-board-sway {
            0%, 100% {
              transform: rotate(-3deg);
            }
            50% {
              transform: rotate(3deg);
            }
          }

          .hero-warnings {
            position: absolute;
            inset: 0;
          }

          .warning {
            position: absolute;
            font-size: 2rem;
            opacity: 0.6;
            animation: hero-warning-pulse 3s ease-in-out infinite;
          }

          .warning-1 {
            top: 25%;
            left: 22%;
            animation-delay: 0s;
          }

          .warning-2 {
            top: 32%;
            right: 20%;
            animation-delay: 1s;
          }

          .warning-3 {
            bottom: 28%;
            left: 28%;
            animation-delay: 2s;
          }

          @keyframes hero-warning-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
          }

          .hero-blobs {
            position: absolute;
            inset: 0;
            overflow: hidden;
          }

          .hero-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            opacity: 0.3;
            animation: hero-blob-float 10s ease-in-out infinite;
          }

          .hero-blob-1 {
            width: 400px;
            height: 400px;
            background: linear-gradient(135deg, #7CB342, #9CCC65);
            top: 10%;
            left: 10%;
          }

          .hero-blob-2 {
            width: 500px;
            height: 500px;
            background: linear-gradient(135deg, #FFEB3B, #FDD835);
            bottom: 10%;
            right: 10%;
            animation-delay: 2s;
          }

          .hero-blob-3 {
            width: 300px;
            height: 300px;
            background: linear-gradient(135deg, #4CAF50, #66BB6A);
            top: 50%;
            left: 50%;
            animation-delay: 4s;
          }

          @keyframes hero-blob-float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }

          .hero-content {
            position: relative;
            z-index: 10;
            max-width: 1280px;
            margin: 0 auto;
            padding: 4rem 1rem;
            text-align: center;
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #FFA726, #FB8C00);
            color: white;
            padding: 12px 24px;
            border-radius: 50px;
            box-shadow: 0 10px 40px rgba(255, 167, 38, 0.5);
            animation: hero-badge-bounce 2s ease-in-out infinite;
            border: 3px solid rgba(255, 255, 255, 0.3);
            margin-bottom: 1.5rem;
          }

          @keyframes hero-badge-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .hero-badge-icon {
            width: 20px;
            height: 20px;
            animation: hero-icon-spin 3s linear infinite;
          }

          @keyframes hero-icon-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .hero-title {
            font-size: 3rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1rem;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .hero-emoji {
            display: inline-block;
            animation: hero-emoji-bounce 2s ease-in-out infinite;
          }

          @keyframes hero-emoji-bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          .hero-subtitle {
            font-size: 1.5rem;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 1rem;
          }

          .hero-description {
            font-size: 1.25rem;
            color: white;
            font-style: italic;
            max-width: 800px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .hero-title { font-size: 2rem; }
            .hero-subtitle { font-size: 1.25rem; }
            .hero-description { font-size: 1rem; }
          }
        `}</style>
      </section>

      {/* Content with agriculture colors... */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FFA726] to-[#FB8C00] rounded-2xl p-8 mb-8 text-white">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Important Notice</h3>
                <p className="leading-relaxed">
                  Please read this disclaimer carefully before using the Neomics Research Foundation website or engaging with our services.
                </p>
              </div>
            </div>
          </div>

          {/* General Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The website www.neomicsresearch.org is operated by Neomics Research Foundation, a registered non-profit 
              organization based in Guwahati, Assam, India.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              All information, materials, and resources published on this website are provided for general informational, 
              educational, and awareness purposes only. While we strive to ensure accuracy and timeliness, Neomics Research 
              Foundation makes no representations or warranties of any kind — express or implied — about the completeness, 
              reliability, or accuracy of the information contained herein.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Use of this website or reliance on any information is entirely at your own discretion and risk.
            </p>
          </div>

          {/* No Professional Advice */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. No Professional or Legal Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The content available on this website — including articles, publications, and project summaries — is intended 
              for educational and informational purposes only.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It should not be interpreted as professional, legal, or technical advice on agriculture, environment, or research. 
              Users are advised to consult qualified professionals or relevant authorities before making decisions based on any 
              information provided on this site.
            </p>
          </div>

          {/* Accuracy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Accuracy of Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Although we make every effort to maintain accurate and updated content, Neomics Research Foundation does not 
              guarantee that all data, statistics, or third-party references on this website are error-free or current.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We may modify, update, or remove website content at any time without prior notice.
            </p>
          </div>

          {/* External Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. External Links</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may include links to external websites, partner organizations, or government portals for reference purposes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we aim to link only to credible sources, Neomics Research Foundation has no control over — and assumes no 
              responsibility for — the nature, content, or availability of those external websites.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The inclusion of any link does not imply endorsement, partnership, or recommendation by the Foundation. 
              Users accessing external links do so at their own risk.
            </p>
          </div>

          {/* Donations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Donations and Financial Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All online donations made through Neomics Research Foundation's website or payment gateways are voluntary and 
              governed by our Refund & Cancellation Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use secure third-party gateways such as Razorpay and Stripe, but we do not control or assume responsibility 
              for their independent security or data handling practices. Donors are encouraged to review the respective payment 
              platform's policies before completing a transaction.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-3">
              Under no circumstances shall Neomics Research Foundation, its directors, staff, affiliates, or partners be liable 
              for any loss or damage — including indirect or consequential loss — arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Use or inability to use the website</li>
              <li>Errors, omissions, or inaccuracies in website content</li>
              <li>Technical failures, downtime, or unauthorized access</li>
              <li>Reliance on data or information presented on the site</li>
            </ul>
            <p className="text-gray-700 font-semibold">
              By using this website, you agree that Neomics Research Foundation is not responsible for any actions taken based 
              on its content.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All text, visuals, graphics, and materials on this website are the intellectual property of Neomics Research 
              Foundation, unless stated otherwise.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Content may be used or shared only for non-commercial, educational purposes, provided proper credit is given to 
              the Foundation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unauthorized use, reproduction, or distribution of website content for commercial or promotional purposes is 
              strictly prohibited.
            </p>
          </div>

          {/* No Warranties */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. No Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The website is provided "as is" without any warranty, express or implied. We do not warrant that the site will 
              be continuously available, error-free, or secure at all times.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While we take reasonable precautions, we cannot guarantee that the website will be free from viruses, malware, 
              or harmful code.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Neomics Research Foundation reserves the right to amend or update this Disclaimer at any time without prior notice. 
              Changes will be posted on this page with a revised "Last Updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Users are encouraged to review this page periodically to stay informed of our terms and conditions.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions regarding this Disclaimer or the use of our website, please contact:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>📍 Neomics Research Foundation</strong></p>
              <p>House No.-5, Rasaraj Bye Lane, Basistapur Lane 2,</p>
              <p>Hatigaon, Guwahati, Assam – 781028, India</p>
              <p><strong>📞</strong> +91 9845673910</p>
              <p><strong>✉️</strong> <a href="mailto:info@neomicsresearch.org" className="text-red-600 hover:underline">info@neomicsresearch.org</a></p>
            </div>
            <p className="text-gray-700 mt-4 italic">
              By using this website, you acknowledge that you have read, understood, and agreed to this Disclaimer and our 
              related policies.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
