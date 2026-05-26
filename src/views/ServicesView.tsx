/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  FileText, UserCheck, CreditCard, Globe, Shield, Activity, Car, Award, BookOpen, Briefcase, 
  PenTool, Sparkles, Compass, Printer, Layers, Copy, Scan, Camera, Monitor, Mail, Send, 
  Download, Cpu, Type, Layout, Image, Receipt, ShoppingBag, Truck, ChevronDown, ChevronUp, Check
} from "lucide-react";
import { servicesCatalog } from "../data/servicesCatalog";
import { Service } from "../types";

// Dynamic map to ensure standard icons load safely without breaking
const iconMap: Record<string, React.ReactNode> = {
  FileSpreadsheet: <FileText className="w-5 h-5 text-[#1997E6]" />,
  UserCheck: <UserCheck className="w-5 h-5 text-[#1997E6]" />,
  CreditCard: <CreditCard className="w-5 h-5 text-[#1997E6]" />,
  Globe: <Globe className="w-5 h-5 text-[#1997E6]" />,
  ShieldAlert: <Shield className="w-5 h-5 text-[#1997E6]" />,
  HeartPulse: <Activity className="w-5 h-5 text-[#1997E6]" />,
  Car: <Car className="w-5 h-5 text-[#1997E6]" />,
  GraduationCap: <Award className="w-5 h-5 text-[#1997E6]" />,
  BookOpen: <BookOpen className="w-5 h-5 text-[#1997E6]" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#1997E6]" />,
  Fingerprint: <Shield className="w-5 h-5 text-[#1997E6]" />,
  PenTool: <PenTool className="w-5 h-5 text-[#1997E6]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#1997E6]" />,
  Compass: <Compass className="w-5 h-5 text-[#1997E6]" />,
  Printer: <Printer className="w-5 h-5 text-[#1997E6]" />,
  Maximize: <Layers className="w-5 h-5 text-[#1997E6]" />,
  Contact: <UserCheck className="w-5 h-5 text-[#1997E6]" />,
  BookOpenCheck: <BookOpen className="w-5 h-5 text-[#1997E6]" />,
  Layers: <Layers className="w-5 h-5 text-[#1997E6]" />,
  Copy: <Copy className="w-5 h-5 text-[#1997E6]" />,
  Scan: <Scan className="w-5 h-5 text-[#1997E6]" />,
  Camera: <Camera className="w-5 h-5 text-[#1997E6]" />,
  Monitor: <Monitor className="w-5 h-5 text-[#1997E6]" />,
  Mail: <Mail className="w-5 h-5 text-[#1997E6]" />,
  Send: <Send className="w-5 h-5 text-[#1997E6]" />,
  Download: <Download className="w-5 h-5 text-[#1997E6]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#1997E6]" />,
  FileUser: <FileText className="w-5 h-5 text-[#1997E6]" />,
  FileEdit: <FileText className="w-5 h-5 text-[#1997E6]" />,
  Type: <Type className="w-5 h-5 text-[#1997E6]" />,
  LayoutTemplate: <Layout className="w-5 h-5 text-[#1997E6]" />,
  Image: <Image className="w-5 h-5 text-[#1997E6]" />,
  MailOpen: <Mail className="w-5 h-5 text-[#1997E6]" />,
  Receipt: <Receipt className="w-5 h-5 text-[#1997E6]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#1997E6]" />,
  Truck: <Truck className="w-5 h-5 text-[#1997E6]" />
};

interface ServicesViewProps {
  initialCategory?: string;
  id?: string;
}

export default function ServicesView({ initialCategory = "government", id = "services-view" }: ServicesViewProps) {
  const [activeTab, setActiveTab] = useState<"government" | "printing" | "computer" | "design" | "business">(
    (initialCategory as any) || "government"
  );

  // Synchronize dynamic category state from parent navigation router
  React.useEffect(() => {
    if (initialCategory) {
      setActiveTab(initialCategory as any);
    }
  }, [initialCategory]);

  // FAQ Expanded States
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tabs = [
    { id: "government", label: "Government Services" },
    { id: "printing", label: "Printing & Production" },
    { id: "computer", label: "Computer & Internet" },
    { id: "design", label: "Design & Typesetting" },
    { id: "business", label: "Business Services" }
  ];

  const filteredServices = servicesCatalog.filter((s) => s.category === activeTab);

  const processSteps = [
    { step: "01", title: "Enquire", desc: "Share details in shop, via our contact form, or direct on WhatsApp." },
    { step: "02", title: "Confirm", desc: "Our specialists review parameters, layouts, and send a precise quotation." },
    { step: "03", title: "Provide Documents", desc: "Securely submit your draft manuscripts, PDF scans, or portal credentials." },
    { step: "04", title: "We Process", desc: "We execute tax filings, format thesis sheets, print with high-end cardstocks." },
    { step: "05", title: "Receive Results", desc: "Pick up perfectly bound copies in Ongata Rongai or receive direct home courier dispatch." }
  ];

  const faqs = [
    {
      q: "How long does a KRA PIN registration and Tax Compliance Certificate take?",
      a: "Fresh KRA PIN registrations are handled instantly on the iTax system and take under 10 minutes at our cafe. Tax Compliance Certificate (TCC) applications take between 1 to 5 working days depending on KRA portal approvals and whether you have any outstanding tax liabilities or penalties."
    },
    {
      q: "What documents do I need to print of my files at Tumaini?",
      a: "You can send files directly via Email (info@tumainicyber.com) or WhatsApp text. We accept PDFs, Microsoft Word sheets, Powerpoint presentations, and JPEGs. For security, we recommend formatting files as PDF to prevent text alignment shifts."
    },
    {
      q: "Can you assist with the transition from NHIF to the new Social Health Authority (SHA)?",
      a: "Yes! Our agents will guide you through the new SHA registration portal, help verify your active mobile number, add your spouse and school-age children, and print high-quality physical wallet member cards instantly."
    },
    {
      q: "What is your turnaround time for academic thesis printing and binding?",
      a: "Standard spiral or comb bindings take 1 to 2 hours. High-end thermal bindings or corporate reports can take 2 to 4 hours. Complete hardcover thesis bindings follow a strict 24-hour cycle to cure adhesives properly."
    },
    {
      q: "How can I order printed materials if I am not in Ongata Rongai?",
      a: "No problem! You can send us your files and instructions via WhatsApp or Email. We will process your order, provide an M-Pesa merchant checkout code, and organize swift express courier delivery (Boda services) to your exact home or office location in Nairobi."
    },
    {
      q: "What software suites are available on your internet browsing PCs?",
      a: "We provide modern, high-speed Windows desktop terminals fully loaded with licensed Microsoft Office (Word, Excel, PowerPoint), Adobe PDF Reader, graphic design clients, and high-speed browsers (Google Chrome, Firefox, Microsoft Edge)."
    },
    {
      q: "Do you offer discounts for school examinations and NGO bulk printing?",
      a: "Absolutely! Our Business Support Services category offers discounted 'Bulk Printing Packages' for orders starting over 500 pages. We also provide monthly photocopy subscription contracts for schools and private offices in Nairobi."
    },
    {
      q: "Is my personal data safe when executing eCitizen operations?",
      a: "We host a zero-compromise security environment. Our computers operate strict caching guidelines where browsing histories and login credentials are automatically cleared after every session. We never store your passwords or confidential records."
    },
    {
      q: "What method of payment do you accept in the shop?",
      a: "We fully accept M-Pesa (Buy Goods Till Number or Paybill), cash in Kenyan Shillings (KSh), and standard credit cards. All prices are transparently quoted in KSh."
    },
    {
      q: "Can I get my official passport photos printed at Tumaini Cyber?",
      a: "Yes. We offer studio-lit portrait captures with instant digital cropping according to Schengen, US, and local eCitizen visa photo rules. Printed sets of 4 or 6 are delivered on high-definition glossy paper in under 15 minutes."
    }
  ];

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth">
      {/* Hero with light abstract grid pattern */}
      <section className="bg-white py-16 md:py-20 border-b border-[#EAECEF] bg-[radial-gradient(#EAECEF_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Our Core Offerings</span>
            <h1 className="font-heading font-extrabold text-[#0F172A] text-3xl md:text-5xl tracking-tight">
              Professional Service Facilitation Catalogue
            </h1>
            <p className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              We focus on absolute delivery. Browse our categorization tiers and find clear pricing, complete listings, and direct portal checkouts.
            </p>
          </div>
        </div>
      </section>

      {/* Service Category Tabs */}
      <section className="bg-white border-b border-[#EAECEF] sticky top-20 md:top-24 z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 overflow-x-auto">
          <div className="flex justify-between md:justify-center gap-6 md:gap-10 h-16 items-center min-w-[700px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  const el = document.getElementById("services-grid-anchor");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`font-heading text-xs uppercase font-bold tracking-wider py-5 border-b-2 transition-all duration-250 cursor-pointer ${
                  activeTab === tab.id
                    ? "border-[#1997E6] text-[#1997E6] font-black"
                    : "border-transparent text-[#1E293B] hover:text-[#1997E6]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (filtered based on active tab) */}
      <section id="services-grid-anchor" className="py-24 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#EAECEF] p-8 flex flex-col justify-between hover:-translate-y-1 hover:border-[#1997E6] transition-all duration-250"
              style={{ borderRadius: "6px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
            >
              <div className="space-y-6">
                {/* Header Option Icon & Pricing */}
                <div className="flex justify-between items-start">
                  <span className="p-3 bg-slate-50 border border-slate-100 block" style={{ borderRadius: "4px" }}>
                    {iconMap[service.iconName] || <FileText className="w-5 h-5 text-[#1997E6]" />}
                  </span>
                  <span className="text-xs font-heading font-extrabold text-[#EF233C] py-1">
                    {service.pricing}
                  </span>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-base md:text-lg text-[#0F172A]">
                    {service.name}
                  </h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* What's Included */}
                <div className="space-y-2.5 pt-4 border-t border-[#EAECEF]">
                  <span className="text-[10px] font-black uppercase text-[#64748B] tracking-wider block">Service Coverage:</span>
                  <ul className="space-y-1.5">
                    {service.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#1E293B] leading-normal font-medium">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button which redirects to WhatsApp with prepopulated text */}
              <div className="pt-8 mt-8 border-t border-[#EAECEF]">
                {service.id === "internet-browsing" || service.id === "software-use" ? (
                  <div className="w-full text-center bg-[#F1F5F9] border border-[#E2E8F0] py-3 text-xs font-bold text-[#64748B] block uppercase tracking-wider select-none" style={{ borderRadius: "4px" }}>
                    Walk-In Service Only (No advance booking)
                  </div>
                ) : (
                  <a
                    href={`https://wa.me/254759607619?text=${encodeURIComponent(`Hello Tumaini Cyber, I'd like to enquire about ${service.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-slate-50 hover:bg-[#1997E6] hover:text-white border border-[#EAECEF] py-3 text-xs font-bold text-[#1E293B] block uppercase tracking-wider transition-all"
                    style={{ borderRadius: "4px" }}
                  >
                    Order Service On WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5.3 How We Work (Process) - Horizontal Timeline */}
      <section className="py-24 bg-white border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="text-center space-y-4 mb-20">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#EF233C]">Workflow</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Our Operational Procedure
            </h2>
            <div className="w-12 h-1 bg-[#1997E6] mx-auto mt-2" />
          </div>

          {/* Timeline - horizontal on desktop, vertical on mobile */}
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="absolute top-[34px] left-0 right-0 h-0.5 bg-[#EAECEF] hidden lg:block z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-1">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 px-4">
                  {/* Step Number Dot */}
                  <div className="w-16 h-16 bg-white border-2 border-[#1997E6] text-[#1997E6] font-heading font-bold text-lg flex items-center justify-center rounded-full shadow-sm z-1 group-hover:bg-[#1997E6] group-hover:text-white transition-all duration-300">
                    {step.step}
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#0F172A] pt-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 FAQ Accordion Section (8-12 Kenya context relevant) */}
      <section className="py-24 border-b border-[#EAECEF]">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Helpdesk Support</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-[#EF233C] mx-auto mt-2" />
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EAECEF]"
                style={{ borderRadius: "6px" }}
              >
                <button
                  role="button"
                  aria-expanded={expandedFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left font-heading text-sm md:text-base font-bold text-[#0F172A] hover:text-[#1997E6] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#1997E6] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B] flex-shrink-0" />
                  )}
                </button>

                {/* Body dropdown with smooth transition */}
                <div
                  id={`faq-answer-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === idx ? "max-h-80 border-t border-[#EAECEF]" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-xs md:text-sm leading-relaxed text-[#64748B] bg-slate-50/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
