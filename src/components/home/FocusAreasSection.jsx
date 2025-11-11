import React, { useEffect, useRef } from "react";
import { Sprout, Beaker, Users, Droplets, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

const focusAreas = [
  {
    icon: Sprout,
    title: "Sustainable Farming",
    description: "Promoting organic, climate-smart, and eco-friendly farming techniques.",
    color: "from-[#66BB6A] to-[#4CAF50]",
    glow: "group-hover:shadow-2xl group-hover:shadow-[#4CAF50]/50",
    border: "border-[#4CAF50] hover:border-[#66BB6A]",
    bg: "from-[#4CAF50]/5 to-[#66BB6A]/5"
  },
  {
    icon: Beaker,
    title: "Agri-Tech & Research",
    description: "Bridging science and agriculture through innovation and field studies.",
    color: "from-[#FFEB3B] to-[#FDD835]",
    glow: "group-hover:shadow-2xl group-hover:shadow-[#FFEB3B]/50",
    border: "border-[#FDD835] hover:border-[#FFEB3B]",
    bg: "from-[#FFEB3B]/5 to-[#FDD835]/5"
  },
  {
    icon: Users,
    title: "Farmer Training",
    description: "Empowering farmers with knowledge, skills, and modern practices.",
    color: "from-[#7CB342] to-[#8BC34A]",
    glow: "group-hover:shadow-2xl group-hover:shadow-[#7CB342]/50",
    border: "border-[#7CB342] hover:border-[#8BC34A]",
    bg: "from-[#7CB342]/5 to-[#8BC34A]/5"
  },
  {
    icon: Droplets,
    title: "Soil & Water Conservation",
    description: "Restoring natural resources for future generations.",
    color: "from-[#FFA726] to-[#FB8C00]",
    glow: "group-hover:shadow-2xl group-hover:shadow-[#FFA726]/50",
    border: "border-[#FFA726] hover:border-[#FB8C00]",
    bg: "from-[#FFA726]/5 to-[#FB8C00]/5"
  },
  {
    icon: GraduationCap,
    title: "Women & Youth Empowerment",
    description: "Building leadership and opportunities for inclusive agriculture.",
    color: "from-[#66BB6A] to-[#FFEB3B]",
    glow: "group-hover:shadow-2xl group-hover:shadow-[#66BB6A]/50",
    border: "border-[#66BB6A] hover:border-[#FFEB3B]",
    bg: "from-[#66BB6A]/5 to-[#FFEB3B]/5"
  },
];

export default function FocusAreasSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl shadow-[#FFA726]/50 inline-flex items-center gap-2 mb-4 animate-pulse hover:scale-110 transition-all duration-300 cursor-pointer">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            Our Focus Areas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent animate-shimmer">Work On</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            From sustainable farming to cutting-edge research, we work across multiple domains 
            to transform agriculture and empower rural communities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-3 ${area.border} hover:-translate-y-3 hover:rotate-1 ${area.glow} opacity-0 translate-y-[50px] cursor-pointer`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                <area.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2E7D32] transition-all duration-300">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {area.description}
              </p>

              {/* Decorative gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${area.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}

          {/* CTA Card */}
          <div ref={el => cardsRef.current[5] = el} className="relative bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-3xl p-8 shadow-2xl text-white overflow-hidden group hover:scale-105 hover:rotate-2 transition-all duration-500 opacity-0 translate-y-[50px] cursor-pointer">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
              <div className="text-5xl mb-4 animate-bounce group-hover:scale-125 transition-transform duration-300">🌾</div>
              <h3 className="text-2xl font-bold mb-3">
                Explore All Our Programs
              </h3>
              <p className="text-green-100 mb-6 leading-relaxed font-medium">
                Discover how we're transforming agriculture through research, innovation, and community action.
              </p>
              <Link to={createPageUrl("Programs")}>
                <Button 
                  size="lg"
                  className="bg-white text-[#2E7D32] hover:bg-green-50 shadow-2xl group transform hover:scale-110 transition-all duration-300"
                >
                  View All Programs
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
        }
      `}</style>
    </section>
  );
}