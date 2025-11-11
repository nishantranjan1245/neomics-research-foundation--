import React, { useEffect } from "react";
import { FileText, CheckCircle, Sparkles } from "lucide-react";

export default function TermsOfUse() {
  useEffect(() => {
    document.title = "Terms of Use | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Document Scroll & Farm Elements */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-17.jpg"
            alt="Terms of Use"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Scrolling Document */}
        <div className="hero-document">
          <div className="document-scroll">
            <div className="document-line"></div>
            <div className="document-line"></div>
            <div className="document-line"></div>
            <div className="document-icon">📜</div>
          </div>
        </div>

        {/* Check Marks */}
        <div className="hero-checks">
          <div className="hero-check hero-check-1">✓</div>
          <div className="hero-check hero-check-2">✓</div>
          <div className="hero-check hero-check-3">✓</div>
          <div className="hero-check hero-check-4">✓</div>
        </div>

        {/* Farm Elements */}
        <div className="hero-farm-elements">
          <div className="hero-element hero-element-1">🌾</div>
          <div className="hero-element hero-element-2">🍃</div>
          <div className="hero-element hero-element-3">🌱</div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Terms & Conditions</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">⚖️</span> Terms of Use
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            Growing together with transparency and trust.
          </p>
        </div>

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

          .hero-document {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .document-scroll {
            width: 150px;
            height: 200px;
            background: rgba(255, 255, 255, 0.1);
            border: 3px solid rgba(255, 235, 59, 0.4);
            border-radius: 10px;
            position: relative;
            animation: hero-document-float 4s ease-in-out infinite;
          }

          .document-line {
            height: 3px;
            background: rgba(255, 235, 59, 0.3);
            margin: 20px 15px;
            border-radius: 2px;
          }

          .document-icon {
            position: absolute;
            font-size: 3rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          @keyframes hero-document-float {
            0%, 100% {
              transform: translateY(0) rotate(-5deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          .hero-checks {
            position: absolute;
            inset: 0;
          }

          .hero-check {
            position: absolute;
            font-size: 2.5rem;
            color: rgba(255, 235, 59, 0.8);
            font-weight: bold;
            animation: hero-check-appear 2s ease-in-out infinite;
          }

          .hero-check-1 {
            top: 25%;
            left: 20%;
            animation-delay: 0s;
          }

          .hero-check-2 {
            top: 35%;
            right: 25%;
            animation-delay: 0.5s;
          }

          .hero-check-3 {
            bottom: 30%;
            left: 25%;
            animation-delay: 1s;
          }

          .hero-check-4 {
            bottom: 35%;
            right: 20%;
            animation-delay: 1.5s;
          }

          @keyframes hero-check-appear {
            0%, 100% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
          }

          .hero-farm-elements {
            position: absolute;
            inset: 0;
          }

          .hero-element {
            position: absolute;
            font-size: 2rem;
            opacity: 0.5;
            animation: hero-element-sway 5s ease-in-out infinite;
          }

          .hero-element-1 {
            top: 20%;
            left: 30%;
            animation-delay: 0s;
          }

          .hero-element-2 {
            top: 30%;
            right: 28%;
            animation-delay: 1.5s;
          }

          .hero-element-3 {
            bottom: 25%;
            left: 35%;
            animation-delay: 3s;
          }

          @keyframes hero-element-sway {
            0%, 100% {
              transform: rotate(-10deg) translateX(0);
            }
            50% {
              transform: rotate(10deg) translateX(10px);
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

      {/* Content */}
      <section className="py-20 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50]">
            <div className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-2xl p-6 mb-8 border-l-4 border-[#4CAF50]">
              <p className="text-gray-700 text-lg">
                <strong>Effective Date:</strong> February 14, 2014<br />
                <strong>Last Updated:</strong> November 02, 2025
              </p>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">1.</span> Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Welcome to Neomics Research Foundation ("we," "our," "us"). By accessing or using our website <a href="http://www.neomicsresearch.org" className="text-[#4CAF50] hover:underline font-medium">www.neomicsresearch.org</a> (the "Site"), you agree to comply with and be bound by these Terms of Use.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  If you do not agree with these terms, please refrain from using the Site. These Terms govern all interactions with our website, including donations, volunteering, internships, CSR collaborations, and access to our content.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">2.</span> About the Organization
                </h2>
                <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-2xl p-6 border-3 border-[#FFEB3B]">
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Neomics Research Foundation is a registered non-profit organization under Indian law, working to promote sustainable agriculture, agri-tech research, and community empowerment.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <p><strong>CIN:</strong> U73100AS2014NPL011785</p>
                    <p><strong>FCRA:</strong> 020840035</p>
                    <p><strong>Registered Date:</strong> 14 February 2014</p>
                    <p><strong>Address:</strong> House No.-5, Rasaraj Bye Lane, Basistapur Lane 2, Hatigaon, Guwahati, Assam – 781028</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">3.</span> Use of the Website
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  You agree to use our website and services responsibly and for lawful purposes only. You must not:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Post or transmit any unlawful, defamatory, or harmful material",
                    "Attempt unauthorized access to the Site, server, or associated systems",
                    "Use the Site in a way that may impair or disrupt its functionality",
                    "Copy, reproduce, or redistribute content without prior written consent"
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#4CAF50]">
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className="text-red-500">✗</span>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We reserve the right to restrict access to the Site or remove content at our discretion.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">4.</span> Intellectual Property
                </h2>
                <div className="bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-6 border-l-4 border-[#FFA726]">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    All content on this website, including text, images, logos, graphics, and design, is the property of Neomics Research Foundation or its content providers and is protected under Indian and international copyright laws. You may not reproduce, distribute, or modify any content without prior written permission.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">5.</span> Donations and Payments
                </h2>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-5">
                    <p className="text-gray-700 leading-relaxed">
                      All donations made through this website are voluntary and non-refundable, except as specifically outlined in our Refund & Cancellation Policy.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl p-5">
                    <p className="text-gray-700 leading-relaxed">
                      We use secure third-party payment gateways (Razorpay, Stripe, etc.) for processing online donations. Your financial data is encrypted and handled securely by these platforms — we do not store your payment information.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl p-5">
                    <p className="text-gray-700 leading-relaxed">
                      Neomics Research Foundation issues electronic receipts for all valid contributions. Funds are utilized solely for the organization's charitable, research, and program-related purposes.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    By making a donation, you acknowledge that you have read and understood our Donation Policy and agree to the Terms of Use.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">6.</span> Volunteer, Internship & CSR Programs
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By submitting applications to volunteer, intern, or collaborate under CSR programs, you agree that:
                </p>
                <div className="space-y-3">
                  {[
                    "Information provided by you is accurate and complete",
                    "The Foundation may use your information for program coordination and communication",
                    "Participation is subject to selection, project availability, and field requirements",
                    "Neomics Foundation holds the right to modify, reschedule, or cancel programs if required",
                    "We are not responsible for any personal loss, injury, or expenses incurred during voluntary participation unless caused by organizational negligence"
                  ].map((item, index) => (
                    <div key={index} className={`bg-white rounded-lg p-4 shadow-md border-l-4 ${
                      index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                    }`}>
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className={index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'}>✓</span>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">7.</span> External Links
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our website may include links to third-party websites for reference or partnership purposes. We are not responsible for the content, privacy, or reliability of external websites. Accessing external links is done at your own discretion and risk.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">8.</span> Limitation of Liability
                </h2>
                <div className="bg-gradient-to-br from-[#FFA726] to-[#FB8C00] rounded-2xl p-6 text-white">
                  <p className="leading-relaxed mb-3">
                    Neomics Research Foundation strives to maintain accurate and updated content on this website, but we make no guarantees regarding:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The completeness or accuracy of information;</li>
                    <li>Uninterrupted website access; or</li>
                    <li>The suitability of the Site for any specific purpose.</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    To the fullest extent permitted by law, Neomics Research Foundation is not liable for any direct, indirect, incidental, or consequential damages arising from:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Your use or inability to use the Site;</li>
                    <li>Errors, omissions, or inaccuracies in content;</li>
                    <li>Technical issues or unauthorized access to data.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">9.</span> Indemnification
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  By using this website, you agree to indemnify and hold harmless Neomics Research Foundation, its directors, staff, and affiliates from any claims, damages, or losses arising out of your violation of these Terms or misuse of the Site.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">10.</span> Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Your use of this website is also governed by our Privacy Policy. Please review it to understand how we handle personal information and data security.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">11.</span> Termination of Access
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We reserve the right to terminate or restrict user access to the website without prior notice if we believe that you have violated these Terms or engaged in harmful activity.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">12.</span> Governing Law & Jurisdiction
                </h2>
                <div className="bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Guwahati, Assam.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">13.</span> Updates to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We may update or modify these Terms of Use periodically to reflect changes in law, policy, or operations. The "Last Updated" date will always reflect the most recent version.
                </p>
              </section>

              <section className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-2xl p-8 border-3 border-[#4CAF50]">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-[#4CAF50]">14.</span> Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="space-y-2 text-gray-700 text-lg">
                  <p className="font-bold">📍 Neomics Research Foundation</p>
                  <p>House No.-5, Rasaraj Bye Lane, Basistapur Lane 2,</p>
                  <p>Hatigaon, Guwahati, Assam – 781028, India</p>
                  <p className="mt-3">📞 <a href="tel:+919845673910" className="text-[#2E7D32] hover:underline">+91 9845673910</a></p>
                  <p>✉️ <a href="mailto:info@neomicsresearch.org" className="text-[#2E7D32] hover:underline">info@neomicsresearch.org</a></p>
                </div>
              </section>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#FFA726] to-[#FB8C00] rounded-2xl text-white text-center">
              <p className="text-xl font-medium">
                🌿 By continuing to use this website, you acknowledge that you have read, understood, and agreed to these Terms of Use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}