

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", path: "Home" },
  { name: "About Us", path: "AboutUs" },
  { name: "Programs", path: "Programs" },
  { name: "Research", path: "Research" },
  { name: "Get Involved", path: "GetInvolved", hasDropdown: true },
  { name: "Updates", path: "Updates" },
  { name: "Contact", path: "Contact" },
];

const getInvolvedItems = [
  { name: "Volunteer", path: "Volunteer" },
  { name: "Internship", path: "Internship" },
  { name: "CSR Collaboration", path: "CSRCollaboration" },
  { name: "Partner With Us", path: "PartnerWithUs" },
];

const programsLinks = [
  { name: "Sustainable Farming", path: "SustainableFarming" },
  { name: "Agri-Tech & Research", path: "AgriTechResearch" },
  { name: "Farmer Training", path: "FarmerTraining" },
  { name: "Soil & Water Conservation", path: "SoilWaterConservation" },
  { name: "Women in Agriculture", path: "WomenInAgriculture" },
  { name: "Youth for Sustainability", path: "YouthForSustainability" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "PrivacyPolicy" },
  { name: "Terms of Use", path: "TermsOfUse" },
  { name: "Refund & Cancellation Policy", path: "RefundPolicy" },
  { name: "Disclaimer", path: "Disclaimer" },
  { name: "Sitemap", path: "Sitemap" },
];

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  // Set favicon
  useEffect(() => {
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/png';
    favicon.rel = 'icon';
    favicon.href = '/image/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(favicon);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9] flex flex-col">
      {/* Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Now visible on mobile */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <img 
                src="/image/header-logo.png"
                alt="Neomics Research Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
              <div>
                <div className="font-bold text-base sm:text-xl bg-gradient-to-r from-[#558B2F] to-[#7CB342] bg-clip-text text-transparent">
                  Neomics Research
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name} className="relative group">
                    <div className="flex items-center">
                      <Link
                        to={createPageUrl(item.path)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          location.pathname === createPageUrl(item.path)
                            ? "text-[#558B2F] bg-gradient-to-r from-[#E8F5E9] to-[#C5E1A5]"
                            : "text-gray-700 hover:text-[#558B2F] hover:bg-gradient-to-r hover:from-[#E8F5E9] hover:to-[#C5E1A5]"
                        }`}
                      >
                        {item.name}
                      </Link>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            className={`p-2 ml-[-8px] rounded-lg hover:bg-gradient-to-r hover:from-[#E8F5E9] hover:to-[#C5E1A5] transition-all ${
                              location.pathname === createPageUrl(item.path)
                                ? "text-[#558B2F]"
                                : "text-gray-700 hover:text-[#558B2F]"
                            }`}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          {getInvolvedItems.map((subItem) => (
                            <DropdownMenuItem key={subItem.name} asChild>
                              <Link
                                to={createPageUrl(subItem.path)}
                                className="cursor-pointer"
                              >
                                {subItem.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.path)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      location.pathname === createPageUrl(item.path)
                        ? "text-[#558B2F] bg-gradient-to-r from-[#E8F5E9] to-[#C5E1A5]"
                        : "text-gray-700 hover:text-[#558B2F] hover:bg-gradient-to-r hover:from-[#E8F5E9] hover:to-[#C5E1A5]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Donate Button */}
            <div className="hidden lg:block">
              <Link to={createPageUrl("Donate")}>
                <Button className="bg-gradient-to-r from-[#558B2F] via-[#689F38] to-[#7CB342] hover:from-[#33691E] hover:via-[#558B2F] hover:to-[#689F38] text-white shadow-lg hover:shadow-xl transition-all">
                  💚 Donate
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <Link
                      to={createPageUrl(item.path)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        location.pathname === createPageUrl(item.path)
                          ? "text-[#558B2F] bg-gradient-to-r from-[#E8F5E9] to-[#C5E1A5]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-4 space-y-1 mt-1">
                      {getInvolvedItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={createPageUrl(subItem.path)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[#558B2F] hover:bg-[#E8F5E9] rounded-lg transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.path)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      location.pathname === createPageUrl(item.path)
                        ? "text-[#558B2F] bg-gradient-to-r from-[#E8F5E9] to-[#C5E1A5]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link to={createPageUrl("Donate")}>
                <Button className="w-full mt-3 bg-gradient-to-r from-[#558B2F] via-[#689F38] to-[#7CB342] hover:from-[#33691E] hover:via-[#558B2F] hover:to-[#689F38] text-white">
                  💚 Donate
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer with Agriculture Theme Colors */}
      <footer className="bg-gradient-to-br from-[#2E7D32] via-[#388E3C] to-[#4CAF50] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FFEB3B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#7CB342] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Section 1 - Logo & About */}
            <div className="lg:col-span-1">
              <Link to={createPageUrl("Home")} className="flex items-center gap-3 mb-4">
                <img 
                  src="/image/footer-logo.png"
                  alt="Neomics Research Logo"
                  className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-xl"
                />
                <div>
                  <div className="font-bold text-xl text-white">Neomics Research</div>
                </div>
              </Link>
              <p className="text-sm text-[#E8F5E9] leading-relaxed mt-4">
                Neomics Research Foundation is a non-profit organization dedicated to promoting
                sustainable agriculture, agri-tech research, and rural empowerment through
                innovation.
              </p>
            </div>

            {/* Section 2 & 3 - Quick Links and Programs SIDE BY SIDE on mobile */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                  <span className="text-[#FFEB3B]">🔗</span> Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to={createPageUrl("Home")}
                      className="text-sm hover:text-[#FFEB3B] transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span> Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={createPageUrl("AboutUs")}
                      className="text-sm hover:text-[#FFEB3B] transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span> About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={createPageUrl("Programs")}
                      className="text-sm hover:text-[#FFEB3B] transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span> Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={createPageUrl("Research")}
                      className="text-sm hover:text-[#FFEB3B] transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span> Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={createPageUrl("GetInvolved")}
                      className="text-sm hover:text-[#FFEB3B] transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span> Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={createPageUrl("Updates")}
                      className="text-sm hover:text-[#FFEB3B] transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span> Updates
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                  <span className="text-[#FFEB3B]">🌾</span> Programs
                </h3>
                <ul className="space-y-2 text-sm">
                  {programsLinks.map((program) => (
                    <li key={program.name}>
                      <Link 
                        to={createPageUrl(program.path)}
                        className="hover:text-[#FFEB3B] transition-colors cursor-pointer flex items-center gap-2 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">→</span> {program.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 4 - Contact & Social Media */}
            <div>
              <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                <span className="text-[#FFEB3B]">📞</span> Contact
              </h3>
              <div className="space-y-3 text-sm mb-6">
                <p className="flex items-start gap-2">
                  <span className="text-[#FFEB3B]">📍</span>
                  <span>
                    House No.-5, Rasaraj Bye Lane,
                    <br />
                    Hatigaon, Guwahati, Assam – 781028
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#FFEB3B]">📞</span>
                  <a href="tel:+919845673910" className="hover:text-[#FFEB3B] transition-colors">
                    +91 9845673910
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#FFEB3B]">✉️</span>
                  <a
                    href="mailto:info@neomicsresearch.org"
                    className="hover:text-[#FFEB3B] transition-colors break-all"
                  >
                    info@neomicsresearch.org
                  </a>
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-white mb-3">Follow Us:</p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 transform duration-300"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-[#2E7D32]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-[#7CB342] to-[#689F38] hover:from-[#689F38] hover:to-[#558B2F] rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 transform duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-[#9CCC65] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#7CB342] rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 transform duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#FBC02D] rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 transform duration-300"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-4 h-4 text-[#2E7D32]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#66BB6A]/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#E8F5E9]">
              <p>© 2014–2025 Neomics Research Foundation. All Rights Reserved.</p>
              <div className="flex flex-wrap justify-center gap-4">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <Link to={createPageUrl(link.path)} className="hover:text-[#FFEB3B] transition-colors">
                      {link.name}
                    </Link>
                    {index < legalLinks.length - 1 && <span>|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

