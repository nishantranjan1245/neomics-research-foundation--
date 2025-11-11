import React, { useEffect, useRef } from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import FocusAreasSection from "../components/home/FocusAreasSection";
import ImpactSection from "../components/home/ImpactSection";
import DonateSection from "../components/home/DonateSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Home() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Set page title
    document.title = "Neomics Research Foundation | Empowering Agriculture Through Innovation";
    
    // Intersection Observer for scroll animations
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all sections with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* About */}
      <div className="scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
        <AboutSection />
      </div>

      {/* Focus Areas */}
      <div className="scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
        <FocusAreasSection />
      </div>

      {/* Research & Innovation Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#7CB342] hover:border-[#8BC34A] transition-all hover:scale-105 hover:rotate-2 transform duration-500 hover:shadow-[#7CB342]/50">
                <img
                  src="/image/image.jpg"
                  alt="Agricultural Research"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl shadow-[#FFA726]/50 inline-flex items-center gap-2 animate-pulse hover:scale-110 transition-transform duration-300">
                <span className="animate-spin-slow">🔬</span>
                Research & Innovation
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Bridging <span className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] bg-clip-text text-transparent">Science</span> and{" "}
                <span className="bg-gradient-to-r from-[#558B2F] to-[#689F38] bg-clip-text text-transparent">Farming</span>
              </h2>

              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                Our research programs integrate cutting-edge technology with traditional agricultural wisdom. 
                From soil analysis to climate-smart solutions, we create practical innovations that farmers 
                can implement in their fields.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl p-6 border-3 border-[#7CB342] shadow-lg hover:shadow-2xl hover:shadow-[#7CB342]/50 hover:scale-110 hover:-rotate-3 transition-all duration-500 cursor-pointer group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#2E7D32] to-[#388E3C] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">20+</div>
                  <p className="text-sm text-gray-900 font-bold">Research Projects Completed</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFFDE7] to-[#FFF9C4] rounded-xl p-6 border-3 border-[#FFA726] shadow-lg hover:shadow-2xl hover:shadow-[#FFA726]/50 hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#F57F17] to-[#FFA726] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">15+</div>
                  <p className="text-sm text-gray-900 font-bold">Innovation Pilots Launched</p>
                </div>
              </div>

              <Link to={createPageUrl("Research")}>
                <Button size="lg" className="bg-gradient-to-r from-[#66BB6A] to-[#4CAF50] hover:from-[#4CAF50] hover:to-[#43A047] text-white shadow-2xl shadow-[#4CAF50]/50 group transform hover:scale-110 transition-all duration-300 border-2 border-[#4CAF50] hover:rotate-1">
                  <span className="text-white font-bold">View Our Research Projects</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <div className="scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
        <ImpactSection />
      </div>

      {/* Get Involved Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl shadow-[#FFA726]/50 inline-flex items-center gap-2 mb-4 animate-pulse hover:scale-110 transition-transform duration-300">
              <span className="animate-bounce">🤝</span>
              Get Involved
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the <span className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] bg-clip-text text-transparent">Movement</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
              There are many ways to contribute to our mission. Whether through volunteering, 
              internships, or partnerships — your involvement makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Volunteer */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Users className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2E7D32] transition-colors">Volunteer</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                Join our field programs and make a hands-on impact in rural communities.
              </p>
              <Link to={createPageUrl("Volunteer")}>
                <Button variant="outline" className="w-full border-3 border-[#7CB342] text-[#2E7D32] hover:bg-[#7CB342]/10 hover:border-[#8BC34A] transform hover:scale-105 transition-all duration-300 group font-bold">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            {/* Internship */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFA726] to-[#FB8C00] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Award className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#F57F17] transition-colors">Internship</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                Gain valuable experience in sustainable agriculture and research.
              </p>
              <Link to={createPageUrl("Internship")}>
                <Button variant="outline" className="w-full border-3 border-[#FFA726] text-[#F57F17] hover:bg-[#FFA726]/10 hover:border-[#FB8C00] transform hover:scale-105 transition-all duration-300 group font-bold">
                  Apply Now 
                  <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            {/* CSR */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-3 border-[#8BC34A] hover:border-[#9CCC65] hover:-translate-y-3 hover:rotate-2 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7CB342] to-[#8BC34A] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#558B2F] transition-colors">CSR Collaboration</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                Partner with us to create sustainable development initiatives.
              </p>
              <Link to={createPageUrl("CSRCollaboration")}>
                <Button variant="outline" className="w-full border-3 border-[#8BC34A] text-[#558B2F] hover:bg-[#8BC34A]/10 hover:border-[#9CCC65] transform hover:scale-105 transition-all duration-300 group font-bold">
                  Partner With Us 
                  <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            {/* Donate */}
            <div className="group bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-3xl p-8 shadow-2xl text-white hover:-translate-y-3 hover:scale-105 hover:shadow-[#4CAF50]/50 transition-all duration-500 cursor-pointer border-3 border-[#4CAF50]">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <span className="text-3xl group-hover:animate-bounce">💚</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Donate</h3>
              <p className="text-green-50 mb-6 leading-relaxed font-medium">
                Support our mission with a secure donation and help us grow.
              </p>
              <Link to={createPageUrl("Donate")}>
                <Button className="w-full bg-white text-[#2E7D32] hover:bg-green-50 transform hover:scale-105 transition-all duration-300 group font-bold">
                  Donate Now 
                  <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl shadow-[#FFA726]/50 inline-flex items-center gap-2 mb-4 animate-pulse hover:scale-110 transition-transform duration-300">
                <span className="animate-bounce">📰</span>
                Latest Updates
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                News & <span className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] bg-clip-text text-transparent">Success Stories</span>
              </h2>
            </div>
            <Link to={createPageUrl("Updates")}>
              <Button variant="outline" className="border-3 border-[#7CB342] text-[#2E7D32] hover:bg-[#7CB342]/10 hover:border-[#8BC34A] hidden sm:flex transform hover:scale-105 transition-all duration-300 group font-bold">
                View All Updates
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Update 1 */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-3 border-[#7CB342] hover:border-[#8BC34A] hover:-translate-y-3 hover:rotate-2 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#2E7D32] group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm text-[#2E7D32] font-bold">October 2024</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2E7D32] transition-colors">
                🎉 500+ Farmers Trained in Sustainable Practices
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Our latest training program reached over 500 farmers across 10 villages, 
                introducing organic farming and water conservation techniques.
              </p>
            </div>

            {/* Update 2 */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-3 border-[#FFA726] hover:border-[#FB8C00] hover:-translate-y-3 hover:-rotate-2 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#F57F17] group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm text-[#F57F17] font-bold">September 2024</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F57F17] transition-colors">
                🔬 New Soil Health Research Project Launched
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                We've initiated a comprehensive soil health study across rural Assam to improve 
                crop yields and restore degraded farmland.
              </p>
            </div>

            {/* Update 3 */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-3 border-[#8BC34A] hover:border-[#9CCC65] hover:-translate-y-3 hover:rotate-2 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#558B2F] group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                <span className="text-sm text-[#558B2F] font-bold">August 2024</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#558B2F] transition-colors">
                👩‍🌾 Women's Entrepreneurship Program Success
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                50 women farmers completed our entrepreneurship training, launching micro-enterprises 
                in organic produce and value-added products.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to={createPageUrl("Updates")}>
              <Button variant="outline" className="border-3 border-[#7CB342] text-[#2E7D32] hover:bg-[#7CB342]/10 hover:border-[#8BC34A] transform hover:scale-105 transition-all duration-300 group font-bold">
                View All Updates
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Donate */}
      <div className="scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
        <DonateSection />
      </div>

      <style jsx>{`
        .scroll-animate.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}