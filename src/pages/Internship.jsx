
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Check, Award, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Internship() {
  useEffect(() => {
    document.title = "Internship Program | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Growing Seedlings */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-4.jpg"
            alt="Internship Program"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Growing Seedlings Animation */}
        <div className="hero-seedlings">
          <div className="hero-seedling hero-seedling-1">
            <div className="seedling-stem"></div>
            <div className="seedling-leaf">🌱</div>
          </div>
          <div className="hero-seedling hero-seedling-2">
            <div className="seedling-stem"></div>
            <div className="seedling-leaf">🌱</div>
          </div>
          <div className="hero-seedling hero-seedling-3">
            <div className="seedling-stem"></div>
            <div className="seedling-leaf">🌱</div>
          </div>
          <div className="hero-seedling hero-seedling-4">
            <div className="seedling-stem"></div>
            <div className="seedling-leaf">🌱</div>
          </div>
        </div>

        {/* Floating Blobs */}
        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Learning Icons */}
        <div className="hero-learning-icons">
          <div className="hero-learning-icon hero-learning-icon-1">📚</div>
          <div className="hero-learning-icon hero-learning-icon-2">🎓</div>
          <div className="hero-learning-icon hero-learning-icon-3">🔬</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Learn & Grow</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🎓</span> Internship Program
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Learn, explore, and grow where change begins — in the field." 🌾
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

          .hero-seedlings {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 200px;
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
          }

          .hero-seedling {
            position: relative;
            animation: hero-seedling-grow 4s ease-out infinite;
          }

          .hero-seedling-1 {
            left: 15%;
            animation-delay: 0s;
          }

          .hero-seedling-2 {
            left: 35%;
            animation-delay: 0.5s;
          }

          .hero-seedling-3 {
            left: 55%;
            animation-delay: 1s;
          }

          .hero-seedling-4 {
            left: 75%;
            animation-delay: 1.5s;
          }

          .seedling-stem {
            width: 4px;
            height: 60px;
            background: linear-gradient(to top, rgba(255, 235, 59, 0.6), rgba(139, 195, 74, 0.6));
            margin: 0 auto;
            border-radius: 2px;
          }

          .seedling-leaf {
            font-size: 2rem;
            text-align: center;
            margin-top: -10px;
          }

          @keyframes hero-seedling-grow {
            0% {
              transform: scaleY(0);
              opacity: 0;
            }
            50% {
              transform: scaleY(1);
              opacity: 1;
            }
            100% {
              transform: scaleY(1);
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

          .hero-learning-icons {
            position: absolute;
            inset: 0;
          }

          .hero-learning-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-learning-float 5s ease-in-out infinite;
          }

          .hero-learning-icon-1 {
            top: 20%;
            left: 18%;
            animation-delay: 0s;
          }

          .hero-learning-icon-2 {
            top: 28%;
            right: 22%;
            animation-delay: 1.5s;
          }

          .hero-learning-icon-3 {
            bottom: 35%;
            left: 25%;
            animation-delay: 3s;
          }

          @keyframes hero-learning-float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-25px) rotate(10deg);
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
            .hero-seedlings { height: 120px; }
            .seedling-stem { height: 40px; }
            .seedling-leaf { font-size: 1.5rem; }
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
              The Internship Program at Neomics Research Foundation offers students and young professionals a unique 
              opportunity to engage with real-world challenges in sustainable agriculture, environmental conservation, 
              and rural development.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Interns gain hands-on experience through research projects, community programs, and field studies, helping 
              bridge the gap between theory and practice — while contributing meaningfully to society.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why Join the Internship Program?</h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Our internship is designed to build your understanding of the agricultural ecosystem and sustainability in action.
          </p>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            As a Neomics intern, you will:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">🌱</span>
              <p className="text-gray-700">Work directly on field-based agricultural and environmental projects</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">🔬</span>
              <p className="text-gray-700">Contribute to data collection, research, and impact documentation</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">👩‍🌾</span>
              <p className="text-gray-700">Interact with farmers and communities to understand real challenges</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">💻</span>
              <p className="text-gray-700">Assist in digital storytelling, awareness, and outreach campaigns</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">💬</span>
              <p className="text-gray-700">Collaborate with researchers, volunteers, and experts in sustainable development</p>
            </div>
          </div>

          <p className="text-center text-xl text-[#2E7D32] italic mt-12">
            You'll not only learn — you'll create lasting impact.
          </p>
        </div>
      </section>

      {/* Internship Areas */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Internship Areas</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              You can choose from multiple focus areas based on your interests and field of study:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Sustainable Farming Practices",
                "Agri-Tech & Innovation Research",
                "Soil & Water Conservation Projects",
                "Farmer Training & Awareness Programs",
                "Women Empowerment Initiatives",
                "Youth for Sustainability & Education Campaigns",
                "Communications, Content & Design"
              ].map((area, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Check className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Who Can Apply</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">We welcome applications from:</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Students in agriculture, environmental science, rural development, or social work",
                "Graduates seeking practical NGO or field experience",
                "Research scholars interested in agriculture and sustainability topics",
                "International students and volunteers (remote or on-site)"
              ].map((item, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFEB3B]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Check className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#F57F17]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-gray-600 mt-8">
              💬 Internships are available throughout the year in both on-field (Guwahati & rural Assam) and remote formats.
            </p>
          </div>
        </div>
      </section>

      {/* Duration & Structure */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Duration & Structure</h2>

            <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-2">📅</div>
                  <h3 className="font-bold text-gray-900 mb-2">Duration</h3>
                  <p className="text-gray-600">4–12 weeks (customizable based on academic requirements)</p>
                </div>

                <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-2">🧭</div>
                  <h3 className="font-bold text-gray-900 mb-2">Mode</h3>
                  <p className="text-gray-600">On-field / Hybrid / Remote (depending on project type)</p>
                </div>

                <div className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-2">🧾</div>
                  <h3 className="font-bold text-gray-900 mb-2">Certificate</h3>
                  <p className="text-gray-600">Issued upon successful completion</p>
                </div>

                <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-2">🧑‍🏫</div>
                  <h3 className="font-bold text-gray-900 mb-2">Mentorship</h3>
                  <p className="text-gray-600">Guided by domain experts and project coordinators</p>
                </div>
              </div>

              <p className="text-center text-lg text-gray-700 mt-8">
                Flexible timing options available for academic credit internships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Responsibilities</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">As an intern, you may contribute to:</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Conducting field surveys and interviews",
                "Collecting and analyzing agricultural data",
                "Supporting training workshops and awareness programs",
                "Assisting in research documentation and report writing",
                "Contributing to digital media and communication projects"
              ].map((item, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
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

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🎓", text: "Practical, field-based learning experience" },
                { icon: "🧠", text: "Mentorship from industry and academic professionals" },
                { icon: "🌾", text: "Exposure to real-world sustainable agriculture models" },
                { icon: "📚", text: "Internship Certificate & Letter of Recommendation" },
                { icon: "💼", text: "Opportunity for long-term collaboration with the foundation" }
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
              You'll leave with experience that matters — to you, your career, and your community.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Application Process</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Fill Form", desc: "Fill out the online Internship Application Form" },
                { step: "2", title: "Submit CV", desc: "Submit your updated CV and area of interest" },
                { step: "3", title: "Interview", desc: "Short virtual or phone interaction with our Internship Team" },
                { step: "4", title: "Onboard", desc: "Confirmation and onboarding with project assignment" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border-3 border-[#4CAF50] hover:shadow-2xl hover:scale-105 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6 text-[#2E7D32]" />
                <p className="text-lg text-gray-700">
                  📩 For queries: <a href="mailto:internships@neomicsresearch.org" className="text-[#2E7D32] font-medium hover:underline">internships@neomicsresearch.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 hover:rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "My internship with Neomics taught me how scientific research meets real-life farming. It changed my career direction."
              </p>
              <p className="text-[#2E7D32] font-medium">— Rohit Sharma, Agriculture Student</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "Working with farmers and seeing the impact of our awareness programs was the most rewarding experience."
              </p>
              <p className="text-[#F57F17] font-medium">— Pooja Das, Environmental Science Intern</p>
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
          <p className="text-3xl italic mb-6">"Join us, learn from the land, and grow with purpose." 🌿</p>
          <h2 className="text-4xl font-bold mb-6">Be a part of a new generation driving agricultural transformation</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            through innovation and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Apply for Internship
              </Button>
            </Link>
            <Link to={createPageUrl("Research")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">🔬 View Ongoing Projects</span>
              </Button>
            </Link>
            <Link to={createPageUrl("CSRCollaboration")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">🤝 Partner via CSR</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
