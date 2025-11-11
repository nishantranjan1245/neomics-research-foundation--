
import React, { useEffect } from "react";
import { Calendar, Newspaper, TrendingUp, Image, Video, Award, Sparkles } from "lucide-react"; // Added Sparkles
import { Button } from "@/components/ui/button";

const newsHighlights = [
  {
    date: "November 2025",
    title: 'Launch of "Project GreenSoil"',
    description: "A regional soil health improvement initiative in Assam.",
    color: "from-lime-400 via-green-500 to-emerald-600"
  },
  {
    date: "October 2025",
    title: "Farmer Training Workshop",
    description: "Climate-resilient crop planning held at Hatigaon, Guwahati.",
    color: "from-orange-400 via-amber-500 to-yellow-600"
  },
  {
    date: "September 2025",
    title: "Partnership with Agri-Tech Startups",
    description: "Signed to promote digital tools in farming.",
    color: "from-cyan-400 via-sky-500 to-blue-600"
  },
  {
    date: "August 2025",
    title: "Water for Growth Project",
    description: "Successful completion of irrigation model trials.",
    color: "from-fuchsia-400 via-purple-500 to-violet-600"
  }
];

const successStories = [
  {
    icon: "🌾",
    title: "How Organic Composting Increased Crop Yields",
    subtitle: "Hatigaon Village Success Story",
    color: "from-lime-50 to-green-50"
  },
  {
    icon: "👩‍🌾",
    title: "Empowering Women Farmers",
    subtitle: "Through Agri-Entrepreneurship Training",
    color: "from-fuchsia-50 to-purple-50"
  },
  {
    icon: "💧",
    title: "Rainwater Harvesting Revives Dry Lands",
    subtitle: "Kamrup District Transformation",
    color: "from-cyan-50 to-sky-50"
  }
];

const featuredReports = [
  "Annual Soil Fertility Assessment — Assam Region",
  "Smart Irrigation Model Evaluation Report",
  "Organic Transition Research Summary",
  "Climate Impact Study (2024–2025)"
];

const upcomingEvents = [
  {
    date: "January 2026",
    title: "Farmer Innovation Workshop",
    subtitle: '"Technology in Traditional Agriculture"'
  },
  {
    date: "February 2026",
    title: "Youth for Sustainable Agriculture Camp",
    subtitle: "Engaging the next generation"
  },
  {
    date: "March 2026",
    title: "Regional Conference",
    subtitle: "On Soil Health & Sustainability"
  }
];

const mediaMentions = [
  {
    source: "The Assam Tribune",
    title: "Neomics drives awareness on climate-smart agriculture"
  },
  {
    source: "Doordarshan Northeast",
    title: "Coverage on Soil Conservation Workshop"
  },
  {
    source: "AgriPost India",
    title: "Empowering small farmers through research innovation"
  }
];

export default function Updates() {
  useEffect(() => {
    document.title = "Updates | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Newspaper Stack Effect */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-7.jpg"
            alt="Latest Updates"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Newspaper Stack Animation */}
        <div className="hero-papers">
          <div className="hero-paper hero-paper-1"></div>
          <div className="hero-paper hero-paper-2"></div>
          <div className="hero-paper hero-paper-3"></div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* News Icons Flying */}
        <div className="hero-news-icons">
          <div className="hero-news-icon hero-news-icon-1">📰</div>
          <div className="hero-news-icon hero-news-icon-2">📢</div>
          <div className="hero-news-icon hero-news-icon-3">📡</div>
          <div className="hero-news-icon hero-news-icon-4">📝</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" /> {/* Changed icon to Sparkles */}
            <span className="font-bold">Latest News & Stories</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">📰</span> Updates
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            Stay informed about the latest activities, events, and achievements from Neomics Research Foundation. 
            From community farming initiatives to innovative research findings — our updates reflect the progress 
            we're making together toward sustainable agriculture and empowered rural communities.
          </p>
          
          <p className="hero-quote">
            "Real change grows from the ground up — and every update tells that story."
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
            padding: 2rem 0;
          }

          .hero-bg {
            position: absolute;
            inset: 0;
            z-index: 0; /* Ensure background is behind other elements */
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
            background: linear-gradient(135deg, rgba(46, 125, 50, 0.95), rgba(56, 142, 60, 0.92), rgba(76, 175, 80, 0.88)); /* Updated color */
          }

          .hero-papers {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1; /* Above bg, below content */
          }

          .hero-paper {
            position: absolute;
            width: 200px;
            height: 280px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            animation: hero-paper-stack 6s ease-in-out infinite;
          }

          .hero-paper-1 {
            transform: rotate(-5deg);
            animation-delay: 0s;
          }

          .hero-paper-2 {
            transform: rotate(3deg);
            animation-delay: 2s;
          }

          .hero-paper-3 {
            transform: rotate(-2deg);
            animation-delay: 4s;
          }

          @keyframes hero-paper-stack {
            0%, 100% {
              transform: translateY(0) rotate(-5deg);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-20px) rotate(0deg);
              opacity: 0.6;
            }
          }

          .hero-blobs {
            position: absolute;
            inset: 0;
            overflow: hidden;
            z-index: 2; /* Above pattern, below content */
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
            background: linear-gradient(135deg, #7CB342, #9CCC65); /* Kept some original green, added from outline */
            top: 10%;
            left: 10%;
          }

          .hero-blob-2 {
            width: 500px;
            height: 500px;
            background: linear-gradient(135deg, #FFEB3B, #FDD835); /* Added from outline */
            bottom: 10%;
            right: 10%;
            animation-delay: 2s;
          }

          .hero-blob-3 {
            width: 300px;
            height: 300px;
            background: linear-gradient(135deg, #4CAF50, #66BB6A); /* Added from outline */
            top: 50%;
            left: 50%;
            animation-delay: 4s;
          }

          @keyframes hero-blob-float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          
          /* Removed hero-particles CSS */

          .hero-news-icons {
            position: absolute;
            inset: 0;
            z-index: 3; /* Above blobs, below content */
          }

          .hero-news-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.4;
            animation: hero-news-fly 10s ease-in-out infinite;
          }

          .hero-news-icon-1 {
            top: 15%;
            left: 12%;
            animation-delay: 0s;
          }

          .hero-news-icon-2 {
            top: 25%;
            right: 18%;
            animation-delay: 2.5s;
          }

          .hero-news-icon-3 {
            bottom: 20%;
            left: 25%;
            animation-delay: 5s;
          }

          .hero-news-icon-4 {
            bottom: 30%;
            right: 15%;
            animation-delay: 7.5s;
          }

          @keyframes hero-news-fly {
            0%, 100% {
              transform: translateX(0) translateY(0) rotate(0deg);
              opacity: 0.4;
            }
            50% {
              transform: translateX(30px) translateY(-30px) rotate(15deg);
              opacity: 0.7;
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
            background: linear-gradient(135deg, #FFA726, #FB8C00); /* Updated color */
            color: white;
            padding: 12px 24px;
            border-radius: 50px;
            box-shadow: 0 10px 40px rgba(255, 167, 38, 0.5); /* Updated shadow color */
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
            margin: 0 auto 1.5rem;
            line-height: 1.8;
            animation: hero-description-fade 1s ease-out 0.6s forwards;
            opacity: 0;
          }

          @keyframes hero-description-fade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .hero-quote {
            font-size: 1.75rem; /* Updated font size */
            color: white;
            font-style: italic;
            margin-top: 1.5rem;
            animation: hero-quote-fade 1s ease-out 0.9s forwards;
            opacity: 0;
          }

          @keyframes hero-quote-fade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem; }
            .hero-subtitle { font-size: 1.5rem; }
            .hero-description { font-size: 1rem; }
            .hero-quote { font-size: 1.125rem; } /* Updated font size in media query */
          }
        `}</style>
      </section>

      {/* Latest News & Announcements */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] bg-clip-text text-transparent">News & Announcements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep track of the foundation's ongoing work and upcoming milestones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {newsHighlights.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer hover:scale-105 hover:rotate-1 duration-500"
              >
                <div className={`h-48 bg-gradient-to-br ${news.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all"></div>
                  <Newspaper className="relative z-10 w-16 h-16 text-white opacity-70 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[#F57F17] font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2E7D32] transition-colors">
                    📢 {news.title}
                  </h3>
                  <p className="text-gray-600">
                    {news.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-3 border-[#FFA726] text-[#E65100] hover:bg-[#FFA726]/10 transform hover:scale-110 transition-all duration-300"
            >
              🔗 Read More → Full News Section
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-2xl text-[#F57F17] italic mb-6">
              "Every field has a story, and every story begins with hope."
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We document inspiring journeys of farmers, women, and youth who have transformed their lives through 
              sustainable farming practices supported by Neomics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${story.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group cursor-pointer transform hover:-translate-y-2 hover:rotate-2 duration-500 border-3 ${
                  index === 0 ? 'border-[#4CAF50]' : index === 1 ? 'border-[#FFA726]' : 'border-[#66BB6A]'
                }`}
              >
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">{story.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-700 mb-6">{story.subtitle}</p>
                <div className="flex items-center text-[#2E7D32] font-medium group-hover:gap-2 transition-all">
                  Read Story →
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-3 border-[#4CAF50] text-[#2E7D32] hover:bg-[#4CAF50]/10 transform hover:scale-110 transition-all duration-300"
            >
              🔗 Read All Stories → Success Stories Page
            </Button>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Research Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research and field experiments produce valuable insights for the agricultural community. Through this 
              section, we share key findings, publications, and data summaries from our ongoing projects.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50] max-w-4xl mx-auto hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Reports:</h3>
            <div className="space-y-4">
              {featuredReports.map((report, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl hover:shadow-md hover:scale-105 transition-all cursor-pointer duration-300">
                  <TrendingUp className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-900">{report}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#66BB6A] to-[#4CAF50] hover:from-[#4CAF50] hover:to-[#43A047] text-white shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                🔗 Download Reports → Research Publications Page
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Workshops */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Events & Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We conduct training programs, awareness drives, and rural innovation events across Assam and nearby regions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50] hover:border-[#66BB6A]' : 'border-[#FFEB3B] hover:border-[#FDD835]'
                } hover:-translate-y-3 hover:rotate-2 duration-500 cursor-pointer`}
              >
                <div className="flex items-center gap-2 text-[#F57F17] font-medium mb-4">
                  <Calendar className="w-5 h-5" />
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 italic">{event.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] hover:from-[#FB8C00] hover:to-[#F57C00] text-white shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              🔗 Register for Events → Events Page
            </Button>
          </div>
        </div>
      </section>

      {/* Photo & Video Gallery */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Photo & Video Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse of our work in the fields, training sessions, and community programs. Visual storytelling showcasing 
              farmer engagement, research in action, and project outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-12 text-center shadow-lg hover:shadow-2xl transition-all border-3 border-[#4CAF50] hover:scale-105 hover:rotate-2 duration-500 cursor-pointer">
              <Image className="w-20 h-20 text-[#2E7D32] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Photo Gallery</h3>
              <p className="text-gray-600 mb-6">View our collection of field work, training sessions, and community events</p>
              <Button variant="outline" className="border-3 border-[#4CAF50] text-[#2E7D32] hover:bg-[#4CAF50]/10 transform hover:scale-105 transition-all duration-300">
                📷 View Gallery
              </Button>
            </div>

            <div className="bg-white rounded-3xl p-12 text-center shadow-lg hover:shadow-2xl transition-all border-3 border-[#FFA726] hover:scale-105 hover:-rotate-2 duration-500 cursor-pointer">
              <Video className="w-20 h-20 text-[#E65100] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Video Gallery</h3>
              <p className="text-gray-600 mb-6">Watch videos documenting our projects, success stories, and farmer testimonials</p>
              <Button variant="outline" className="border-3 border-[#FFA726] text-[#E65100] hover:bg-[#FFA726]/10 transform hover:scale-105 transition-all duration-300">
                📹 Watch Videos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Media Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Neomics Research Foundation's work has been featured in regional and national publications highlighting 
              its impact on rural sustainability and agri-tech development.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border-3 border-[#FFA726] max-w-4xl mx-auto hover:shadow-2xl hover:shadow-[#FFA726]/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Mentions:</h3>
            <div className="space-y-6">
              {mediaMentions.map((mention, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-xl hover:shadow-md hover:scale-105 transition-all cursor-pointer duration-300">
                  <Award className="w-8 h-8 text-[#E65100] flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{mention.source}</div>
                    <p className="text-gray-700">📰 {mention.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-[#FFA726] text-[#E65100] hover:bg-[#FFA726]/10 transform hover:scale-110 transition-all duration-300"
              >
                🔗 View Media Mentions → Media Page
              </Button>
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
            Follow our journey toward sustainable growth
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            And be part of the movement that's reshaping agriculture in India
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300"
            >
              💚 Subscribe to Newsletter
            </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">🔗 Follow on Social Media</span>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
