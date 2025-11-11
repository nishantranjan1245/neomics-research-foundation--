import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Handshake, Send, Target, Users, CheckCircle, Mail, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function PartnerWithUs() {
  useEffect(() => {
    document.title = "Partner With Us | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Puzzle Pieces Coming Together */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-6.jpg"
            alt="Partner With Us"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Puzzle Pieces Animation */}
        <div className="hero-puzzles">
          <div className="hero-puzzle hero-puzzle-1">🧩</div>
          <div className="hero-puzzle hero-puzzle-2">🧩</div>
          <div className="hero-puzzle hero-puzzle-3">🧩</div>
          <div className="hero-puzzle hero-puzzle-4">🧩</div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Partnership Symbols */}
        <div className="hero-symbols">
          <div className="hero-symbol hero-symbol-1">🌍</div>
          <div className="hero-symbol hero-symbol-2">🌟</div>
          <div className="hero-symbol hero-symbol-3">💡</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Collaborate for Impact</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🌟</span> Partner With Us
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Together, we grow stronger — for farmers, for communities, for the planet." 🌾
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

          .hero-puzzles {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-puzzle {
            position: absolute;
            font-size: 4rem;
            opacity: 0.4;
            animation: hero-puzzle-connect 6s ease-in-out infinite;
          }

          .hero-puzzle-1 {
            top: 25%;
            left: 20%;
            animation-delay: 0s;
          }

          .hero-puzzle-2 {
            top: 25%;
            right: 20%;
            animation-delay: 1.5s;
          }

          .hero-puzzle-3 {
            bottom: 25%;
            left: 20%;
            animation-delay: 3s;
          }

          .hero-puzzle-4 {
            bottom: 25%;
            right: 20%;
            animation-delay: 4.5s;
          }

          @keyframes hero-puzzle-connect {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 0.4;
            }
            50% {
              transform: translate(20px, -20px) rotate(90deg);
              opacity: 0.7;
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

          .hero-symbols {
            position: absolute;
            inset: 0;
          }

          .hero-symbol {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-symbol-orbit 10s ease-in-out infinite;
          }

          .hero-symbol-1 {
            top: 30%;
            left: 25%;
            animation-delay: 0s;
          }

          .hero-symbol-2 {
            top: 35%;
            right: 25%;
            animation-delay: 2s;
          }

          .hero-symbol-3 {
            bottom: 30%;
            left: 35%;
            animation-delay: 4s;
          }

          @keyframes hero-symbol-orbit {
            0%, 100% {
              transform: translateY(0) scale(1);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-30px) scale(1.3);
              opacity: 0.8;
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
            animation: hero-emoji-bounce 2s ease-in-out infinite;
          }

          @keyframes hero-emoji-bounce {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.2) rotate(10deg); }
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              At Neomics Research Foundation, we believe that lasting impact is created through collaboration. 
              We work with organizations, institutions, and innovators who share our vision of building a sustainable 
              and inclusive agricultural ecosystem.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              By partnering with us, you become a part of a mission that combines science, technology, and community 
              empowerment — driving transformation from the grassroots level.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why Partner with Neomics</h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            We bring a decade of on-ground experience, scientific research, and community trust to every collaboration. 
            Our partnerships are built on transparency, measurable impact, and shared commitment to sustainability.
          </p>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your organization can:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">🌱</span>
              <p className="text-gray-700">Create long-term social and environmental impact</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">🔬</span>
              <p className="text-gray-700">Support research and field innovation in agriculture</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">💧</span>
              <p className="text-gray-700">Strengthen soil, water, and resource conservation</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">👩‍🌾</span>
              <p className="text-gray-700">Empower women and rural youth through skill-based programs</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">📊</span>
              <p className="text-gray-700">Align your CSR or development goals with national sustainability targets</p>
            </div>
          </div>

          <p className="text-center text-xl text-[#2E7D32] italic mt-12">
            Partnership isn't just funding a project — it's co-creating change.
          </p>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Partnership Opportunities</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            We offer a wide range of collaborative opportunities for organizations and institutions:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "a. Corporate Partnerships",
                desc: "Work with us through CSR, cause marketing, or employee engagement programs. Your organization's support helps scale community initiatives and measurable impact in rural India."
              },
              {
                title: "b. Academic Collaborations",
                desc: "Partner with us on joint research, field studies, and student internships. We collaborate with universities and research centers to bridge the gap between theory and field application."
              },
              {
                title: "c. Government & Institutional Alliances",
                desc: "Collaborate on large-scale projects for sustainable farming, rural development, or awareness campaigns supported by government initiatives."
              },
              {
                title: "d. NGO & Network Partnerships",
                desc: "Work with like-minded NGOs and community groups to expand program reach, share resources, and create stronger collective action."
              },
              {
                title: "e. Innovation Partnerships",
                desc: "Join us in piloting agri-tech and renewable energy solutions that make farming smarter, cleaner, and more resilient."
              }
            ].map((opportunity, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-3 ${
                index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
              } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                <p className="text-gray-600">{opportunity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Partnership */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Areas of Partnership</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Sustainable Farming Practices",
                "Agri-Tech & Research Projects",
                "Soil & Water Conservation",
                "Farmer Training & Awareness Programs",
                "Women Empowerment Initiatives",
                "Youth for Sustainability & Education Campaigns"
              ].map((area, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700 text-lg">{area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits of Partnership</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🌿", text: "Shared Impact: Amplify your organization's social and environmental footprint" },
                { icon: "📈", text: "Transparency: Receive measurable data and reports for every project" },
                { icon: "💬", text: "Visibility: Branding, co-hosted campaigns, and media acknowledgments" },
                { icon: "🔬", text: "Research Collaboration: Access to field data, innovation insights, and case studies" },
                { icon: "🧩", text: "Flexibility: Partnerships tailored to your CSR or academic goals" }
              ].map((benefit, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{benefit.icon}</span>
                    <p className="text-gray-700 mt-1">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xl text-[#2E7D32] italic mt-12">
              Together, we turn vision into measurable, sustainable results.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Partnership Process</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { step: "1", desc: "Contact our Partnership Team with your interest and goals" },
                { step: "2", desc: "Identify common focus areas and project models" },
                { step: "3", desc: "Develop a customized proposal and scope of work" },
                { step: "4", desc: "Begin implementation with clear timelines and measurable outcomes" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border-3 border-[#4CAF50] hover:shadow-2xl hover:scale-105 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 border-3 border-[#FFA726] shadow-xl hover:shadow-2xl hover:shadow-[#FFA726]/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Our Partnership Team</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-[#2E7D32]" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:partnerships@neomicsresearch.org" className="text-[#2E7D32] font-medium hover:underline">
                        partnerships@neomicsresearch.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-[#F57F17]" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:+919845673910" className="text-[#F57F17] font-medium hover:underline">
                        +91 9845673910
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Details */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Legal & Registration Details</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Neomics Research Foundation is a registered non-profit organization eligible for CSR and institutional collaborations.
            </p>

            <div className="bg-white rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-gray-600 mb-1">CIN</p>
                  <p className="text-lg font-bold text-gray-900">U73100AS2014NPL011785</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-gray-600 mb-1">FCRA</p>
                  <p className="text-lg font-bold text-gray-900">020840035</p>
                </div>
                <div className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-gray-600 mb-1">Registered Date</p>
                  <p className="text-lg font-bold text-gray-900">14 February 2014</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="text-lg font-bold text-gray-900">Guwahati, Assam</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-700 mb-2"><strong>Address:</strong></p>
                <p className="text-gray-700">
                  House No.-5, Rasaraj Bye Lane, Basistapur Lane 2,<br />
                  Hatigaon, Guwahati, Assam – 781028
                </p>
              </div>

              <p className="text-center text-gray-600 mt-8">
                💬 All partnerships adhere to CSR and FCRA compliance guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl italic mb-6">"Partnership is where purpose meets progress." 🌿</p>
          <h2 className="text-4xl font-bold mb-6">Join hands with Neomics Research Foundation</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            to co-create projects that empower farmers, sustain the environment, and inspire communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Partner With Us
              </Button>
            </Link>
            <Link to={createPageUrl("CSRCollaboration")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">📊 Explore CSR Opportunities</span>
              </Button>
            </Link>
            <Link to={createPageUrl("Research")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">🔬 Collaborate on Research</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}