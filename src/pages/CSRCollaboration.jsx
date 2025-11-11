
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building, Target, TrendingUp, Users, Send, CheckCircle, Mail, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CSRCollaboration() {
  useEffect(() => {
    document.title = "CSR Collaboration | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Network Connections */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-5.jpg"
            alt="CSR Collaboration"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Network Connection Lines */}
        <div className="hero-network">
          <svg className="hero-network-svg" viewBox="0 0 800 600">
            <line className="hero-network-line hero-line-1" x1="100" y1="100" x2="300" y2="200" />
            <line className="hero-network-line hero-line-2" x1="300" y1="200" x2="500" y2="150" />
            <line className="hero-network-line hero-line-3" x1="500" y1="150" x2="700" y2="250" />
            <line className="hero-network-line hero-line-4" x1="300" y1="200" x2="400" y2="400" />
            <circle className="hero-network-node" cx="100" cy="100" r="8" />
            <circle className="hero-network-node" cx="300" cy="200" r="8" />
            <circle className="hero-network-node" cx="500" cy="150" r="8" />
            <circle className="hero-network-node" cx="700" cy="250" r="8" />
            <circle className="hero-network-node" cx="400" cy="400" r="8" />
          </svg>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Partnership Icons */}
        <div className="hero-partnership-icons">
          <div className="hero-partnership-icon hero-partnership-icon-1">🤝</div>
          <div className="hero-partnership-icon hero-partnership-icon-2">🏢</div>
          <div className="hero-partnership-icon hero-partnership-icon-3">🌍</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Corporate Partnerships</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🤝</span> CSR Collaboration
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            "Sustainable impact begins when we work together." 🌱
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

          .hero-network {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.3;
          }

          .hero-network-svg {
            width: 100%;
            height: 100%;
            max-width: 800px;
          }

          .hero-network-line {
            stroke: rgba(255, 235, 59, 0.6);
            stroke-width: 2;
            stroke-dasharray: 5, 5;
            animation: hero-line-dash 3s linear infinite;
          }

          .hero-line-1 { animation-delay: 0s; }
          .hero-line-2 { animation-delay: 0.5s; }
          .hero-line-3 { animation-delay: 1s; }
          .hero-line-4 { animation-delay: 1.5s; }

          @keyframes hero-line-dash {
            from {
              stroke-dashoffset: 0;
            }
            to {
              stroke-dashoffset: 20;
            }
          }

          .hero-network-node {
            fill: rgba(255, 255, 255, 0.8);
            animation: hero-node-pulse 2s ease-in-out infinite;
          }

          @keyframes hero-node-pulse {
            0%, 100% {
              r: 8;
              opacity: 0.8;
            }
            50% {
              r: 12;
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

          .hero-partnership-icons {
            position: absolute;
            inset: 0;
          }

          .hero-partnership-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-partnership-rotate 8s ease-in-out infinite;
          }

          .hero-partnership-icon-1 {
            top: 22%;
            left: 18%;
            animation-delay: 0s;
          }

          .hero-partnership-icon-2 {
            top: 32%;
            right: 20%;
            animation-delay: 2s;
          }

          .hero-partnership-icon-3 {
            bottom: 28%;
            left: 30%;
            animation-delay: 4s;
          }

          @keyframes hero-partnership-rotate {
            0%, 100% {
              transform: rotate(0deg) scale(1);
              opacity: 0.5;
            }
            50% {
              transform: rotate(180deg) scale(1.3);
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
              At Neomics Research Foundation, we believe in the power of partnerships to create meaningful, measurable change. 
              Through our CSR Collaboration Program, we invite corporations, institutions, and startups to join hands with us 
              in advancing sustainable agriculture, rural empowerment, and environmental conservation.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              By integrating CSR efforts with grassroots action, we ensure that your organization's contributions directly 
              improve farmer livelihoods, promote eco-friendly practices, and foster long-term community growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why Partner with Neomics</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We bring 10+ years of field experience, community trust, and a research-driven approach to every project we implement.
          </p>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Partnering with Neomics helps your organization:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">🌾</span>
              <p className="text-gray-700">Contribute to national sustainability and climate action goals (SDG 2, 5, 12, 13, and 15)</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">👨‍🌾</span>
              <p className="text-gray-700">Empower farmers and rural communities through knowledge and innovation</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">🔬</span>
              <p className="text-gray-700">Support research-based solutions for agriculture and environment</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">💧</span>
              <p className="text-gray-700">Promote responsible use of soil, water, and natural resources</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-3 border-[#66BB6A] hover:border-[#4CAF50] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 group cursor-pointer">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">📊</span>
              <p className="text-gray-700">Ensure transparent impact tracking and project reporting</p>
            </div>
          </div>

          <p className="text-center text-xl text-[#2E7D32] italic mt-12">
            Your CSR can become the catalyst for sustainable rural transformation.
          </p>
        </div>
      </section>

      {/* Areas of Collaboration */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Areas of Collaboration</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            We offer CSR partnership opportunities across multiple domains of rural and agricultural development:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "a. Sustainable Farming Programs", desc: "Support initiatives that promote organic farming, natural soil improvement, and climate-smart agricultural methods.", color: "border-[#4CAF50]" },
              { title: "b. Agri-Tech & Innovation", desc: "Fund projects that integrate digital tools, IoT systems, and AI-based farming solutions to modernize rural agriculture.", color: "border-[#FFEB3B]" },
              { title: "c. Farmer Training & Capacity Building", desc: "Sponsor farmer education, awareness workshops, and field demonstrations to improve productivity and livelihood resilience.", color: "border-[#7CB342]" },
              { title: "d. Soil & Water Conservation Projects", desc: "Invest in watershed management, rainwater harvesting, and soil regeneration for long-term ecological balance.", color: "border-[#FFA726]" },
              { title: "e. Women Empowerment & Livelihoods", desc: "Empower rural women through training, entrepreneurship development, and community self-help groups.", color: "border-[#66BB6A]" },
              { title: "f. Youth for Sustainability", desc: "Engage youth in research, innovation, and leadership programs for a sustainable future.", color: "border-[#8BC34A]" }
            ].map((item, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-3 ${item.color} hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Partnership Models</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              We offer flexible CSR engagement options tailored to your organization's goals and CSR budget:
            </p>

            <div className="space-y-4">
              {[
                { icon: "💼", title: "Project Sponsorship", desc: "Fund an existing Neomics program or field project" },
                { icon: "🧪", title: "Co-Creation", desc: "Develop new initiatives aligned with your company's CSR vision" },
                { icon: "🌾", title: "Adopt a Village", desc: "Implement multi-thematic programs (farming, water, women empowerment) in a selected community" },
                { icon: "📚", title: "Research Collaboration", desc: "Partner on data-driven studies, innovation pilots, or climate resilience research" },
                { icon: "💬", title: "Awareness Campaigns", desc: "Support outreach and educational drives for farmers and youth" }
              ].map((model, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{model.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{model.title}</h3>
                      <p className="text-gray-600">{model.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Offer to CSR Partners</h2>

            <div className="bg-white rounded-3xl p-10 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "📊", text: "Transparent Reporting: Quarterly and annual project impact reports" },
                  { icon: "📸", text: "Field Documentation: Photo & video coverage of CSR-supported initiatives" },
                  { icon: "🧾", text: "Legal Compliance: FCRA & CSR registration for fund utilization" },
                  { icon: "🏅", text: "Visibility: Branding and acknowledgment in project materials and events" },
                  { icon: "🤝", text: "Long-Term Impact: Sustainable outcomes that align with national and global SDGs" }
                ].map((item, index) => (
                  <div key={index} className={`bg-gradient-to-br ${
                    index % 2 === 0 ? 'from-[#E8F5E9] to-[#C8E6C9]' : 'from-[#FFF9C4] to-[#FFF59D]'
                  } rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300`}>
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <p className="text-gray-700 mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-xl text-[#2E7D32] italic mt-8">
                We ensure accountability, impact, and visibility for every rupee invested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Collaborations */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Past & Ongoing Collaborations</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Partnerships with local government programs for soil and water conservation",
                "Joint projects with academic institutions for agri-tech innovation",
                "CSR-driven women's entrepreneurship training programs",
                "Rural awareness campaigns supported by industry partners"
              ].map((item, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#2E7D32]' : 'text-[#E65100]'} flex-shrink-0 mt-1`} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-gray-600 mt-8">
              Our collaborative approach ensures that CSR funds directly reach communities in need.
            </p>
          </div>
        </div>
      </section>

      {/* How to Collaborate */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How to Collaborate</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { step: "1", desc: "Connect with our CSR Team — discuss your organization's goals and focus areas" },
                { step: "2", desc: "Co-design a project proposal with measurable outcomes" },
                { step: "3", desc: "Finalize agreement and begin implementation with regular monitoring" },
                { step: "4", desc: "Receive periodic reports, data insights, and impact documentation" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border-3 border-[#4CAF50] hover:shadow-2xl hover:scale-105 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 border-3 border-[#FFA726] shadow-xl hover:shadow-2xl hover:shadow-[#FFA726]/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Our CSR Team</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-[#2E7D32]" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:csr@neomicsresearch.org" className="text-[#2E7D32] font-medium hover:underline">
                        csr@neomicsresearch.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-[#F57F17]" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:+919845673910" className="text-[#F57F17] font-medium hover:underline">
                        +91 9845673910
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Legal & Compliance Information</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Neomics Research Foundation is a registered non-profit organization eligible to receive CSR and foreign contributions.
            </p>

            <div className="bg-white rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-gray-600 mb-1">CIN</p>
                  <p className="text-lg font-bold text-gray-900">U73100AS2014NPL011785</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-gray-600 mb-1">FCRA</p>
                  <p className="text-lg font-bold text-gray-900">020840035</p>
                </div>
                <div className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-gray-600 mb-1">Registered Date</p>
                  <p className="text-lg font-bold text-gray-900">14 February 2014</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="text-lg font-bold text-gray-900">Guwahati, Assam</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-700 mb-2"><strong>Registered Address:</strong></p>
                <p className="text-gray-700">
                  House No.-5, Rasaraj Bye Lane, Basistapur Lane 2,<br />
                  Hatigaon, Guwahati, Assam – 781028
                </p>
              </div>

              <p className="text-center text-gray-600 mt-8">
                💬 All partnerships comply with the Companies Act, 2013 (CSR Provisions) and FCRA norms.
              </p>
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
          <p className="text-3xl italic mb-6">"Let's cultivate sustainability — together." 🌾</p>
          <h2 className="text-4xl font-bold mb-6">Join hands with Neomics Research Foundation</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            to create scalable and sustainable impact for India's farmers and environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300">
                💚 Partner With Us
              </Button>
            </Link>
                <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">📊 Download CSR Proposal Deck</span>
              </Button>
            <Link to={createPageUrl("Contact")}>
                <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💬 Contact Our CSR Team</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
