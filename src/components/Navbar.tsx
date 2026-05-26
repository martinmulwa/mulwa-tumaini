/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, ShoppingCart, MessageSquare, Plus } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, filterCategory?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  id?: string;
}

export default function Navbar({ currentView, onNavigate, cartCount, onOpenCart, id = "tumaini-navbar" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic border and transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = (view: string, filterCategory?: string) => {
    onNavigate(view, filterCategory);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", view: "home" },
    { name: "About", view: "about" },
    { name: "Services", view: "services", dropdown: true },
    { name: "Portfolio", view: "portfolio" },
    { name: "Blog", view: "blog" },
    { name: "Shop", view: "shop" },
    { name: "Contact", view: "contact" }
  ];

  const serviceCategories = [
    { name: "Government Services", slug: "government" },
    { name: "Printing & Production", slug: "printing" },
    { name: "Computer & Internet", slug: "computer" },
    { name: "Design & Typesetting", slug: "design" },
    { name: "Business Services", slug: "business" }
  ];

  return (
    <header
      id={id}
      className={`sticky top-0 z-100 transition-all duration-300 font-sans border-b ${
        scrolled ? "bg-slate-50/85 backdrop-blur-md shadow-sm border-[#EAECEF]" : "bg-white border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 h-24 md:h-28 flex items-center justify-between">
        {/* Logo block */}
        <button
          onClick={() => handleNavItemClick("home")}
          className="hover:opacity-95 transition-all text-left flex items-center cursor-pointer"
          aria-label="Tumaini Cyber Home"
        >
          <Logo variant="horizontal" className="h-20 md:h-24 lg:h-28 w-auto object-contain flex-shrink-0 py-1" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.view}
              className="relative"
              onMouseEnter={() => link.dropdown && setServicesDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setServicesDropdownOpen(false)}
            >
              {link.dropdown ? (
                <button
                  onClick={() => handleNavItemClick("services")}
                  className={`flex items-center gap-1 font-heading text-sm font-bold tracking-wide uppercase transition-colors duration-250 cursor-pointer ${
                    currentView === "services" ? "text-[#1997E6]" : "text-[#1E293B] hover:text-[#1997E6]"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => handleNavItemClick(link.view)}
                  className={`font-heading text-sm font-bold tracking-wide uppercase transition-colors duration-250 cursor-pointer relative ${
                    currentView === link.view ? "text-[#1997E6]" : "text-[#1E293B] hover:text-[#1997E6]"
                  }`}
                >
                  {link.name}
                  {currentView === link.view && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#1997E6] transition-all duration-300" />
                  )}
                </button>
              )}

              {/* Services Dropdown */}
              {link.dropdown && servicesDropdownOpen && (
                <div
                  className="absolute left-0 mt-0 w-64 bg-white border border-[#EAECEF] py-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200"
                  style={{ borderRadius: "4px" }}
                >
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => handleNavItemClick("services", cat.slug)}
                      className="w-full text-left px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1E293B] hover:bg-slate-50 hover:text-[#1997E6] transition-all cursor-pointer"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="p-2.5 text-[#1E293B] hover:text-[#1997E6] transition-colors relative cursor-pointer"
            aria-label="Open Cart"
          >
            <ShoppingCart className="w-5.5 h-5.5" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-[#EF233C] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Phone Link */}
          <a
            href="tel:+254712345678"
            className="flex items-center gap-1.5 text-xs font-bold text-[#1E293B] hover:text-[#1997E6] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#1997E6]" />
            <span className="font-mono tracking-tight">+254 712 345 678</span>
          </a>

          {/* Request Quote Button */}
          <button
            onClick={() => handleNavItemClick("contact")}
            className="bg-[#1997E6] hover:bg-[#147ec2] text-white font-heading text-xs font-bold tracking-wider uppercase px-5 py-3 transition-all duration-250 cursor-pointer select-none"
            style={{ borderRadius: "4px" }}
          >
            Request Quote
          </button>
        </div>

        {/* Mobile Actions Overlay (Cart + Hamburger) */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Cart */}
          <button
            onClick={onOpenCart}
            className="p-2 text-[#1E293B] hover:text-[#1997E6] transition-colors relative cursor-pointer"
            aria-label="Open Mobile Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#EF233C] text-white text-[9px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full border border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1E293B] hover:text-[#1997E6] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6.5 h-6.5" /> : <Menu className="w-6.5 h-6.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAECEF] bg-white w-full shadow-lg absolute left-0 right-0 py-6 max-h-[85vh] overflow-y-auto font-sans">
          <nav className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.view} className="border-b border-slate-50 pb-2">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="w-full flex items-center justify-between font-heading text-sm font-bold tracking-wide uppercase text-[#1E293B]"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesDropdownOpen && (
                      <div className="mt-2 pl-4 space-y-3 flex flex-col pt-1">
                        {serviceCategories.map((cat) => (
                          <button
                            key={cat.slug}
                            onClick={() => handleNavItemClick("services", cat.slug)}
                            className="w-full text-left text-xs font-semibold py-1 uppercase tracking-wider text-[#64748B] hover:text-[#1997E6]"
                          >
                            {cat.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavItemClick(link.view)}
                    className={`w-full text-left font-heading text-sm font-bold tracking-wide uppercase ${
                      currentView === link.view ? "text-[#1997E6]" : "text-[#1E293B]"
                    }`}
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+254712345678"
                className="w-full flex items-center justify-center gap-2 border border-[#EAECEF] py-3 text-sm font-bold text-[#1E293B] active:bg-slate-50"
                style={{ borderRadius: "4px" }}
              >
                <Phone className="w-4 h-4 text-[#1997E6]" />
                <span className="font-mono">+254 712 345 678</span>
              </a>

              <a
                href="https://wa.me/254712345678?text=Hello%20Tumaini%20Cyber,%20I'd%20like%20to%20enquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] py-3 text-sm font-bold text-white active:bg-emerald-600"
                style={{ borderRadius: "4px" }}
              >
                <MessageSquare className="w-4 h-4 text-white fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => handleNavItemClick("contact")}
                className="w-full bg-[#1997E6] hover:bg-[#147ec2] py-3 text-sm font-heading font-bold tracking-wider uppercase text-white"
                style={{ borderRadius: "4px" }}
              >
                Request Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
