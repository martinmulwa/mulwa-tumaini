# Tumaini Cyber Portal - High-Performance Client Showcase

<p align="center">
  <img src="./tumaini-cyber-logo.png" alt="Tumaini Cyber Logo" style="border-radius: 8px; max-width: 100%; height: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" referrerPolicy="no-referrer" />
</p>

## 🚀 Welcome Prospective Employers & Clients
This project is an **enterprise-grade, high-conversion full-stack digital showcase** built for **Tumaini Cyber**, Nairobi's premier technical hub. Specially engineered to demonstrate advanced expertise in modern React 18, TypeScript, Tailwind CSS, Node.js/Express, and micro-interactions, it serves as a live testament to professional software engineering standards, modular code separation, and pixel-perfect design practices.

---

### 🔗 Quick Navigation & Project Links
* **Live Web Portal:** **[https://tumaini-cyber.netlify.app/](https://tumaini-cyber.netlify.app/)**
* **GitHub Repository:** **[https://github.com/martinmulwa95/tumaini-cyber-portal](https://github.com/martinmulwa95/tumaini-cyber-portal)**
* **Developer Portfolio:** **[Martin Mulwa - GitHub Profile](https://github.com/martinmulwa95)**

---

## ⚡ What Makes This Project Resume-Worthy? (Engineering Skills Under the Hood)

This application isn't just a static landing page—it is a deeply integrated, state-driven client-focused product. By digging into the code, recruiters, hiring managers, and prospective clients will find clean implementation of the following concepts:

### 1. Robust Modular State Architecture
Instead of cramming logic into monolithic files, the codebase adheres to strict modular principles. All custom views (e.g., `HomeView`, `ServicesView`, `PortfolioView`, `BlogView`, `ShopView`, `AboutView`, `ContactView`) are isolated, while shared state—such as the active layout views, the real-time client-side shopping cart drawer, and interactive event triggers—are coordinated cleanly at the root level (`App.tsx`) with zero-render-jitter.

### 2. High-Performance Mobile-Responsive Layouts
- **Zero-Shift CSS Layouts:** Added strict minimum bounding heights to hero slides preventing layout shifts (CLS) when dynamic texts slide.
- **Pixel-Perfect Scaling:** Re-engineered the main header and responsive desktop nav links to support micro-layout constraints when transitioning down to medium tablet break-points.
- **Touch-Friendly Hitboxes:** Minimum 44px hitboxes for buttons across responsive dimensions.

### 3. Business-Driven Integrations
- **WhatsApp Direct Checkout API:** Calculates complex itemized subtotals inside the local checkout cart and automatically packages them into a beautifully structured, pre-filled WhatsApp API text link (`wa.me`) for instant client-to-business checkout completion.
- **Interactive Deep-Links:** Allows users to view real-time case studies and complete articles, and immediately redirects them back to custom, prepopulated corporate dialogue support vectors with smooth auto-scroll to header focus.

### 4. Flawless Micro-Animations & HTML5 Canvas Physics
- Custom zero-dependency particles physics system inside `<Confetti />` executing fluid rotation, mass, gravity, and drag dynamics at 60 FPS upon contact form deliveries.
- Ambient typography animations using carefully structured keyframe tracks (`animate-gradient-text`, `glow-btn`, `shine-hover-card`).

---

## 🛠️ Feature Highlights

* **🛒 E-Commerce Cart & Automated Pricing:** Interactive stationery, compute accessory, and voucher shelf compiling precise M-Pesa client checkout packages.
* **📚 Resource & Article Hub:** Highly readable search and category-filtered informational suite styled for peak editorial reading comfort.
* **💼 Projects Portfolio & Case Studies:** Filterable business index showcasing delivered project specifications, business impacts, and validated performance metrics.
* **🏢 Interactive Services Catalog:** Synchronized 3-category navigation mapping exact government, business, and educational digital pricing tiers.

---

## 📂 Key Architecture Map
```text
src/
├── App.tsx               <- Central state coordinator, view router, and sliding cart manager
├── main.tsx              <- Clean root initiator
├── index.css             <- Typography setup with theme-level keyframes
├── types.ts              <- Strict unified data schemas and object models
├── components/           <- High-quality modular primitives
│   ├── Logo.tsx          <- High-contrast branding element matching parent navigation heights
│   ├── Navbar.tsx        <- Breakpoint-safe navigation bar matching logo scale
│   ├── Footer.tsx        <- Fully structured, categorized footer linking services
│   ├── Confetti.tsx      <- Custom 60 FPS HTML5 Canvas physical particle simulator
│   └── WhatsAppIcon.tsx  <- Scalable Vector Graphics logo representation
├── data/                 <- Hardened data stores
│   ├── servicesCatalog.ts
│   ├── blogData.ts       
│   ├── portfolioData.ts  
│   └── shopData.ts       
└── views/                <- Rich multi-layered user experience views
    ├── HomeView.tsx      
    ├── ServicesView.tsx  
    ├── BlogView.tsx      
    ├── PortfolioView.tsx 
    └── ShopView.tsx      
```

---

## 💼 Let's Build Something Great Together!
This portal demonstrates my ability to take a ambiguous freelance requirement and turn it into a top-tier, production-deployable digital asset. I am currently open to:
- **Full-Time Software Engineering Roles** (React, TypeScript, Next.js, Node.js/Express, Cloud Ops)
- **Freelance & Contract Engagements** (Bespoke E-commerce, modern custom landing pages, administrative/automation portals)

If you're a prospective client or employer looking to build lightning-fast web products with meticulous attention to detail, don't hesitate to reach out:

📧 **Email:** **martinmulwa1711@gmail.com**  
💼 **Portfolio & Live App:** **[https://tumaini-cyber.netlify.app/](https://tumaini-cyber.netlify.app/)**

---
*Created with ❤️ by **Martin Mulwa** © 2026. Code freely available under Apache-2.0.*
