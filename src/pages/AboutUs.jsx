import React, { useEffect } from "react";
import { Leaf, Target, Users, Heart, Shield, Lightbulb, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/about-section-1.jpg"
            alt="About Neomics"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-pattern"></div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        <div className="hero-particles">
          <div className="hero-particle hero-particle-1"></div>
          <div className="hero-particle hero-particle-2"></div>
          <div className="hero-particle hero-particle-3"></div>
          <div className="hero-particle hero-particle-4"></div>
          <div className="hero-particle hero-particle-5"></div>
        </div>

        {/* Floating leaves */}
        <div className="hero-leaf hero-leaf-1">🌿</div>
        <div className="hero-leaf hero-leaf-2">🌾</div>
        <div className="hero-leaf hero-leaf-3">🍃</div>
        <div className="hero-leaf hero-leaf-4">🌱</div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">About Our Foundation</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🌱</span> About Us
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            Empowering Farmers. Sustaining Agriculture. Growing Communities.
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

          .hero-pattern {
            position: absolute;
            inset: 0;
            background-image: 
              radial-gradient(circle at 20% 50%, rgba(139, 195, 74, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(124, 179, 66, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(102, 187, 106, 0.2) 0%, transparent 50%);
            animation: hero-pattern-move 15s ease-in-out infinite;
          }

          @keyframes hero-pattern-move {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, 20px); }
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
            animation-delay: 0s;
          }

          .hero-blob-2 {
            width: 500px;
            height: 500px;
            background: linear-gradient(135deg, #4CAF50, #66BB6A);
            bottom: 10%;
            right: 10%;
            animation-delay: 2s;
          }

          .hero-blob-3 {
            width: 300px;
            height: 300px;
            background: linear-gradient(135deg, #FFEB3B, #FDD835);
            top: 50%;
            left: 50%;
            animation-delay: 4s;
          }

          @keyframes hero-blob-float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }

          .hero-particles {
            position: absolute;
            inset: 0;
          }

          .hero-particle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            animation: hero-particle-float 8s ease-in-out infinite;
          }

          .hero-particle-1 {
            width: 6px;
            height: 6px;
            top: 20%;
            left: 20%;
            animation-delay: 0s;
          }

          .hero-particle-2 {
            width: 4px;
            height: 4px;
            top: 60%;
            left: 70%;
            animation-delay: 2s;
          }

          .hero-particle-3 {
            width: 8px;
            height: 8px;
            top: 40%;
            right: 20%;
            animation-delay: 4s;
          }

          .hero-particle-4 {
            width: 5px;
            height: 5px;
            bottom: 30%;
            left: 40%;
            animation-delay: 1s;
          }

          .hero-particle-5 {
            width: 7px;
            height: 7px;
            bottom: 20%;
            right: 30%;
            animation-delay: 3s;
          }

          @keyframes hero-particle-float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0.6;
            }
            25% {
              transform: translateY(-40px) translateX(20px);
              opacity: 1;
            }
            50% {
              transform: translateY(-20px) translateX(-20px);
              opacity: 0.8;
            }
            75% {
              transform: translateY(-60px) translateX(10px);
              opacity: 0.9;
            }
          }

          /* Floating Leaf Animations */
          .hero-leaf {
            position: absolute;
            font-size: 2rem;
            opacity: 0.4;
            animation: hero-leaf-fall 15s ease-in-out infinite;
          }

          .hero-leaf-1 {
            top: -10%;
            left: 15%;
            animation-delay: 0s;
          }

          .hero-leaf-2 {
            top: -10%;
            right: 25%;
            animation-delay: 3s;
          }

          .hero-leaf-3 {
            top: -10%;
            left: 45%;
            animation-delay: 6s;
          }

          .hero-leaf-4 {
            top: -10%;
            right: 15%;
            animation-delay: 9s;
          }

          @keyframes hero-leaf-fall {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
            }
            90% {
              opacity: 0.4;
            }
            100% {
              transform: translateY(110vh) rotate(360deg);
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

          .hero-badge:hover {
            transform: scale(1.1);
            box-shadow: 0 15px 50px rgba(255, 167, 38, 0.7);
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
            font-size: 1.25rem;
            color: white;
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
            .hero-description { font-size: 1rem; }
            .hero-leaf { font-size: 1.5rem; }
          }
        `}</style>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl shadow-[#FFA726]/50 inline-flex items-center gap-2 mb-6 animate-pulse hover:scale-110 transition-all duration-300 cursor-pointer">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              Who We Are
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Neomics Research Foundation is a registered non-profit organization committed to the advancement 
              of sustainable agriculture, agri-tech innovation, and rural development across India.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Founded in 2014 in Guwahati, Assam, we work directly with farmers, rural communities, and 
              researchers to promote eco-friendly farming methods, improve soil health, conserve water resources, 
              and empower women and youth in agriculture.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that sustainable agriculture is not just about increasing productivity — it's about 
              nurturing the land, supporting farmers' livelihoods, and creating a future where communities thrive 
              in harmony with nature.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
        `}</style>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 transition-all duration-500">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Neomics Research Foundation began as a small initiative in <strong>Guwahati, Assam, in 2014</strong>, 
                driven by a simple but powerful belief — that science, research, and community collaboration can 
                transform agriculture and improve rural livelihoods.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What started with a few field surveys and training programs has grown into a multi-faceted organization 
                working across <strong>sustainable farming, agri-tech, soil and water conservation, women empowerment, 
                and youth engagement</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we are proud to have trained <strong>over 5,000 farmers</strong>, reached <strong>30+ rural 
                villages</strong>, and completed <strong>20+ research and field projects</strong> — and we continue 
                to expand our impact with every initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Target className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To build a sustainable and resilient agricultural ecosystem where farmers have access to knowledge, 
                innovation, and resources, enabling them to cultivate prosperity while protecting the environment.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-3xl p-10 shadow-xl border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:rotate-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFEB3B] to-[#FDD835] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Leaf className="w-8 h-8 text-gray-900 group-hover:animate-bounce" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#2E7D32] text-xl">✓</span>
                  <span>Promote sustainable, organic, and climate-smart farming practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F57F17] text-xl">✓</span>
                  <span>Conduct research in agriculture and agri-tech innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#558B2F] text-xl">✓</span>
                  <span>Empower farmers through training and capacity-building programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFA726] text-xl">✓</span>
                  <span>Foster gender equality and youth leadership in agriculture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7CB342] text-xl">✓</span>
                  <span>Partner with institutions to scale rural development initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl shadow-[#FFA726]/50 inline-flex items-center gap-2 mb-6 animate-pulse hover:scale-110 transition-all duration-300 cursor-pointer">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              Our Values
            </span>
            <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Shield className="w-8 h-8 text-[#2E7D32] group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain transparency, honesty, and accountability in all our projects and partnerships.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Leaf className="w-8 h-8 text-[#F57F17] group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Our work is rooted in environmental responsibility and long-term resource conservation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Lightbulb className="w-8 h-8 text-[#558B2F] group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace research and technology to bring modern solutions to traditional agriculture.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Heart className="w-8 h-8 text-[#E65100] group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Empowerment</h3>
              <p className="text-gray-600">
                We center farmers and rural communities in everything we do, ensuring inclusive participation.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
        `}</style>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
            
            <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-2xl flex items-center justify-center shadow-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Leadership</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <p className="text-lg font-bold text-gray-900 mb-2">Founder & Chief Functionary</p>
                  <p className="text-gray-600">
                    Our founder brings over a decade of experience in agricultural development, research, and 
                    grassroots mobilization — leading Neomics Research Foundation's programs and strategic vision.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <p className="text-lg font-bold text-gray-900 mb-2">Our Team</p>
                  <p className="text-gray-600 mb-4">
                    We are a passionate collective of researchers, field coordinators, trainers, and volunteers 
                    committed to making agriculture sustainable and inclusive.
                  </p>
                  <p className="text-gray-600">
                    Together, we work with farmers, partner institutions, and rural communities to turn research 
                    into real-world solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Details */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Legal & Registration Details</h2>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-3 border-[#4CAF50] hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-[#2E7D32] font-bold mb-1">Organization Name</p>
                  <p className="text-lg font-bold text-gray-900">Neomics Research Foundation</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-[#F57F17] font-bold mb-1">Type</p>
                  <p className="text-lg font-bold text-gray-900">Non-Profit Organization</p>
                </div>
                <div className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-[#558B2F] font-bold mb-1">CIN</p>
                  <p className="text-lg font-bold text-gray-900">U73100AS2014NPL011785</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-[#E65100] font-bold mb-1">FCRA</p>
                  <p className="text-lg font-bold text-gray-900">020840035</p>
                </div>
                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-[#2E7D32] font-bold mb-1">Registered Date</p>
                  <p className="text-lg font-bold text-gray-900">14 February 2014</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-[#F57F17] font-bold mb-1">Location</p>
                  <p className="text-lg font-bold text-gray-900">Guwahati, Assam, India</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2E7D32]" />
                  <strong>Registered Office Address:</strong>
                </p>
                <p className="text-gray-700 ml-7">
                  House No.-5, Rasaraj Bye Lane, Basistapur Lane 2,<br />
                  Hatigaon, Guwahati, Assam – 781028, India
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-[#2E7D32]" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:+919845673910" className="text-[#2E7D32] font-medium hover:underline">
                        +91 9845673910
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-[#F57F17]" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:info@neomicsresearch.org" className="text-[#F57F17] font-medium hover:underline">
                        info@neomicsresearch.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="w-20 h-20 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
            <span className="text-4xl">🌾</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Be a part of the change. Whether as a volunteer, intern, partner, or supporter — there's a place 
            for you in our journey toward sustainable agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("GetInvolved")} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
              >
                <span className="text-gray-900 font-extrabold">💚 Get Involved</span>
              </Button>
            </Link>
            <Link to={createPageUrl("Donate")} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💰 Donate Now</span>
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">📞 Contact Us</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}