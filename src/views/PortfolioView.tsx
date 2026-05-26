/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Sparkles, Check, ArrowRight, X, ExternalLink, Laptop, Globe, Flame } from "lucide-react";
import { portfolioProjects } from "../data/portfolioData";
import { Project } from "../types";
import WhatsAppIcon from "../components/WhatsAppIcon";

interface PortfolioViewProps {
  id?: string;
  initialProjectId?: string;
}

export default function PortfolioView({ id = "portfolio-view", initialProjectId }: PortfolioViewProps) {
  const [filter, setFilter] = useState<"all" | "web-development" | "graphic-design">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => {
    if (initialProjectId) {
      const found = portfolioProjects.find((p) => p.id === initialProjectId);
      if (found) return found;
    }
    return null;
  });

  React.useEffect(() => {
    if (initialProjectId) {
      const found = portfolioProjects.find((p) => p.id === initialProjectId);
      if (found) {
        setSelectedProject(found);
      }
    } else {
      setSelectedProject(null);
    }
  }, [initialProjectId]);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "graphic-design", label: "Graphic Design" }
  ];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  if (selectedProject) {
    return (
      <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 animate-fade-in">
          <button
            onClick={() => {
              setSelectedProject(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1997E6] hover:text-[#147ec2] mb-8 cursor-pointer select-none uppercase tracking-wider"
          >
            ← Back to Portfolio & Case Studies
          </button>
          
          <div className="space-y-4 border-b border-[#EAECEF] pb-8 mb-8">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[9px] font-black uppercase text-[#1997E6] bg-sky-50 border border-sky-100 px-3 py-1 rounded">
                {selectedProject.categoryLabel}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-mono">DELIVERY: COMPLETED</span>
            </div>
            <h1 className="font-heading font-black text-2xl md:text-4xl text-[#0F172A] leading-tight tracking-tight">
              {selectedProject.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Device browser frame */}
              <div className="border border-[#EAECEF] bg-white shadow-xs overflow-hidden" style={{ borderRadius: "6px" }}>
                <div className="bg-slate-50 px-4 py-2.5 flex items-center gap-1.5 border-b border-[#EAECEF]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 block" style={{ height: "10px", width: "10px" }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block" style={{ height: "10px", width: "10px" }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" style={{ height: "10px", width: "10px" }} />
                  <span className="text-[10px] font-mono text-slate-400 ml-4 select-none truncate">
                    {selectedProject.siteUrl ? selectedProject.siteUrl.replace("https://", "") : "localhost:3000"}
                  </span>
                </div>

                <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full animate-fade-in"
                  />
                </div>
              </div>

              {/* Overview Details */}
              <div className="space-y-3.5 bg-white border border-[#EAECEF] p-8 shadow-xs" style={{ borderRadius: "6px" }}>
                <h4 className="font-heading font-black text-xs text-[#1997E6] uppercase tracking-wider block">Project Overview</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                  {selectedProject.description}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Implementation Metrics Panel */}
              <div className="bg-white border border-[#EAECEF] p-6 space-y-4 shadow-xs" style={{ borderRadius: "6px" }}>
                <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#0F172A] border-b border-slate-100 pb-2">
                  Implementation Metrics
                </h4>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-semibold">
                  <div>
                    <span className="text-slate-400 block font-normal text-[10px]">DIVISION:</span>
                    <span className="text-slate-800 block pt-0.5 uppercase tracking-wide truncate">{selectedProject.categoryLabel}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-normal text-[10px]">DELIVERY:</span>
                    <span className="text-emerald-600 block pt-0.5 uppercase tracking-wide">Completed</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-normal text-[10px]">SUPPORT SLA:</span>
                    <span className="text-slate-800 block pt-0.5 uppercase tracking-wide">12 Months</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-normal text-[10px]">LOCATION:</span>
                    <span className="text-slate-800 block pt-0.5 uppercase tracking-wide truncate">Rongai, Kenya</span>
                  </div>
                </div>
              </div>

              {/* Business Impact block */}
              <div className="bg-emerald-50 border border-emerald-100 p-6 space-y-3" style={{ borderRadius: "6px" }}>
                <div className="flex items-center gap-2 text-emerald-800">
                  <span className="p-1 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-wider block">Validated Business Impact</span>
                </div>
                <h5 className="text-[11px] font-bold text-[#111827] uppercase tracking-wider block">Success Metric Secured</h5>
                <p className="text-xs md:text-sm font-extrabold text-[#111827] leading-relaxed font-sans">
                  {selectedProject.result}
                </p>
              </div>

              {/* Helpdesk support */}
              <div className="bg-[#0F172A] text-white p-6 border border-transparent space-y-5" style={{ borderRadius: "6px" }}>
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase text-[#1997E6] tracking-wider block">Ongata Rongai branch</span>
                  <h4 className="font-heading font-black text-sm text-white uppercase tracking-wide animate-pulse">Need a similar portal?</h4>
                  <p className="text-slate-300 text-[11px] leading-relaxed font-semibold">
                    We develop high-performance bespoke software and custom websites with mobile integration, M-Pesa tracking, and high-DPI interfaces.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 pt-2">
                  {selectedProject.siteUrl && (
                    <a
                      href={selectedProject.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading text-xs font-bold uppercase tracking-wider py-3.5 px-4 flex items-center justify-center gap-1.5 transition-all"
                      style={{ borderRadius: "4px" }}
                    >
                      Preview Site <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={`https://wa.me/254759607619?text=${encodeURIComponent(`Hello Tumaini Cyber, I am exploring your online projects portfolio and am very interested in the custom built project details: "${selectedProject.title}". I would like to request an inquiry or quotation for my business.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-[#25D366] hover:bg-[#1eba53] text-white py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all select-none"
                    style={{ borderRadius: "4px" }}
                  >
                    <WhatsAppIcon className="w-4.5 h-4.5" fill="white" />
                    WhatsApp Quote
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#EAECEF] flex justify-start">
            <button
              onClick={() => {
                setSelectedProject(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-wider select-none cursor-pointer"
              style={{ borderRadius: "4px" }}
            >
              ← Back to Case Studies List
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6] flex items-center justify-center gap-1.5">
              <Laptop className="w-4 h-4 animate-bounce" /> Our Software & Web Engineering Division
            </span>
            <h1 className="font-heading font-extrabold text-[#0F172A] text-4xl md:text-6xl tracking-tight leading-tight">
              Web & Portal Solutions Portfolio
            </h1>
            <p className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              We design and program fully responsive, high-speed custom web applications, e-commerce storefronts, and digital portals for Nairobi businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Uniform Project Grid */}
      <section className="py-20 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-[#0F172A] tracking-tight flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#1997E6]" /> Client Website Index
            </h2>
            <p className="text-xs text-[#64748B] max-w-sm">
              Use tabs below to sort live projects based on technical stack category.
            </p>
          </div>

          {/* Filter Elements */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-5 py-2.5 text-xs font-heading font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  filter === f.id
                    ? "bg-[#1E293B] text-white"
                    : "bg-white border border-[#EAECEF] text-[#1E293B] hover:bg-slate-50"
                }`}
                style={{ borderRadius: "4px" }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#EAECEF] group hover:border-[#1997E6] transition-all duration-250 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
              style={{ borderRadius: "8px" }}
              onClick={() => handleSelectProject(project)}
            >
              <div className="space-y-4">
                {/* Simulated Screen Frame Header */}
                <div className="bg-slate-50 px-4 py-2 flex items-center gap-1.5 border-b border-[#EAECEF]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
                  <span className="text-[10px] font-mono text-slate-400 ml-4 select-none truncate">
                    {project.siteUrl ? project.siteUrl.replace("https://", "") : "localhost:3000"}
                  </span>
                </div>

                {/* Cover Image representing website screenshot */}
                <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-[#EAECEF]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#1997E6]/95 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1" style={{ borderRadius: "4px" }}>
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Texts */}
                <div className="px-6 space-y-2">
                  <h3 className="font-heading font-bold text-lg text-[#0F172A] leading-snug group-hover:text-[#1997E6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom detail link */}
              <div className="p-6 pt-5 flex justify-between items-center border-t border-[#EAECEF] mt-6 text-xs font-bold text-[#1E293B] bg-slate-50/20">
                <span className="text-emerald-600 font-extrabold flex items-center gap-1 text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Web Launch Approved
                </span>
                <span className="text-[#1997E6] flex items-center gap-1 group-hover:gap-1.5 transition-all text-xs font-bold">
                  Specs & Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
