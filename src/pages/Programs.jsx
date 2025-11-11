import React, { useEffect } from "react";
import { Sprout, Microscope, Users, Droplet, BookOpen, Sparkles, Handshake, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const programs = [
  {
    icon: Sprout,
    title: "Sustainable Farming Practices",
    tagline: '"Farming for the future — nurturing soil, water, and communities."',
    description: "We promote eco-friendly, organic, and climate-resilient farming techniques that protect biodiversity and ensure long-term soil health.",
    features: [
      "Organic fertilizer use and composting",
      "Crop rotation and mixed cropping",
      "Integrated pest management (IPM)",
      "Natural resource management",
      "Climate-smart agriculture"
    ],
    goal: "Reduce chemical dependency, improve soil health, and ensure food security for rural communities.",
    color: "from-[#66BB6A] to-[#4CAF50]",
    bgColor: "from-[#E8F5E9] to-[#C8E6C9]",
    borderColor: "border-[#4CAF50]"
  },
  {
    icon: Microscope,
    title: "Agri-Tech & Research",
    tagline: '"Bridging science and soil through innovation."',
    description: "We believe research and technology can transform rural agriculture. Neomics Research Foundation conducts studies and pilot projects.",
    features: [
      "Soil testing and fertility mapping",
      "Smart irrigation systems",
      "Data-driven crop monitoring",
      "IoT & drone-based farm analytics",
      "Renewable energy solutions for agriculture"
    ],
    goal: "Use research and innovation to boost productivity and sustainability.",
    color: "from-[#FFEB3B] to-[#FDD835]",
    bgColor: "from-[#FFF9C4] to-[#FFF59D]",
    borderColor: "border-[#FFEB3B]"
  },
  {
    icon: BookOpen,
    title: "Farmer Training & Capacity Building",
    tagline: '"Empowering farmers with knowledge and skills."',
    description: "Our on-ground training programs equip farmers with practical knowledge for improving yield, managing resources, and increasing income.",
    features: [
      "Field demonstrations",
      "Seasonal workshops",
      "Farmer exchange programs",
      "Awareness drives on government schemes and policies"
    ],
    goal: "Strengthen farmers' capacity to adopt modern, sustainable farming practices.",
    color: "from-[#FFA726] to-[#FB8C00]",
    bgColor: "from-[#FFF3E0] to-[#FFE0B2]",
    borderColor: "border-[#FFA726]"
  },
  {
    icon: Users,
    title: "Women in Agriculture",
    tagline: '"Empowering women — the backbone of rural farming."',
    description: "We recognize the critical role women play in agriculture. Through this program, we provide comprehensive support.",
    features: [
      "Entrepreneurship training",
      "Livelihood development initiatives",
      "Microfinance and self-help group (SHG) support",
      "Leadership and digital literacy workshops"
    ],
    goal: "Promote gender equality and financial independence among women farmers.",
    color: "from-[#7CB342] to-[#8BC34A]",
    bgColor: "from-[#F1F8E9] to-[#DCEDC8]",
    borderColor: "border-[#7CB342]"
  },
  {
    icon: Droplet,
    title: "Soil & Water Conservation",
    tagline: '"Healthy soil, healthy life."',
    description: "Our research and field programs promote soil regeneration and water sustainability.",
    features: [
      "Soil health monitoring",
      "Watershed management projects",
      "Rainwater harvesting",
      "Reforestation and biodiversity initiatives"
    ],
    goal: "Restore degraded land and ensure sustainable resource use for future generations.",
    color: "from-[#66BB6A] to-[#FFEB3B]",
    bgColor: "from-[#E8F5E9] to-[#FFF9C4]",
    borderColor: "border-[#66BB6A]"
  },
  {
    icon: Sparkles,
    title: "Youth for Sustainable Agriculture",
    tagline: '"Inspiring the next generation of agri-innovators."',
    description: "We engage young minds through various initiatives and opportunities.",
    features: [
      "Internship and research opportunities",
      "Rural innovation challenges",
      "Educational outreach in schools and colleges"
    ],
    goal: "Build a community of youth leaders driving agricultural innovation and environmental stewardship.",
    color: "from-[#4CAF50] to-[#FFA726]",
    bgColor: "from-[#C8E6C9] to-[#FFE0B2]",
    borderColor: "border-[#4CAF50]"
  },
  {
    icon: Handshake,
    title: "CSR & Institutional Collaboration",
    tagline: '"Together for impact."',
    description: "We partner with corporate organizations, government bodies, and research institutions for sustainable development initiatives.",
    features: [
      "Corporate partnerships for CSR projects",
      "Government collaboration programs",
      "Research institution partnerships",
      "Scalable solution development"
    ],
    goal: "Create long-term, scalable solutions through partnerships.",
    color: "from-[#FFEB3B] to-[#FFA726]",
    bgColor: "from-[#FFFDE7] to-[#FFF3E0]",
    borderColor: "border-[#FFA726]"
  }
];

export default function Programs() {
  useEffect(() => {
    document.title = "Programs | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Hexagon Pattern */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-1.jpg"
            alt="Our Programs"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Hexagon Pattern */}
        <div className="hero-hexagons">
          <div className="hero-hexagon hero-hexagon-1"></div>
          <div className="hero-hexagon hero-hexagon-2"></div>
          <div className="hero-hexagon hero-hexagon-3"></div>
          <div className="hero-hexagon hero-hexagon-4"></div>
          <div className="hero-hexagon hero-hexagon-5"></div>
          <div className="hero-hexagon hero-hexagon-6"></div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Wheat Grains Animation */}
        <div className="hero-grains">
          <div className="hero-grain hero-grain-1">🌾</div>
          <div className="hero-grain hero-grain-2">🌾</div>
          <div className="hero-grain hero-grain-3">🌾</div>
          <div className="hero-grain hero-grain-4">🌾</div>
          <div className="hero-grain hero-grain-5">🌾</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Our Impact Programs</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🌱</span> Our Programs
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            At Neomics Research Foundation, we design and implement programs that promote
            sustainable agriculture, rural empowerment, and innovation in farming practices. Each
            initiative is research-backed and community-focused — aimed at improving farmer
            livelihoods while protecting the environment.
          </p>
        </div>

        <style jsx>{`
          .hero-section {
            position: relative;
            min-height: 70vh;
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

          .hero-hexagons {
            position: absolute;
            inset: 0;
            overflow: hidden;
          }

          .hero-hexagon {
            position: absolute;
            width: 150px;
            height: 150px;
            background: rgba(255, 255, 255, 0.05);
            clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
            animation: hero-hexagon-float 12s ease-in-out infinite;
          }

          .hero-hexagon-1 {
            top: 10%;
            left: 5%;
            animation-delay: 0s;
          }

          .hero-hexagon-2 {
            top: 30%;
            right: 15%;
            animation-delay: 2s;
          }

          .hero-hexagon-3 {
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
          }

          .hero-hexagon-4 {
            top: 60%;
            right: 5%;
            animation-delay: 1s;
          }

          .hero-hexagon-5 {
            top: 15%;
            left: 40%;
            animation-delay: 3s;
          }

          .hero-hexagon-6 {
            bottom: 25%;
            right: 35%;
            animation-delay: 5s;
          }

          @keyframes hero-hexagon-float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-30px) rotate(180deg);
              opacity: 0.6;
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

          .hero-grains {
            position: absolute;
            inset: 0;
          }

          .hero-grain {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-grain-sway 8s ease-in-out infinite;
          }

          .hero-grain-1 {
            top: 15%;
            left: 10%;
            animation-delay: 0s;
          }

          .hero-grain-2 {
            top: 25%;
            right: 20%;
            animation-delay: 1.5s;
          }

          .hero-grain-3 {
            bottom: 30%;
            left: 25%;
            animation-delay: 3s;
          }

          .hero-grain-4 {
            top: 50%;
            right: 10%;
            animation-delay: 4.5s;
          }

          .hero-grain-5 {
            bottom: 15%;
            right: 35%;
            animation-delay: 6s;
          }

          @keyframes hero-grain-sway {
            0%, 100% {
              transform: rotate(-5deg) translateY(0);
              opacity: 0.5;
            }
            50% {
              transform: rotate(5deg) translateY(-20px);
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
            font-size: 1.25rem;
            color: white;
            max-width: 900px;
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

      {/* Programs Grid */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${program.bgColor} rounded-3xl p-10 shadow-xl border-3 ${program.borderColor} hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 animate-fadeIn group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left - Icon & Title */}
                  <div className="lg:col-span-1">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <program.icon className="w-10 h-10 text-white group-hover:animate-bounce" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-lg text-[#E65100] italic mb-6">{program.tagline}</p>
                    <div className={`w-12 h-1 bg-gradient-to-r ${program.color} rounded-full`}></div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {program.description}
                    </p>

                    {/* Features List */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-[#F57F17]" />
                        Key Initiatives:
                      </h4>
                      <ul className="space-y-3">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#2E7D32] text-xl flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Goal */}
                    <div className={`bg-gradient-to-r ${program.color} rounded-2xl p-6 text-white shadow-lg`}>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        🎯 Goal:
                      </h4>
                      <p className="text-white/95">{program.goal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-3xl p-12 text-center text-white shadow-2xl transform hover:scale-105 transition-all animate-fadeIn border-3 border-[#4CAF50] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative">
              <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Whether you're a farmer, researcher, organization, or supporter — there's a role for
                you in this journey to build a sustainable and self-reliant agricultural ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl("GetInvolved")}>
                  <Button
                    size="lg"
                    className="bg-white text-[#2E7D32] hover:bg-green-50 text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300 shadow-xl"
                  >
                    💚 Volunteer Now
                  </Button>
                </Link>
                <Link to={createPageUrl("CSRCollaboration")}>
                  <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💠 CSR Collaboration</span>
              </Button>
                </Link>
                <Link to={createPageUrl("Donate")}>
                  <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💰 Donate to Support</span>
              </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}