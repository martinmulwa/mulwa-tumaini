/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ArrowRight, Star, Check, Globe, Shield, Wallet, Clock, ArrowRightLeft, Sparkles, MessageSquare, ChevronLeft, ChevronRight, Laptop, ExternalLink } from "lucide-react";
import { servicesCatalog } from "../data/servicesCatalog";
import { portfolioProjects } from "../data/portfolioData";
import { Testimonial } from "../types";

export const heroSlides = [
  {
    title: "KRA Tax & eCitizen Portals",
    desc: "Speedy portal assistance for individual iTax returns filing, eTIMS onboarding, and business registrations anywhere in Nairobi.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1400&auto=format&fit=crop",
    pill: "GOVERNMENT PORTALS",
    tagLine: "KRA iTax + eCitizen Support",
    stat: "100% compliant filings",
    floatingLabel: "KRA Success ✓"
  },
  {
    title: "High-Volume Print & Binding",
    desc: "Academic thesis hardcover bindings with gold embossing, dual duplex photocopies, and high-DPI document printing.",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1400&auto=format&fit=crop",
    pill: "PRINTING & BINDING",
    tagLine: "Gold Foil spine engraving",
    stat: "Completed in 24-hour cycle",
    floatingLabel: "Bound thesis ✓"
  },
  {
    title: "Web & Graphic Design Hub",
    desc: "Custom corporate website design, fast speed portals, e-commerce storefronts, professional logo designs, wedding invites, and layout flyer posters.",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1400&auto=format&fit=crop",
    pill: "SOFTWARE & CREATIVE GRAPHICS",
    tagLine: "High-end layout & code integrations",
    stat: "Turn-key business launch structures",
    floatingLabel: "Designs Approved ✓"
  },
  {
    title: "Fast Internet Workstations",
    desc: "200 Mbps fiber network browsing, document scanning archives, and expert cyber attendants on-call daily.",
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=1400&auto=format&fit=crop",
    pill: "CYBER CAFÉ STATION",
    tagLine: "High speed web desk access",
    stat: "Private USB connections",
    floatingLabel: "Fiber Enabled ✓"
  }
];

interface HomeViewProps {
  onNavigate: (view: string, filterCategory?: string) => void;
  id?: string;
}

export default function HomeView({ onNavigate, id = "home-view" }: HomeViewProps) {
  const [metric1, setMetric1] = useState(0);
  const [metric2, setMetric2] = useState(0);
  const [metric3, setMetric3] = useState(90);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect (6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Animate metrics on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setMetric1((prev) => (prev < 800 ? Math.min(prev + 40, 800) : 800));
      setMetric2((prev) => (prev < 12 ? prev + 1 : 12));
      setMetric3((prev) => (prev < 99 ? prev + 1 : 99));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Get exactly 6 popular services for the 3x2 grid
  const previewServices = servicesCatalog.filter((s) =>
    ["kra-services", "document-printing", "internet-browsing", "cv-resume-writing", "id-card-printing", "bulk-printing-packages"].includes(s.id)
  );

  // High-quality illustration mapping for popular services
  const serviceCardImages: Record<string, string> = {
    "kra-services": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    "document-printing": "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop",
    "internet-browsing": "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop",
    "cv-resume-writing": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop",
    "id-card-printing": "https://images.unsplash.com/photo-1612815154858-60aa4c59eae6?q=80&w=600&auto=format&fit=crop",
    "bulk-printing-packages": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=600&auto=format&fit=crop"
  };

  // Homepage 4 showcase website projects (2x2 grid)
  const previewProjects = portfolioProjects.slice(0, 4);

  const testimonials: Testimonial[] = [
    {
      id: "test-1",
      name: "Caleb Omondi",
      role: "Logistics Manager, Ongata Rongai",
      rating: 5,
      quote: "Tumaini Tech designed and integrated our Chama's automatic M-Pesa contribution tracker! Parents easily pay contributions via mobile money and download reports. They are true tech professionals.",
      avatarInitials: "CO"
    },
    {
      id: "test-2",
      name: "Nelly Cherotich",
      role: "Treasurer, Rongai Sacco",
      rating: 5,
      quote: "Our new e-commerce storefront is amazing. Customers browse our catalog and checkout directly on WhatsApp and M-Pesa. Tumaini delivered a beautiful website on-time and was very supportive.",
      avatarInitials: "NC"
    },
    {
      id: "test-3",
      name: "Abdi Ibrahim",
      role: "SME Owner, Rongai Rd",
      rating: 5,
      quote: "They built our clinic's patient booking website. Very clear consultation packages and fully responsive across smartphones. Skip the amateurs, let Tumaini design your business web layouts!",
      avatarInitials: "AI"
    }
  ];

  const trustedBrands = [
    { name: "Safaricom M-Pesa Agent", tag: "M-PESA", accent: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Kenya Revenue Authority", tag: "KRA iTax", accent: "text-rose-600 bg-rose-50 border-rose-200" },
    { name: "eCitizen Portal Desk", tag: "eCitizen", accent: "text-blue-600 bg-blue-50 border-blue-200" },
    { name: "Equity Agent Network", tag: "EQUITY", accent: "text-amber-850 bg-amber-50 border-amber-200" },
    { name: "NTSA TIMS Registry", tag: "NTSA", accent: "text-sky-600 bg-sky-50 border-sky-200" },
    { name: "DCI Good Conduct", tag: "DCI", accent: "text-slate-600 bg-slate-50 border-slate-200" },
    { name: "Nairobi County Licenses", tag: "NCC", accent: "text-cyan-600 bg-cyan-50 border-cyan-200" }
  ];

  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth">
      {/* 5.1 Full-Width Background Slider Hero Section */}
      <section className="relative min-h-[640px] md:min-h-[720px] flex items-center justify-center bg-[#070B19] border-b border-[#EAECEF]/10 overflow-hidden text-white pt-16 pb-20 select-none">
        {/* Absolute Background Image under overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSlides[currentSlide].imageUrl}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover opacity-30 transition-all duration-1000 ease-out transform scale-100 filter brightness-95"
            referrerPolicy="no-referrer"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/85 to-[#0F172A]/70" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 relative z-2">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            {/* Dynamic Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1997E6]/10 border border-[#1997E6]/30 py-2 px-4 text-xs font-black tracking-widest uppercase text-[#1997E6] bg-slate-900/60 backdrop-blur-md rounded">
              <Sparkles className="w-4 h-4 text-[#1997E6] animate-pulse" />
              <span>{heroSlides[currentSlide].pill}</span>
            </div>

            {/* Dynamic Large Heading */}
            <h1 className="font-heading font-black text-4xl md:text-7xl leading-[1.05] tracking-tight text-white max-w-3xl drop-shadow-md">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Dynamic Slider Description */}
            <p className="text-slate-200 text-base md:text-xl leading-relaxed max-w-2xl drop-shadow-sm font-medium">
              {heroSlides[currentSlide].desc}
            </p>

            {/* CTA Option Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <button
                onClick={() => onNavigate("services")}
                className="bg-[#1997E6] hover:bg-[#147ec2] text-white font-heading text-sm font-bold tracking-wider uppercase px-8 py-4.5 cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(25,151,230,0.3)] hover:scale-[1.01] transition-all"
                style={{ borderRadius: "4px" }}
              >
                Our Services Catalogue
                <ArrowRight className="w-4 h-4 animate-ping" />
              </button>
              <a
                href="https://wa.me/254759607619?text=Hello%20Tumaini%20Cyber,%20I'd%2520like%2520to%2520enquire%252520about%25252520your%2525252520services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading text-sm font-bold tracking-wider uppercase px-8 py-4.5 cursor-pointer flex items-center justify-center gap-2 backdrop-blur-md hover:scale-[1.01] transition-all"
                style={{ borderRadius: "4px" }}
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                WhatsApp Live Helpline
              </a>
            </div>

            {/* Live Counter Metrics block */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-700/50 max-w-2xl">
              <div>
                <div className="font-heading font-black text-[#1997E6] text-2xl md:text-4xl tracking-tight leading-none">
                  {metric1}+
                </div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1.5 block">
                  Clients Served
                </div>
              </div>
              <div>
                <div className="font-heading font-black text-[#1997E6] text-2xl md:text-4xl tracking-tight leading-none">
                  {metric2}+ Years
                </div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1.5 block">
                  Hub Longevity
                </div>
              </div>
              <div>
                <div className="font-heading font-black text-[#25D366] text-2xl md:text-4xl tracking-tight leading-none">
                  7:00 AM - 12:00 AM
                </div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1.5 block text-left">
                  Open Everyday
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lateral Drag Chevron Controls */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white border border-white/10 cursor-pointer hidden lg:flex items-center justify-center transition-all z-10"
          aria-label="Previous home slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white border border-white/10 cursor-pointer hidden lg:flex items-center justify-center transition-all z-10"
          aria-label="Next home slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dynamic Navigation Dots Pagination */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                currentSlide === idx ? "bg-[#1997E6] w-8" : "bg-white/40 hover:bg-white/60 w-2"
              }`}
              aria-label={`Slide target ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Authorized Agent & Partners Strip */}
      <section className="bg-[#EAECEF]/40 py-8 border-b border-[#EAECEF] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-center font-heading text-xs uppercase tracking-widest font-black text-[#64748B] mb-5">
            Authorized Agent & Service Desk
          </p>

          {/* Infinite Horizontal Marquee */}
          <div className="relative w-full flex overflow-x-hidden">
            <div className="flex gap-12 text-sm md:text-base font-bold text-slate-400 font-heading tracking-wide py-2 uppercase animate-marquee whitespace-nowrap">
              {trustedBrands.map((brand, i) => (
                <div key={i} className="inline-flex items-center gap-2.5 mx-4 px-4 py-2.5 bg-white border border-[#EAECEF] hover:border-[#1997E6] transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.03)]" style={{ borderRadius: "6px" }}>
                  <span className={`px-2 py-0.5 text-[9px] font-black tracking-wider uppercase border rounded ${brand.accent}`}>
                    {brand.tag}
                  </span>
                  <span className="text-xs font-bold text-[#1E293B] normal-case tracking-tight">{brand.name}</span>
                </div>
              ))}
              {/* Duplicated for loop */}
              {trustedBrands.map((brand, i) => (
                <div key={`dup-${i}`} className="inline-flex items-center gap-2.5 mx-4 px-4 py-2.5 bg-white border border-[#EAECEF] hover:border-[#1997E6] transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.03)]" style={{ borderRadius: "6px" }}>
                  <span className={`px-2 py-0.5 text-[9px] font-black tracking-wider uppercase border rounded ${brand.accent}`}>
                    {brand.tag}
                  </span>
                  <span className="text-xs font-bold text-[#1E293B] normal-case tracking-tight">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5.1 Services Preview Section (with background image integration) */}
      <section className="py-24 border-b border-[#EAECEF] relative overflow-hidden bg-white">
        {/* Subtle background image of professional workspace */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
            alt="Office background"
            className="w-full h-full object-cover opacity-[0.03] select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 relative z-2">
          <div className="text-center space-y-4 mb-16">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6] tracking-widest">Catalog Overview</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Everything You Need in One Place
            </h2>
            <div className="w-12 h-1 bg-[#EF233C] mx-auto mt-2" />
          </div>

          {/* 3x2 grid of service cards (each with a custom photo layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((service) => {
              const singleLineDesc = service.description.split(".")[0] + ".";
              const photoBg = serviceCardImages[service.id] || "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop";

              return (
                <div
                  key={service.id}
                  onClick={() => onNavigate("services")}
                  className="bg-white border border-[#EAECEF] overflow-hidden cursor-pointer group hover:-translate-y-1 hover:border-[#1997E6] transition-all duration-350 flex flex-col justify-between shadow-sm hover:shadow-md"
                  style={{ borderRadius: "8px" }}
                >
                  <div className="space-y-0">
                    {/* Header Image representation of service */}
                    <div className="h-44 w-full relative overflow-hidden bg-slate-100 border-b border-[#EAECEF]">
                      <img
                        src={photoBg}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Icon & Category Floating Badge */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-1">
                        <span className="p-2.5 bg-[#1997E6] text-white rounded shadow-md border border-[#1997E6]/10">
                          {service.id === "kra-services" && <Globe className="w-5 h-5 text-white" />}
                          {service.id === "document-printing" && <Shield className="w-5 h-5 text-white" />}
                          {service.id === "internet-browsing" && <Check className="w-5 h-5 text-white" />}
                          {service.id === "cv-resume-writing" && <ArrowRightLeft className="w-5 h-5 text-white" />}
                          {service.id === "id-card-printing" && <Wallet className="w-5 h-5 text-white" />}
                          {service.id === "bulk-printing-packages" && <Clock className="w-5 h-5 text-white" />}
                        </span>
                        <span className="text-[9px] font-black uppercase tracking-wider text-[#1E293B] bg-white px-2.5 py-1 shadow-sm rounded">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Meta & Texts */}
                    <div className="p-6 space-y-2">
                      <h3 className="font-heading font-extrabold text-lg text-[#0F172A] group-hover:text-[#1997E6] transition-colors pt-1">
                        {service.name}
                      </h3>
                      <p className="text-[#64748B] text-xs leading-relaxed line-clamp-2">
                        {singleLineDesc}
                      </p>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="p-6 pt-5 flex justify-between items-center border-t border-[#EAECEF] bg-slate-50/10 text-xs font-bold text-[#1E293B]">
                    <span className="text-[#EF233C] text-sm font-black">{service.pricing}</span>
                    <span className="flex items-center gap-1 text-[#1997E6] group-hover:gap-2 transition-all font-extrabold">
                      Enquire Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center gap-2 bg-[#1E293B] hover:bg-[#0F172A] text-white font-heading text-xs font-bold tracking-wider uppercase px-8 py-4 cursor-pointer transition-all border border-slate-800"
              style={{ borderRadius: "4px" }}
            >
              Browse Full Catalog
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="text-center space-y-4 mb-20">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#EF233C]">Core Value</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Why Clients Choose Our Hub
            </h2>
            <div className="w-12 h-1 bg-[#1997E6] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-[#EAECEF] text-center space-y-3 bg-slate-50/40 hover:border-slate-300 transition-colors" style={{ borderRadius: "6px" }}>
              <span className="p-3 bg-sky-50 text-[#1997E6] inline-block mb-2" style={{ borderRadius: "4px" }}>
                <Clock className="w-6 h-6" />
              </span>
              <h3 className="font-heading font-bold text-base text-[#0F172A]">Flexible Access</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Open every day from 7:00 AM to 12:00 AM Midnight. Support is always accessible when you need it.
              </p>
            </div>

            <div className="p-6 border border-[#EAECEF] text-center space-y-3 bg-slate-50/40 hover:border-slate-300 transition-colors" style={{ borderRadius: "6px" }}>
              <span className="p-3 bg-red-50 text-[#EF233C] inline-block mb-2" style={{ borderRadius: "4px" }}>
                <Wallet className="w-6 h-6" />
              </span>
              <h3 className="font-heading font-bold text-base text-[#0F172A]">Transparent Rates</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Highly competitive rates clearly displayed in Kenyan Shillings (KSh). Absolutely zero hidden fees.
              </p>
            </div>

            <div className="p-6 border border-[#EAECEF] text-center space-y-3 bg-slate-50/40 hover:border-slate-300 transition-colors" style={{ borderRadius: "6px" }}>
              <span className="p-3 bg-sky-50 text-[#1997E6] inline-block mb-2" style={{ borderRadius: "4px" }}>
                <Shield className="w-6 h-6" />
              </span>
              <h3 className="font-heading font-bold text-base text-[#0F172A]">Web Specialists</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Dedicated software professionals building custom web models, automated forms, and e-commerce templates.
              </p>
            </div>

            <div className="p-6 border border-[#EAECEF] text-center space-y-3 bg-slate-50/40 hover:border-slate-300 transition-colors" style={{ borderRadius: "6px" }}>
              <span className="p-3 bg-red-50 text-[#EF233C] inline-block mb-2" style={{ borderRadius: "4px" }}>
                <ArrowRightLeft className="w-6 h-6" />
              </span>
              <h3 className="font-heading font-bold text-base text-[#0F172A]">M-Pesa Integration</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Seamless local mobile payments. Safely pay via till or invoice-linked checkout streams instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.1 Portfolio / Gallery Preview (Websites Built & Custom Portals) */}
      <section className="py-24 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="space-y-3 text-center md:text-left">
              <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6] flex items-center gap-1">
                <Laptop className="w-4 h-4" /> Engineering Showcase
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4.5xl tracking-tight text-[#0F172A]">
                Recent Client Web & App Successes
              </h2>
            </div>
            <button
              onClick={() => onNavigate("portfolio")}
              className="border border-[#EAECEF] bg-white hover:bg-slate-50 text-[#1E293B] font-heading text-xs font-bold tracking-wider uppercase px-6 py-3.5 cursor-pointer transition-all"
              style={{ borderRadius: "4px" }}
            >
              See All Web Portals
            </button>
          </div>

          {/* 2x2 grid of modern website projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onNavigate("portfolio")}
                className="bg-white border border-[#EAECEF] overflow-hidden group hover:border-[#1997E6] transition-all duration-350 flex flex-col md:flex-row cursor-pointer shadow-sm hover:shadow-md"
                style={{ borderRadius: "8px" }}
              >
                {/* Image */}
                <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden bg-slate-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#1997E6] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1" style={{ borderRadius: "4px" }}>
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-[#0F172A] leading-snug group-hover:text-[#1997E6] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#64748B] text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-slate-50 border-l-2 border-[#EF233C] p-3 rounded-r">
                      <span className="text-[9px] font-black text-[#64748B] uppercase block tracking-wider">Key Outcome:</span>
                      <span className="text-xs font-bold text-[#0F172A] block mt-0.5">{project.result}</span>
                    </div>

                    {project.siteUrl && (
                      <div className="text-[10px] font-mono font-bold text-slate-400 flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-[#1997E6]" />
                        <span>{project.siteUrl.replace("https://", "")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0F172A] text-white border-b border-black">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="text-center space-y-4 mb-20">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Testimonials</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-white">
              What Nairobi is Saying
            </h2>
            <div className="w-12 h-1 bg-[#EF233C] mx-auto mt-2" />
          </div>

          {/* 3-column card layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-[#1E293B] border border-slate-800 p-8 flex flex-col justify-between"
                style={{ borderRadius: "6px" }}
              >
                <div className="space-y-5">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#F8FAFC]/80 text-xs md:text-sm leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-800 mt-8">
                  <span className="w-10 h-10 bg-[#1997E6]/10 text-[#1997E6] flex items-center justify-center font-heading font-bold tracking-tight rounded-full border border-[#1997E6]/20">
                    {test.avatarInitials}
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">{test.name}</h4>
                    <p className="text-[11px] text-[#64748B]/80 font-semibold">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.1 CTA Banner Section */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden border-b border-[#EAECEF]/10">
        {/* Abstract radial gradient overlays */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(25,151,230,0.3)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_bottom_left,rgba(239,35,60,0.35)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-center relative z-2">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight tracking-tight">
              Ready to Formulate Your Next Digital Request?
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Our engineering hub operates 7:00 AM — 12:00 AM daily. Skip the templates and errors—share your instructions, and let our agents build your custom website or file your reports instantly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate("contact")}
                className="bg-white text-[#0F172A] font-heading text-sm font-bold tracking-wider uppercase px-8 py-4 cursor-pointer hover:bg-slate-100 transition-colors"
                style={{ borderRadius: "4px" }}
              >
                Request Free Quote
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="border border-[#EAECEF]/20 text-white font-heading text-sm font-bold tracking-wider uppercase px-8 py-4 cursor-pointer hover:bg-[#1E293B] transition-colors animate-pulse"
                style={{ borderRadius: "4px" }}
              >
                Browse Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
