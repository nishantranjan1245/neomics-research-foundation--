import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/image/home-hero-image.jpg"
          alt="Golden agricultural fields at sunset"
          className="w-full h-full object-cover hero-image"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/95 via-[#388E3C]/92 to-[#4CAF50]/88"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 hero-pattern"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
        
        {/* Floating particles */}
        <div className="hero-particle hero-particle-1"></div>
        <div className="hero-particle hero-particle-2"></div>
        <div className="hero-particle hero-particle-3"></div>
        <div className="hero-particle hero-particle-4"></div>
        <div className="hero-particle hero-particle-5"></div>
        
        {/* Leaf particles */}
        <div className="hero-leaf hero-leaf-1">🟢</div>
        <div className="hero-leaf hero-leaf-2">🔆</div>
        <div className="hero-leaf hero-leaf-3">🫧</div>
        <div className="hero-leaf hero-leaf-4">🟢</div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          {/* Sparkle Badge */}
          <div className="hero-badge">
            <Sparkles className="w-5 h-5 hero-sparkle" />
            <span className="font-bold">🌾 Transforming Agriculture Since 2014 🌾</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight hero-title">
            <span className="hero-emoji">🌿</span> Innovating Agriculture.{" "}
            <span className="hero-gradient-text hero-gradient-1">
              Empowering Farmers.
            </span>{" "}
            <span className="hero-gradient-text hero-gradient-2">
              Sustaining the Future.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed hero-description font-medium">
            Neomics Research Foundation is a non-profit organization dedicated to transforming 
            rural communities through sustainable farming, agricultural research, and farmer 
            empowerment programs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 hero-buttons">
            <Link to={createPageUrl("Programs")}>
              <Button
                size="lg"
                className="hero-btn hero-btn-primary"
              >
                <Zap className="mr-2 w-5 h-5 hero-btn-icon" />
                Explore Our Programs
                <ArrowRight className="ml-2 w-5 h-5 hero-btn-arrow" />
              </Button>
            </Link>

            <Link to={createPageUrl("Donate")}>
              <Button
                size="lg"
                className="hero-btn hero-btn-secondary"
              >
                <span className="hero-btn-emoji">💚</span>
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-5xl mx-auto hero-stats">
            <div className="hero-stat-card hero-stat-1">
              <div className="hero-stat-icon">🌱</div>
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">Years of Work</div>
            </div>

            <div className="hero-stat-card hero-stat-2">
              <div className="hero-stat-icon">👨‍🌾</div>
              <div className="hero-stat-number">5,000+</div>
              <div className="hero-stat-label">Farmers Trained</div>
            </div>

            <div className="hero-stat-card hero-stat-3">
              <div className="hero-stat-icon">🏘️</div>
              <div className="hero-stat-number">30+</div>
              <div className="hero-stat-label">Villages Reached</div>
            </div>

            <div className="hero-stat-card hero-stat-4">
              <div className="hero-stat-icon">🔬</div>
              <div className="hero-stat-number">20+</div>
              <div className="hero-stat-label">Research Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-border">
          <div className="hero-scroll-dot"></div>
        </div>
      </div>

      <style jsx>{`
        /* Hero Image Animation */
        .hero-image {
          animation: hero-zoom 20s ease-in-out infinite alternate;
        }

        @keyframes hero-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        /* Background Pattern */
        .hero-pattern {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(139, 195, 74, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(104, 159, 56, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(124, 179, 66, 0.2) 0%, transparent 50%);
          animation: hero-pattern-move 15s ease-in-out infinite;
        }

        @keyframes hero-pattern-move {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 20px);
          }
        }

        /* Animated Blobs */
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
          animation-delay: 0s;
        }

        .hero-blob-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #558B2F, #689F38);
          bottom: 10%;
          right: 10%;
          animation-delay: 2s;
        }

        .hero-blob-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #8BC34A, #AED581);
          top: 50%;
          left: 50%;
          animation-delay: 4s;
        }

        @keyframes hero-blob-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        /* Floating Particles */
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          animation: hero-particle-float 8s ease-in-out infinite;
        }

        .hero-particle-1 {
          width: 6px;
          height: 6px;
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .hero-particle-2 {
          width: 4px;
          height: 4px;
          top: 60%;
          left: 70%;
          animation-delay: 2s;
        }

        .hero-particle-3 {
          width: 8px;
          height: 8px;
          top: 40%;
          right: 20%;
          animation-delay: 4s;
        }

        .hero-particle-4 {
          width: 5px;
          height: 5px;
          bottom: 30%;
          left: 40%;
          animation-delay: 1s;
        }

        .hero-particle-5 {
          width: 7px;
          height: 7px;
          bottom: 20%;
          right: 30%;
          animation-delay: 3s;
        }

        @keyframes hero-particle-float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-40px) translateX(20px);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) translateX(-20px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-60px) translateX(10px);
            opacity: 0.9;
          }
        }

        /* Floating Leaf Animations */
        .hero-leaf {
          position: absolute;
          font-size: 2rem;
          opacity: 0.4;
          animation: hero-leaf-fall 15s ease-in-out infinite;
        }

        .hero-leaf-1 {
          top: -10%;
          left: 15%;
          animation-delay: 0s;
        }

        .hero-leaf-2 {
          top: -10%;
          right: 25%;
          animation-delay: 3s;
        }

        .hero-leaf-3 {
          top: -10%;
          left: 45%;
          animation-delay: 6s;
        }

        .hero-leaf-4 {
          top: -10%;
          right: 15%;
          animation-delay: 9s;
        }

        @keyframes hero-leaf-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

        /* Badge Animation */
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
          backdrop-filter: blur(10px);
        }

        .hero-badge:hover {
          transform: scale(1.1);
          box-shadow: 0 15px 50px rgba(255, 167, 38, 0.7);
        }

        @keyframes hero-badge-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .hero-sparkle {
          animation: hero-sparkle-spin 3s linear infinite;
        }

        @keyframes hero-sparkle-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Title Animation */
        .hero-title {
          animation: hero-title-fade 1s ease-out forwards;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        @keyframes hero-title-fade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-emoji {
          display: inline-block;
          animation: hero-emoji-bounce 2s ease-in-out infinite;
        }

        @keyframes hero-emoji-bounce {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
        }

        .hero-gradient-text {
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: hero-gradient-shift 4s ease infinite;
        }

        .hero-gradient-1 {
          background-image: linear-gradient(135deg, #FFEB3B, #FDD835, #FBC02D, #F9A825);
        }

        .hero-gradient-2 {
          background-image: linear-gradient(135deg, #C5E1A5, #AED581, #9CCC65, #8BC34A);
          animation-delay: 0.5s;
        }

        @keyframes hero-gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Description Animation */
        .hero-description {
          animation: hero-description-fade 1s ease-out 0.3s forwards;
          opacity: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        @keyframes hero-description-fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Buttons Animation */
        .hero-buttons {
          animation: hero-buttons-fade 1s ease-out 0.6s forwards;
          opacity: 0;
        }

        @keyframes hero-buttons-fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-btn {
          font-size: 18px;
          padding: 24px 32px;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .hero-btn-primary {
          background: linear-gradient(135deg, #FFEB3B, #FDD835, #FBC02D);
          color: #33691E;
          box-shadow: 0 10px 30px rgba(255, 235, 59, 0.5);
          border: 3px solid rgba(255, 255, 255, 0.3);
        }

        .hero-btn-primary:hover {
          transform: scale(1.1) rotate(2deg);
          box-shadow: 0 15px 40px rgba(255, 235, 59, 0.7);
          background: linear-gradient(135deg, #FDD835, #FBC02D, #F9A825);
        }

        .hero-btn-secondary {
          background: linear-gradient(135deg, #66BB6A, #4CAF50, #43A047);
          color: white;
          box-shadow: 0 10px 30px rgba(76, 175, 80, 0.5);
          border: 3px solid rgba(255, 255, 255, 0.3);
        }

        .hero-btn-secondary:hover {
          transform: scale(1.1) rotate(-2deg);
          box-shadow: 0 15px 40px rgba(76, 175, 80, 0.7);
          background: linear-gradient(135deg, #4CAF50, #43A047, #388E3C);
        }

        .hero-btn-icon {
          transition: all 0.3s ease;
        }

        .hero-btn-primary:hover .hero-btn-icon {
          transform: rotate(12deg) scale(1.3);
        }

        .hero-btn-arrow {
          transition: all 0.3s ease;
        }

        .hero-btn-primary:hover .hero-btn-arrow {
          transform: translateX(5px) scale(1.2);
        }

        .hero-btn-emoji {
          display: inline-block;
          transition: all 0.3s ease;
        }

        .hero-btn-secondary:hover .hero-btn-emoji {
          transform: scale(1.3);
        }

        /* Stats Animation */
        .hero-stats {
          animation: hero-stats-fade 1s ease-out 0.9s forwards;
          opacity: 0;
        }

        @keyframes hero-stats-fade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-stat-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 24px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .hero-stat-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 15px 50px rgba(139, 195, 74, 0.4);
          border-color: rgba(255, 255, 255, 0.5);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15));
        }

        .hero-stat-1:hover {
          transform: translateY(-10px) scale(1.05) rotate(-3deg);
        }

        .hero-stat-2:hover {
          transform: translateY(-10px) scale(1.05) rotate(3deg);
        }

        .hero-stat-3:hover {
          transform: translateY(-10px) scale(1.05) rotate(-3deg);
        }

        .hero-stat-4:hover {
          transform: translateY(-10px) scale(1.05) rotate(3deg);
        }

        .hero-stat-icon {
          font-size: 3rem;
          margin-bottom: 12px;
          animation: hero-stat-icon-bounce 2s ease-in-out infinite;
        }

        @keyframes hero-stat-icon-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .hero-stat-card:hover .hero-stat-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .hero-stat-number {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(135deg, #FFFFFF, #FFEB3B);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .hero-stat-card:hover .hero-stat-number {
          transform: scale(1.15);
        }

        .hero-stat-label {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1rem;
          font-weight: 600;
        }

        /* Scroll Indicator */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          animation: hero-scroll-bounce 2s ease-in-out infinite;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-scroll-indicator:hover {
          transform: translateX(-50%) scale(1.3);
        }

        @keyframes hero-scroll-bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }

        .hero-scroll-border {
          width: 28px;
          height: 46px;
          border: 3px solid rgba(255, 255, 255, 0.7);
          border-radius: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 8px;
        }

        .hero-scroll-dot {
          width: 6px;
          height: 12px;
          background: linear-gradient(180deg, #FFEB3B, #4CAF50);
          border-radius: 10px;
          animation: hero-scroll-move 2s ease-in-out infinite;
        }

        @keyframes hero-scroll-move {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-stat-number {
            font-size: 2rem;
          }

          .hero-stat-icon {
            font-size: 2rem;
          }

          .hero-blob {
            width: 250px !important;
            height: 250px !important;
          }

          .hero-leaf {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}