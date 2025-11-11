import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, Heart, Check, Send, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Volunteer() {
  useEffect(() => {
    document.title = "Volunteer With Us | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Volunteer Hands Circle */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-3.jpg"
            alt="Volunteer With Us"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Hands Forming Circle Animation */}
        <div className="hero-hands-circle">
          <div className="hero-hand-circle hero-hand-circle-1">🙌</div>
          <div className="hero-hand-circle hero-hand-circle-2">👐</div>
          <div className="hero-hand-circle hero-hand-circle-3">🤝</div>
          <div className="hero-hand-circle hero-hand-circle-4">🙏</div>
          <div className="hero-hand-circle hero-hand-circle-5">✋</div>
          <div className="hero-hand-circle hero-hand-circle-6">🤲</div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Volunteer Icons */}
        <div className="hero-volunteer-icons">
          <div className="hero-volunteer-icon hero-volunteer-icon-1">🌱</div>
          <div className="hero-volunteer-icon hero-volunteer-icon-2">💪</div>
          <div className="hero-volunteer-icon hero-volunteer-icon-3">❤️</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Join Our Community</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">💚</span> Volunteer With Us
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Be the change that grows from the ground up." 🌾
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

          .hero-hands-circle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .hero-hand-circle {
            position: absolute;
            font-size: 3rem;
            opacity: 0.5;
            animation: hero-circle-rotate 12s linear infinite;
          }

          .hero-hand-circle-1 {
            transform: rotate(0deg) translateY(-150px);
            animation-delay: 0s;
          }

          .hero-hand-circle-2 {
            transform: rotate(60deg) translateY(-150px);
            animation-delay: 0.5s;
          }

          .hero-hand-circle-3 {
            transform: rotate(120deg) translateY(-150px);
            animation-delay: 1s;
          }

          .hero-hand-circle-4 {
            transform: rotate(180deg) translateY(-150px);
            animation-delay: 1.5s;
          }

          .hero-hand-circle-5 {
            transform: rotate(240deg) translateY(-150px);
            animation-delay: 2s;
          }

          .hero-hand-circle-6 {
            transform: rotate(300deg) translateY(-150px);
            animation-delay: 2.5s;
          }

          @keyframes hero-circle-rotate {
            from {
              transform: rotate(0deg) translateY(-150px);
            }
            to {
              transform: rotate(360deg) translateY(-150px);
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

          .hero-volunteer-icons {
            position: absolute;
            inset: 0;
          }

          .hero-volunteer-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.6;
            animation: hero-volunteer-pulse 3s ease-in-out infinite;
          }

          .hero-volunteer-icon-1 {
            top: 20%;
            left: 20%;
            animation-delay: 0s;
          }

          .hero-volunteer-icon-2 {
            top: 30%;
            right: 20%;
            animation-delay: 1s;
          }

          .hero-volunteer-icon-3 {
            bottom: 25%;
            left: 30%;
            animation-delay: 2s;
          }

          @keyframes hero-volunteer-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.4);
              opacity: 0.9;
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
            .hero-hand-circle { font-size: 2rem; }
            .hero-hand-circle-1, .hero-hand-circle-2, .hero-hand-circle-3,
            .hero-hand-circle-4, .hero-hand-circle-5, .hero-hand-circle-6 {
              transform: rotate(0deg) translateY(-100px);
            }
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
              At Neomics Research Foundation, every helping hand matters. Our volunteers are the heart of our mission — 
              supporting farmers, communities, and researchers to make agriculture more sustainable and inclusive.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              By volunteering with us, you'll contribute your time, energy, and skills toward real, measurable impact in 
              rural India — while gaining firsthand experience in sustainability, farming, and development work.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why Volunteer With Neomics?</h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Volunteering isn't just about giving time — it's about creating change that lasts.
          </p>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            As a Neomics volunteer, you will:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">🌱</span>
              <p className="text-gray-700">Participate in sustainable farming projects and research fieldwork</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">💧</span>
              <p className="text-gray-700">Support soil and water conservation drives</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">👩‍🌾</span>
              <p className="text-gray-700">Assist in farmer training and awareness programs</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">📚</span>
              <p className="text-gray-700">Help with educational workshops and community outreach</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">💻</span>
              <p className="text-gray-700">Contribute your digital, creative, or technical skills to support rural impact</p>
            </div>
          </div>

          <p className="text-center text-xl text-[#2E7D32] italic mt-12">
            Your small act can make a big difference for a farmer, a village, and the planet.
          </p>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Volunteer Roles</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              We welcome volunteers from diverse backgrounds — whether you're a student, professional, or community member.
            </p>

            <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Roles:</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <h4 className="font-bold text-gray-900 mb-2">Field Volunteer</h4>
                  <p className="text-gray-600">Assist in fieldwork, farmer programs, and sustainability projects</p>
                </div>

                <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <h4 className="font-bold text-gray-900 mb-2">Research Support</h4>
                  <p className="text-gray-600">Help with agricultural data collection, surveys, and documentation</p>
                </div>

                <div className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <h4 className="font-bold text-gray-900 mb-2">Creative Volunteer</h4>
                  <p className="text-gray-600">Contribute to content creation, photography, or social media awareness</p>
                </div>

                <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <h4 className="font-bold text-gray-900 mb-2">Event Support</h4>
                  <p className="text-gray-600">Organize training sessions, exhibitions, and local awareness campaigns</p>
                </div>

                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <h4 className="font-bold text-gray-900 mb-2">Admin & Communications</h4>
                  <p className="text-gray-600">Help manage community outreach, reports, and donor communication</p>
                </div>
              </div>

              <p className="text-center text-lg text-gray-600 mt-8">
                📅 Volunteer opportunities are available year-round, both short-term and long-term.
              </p>
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
            <p className="text-xl text-gray-600 mb-8 text-center">We invite:</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Students and graduates interested in agriculture, environment, or social work",
                "Professionals seeking to contribute their expertise in sustainability",
                "Local residents passionate about rural development",
                "International volunteers committed to community service"
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

            <p className="text-center text-xl text-[#2E7D32] italic mt-8">
              No prior experience required — only dedication, curiosity, and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Fill Application", desc: "Fill out the online Volunteer Application Form" },
                { step: "2", title: "Interaction", desc: "Short interaction with our Volunteer Coordination Team" },
                { step: "3", title: "Orientation", desc: "Orientation and program assignment" },
                { step: "4", title: "Get Started", desc: "Field or project involvement based on your interests and skills" }
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

            <div className="mt-12 p-6 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl text-center">
              <p className="text-lg text-gray-700">
                💬 Certificate of participation provided after completion of the program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Volunteer Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 hover:rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "I joined as a student volunteer and learned so much about organic farming. The farmers' energy inspired me every day."
              </p>
              <p className="text-[#2E7D32] font-medium">— Sanjana, Guwahati University</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "Helping with water conservation drives was the most rewarding experience — I could see the results in real time."
              </p>
              <p className="text-[#F57F17] font-medium">— Arjun, Field Volunteer</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits of Volunteering</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Hands-on exposure to sustainable farming and rural research",
                "Experience certificate & letter of recommendation (based on contribution)",
                "Networking with researchers, farmers, and NGO professionals",
                "Personal growth, field learning, and leadership experience"
              ].map((benefit, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Award className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Areas Where You Can Volunteer</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Sustainable Farming Programs",
                "Agri-Tech Research",
                "Soil & Water Conservation",
                "Women Empowerment Initiatives",
                "Youth for Sustainability Projects",
                "Awareness & Outreach Campaigns"
              ].map((area, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Check className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700 text-lg">{area}</p>
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
          <p className="text-3xl italic mb-6">"Together, let's grow change — one seed, one field, one community at a time." 🌿</p>
          <h2 className="text-4xl font-bold mb-6">Join our community of passionate changemakers</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            and contribute to sustainable development in agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Apply to Volunteer
              </Button>
            </Link>
            <Link to={createPageUrl("Internship")}>
                     <Button 
                       size="lg" 
                       variant="outline" 
                       className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                       style={{ borderColor: 'white' }}
                     >
                       <span className="text-white font-extrabold">📚 Learn About Internship</span>
                     </Button>
            </Link>
            <Link to={createPageUrl("Donate")}>
                    <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💰 Donate to Support Our Work</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}