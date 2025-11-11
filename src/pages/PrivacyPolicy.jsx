import React, { useEffect } from "react";
import { Shield, Lock, Sparkles } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Shield & Leaves Protection */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-16.jpg"
            alt="Privacy Policy"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Protective Shield with Leaves */}
        <div className="hero-shield">
          <div className="shield-outer"></div>
          <div className="shield-inner">🛡️</div>
          <div className="shield-leaf shield-leaf-1">🍃</div>
          <div className="shield-leaf shield-leaf-2">🌿</div>
          <div className="shield-leaf shield-leaf-3">🍃</div>
          <div className="shield-leaf shield-leaf-4">🌿</div>
        </div>

        {/* Lock Icons */}
        <div className="hero-locks">
          <div className="hero-lock hero-lock-1">🔒</div>
          <div className="hero-lock hero-lock-2">🔐</div>
          <div className="hero-lock hero-lock-3">🔒</div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Your Privacy Matters</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🔒</span> Privacy Policy
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            We protect your information like we protect the earth — with care and responsibility.
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

          .hero-shield {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .shield-outer {
            width: 200px;
            height: 200px;
            border: 4px solid rgba(255, 235, 59, 0.3);
            border-radius: 50%;
            animation: hero-shield-pulse 3s ease-in-out infinite;
          }

          .shield-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 4rem;
            animation: hero-shield-glow 2s ease-in-out infinite;
          }

          .shield-leaf {
            position: absolute;
            font-size: 2rem;
            animation: hero-leaf-rotate 8s linear infinite;
          }

          .shield-leaf-1 {
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            animation-delay: 0s;
          }

          .shield-leaf-2 {
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            animation-delay: 2s;
          }

          .shield-leaf-3 {
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
            animation-delay: 4s;
          }

          .shield-leaf-4 {
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
            animation-delay: 6s;
          }

          @keyframes hero-shield-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }

          @keyframes hero-shield-glow {
            0%, 100% {
              filter: drop-shadow(0 0 10px rgba(255, 235, 59, 0.5));
            }
            50% {
              filter: drop-shadow(0 0 20px rgba(255, 235, 59, 0.8));
            }
          }

          @keyframes hero-leaf-rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .hero-locks {
            position: absolute;
            inset: 0;
          }

          .hero-lock {
            position: absolute;
            font-size: 2rem;
            opacity: 0.5;
            animation: hero-lock-bounce 3s ease-in-out infinite;
          }

          .hero-lock-1 {
            top: 20%;
            left: 25%;
            animation-delay: 0s;
          }

          .hero-lock-2 {
            top: 30%;
            right: 20%;
            animation-delay: 1s;
          }

          .hero-lock-3 {
            bottom: 25%;
            left: 30%;
            animation-delay: 2s;
          }

          @keyframes hero-lock-bounce {
            0%, 100% {
              transform: translateY(0);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-20px);
              opacity: 0.8;
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
                  Welcome to Neomics Research Foundation ("we," "our," "us"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website <a href="http://www.neomicsresearch.org" className="text-[#4CAF50] hover:underline font-medium">www.neomicsresearch.org</a>, make donations, or engage with our programs and services.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  By using our website or submitting information to us, you agree to the terms of this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">2.</span> Information We Collect
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-6 border-l-4 border-[#4CAF50]">
                    <h3 className="font-bold text-gray-900 mb-3 text-xl">a. Personal Information</h3>
                    <p className="text-gray-700 mb-2">When you contact us, donate, or apply for a program, we may collect:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Full name, email address, and phone number</li>
                      <li>Mailing or billing address (if applicable)</li>
                      <li>Donation details and payment information</li>
                      <li>Academic or professional background (for internships, volunteering, or partnerships)</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl p-6 border-l-4 border-[#FFA726]">
                    <h3 className="font-bold text-gray-900 mb-3 text-xl">b. Non-Personal Information</h3>
                    <p className="text-gray-700 mb-2">We may collect data such as:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Browser type, device, and operating system</li>
                      <li>Pages visited and duration of visit</li>
                      <li>IP address and general geographic location</li>
                      <li>Cookies and analytics data via tools like Google Analytics</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">3.</span> How We Use Your Information
                </h2>
                <div className="bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl p-6">
                  <p className="text-gray-700 mb-3">We use your information to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Process donations and issue receipts</li>
                    <li>Respond to your inquiries or partnership requests</li>
                    <li>Manage volunteer, internship, and CSR applications</li>
                    <li>Send newsletters and project updates (only if you opt-in)</li>
                    <li>Improve our website, services, and outreach communication</li>
                    <li>Comply with applicable legal and financial obligations</li>
                  </ul>
                  <p className="text-gray-700 mt-4 font-bold">We never sell, rent, or trade your personal data.</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">4.</span> Donation Information
                </h2>
                <div className="bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-6 border-l-4 border-[#FFA726]">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    All donations are processed through secure third-party payment gateways like <strong>Razorpay</strong> and <strong>Stripe</strong>. Your financial data (card or bank details) is encrypted and processed directly by these gateways — we do not store or access this sensitive information.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We retain only necessary transaction references for recordkeeping and audit compliance.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">5.</span> Cookies & Analytics
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We use cookies to enhance your browsing experience and analyze website traffic. You can disable cookies in your browser settings, but certain features may not function as intended.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">6.</span> Information Sharing
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">We may share limited information with:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md border-3 border-[#4CAF50]">
                    <p className="text-gray-700"><strong>Authorized service providers</strong> (for donation or communication processing)</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border-3 border-[#FFEB3B]">
                    <p className="text-gray-700"><strong>Partner institutions</strong> for collaborative programs (with prior consent)</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border-3 border-[#7CB342]">
                    <p className="text-gray-700"><strong>Legal or regulatory authorities</strong>, if required under Indian law</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  All third-party vendors and partners are obligated to protect your data in accordance with this policy.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">7.</span> Data Security
                </h2>
                <div className="bg-gradient-to-br from-[#FFA726] to-[#FB8C00] rounded-2xl p-6 text-white">
                  <p className="leading-relaxed text-lg">
                    We use appropriate technical and administrative measures to protect your personal data from unauthorized access, alteration, or disclosure. While we strive for full security, no online transmission or storage method is completely secure. By using our site, you acknowledge these limitations and consent to reasonable data practices.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">8.</span> Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">As a user, you have the right to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Access and review your personal data",
                    "Request corrections or updates",
                    "Withdraw consent to receive communications",
                    "Request deletion of your personal data (subject to legal retention requirements)"
                  ].map((right, index) => (
                    <div key={index} className={`bg-white rounded-xl p-4 shadow-md border-3 ${
                      index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                    } hover:scale-105 transition-transform duration-300`}>
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className={index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'}>✓</span>
                        {right}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  For such requests, please contact <a href="mailto:privacy@neomicsresearch.org" className="text-[#4CAF50] hover:underline font-medium">privacy@neomicsresearch.org</a>.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">9.</span> External Links
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our website may include links to external sites for reference or partnership purposes. We are not responsible for the content, security, or privacy policies of third-party websites.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">10.</span> Policy Updates
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We may revise this Privacy Policy from time to time. Updated versions will be posted on this page with the revised "Last Updated" date. Please review this page periodically to stay informed of our privacy practices.
                </p>
              </section>

              <section className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-2xl p-8 border-3 border-[#4CAF50]">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-[#4CAF50]">11.</span> Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  For any questions, feedback, or privacy-related concerns, please reach out to:
                </p>
                <div className="space-y-2 text-gray-700 text-lg">
                  <p className="font-bold">📍 Neomics Research Foundation</p>
                  <p>House No.-5, Rasaraj Bye Lane, Basistapur Lane 2,</p>
                  <p>Hatigaon, Guwahati, Assam – 781028, India</p>
                  <p className="mt-3">📞 <a href="tel:+919845673910" className="text-[#2E7D32] hover:underline">+91 9845673910</a></p>
                  <p>✉️ <a href="mailto:privacy@neomicsresearch.org" className="text-[#2E7D32] hover:underline">privacy@neomicsresearch.org</a></p>
                </div>
              </section>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#FFA726] to-[#FB8C00] rounded-2xl text-white text-center">
              <p className="text-xl font-medium">
                🌿 At Neomics Research Foundation, your trust matters most. We are committed to protecting your privacy and ensuring transparency in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}