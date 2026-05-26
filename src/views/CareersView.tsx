/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Briefcase, MapPin, Calendar, Clock, DollarSign, Send, ArrowRight, CheckCircle2, ShieldCheck, HelpCircle, FileText } from "lucide-react";
import Confetti from "../components/Confetti";

interface CareersViewProps {
  onNavigate: (view: string) => void;
  id?: string;
}

export default function CareersView({ onNavigate, id = "careers-view" }: CareersViewProps) {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("attendant");
  const [experience, setExperience] = useState("1");
  const [coverLetter, setCoverLetter] = useState("");
  const [cvLink, setCvLink] = useState("");
  
  // Interaction and Feedback state
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [expandedJobId, setExpandedJobId] = useState<string | null>("job-1");

  const jobs = [
    {
      id: "job-1",
      title: "Digital Services & Cyber Café Attendant",
      department: "Customer Operations",
      type: "Full-Time (Rotational)",
      location: "Ongata Rongai, Nairobi",
      salary: "KSh 25,000 — KSh 32,000 / month",
      posted: "May 20, 2026",
      requirements: [
        "Proven experience with KRA iTax returns filing, eCitizen registrations, NTSA portals, and SHA updates.",
        "Excellent scanning, digital typesetting, high-speed document printing, and spiral binding skills.",
        "High degree of accuracy and speed when entering numeric digits in databases or portals.",
        "Friendly, welcoming personality to assist Nairobi elders and first-time digital applicants patiently.",
        "High-school certificate required; diploma in IT or related fields is an added advantage."
      ],
      responsibilities: [
        "Consult and assist walking-in cyber café customers with government online accounts daily.",
        "Conduct heavy black-and-white print and dual booklet printing, spine binding, and laminations.",
        "Manage desktop browsing booths, ensuring reliable internet connections for customers and students.",
        "Receive cash, compile daily receipts spreadsheets, and balance M-Pesa till till accounts."
      ]
    },
    {
      id: "job-2",
      title: "Graphic Designer & Resume Writer",
      department: "Creative Design",
      type: "Full-Time or Part-Time",
      location: "Ongata Rongai, Nairobi",
      salary: "KSh 28,000 — KSh 36,000 / month",
      posted: "May 18, 2026",
      requirements: [
        "Expert knowledge of typography layout, color balance, Adobe Creative suite, or Figma/Canva.",
        "Strong understanding of Applicant Tracking Systems (ATS) keyword matching CV specifications.",
        "Impeccable English spelling, formatting grammar, and technical vocabulary editing skills.",
        "Portfolio showcasing business branding, posters, brochures, flyers, or professional envelopes."
      ],
      responsibilities: [
        "Typeset, optimize, and write professional single-column ATS CV profiles for fresh job seekers.",
        "Formulate and design high-quality wedding invitations, funeral programs, business logos, and posters.",
        "Prepare files, bleed marks, and execute high-fidelity color prints onto card boards or glossy sheets."
      ]
    },
    {
      id: "job-3",
      title: "IT Support & Systems Technician",
      department: "Technical Services",
      type: "Part-Time / Contractual",
      location: "Ongata Rongai, Nairobi",
      salary: "KSh 15,000 — KSh 22,000 / contract",
      posted: "May 25, 2026",
      requirements: [
        "Strong troubleshooting knowledge of network routing, CAT6 cabling, and local client WiFi connections.",
        "Experience setting up corporate emails (Google Workspace tenant mapping or Exchange servers).",
        "Ability to repair, format, install operating systems, clean drivers, and upgrade laptop components.",
        "Fast response time for network dropouts or hardware conflicts."
      ],
      responsibilities: [
        "Maintain the hub's fiber internet, Ethernet switches, and 12 desktop workstations in top condition.",
        "Setup secure domains, custom business mail servers, and client outlook profiles for corporate SMEs.",
        "Handle hardware repair and virus cleanups for walk-in client laptop/computer repair requests."
      ]
    }
  ];

  const filteredJobs = jobs.filter(job => {
    if (activeTab === "all") return true;
    if (activeTab === "operations") return job.department === "Customer Operations";
    if (activeTab === "creative") return job.department === "Creative Design";
    if (activeTab === "tech") return job.department === "Technical Services";
    return true;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name || !email || !phone || !coverLetter) {
      setFormError("Please fill out all mandatory fields.");
      return;
    }

    setSubmitting(true);
    
    // Simulate API transport
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setCoverLetter("");
      setCvLink("");
    }, 1800);
  };

  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth min-h-screen">
      {/* 1. Header Hero Panel */}
      <section className="bg-white py-16 md:py-24 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Join Our Team</span>
            <h1 className="font-heading font-black text-[#0F172A] text-4xl md:text-6xl tracking-tight leading-none">
              Careers at Tumaini Cyber
            </h1>
            <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-xl mx-auto">
              Help us connect and empower the Ongata Rongai community. Join Nairobi’s premier digital service hub and build a meaningful local career.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Perks / Culture Section */}
      <section className="py-20 border-b border-[#EAECEF] bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="text-center space-y-3 mb-16">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#EF233C]">Why Join Us</span>
            <h2 className="font-heading font-extrabold text-2xl md:text-4xl tracking-tight text-[#0F172A]">
              Our Workplace & Growth Benefits
            </h2>
            <div className="w-12 h-1 bg-[#1997E6] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#EAECEF] p-8 space-y-3 shadow-sm hover:border-[#1997E6] transition-colors" style={{ borderRadius: "6px" }}>
              <div className="p-3 bg-sky-50 text-[#1997E6] inline-block" style={{ borderRadius: "4px" }}>
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#0F172A]">Reliable Compensation</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Competitive stable base salary, monthly performance bonuses based on successfully compiled iTax records, and direct M-Pesa payroll transfers.
              </p>
            </div>

            <div className="bg-white border border-[#EAECEF] p-8 space-y-3 shadow-sm hover:border-[#1997E6] transition-colors" style={{ borderRadius: "6px" }}>
              <div className="p-3 bg-red-50 text-[#EF233C] inline-block" style={{ borderRadius: "4px" }}>
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#0F172A]">Flexible Shift Rosters</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Choose morning, afternoon, or evening rotational shifts. We operate flexibly to respect student classes, families, and exam timetables.
              </p>
            </div>

            <div className="bg-white border border-[#EAECEF] p-8 space-y-3 shadow-sm hover:border-[#1997E6] transition-colors" style={{ borderRadius: "6px" }}>
              <div className="p-3 bg-sky-50 text-[#1997E6] inline-block" style={{ borderRadius: "4px" }}>
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#0F172A]">Modern Equipment Hub</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Work with high-speed fiber internet channels, advanced laser printers, secure cloud portals, and standard software layout automation systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Job Openings / Listings Section */}
      <section className="py-24 bg-white border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Job Listings</span>
              <h2 className="font-heading font-extrabold text-2xl md:text-4xl tracking-tight text-[#0F172A]">
                Explore Vacant Positions
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Departments" },
                { id: "operations", label: "Operations" },
                { id: "creative", label: "Creative" },
                { id: "tech", label: "Tech" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#1E293B] text-white"
                      : "bg-slate-50 border border-[#EAECEF] text-slate-600 hover:bg-slate-100"
                  }`}
                  style={{ borderRadius: "4px" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Job Cards */}
            <div className="lg:col-span-7 space-y-6">
              {filteredJobs.length === 0 ? (
                <div className="p-12 text-center border border-[#EAECEF] rounded" style={{ borderRadius: "6px" }}>
                  <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-600">No active positions under this segment</p>
                  <p className="text-xs text-slate-400 mt-1">Please try shifting between departments or write to us.</p>
                </div>
              ) : (
                filteredJobs.map(job => (
                  <div
                    key={job.id}
                    className={`bg-white border transition-all duration-300 p-6 flex flex-col justify-between ${
                      expandedJobId === job.id ? "border-[#1997E6] shadow-md" : "border-[#EAECEF] hover:border-slate-350"
                    }`}
                    style={{ borderRadius: "6px" }}
                  >
                    <div className="space-y-4">
                      {/* Meta stats bar */}
                      <div className="flex flex-wrap gap-3 items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                          {job.department}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#EF233C]" /> {job.type}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#1997E6]" /> {job.location}
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-lg md:text-xl text-[#0F172A]">
                        {job.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#EF233C] flex items-center gap-1">
                        <DollarSign className="w-4 h-4" /> Expected Range: {job.salary}
                      </p>

                      {/* Detail Section that shows if active or expanded */}
                      {expandedJobId === job.id ? (
                        <div className="space-y-4 pt-4 border-t border-slate-100 animate-fadeIn">
                          <div>
                            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#0F172A] mb-2">
                              Candidate Requirements:
                            </h4>
                            <ul className="space-y-1.5 pl-1">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                                  <span className="w-1.5 h-1.5 bg-[#1997E6] rounded-full mt-2 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#0F172A] mb-2">
                              Core Responsibilities:
                            </h4>
                            <ul className="space-y-1.5 pl-1">
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                                  <span className="w-1.5 h-1.5 bg-[#EF233C] rounded-full mt-2 flex-shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-slate-50 mt-6 justify-between items-center">
                      <button
                        onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                        className="text-xs text-[#1997E6] hover:text-[#147ec2] font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        {expandedJobId === job.id ? "Hide Requirements" : "Expand Description"}
                      </button>

                      <button
                        onClick={() => {
                          setPosition(job.id === "job-1" ? "attendant" : job.id === "job-2" ? "designer" : "it-tech");
                          const formEl = document.getElementById("job-application-form-block");
                          if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-[#1E293B] hover:bg-[#0F172A] text-white py-2 px-4 text-xs font-bold uppercase transition-colors tracking-wide cursor-pointer flex items-center gap-1"
                        style={{ borderRadius: "4px" }}
                      >
                        Apply Now <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right Column: Application Form Block */}
            <div id="job-application-form-block" className="lg:col-span-5 bg-slate-50 p-6 md:p-8 border border-[#EAECEF]" style={{ borderRadius: "6px" }}>
              <h3 className="font-heading font-bold text-lg text-[#0F172A] uppercase border-b border-slate-200 pb-3 mb-6">
                Submit Online Application
              </h3>

              {success ? (
                <div className="bg-white border border-emerald-200 p-8 text-center space-y-4 relative overflow-hidden shadow-sm" style={{ borderRadius: "6px" }}>
                  <Confetti />
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="font-heading font-black text-lg text-[#0F172A]">Application Distributed!</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Hello candidate. Thank you for submitting your profile to Tumaini Cyber. Our operations manager will review your cover note and reach out via mobile/email inside 48 operating hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="bg-emerald-600 text-white font-heading font-medium text-xs uppercase px-5 py-2.5 tracking-wider hover:bg-emerald-700 transition"
                    style={{ borderRadius: "4px" }}
                  >
                    Apply for Another Role
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <p className="text-xs text-red-500 font-bold bg-red-50 border border-red-100 p-3 rounded">{formError}</p>
                  )}

                  {/* Name input */}
                  <div className="space-y-1">
                    <label htmlFor="cand-name" className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">
                      Full Name (Required)
                    </label>
                    <input
                      id="cand-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Koech"
                      className="bg-white border border-[#EAECEF] text-xs px-3.5 py-3 w-full focus:outline-none focus:border-[#1997E6]"
                      style={{ borderRadius: "4px" }}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="cand-email" className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">
                        Email Address (Required)
                      </label>
                      <input
                        id="cand-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@domain.com"
                        className="bg-white border border-[#EAECEF] text-xs px-3.5 py-3 w-full focus:outline-none focus:border-[#1997E6]"
                        style={{ borderRadius: "4px" }}
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="cand-phone" className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">
                        Phone (Required)
                      </label>
                      <input
                        id="cand-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+254 712 345 678"
                        className="bg-white border border-[#EAECEF] text-xs px-3.5 py-3 w-full focus:outline-none focus:border-[#1997E6]"
                        style={{ borderRadius: "4px" }}
                      />
                    </div>
                  </div>

                  {/* Position selector */}
                  <div className="space-y-1">
                    <label htmlFor="cand-position" className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">
                      Target Position
                    </label>
                    <select
                      id="cand-position"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="bg-white border border-[#EAECEF] text-xs px-3.5 py-3 w-full focus:outline-none focus:border-[#1997E6] font-semibold text-[#1E293B]"
                      style={{ borderRadius: "4px" }}
                    >
                      <option value="attendant">Digital Services Attendant</option>
                      <option value="designer">Graphic Designer & ATS Writer</option>
                      <option value="it-tech">IT Support & Systems Technician</option>
                    </select>
                  </div>

                  {/* Experience Selector */}
                  <div className="space-y-1">
                    <label htmlFor="cand-experience" className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">
                      Years of Related Experience
                    </label>
                    <select
                      id="cand-experience"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="bg-white border border-[#EAECEF] text-xs px-3.5 py-3 w-full focus:outline-none focus:border-[#1997E6] font-medium"
                      style={{ borderRadius: "4px" }}
                    >
                      <option value="1">Under 1 Year / Passionate Graduate</option>
                      <option value="2">1 to 2 Years</option>
                      <option value="3">3 to 5 Years</option>
                      <option value="4">Over 5 Years</option>
                    </select>
                  </div>

                  {/* CV/Resume link (Instead of tricky local files) */}
                  <div className="space-y-1">
                    <label htmlFor="cand-cv-link" className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">
                      CV or PDF Link (e.g. Google Drive, Dropbox, LinkedIn)
                    </label>
                    <div className="relative">
                      <input
                        id="cand-cv-link"
                        type="url"
                        value={cvLink}
                        onChange={(e) => setCvLink(e.target.value)}
                        placeholder="https://drive.google.com/your-cv.pdf"
                        className="bg-white border border-[#EAECEF] text-xs pl-10 pr-3.5 py-3 w-full focus:outline-none focus:border-[#1997E6]"
                        style={{ borderRadius: "4px" }}
                      />
                      <FileText className="w-4.5 h-4.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Cover Note / Message */}
                  <div className="space-y-1">
                    <label htmlFor="cand-cover" className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">
                      Why should we hire you? (Required Cover Note)
                    </label>
                    <textarea
                      id="cand-cover"
                      required
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      rows={4}
                      placeholder="Share a brief overview of your skills helper and customer experience..."
                      className="bg-white border border-[#EAECEF] text-xs p-3.5 w-full focus:outline-none focus:border-[#1997E6] resize-none"
                      style={{ borderRadius: "4px" }}
                    />
                  </div>

                  {/* Security Badge */}
                  <div className="text-[10px] text-[#64748B] flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Privacy guaranteed. Your personal coordinates are not shared outside our desk.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#1997E6] hover:bg-[#147ec2] text-white font-heading text-xs font-bold tracking-wider uppercase py-4 transition-colors flex items-center justify-center gap-1 cursor-pointer disabled:opacity-50"
                    style={{ borderRadius: "4px" }}
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Transmitting..." : "Submit Application Form"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
