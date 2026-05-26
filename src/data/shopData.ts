/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from "../types";

export const shopProducts: Product[] = [
  // Stationery
  {
    id: "prod-1",
    name: "Premium A4 Paper Ream (Double A - 80gsm)",
    price: 750,
    category: "stationery",
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=400&auto=format&fit=crop",
    description: "Premium photocopy paper by Double A. 80gsm heavy-weight, bright white sheets. Engineered to prevent printing jams in laser and inkjet copiers. Exactly 500 sheets per pack."
  },
  {
    id: "prod-2",
    name: "Kasuku Squared Exercise Book (200 Pages)",
    price: 150,
    category: "stationery",
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=400&auto=format&fit=crop",
    description: "High quality squared drafting notebook. Excellent for school assignments, calculation practices, ledger bookkeeping, and business logs. Durable hardcover backing."
  },
  {
    id: "prod-3",
    name: "Bic 1.0mm Blue Ballpoint Pens (Pack of 10)",
    price: 180,
    category: "stationery",
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=400&auto=format&fit=crop",
    description: "The classic Bic writing pen with ultra-smooth 1.0mm tungsten carbide ball points. Consistent ink flow and clear lines. Standard office and classroom staple."
  },

  // Printing Packages
  {
    id: "prod-4",
    name: "Standard CV Printing Package (10 Prints + Env)",
    price: 350,
    category: "packages",
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400&auto=format&fit=crop",
    description: "Complete job application printing physical set. Includes 10 crisp, full-color CV prints on premium heavy paper stock, plus 10 official brown DL self-seal envelopes."
  },
  {
    id: "prod-5",
    name: "Monthly Office Printing Bundle (500 B&W Pages)",
    price: 3500,
    category: "packages",
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&auto=format&fit=crop",
    description: "Save on volume! Pre-pay for 500 monochrome document prints or copies on standard A4 paper, providing an incredible 30% discount. Useful for small offices or exam boards."
  },

  // Computer Accessories
  {
    id: "prod-6",
    name: "Sandisk Cruzer Blade 64GB USB Flash Drive",
    price: 950,
    category: "computer",
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?q=80&w=400&auto=format&fit=crop",
    description: "Compact, capless pen drive with a sleek contours. Generous 64GB storage capacity to securely carry your documents, CVs, scans, study slides, and media."
  },
  {
    id: "prod-7",
    name: "Wireless Optical Desktop Mouse (Logitech B170)",
    price: 1250,
    category: "computer",
    stockStatus: "Low Stock",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop",
    description: "Reliable 2.4Ghz wireless connection with a 10-meter range. Plug-and-play USB nano receiver. comfortable ambidextrous shape. Up to 12 months long battery life."
  },

  // Phone Accessories
  {
    id: "prod-8",
    name: "Oraimo Type-C Fast Charging Cable (3A)",
    price: 450,
    category: "phone",
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1541140111813-8222e9d90981?q=80&w=400&auto=format&fit=crop",
    description: "Oraimo nylon-braided Type-C USB cable. Supports safe, high-speed QC 3.0 charging (3A) and fast file transfers. Heavy duty, tangle-resistant reinforced connector joints."
  },
  {
    id: "prod-9",
    name: "Bass Boosted In-Ear Earphones (3.5mm Jack)",
    price: 500,
    category: "phone",
    stockStatus: "In Stock",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop",
    description: "Comfortable dynamic wired earphones with deep acoustic resonance and inline microphone for calls. Perfect for listening to laptop lectures or online meetings."
  },
  {
    id: "prod-10",
    name: "Universal USB Smart Wall Charger (Dual Port 12W)",
    price: 650,
    category: "phone",
    stockStatus: "Low Stock",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop",
    description: "Compact dual-port wall power adapter supplying 12W fast charging. Built-in smart chip automatically detects device specifications to protect against surges."
  }
];
