/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service } from "../types";

export const servicesCatalog: Service[] = [
  // 6.1 Government & eCitizen Services
  {
    id: "kra-services",
    name: "KRA Services",
    category: "government",
    description: "Full iTax portal facilitation including PIN registration, PIN retrieval, filing individual/business tax returns, applying for Tax Compliance Certificates (TCC), PIN amendments, and ETIMS registration.",
    included: [
      "KRA PIN Registration & Retrieval",
      "Individual & Business iTax Returns Filing",
      "Tax Compliance Certificate (TCC) Applications",
      "PIN Amendment & Update facilitation",
      "ETIMS onboarding and registration"
    ],
    pricing: "From KSh 200",
    iconName: "FileSpreadsheet"
  },
  {
    id: "ecitizen-services",
    name: "eCitizen Services",
    category: "government",
    description: "Expert assistance for general eCitizen account creation, portal navigation, applications, and convenient payment facilitation for government utilities.",
    included: [
      "eCitizen Account Creation & Verification",
      "Portal Navigation & Guidance",
      "Government Service Fee Payment Facilitation",
      "Application Status Tracking"
    ],
    pricing: "From KSh 150",
    iconName: "UserCheck"
  },
  {
    id: "national-id-services",
    name: "National ID Services",
    category: "government",
    description: "Comprehensive support for physical and digital National ID processes, including first-time applications, duplicate/replacement orders, and active tracking.",
    included: [
      "First-time National ID Application Guidance",
      "Duplicate & Replacement Registration",
      "Tracking ID Application Status",
      "Iprs / Maisha Card Portal assistance"
    ],
    pricing: "From KSh 150",
    iconName: "CreditCard"
  },
  {
    id: "passport-services",
    name: "Passport Services",
    category: "government",
    description: "Start-to-finish passport applications, both first-time and renewals. We assist with digital uploads, biometric appointment bookings, and delivery tracking.",
    included: [
      "New Passport & Renewal Applications",
      "Biometrics Appointment Booking",
      "Required Document Verification",
      "Passport Status Tracking"
    ],
    pricing: "From KSh 500",
    iconName: "Globe"
  },
  {
    id: "nssf-services",
    name: "NSSF Services",
    category: "government",
    description: "Quick NSSF registrations for both individuals and employers, generating contribution statements, and printing high-quality official physical NSSF cards.",
    included: [
      "Individual NSSF Registration",
      "Employer NSSF Portal Onboarding",
      "Contribution Statement Printing",
      "Physical Card Printing"
    ],
    pricing: "From KSh 100",
    iconName: "ShieldAlert"
  },
  {
    id: "nhif-sha-services",
    name: "NHIF / SHA Services",
    category: "government",
    description: "Transition smoothly to SHA. Support with brand new SHA registrations, physical member card printing, updating monthly contributions, and adding dependents.",
    included: [
      "NHIF / SHA Registration & Onboarding",
      "Physical Card Printing (Glossy finish)",
      "Dependent Amendments & Beneficiary Updates",
      "Payment Updates and Contribution Statements"
    ],
    pricing: "From KSh 100",
    iconName: "HeartPulse"
  },
  {
    id: "ntsa-services",
    name: "NTSA Services",
    category: "government",
    description: "Complete NTSA TIMS assistance including fresh smart driving licence applications, renewals, booking vehicle inspections, and conducting instant DL checks.",
    included: [
      "Smart Driving Licence Applications",
      "DL Renewal Facilitation",
      "Vehicle Inspection Booking",
      "NTSA TIMS Portal Status Checks"
    ],
    pricing: "From KSh 200",
    iconName: "Car"
  },
  {
    id: "helb-services",
    name: "HELB Services",
    category: "government",
    description: "Onboarding and application assistance for students seeking Higher Education Loans Board (HELB) loans, printing summaries, statements, and compliance audits.",
    included: [
      "First-time and Subsequent Loan Applications",
      "Loan Statement Downloads & Printing",
      "Compliance / Clearance Certificate assistance",
      "Undergraduate & TVET Portal Guidance"
    ],
    pricing: "From KSh 150",
    iconName: "GraduationCap"
  },
  {
    id: "kuccps-services",
    name: "KUCCPS Services",
    category: "government",
    description: "Navigate the university and college placement portal seamlessly. We assist with course applications, subject revisions, and institutional confirmations.",
    included: [
      "KUCCPS Account Activation",
      "Course Selection & Subject Alignments",
      "First/Second Course Revision Assistance",
      "Placement Confirmation Downloads"
    ],
    pricing: "From KSh 200",
    iconName: "BookOpen"
  },
  {
    id: "business-registration",
    name: "Business Registration",
    category: "government",
    description: "Begin your business venture legally. We assist with name searches, sole proprietorship setups, and company name reservations through the BRS portal.",
    included: [
      "Official Business Name Search & Reservation",
      "Sole Proprietorship Registration",
      "Partnership/Company Application support",
      "CR12 Document Downloads & Printing"
    ],
    pricing: "From KSh 500",
    iconName: "Briefcase"
  },
  {
    id: "good-conduct-certificate",
    name: "Good Conduct Certificate",
    category: "government",
    description: "Streamline your Police Clearance application through the DCI portal. We handle eCitizen scheduling, document prints, and final fingerprint appointment slips.",
    included: [
      "Police Clearance (DCI) Application",
      "Fingerprints Scheduling & Fee Payment",
      "Application Form Printing",
      "Tracking and printing the completed certificate"
    ],
    pricing: "From KSh 200",
    iconName: "Fingerprint"
  },
  {
    id: "tsc-services",
    name: "TSC Services",
    category: "government",
    description: "Expert assistance for teachers applying for Teachers Service Commission (TSC) numbers, portal updates, and downloading teacher payslips.",
    included: [
      "New Teacher Registration & Document Uploads",
      "TSC Portal Navigation & Information Updates",
      "T-Pay Setup and Payslip Downloads",
      "Appraisal (TPAD) System facilitation"
    ],
    pricing: "From KSh 200",
    iconName: "PenTool"
  },
  {
    id: "huduma-namba-maisha",
    name: "Huduma Namba / Maisha Number",
    category: "government",
    description: "Hassle-free facilitation for government numbers, identity tracking, and digital system integration under the Maisha Ecosystem.",
    included: [
      "Maisha Number Portal Assistance",
      "Huduma Card status tracking",
      "Verification slip printing",
      "Official Identity Portal Updates"
    ],
    pricing: "From KSh 100",
    iconName: "Sparkles"
  },
  {
    id: "visa-applications",
    name: "Visa Applications",
    category: "government",
    description: "Professional tourist, business, and student visa form-filling assistance. Please note: we offer application typesetting and document uploads, not consular decisions.",
    included: [
      "Schengen, US, UK, and regional Visa Application forms",
      "Supporting Document scans & digital assembly",
      "Appointment Booking systems guidance",
      "Strict layout and photograph compliance review"
    ],
    pricing: "From KSh 1,000",
    iconName: "Compass"
  },

  // 6.2 Printing & Production Services
  {
    id: "document-printing",
    name: "Document Printing",
    category: "printing",
    description: "Crisp, professional-grade printing on premium paper stocks. Available in both rich black & white and vibrant full-colour across standard A4 and A3 formats.",
    included: [
      "Black & White Printing (A4/A3)",
      "High-Resolution Colour Printing (A4/A3)",
      "Single-sided and Double-sided layout printing",
      "Gloss, Matte, and premium heavy cardstocks"
    ],
    pricing: "From KSh 10 (B&W) / KSh 20 (Colour)",
    iconName: "Printer"
  },
  {
    id: "large-format-printing",
    name: "Large Format Printing",
    category: "printing",
    description: "High-impact printing designed to stand out. We produce crisp banners, promotional posters of up to A0 sizing, and elegant backdrop prints for events.",
    included: [
      "High-definition posters (A2, A1, A0 sizes)",
      "Heavy-duty outdoor flex banners",
      "Pull-up banner stand printing & assembly",
      "Corporate event backdrop materials"
    ],
    pricing: "From KSh 800",
    iconName: "Maximize"
  },
  {
    id: "id-card-printing",
    name: "ID & Card Printing",
    category: "printing",
    description: "Durable and secure cards for identity or branding. We print high-quality plastic staff ID cards, university student cards, and professional business cards.",
    included: [
      "PVC Plastic Staff Identification Cards",
      "Official Student ID Badges (with barcode/QRs)",
      "Premium Matte, Glossy or Textured Business Cards",
      "ID card holders and branded lanyards"
    ],
    pricing: "From KSh 150 (PVC ID) / KSh 500 (100 Business Cards)",
    iconName: "Contact"
  },
  {
    id: "binding-services",
    name: "Binding",
    category: "printing",
    description: "A wide variety of presentation options including budget-friendly spiral and comb setups or high-quality thermal and hard-bound perfect wrapping for reports and academic theses.",
    included: [
      "Spiral Binding (Plastic Coil)",
      "Comb Binding (Standard Ring)",
      "Thermal Professional Binding",
      "Hard-bound Book and Academic Thesis Binding"
    ],
    pricing: "From KSh 100",
    iconName: "BookOpenCheck"
  },
  {
    id: "laminating-services",
    name: "Laminating",
    category: "printing",
    description: "Keep your critical documents and licenses safe from moisture, stains, and wear. We laminate and seal everything from ID card size up to ledger A3 scales.",
    included: [
      "Standard document lamination (A4 and A3 sizes)",
      "Mini sealing for National IDs, NHIF, DLs",
      "Heavy-duty gloss and matte laminate materials",
      "Menu cards and noticeboard weatherproofing"
    ],
    pricing: "From KSh 50",
    iconName: "Layers"
  },
  {
    id: "photocopying-services",
    name: "Photocopying",
    category: "printing",
    description: "Super-fast duplicate copying in monochrome or rich colour. Perfect for bulk handouts, contracts, and legal documentation with high-speed automatic feeds.",
    included: [
      "Ultra-fast monochrome duplicating (A4/A3)",
      "High fidelity dual-side colour photocopying",
      "Bulk copying discounts for schools & small firms",
      "Automatic document sorting and stapling"
    ],
    pricing: "From KSh 5 (B&W) / KSh 20 (Colour)",
    iconName: "Copy"
  },
  {
    id: "scanning-services",
    name: "Scanning",
    category: "printing",
    description: "High-resolution digital archives. We scan paper forms, passports, books, or blueprints into multi-page searchable PDF or premium JPEG files, sent directly to email.",
    included: [
      "High resolution optical scanning (A4/A3 sizes)",
      "Output to PDF (searchable option) or JPEG",
      "Direct email/WhatsApp cloud delivery",
      "Document clean-up and color adjustment"
    ],
    pricing: "From KSh 20 per page",
    iconName: "Scan"
  },
  {
    id: "passport-photos",
    name: "Passport Photos",
    category: "printing",
    description: "Studio-lit, high-resolution portrait photos formatted to strict official standards (2x2 inches). Printed in sets of 4 or 6 with instant digital copies.",
    included: [
      "2x2 inch standard white background photos",
      "Meets US, eCitizen, Schengen Visa requirements",
      "Printed on high-gloss premium photo paper",
      "Digital soft copy delivered via email"
    ],
    pricing: "KSh 250 (Set of 4) / KSh 350 (Set of 6)",
    iconName: "Camera"
  },

  // 6.3 Computer & Internet Services
  {
    id: "internet-browsing",
    name: "Internet Browsing",
    category: "computer",
    description: "High-speed broadband browsing in a quiet, air-conditioned environment. Fitted with high-resolution screens and loaded with all standard web clients.",
    included: [
      "Fiber-optic high-speed internet connection",
      "Quiet, premium work terminals with USB access",
      "Browser access via Chrome, Edge, and Firefox",
      "Payment calculated dynamically per hour or session"
    ],
    pricing: "From KSh 1 per minute (KSh 50/hour)",
    iconName: "Monitor"
  },
  {
    id: "email-services",
    name: "Email Services",
    category: "computer",
    description: "Complete email setup and ongoing management. We assist in creating secure Gmail/Outlook profiles, drafting business correspondence, and secure file attachments.",
    included: [
      "Professional Email Account Setup (Gmail / Outlook)",
      "Email composition, formal formatting, and drafting",
      "Sending files, multi-file size attachments, sorting inbox",
      "Password retrieval and security setup"
    ],
    pricing: "From KSh 100",
    iconName: "Mail"
  },
  {
    id: "online-applications",
    name: "Online Applications",
    category: "computer",
    description: "Ensure your applications are executed perfectly. We typeset, format, and upload documents for job search boards, university entries, and public tender submissions.",
    included: [
      "Corporate Job Applications onboarding",
      "College / University Admissions applications",
      "Government / Corporate Tender Board submissions",
      "System uploads, PDF formatting, and photo sizing"
    ],
    pricing: "From KSh 150",
    iconName: "Send"
  },
  {
    id: "document-downloads",
    name: "Document Downloads",
    category: "computer",
    description: "Search, locate, and download key public registry items, including paystubs, utility records, land title templates, and educational study aids.",
    included: [
      "Downloading Payslips, P9 templates, Ledger logs",
      "E-Citizen records and local county license slips",
      "Government guidelines, laws, and educational resources",
      "Immediate translation across file formats"
    ],
    pricing: "From KSh 50",
    iconName: "Download"
  },
  {
    id: "software-use",
    name: "Software Use",
    category: "computer",
    description: "Work comfortably using modern software tools. Access robust processors including Microsoft Word, Excel, and PowerPoint for typesetting or data entries.",
    included: [
      "Microsoft Word for professional document preparation",
      "Excel spreadsheet calculations and ledger sheets",
      "PowerPoint for academic or corporate slideshows",
      "Fitted with typing aids and native spelling guides"
    ],
    pricing: "From KSh 50 per hour",
    iconName: "Cpu"
  },

  // 6.4 Design & Typesetting Services
  {
    id: "cv-resume-writing",
    name: "CV / Resume Writing",
    category: "design",
    description: "Industry-aligned resume writing and professional formatting. We highlight your credentials, structure history beautifully, and export clean, ATS-compliant documents.",
    included: [
      "ATS-friendly visual document layouts",
      "Custom structuring of work history & qualifications",
      "Tailored action-verb copywriting that gets noticed",
      "Provided in both editable Word and final PDF formats"
    ],
    pricing: "From KSh 300 (Typesetting) / KSh 600 (Fresh Writing)",
    iconName: "FileUser"
  },
  {
    id: "cover-letter-writing",
    name: "Cover Letter Writing",
    category: "design",
    description: "Highly persuasive, targeted cover letters customized for specific job post guidelines, highlighting your experience and direct fit.",
    included: [
      "Standard professional headers and business formats",
      "Focuses on core, direct application criteria",
      "ATS-optimized copywriting for high-success reads",
      "Supplied in both PDF and Word formats"
    ],
    pricing: "From KSh 200",
    iconName: "FileEdit"
  },
  {
    id: "document-typesetting",
    name: "Document Typesetting",
    category: "design",
    description: "Meticulous text formatting for long-form papers. We typeset university theses, corporate proposals, research papers, and books following exact styling guide lines.",
    included: [
      "Academic Thesis & Research paper typesetting",
      "Table of Contents, citation indexes, bibliography maps",
      "Formatting in APA, MLA, Harvard, or publisher models",
      "Visual chart overlays, footers, page numbering"
    ],
    pricing: "From KSh 100 per page",
    iconName: "Type"
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    category: "design",
    description: "Stunning vector designs built to convey your message. We create high-quality corporate logos, flyers, event posters, marketing brochures, and letterheads.",
    included: [
      "Custom vector logo designs (provided in scalable SVG/PNG)",
      "High-impact promotional fliers & social banners",
      "Marketing brochures and sales fold sheets",
      "Corporate letterhead designs and business cards"
    ],
    pricing: "From KSh 500",
    iconName: "LayoutTemplate"
  },
  {
    id: "photo-editing",
    name: "Photo Editing",
    category: "design",
    description: "Expert digital editing including scaling, color balance adjustments, blemishes correction, background replacements, and official photo preparation.",
    included: [
      "Background removal / Solid colour swaps for IDs",
      "Facial skin clean-ups and red-eye removals",
      "Cropping and fitting to legal photo specifications",
      "Contrast boost, saturation balances and edge sharpens"
    ],
    pricing: "From KSh 100 per photo",
    iconName: "Image"
  },
  {
    id: "invitation-cards",
    name: "Invitation Cards",
    category: "design",
    description: "Bespoke invitation cards for all life's events. We design and print invitations for weddings, birthdays, graduations, and corporate events with high-end detailing.",
    included: [
      "Custom thematic typography and colors",
      "Printed on double-sided metallic or textured cardstocks",
      "Supplied with matching custom-designed envelopes",
      "Digital invitations for easy WhatsApp distribution"
    ],
    pricing: "From KSh 100 per card (including print)",
    iconName: "MailOpen"
  },

  // 6.5 Business Support Services
  {
    id: "bulk-printing-packages",
    name: "Bulk Printing Packages",
    category: "business",
    description: "Discounted High-volume printing plans tailored specifically for institutions, universities, and small-to-medium enterprises.",
    included: [
      "Significant discounts for orders above 500 pages",
      "Tailored contracts with monthly billing cycles",
      "Dedicated account helper and swift processing SLA",
      "Includes complimentary stapling, sorting and packaging"
    ],
    pricing: "Price on request (Based on volume)",
    iconName: "Receipt"
  },
  {
    id: "stationery-accessories",
    name: "Stationery & Accessories",
    category: "business",
    description: "Complete in-store digital general store. We retail professional items: paper reams, pens, USB thumb drives, notebooks, phone cords, and screen guards.",
    included: [
      "A4 Premium paper reams (Double A, Paper One)",
      "General pens, permanent markers, highlighters, post-its",
      "High speed USB drives (32GB, 64GB, 128GB)",
      "Phone cables, chargers, OTG adapters, and earphones"
    ],
    pricing: "From KSh 20 (Pens) / Custom retail pricing",
    iconName: "ShoppingBag"
  },
  {
    id: "photocopy-packages",
    name: "Photocopy Packages",
    category: "business",
    description: "Convenient copy subscription contracts for active institutions, NGO bodies, legal firms, and corporate offices across Nairobi.",
    included: [
      "Fixed monthly photocopying allocation allowances",
      "Guaranteed same-day speed processing",
      "Free collating, sorting, and booklet folding",
      "Digital backups of scanned files kept on request"
    ],
    pricing: "From KSh 5,000 per month (Contract basis)",
    iconName: "Briefcase"
  },
  {
    id: "document-delivery",
    name: "Document Delivery",
    category: "business",
    description: "No need to leave your desk. Submit your files digitally, we print/bind to your exact instructions, and dispatch with trusted local couriers (Sendy/Boda) anywhere in Nairobi.",
    included: [
      "Digital file reception via Email/WhatsApp",
      "Printing/Production according to strict online setups",
      "Stapled, bound, or laminated securely in plastic wrap",
      "Courier dispatch with live tracking details"
    ],
    pricing: "KSh 150 + Courier fee (Ksh 150 - 350 based on distance)",
    iconName: "Truck"
  }
];
