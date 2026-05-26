/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  category: "government" | "printing" | "computer" | "design" | "business";
  description: string;
  included: string[];
  pricing: string;
  iconName: string; // Dynamic icon rendering maps string to LucideIcons
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: "stationery" | "packages" | "computer" | "phone";
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
  image: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: "web-development" | "graphic-design";
  categoryLabel: string;
  imageUrl: string;
  description: string;
  result: string;
  siteUrl?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  toolsUsed: string[];
  keyResult: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: "government" | "business" | "tech" | "design" | "student";
  categoryLabel: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatarInitials: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
