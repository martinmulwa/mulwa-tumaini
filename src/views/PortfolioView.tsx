/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, Check, ArrowRight, X, ExternalLink, Laptop, Globe, Flame } from "lucide-react";
import { portfolioProjects } from "../data/portfolioData";
import { Project } from "../types";

interface PortfolioViewProps {
  id?: string;
}

export default function PortfolioView({ id = "portfolio-view" }: PortfolioViewProps) {
  const [filter, setFilter] = useState<"all" | "web-development" | "graphic-design">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "graphic-design", label: "Graphic Design" }
  ];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

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
              onClick={() => setSelectedProject(project)}
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

      {/* Case Study Details Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 bg-[#0F172A]/85 z-200 flex items-center justify-center p-4 backdrop-blur-sm">
          <div
            className="bg-white border border-[#EAECEF] w-full max-w-lg p-8 relative flex flex-col space-y-6 max-h-[90vh] overflow-y-auto"
            style={{ borderRadius: "6px" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#64748B] hover:text-[#EF233C] p-2 focus:outline-none cursor-pointer z-10"
              aria-label="Close details dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title / Category */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase text-[#1997E6] bg-sky-50 px-2.5 py-1" style={{ borderRadius: "4px" }}>
                {selectedProject.categoryLabel}
              </span>
              <h2 className="font-heading font-black text-xl md:text-2xl text-[#0F172A] leading-tight pt-1">
                {selectedProject.title}
              </h2>
            </div>

            {/* Big Project Graphic */}
            <div className="border border-[#EAECEF] overflow-hidden" style={{ borderRadius: "6px" }}>
              <div className="bg-slate-100 px-3 py-1.5 flex items-center gap-1 border-b border-[#EAECEF]">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[9px] font-mono text-slate-400 ml-4 select-none">
                  {selectedProject.siteUrl}
                </span>
              </div>
              <div className="aspect-video relative bg-slate-100 overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Description Details */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#1997E6] font-bold uppercase tracking-wider block">Project Specifications</span>
                <p className="text-xs md:text-sm text-[#334155] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="bg-emerald-50 border-l-3 border-emerald-500 p-4" style={{ borderRadius: "4px" }}>
                <span className="text-[10px] font-bold text-emerald-800 uppercase block tracking-wider">Business Impact:</span>
                <span className="text-xs md:text-sm font-bold text-[#1E293B] block mt-0.5">{selectedProject.result}</span>
              </div>
            </div>

            {/* Direct Web Actions */}
            <div className="pt-4 border-t border-[#EAECEF] flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-3 border border-[#EAECEF] text-[#1E293B] text-xs font-bold tracking-wider uppercase cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                Close Project
              </button>
              
              {selectedProject.siteUrl && (
                <a
                  href={selectedProject.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E293B] hover:bg-[#0F172A] text-white px-5 py-3 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer"
                  style={{ borderRadius: "4px" }}
                >
                  Launch Live Preview <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                href={`https://wa.me/254759607619?text=${encodeURIComponent(`Hello Tumaini Cyber, I am exploring your online projects portfolio and am very interested in the custom built project details: "${selectedProject.title}". I would like to request an inquiry or quotation for my business.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-3 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                Inquire via WhatsApp <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
