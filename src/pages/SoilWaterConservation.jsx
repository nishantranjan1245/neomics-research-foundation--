import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Droplet, Check, Award, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function SoilWaterConservation() {
  useEffect(() => {
    document.title = "Soil & Water Conservation | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Water Cycle & Soil Layers */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-13.jpg"
            alt="Soil & Water Conservation"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Water Drops Falling */}
        <div className="hero-water-drops">
          <div className="hero-drop hero-drop-1">💧</div>
          <div className="hero-drop hero-drop-2">💧</div>
          <div className="hero-drop hero-drop-3">💧</div>
          <div className="hero-drop hero-drop-4">💧</div>
          <div className="hero-drop hero-drop-5">💧</div>
        </div>

        {/* Soil Layers */}
        <div className="hero-soil-layers">
          <div className="soil-layer soil-layer-1"></div>
          <div className="soil-layer soil-layer-2"></div>
          <div className="soil-layer soil-layer-3"></div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Nature Icons */}
        <div className="hero-nature-icons">
          <div className="hero-nature-icon hero-nature-icon-1">🌊</div>
          <div className="hero-nature-icon hero-nature-icon-2">🌍</div>
          <div className="hero-nature-icon hero-nature-icon-3">♻️</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Conservation & Sustainability</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">💧</span> Soil & Water Conservation
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Healthy soil and clean water are the roots of a sustainable future." 🌿
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

          .hero-water-drops {
            position: absolute;
            inset: 0;
          }

          .hero-drop {
            position: absolute;
            font-size: 2rem;
            opacity: 0.6;
            animation: hero-drop-fall 4s ease-in infinite;
          }

          .hero-drop-1 {
            top: -10%;
            left: 20%;
            animation-delay: 0s;
          }

          .hero-drop-2 {
            top: -10%;
            left: 40%;
            animation-delay: 0.8s;
          }

          .hero-drop-3 {
            top: -10%;
            left: 60%;
            animation-delay: 1.6s;
          }

          .hero-drop-4 {
            top: -10%;
            left: 30%;
            animation-delay: 2.4s;
          }

          .hero-drop-5 {
            top: -10%;
            left: 70%;
            animation-delay: 3.2s;
          }

          @keyframes hero-drop-fall {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            90% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(110vh) scale(1.2);
              opacity: 0;
            }
          }

          .hero-soil-layers {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 150px;
          }

          .soil-layer {
            position: absolute;
            width: 100%;
            opacity: 0.2;
          }

          .soil-layer-1 {
            height: 50px;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(139, 69, 19, 0.3), rgba(101, 67, 33, 0.4));
          }

          .soil-layer-2 {
            height: 50px;
            bottom: 50px;
            background: linear-gradient(to bottom, rgba(160, 82, 45, 0.2), rgba(139, 69, 19, 0.3));
          }

          .soil-layer-3 {
            height: 50px;
            bottom: 100px;
            background: linear-gradient(to bottom, rgba(188, 143, 143, 0.1), rgba(160, 82, 45, 0.2));
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

          .hero-nature-icons {
            position: absolute;
            inset: 0;
          }

          .hero-nature-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-nature-wave 6s ease-in-out infinite;
          }

          .hero-nature-icon-1 {
            top: 25%;
            left: 18%;
            animation-delay: 0s;
          }

          .hero-nature-icon-2 {
            top: 35%;
            right: 22%;
            animation-delay: 2s;
          }

          .hero-nature-icon-3 {
            bottom: 30%;
            left: 30%;
            animation-delay: 4s;
          }

          @keyframes hero-nature-wave {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-20px) rotate(15deg);
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
              At Neomics Research Foundation, we recognize that soil and water are the foundation of all agricultural life. 
              Our Soil & Water Conservation Program focuses on restoring the health of natural resources that farmers depend on every day.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Through scientific research, community-driven initiatives, and sustainable land management, we help farmers protect, 
              regenerate, and sustain their most vital resources — the soil beneath their feet and the water that nourishes their crops.
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
              <p className="text-gray-700">Improve soil fertility and structure through organic and regenerative methods</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">💧</span>
              <p className="text-gray-700">Promote efficient water-use practices in agriculture</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🌍</span>
              <p className="text-gray-700">Prevent soil erosion and nutrient loss through sustainable land use</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🧪</span>
              <p className="text-gray-700">Conduct soil health research and awareness drives</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:rotate-2 duration-500 group cursor-pointer">
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">👩‍🌾</span>
              <p className="text-gray-700">Empower farmers to manage natural resources at the community level</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Key Activities</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Our conservation efforts combine research, on-ground interventions, and farmer participation to build long-term resilience in rural ecosystems.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">a. Soil Health Monitoring</h3>
              <p className="text-gray-600">Regular soil testing and fertility analysis to help farmers understand nutrient composition and adopt balanced fertilization methods.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">b. Organic Soil Enrichment</h3>
              <p className="text-gray-600">Training farmers to produce and apply compost, green manure, and biofertilizers to improve soil structure and microbial life.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">c. Watershed Management</h3>
              <p className="text-gray-600">Developing small-scale watershed projects to capture and store rainwater, control runoff, and reduce soil erosion in hilly areas.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">d. Rainwater Harvesting</h3>
              <p className="text-gray-600">Setting up low-cost harvesting systems and recharge pits in farmlands to conserve rainwater for irrigation and groundwater restoration.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">e. Micro-Irrigation Systems</h3>
              <p className="text-gray-600">Introducing drip and sprinkler irrigation models to maximize water use efficiency, especially in drought-prone regions.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#8BC34A] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">f. Community Awareness Drives</h3>
              <p className="text-gray-600">Organizing village-level campaigns and farmer meetings on soil care, organic inputs, and water conservation practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Research & Innovation</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Our field teams collaborate with scientists and research institutions to explore modern methods for soil and water preservation, including:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Soil nutrient mapping and AI-based fertility prediction",
                "Drone-assisted watershed analysis",
                "Use of biodegradable mulching materials",
                "Integration of renewable energy in irrigation systems"
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

            <p className="text-center text-lg text-gray-600 mt-8">
              We turn research insights into actionable solutions for the farmers we serve.
            </p>
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
              Our Soil & Water Conservation initiatives have brought visible improvements to rural communities and farmlands.
            </p>

            <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#2E7D32] text-3xl">🌿</span>
                  <p className="text-gray-700 text-lg"><strong>2,000+ farmers</strong> trained in soil conservation and water efficiency practices</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#F57F17] text-3xl">💧</span>
                  <p className="text-gray-700 text-lg"><strong>20+ community</strong> rainwater systems established</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#558B2F] text-3xl">🧪</span>
                  <p className="text-gray-700 text-lg">Soil health improvement of <strong>35% average</strong> in treated plots</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#E65100] text-3xl">🌱</span>
                  <p className="text-gray-700 text-lg">Reduction in topsoil erosion and improved groundwater levels in project areas</p>
                </div>
              </div>
              <p className="text-xl text-[#2E7D32] italic mt-8 text-center">
                When farmers learn to care for their land, the land begins to care for them.
              </p>
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
            <p className="text-xl text-gray-600 mb-8 text-center">We partner with:</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Agricultural universities & environmental research institutes",
                "CSR partners in sustainability and resource management",
                "Government rural development programs",
                "Farmer cooperatives and local self-help groups"
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
              These partnerships help us expand our impact and promote conservation at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Farmer Stories */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Farmer Stories</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 hover:rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "Before this project, our wells dried up after the monsoon. Now, with water harvesting, we have water for irrigation year-round."
              </p>
              <p className="text-[#2E7D32] font-medium">— Farmer, Barpeta District</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "The compost and mulching training helped our soil retain moisture even in dry months."
              </p>
              <p className="text-[#F57F17] font-medium">— Women Farmer, Kamrup District</p>
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
                "Expand watershed management projects to more districts in Assam",
                "Launch a Soil Health Card initiative for smallholder farmers",
                "Develop community-led Water Conservation Committees",
                "Publish regional Soil & Water Sustainability Reports annually"
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
          <p className="text-3xl italic mb-6">"Conserve today, sustain tomorrow." 💧</p>
          <h2 className="text-4xl font-bold mb-6">Join our mission to protect the natural resources that sustain agriculture</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            You can support through volunteering, partnerships, or contributions to our conservation projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Volunteer")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Volunteer for Conservation Projects
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
            <Link to={createPageUrl("Donate")}>
             <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💰 Donate to Support Sustainability</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}