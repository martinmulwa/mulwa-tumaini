/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MessageSquare, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onNavigate: (view: string, categoryFilter?: string) => void;
  id?: string;
}

export default function Footer({ onNavigate, id = "tumaini-footer" }: FooterProps) {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 4500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id={id} className="bg-[#0F172A] border-t border-[#EAECEF] text-white pt-20 pb-8 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="inline-block self-start">
              <Logo variant="horizontal" className="h-24 md:h-28 w-auto object-contain py-0" />
            </div>
            <p className="text-sm text-[#F8FAFC]/80 leading-relaxed max-w-sm">
              Your premier cyber café and digital services partner in Nairobi, Kenya. Committed to offering perfect prints, hassle-free government portal registrations, professional document formatting, and quality laptop accessories. We keep our local community compliant and fully connected.
            </p>
            {/* Social Icons with brand colors on hover */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com/tumainicyber"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#EAECEF]/25 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] rounded-md transition-all duration-250 transform hover:-translate-y-0.5"
                aria-label="Follow Tumaini Cyber on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/tumainicyber"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#EAECEF]/25 flex items-center justify-center hover:bg-[#E1306C] hover:border-[#E1306C] rounded-md transition-all duration-250 transform hover:-translate-y-0.5"
                aria-label="Follow Tumaini Cyber on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/tumainicyber"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#EAECEF]/25 flex items-center justify-center hover:bg-[#1DA1F2] hover:border-[#1DA1F2] rounded-md transition-all duration-250 transform hover:-translate-y-0.5"
                aria-label="Follow Tumaini Cyber on Twitter/X"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com/company/tumainicyber"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#EAECEF]/25 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] rounded-md transition-all duration-250 transform hover:-translate-y-0.5"
                aria-label="Follow Tumaini Cyber on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <h4 className="font-heading font-bold text-sm text-[#F8FAFC] tracking-wider uppercase mb-3">
                Newsletter Signup
              </h4>
              <p className="text-xs text-[#F8FAFC]/60 mb-3 leading-relaxed">
                Stay updated on KRA tax deadlines, SHA changes, and college placement reminders.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-[#1E293B] border border-[#EAECEF]/20 text-white text-sm px-4 py-2 w-full focus:outline-none focus:border-[#1997E6]"
                  style={{ borderRadius: "4px" }}
                  required
                />
                <button
                  type="submit"
                  className="bg-[#1997E6] hover:bg-[#1483c7] text-white px-4 py-2 text-sm font-semibold transition-all duration-250 select-none cursor-pointer"
                  style={{ borderRadius: "4px" }}
                >
                  Join
                </button>
              </form>
              {success && (
                <p className="text-xs text-[#25D366] mt-2 font-medium">
                  ✓ Successfully subscribed to alerts!
                </p>
              )}
            </div>
          </div>

          {/* Column 2: popular services (6 links) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#F8FAFC]/55">
              Service Offerings
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("services", "government")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Government Portals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services", "printing")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Document Printing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services", "computer")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Computer Browsing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services", "design")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  ATS CV Writing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services", "design")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Graphic Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services", "business")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Bulk School Printing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (About, Team, Portfolio, Blog, Careers, Contact) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#F8FAFC]/55">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  About Our Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Meet the Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("portfolio")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Portfolio Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("blog")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Blog & Resource Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("careers")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Careers (We are Hiring)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-[#F8FAFC]/80 hover:text-[#1997E6] text-left transition-colors duration-250 cursor-pointer"
                >
                  Contact Helpdesk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Core */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#F8FAFC]/55">
              Contact Us Directly
            </h4>
            <ul className="space-y-3.5 text-sm text-[#F8FAFC]/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1997E6] flex-shrink-0 mt-0.5" />
                <span>Ongata Rongai, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1997E6] flex-shrink-0" />
                <a href="tel:+254759607619" className="hover:text-[#1997E6] transition-colors">+254 759 607 619</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/254759607619?text=Hello%20Tumaini%20Cyber,%20I'd%20like%20to%20enquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  +254 759 607 619 (WhatsApp Support)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1997E6] flex-shrink-0" />
                <a href="mailto:info@tumainicyber.com" className="hover:text-[#1997E6] transition-colors">info@tumainicyber.com</a>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white text-xs uppercase tracking-wider">Business Operating Hours (EAT)</span>
                  <span className="text-xs block text-[#25D366] font-extrabold uppercase">Open Everyday of the Week</span>
                  <span className="text-xs block text-[#F8FAFC]/70">7:00 AM — 12:00 AM Midnight</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and credits to Martin Mulwa */}
        <div className="border-t border-[#EAECEF]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#F8FAFC]/40 font-medium">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; 2026 Tumaini Cyber. All Rights Reserved. Designed & Developed by <strong className="text-[#F8FAFC]/70 hover:text-[#1997E6]">{`Martin Mulwa`}</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => onNavigate("privacy")} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => onNavigate("terms")} className="hover:text-white transition-colors cursor-pointer">Terms of Service</button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-all cursor-pointer bg-[#1E293B] px-3 py-1.5 rounded"
              aria-label="Back to top of page"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
