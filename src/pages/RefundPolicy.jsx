import React, { useEffect } from "react";
import { RefreshCw, CheckCircle, Sparkles } from "lucide-react";

export default function RefundPolicy() {
  useEffect(() => {
    document.title = "Refund & Cancellation Policy | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Trust Handshake & Seeds */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-18.jpg"
            alt="Refund Policy"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Handshake with Seeds */}
        <div className="hero-handshake">
          <div className="handshake-icon">🤝</div>
          <div className="seed seed-1">🌱</div>
          <div className="seed seed-2">🌿</div>
          <div className="seed seed-3">🌾</div>
        </div>

        {/* Trust Symbols */}
        <div className="hero-trust-symbols">
          <div className="trust-symbol trust-symbol-1">✨</div>
          <div className="trust-symbol trust-symbol-2">💚</div>
          <div className="trust-symbol trust-symbol-3">✓</div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Trust & Transparency</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">💰</span> Refund & Cancellation Policy
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            Your trust is our foundation — we handle every contribution with care.
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

          .hero-handshake {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .handshake-icon {
            font-size: 5rem;
            animation: hero-handshake-shake 3s ease-in-out infinite;
          }

          @keyframes hero-handshake-shake {
            0%, 100% {
              transform: rotate(-5deg);
            }
            50% {
              transform: rotate(5deg);
            }
          }

          .seed {
            position: absolute;
            font-size: 2rem;
            animation: hero-seed-grow 4s ease-out infinite;
          }

          .seed-1 {
            top: -40px;
            left: -30px;
            animation-delay: 0s;
          }

          .seed-2 {
            top: -30px;
            right: -40px;
            animation-delay: 1s;
          }

          .seed-3 {
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            animation-delay: 2s;
          }

          @keyframes hero-seed-grow {
            0%, 100% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.3);
              opacity: 1;
            }
          }

          .hero-trust-symbols {
            position: absolute;
            inset: 0;
          }

          .trust-symbol {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.6;
            animation: hero-trust-float 5s ease-in-out infinite;
          }

          .trust-symbol-1 {
            top: 25%;
            left: 20%;
            animation-delay: 0s;
          }

          .trust-symbol-2 {
            top: 30%;
            right: 25%;
            animation-delay: 1.5s;
          }

          .trust-symbol-3 {
            bottom: 30%;
            left: 30%;
            animation-delay: 3s;
          }

          @keyframes hero-trust-float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(10deg);
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
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.2) rotate(180deg); }
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
                  At Neomics Research Foundation, we value every contribution and sincerely thank our supporters for helping us further our mission of promoting sustainable agriculture, research, and rural development.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  As a non-profit organization, we strive to ensure transparency and accountability in all financial transactions. This Refund & Cancellation Policy outlines the terms under which donations or payments may be refunded or canceled.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">2.</span> Donations
                </h2>
                <div className="bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl p-6 border-l-4 border-[#FFA726]">
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    All donations made to Neomics Research Foundation are <strong>voluntary and non-refundable</strong>, except in cases of a transactional error or duplicate payment.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Once a donation has been successfully processed and acknowledged by us, it cannot be canceled or refunded as the funds are immediately allocated to ongoing charitable and research activities.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    However, if a donor has made an error in the payment amount or transaction, we will review the request and process a refund at our discretion.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">3.</span> Eligibility for Refunds
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Refund requests may be considered only under the following conditions:
                </p>
                <div className="space-y-3">
                  {[
                    { icon: "💳", text: "Duplicate donation due to technical error" },
                    { icon: "💰", text: "Incorrect payment amount or multiple deductions" },
                    { icon: "⚙️", text: "Technical error at the payment gateway leading to failed transaction but successful debit" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#4CAF50] hover:scale-105 transition-transform duration-300">
                      <p className="text-gray-700 flex items-start gap-3 text-lg">
                        <span className="text-2xl">{item.icon}</span>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-6 mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    In all such cases, donors must notify us in writing within <strong>7 days</strong> of the transaction date.
                  </p>
                  <p className="text-gray-700 mt-3">
                    📩 Email for refund requests: <a href="mailto:accounts@neomicsresearch.org" className="text-[#E65100] hover:underline font-medium">accounts@neomicsresearch.org</a>
                  </p>
                  <p className="text-gray-700">
                    📞 Helpline: <a href="tel:+919845673910" className="text-[#E65100] hover:underline font-medium">+91 9845673910</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">4.</span> Refund Process
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">If your refund request meets the eligibility criteria:</p>
                <div className="space-y-3">
                  {[
                    "The donor must send a written request with transaction details (date, amount, payment reference number, and reason for refund)",
                    "Our finance team will review the request and verify the transaction",
                    "Approved refunds will be initiated within 7–10 business days from the date of approval",
                    "Please note: Refunds may take additional time to reflect depending on your bank or payment provider"
                  ].map((step, index) => (
                    <div key={index} className={`bg-white rounded-lg p-4 shadow-md border-l-4 ${
                      index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFEB3B]'
                    }`}>
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className={`font-bold ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#F57F17]'}`}>{index + 1}.</span>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-5 mt-4">
                  <p className="text-gray-700">
                    The refund will be credited to the original payment method (bank account or card) used during the transaction.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">5.</span> Cancellation of Donations
                </h2>
                <div className="bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl p-6 border-l-4 border-[#FFA726]">
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Donations <strong>cannot be cancelled</strong> after successful payment confirmation. However:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>If you mistakenly initiated a donation and it has not been processed yet, contact us immediately</li>
                    <li>For recurring donations (if applicable), you may cancel future installments by contacting us in writing</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">6.</span> Event Registrations or Fee-Based Programs
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have registered for a paid event, training, or workshop organized by Neomics Research Foundation:
                </p>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-lg p-4">
                    <p className="text-gray-700">✓ Cancellation requests made <strong>7 days before</strong> the event are eligible for a <strong>full refund</strong></p>
                  </div>
                  <div className="bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-lg p-4">
                    <p className="text-gray-700">✓ Cancellations made <strong>within 3 days</strong> of the event will receive a <strong>50% refund</strong></p>
                  </div>
                  <div className="bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-lg p-4">
                    <p className="text-gray-700">✗ No refund will be processed for cancellations made <strong>less than 24 hours</strong> before the event start time</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-lg p-4">
                    <p className="text-gray-700">✓ If an event is canceled or postponed by the organization, registered participants will be offered a <strong>full refund</strong> or the option to attend a rescheduled session</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">7.</span> Tax Exemption Receipts
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Donors who receive a tax exemption certificate (if applicable) under the Income Tax Act will not be eligible for a refund, as the donation is already recorded for tax purposes.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">8.</span> Payment Gateway Charges
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Any service fees, processing charges, or payment gateway deductions incurred during the original transaction may not be refundable and are subject to the policies of Razorpay, Stripe, or other payment providers used by the Foundation.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">9.</span> Failed Transactions
                </h2>
                <div className="bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-6 border-l-4 border-[#FFA726]">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If a transaction fails but the amount is debited from your account:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Please wait 5-7 business days for an automatic reversal by your bank or payment gateway</li>
                    <li>If the amount is not reversed, contact us with transaction proof, and we will coordinate with the payment gateway</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#4CAF50]">10.</span> Changes to Policy
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Neomics Research Foundation reserves the right to modify or update this Refund & Cancellation Policy at any time without prior notice. Any changes will be reflected with a new "Last Updated" date on this page. We encourage all donors and participants to periodically review this policy for updates.
                </p>
              </section>

              <section className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-2xl p-8 border-3 border-[#4CAF50]">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-[#4CAF50]">11.</span> Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  For any queries, refund requests, or support related to your donations or payments, please contact:
                </p>
                <div className="space-y-2 text-gray-700 text-lg">
                  <p className="font-bold">📍 Neomics Research Foundation</p>
                  <p>House No.-5, Rasaraj Bye Lane, Basistapur Lane 2,</p>
                  <p>Hatigaon, Guwahati, Assam – 781028, India</p>
                  <p className="mt-3">📞 <a href="tel:+919845673910" className="text-[#2E7D32] hover:underline">+91 9845673910</a></p>
                  <p>✉️ <a href="mailto:accounts@neomicsresearch.org" className="text-[#2E7D32] hover:underline">accounts@neomicsresearch.org</a></p>
                </div>
              </section>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#FFA726] to-[#FB8C00] rounded-2xl text-white text-center">
              <p className="text-xl font-medium">
                🌿 We deeply appreciate your generosity and understanding. Every contribution — big or small — helps us continue our work in building a sustainable agricultural future for India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}