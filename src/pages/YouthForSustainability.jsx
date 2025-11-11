import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, Check, Award, Mail, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function YouthForSustainability() {
  useEffect(() => {
    document.title = "Youth for Sustainability | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Energy Burst & Youth Rising */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-15.jpg"
            alt="Youth for Sustainability"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Energy Burst Rings */}
        <div className="hero-energy-rings">
          <div className="hero-ring hero-ring-1"></div>
          <div className="hero-ring hero-ring-2"></div>
          <div className="hero-ring hero-ring-3"></div>
          <div className="hero-ring hero-ring-4"></div>
        </div>

        {/* Youth Icons Rising */}
        <div className="hero-youth-icons">
          <div className="hero-youth hero-youth-1">🧑‍🎓</div>
          <div className="hero-youth hero-youth-2">💡</div>
          <div className="hero-youth hero-youth-3">🚀</div>
          <div className="hero-youth hero-youth-4">🌟</div>
          <div className="hero-youth hero-youth-5">⚡</div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Innovation Symbols */}
        <div className="hero-innovation-symbols">
          <div className="hero-innovation hero-innovation-1">🔬</div>
          <div className="hero-innovation hero-innovation-2">🌱</div>
          <div className="hero-innovation hero-innovation-3">💻</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Future Leaders</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🌟</span> Youth for Sustainability
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Inspiring the next generation to lead agricultural transformation." 🌿
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

          .hero-energy-rings {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .hero-ring {
            position: absolute;
            border: 3px solid rgba(255, 235, 59, 0.4);
            border-radius: 50%;
            animation: hero-ring-expand 3s ease-out infinite;
          }

          .hero-ring-1 {
            width: 100px;
            height: 100px;
            animation-delay: 0s;
          }

          .hero-ring-2 {
            width: 200px;
            height: 200px;
            animation-delay: 0.5s;
          }

          .hero-ring-3 {
            width: 300px;
            height: 300px;
            animation-delay: 1s;
          }

          .hero-ring-4 {
            width: 400px;
            height: 400px;
            animation-delay: 1.5s;
          }

          @keyframes hero-ring-expand {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }

          .hero-youth-icons {
            position: absolute;
            inset: 0;
          }

          .hero-youth {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.6;
            animation: hero-youth-rise 6s ease-out infinite;
          }

          .hero-youth-1 {
            bottom: -10%;
            left: 15%;
            animation-delay: 0s;
          }

          .hero-youth-2 {
            bottom: -10%;
            left: 30%;
            animation-delay: 1s;
          }

          .hero-youth-3 {
            bottom: -10%;
            left: 50%;
            animation-delay: 2s;
          }

          .hero-youth-4 {
            bottom: -10%;
            left: 70%;
            animation-delay: 3s;
          }

          .hero-youth-5 {
            bottom: -10%;
            left: 85%;
            animation-delay: 4s;
          }

          @keyframes hero-youth-rise {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            20% {
              opacity: 0.8;
            }
            80% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-110vh) rotate(360deg);
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

          .hero-innovation-symbols {
            position: absolute;
            inset: 0;
          }

          .hero-innovation {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-innovation-spin 8s ease-in-out infinite;
          }

          .hero-innovation-1 {
            top: 22%;
            left: 22%;
            animation-delay: 0s;
          }

          .hero-innovation-2 {
            top: 28%;
            right: 25%;
            animation-delay: 2.5s;
          }

          .hero-innovation-3 {
            bottom: 28%;
            left: 35%;
            animation-delay: 5s;
          }

          @keyframes hero-innovation-spin {
            0%, 100% {
              transform: rotate(0deg) scale(1);
              opacity: 0.5;
            }
            50% {
              transform: rotate(360deg) scale(1.3);
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
              At Neomics Research Foundation, we believe that youth are the key to long-term sustainability in agriculture. 
              The Youth for Sustainability Program is designed to engage students, young professionals, and emerging leaders 
              in rural innovation, environmental action, and agricultural transformation.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Through training, mentorship, and project involvement, we equip young minds with the tools and inspiration to 
              become changemakers in sustainable farming and rural development.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Objectives</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🌱</span>
              <p className="text-gray-700">Inspire youth to pursue careers and innovation in sustainable agriculture</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">📚</span>
              <p className="text-gray-700">Provide skill-based training, research exposure, and leadership development</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">💡</span>
              <p className="text-gray-700">Foster innovation in agri-tech, environmental conservation, and rural entrepreneurship</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🌍</span>
              <p className="text-gray-700">Promote youth-led sustainability projects and community-driven initiatives</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🤝</span>
              <p className="text-gray-700">Build a network of young agri-leaders, researchers, and rural advocates</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#8BC34A] hover:border-[#9CCC65] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🎯</span>
              <p className="text-gray-700">Encourage youth engagement with climate action and resource conservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Program Components</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">a. Youth Training Workshops</h3>
              <p className="text-gray-600">Hands-on sessions on sustainable farming practices, agri-research methods, and climate-smart solutions tailored for college students and recent graduates.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">b. Innovation Labs & Hackathons</h3>
              <p className="text-gray-600">Agri-innovation challenges where youth collaborate to solve farming problems using technology, data, and creativity.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">c. Internships & Fellowships</h3>
              <p className="text-gray-600">Opportunities for students to work on field research, community programs, and policy analysis with Neomics Foundation.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">d. Leadership & Advocacy Circles</h3>
              <p className="text-gray-600">Spaces where youth can discuss policy, sustainability challenges, and rural solutions — building their voices as future advocates.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">e. Campus Sustainability Drives</h3>
              <p className="text-gray-600">College-level awareness campaigns on organic farming, climate change, and sustainable food systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Development Areas */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skill Development Areas</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Participants in our Youth for Sustainability program will develop practical skills in:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Sustainable farming practices",
                "Environmental conservation techniques",
                "Waste management and recycling",
                "Agri-entrepreneurship and innovation",
                "Digital literacy for rural development",
                "Climate awareness and advocacy"
              ].map((skill, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Check className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{skill}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Impact</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Our Youth for Sustainability initiatives have already inspired and equipped hundreds of young people to contribute to agricultural change.
            </p>

            <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#2E7D32] text-3xl">🧑‍🎓</span>
                  <p className="text-gray-700 text-lg"><strong>500+ youth</strong> trained and engaged through workshops</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#F57F17] text-3xl">💡</span>
                  <p className="text-gray-700 text-lg"><strong>30+ youth-led</strong> sustainability projects supported</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#558B2F] text-3xl">🤝</span>
                  <p className="text-gray-700 text-lg">Collaborations with <strong>15+ colleges</strong> and universities</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#E65100] text-3xl">🌍</span>
                  <p className="text-gray-700 text-lg"><strong>10+ community</strong> awareness campaigns led by youth volunteers</p>
                </div>
              </div>
              <p className="text-xl text-[#2E7D32] italic mt-8 text-center">
                Youth are not just the future — they are agents of change today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations & Partners */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Collaborations & Partners</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              We partner with educational institutions and youth-focused organizations to bridge research, education, and field implementation.
            </p>
            <p className="text-xl text-gray-600 mb-8 text-center">Our collaborators include:</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Universities and agricultural colleges",
                "CSR programs supporting youth skill development",
                "Rural innovation networks and youth councils",
                "Environmental NGOs and sustainability groups"
              ].map((partner, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Mail className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{partner}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-gray-600 mt-8">
              These collaborations expand the reach and depth of our youth engagement programs.
            </p>
          </div>
        </div>
      </section>

      {/* Youth Stories */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Youth Stories</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 hover:rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "Through Neomics' Youth Program, I led a composting project in my college and now help local farmers adopt the same practice."
              </p>
              <p className="text-[#2E7D32] font-medium">— Ananya Roy, Environmental Science Student</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "I interned with Neomics and discovered my passion for agri-innovation. Today, I'm building my own startup in rural tech."
              </p>
              <p className="text-[#F57F17] font-medium">— Ravi Kumar, Young Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Future Goals</h2>
            
            <div className="space-y-4">
              {[
                "Launch the Neomics Youth Fellowship Program",
                "Establish Youth Innovation Labs in rural and urban areas",
                "Host an Annual Youth for Sustainability Summit",
                "Develop a digital network connecting youth in agri-innovation across India"
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
          <p className="text-3xl italic mb-6">"The planet needs your energy — the fields need your ideas." 🌾</p>
          <h2 className="text-4xl font-bold mb-6">Join a community of young innovators reshaping agriculture</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Be part of the movement that's making sustainability the new normal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Internship")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Apply for Youth Program
              </Button>
            </Link>
            <Link to={createPageUrl("Volunteer")}>
                       <Button 
                          size="lg" 
                          variant="outline" 
                          className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                          style={{ borderColor: 'white' }}
                        >
                          <span className="text-white font-extrabold">🌟 Volunteer with Us</span>
                        </Button>
            </Link>
            <Link to={createPageUrl("CSRCollaboration")}>
                       <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">🤝 Partner to Support Youth</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}