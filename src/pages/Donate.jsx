
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Shield, TrendingUp, Users, Check, Lock, FileText, Mail, Sparkles } from "lucide-react";

const donationImpact = [
  { amount: "₹500", impact: "Supports one farmer's participation in a training workshop" },
  { amount: "₹1,000", impact: "Provides soil testing and analysis for a small farm" },
  { amount: "₹2,500", impact: "Funds a one-day field awareness program for a rural village" },
  { amount: "₹5,000", impact: "Supports research on sustainable farming techniques" },
  { amount: "Custom", impact: "Every contribution creates lasting impact in the field" }
];

const whyDonate = [
  {
    icon: "🌾",
    text: "Train farmers in eco-friendly and climate-smart practices"
  },
  {
    icon: "🔬",
    text: "Conduct agricultural research for soil, water, and crop improvement"
  },
  {
    icon: "👩‍🌾",
    text: "Empower women and youth through skill-building programs"
  },
  {
    icon: "💧",
    text: "Implement sustainable irrigation and soil restoration projects"
  },
  {
    icon: "📚",
    text: "Expand awareness and educational outreach in rural communities"
  }
];

export default function Donate() {
  useEffect(() => {
    document.title = "Donate | Neomics Research Foundation";
  }, []);

  // Placeholder for createPageUrl if it's not defined elsewhere.
  // In a real application, this would be part of your routing setup (e.g., Next.js Link, React Router Link).
  const createPageUrl = (pageName) => {
    switch (pageName) {
      case "Volunteer":
        return "/volunteer";
      case "CSRCollaboration":
        return "/csr-collaboration";
      default:
        return "#";
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Heart Pulse Effect */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-9.jpg"
            alt="Donate to Neomics"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Heartbeat Pulse Rings */}
        <div className="hero-hearts">
          <div className="hero-heart-ring hero-heart-ring-1"></div>
          <div className="hero-heart-ring hero-heart-ring-2"></div>
          <div className="hero-heart-ring hero-heart-ring-3"></div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Floating Hearts */}
        <div className="hero-hearts-float">
          <div className="hero-heart-float hero-heart-float-1">💚</div>
          <div className="hero-heart-float hero-heart-float-2">💛</div>
          <div className="hero-heart-float hero-heart-float-3">💚</div>
          <div className="hero-heart-float hero-heart-float-4">💛</div>
          <div className="hero-heart-float hero-heart-float-5">💚</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Support Our Mission</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">💚</span> Donate
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Your support plants the seed for a sustainable tomorrow."
          </p>
        </div>

        <style jsx>{`
          .hero-section {
            position: relative;
            min-height: 60vh;
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

          .hero-hearts {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-heart-ring {
            position: absolute;
            border: 3px solid rgba(255, 167, 38, 0.3);
            border-radius: 50%;
            animation: hero-heartbeat 2s ease-out infinite;
          }

          .hero-heart-ring-1 {
            width: 150px;
            height: 150px;
            animation-delay: 0s;
          }

          .hero-heart-ring-2 {
            width: 250px;
            height: 250px;
            animation-delay: 0.3s;
          }

          .hero-heart-ring-3 {
            width: 350px;
            height: 350px;
            animation-delay: 0.6s;
          }

          @keyframes hero-heartbeat {
            0% {
              transform: scale(0.5);
              opacity: 1;
            }
            100% {
              transform: scale(2);
              opacity: 0;
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

          .hero-hearts-float {
            position: absolute;
            inset: 0;
          }

          .hero-heart-float {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.6;
            animation: hero-heart-rise 6s ease-in-out infinite;
          }

          .hero-heart-float-1 {
            bottom: -10%;
            left: 15%;
            animation-delay: 0s;
          }

          .hero-heart-float-2 {
            bottom: -10%;
            left: 35%;
            animation-delay: 1.2s;
          }

          .hero-heart-float-3 {
            bottom: -10%;
            right: 35%;
            animation-delay: 2.4s;
          }

          .hero-heart-float-4 {
            bottom: -10%;
            right: 15%;
            animation-delay: 3.6s;
          }

          .hero-heart-float-5 {
            bottom: -10%;
            left: 50%;
            animation-delay: 4.8s;
          }

          @keyframes hero-heart-rise {
            0% {
              transform: translateY(0) scale(0.8);
              opacity: 0;
            }
            20% {
              opacity: 0.8;
            }
            80% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-120vh) scale(1.2);
              opacity: 0;
            }
          }

          .hero-content {
            position: relative;
            z-index: 10;
            max-width: 1280px;
            margin: 0 auto;
            padding: 5rem 1rem;
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
            font-size: 3.75rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1.5rem;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            animation: hero-title-fade 1s ease-out forwards;
          }

          @keyframes hero-title-fade {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .hero-emoji {
            display: inline-block;
            animation: hero-emoji-heartbeat 1.5s ease-in-out infinite;
          }

          @keyframes hero-emoji-heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.2); }
            50% { transform: scale(1); }
            75% { transform: scale(1.15); }
          }

          .hero-subtitle {
            font-size: 2rem;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 1.5rem;
            animation: hero-subtitle-fade 1s ease-out 0.3s forwards;
            opacity: 0;
          }

          @keyframes hero-subtitle-fade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .hero-description {
            font-size: 1.75rem;
            color: white;
            font-style: italic;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
            animation: hero-description-fade 1s ease-out 0.6s forwards;
            opacity: 0;
          }

          @keyframes hero-description-fade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem; }
            .hero-subtitle { font-size: 1.5rem; }
            .hero-description { font-size: 1.25rem; }
          }
        `}</style>
      </section>

      {/* Overview */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-3xl text-[#F57F17] italic mb-8">
              "Your support plants the seed for a sustainable tomorrow." 🌱
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Neomics Research Foundation, every donation helps us empower farmers, promote sustainable 
              agriculture, and support community-driven innovation. Your contribution funds field training, 
              soil conservation projects, research studies, and awareness programs that make a real difference 
              in rural India.
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Why <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent">Donate?</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Each rupee you contribute helps us:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyDonate.map((item, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 ${
                index % 2 === 0 ? 'border-[#4CAF50] hover:border-[#66BB6A]' : 'border-[#FFEB3B] hover:border-[#FDD835]'
              } hover:-translate-y-3 hover:rotate-2 duration-500 cursor-pointer group`}>
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-[#2E7D32] italic">
              Together, we're nurturing the roots of a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            How Your Donation Helps
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border-3 border-[#FFA726] overflow-hidden hover:shadow-[#FFA726]/50 transition-all duration-500">
              <div className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] p-6">
                <div className="grid grid-cols-2 gap-4 text-white font-bold text-lg">
                  <div>Contribution</div>
                  <div>Impact</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {donationImpact.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 p-6 hover:bg-gradient-to-r hover:from-[#FFF3E0] hover:to-[#FFE0B2] transition-colors hover:scale-105 duration-300">
                    <div className="text-2xl font-bold text-[#E65100]">{item.amount}</div>
                    <div className="text-gray-700">{item.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Securely */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Donate Securely
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              All online donations are processed through trusted and secure payment gateways:
            </p>

            <div className="bg-white rounded-3xl p-12 shadow-2xl border-3 border-[#4CAF50] hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <div className="flex justify-center gap-8 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-6 h-6 text-[#2E7D32]" />
                  <span className="font-medium text-lg">Razorpay</span>
                </div>
                <span className="text-gray-400">|</span>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-6 h-6 text-[#2E7D32]" />
                  <span className="font-medium text-lg">Stripe</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#66BB6A] to-[#4CAF50] hover:from-[#4CAF50] hover:to-[#43A047] text-white shadow-2xl text-2xl py-8 mb-8 transform hover:scale-105 transition-all duration-300"
              >
                💚 Donate Now
              </Button>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl">
                  <Lock className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    🔒 Your payment and personal details are encrypted and handled securely.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl">
                  <Mail className="w-6 h-6 text-[#F57F17] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    💬 You'll receive an acknowledgment email and receipt after a successful donation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Commitment */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Transparency Commitment
            </h2>
            
            <div className="bg-white rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Neomics Research Foundation is a registered non-profit organization under Indian law. 
                We are committed to full transparency and accountability in all financial matters.
              </p>

              <div className="bg-gradient-to-br from-[#F9FBE7] to-[#F0F4C3] rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Legal Details:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="text-sm text-gray-600 mb-1">CIN</div>
                    <div className="font-bold text-gray-900 text-lg">U73100AS2014NPL011785</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="text-sm text-gray-600 mb-1">FCRA</div>
                    <div className="font-bold text-gray-900 text-lg">020840035</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="text-sm text-gray-600 mb-1">Registered Date</div>
                    <div className="font-bold text-gray-900 text-lg">14 Feb 2014</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="text-sm text-gray-600 mb-1">Location</div>
                    <div className="font-bold text-gray-900 text-lg">Guwahati, Assam</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-6 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl">
                <FileText className="w-6 h-6 text-[#E65100] flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  💬 Annual financial summaries and project reports are available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Other Ways to Support
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              If you wish to contribute in other ways, you can:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🌱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sponsor a training program</h3>
                <p className="text-gray-600">Fund farmer education and capacity building initiatives</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support a research initiative</h3>
                <p className="text-gray-600">Contribute to agricultural innovation and sustainability research</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Partner through CSR collaboration</h3>
                <p className="text-gray-600">Join forces for large-scale sustainable development projects</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🧑‍🏫</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteer or offer expertise</h3>
                <p className="text-gray-600">Share your skills and knowledge to help farmers grow</p>
              </div>
            </div>

            <div className="mt-12 text-center p-6 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-2xl">
              <p className="text-gray-700">
                <strong>Contact:</strong>{" "}
                <a href="mailto:info@neomicsresearch.org" className="text-[#E65100] hover:underline font-medium">
                  info@neomicsresearch.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-24 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-white animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            "Your generosity helps us sow seeds of change and harvest hope for thousands of farmers across India." 💚
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300"
            >
              💚 Donate Now
            </Button>
            <a href={createPageUrl("Volunteer")}>
            <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">🤝 Volunteer with Us</span>
              </Button>
            </a>
            <a href={createPageUrl("CSRCollaboration")}>
                            <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💼 Partner via CSR</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
