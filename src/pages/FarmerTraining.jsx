import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Check, Award, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function FarmerTraining() {
  useEffect(() => {
    document.title = "Farmer Training | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Knowledge Transfer/Book Pages */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-12.jpg"
            alt="Farmer Training"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Floating Book Pages */}
        <div className="hero-books">
          <div className="hero-book hero-book-1">
            <div className="book-page"></div>
            <div className="book-icon">📖</div>
          </div>
          <div className="hero-book hero-book-2">
            <div className="book-page"></div>
            <div className="book-icon">📚</div>
          </div>
          <div className="hero-book hero-book-3">
            <div className="book-page"></div>
            <div className="book-icon">📝</div>
          </div>
        </div>

        {/* Knowledge Waves */}
        <div className="hero-waves">
          <div className="hero-wave hero-wave-1"></div>
          <div className="hero-wave hero-wave-2"></div>
          <div className="hero-wave hero-wave-3"></div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Learning Icons */}
        <div className="hero-learning-icons">
          <div className="hero-learning-icon hero-learning-icon-1">👨‍🏫</div>
          <div className="hero-learning-icon hero-learning-icon-2">🎓</div>
          <div className="hero-learning-icon hero-learning-icon-3">✏️</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Education & Training</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">👨‍🌾</span> Farmer Training & Capacity Building
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Empowering farmers with knowledge, skills, and confidence to lead the change." 🌿
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

          .hero-books {
            position: absolute;
            inset: 0;
          }

          .hero-book {
            position: absolute;
            animation: hero-book-float 6s ease-in-out infinite;
          }

          .hero-book-1 {
            top: 20%;
            left: 15%;
            animation-delay: 0s;
          }

          .hero-book-2 {
            top: 35%;
            right: 20%;
            animation-delay: 2s;
          }

          .hero-book-3 {
            bottom: 25%;
            left: 25%;
            animation-delay: 4s;
          }

          .book-page {
            width: 60px;
            height: 80px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 235, 59, 0.3);
            border-radius: 4px;
            margin: 0 auto;
          }

          .book-icon {
            font-size: 2.5rem;
            text-align: center;
            margin-top: -55px;
          }

          @keyframes hero-book-float {
            0%, 100% {
              transform: translateY(0) rotate(-5deg);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-30px) rotate(5deg);
              opacity: 0.8;
            }
          }

          .hero-waves {
            position: absolute;
            inset: 0;
            overflow: hidden;
          }

          .hero-wave {
            position: absolute;
            width: 200%;
            height: 100px;
            background: linear-gradient(90deg, transparent, rgba(255, 235, 59, 0.1), transparent);
            animation: hero-wave-move 8s ease-in-out infinite;
          }

          .hero-wave-1 {
            top: 30%;
            animation-delay: 0s;
          }

          .hero-wave-2 {
            top: 50%;
            animation-delay: 2s;
          }

          .hero-wave-3 {
            top: 70%;
            animation-delay: 4s;
          }

          @keyframes hero-wave-move {
            0% {
              transform: translateX(-50%);
              opacity: 0.2;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: translateX(0);
              opacity: 0.2;
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

          .hero-learning-icons {
            position: absolute;
            inset: 0;
          }

          .hero-learning-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-learning-bounce 4s ease-in-out infinite;
          }

          .hero-learning-icon-1 {
            top: 22%;
            left: 30%;
            animation-delay: 0s;
          }

          .hero-learning-icon-2 {
            top: 40%;
            right: 28%;
            animation-delay: 1.5s;
          }

          .hero-learning-icon-3 {
            bottom: 28%;
            left: 35%;
            animation-delay: 3s;
          }

          @keyframes hero-learning-bounce {
            0%, 100% {
              transform: translateY(0) scale(1);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-25px) scale(1.2);
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              At Neomics Research Foundation, we believe that the foundation of agricultural progress lies in knowledge 
              sharing. Our Farmer Training & Capacity Building Program equips rural farmers with the skills and resources 
              they need to adopt modern, sustainable, and climate-smart agricultural practices.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              By combining scientific research with hands-on learning, we help farmers become innovators in their own 
              fields — improving productivity, income, and resilience.
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
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🌱</span>
              <p className="text-gray-700">Strengthen farmers' understanding of sustainable and organic farming methods</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🌾</span>
              <p className="text-gray-700">Improve adoption of modern tools, irrigation techniques, and agri-tech solutions</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">💧</span>
              <p className="text-gray-700">Build capacity for soil, water, and crop management</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">👩‍🌾</span>
              <p className="text-gray-700">Encourage leadership among women and youth in agriculture</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">📚</span>
              <p className="text-gray-700">Promote awareness about government schemes, policies, and market access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Training Approach</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Our approach combines field-based demonstration, peer learning, and technical support, ensuring that farmers learn by doing.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">a. Farmer Field Schools (FFS)</h3>
              <p className="text-gray-600">Hands-on training plots where farmers practice new methods under expert supervision — focusing on soil health, water use, and pest management.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">b. Seasonal Workshops</h3>
              <p className="text-gray-600">Workshops conducted at the beginning of crop seasons to guide farmers on seed selection, fertilizer planning, and weather adaptation.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">c. Demonstration Farms</h3>
              <p className="text-gray-600">Model farms that showcase organic cultivation, composting, and mixed cropping for learning and replication.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">d. Awareness Camps</h3>
              <p className="text-gray-600">Village-level events educating farmers about environmental protection, government support schemes, and sustainable practices.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">e. Farmer Exchange Programs</h3>
              <p className="text-gray-600">Interactive learning visits that allow farmers to share experiences and learn from one another across regions.</p>
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
              Our capacity-building sessions cover a wide range of critical topics:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Organic and natural farming techniques",
                "Composting and bio-fertilizer preparation",
                "Water-efficient irrigation systems",
                "Integrated pest and nutrient management",
                "Crop diversification and rotation",
                "Post-harvest management and value addition"
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
              Our training programs have touched lives across rural Assam and nearby regions — improving both farm practices and livelihoods.
            </p>

            <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#2E7D32] text-3xl">👨‍🌾</span>
                  <p className="text-gray-700 text-lg">Over <strong>3,000+ farmers</strong> trained through workshops and field schools</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#F57F17] text-3xl">🌱</span>
                  <p className="text-gray-700 text-lg"><strong>40+ villages</strong> covered under capacity-building programs</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#558B2F] text-3xl">👩‍🌾</span>
                  <p className="text-gray-700 text-lg"><strong>35% increase</strong> in adoption of sustainable methods among participants</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#E65100] text-3xl">📚</span>
                  <p className="text-gray-700 text-lg"><strong>60% improvement</strong> in awareness of government schemes</p>
                </div>
              </div>
              <p className="text-xl text-[#2E7D32] italic mt-8 text-center">
                Empowerment begins when farmers gain knowledge — and confidence grows with every harvest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Collaborations</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">We partner with:</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Local agricultural departments and KVKs (Krishi Vigyan Kendras)",
                "Universities and research institutions",
                "CSR programs and private agri-companies",
                "Farmer Producer Organizations (FPOs)"
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
              These collaborations help expand our training outreach and ensure long-term support for farming communities.
            </p>
          </div>
        </div>
      </section>

      {/* Farmer Stories */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Farmer Stories</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 hover:rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "Before training, I used to rely only on chemical fertilizer. Now I make my own compost and see my yield increase every season."
              </p>
              <p className="text-[#2E7D32] font-medium">— Farmer, Kamrup District</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "The workshops taught us how to use water wisely and grow multiple crops. Our income has doubled."
              </p>
              <p className="text-[#F57F17] font-medium">— Women's SHG Member, Guwahati</p>
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
                "Establish permanent Agri Learning Centers in rural clusters",
                "Introduce digital training tools in local languages",
                "Expand training programs to cover youth entrepreneurship in farming",
                "Create e-learning modules for remote participation"
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
          <p className="text-3xl italic mb-6">"When farmers learn, communities grow." 🌾</p>
          <h2 className="text-4xl font-bold mb-6">Join us in building the next generation of skilled, sustainable, and empowered farmers</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            You can contribute by volunteering, funding, or partnering with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Volunteer")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Volunteer in Training Programs
              </Button>
            </Link>
            <Link to={createPageUrl("CSRCollaboration")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">📚 Partner for CSR Support</span>
              </Button>
            </Link>
            <Link to={createPageUrl("Donate")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💰 Donate to Empower Farmers</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}