import React, { useEffect } from "react";
import { Map, Compass, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const sitemapSections = [
  {
    title: "1. Home",
    icon: "🏠",
    links: [
      { name: "Home", path: "Home", desc: "Overview of our mission, featured programs, impact, and donation links" }
    ]
  },
  {
    title: "2. About Us",
    icon: "ℹ️",
    links: [
      { name: "About Us", path: "AboutUs", desc: "Our Story, Vision & Mission, Our Team, Legal Details" }
    ]
  },
  {
    title: "3. Programs",
    icon: "🌾",
    links: [
      { name: "Programs", path: "Programs" },
      { name: "Sustainable Farming", path: "SustainableFarming" },
      { name: "Agri-Tech & Research", path: "AgriTechResearch" },
      { name: "Farmer Training & Capacity Building", path: "FarmerTraining" },
      { name: "Soil & Water Conservation", path: "SoilWaterConservation" },
      { name: "Women in Agriculture", path: "WomenInAgriculture" },
      { name: "Youth for Sustainability", path: "YouthForSustainability" }
    ]
  },
  {
    title: "4. Research & Innovation",
    icon: "🔬",
    links: [
      { name: "Research & Innovation", path: "Research", desc: "Ongoing Projects, Publications & Reports, Research Partners, Innovation Initiatives" }
    ]
  },
  {
    title: "5. Get Involved",
    icon: "🤝",
    links: [
      { name: "Get Involved", path: "GetInvolved" },
      { name: "Volunteer", path: "Volunteer" },
      { name: "Internship", path: "Internship" },
      { name: "CSR Collaboration", path: "CSRCollaboration" },
      { name: "Partner With Us", path: "PartnerWithUs" }
    ]
  },
  {
    title: "6. Impact",
    icon: "📊",
    links: [
      { name: "Impact Overview", path: "Home", desc: "Farmers Reached, Villages Covered, Projects Completed, Research Outcomes, Success Stories" }
    ]
  },
  {
    title: "7. Updates",
    icon: "📰",
    links: [
      { name: "Updates", path: "Updates", desc: "News & Announcements, Success Stories, Events & Workshops, Media Coverage, Photo & Video Gallery" }
    ]
  },
  {
    title: "8. Donate",
    icon: "💚",
    links: [
      { name: "Donate", path: "Donate", desc: "Secure Online Donations (Razorpay / Stripe), Impact of Your Contribution, Transparency Commitment" }
    ]
  },
  {
    title: "9. Contact",
    icon: "📞",
    links: [
      { name: "Contact", path: "Contact", desc: "Contact Form, Office Address, Phone & Email, Location Map, Social Media Links" }
    ]
  },
  {
    title: "10. Legal & Policy Pages",
    icon: "📋",
    links: [
      { name: "Privacy Policy", path: "PrivacyPolicy" },
      { name: "Terms of Use", path: "TermsOfUse" },
      { name: "Refund & Cancellation Policy", path: "RefundPolicy" },
      { name: "Disclaimer", path: "Disclaimer" },
      { name: "Sitemap", path: "Sitemap" }
    ]
  }
];

const quickLinks = [
  { name: "Home", path: "Home" },
  { name: "About Us", path: "AboutUs" },
  { name: "Programs", path: "Programs" },
  { name: "Research", path: "Research" },
  { name: "Get Involved", path: "GetInvolved" },
  { name: "Updates", path: "Updates" },
  { name: "Contact", path: "Contact" },
  { name: "Donate", path: "Donate" }
];

export default function Sitemap() {
  useEffect(() => {
    document.title = "Sitemap | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Map Paths & Crops */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-20.jpg"
            alt="Sitemap"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Map Paths */}
        <div className="hero-paths">
          <svg className="hero-paths-svg" viewBox="0 0 600 400">
            <path className="hero-path hero-path-1" d="M 100 200 Q 200 100 300 200" stroke="rgba(255, 235, 59, 0.4)" strokeWidth="3" fill="none" />
            <path className="hero-path hero-path-2" d="M 300 200 Q 400 300 500 200" stroke="rgba(255, 235, 59, 0.4)" strokeWidth="3" fill="none" />
            <circle className="hero-marker" cx="100" cy="200" r="6" fill="rgba(255, 235, 59, 0.8)" />
            <circle className="hero-marker" cx="300" cy="200" r="6" fill="rgba(255, 235, 59, 0.8)" />
            <circle className="hero-marker" cx="500" cy="200" r="6" fill="rgba(255, 235, 59, 0.8)" />
          </svg>
        </div>

        {/* Crop Icons on Map */}
        <div className="hero-crops">
          <div className="crop crop-1">🌾</div>
          <div className="crop crop-2">🌱</div>
          <div className="crop crop-3">🌿</div>
          <div className="crop crop-4">🍃</div>
        </div>

        {/* Compass */}
        <div className="hero-compass">
          <div className="compass-ring"></div>
          <div className="compass-icon">🧭</div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Website Navigation</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">🗺️</span> Sitemap
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            Navigate through our website — explore all paths to sustainable agriculture.
          </p>
        </div>

        <style jsx>{`
          .hero-section {
            position: relative;
            min-height: 50vh;
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

          .hero-paths {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.6;
          }

          .hero-paths-svg {
            width: 100%;
            max-width: 600px;
          }

          .hero-path {
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            animation: hero-path-draw 5s ease-in-out infinite;
          }

          .hero-path-1 {
            animation-delay: 0s;
          }

          .hero-path-2 {
            animation-delay: 2s;
          }

          @keyframes hero-path-draw {
            to {
              stroke-dashoffset: 0;
            }
          }

          .hero-marker {
            animation: hero-marker-pulse 2s ease-in-out infinite;
          }

          @keyframes hero-marker-pulse {
            0%, 100% {
              r: 6;
              opacity: 0.8;
            }
            50% {
              r: 10;
              opacity: 1;
            }
          }

          .hero-crops {
            position: absolute;
            inset: 0;
          }

          .crop {
            position: absolute;
            font-size: 2rem;
            opacity: 0.6;
            animation: hero-crop-appear 4s ease-in-out infinite;
          }

          .crop-1 {
            top: 20%;
            left: 15%;
            animation-delay: 0s;
          }

          .crop-2 {
            top: 30%;
            right: 20%;
            animation-delay: 1s;
          }

          .crop-3 {
            bottom: 30%;
            left: 25%;
            animation-delay: 2s;
          }

          .crop-4 {
            bottom: 25%;
            right: 18%;
            animation-delay: 3s;
          }

          @keyframes hero-crop-appear {
            0%, 100% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.8;
            }
          }

          .hero-compass {
            position: absolute;
            top: 15%;
            right: 15%;
          }

          .compass-ring {
            width: 80px;
            height: 80px;
            border: 3px solid rgba(255, 235, 59, 0.4);
            border-radius: 50%;
            animation: hero-compass-spin 10s linear infinite;
          }

          .compass-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2.5rem;
          }

          @keyframes hero-compass-spin {
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

          .hero-content {
            position: relative;
            z-index: 10;
            max-width: 1280px;
            margin: 0 auto;
            padding: 4rem 1rem;
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
            font-size: 3rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1rem;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .hero-emoji {
            display: inline-block;
            animation: hero-emoji-bounce 2s ease-in-out infinite;
          }

          @keyframes hero-emoji-bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          .hero-subtitle {
            font-size: 1.5rem;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 1rem;
          }

          .hero-description {
            font-size: 1.25rem;
            color: white;
            font-style: italic;
            max-width: 800px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .hero-title { font-size: 2rem; }
            .hero-subtitle { font-size: 1.25rem; }
            .hero-description { font-size: 1rem; }
          }
        `}</style>
      </section>

      {/* Content */}
      <section className="py-20 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-2xl p-6 mb-8 border-3 border-[#4CAF50] text-center">
            <p className="text-gray-700 text-lg">
              <strong>Last Updated:</strong> November 02, 2025
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Welcome to the Sitemap of Neomics Research Foundation. This page provides a structured overview of all sections, pages, and resources available on our website. Use this guide to explore our work, learn about our programs, and connect with us for collaboration or support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sitemapSections.map((section, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg border-3 ${
                index % 3 === 0 ? 'border-[#4CAF50]' : index % 3 === 1 ? 'border-[#FFEB3B]' : 'border-[#FFA726]'
              } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={createPageUrl(link.path)}
                        className={`text-sm flex items-start gap-2 ${
                          index % 3 === 0 ? 'text-[#2E7D32] hover:text-[#1B5E20]' : 
                          index % 3 === 1 ? 'text-[#F57F17] hover:text-[#E65100]' : 
                          'text-[#E65100] hover:text-[#BF360C]'
                        } hover:underline transition-colors`}
                      >
                        <span>→</span>
                        <div>
                          <div className="font-medium">{link.name}</div>
                          {link.desc && <div className="text-xs text-gray-600 mt-1">{link.desc}</div>}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-3 border-[#7CB342] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#7CB342]">11.</span> Quick Links
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={createPageUrl(link.path)}
                  className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-lg p-4 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 border-2 border-[#4CAF50]"
                >
                  <p className="text-[#2E7D32] font-medium">{link.name}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-3 border-[#FFA726] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#FFA726]">12.</span> Social Media
            </h2>
            <p className="text-gray-700 mb-4 text-lg">Stay connected and follow our work:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-6 py-3 rounded-lg hover:scale-110 transition-transform duration-300">
                🌿 Facebook
              </a>
              <a href="#" className="bg-gradient-to-r from-[#F58529] to-[#DD2A7B] text-white px-6 py-3 rounded-lg hover:scale-110 transition-transform duration-300">
                📸 Instagram
              </a>
              <a href="#" className="bg-gradient-to-r from-[#0A66C2] to-[#004182] text-white px-6 py-3 rounded-lg hover:scale-110 transition-transform duration-300">
                💼 LinkedIn
              </a>
              <a href="#" className="bg-gradient-to-r from-[#000000] to-[#333333] text-white px-6 py-3 rounded-lg hover:scale-110 transition-transform duration-300">
                🐦 X / Twitter
              </a>
            </div>
          </div>

          {/* XML Sitemap */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-3 border-[#66BB6A] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#66BB6A]">13.</span> XML Sitemap (for Search Engines)
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              For SEO purposes, our automatically generated XML sitemap is available here:
            </p>
            <a href="/sitemap.xml" className="inline-block bg-gradient-to-r from-[#66BB6A] to-[#4CAF50] text-white px-8 py-4 rounded-lg hover:scale-110 transition-transform duration-300 font-medium">
              🔗 View XML Sitemap
            </a>
            <p className="text-gray-600 mt-4">
              This file helps search engines index all public-facing pages efficiently.
            </p>
          </div>

          {/* Footer Note */}
          <div className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] rounded-2xl p-8 text-white text-center">
            <p className="text-xl font-medium">
              🌾 Neomics Research Foundation is committed to transparency, accessibility, and collaboration. This sitemap is updated periodically to reflect new projects, pages, and initiatives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}