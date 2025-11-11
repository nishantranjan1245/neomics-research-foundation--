import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, Check, Award, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function WomenInAgriculture() {
  useEffect(() => {
    document.title = "Women in Agriculture | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Rising Women Icons & Empowerment Rays */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-14.jpg"
            alt="Women in Agriculture"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Empowerment Rays */}
        <div className="hero-rays">
          <div className="hero-ray hero-ray-1"></div>
          <div className="hero-ray hero-ray-2"></div>
          <div className="hero-ray hero-ray-3"></div>
          <div className="hero-ray hero-ray-4"></div>
          <div className="hero-ray hero-ray-5"></div>
        </div>

        {/* Rising Women Icons */}
        <div className="hero-women-icons">
          <div className="hero-woman hero-woman-1">👩‍🌾</div>
          <div className="hero-woman hero-woman-2">💪</div>
          <div className="hero-woman hero-woman-3">🌟</div>
          <div className="hero-woman hero-woman-4">👩‍💼</div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Strength Symbols */}
        <div className="hero-strength-symbols">
          <div className="hero-symbol hero-symbol-1">⭐</div>
          <div className="hero-symbol hero-symbol-2">💎</div>
          <div className="hero-symbol hero-symbol-3">🌺</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Women Empowerment</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">👩‍🌾</span> Women in Agriculture
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "When women grow, communities thrive." 🌿
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

          .hero-rays {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
          }

          .hero-ray {
            position: absolute;
            width: 4px;
            height: 200px;
            background: linear-gradient(to bottom, rgba(255, 235, 59, 0.6), transparent);
            transform-origin: bottom center;
            animation: hero-ray-shine 3s ease-in-out infinite;
          }

          .hero-ray-1 {
            transform: rotate(0deg);
            animation-delay: 0s;
          }

          .hero-ray-2 {
            transform: rotate(72deg);
            animation-delay: 0.6s;
          }

          .hero-ray-3 {
            transform: rotate(144deg);
            animation-delay: 1.2s;
          }

          .hero-ray-4 {
            transform: rotate(216deg);
            animation-delay: 1.8s;
          }

          .hero-ray-5 {
            transform: rotate(288deg);
            animation-delay: 2.4s;
          }

          @keyframes hero-ray-shine {
            0%, 100% {
              opacity: 0.3;
              height: 150px;
            }
            50% {
              opacity: 0.8;
              height: 250px;
            }
          }

          .hero-women-icons {
            position: absolute;
            inset: 0;
          }

          .hero-woman {
            position: absolute;
            font-size: 3rem;
            opacity: 0.6;
            animation: hero-woman-rise 5s ease-out infinite;
          }

          .hero-woman-1 {
            bottom: -10%;
            left: 20%;
            animation-delay: 0s;
          }

          .hero-woman-2 {
            bottom: -10%;
            left: 40%;
            animation-delay: 1s;
          }

          .hero-woman-3 {
            bottom: -10%;
            left: 60%;
            animation-delay: 2s;
          }

          .hero-woman-4 {
            bottom: -10%;
            left: 80%;
            animation-delay: 3s;
          }

          @keyframes hero-woman-rise {
            0% {
              transform: translateY(0) scale(0.8);
              opacity: 0;
            }
            30% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(-110vh) scale(1.2);
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

          .hero-strength-symbols {
            position: absolute;
            inset: 0;
          }

          .hero-symbol {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-symbol-twinkle 3s ease-in-out infinite;
          }

          .hero-symbol-1 {
            top: 25%;
            left: 25%;
            animation-delay: 0s;
          }

          .hero-symbol-2 {
            top: 30%;
            right: 20%;
            animation-delay: 1s;
          }

          .hero-symbol-3 {
            bottom: 30%;
            left: 30%;
            animation-delay: 2s;
          }

          @keyframes hero-symbol-twinkle {
            0%, 100% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.3);
              opacity: 1;
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              At Neomics Research Foundation, we believe that empowering women is key to transforming rural agriculture. 
              Women contribute significantly to India's farming system — yet they often lack access to resources, recognition, 
              and decision-making opportunities.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Our Women in Agriculture Program works to change that.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Through training, entrepreneurship development, and community initiatives, we support women farmers to become 
              leaders, innovators, and change-makers in agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Objectives</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">👩‍🌾</span>
              <p className="text-gray-700">Promote gender equality and inclusion in the agriculture sector</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🌱</span>
              <p className="text-gray-700">Provide training and skill development for women farmers</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">💼</span>
              <p className="text-gray-700">Support women-led agri-entrepreneurship and micro-enterprises</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">💬</span>
              <p className="text-gray-700">Strengthen participation of women in farmer groups and cooperatives</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🌾</span>
              <p className="text-gray-700">Build leadership capacity and financial literacy among rural women</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Activities</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">a. Skill Development Workshops</h3>
              <p className="text-gray-600">Hands-on training for women farmers on sustainable farming techniques, composting, seed preservation, and organic crop production.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">b. Women Farmer Groups & SHGs</h3>
              <p className="text-gray-600">Formation and strengthening of Self-Help Groups (SHGs) to promote peer learning, microfinance access, and community farming initiatives.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">c. Agri-Entrepreneurship Support</h3>
              <p className="text-gray-600">Guiding women in starting small agri-businesses such as organic compost units, vermiculture farms, and food processing ventures.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">d. Leadership & Awareness Sessions</h3>
              <p className="text-gray-600">Programs on leadership, gender rights, and women's role in sustainable agriculture and climate adaptation.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">e. Access to Technology & Resources</h3>
              <p className="text-gray-600">Introducing women to digital tools, mobile applications, and agri-market platforms for better productivity and income generation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Themes */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Training Themes</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Our capacity-building sessions are designed to meet the needs of rural women farmers:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Organic farming and eco-friendly cultivation",
                "Financial literacy and savings management",
                "Microenterprise planning and record-keeping",
                "Nutrition-sensitive farming and kitchen gardens",
                "Market linkage and cooperative marketing",
                "Climate resilience and sustainability awareness"
              ].map((theme, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Check className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{theme}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Impact</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Our women-focused programs have created meaningful change in several rural communities across Assam.
            </p>

            <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#2E7D32] text-3xl">👩‍🌾</span>
                  <p className="text-gray-700 text-lg">Over <strong>800+ women farmers</strong> trained and supported</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#F57F17] text-3xl">💼</span>
                  <p className="text-gray-700 text-lg"><strong>100+ women-led</strong> microenterprises initiated</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#558B2F] text-3xl">🌾</span>
                  <p className="text-gray-700 text-lg"><strong>25+ active SHGs</strong> managing community farming projects</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#E65100] text-3xl">💬</span>
                  <p className="text-gray-700 text-lg"><strong>60% increase</strong> in women's participation in local farmer organizations</p>
                </div>
              </div>
              <p className="text-xl text-[#2E7D32] italic mt-8 text-center">
                Empowered women farmers are not just cultivators — they are the backbone of rural sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 hover:rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "I started a composting business after Neomics' training. Now, I earn and teach others in my village."
              </p>
              <p className="text-[#2E7D32] font-medium">— Rita Devi, SHG Member, Kamrup District</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "Earlier, I worked on others' farms. Today, I manage my own organic plot and sell produce directly at the market."
              </p>
              <p className="text-[#F57F17] font-medium">— Mitali Das, Farmer, Barpeta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Collaborations</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              We work with women's collectives, NGOs, CSR partners, and government agencies to expand this initiative.
            </p>
            <p className="text-xl text-gray-600 mb-8 text-center">Through partnerships, we provide:</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Skill-building resources",
                "Financial linkage opportunities",
                "Market access networks",
                "Research and policy advocacy on gender inclusion"
              ].map((item, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Check className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Future Goals</h2>
            
            <div className="space-y-4">
              {[
                "Establish Women Agri-Entrepreneurship Hubs across Northeast India",
                "Launch an Agri-Skill Scholarship program for young rural women",
                "Build a Digital Platform connecting women farmers to local markets",
                "Expand the network of Women-Led SHGs to new regions"
              ].map((goal, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Award className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700 text-lg">{goal}</p>
                  </div>
                </div>
              ))}
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
          <p className="text-3xl italic mb-6">"Empowering women means empowering generations." 🌾</p>
          <h2 className="text-4xl font-bold mb-6">Join us in supporting women farmers and rural entrepreneurs</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            who are reshaping agriculture from the ground up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Donate")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Support Women Farmers
              </Button>
            </Link>
            <Link to={createPageUrl("Volunteer")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">👩‍🌾 Volunteer with Us</span>
              </Button>
            </Link>
            <Link to={createPageUrl("CSRCollaboration")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💼 Partner via CSR</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}