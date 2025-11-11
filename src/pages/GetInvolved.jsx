
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, GraduationCap, Handshake, Building, Heart, Target, Users, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const opportunities = [
  {
    icon: UserPlus,
    title: "Volunteer With Us",
    tagline: '"Be the change you want to see in the fields." 🌾',
    description: "Join our community of volunteers who actively participate in field programs, awareness campaigns, and research activities.",
    activities: [
      "Support farmer training programs",
      "Assist in soil and water conservation projects",
      "Help organize agricultural awareness camps",
      "Contribute skills in digital media, design, or education"
    ],
    details: "Duration: Short-term or project-based | Location: Guwahati and nearby rural areas",
    color: "from-lime-500 via-green-500 to-emerald-600",
    bgColor: "from-lime-50 to-green-50",
    cta: "Apply Now"
  },
  {
    icon: GraduationCap,
    title: "Internship Program",
    tagline: '"Experience the roots of innovation." 🌱',
    description: "Our internship program offers students and young professionals a chance to gain hands-on experience in agriculture, sustainability, and research.",
    activities: [
      "Field research methodology",
      "Community engagement",
      "Agricultural data collection",
      "Project reporting and impact assessment"
    ],
    details: "Open to: Students from agriculture, environment, social work, and development studies | Duration: 1–3 months",
    color: "from-cyan-500 via-sky-500 to-blue-600",
    bgColor: "from-cyan-50 to-sky-50",
    cta: "Apply for Internship"
  },
  {
    icon: Handshake,
    title: "CSR Collaboration",
    tagline: '"Partnering for a sustainable tomorrow." 🤝',
    description: "We collaborate with corporations and organizations that believe in sustainability and community-driven development. Through CSR partnerships, we co-create projects that directly impact rural livelihoods.",
    activities: [
      "Sustainable farming models",
      "Agri-innovation research",
      "Climate action and awareness",
      "Women empowerment programs",
      "Rural capacity-building initiatives"
    ],
    details: "Areas of Collaboration: Impact-driven projects aligned with your CSR goals",
    color: "from-fuchsia-500 via-purple-500 to-violet-600",
    bgColor: "from-fuchsia-50 to-purple-50",
    cta: "Partner With Us"
  },
  {
    icon: Heart,
    title: "Donate",
    tagline: '"Your support plants hope." 🌾',
    description: "Your contribution helps us conduct field research, train farmers, and expand our impact across rural India. Even a small donation can bring a big change in the life of a farmer.",
    activities: [
      "Secure payment via Razorpay / Stripe",
      "100% donations go to programs",
      "Tax benefits under 80G",
      "Registered NGO: CIN U73100AS2014NPL011785"
    ],
    details: "All donations are processed through secure payment gateways",
    color: "from-orange-500 via-amber-500 to-yellow-600",
    bgColor: "from-orange-50 to-amber-50",
    cta: "Donate Now"
  }
];

export default function GetInvolved() {
  useEffect(() => {
    document.title = "Get Involved | Neomics Research Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Ripple Effect */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-3.jpg"
            alt="Get Involved"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Ripple Circles */}
        <div className="hero-ripples">
          <div className="hero-ripple hero-ripple-1"></div>
          <div className="hero-ripple hero-ripple-2"></div>
          <div className="hero-ripple hero-ripple-3"></div>
          <div className="hero-ripple hero-ripple-4"></div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Hands Coming Together Effect */}
        <div className="hero-hands">
          <div className="hero-hand hero-hand-1">🤝</div>
          <div className="hero-hand hero-hand-2">🙌</div>
          <div className="hero-hand hero-hand-3">👐</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Join Our Mission</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">💚</span> Get Involved
          </h1>
          
          <p className="hero-subtitle">
            Neomics Research Foundation
          </p>
          
          <p className="hero-description">
            At Neomics Research Foundation, we believe that collective effort creates lasting change. Your time, 
            knowledge, or partnership can help farmers grow stronger, communities become sustainable, and agriculture 
            move toward a greener future.
          </p>
          
          <p className="hero-description-sub">
            Whether you're an individual, a student, or a corporate partner — there's a way for everyone to get 
            involved in our journey toward agricultural innovation and rural empowerment.
          </p>
        </div>

        <style>{`
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

          .hero-ripples {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-ripple {
            position: absolute;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            animation: hero-ripple-expand 4s ease-out infinite;
          }

          .hero-ripple-1 {
            width: 100px;
            height: 100px;
            animation-delay: 0s;
          }

          .hero-ripple-2 {
            width: 200px;
            height: 200px;
            animation-delay: 1s;
          }

          .hero-ripple-3 {
            width: 300px;
            height: 300px;
            animation-delay: 2s;
          }

          .hero-ripple-4 {
            width: 400px;
            height: 400px;
            animation-delay: 3s;
          }

          @keyframes hero-ripple-expand {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(3);
              opacity: 0;
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

          .hero-hands {
            position: absolute;
            inset: 0;
          }

          .hero-hand {
            position: absolute;
            font-size: 3rem;
            opacity: 0.5;
            animation: hero-hand-pulse 3s ease-in-out infinite;
          }

          .hero-hand-1 {
            top: 20%;
            left: 20%;
            animation-delay: 0s;
          }

          .hero-hand-2 {
            top: 30%;
            right: 25%;
            animation-delay: 1s;
          }

          .hero-hand-3 {
            bottom: 25%;
            left: 35%;
            animation-delay: 2s;
          }

          @keyframes hero-hand-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.3);
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
            margin: 0 auto 1rem;
            line-height: 1.8;
            animation: hero-description-fade 1s ease-out 0.6s forwards;
            opacity: 0;
          }

          @keyframes hero-description-fade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .hero-description-sub {
            font-size: 1.25rem;
            color: white;
            max-width: 900px;
            margin: 0 auto;
            line-height: 1.8;
            animation: hero-description-fade 1s ease-out 0.9s forwards;
            opacity: 0;
          }

          @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem; }
            .hero-subtitle { font-size: 1.5rem; }
            .hero-description, .hero-description-sub { font-size: 1rem; }
          }
        `}</style>
      </section>

      {/* Opportunities */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${opportunity.bgColor} rounded-3xl p-10 shadow-xl border-3 ${
                  index % 2 === 0 ? 'border-[#4CAF50]' : 'border-[#FFA726]'
                } hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500 group`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left - Icon & Title */}
                  <div className="lg:col-span-1">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${opportunity.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <opportunity.icon className="w-10 h-10 text-white group-hover:animate-bounce" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                    <p className="text-lg text-[#E65100] italic mb-6">{opportunity.tagline}</p>
                    <div className={`w-12 h-1 bg-gradient-to-r ${opportunity.color} rounded-full`}></div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {opportunity.description}
                    </p>

                    {/* Activities/Features List */}
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        {opportunity.title === "Donate" ? "✓" : "📋"} {opportunity.title === "Donate" ? "Benefits:" : "What you'll do / learn:"}
                      </h4>
                      <ul className="space-y-3">
                        {opportunity.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#2E7D32] text-xl flex-shrink-0">✓</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Details */}
                    <div className={`bg-gradient-to-r ${opportunity.color} rounded-2xl p-6 text-white shadow-lg`}>
                      <p className="text-white/95">{opportunity.details}</p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${opportunity.color} hover:opacity-90 text-white shadow-xl transform hover:scale-110 transition-all duration-300`}
                      >
                        {opportunity.cta} →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Partner Institutions & Networks</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We proudly work with academic institutions, government departments, and social organizations that share 
              our vision of sustainable rural growth.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
            <p className="text-lg text-gray-700 mb-6">
              If you're part of a university, research center, or CSR program — we welcome collaboration for:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <Target className="w-12 h-12 text-[#2E7D32] mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Joint Research Studies</h3>
                <p className="text-gray-600 text-sm">Collaborative agricultural and environmental research projects</p>
              </div>

              <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-12 h-12 text-[#F57F17] mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Student Training Modules</h3>
                <p className="text-gray-600 text-sm">Practical field experience and academic integration</p>
              </div>

              <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <Users className="w-12 h-12 text-[#E65100] mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Field Project Implementation</h3>
                <p className="text-gray-600 text-sm">On-ground program execution and community engagement</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                💬 Contact us at: <a href="mailto:info@neomicsresearch.org" className="text-[#F57F17] font-medium hover:underline">info@neomicsresearch.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get Involved */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Get Involved</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl border-3 border-[#4CAF50] hover:border-[#66BB6A] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 cursor-pointer group">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">🌱</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contribute to Innovation</h3>
              <p className="text-gray-600">Be part of sustainable farming innovations that change lives</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl border-3 border-[#FFEB3B] hover:border-[#FDD835] hover:-translate-y-3 hover:-rotate-2 transition-all duration-500 cursor-pointer group">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">👨‍🌾</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empower Communities</h3>
              <p className="text-gray-600">Help rural farmers and women entrepreneurs grow</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 transition-all duration-500 cursor-pointer group">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">📚</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Learn & Grow</h3>
              <p className="text-gray-600">Gain experience from real-world development projects</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 transition-all duration-500 cursor-pointer group">
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-300">🤝</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shape the Future</h3>
              <p className="text-gray-600">Be part of an organization transforming agriculture</p>
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
            Join our growing network of changemakers today
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Together, we can transform agriculture — one farmer, one field, one idea at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link to={createPageUrl("Volunteer")}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300"
              >
                💚 Become a Volunteer
              </Button>
            </Link>
            <Link to={createPageUrl("Internship")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg font-extrabold px-8 py-6 transform hover:scale-110 transition-all duration-300"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">🎓 Apply for Internship</span>
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
                <span className="text-white font-extrabold">💰 Donate Now</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
