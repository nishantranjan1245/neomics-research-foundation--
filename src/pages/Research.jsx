
import React, { useEffect } from "react";
import { FlaskConical, Leaf, Beaker, Target, Users, BookOpen, Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Research() {
  useEffect(() => {
    document.title = "Research & Innovation | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with DNA Helix Pattern */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-2.jpg"
            alt="Agricultural Research"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* DNA Helix / Spiral Pattern */}
        <div className="hero-spirals">
          <div className="hero-spiral hero-spiral-1"></div>
          <div className="hero-spiral hero-spiral-2"></div>
          <div className="hero-spiral hero-spiral-3"></div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Microscope Elements */}
        <div className="hero-molecules">
          <div className="hero-molecule hero-molecule-1">🔬</div>
          <div className="hero-molecule hero-molecule-2">⚗️</div>
          <div className="hero-molecule hero-molecule-3">🧪</div>
          <div className="hero-molecule hero-molecule-4">🔭</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Research & Innovation</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🔬</span> Research & Innovation
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Bridging science and soil through innovation."
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

          .hero-spirals {
            position: absolute;
            inset: 0;
          }

          .hero-spiral {
            position: absolute;
            width: 200px;
            height: 200px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: hero-spiral-rotate 10s linear infinite;
          }

          .hero-spiral-1 {
            top: 20%;
            left: 10%;
            border-left-color: rgba(255, 235, 59, 0.4);
            animation-delay: 0s;
          }

          .hero-spiral-2 {
            bottom: 20%;
            right: 15%;
            border-right-color: rgba(139, 195, 74, 0.4);
            animation-delay: 1s;
          }

          .hero-spiral-3 {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-top-color: rgba(255, 167, 38, 0.4);
            animation-delay: 2s;
          }

          @keyframes hero-spiral-rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
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

          .hero-molecules {
            position: absolute;
            inset: 0;
          }

          .hero-molecule {
            position: absolute;
            font-size: 2rem;
            opacity: 0.4;
            animation: hero-molecule-orbit 12s ease-in-out infinite;
          }

          .hero-molecule-1 {
            top: 25%;
            left: 15%;
            animation-delay: 0s;
          }

          .hero-molecule-2 {
            top: 35%;
            right: 20%;
            animation-delay: 3s;
          }

          .hero-molecule-3 {
            bottom: 25%;
            left: 30%;
            animation-delay: 6s;
          }

          .hero-molecule-4 {
            bottom: 35%;
            right: 15%;
            animation-delay: 9s;
          }

          @keyframes hero-molecule-orbit {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg) scale(1);
              opacity: 0.4;
            }
            25% {
              transform: translate(20px, -20px) rotate(90deg) scale(1.2);
              opacity: 0.7;
            }
            50% {
              transform: translate(0, -40px) rotate(180deg) scale(0.9);
              opacity: 0.5;
            }
            75% {
              transform: translate(-20px, -20px) rotate(270deg) scale(1.1);
              opacity: 0.6;
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
            font-size: 1.5rem;
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
            .hero-description { font-size: 1rem; }
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Neomics Research Foundation, we believe that science and innovation are the roots of sustainable farming. 
              Our research focuses on improving agricultural productivity, protecting natural resources, and creating scalable 
              models that benefit farmers and communities alike.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mt-4">
              Through field studies, laboratory analysis, and data-driven insights, we transform research outcomes into 
              real-world agricultural solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] bg-clip-text text-transparent">Research Focus Areas</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            We conduct both independent and collaborative research on themes that directly impact farming communities and the environment
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Leaf className="w-8 h-8 text-[#2E7D32] group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Crop Production</h3>
              <p className="text-gray-600">Developing low-input, high-yield cultivation methods.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 transition-all duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Target className="w-8 h-8 text-[#F57F17] group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soil Health & Fertility</h3>
              <p className="text-gray-600">Testing soil composition and promoting organic enrichment.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <FlaskConical className="w-8 h-8 text-[#558B2F] group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Climate-Resilient Farming</h3>
              <p className="text-gray-600">Studying the effects of climate change on regional crops.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:-rotate-2 transition-all duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">💧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water Resource Management</h3>
              <p className="text-gray-600">Research on irrigation efficiency, rainwater harvesting, and watershed management.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Beaker className="w-8 h-8 text-[#E65100] group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agri-Tech & Digital Tools</h3>
              <p className="text-gray-600">Integrating IoT, remote sensing, and AI in small-scale farming.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#8BC34A] hover:border-[#9CCC65] hover:-translate-y-3 hover:-rotate-2 transition-all duration-500 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Organic Agriculture Models</h3>
              <p className="text-gray-600">Evaluating cost-benefit and yield performance of organic practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ongoing Projects</h2>
            <p className="text-2xl text-[#F57F17] italic mb-6">"From research labs to farmer fields — innovation in action."</p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Some of our current and recent research initiatives include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-3xl p-8 shadow-lg border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 hover:rotate-2 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project GreenSoil</h3>
              <p className="text-gray-700 leading-relaxed">
                Soil health monitoring and nutrient balance assessment in rural Assam.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-3xl p-8 shadow-lg border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AgriData Hub</h3>
              <p className="text-gray-700 leading-relaxed">
                Developing a digital model for farmer-centric crop and climate data tracking.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-3xl p-8 shadow-lg border-3 border-[#7CB342] hover:shadow-2xl hover:shadow-[#7CB342]/50 hover:scale-105 hover:rotate-2 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Water for Growth</h3>
              <p className="text-gray-700 leading-relaxed">
                Evaluating low-cost irrigation models in smallholder communities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-3xl p-8 shadow-lg border-3 border-[#FFA726] hover:shadow-2xl hover:shadow-[#FFA726]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Organic Transition Model</h3>
              <p className="text-gray-700 leading-relaxed">
                Supporting farmers shifting from chemical to organic farming methods.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600">
              🔗 Each project is designed to generate practical, field-ready insights for local farmers and policymakers.
            </p>
          </div>
        </div>
      </section>

      {/* Research Partnerships */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Research Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We collaborate with a range of organizations, universities, and industry partners to extend the reach 
              and impact of our studies. Our collaborations include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all border-2 border-[#4CAF50]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#2E7D32]" />
              </div>
              <p className="text-gray-700 font-medium">Academic institutions in agriculture and environmental science</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all border-2 border-[#FFA726]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <p className="text-gray-700 font-medium">Corporate CSR programs promoting sustainable rural development</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all border-2 border-[#7CB342]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <p className="text-gray-700 font-medium">Government departments supporting rural innovation</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all border-2 border-[#66BB6A]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#2E7D32]" />
              </div>
              <p className="text-gray-700 font-medium">Farmer producer organizations (FPOs) and cooperatives</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">
              🔗 Together, we translate research into community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation in Action */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FFF3E0] via-[#FFE0B2] to-[#FFF9C4] rounded-3xl p-12 shadow-xl border-3 border-[#FFA726]">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Innovation in Action</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Our field implementation model turns research outcomes into pilot programs, ensuring that knowledge doesn't 
              stay in the lab but reaches the farmers who need it. We emphasize:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all">
                <Lightbulb className="w-12 h-12 text-[#F57F17] mb-4" />
                <p className="text-gray-700 font-medium">Technology adaptation in local contexts</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all">
                <span className="text-5xl mb-4 block">👨‍🌾</span>
                <p className="text-gray-700 font-medium">Farmer training on research-based practices</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all">
                <Target className="w-12 h-12 text-[#2E7D32] mb-4" />
                <p className="text-gray-700 font-medium">Impact measurement and documentation</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all">
                <BookOpen className="w-12 h-12 text-[#558B2F] mb-4" />
                <p className="text-gray-700 font-medium">Knowledge dissemination through workshops and open data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Reports */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Publications & Reports</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We regularly publish reports, case studies, and field findings to share knowledge with the larger 
              agricultural and research community.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border-3 border-[#FFA726] max-w-3xl mx-auto hover:shadow-2xl hover:shadow-[#FFA726]/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Coming Soon:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-lg text-gray-700 hover:scale-105 transition-transform duration-300">
                <span className="text-[#F57F17] text-2xl">📊</span>
                <span>Soil Health Annual Report</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-gray-700 hover:scale-105 transition-transform duration-300">
                <span className="text-[#2E7D32] text-2xl">📗</span>
                <span>Climate Resilient Agriculture Handbook</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-gray-700 hover:scale-105 transition-transform duration-300">
                <span className="text-[#558B2F] text-2xl">📘</span>
                <span>Farmer Training Manual (Assam Region)</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-gray-700 hover:scale-105 transition-transform duration-300">
                <span className="text-[#689F38] text-2xl">📙</span>
                <span>Community Impact Assessment Report</span>
              </li>
            </ul>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                🔗 Downloadable PDFs and data sets will be available soon on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation for the Future */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FFA726] to-[#FB8C00] rounded-3xl p-12 text-white shadow-2xl border-3 border-[#FFA726] hover:shadow-[#FFA726]/50 transition-all duration-500">
            <h2 className="text-4xl font-bold mb-6 text-center">Innovation for the Future</h2>
            <p className="text-xl text-orange-100 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Neomics Research Foundation is committed to leveraging science, technology, and collaboration to create 
              a self-reliant agricultural ecosystem. Our future research aims to integrate:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <span className="text-4xl mb-4 block">🤖</span>
                <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
                <p className="text-orange-100">For crop prediction and yield optimization</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <span className="text-4xl mb-4 block">⚡</span>
                <h3 className="text-xl font-bold mb-2">Renewable Energy</h3>
                <p className="text-orange-100">Models for sustainable farm operations</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <span className="text-4xl mb-4 block">🚚</span>
                <h3 className="text-xl font-bold mb-2">Agri-Supply Chain</h3>
                <p className="text-orange-100">Sustainable systems connecting farms to markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            "Your knowledge can change the way India farms."
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Partner with us to conduct, fund, or implement agricultural research that creates lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("GetInvolved")}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300"
              >
                💚 Collaborate with Us
              </Button>
            </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">🔬 Submit Research Proposal</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">📚 Download Reports</span>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
