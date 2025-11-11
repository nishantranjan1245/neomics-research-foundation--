import React, { useEffect, useRef } from "react";
import { Users, MapPin, Award, FlaskConical, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const statistics = [
  {
    icon: Users,
    value: "10+",
    label: "Years of Dedicated Work",
    color: "from-[#66BB6A] to-[#4CAF50]",
    borderColor: "border-[#4CAF50]",
    glowColor: "shadow-[#4CAF50]/50"
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Farmers Trained & Empowered",
    color: "from-[#FFEB3B] to-[#FDD835]",
    borderColor: "border-[#FFEB3B]",
    glowColor: "shadow-[#FFEB3B]/50"
  },
  {
    icon: MapPin,
    value: "30+",
    label: "Villages Reached Across Assam",
    color: "from-[#7CB342] to-[#8BC34A]",
    borderColor: "border-[#7CB342]",
    glowColor: "shadow-[#7CB342]/50"
  },
  {
    icon: FlaskConical,
    value: "20+",
    label: "Research & Innovation Projects",
    color: "from-[#FFA726] to-[#FB8C00]",
    borderColor: "border-[#FFA726]",
    glowColor: "shadow-[#FFA726]/50"
  },
];

export default function ImpactSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stat-animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#AED581] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl inline-flex items-center gap-2 mb-4 border-2 border-white/30 hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Creating Real Change in Rural India
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto font-medium">
            Through research, innovation, and community collaboration, we're building a sustainable 
            agricultural future — one farmer, one village at a time.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-3 ${stat.borderColor} hover:bg-white/20 hover:border-white transition-all duration-500 hover:-translate-y-3 hover:rotate-3 hover:shadow-2xl ${stat.glowColor} opacity-0 scale-75 cursor-pointer`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                <stat.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>

              {/* Value */}
              <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-green-100 text-lg font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to={createPageUrl("AboutUs")}
            className="inline-flex items-center gap-2 text-white text-lg font-bold hover:text-[#FFEB3B] transition-colors group bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/50 hover:scale-110 transform transition-all duration-300 shadow-2xl cursor-pointer"
          >
            Learn More About Our Impact
            <svg
              className="w-5 h-5 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .stat-animate-in {
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}