/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ServicesView from "./views/ServicesView";
import PortfolioView from "./views/PortfolioView";
import BlogView from "./views/BlogView";
import ShopView from "./views/ShopView";
import ContactView from "./views/ContactView";
import CareersView from "./views/CareersView";
import PrivacyView from "./views/PrivacyView";
import TermsView from "./views/TermsView";
import { Product, CartItem } from "./types";

export default function App() {
  const [view, setView] = useState<string>("home");
  const [servicesCategoryFilter, setServicesCategoryFilter] = useState<string>("government");
  const [portfolioProjectFilter, setPortfolioProjectFilter] = useState<string | undefined>(undefined);
  
  // Basket Shopping State managed globally
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Scroll directly to the top of the specific section on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  // 8.1 On-Page SEO & Metadata Manager useEffect
  useEffect(() => {
    let pageTitle = "";
    let metaDesc = "";

    switch (view) {
      case "home":
        pageTitle = "Home | Tumaini Cyber — Nairobi";
        metaDesc = "Welcome to Tumaini Cyber Café in Nairobi, Kenya. Perfect prints guaranteed, secure government eCitizen portal filings, premium ATS CVs, and retail accessoriess.";
        break;
      case "about":
        pageTitle = "About Our Hub | Tumaini Cyber — Nairobi";
        metaDesc = "Discover Tumaini Cyber, Nairobi's trusted digital service hub directed by Jane Kamau. Secure portal access, student registrations, and premium prints.";
        break;
      case "services":
        pageTitle = "Catalog of Services | Tumaini Cyber — Nairobi";
        metaDesc = "View our standard catalog: KRA PIN registration, eCitizen payments, student HELB filings, glossy laminations, plastic PVC cards, and custom graphics in KSh.";
        break;
      case "portfolio":
        pageTitle = "Portfolio Gallery | Tumaini Cyber — Nairobi";
        metaDesc = "Browse documented case summaries, university research projects, and corporate compliance setups successfully delivered in Nairobi by Tumaini Cyber.";
        break;
      case "blog":
        pageTitle = "Resource Center | Tumaini Cyber — Nairobi";
        metaDesc = "Free guides and resources written by our technical specialists, covering KRA tax timelines, first ID requirements, and Kenyan health registration tips.";
        break;
      case "shop":
        pageTitle = "Stationery & Accessories | Tumaini Cyber — Nairobi";
        metaDesc = "Shop premium Double A A4 reams, school squared exercise booklets, fast Type-C charger cables, and SanDisk USB thumb drives in Nairobi priced in KSh.";
        break;
      case "contact":
        pageTitle = "Contact Helpdesk | Tumaini Cyber";
        metaDesc = "Reach out to Tumaini Cyber in Ongata Rongai, Nairobi. Access our EAT hours, telephone voice channels, and submit a secure quote request online.";
        break;
      case "careers":
        pageTitle = "Careers | Tumaini Cyber — Join Nairobi's Top Hub";
        metaDesc = "Grow your digital career at Tumaini Cyber. View open roles for digital cabinet attendants, graphic designers, and IT system technicians in Ongata Rongai.";
        break;
      case "privacy":
        pageTitle = "Privacy Policy | Tumaini Cyber";
        metaDesc = "Read how Tumaini Cyber Café handles iTax, eCitizen credentials, identity documents, and temporary cash receipt guidelines securely.";
        break;
      case "terms":
        pageTitle = "Terms of Service | Tumaini Cyber";
        metaDesc = "Review Tumaini Cyber Café's standard digital service terms, transparent price quotes, document typesetting formats, and delivery timelines.";
        break;
      default:
        pageTitle = "Tumaini Cyber — Ongata Rongai";
        metaDesc = "Tumaini Cyber Cafe - Perfect Prints Guaranteed. Your premier government portal helper and custom design shop in Ongata Rongai, Nairobi, Kenya.";
    }

    // Set page title
    document.title = pageTitle;

    // Set meta description
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.setAttribute("name", "description");
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute("content", metaDesc);

    // Set canonical link for SEO on route change
    let canonicalTag: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", window.location.href);

  }, [view]);

  // Handle cross-navigation with specific filters
  const handleNavigation = (targetView: string, filterPayload?: string) => {
    setView(targetView);
    if (targetView === "services" && filterPayload) {
      setServicesCategoryFilter(filterPayload);
    } else if (targetView === "portfolio") {
      setPortfolioProjectFilter(filterPayload);
    } else {
      setPortfolioProjectFilter(undefined);
    }
    setCartOpen(false); // Close slider if navigating
  };

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: Math.min(updated[existingIdx].quantity + 1, 25)
        };
        return updated;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
    // Auto slide open the shopping cart drawer to give direct feedback to user
    setCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: Math.min(quantity, 25) } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8FAFC] text-[#1E293B]">
      {/* Keyboard navigation helper 'Skip to main content' - 10.2 WCAG Compliant */}
      <a
        href="#main-content-anchor"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-500 focus:bg-[#EF233C] focus:text-white focus:px-6 focus:py-3 focus:font-bold focus:shadow-md"
        style={{ borderRadius: "4px" }}
      >
        Skip to main content
      </a>

      {/* Global Sticky Header panel */}
      <Navbar
        currentView={view}
        onNavigate={handleNavigation}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Core routed view target inside semantic main body */}
      <main id="main-content-anchor" className="flex-grow">
        {view === "home" && <HomeView onNavigate={handleNavigation} />}
        {view === "about" && <AboutView onNavigate={handleNavigation} />}
        {view === "services" && (
          <ServicesView initialCategory={servicesCategoryFilter} />
        )}
        {view === "portfolio" && <PortfolioView initialProjectId={portfolioProjectFilter} />}
        {view === "blog" && <BlogView />}
        {view === "shop" && (
          <ShopView
            cart={cart}
            onAddToCart={handleAddToCart}
            onUpdateCartQuantity={handleUpdateCartQuantity}
            onRemoveFromCart={handleRemoveFromCart}
            cartOpen={cartOpen}
            onCloseCart={() => setCartOpen(false)}
            onOpenCart={() => setCartOpen(true)}
          />
        )}
        {view === "contact" && <ContactView />}
        {view === "careers" && <CareersView onNavigate={handleNavigation} />}
        {view === "privacy" && <PrivacyView onNavigate={handleNavigation} />}
        {view === "terms" && <TermsView onNavigate={handleNavigation} />}
      </main>

      {/* Persistent global floating WhatsApp action - Section 7.4 */}
      <WhatsAppButton serviceName={view === "services" ? "custom catalogue prints" : "portal and digital services"} />

      {/* Global 4-Column Footer */}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
