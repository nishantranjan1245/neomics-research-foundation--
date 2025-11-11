import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Shield, TrendingUp, Users, Check, Sparkles, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const donationBenefits = [
  {
    icon: Heart,
    title: "Direct Impact",
    description: "Every rupee directly supports farmers and sustainable agriculture projects",
    color: "from-[#66BB6A]/10 to-[#4CAF50]/10"
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Donations processed through trusted payment gateways with full transparency",
    color: "from-[#FFEB3B]/10 to-[#FDD835]/10"
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "Your contribution creates long-term change in rural communities",
    color: "from-[#7CB342]/10 to-[#8BC34A]/10"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Join a network of changemakers supporting agricultural innovation",
    color: "from-[#FFA726]/10 to-[#FB8C00]/10"
  },
];

export default function DonateSection() {
  const cardsRef = useRef([]);
  const benefitsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('donate-animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    [...cardsRef.current, ...benefitsRef.current].forEach((el, index) => {
      if (el) {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#F9FAF4] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl shadow-[#FFA726]/50 inline-flex items-center gap-2 mb-4 animate-pulse hover:scale-110 transition-all duration-300 cursor-pointer">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                Support Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Help Us Grow a{" "}
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent animate-shimmer">
                  Sustainable Future
                </span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Your donation empowers farmers, supports research, and builds sustainable communities. 
                Together, we can transform agriculture and improve rural livelihoods across India.
              </p>
            </div>

            {/* Impact Examples */}
            <div className="grid grid-cols-2 gap-4">
              <div ref={el => cardsRef.current[0] = el} className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-2xl p-6 border-3 border-[#4CAF50] shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-110 hover:-rotate-2 transition-all duration-500 opacity-0 translate-y-[30px] cursor-pointer group">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#2E7D32] to-[#388E3C] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">₹500</div>
                <p className="text-sm text-gray-700 font-medium">Trains one farmer in sustainable practices</p>
              </div>

              <div ref={el => cardsRef.current[1] = el} className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-2xl p-6 border-3 border-[#FFEB3B] shadow-xl hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-110 hover:rotate-2 transition-all duration-500 opacity-0 translate-y-[30px] cursor-pointer group">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#F57F17] to-[#FFA726] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">₹1,000</div>
                <p className="text-sm text-gray-700 font-medium">Provides soil testing for a small farm</p>
              </div>

              <div ref={el => cardsRef.current[2] = el} className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-2xl p-6 border-3 border-[#7CB342] shadow-xl hover:shadow-2xl hover:shadow-[#7CB342]/50 hover:scale-110 hover:-rotate-2 transition-all duration-500 opacity-0 translate-y-[30px] cursor-pointer group">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#558B2F] to-[#689F38] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">₹2,500</div>
                <p className="text-sm text-gray-700 font-medium">Funds a field awareness program</p>
              </div>

              <div ref={el => cardsRef.current[3] = el} className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-2xl p-6 border-3 border-[#FFA726] shadow-xl hover:shadow-2xl hover:shadow-[#FFA726]/50 hover:scale-110 hover:rotate-2 transition-all duration-500 opacity-0 translate-y-[30px] cursor-pointer group">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#E65100] to-[#F57C00] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">₹5,000</div>
                <p className="text-sm text-gray-700 font-medium">Supports agricultural research</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-gradient-to-r from-[#66BB6A] to-[#4CAF50] hover:from-[#4CAF50] hover:to-[#43A047] text-white shadow-2xl shadow-[#4CAF50]/50 group transform hover:scale-110 transition-all duration-300 border-2 border-[#4CAF50] hover:rotate-1">
                  <Heart className="mr-2 w-5 h-5 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300" />
                  💚 Donate Now
                  <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                </Button>
              </Link>
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" variant="outline" className="border-2 border-[#4CAF50] text-[#2E7D32] hover:bg-[#4CAF50]/10 hover:border-[#388E3C] transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[#4CAF50]/50 group">
                  Learn More About Impact
                  <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Benefits Card */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-3 border-[#4CAF50] hover:shadow-[#4CAF50]/50 transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#4CAF50] animate-spin-slow" />
              Why Donate to Neomics?
            </h3>
            
            <div className="space-y-6 mb-8">
              {donationBenefits.map((benefit, index) => (
                <div key={index} ref={el => benefitsRef.current[index] = el} className="flex gap-4 opacity-0 translate-x-[30px] transition-all duration-700">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg border-2 border-[#4CAF50] hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer group`}>
                      <benefit.icon className="w-6 h-6 text-[#2E7D32] group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-2xl p-6 border-2 border-[#4CAF50] shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="font-bold text-gray-900 mb-4">Our Program Impact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Check className="w-5 h-5 text-[#2E7D32] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <span className="text-gray-700 font-medium">5,000+ farmers trained</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Check className="w-5 h-5 text-[#F57F17] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <span className="text-gray-700 font-medium">30+ villages reached</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Check className="w-5 h-5 text-[#558B2F] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <span className="text-gray-700 font-medium">20+ research projects completed</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="flex gap-3 mt-6 flex-wrap">
              <div className="bg-gradient-to-r from-[#66BB6A] to-[#4CAF50] text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-float border-2 border-[#4CAF50] hover:scale-110 transition-transform duration-300 cursor-pointer">
                🔒 Secure
              </div>
              <div className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-float border-2 border-[#FDD835] hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '0.5s' }}>
                💯 Transparent
              </div>
              <div className="bg-gradient-to-r from-[#7CB342] to-[#8BC34A] text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-float border-2 border-[#7CB342] hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '1s' }}>
                ✅ Tax Benefit
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .donate-animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
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