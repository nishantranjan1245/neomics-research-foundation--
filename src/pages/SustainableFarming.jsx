import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sprout, Check, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function SustainableFarming() {
  useEffect(() => {
    document.title = "Sustainable Farming | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Growing Plants Animation */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-10.jpg"
            alt="Sustainable Farming"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Growing Plants from Ground */}
        <div className="hero-plants">
          <div className="hero-plant hero-plant-1">
            <div className="plant-stem"></div>
            <div className="plant-leaves">🌿</div>
          </div>
          <div className="hero-plant hero-plant-2">
            <div className="plant-stem"></div>
            <div className="plant-leaves">🌱</div>
          </div>
          <div className="hero-plant hero-plant-3">
            <div className="plant-stem"></div>
            <div className="plant-leaves">🍃</div>
          </div>
          <div className="hero-plant hero-plant-4">
            <div className="plant-stem"></div>
            <div className="plant-leaves">🌾</div>
          </div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Farm Elements */}
        <div className="hero-farm-icons">
          <div className="hero-farm-icon hero-farm-icon-1">☀️</div>
          <div className="hero-farm-icon hero-farm-icon-2">🌧️</div>
          <div className="hero-farm-icon hero-farm-icon-3">🦋</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Sustainable Agriculture</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🌱</span> Sustainable Farming Practices
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Farming for the future — nurturing soil, water, and communities." 🌾
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

          .hero-plants {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-around;
            height: 200px;
          }

          .hero-plant {
            position: relative;
            animation: hero-plant-grow 5s ease-out infinite;
          }

          .hero-plant-1 {
            left: 10%;
            animation-delay: 0s;
          }

          .hero-plant-2 {
            left: 35%;
            animation-delay: 1s;
          }

          .hero-plant-3 {
            left: 60%;
            animation-delay: 2s;
          }

          .hero-plant-4 {
            left: 85%;
            animation-delay: 3s;
          }

          .plant-stem {
            width: 5px;
            height: 80px;
            background: linear-gradient(to top, rgba(139, 195, 74, 0.8), rgba(124, 179, 66, 0.6));
            margin: 0 auto;
            border-radius: 3px;
          }

          .plant-leaves {
            font-size: 2.5rem;
            text-align: center;
            margin-top: -15px;
          }

          @keyframes hero-plant-grow {
            0% {
              transform: scaleY(0);
              opacity: 0;
            }
            40% {
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

          .hero-farm-icons {
            position: absolute;
            inset: 0;
          }

          .hero-farm-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-icon-drift 8s ease-in-out infinite;
          }

          .hero-farm-icon-1 {
            top: 15%;
            left: 20%;
            animation-delay: 0s;
          }

          .hero-farm-icon-2 {
            top: 25%;
            right: 25%;
            animation-delay: 2s;
          }

          .hero-farm-icon-3 {
            bottom: 30%;
            left: 35%;
            animation-delay: 4s;
          }

          @keyframes hero-icon-drift {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-30px) translateX(20px);
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
            .hero-plants { height: 120px; }
            .plant-stem { height: 50px; }
            .plant-leaves { font-size: 2rem; }
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
              At Neomics Research Foundation, we promote eco-friendly, organic, and climate-resilient farming techniques 
              that protect biodiversity and ensure long-term soil health. Our Sustainable Farming Practices Program works 
              with farmers to reduce chemical dependency, improve natural resource use, and build resilience against climate change.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We combine traditional agricultural wisdom with modern research to create farming models that are both productive 
              and planet-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Key Practices */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Practices We Promote</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">a. Organic Fertilizers & Composting</h3>
              <p className="text-gray-600">Training farmers to produce and apply organic inputs, vermicompost, and green manure to enrich soil naturally.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFEB3B] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">b. Crop Rotation & Mixed Cropping</h3>
              <p className="text-gray-600">Encouraging diverse crop patterns to break pest cycles, improve soil health, and increase farm income.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#7CB342] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">c. Integrated Pest Management</h3>
              <p className="text-gray-600">Using biological and natural pest control methods instead of harmful chemicals.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">d. Water Conservation Techniques</h3>
              <p className="text-gray-600">Rainwater harvesting, efficient irrigation, and mulching to reduce water waste.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#66BB6A] hover:scale-105 hover:rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">e. Agroforestry & Biodiversity</h3>
              <p className="text-gray-600">Integrating trees and native plants into farming systems for soil conservation and ecosystem balance.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 border-[#8BC34A] hover:scale-105 hover:-rotate-1 duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">f. Climate-Smart Agriculture</h3>
              <p className="text-gray-600">Adapting farming practices to climate variability through drought-resistant crops and sustainable land use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Field Activities */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Field Activities</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Our field teams work directly with farmers through:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Training workshops on sustainable farming methods",
                "Demonstration plots showcasing organic cultivation",
                "Farmer-to-farmer knowledge exchange programs",
                "Awareness campaigns on soil and water protection"
              ].map((activity, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <Check className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{activity}</p>
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
              Our Sustainable Farming initiatives have helped transform farming practices and farmer livelihoods across rural Assam.
            </p>

            <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#2E7D32] text-3xl">🌾</span>
                  <p className="text-gray-700 text-lg"><strong>2,500+ farmers</strong> trained in organic and sustainable practices</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#F57F17] text-3xl">🌱</span>
                  <p className="text-gray-700 text-lg"><strong>40% reduction</strong> in chemical fertilizer use among participants</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F1F8E9] to-[#DCEDC8] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#558B2F] text-3xl">💧</span>
                  <p className="text-gray-700 text-lg"><strong>25% increase</strong> in water-use efficiency</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl hover:scale-105 transition-transform duration-300">
                  <span className="text-[#E65100] text-3xl">📈</span>
                  <p className="text-gray-700 text-lg">Improved crop yields and farmer income in project areas</p>
                </div>
              </div>
              <p className="text-xl text-[#2E7D32] italic mt-8 text-center">
                Sustainable farming isn't just good for the earth — it's good for farmers too.
              </p>
            </div>
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
                "After switching to organic methods, my soil became healthier, and I'm now earning more by selling organic produce at premium prices."
              </p>
              <p className="text-[#2E7D32] font-medium">— Ramesh Sharma, Organic Farmer, Kamrup</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "The composting training changed everything for me. Now my farm costs are lower and my crops are better."
              </p>
              <p className="text-[#F57F17] font-medium">— Sunita Devi, Women Farmer, Barpeta</p>
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
                "Establish Model Organic Farms in multiple districts",
                "Launch a Sustainable Farming Certification Program for farmers",
                "Develop digital resources and training videos in local languages",
                "Expand reach to 10,000+ farmers by 2027"
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
          <p className="text-3xl italic mb-6">"Farming sustainably isn't just about growing crops — it's about growing a better future." 🌾</p>
          <h2 className="text-4xl font-bold mb-6">Join us in promoting agriculture that respects nature</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            and empowers farmers to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Volunteer")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Volunteer with Us
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
                <span className="text-white font-extrabold">💰 Support Sustainable Farming</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}