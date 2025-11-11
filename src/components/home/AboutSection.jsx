import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images Grid */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {/* Top Left Image - Farmer on Tractor (Green border) */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[5px] border-[#7CB342] hover:border-[#8BC34A] hover:scale-105 transition-all duration-500 hover:rotate-2 hover:shadow-[#7CB342]/50 group">
                <img
                  src="/image/about-section-1.jpg"
                  alt="Farmer on tractor"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Top Right Image - Agricultural Research (Yellow border) */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[5px] border-[#FDD835] hover:border-[#FFEB3B] hover:scale-105 transition-all duration-500 hover:-rotate-2 hover:shadow-[#FDD835]/50 group">
                <img
                  src="/image/about-section-2.png"
                  alt="Agricultural research"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Bottom Left Image - Crops Growing (Green border) */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[5px] border-[#8BC34A] hover:border-[#9CCC65] hover:scale-105 transition-all duration-500 hover:-rotate-2 hover:shadow-[#8BC34A]/50 group">
                <img
                  src="/image/about-section-3.png"
                  alt="Crops growing"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Bottom Right Image - Agricultural Farmland (Orange border) */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[5px] border-[#FFA726] hover:border-[#FB8C00] hover:scale-105 transition-all duration-500 hover:rotate-2 hover:shadow-[#FFA726]/50 group">
                <img
                  src="/image/about-section-4.png"
                  alt="Agricultural farmland"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* About Us Badge */}
            <div className="inline-block">
              <span className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl shadow-[#FFA726]/50 inline-flex items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer">
                <Sparkles className="w-4 h-4" />
                About Us
              </span>
            </div>
            
            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
                Neomics Research Foundation
              </h2>
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2E7D32] to-[#388E3C] bg-clip-text text-transparent">
                Since 2014
              </p>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4">
              <p className="text-base text-gray-800 leading-relaxed">
                We are a non-profit organization dedicated to transforming rural communities through sustainable farming, agricultural research, and farmer empowerment programs.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                Our work spans sustainable agriculture, agri-tech innovation, soil and water conservation, women's empowerment, and youth leadership in farming communities across India.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {/* CIN Card - Light Green */}
              <div className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-[#7CB342]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500 cursor-pointer">
                <div className="text-xs text-[#2E7D32] font-bold mb-2 uppercase tracking-wider">CIN</div>
                <div className="text-sm font-bold text-gray-900">U73100AS2014NPL011785</div>
              </div>

              {/* FCRA Card - Light Green */}
              <div className="bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-[#7CB342]/50 hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer">
                <div className="text-xs text-[#2E7D32] font-bold mb-2 uppercase tracking-wider">FCRA</div>
                <div className="text-sm font-bold text-gray-900">020840035</div>
              </div>

              {/* Registered Date Card - Light Yellow */}
              <div className="bg-gradient-to-br from-[#FFFDE7] to-[#FFF9C4] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-[#FFA726]/50 hover:scale-105 hover:-rotate-2 transition-all duration-500 cursor-pointer">
                <div className="text-xs text-[#F57F17] font-bold mb-2 uppercase tracking-wider">Registered Date</div>
                <div className="text-sm font-bold text-gray-900">14 Feb 2014</div>
              </div>

              {/* Location Card - Light Green/Yellow */}
              <div className="bg-gradient-to-br from-[#F9FBE7] to-[#F0F4C3] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-[#8BC34A]/50 hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer">
                <div className="text-xs text-[#558B2F] font-bold mb-2 uppercase tracking-wider">Location</div>
                <div className="text-sm font-bold text-gray-900">Guwahati, Assam</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to={createPageUrl("AboutUs")}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#66BB6A] to-[#4CAF50] hover:from-[#4CAF50] hover:to-[#43A047] text-white shadow-2xl shadow-[#4CAF50]/50 group transform hover:scale-110 transition-all duration-300"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}