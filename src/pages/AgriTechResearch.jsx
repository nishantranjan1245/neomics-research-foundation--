import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Microscope, Check, Award, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function AgriTechResearch() {
  useEffect(() => {
    document.title = "Agri-Tech & Research | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Digital Grid to Plants Transformation */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-11.jpg"
            alt="Agri-Tech & Research"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Digital Grid Pattern */}
        <div className="hero-grid">
          <div className="hero-grid-line hero-grid-line-1"></div>
          <div className="hero-grid-line hero-grid-line-2"></div>
          <div className="hero-grid-line hero-grid-line-3"></div>
          <div className="hero-grid-line hero-grid-line-4"></div>
        </div>

        {/* Tech Nodes becoming Plants */}
        <div className="hero-tech-nodes">
          <div className="hero-node hero-node-1">
            <div className="node-circle"></div>
            <div className="node-plant">🌱</div>
          </div>
          <div className="hero-node hero-node-2">
            <div className="node-circle"></div>
            <div className="node-plant">🔬</div>
          </div>
          <div className="hero-node hero-node-3">
            <div className="node-circle"></div>
            <div className="node-plant">💻</div>
          </div>
          <div className="hero-node hero-node-4">
            <div className="node-circle"></div>
            <div className="node-plant">🌾</div>
          </div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Tech Icons */}
        <div className="hero-tech-icons">
          <div className="hero-tech-icon hero-tech-icon-1">📡</div>
          <div className="hero-tech-icon hero-tech-icon-2">🛰️</div>
          <div className="hero-tech-icon hero-tech-icon-3">⚡</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Innovation & Research</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🔬</span> Agri-Tech & Research
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Empowering farmers through science, data, and innovation." 🌿
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

          .hero-grid {
            position: absolute;
            inset: 0;
            overflow: hidden;
          }

          .hero-grid-line {
            position: absolute;
            background: linear-gradient(90deg, transparent, rgba(255, 235, 59, 0.3), transparent);
            animation: hero-grid-scan 4s ease-in-out infinite;
          }

          .hero-grid-line-1 {
            width: 100%;
            height: 2px;
            top: 20%;
            animation-delay: 0s;
          }

          .hero-grid-line-2 {
            width: 2px;
            height: 100%;
            left: 30%;
            animation-delay: 1s;
          }

          .hero-grid-line-3 {
            width: 100%;
            height: 2px;
            top: 60%;
            animation-delay: 2s;
          }

          .hero-grid-line-4 {
            width: 2px;
            height: 100%;
            right: 25%;
            animation-delay: 3s;
          }

          @keyframes hero-grid-scan {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }

          .hero-tech-nodes {
            position: absolute;
            inset: 0;
          }

          .hero-node {
            position: absolute;
            animation: hero-node-pulse 3s ease-in-out infinite;
          }

          .hero-node-1 {
            top: 25%;
            left: 20%;
            animation-delay: 0s;
          }

          .hero-node-2 {
            top: 35%;
            right: 25%;
            animation-delay: 0.75s;
          }

          .hero-node-3 {
            bottom: 30%;
            left: 30%;
            animation-delay: 1.5s;
          }

          .hero-node-4 {
            bottom: 35%;
            right: 20%;
            animation-delay: 2.25s;
          }

          .node-circle {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255, 235, 59, 0.6);
            border-radius: 50%;
            margin: 0 auto;
          }

          .node-plant {
            font-size: 2rem;
            text-align: center;
            margin-top: -35px;
          }

          @keyframes hero-node-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.2);
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

          .hero-tech-icons {
            position: absolute;
            inset: 0;
          }

          .hero-tech-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-tech-orbit 10s ease-in-out infinite;
          }

          .hero-tech-icon-1 {
            top: 20%;
            left: 25%;
            animation-delay: 0s;
          }

          .hero-tech-icon-2 {
            top: 30%;
            right: 20%;
            animation-delay: 3s;
          }

          .hero-tech-icon-3 {
            bottom: 25%;
            left: 35%;
            animation-delay: 6s;
          }

          @keyframes hero-tech-orbit {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-30px) rotate(180deg);
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
              At Neomics Research Foundation, we are bridging the gap between traditional farming wisdom and modern 
              agricultural technology. Our Agri-Tech & Research Program focuses on using scientific tools, digital 
              platforms, and data-driven innovation to improve crop yield, reduce resource wastage, and promote climate resilience.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              By integrating research, technology, and farmer education, we aim to make agriculture smarter, more 
              inclusive, and environmentally sustainable.
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
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🔬</span>
              <p className="text-gray-700">Strengthen field research in sustainable agriculture and resource efficiency</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">💧</span>
              <p className="text-gray-700">Integrate digital tools for soil, crop, and water management</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🌾</span>
              <p className="text-gray-700">Develop low-cost, farmer-friendly technologies</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">📊</span>
              <p className="text-gray-700">Use data to guide decisions on irrigation, fertilization, and crop planning</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🤝</span>
              <p className="text-gray-700">Create collaboration between farmers, researchers, and tech innovators</p>
            </div>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Research Focus Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Our agri-tech research activities combine scientific experimentation with on-ground validation through field projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">a. Soil & Crop Analytics</h3>
              <p className="text-gray-600">We use soil testing and fertility mapping to guide farmers on the best crop patterns and nutrient balance for long-term productivity.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">b. Smart Irrigation Systems</h3>
              <p className="text-gray-600">Development and deployment of IoT-based irrigation systems that monitor soil moisture and optimize water use.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">c. Remote Sensing & Data Modeling</h3>
              <p className="text-gray-600">Utilizing satellite imagery, drone surveys, and AI-powered tools to analyze crop health, disease outbreaks, and yield predictions.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">d. Renewable Energy in Agriculture</h3>
              <p className="text-gray-600">Researching solar-powered irrigation, cold storage, and farm machinery to promote clean energy adoption in rural areas.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">e. Digital Agriculture Tools</h3>
              <p className="text-gray-600">Introducing mobile-based applications for farmers to access weather forecasts, market prices, and agri-advisory services in local languages.</p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Ongoing Projects</h2>
            <p className="text-3xl text-[#2E7D32] italic mb-12 text-center">"Turning technology into transformation." 🌾</p>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-l-4 border-[#4CAF50] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. AgriData Hub</h3>
                <p className="text-gray-600">A digital database that collects and analyzes crop, soil, and water data from smallholder farms in Assam.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-l-4 border-[#FFEB3B] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Water for Growth</h3>
                <p className="text-gray-600">Research on affordable smart irrigation systems for dryland farmers.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-l-4 border-[#7CB342] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. SoilTech Pilot</h3>
                <p className="text-gray-600">Field testing of portable soil analysis devices for real-time nutrient insights.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-l-4 border-[#FFA726] hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. AgriConnect</h3>
                <p className="text-gray-600">A farmer information system connecting local markets, suppliers, and extension workers through a simple app.</p>
              </div>
            </div>

            <p className="text-center text-lg text-gray-600 mt-8">
              🔗 All projects are designed with open collaboration and community participation in mind.
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Research Partnerships</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            We collaborate with academic institutions, CSR partners, and technology innovators to make scientific 
            research accessible to farmers.
          </p>

          <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Key Partners:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="text-[#2E7D32] text-2xl">✓</span>
                <p className="text-gray-700">Agricultural universities & research centers</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="text-[#F57F17] text-2xl">✓</span>
                <p className="text-gray-700">CSR divisions of agri-tech startups</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="text-[#558B2F] text-2xl">✓</span>
                <p className="text-gray-700">Local farmer producer organizations (FPOs)</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="text-[#E65100] text-2xl">✓</span>
                <p className="text-gray-700">Government and rural innovation departments</p>
              </div>
            </div>
            <p className="text-xl text-[#2E7D32] italic mt-8 text-center">
              Together, we turn research findings into farmer benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Farmer Capacity Building */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Farmer Capacity Building</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Along with research, we ensure knowledge transfer to farmers through:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "On-field demonstrations of agri-tech tools",
                "Digital literacy and awareness workshops",
                "Farmer training on using mobile and IoT systems",
                "Bilingual guides for tech-based farming practices"
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
              Our Agri-Tech & Research initiatives have already created measurable improvements:
            </p>

            <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#2E7D32] text-3xl">📈</span>
                  <p className="text-gray-700 text-lg"><strong>30% higher</strong> water efficiency using smart irrigation</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#F57F17] text-3xl">🧪</span>
                  <p className="text-gray-700 text-lg"><strong>500+ soil samples</strong> analyzed under Project GreenSoil</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#558B2F] text-3xl">👨‍🌾</span>
                  <p className="text-gray-700 text-lg"><strong>1,000+ farmers</strong> trained on digital tools</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#E65100] text-3xl">🌍</span>
                  <p className="text-gray-700 text-lg"><strong>20+ research</strong> field sites established</p>
                </div>
              </div>
              <p className="text-xl text-[#2E7D32] italic mt-8 text-center">
                Technology is no longer distant — it's growing in every field we touch.
              </p>
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
                "Expand AgriData Hub to multiple districts in Northeast India",
                "Launch an open-access research portal for agriculture data",
                "Pilot AI-driven crop advisory systems in Assamese language",
                "Scale renewable agri-energy solutions across rural Assam"
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
          <p className="text-3xl italic mb-6">"Innovation is the seed — collaboration is the soil."</p>
          <h2 className="text-4xl font-bold mb-6">Join us in transforming agriculture through science and sustainability</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Partner, volunteer, or donate to support our agri-tech initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("PartnerWithUs")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Collaborate Now
              </Button>
            </Link>
            <Link to={createPageUrl("GetInvolved")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">🔬 Support Research</span>
              </Button>
            </Link>
            <Link to={createPageUrl("Donate")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💰 Donate to AgriTech Program</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}