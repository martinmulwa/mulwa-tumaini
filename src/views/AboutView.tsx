/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Award, Users, BookOpen, Star, ShieldAlert, Cpu, Heart, CheckCircle, Zap, ShieldCheck, Mail, MessageSquare, Briefcase, Sparkles } from "lucide-react";

interface AboutViewProps {
  onNavigate: (view: string) => void;
  id?: string;
}

export default function AboutView({ onNavigate, id = "about-view" }: AboutViewProps) {
  const stats = [
    { value: "10+ Years", label: "In Operation" },
    { value: "500+", label: "Clients Served" },
    { value: "15,000+", label: "Projects Completed" },
    { value: "99.8%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: <CheckCircle className="w-5 h-5 text-[#1997E6]" />,
      title: "Absolute Precision",
      desc: "We double-check margins, spelling grids, and tax records to ensure zero-error digital operations."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#EF233C]" />,
      title: "Swift Dispatch",
      desc: "Delivering your booklets, bindings, and certificates exactly within the agreed-upon time envelopes."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#1997E6]" />,
      title: "Data Confidentiality",
      desc: "We prioritize your privacy. No personal records, pins, or passwords are ever stored or exposed."
    },
    {
      icon: <Heart className="w-5 h-5 text-[#EF233C]" />,
      title: "Community Growth",
      desc: "Serving students, graduates, and small businesses with honest rates that help support local growth."
    },
    {
      icon: <Award className="w-5 h-5 text-[#1997E6]" />,
      title: "Premium Materials",
      desc: "Utilizing only bright 80gsm paper, heavy glossy cardboards, and durable wallets for laminations."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#EF233C]" />,
      title: "Constant Onboarding",
      desc: "Constantly updating our portals knowledge to match new eCitizen, KRA, and SHA guidelines."
    }
  ];

  const aboutFeatures = [
    {
      title: "UPS Power Backup",
      desc: "Equipped with automatic line-interactive power backup systems, preventing loss of documents during power cuts."
    },
    {
      title: "Data Protection",
      desc: "Strict administrative policies where all computer terminals auto-wipe browsing cache after each session."
    },
    {
      title: "Advanced Software",
      desc: "Updated licenses for Microsoft Suites, Adobe, and modern graphic design editors for perfect typesetting."
    },
    {
      title: "Courier Dispatch",
      desc: "Submit files via WhatsApp. We will print, bind, and dispatch directly to your office with Nairobi bodas."
    }
  ];

  const team = [
    {
      name: "Jane Kamau",
      role: "Director",
      bio: "Committed to delivering efficient, secure, and innovative digital solutions for individuals and organizations.",
      initials: "JK"
    },
    {
      name: "Davis Bundi",
      role: "Operations Manager",
      bio: "Oversees daily cyber hub workflows, high-speed workstations, and seamless document processing queues.",
      initials: "DB"
    },
    {
      name: "Mike Gitonga",
      role: "Lead Developer",
      bio: "Expert full-stack programmer building customized website portfolios, automation tools, and e-commerce integrations.",
      initials: "MG"
    }
  ];

  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth">
      {/* Hero Section: Story Left, Photo Right + 4 stats blocks below */}
      <section className="bg-white py-16 md:py-24 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Story Left */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Our Journey</span>
              <h1 className="font-heading font-extrabold text-[#0F172A] text-[36px] md:text-[54px] leading-tight tracking-tight">
                Pioneering Digital Hub Solutions in Nairobi
              </h1>
              <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
                Founded over a decade ago in Ongata Rongai, Tumaini Cyber began with a clear and singular purpose: to bridge the digital gap for residents and small businesses. We recognized that navigating government portals, securing clean document prints, and drafting competitive CVs could be stressful-so we built a sanctuary of speed, precision, and trust.
              </p>
              <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
                Today, under the technical direction of Jane Kamau and Davis Bundi, we process hundreds of transactions daily, serving as one of Nairobi's premier technical cafes. We don't just print sheets-we guarantee clarity, compliance, and custom care for every single person who walks through our doors.
              </p>
            </div>

            {/* Branded Illustration/Gradient Right */}
            <div className="lg:col-span-5 flex justify-center select-none">
              <div className="relative bg-[#0F172A] text-[#F8FAFC] p-8 md:p-12 w-full max-w-sm flex flex-col justify-between border border-slate-800 aspect-square text-center overflow-hidden shadow-2xl group" style={{ borderRadius: "6px" }}>
                {/* Visual Image Background representing co-working tech team/meet */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="Tumaini Cyber Services Team"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient darkening layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent pointer-events-none" />

                <span className="font-mono text-[10px] tracking-widest text-[#1997E6] font-bold uppercase relative z-10">ESTABLISHED 2014</span>
                <div className="my-auto space-y-4 relative z-10">
                  <div className="w-12 h-1 bg-[#EF233C] mx-auto rounded-full" />
                  <h3 className="font-heading font-black text-2xl text-white">Perfect Prints Guaranteed.</h3>
                  <p className="text-slate-300 text-xs max-w-xs mx-auto">
                    A decade of building trust, helping startups register, and typesetting theses for graduates.
                  </p>
                </div>
                <span className="text-xs font-bold text-slate-400 relative z-10">RONGAI HUB, NAIROBI</span>
              </div>
            </div>
          </div>

          {/* 4 Stats Blocks below */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#EAECEF]">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 border border-[#EAECEF] text-center" style={{ borderRadius: "6px" }}>
                <div className="font-heading font-extrabold text-[#1997E6] text-2xl md:text-3.5xl tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are & Mission Vision */}
      <section className="py-24 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Narrative Text */}
            <div className="lg:col-span-7 space-y-5">
              <span className="font-heading text-xs uppercase tracking-widest font-black text-[#EF233C]">Ethos & Culture</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#0F172A] tracking-tight">
                Empowering Communities Through Digital Literacy
              </h2>
              <p className="text-[#64748B] text-xs md:text-sm leading-relaxed">
                The modern landscape of e-services in Kenya can be dynamic and confusing. From applying for a Maisha ID card to getting certified by tax authorities on iTax, many struggle to complete transactions successfully. We are here to act as friendly, secure technical interpreters.
              </p>
              <p className="text-[#64748B] text-xs md:text-sm leading-relaxed">
                Our staff are trained to prioritize your data privacy, explain requirements simply without complex jargon, and ensure that every paper output meets perfect formatting standards. We believe that professional presentation leads directly to corporate and academic success.
              </p>
            </div>

            {/* Side illustration or simple graphic container */}
            <div className="lg:col-span-5 bg-white p-8 border border-[#EAECEF] relative" style={{ borderRadius: "6px" }}>
              <div className="h-2 w-16 bg-[#1997E6] mb-6" />
              <h4 className="font-heading font-bold text-base text-[#0F172A] mb-3">Our Dedicated Pledge</h4>
              <p className="text-xs text-[#64748B] leading-relaxed italic">
                “We promise to handle your confidential files securely, print each page to razor-sharp alignment, and navigate complex portals with clear guidance, guaranteeing perfect outcomes for every client.”
              </p>
              <span className="block mt-4 text-xs font-bold text-[#0F172A]">— Jane Kamau, Owner & Director</span>
            </div>
          </div>

          {/* Mission & Vision: Side-by-side bordered blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#EAECEF] p-8 md:p-10" style={{ borderRadius: "6px" }}>
              <div className="h-1 w-12 bg-[#1997E6] mb-5" />
              <h3 className="font-heading font-bold text-xl text-[#0F172A] mb-3">Our Core Mission</h3>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                To provide high-quality, seamless, and completely secure cyber and digital services to individuals, graduates, and small business houses in Nairobi. We strive to simplify complex e-government and corporate portals through expert guidance, high-speed connectivity, and flawless physical prints.
              </p>
            </div>

            <div className="bg-white border border-[#EAECEF] p-8 md:p-10" style={{ borderRadius: "6px" }}>
              <div className="h-1 w-12 bg-[#EF233C] mb-5" />
              <h3 className="font-heading font-bold text-xl text-[#0F172A] mb-3">Our Visualized Vision</h3>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                To remain Nairobi's most trusted, highly recommended digital facilitation hub, recognized for setting premium standards in typesetting, document production, local startup registration support, and secure client-centric services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values section */}
      <section className="py-24 bg-white border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="text-center space-y-4 mb-20">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#EF233C]">Core Framework</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Our Guiding Principles
            </h2>
            <div className="w-12 h-1 bg-[#1997E6] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-slate-50 p-8 border border-[#EAECEF]" style={{ borderRadius: "6px" }}>
                <span className="p-2 bg-white inline-block shadow-sm border border-[#EAECEF] mb-4" style={{ borderRadius: "4px" }}>
                  {v.icon}
                </span>
                <h3 className="font-heading font-bold text-base text-[#0F172A] mb-2">{v.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (DIFFERENT content from homepage) */}
      <section className="py-24 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="text-center space-y-4 mb-20">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Technical Edge</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Engineered for Service Security
            </h2>
            <div className="w-12 h-1 bg-[#EF233C] mx-auto mt-2" />
          </div>

          {/* 4 horizontal feature blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutFeatures.map((f, i) => (
              <div key={i} className="bg-white p-6 border border-[#EAECEF] space-y-3 shadow-sm hover:border-[#1997E6] transition-colors" style={{ borderRadius: "6px" }}>
                <span className="text-[10px] font-black uppercase text-[#EF233C] bg-red-50 px-2 py-0.5" style={{ borderRadius: "4px" }}>
                  0{i + 1}
                </span>
                <h3 className="font-heading font-bold text-sm text-[#0F172A]">{f.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="text-center space-y-4 mb-20">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#EF233C]">Our Staff</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Meet the Professionals
            </h2>
            <div className="w-12 h-1 bg-[#1997E6] mx-auto mt-2" />
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-[#EAECEF] p-8 text-center flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:border-[#1997E6] transition-all duration-250 group"
                style={{ borderRadius: "6px" }}
              >
                <div className="space-y-4">
                  {/* Initials Avatar */}
                  <span className="w-16 h-16 bg-[#1997E6]/10 text-[#1997E6] font-heading font-extrabold text-xl flex items-center justify-center mx-auto rounded-full border border-[#1997E6]/20 transition-all duration-300 group-hover:scale-105">
                    {member.initials}
                  </span>

                  <div>
                    <h3 className="font-heading font-bold text-base text-[#0F172A]">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#64748B] mt-0.5">{member.role}</p>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>

                {/* Social Icon */}
                <div className="flex justify-center gap-3 pt-4 border-t border-[#EAECEF]">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#1997E6] hover:text-[#EF233C] transition-colors flex items-center gap-1"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Contact banner CTA */}
      <section className="bg-[#0F172A] py-16 text-white border-b border-[#EAECEF]/10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-heading font-extrabold text-xl md:text-2xl text-[#F8FAFC]">Have a project? Let's talk.</h3>
            <p className="text-xs text-[#64748B] max-w-xl">
              From corporate printing packages to complex eCitizen registrations, discover how we can help.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://wa.me/254759607619?text=Hello%20Tumaini%20Cyber,%20I'd%20like%20to%20enquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-3 text-sm font-bold tracking-wide uppercase transition-colors"
              style={{ borderRadius: "4px" }}
            >
              Contact on WhatsApp
            </a>
            <button
              onClick={() => onNavigate("contact")}
              className="bg-[#1997E6] text-white px-5 py-3 text-sm font-bold tracking-wide uppercase hover:bg-sky-500 transition-colors"
              style={{ borderRadius: "4px" }}
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
