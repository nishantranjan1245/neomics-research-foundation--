
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Globe, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Neomics Research Foundation";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero - UNIQUE DESIGN with Message Bubbles */}
      <section className="hero-section">
        <div className="hero-bg">
          <img
            src="/image/image-8.jpg"
            alt="Contact Us"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Chat Bubbles Animation */}
        <div className="hero-bubbles">
          <div className="hero-bubble hero-bubble-1"></div>
          <div className="hero-bubble hero-bubble-2"></div>
          <div className="hero-bubble hero-bubble-3"></div>
          <div className="hero-bubble hero-bubble-4"></div>
          <div className="hero-bubble hero-bubble-5"></div>
        </div>

        <div className="hero-blobs">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        {/* Contact Icons Floating */}
        <div className="hero-contact-icons">
          <div className="hero-contact-icon hero-contact-icon-1">📧</div>
          <div className="hero-contact-icon hero-contact-icon-2">📞</div>
          <div className="hero-contact-icon hero-contact-icon-3">📍</div>
          <div className="hero-contact-icon hero-contact-icon-4">💬</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="font-bold">Connect With Us</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-emoji">📞</span> Contact Us — Neomics Research Foundation
          </h1>
          
          <p className="hero-subtitle">
            Overview
          </p>
          
          <p className="hero-description">
            We'd love to hear from you! Whether you're a farmer, researcher, student, or organization looking to 
            collaborate — our team is here to connect, support, and guide you.
          </p>
          
          <p className="hero-description-sub">
            Reach out to us for any queries, partnership opportunities, volunteering, or donation-related discussions.
          </p>
          
          <p className="hero-quote">
            "Let's work together to make agriculture more sustainable, innovative, and inclusive."
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

          .hero-bubbles {
            position: absolute;
            inset: 0;
          }

          .hero-bubble {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            animation: hero-bubble-float 8s ease-in-out infinite;
          }

          .hero-bubble-1 {
            width: 80px;
            height: 80px;
            top: 20%;
            left: 15%;
            animation-delay: 0s;
          }

          .hero-bubble-2 {
            width: 120px;
            height: 120px;
            top: 40%;
            right: 20%;
            animation-delay: 1.5s;
          }

          .hero-bubble-3 {
            width: 60px;
            height: 60px;
            bottom: 30%;
            left: 25%;
            animation-delay: 3s;
          }

          .hero-bubble-4 {
            width: 100px;
            height: 100px;
            top: 60%;
            right: 30%;
            animation-delay: 4.5s;
          }

          .hero-bubble-5 {
            width: 90px;
            height: 90px;
            bottom: 20%;
            left: 40%;
            animation-delay: 6s;
          }

          @keyframes hero-bubble-float {
            0%, 100% {
              transform: translateY(0) scale(1);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-30px) scale(1.1);
              opacity: 0.5;
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

          .hero-contact-icons {
            position: absolute;
            inset: 0;
          }

          .hero-contact-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.5;
            animation: hero-icon-bounce 4s ease-in-out infinite;
          }

          .hero-contact-icon-1 {
            top: 18%;
            left: 12%;
            animation-delay: 0s;
          }

          .hero-contact-icon-2 {
            top: 28%;
            right: 18%;
            animation-delay: 1s;
          }

          .hero-contact-icon-3 {
            bottom: 22%;
            left: 22%;
            animation-delay: 2s;
          }

          .hero-contact-icon-4 {
            bottom: 32%;
            right: 15%;
            animation-delay: 3s;
          }

          @keyframes hero-icon-bounce {
            0%, 100% {
              transform: translateY(0) scale(1);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-20px) scale(1.2);
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
            margin: 0 auto 1.5rem;
            line-height: 1.8;
            animation: hero-description-fade 1s ease-out 0.9s forwards;
            opacity: 0;
          }

          .hero-quote {
            font-size: 1.5rem;
            color: white;
            font-style: italic;
            margin-top: 1.5rem;
            animation: hero-quote-fade 1s ease-out 1.2s forwards;
            opacity: 0;
          }

          @keyframes hero-quote-fade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .hero-title { font-size: 2rem; }
            .hero-subtitle { font-size: 1.5rem; }
            .hero-description, .hero-description-sub { font-size: 1rem; }
            .hero-quote { font-size: 1.125rem; }
          }
        `}</style>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gradient-to-br from-[#F9FBE7] via-[#F0F4C3] to-[#E8F5E9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 transition-all duration-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-2 text-lg">We'd love to hear from you!</p>
              <p className="text-gray-600 mb-8">
                Please fill out the form below and our team will get back to you within 2–3 working days.
              </p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Enter your full name" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (optional)
                  </label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="What is your message about?" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message / Query <span className="text-red-500">*</span>
                  </label>
                  <Textarea placeholder="Tell us how we can help..." rows={6} required />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#66BB6A] to-[#4CAF50] hover:from-[#4CAF50] hover:to-[#43A047] text-white text-lg py-6 shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Submit Message
                </Button>
              </form>

              {submitted && (
                <div className="mt-6 p-4 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] rounded-xl border-2 border-[#4CAF50] animate-pulse">
                  <p className="text-sm text-gray-900 text-center font-medium">
                    ✓ Thank you for reaching out to Neomics Research Foundation. Our team will respond to your message soon.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-lg border-3 border-[#4CAF50] hover:shadow-2xl hover:shadow-[#4CAF50]/50 hover:scale-105 hover:rotate-1 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">📍 Registered Office</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Neomics Research Foundation<br />
                      House No.-5, Rasaraj Bye Lane,<br />
                      Basistapur Lane 2, Hatigaon,<br />
                      Guwahati, Assam – 781028, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-lg border-3 border-[#FFEB3B] hover:shadow-2xl hover:shadow-[#FFEB3B]/50 hover:scale-105 hover:-rotate-1 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#F57F17]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">📞 Phone</h3>
                    <a href="tel:+919845673910" className="text-gray-700 hover:text-[#F57F17] transition-colors text-lg">
                      +91 9845673910
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-lg border-3 border-[#7CB342] hover:shadow-2xl hover:shadow-[#7CB342]/50 hover:scale-105 hover:rotate-1 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#558B2F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">✉️ Email</h3>
                    <a
                      href="mailto:info@neomicsresearch.org"
                      className="text-gray-700 hover:text-[#558B2F] transition-colors text-lg"
                    >
                      info@neomicsresearch.org
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-lg border-3 border-[#FFA726] hover:shadow-2xl hover:shadow-[#FFA726]/50 hover:scale-105 hover:-rotate-1 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#E65100]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">🌐 Website</h3>
                    <a
                      href="http://www.neomicsresearch.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#E65100] transition-colors text-lg"
                    >
                      www.neomicsresearch.org
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-lg border-3 border-[#66BB6A] hover:shadow-2xl hover:shadow-[#66BB6A]/50 hover:scale-105 hover:rotate-1 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">🕒 Working Hours</h3>
                    <p className="text-gray-700">
                      Monday – Saturday: 10:00 AM to 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Collaboration & Media Inquiries */}
              <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-2xl p-8 shadow-lg border-3 border-[#4CAF50] hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration & Media Inquiries</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>For partnership proposals, CSR collaborations, and media coverage requests:</strong><br />
                    📧 <a href="mailto:collaborate@neomicsresearch.org" className="text-[#2E7D32] hover:underline font-medium">collaborate@neomicsresearch.org</a>
                  </p>
                  <p>
                    <strong>For internship or volunteer inquiries:</strong><br />
                    📧 <a href="mailto:opportunities@neomicsresearch.org" className="text-[#2E7D32] hover:underline font-medium">opportunities@neomicsresearch.org</a>
                  </p>
                </div>
              </div>

              {/* Connect With Us */}
              <div className="bg-gradient-to-br from-[#FFA726] to-[#FB8C00] rounded-2xl p-8 text-white shadow-2xl border-3 border-[#FFA726]">
                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                <p className="text-orange-100 mb-6 leading-relaxed font-medium">Follow our journey, get updates on new projects, and join the conversation on social media</p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-125 duration-300"
                    aria-label="Facebook"
                  >
                    <span className="text-xl">🌿</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-125 duration-300"
                    aria-label="Instagram"
                  >
                    <span className="text-xl">📸</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-125 duration-300"
                    aria-label="LinkedIn"
                  >
                    <span className="text-xl">💼</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-125 duration-300"
                    aria-label="Twitter/X"
                  >
                    <span className="text-xl">🐦</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7CB342] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFA726] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Location Map</h2>
            <p className="text-xl text-gray-600">
              📍 Neomics Research Foundation, Hatigaon, Guwahati, Assam
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl border-3 border-[#4CAF50]">
            <div className="rounded-2xl overflow-hidden h-[500px] shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5649157544744!2d91.76!3d26.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEwJzEyLjAiTiA5McKwNDUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Hatigaon+Guwahati+Assam+India"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Neomics Research Foundation Location"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Neomics+Research+Foundation+House+No+5+Rasaraj+Bye+Lane+Hatigaon+Guwahati+Assam+781028+India" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="border-3 border-[#4CAF50] text-[#2E7D32] hover:bg-[#4CAF50]/10 transform hover:scale-110 transition-all duration-300 font-bold text-lg px-8 py-6"
                >
                  <MapPin className="mr-2 w-5 h-5" />
                  View on Google Maps →
                </Button>
              </a>
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
            "Together, we can grow a sustainable future — one seed at a time."
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to={createPageUrl("Volunteer")} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] text-gray-900 shadow-2xl text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300 font-extrabold"
              >
                <span className="text-gray-900 font-extrabold">💚 Volunteer with Us</span>
              </Button>
            </Link>
            <Link to={createPageUrl("CSRCollaboration")} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300 font-extrabold"
                style={{ borderColor: 'white' }}
              >
                <span className="text-white font-extrabold">💼 CSR Collaboration</span>
              </Button>
            </Link>
            <Link to={createPageUrl("Donate")} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[3px] !border-white bg-transparent hover:bg-white/20 text-lg px-8 py-6 transform hover:scale-110 transition-all duration-300 font-extrabold"
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
