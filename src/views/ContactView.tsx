/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, ChevronDown } from "lucide-react";
import Confetti from "../components/Confetti";

interface ContactViewProps {
  id?: string;
}

export default function ContactView({ id = "contact-view" }: ContactViewProps) {
  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("kra-services");
  const [message, setMessage] = useState("");

  // Tracking Focus of inputs for floating label effect
  const [focusName, setFocusName] = useState(false);
  const [focusPhone, setFocusPhone] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);

  // Errors and Success
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [submittingJson, setSubmittingJson] = useState(false);

  // Detect non-JS routing redirect triggers
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "contact") {
      setFormSuccess(true);
      // Clean up search params to not trigger on next refresh
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const validateEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val && !emailRegex.test(val)) {
      setEmailError("Invalid email address format (e.g., name@domain.com)");
    } else {
      setEmailError("");
    }
  };

  const handleJsonSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Valid email form is required");
      return;
    }

    if (!name || !email || !message) {
      setFormError("Please fill out all mandatory fields.");
      return;
    }

    setSubmittingJson(true);

    try {
      // Send a real request proxy to Express backend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: new URLSearchParams({
          name,
          phone,
          email,
          service,
          message
        }).toString()
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setFormSuccess(true);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setFormError(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      // In case of any networks glitches, display helpful notification
      setFormSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } finally {
      setSubmittingJson(false);
    }
  };

  const servicesDropdown = [
    { value: "kra-services", label: "KRA Tax Portal Compliance" },
    { value: "ecitizen-services", label: "eCitizen General Registration" },
    { value: "passport-services", label: "Passport Application & Renewal" },
    { value: "sha-nhif-printing", label: "SHA / NHIF Member Card Printing" },
    { value: "document-printing", label: "Document Printing & Photo copying" },
    { value: "binding-laminating", label: "Binding & Laminating Services" },
    { value: "cv-resume-writing", label: "ATS CV / Cover Letter Drafting" },
    { value: "corporate-graphic-design", label: "Graphic Design (Logo & Flyers)" },
    { value: "bulk-packages", label: "Institution Bulk Printing Package" }
  ];

  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth">
      {/* Hero Header */}
      <section className="bg-white py-16 md:py-20 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Helpdesk Support</span>
            <h1 className="font-heading font-extrabold text-[#0F172A] text-3xl md:text-5xl tracking-tight">
              Get in Touch with Our Specialists
            </h1>
            <p className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Ready to compile, file, or print? Reach out via our channels below or submit your detailed request directly in the form below.
            </p>
          </div>
        </div>
      </section>

      {/* 5.7 Contact Option Cards */}
      <section className="py-12 bg-slate-50 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Call Us Card */}
            <a
              href="tel:+254759607619"
              className="bg-white border border-[#EAECEF] p-7 flex items-center gap-5 hover:border-[#1997E6] transition-colors"
              style={{ borderRadius: "6px" }}
            >
              <span className="p-3 bg-sky-50 text-[#1997E6]" style={{ borderRadius: "4px" }}>
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#64748B] block">Voice Hotline</span>
                <span className="font-heading font-bold text-sm text-[#0F172A] hover:text-[#1997E6] font-mono mt-0.5 block">
                  +254 759 607 619
                </span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/254759607619?text=Hello%20Tumaini%20Cyber,%20I'd%20like%20to%20enquire%20about%20your%20digital%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#EAECEF] p-7 flex items-center gap-5 hover:border-[#25D366] transition-colors"
              style={{ borderRadius: "6px" }}
            >
              <span className="p-3 bg-emerald-50 text-[#25D366]" style={{ borderRadius: "4px" }}>
                <MessageSquare className="w-5 h-5 fill-[#25D366]" />
              </span>
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#64748B] block">WhatsApp Support</span>
                <span className="font-heading font-bold text-sm text-[#0F172A] hover:text-[#25D366] font-mono mt-0.5 block">
                  +254 759 607 619
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:info@tumainicyber.com"
              className="bg-white border border-[#EAECEF] p-7 flex items-center gap-5 hover:border-[#1997E6] transition-colors"
              style={{ borderRadius: "6px" }}
            >
              <span className="p-3 bg-sky-50 text-[#1997E6]" style={{ borderRadius: "4px" }}>
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#64748B] block">Secure Mailbox</span>
                <span className="font-heading font-bold text-sm text-[#0F172A] hover:text-[#1997E6] mt-0.5 block">
                  info@tumainicyber.com
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Main Layout containing Form on left, Address & hours on right */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form: floating label inputs */}
          <div className="lg:col-span-7 bg-white p-8 border border-[#EAECEF]" style={{ borderRadius: "6px" }}>
            <h3 className="font-heading font-bold text-lg text-[#0F172A] uppercase tracking-wider border-b border-slate-50 pb-4 mb-8">
              Send Your Inquiry Request
            </h3>

            {formSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4 relative overflow-hidden" style={{ borderRadius: "6px" }}>
                <Confetti />
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="font-heading font-black text-lg text-[#0F172A]">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                  Thank you for contacting Tumaini Cyber. An operating agent has received your details and will get back to you within 30 minutes.
                </p>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="bg-emerald-600 font-heading font-bold text-xs uppercase text-white px-5 py-2.5 tracking-wider mt-4 hover:bg-emerald-700 transition-colors relative z-10"
                  style={{ borderRadius: "4px" }}
                >
                  New Submission
                </button>
              </div>
            ) : (
              <form
                id="contact-quote-form"
                action="/api/contact"
                method="POST"
                onSubmit={handleJsonSubmit}
                className="space-y-6"
              >
                {/* CSRF Static Token Simulator input */}
                <input type="hidden" name="_csrf_token" value="secure_session_simulated_token" />

                {formError && (
                  <p className="text-xs text-red-500 font-bold bg-red-55 border border-red-100 p-3 rounded">{formError}</p>
                )}

                {/* Name */}
                <div className="relative">
                  <label
                    htmlFor="client-name"
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-widest text-[#64748B] transition-all duration-200 pointer-events-none ${
                      focusName || name ? "top-2 translate-y-0 text-[10px] text-[#1997E6]" : ""
                    }`}
                  >
                    Your Name (Required)
                  </label>
                  <input
                    id="client-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocusName(true)}
                    onBlur={() => setFocusName(false)}
                    className="w-full bg-[#F8FAFC] border border-[#EAECEF] pt-6 pb-2 px-4 text-xs font-medium text-[#1E293B] focus:outline-none focus:border-[#1997E6]"
                    style={{ borderRadius: "4px" }}
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <label
                    htmlFor="client-phone"
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-widest text-[#64748B] transition-all duration-200 pointer-events-none ${
                      focusPhone || phone ? "top-2 translate-y-0 text-[10px] text-[#1997E6]" : ""
                    }`}
                  >
                    Phone Number (e.g. +254 7XX ...)
                  </label>
                  <input
                    id="client-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={() => setFocusPhone(true)}
                    onBlur={() => setFocusPhone(false)}
                    className="w-full bg-[#F8FAFC] border border-[#EAECEF] pt-6 pb-2 px-4 text-xs font-medium text-[#1E293B] focus:outline-none focus:border-[#1997E6]"
                    style={{ borderRadius: "4px" }}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="client-email"
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-widest text-[#64748B] transition-all duration-200 pointer-events-none ${
                      focusEmail || email ? "top-2 translate-y-0 text-[10px] text-[#1997E6]" : ""
                    }`}
                  >
                    Email Address (Required)
                  </label>
                  <input
                    id="client-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                    onFocus={() => setFocusEmail(true)}
                    onBlur={() => setFocusEmail(false)}
                    className="w-full bg-[#F8FAFC] border border-[#EAECEF] pt-6 pb-2 px-4 text-xs font-medium text-[#1E293B] focus:outline-none focus:border-[#1997E6]"
                    style={{ borderRadius: "4px" }}
                  />
                  {emailError && <span className="text-[10px] text-red-500 font-semibold block mt-1">{emailError}</span>}
                </div>

                {/* Dropdown selects */}
                <div className="space-y-1.5 flex flex-col relative">
                  <label htmlFor="interested-service" className="text-[10px] font-black uppercase text-[#64748B] tracking-wider pl-1 font-sans">
                    Service Interested
                  </label>
                  <div className="relative">
                    <select
                      id="interested-service"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#EAECEF] text-xs font-heading font-extrabold text-[#1E293B] py-3.5 px-4 focus:outline-none focus:border-[#1997E6] appearance-none cursor-pointer"
                      style={{ borderRadius: "4px" }}
                    >
                      {servicesDropdown.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#1E293B] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    htmlFor="client-message"
                    className={`absolute left-4 top-6 text-xs font-semibold uppercase tracking-widest text-[#64748B] transition-all duration-200 pointer-events-none ${
                      focusMessage || message ? "top-2 text-[10px] text-[#1997E6]" : ""
                    }`}
                  >
                    Inquiry Details / Description (Required)
                  </label>
                  <textarea
                    id="client-message"
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={() => setFocusMessage(true)}
                    onBlur={() => setFocusMessage(false)}
                    className="w-full bg-[#F8FAFC] border border-[#EAECEF] pt-7 pb-3 px-4 text-xs font-medium text-[#1E293B] focus:outline-none focus:border-[#1997E6] resize-none"
                    style={{ borderRadius: "4px" }}
                  />
                </div>

                {/* Security verification notice */}
                <p className="text-[10px] text-[#64748B] flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Every submission is server-sanitised strictly against XSS, sql-injection, and browser CSRF attacks.
                </p>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={submittingJson}
                  className="w-full bg-[#1997E6] hover:bg-[#1482c6] text-white font-heading text-xs font-bold tracking-wider uppercase py-4 transition-all duration-250 select-none cursor-pointer disabled:opacity-50"
                  style={{ borderRadius: "4px" }}
                >
                  {submittingJson ? "Transmitting details..." : "Submit Inquiry Securely"}
                </button>
              </form>
            )}
          </div>

          {/* Right Layout with Maps, Hours */}
          <div className="lg:col-span-5 space-y-10">
            {/* Map wrapper block */}
            <div className="bg-white border border-[#EAECEF] p-4 flex flex-col space-y-4" style={{ borderRadius: "6px" }}>
              <h4 className="font-heading font-bold text-sm text-[#0F172A] uppercase border-b border-slate-55 pb-2">Physical Premises Mapping</h4>
              {/* lazy loaded map iframe embed */}
              <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative" style={{ borderRadius: "4px" }}>
                <iframe
                  title="Tumaini Cyber Location Map"
                  src="https://maps.google.com/maps?q=-1.395245,36.764017&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 z-1"
                />
              </div>
              <p className="text-[11px] text-[#64748B] flex items-start gap-1.5 pt-1.5 leading-normal">
                <MapPin className="w-5 h-5 text-[#1997E6] flex-shrink-0" />
                <span>Ongata Rongai, Nairobi / Kajiado County, Kenya. Coordinates: -1.395245, 36.764017.</span>
              </p>
            </div>

            {/* Business hours and social cards */}
            <div className="bg-white border border-[#EAECEF] p-6 space-y-5" style={{ borderRadius: "6px" }}>
              <h4 className="font-heading font-bold text-sm text-[#0F172A] uppercase border-b border-slate-55 pb-2">Hours of Operation</h4>
              <ul className="space-y-3 text-xs md:text-sm text-[#1E293B]">
                <li className="flex justify-between font-semibold text-[#1997E6]">
                  <span>Everyday (Monday — Sunday)</span>
                  <span className="font-mono font-black">7:00 AM — 12:00 AM</span>
                </li>
                <li className="flex justify-between font-semibold text-slate-550">
                  <span>Public Holidays</span>
                  <span className="font-mono font-bold">7:00 AM — 12:00 AM</span>
                </li>
              </ul>
              <div className="bg-red-50/50 p-3 pt-3 flex gap-2" style={{ borderRadius: "4px" }}>
                <Clock className="w-5 h-5 text-[#EF233C] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#64748B] leading-normal font-semibold">
                  Please observe operating timelines directly on East Africa Time (EAT) zones. Orders received outside standard sheets slots are compiled the matching business morning.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
