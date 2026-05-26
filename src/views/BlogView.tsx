/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Search, Clock, User, ArrowRight, X, Mail, Sparkles, AlertCircle } from "lucide-react";
import { blogPosts } from "../data/blogData";
import { BlogPost } from "../types";

interface BlogViewProps {
  id?: string;
}

export default function BlogView({ id = "blog-view" }: BlogViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "government" | "business" | "tech" | "design" | "student">("all");
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "government", label: "Government Tips" },
    { id: "business", label: "Business" },
    { id: "tech", label: "Tech" },
    { id: "design", label: "Design" },
    { id: "student", label: "Student Resources" }
  ];

  // Filtering Logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = categoryFilter === "all" || post.category === categoryFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured Article is always the first post of the filtered or raw list matching category
  const featuredArticle = filteredPosts.length > 0 ? filteredPosts[0] : null;

  // The rest fit in the grid
  const gridArticles = filteredPosts.slice(1);

  // Stats for the sidebar
  const trendingArticles = blogPosts.slice(0, 3);

  const getCategoryCount = (catId: string) => {
    if (catId === "all") return blogPosts.length;
    return blogPosts.filter((post) => post.category === catId).length;
  };

  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth">
      {/* Blog Hero with search input bar */}
      <section className="bg-white py-14 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Resource Hub</span>
              <h1 className="font-heading font-extrabold text-[#0F172A] text-2xl md:text-4.5xl tracking-tight leading-tight">
                Insights, Guides & Compliance Advisories
              </h1>
              <p className="text-xs md:text-sm text-[#64748B]">
                Stay informed on KRA tax deadline timelines, student portals (KUCCPS/HELB), digital profile safety, and office stationery optimization.
              </p>
            </div>

            {/* Right Search Input */}
            <div className="lg:col-span-5 relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources, articles, guides..."
                className="w-full bg-[#F8FAFC] border border-[#EAECEF] text-[#1E293B] pl-11 pr-5 py-3 text-sm focus:outline-none focus:border-[#1997E6]"
                style={{ borderRadius: "4px" }}
              />
              <Search className="w-5 h-5 text-[#64748B] absolute left-4 pointer-events-none" />
            </div>
          </div>

          {/* Category Pill Filters */}
          <div className="flex flex-wrap gap-2 mt-8 border-t border-slate-100 pt-6 justify-center lg:justify-start">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategoryFilter(c.id as any)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  categoryFilter === c.id
                    ? "bg-[#1997E6] text-white"
                    : "bg-slate-50 border border-[#EAECEF] text-[#1E293B] hover:bg-slate-100"
                }`}
                style={{ borderRadius: "4px" }}
              >
                {c.label} ({getCategoryCount(c.id)})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Body: Left (Featured + Grid) / Right (Sidebar) */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block */}
          <div className="lg:col-span-8 space-y-16">
            {filteredPosts.length === 0 ? (
              <div className="bg-white border border-[#EAECEF] p-12 text-center space-y-4" style={{ borderRadius: "6px" }}>
                <AlertCircle className="w-12 h-12 text-[#64748B] mx-auto" />
                <h3 className="font-heading font-bold text-lg text-[#0F172A]">No resources match your search query</h3>
                <p className="text-xs text-[#64748B]">Try expanding your query fields or clearing category filters.</p>
                <button
                  onClick={() => { setSearchQuery(""); setCategoryFilter("all"); }}
                  className="bg-[#1997E6] text-white text-xs font-bold uppercase tracking-wide px-5 py-2.5"
                  style={{ borderRadius: "4px" }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                {/* 5.5 Featured Article (Large Top Card) */}
                {featuredArticle && (
                  <div
                    className="bg-white border border-[#EAECEF] overflow-hidden group hover:border-[#1997E6] transition-all duration-250 flex flex-col"
                    style={{ borderRadius: "6px" }}
                  >
                    {/* Big Picture Thumbnail */}
                    <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-[#EAECEF]">
                      <img
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.title}
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full group-hover:scale-101 transition-transform duration-300"
                      />
                      <span className="absolute top-4 left-4 bg-[#EF233C] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5" style={{ borderRadius: "4px" }}>
                        Featured Post • {featuredArticle.categoryLabel}
                      </span>
                    </div>

                    {/* Metadata & Details */}
                    <div className="p-8 space-y-4">
                      <div className="flex items-center gap-4 text-xs text-[#64748B] font-semibold">
                        <span className="flex items-center gap-1.5">
                          <User className="w-4 h-4 text-[#1997E6]" />
                          {featuredArticle.author}
                        </span>
                        <span>•</span>
                        <span>{featuredArticle.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-[#EF233C]" />
                          {featuredArticle.readTime}
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-xl md:text-2.5xl text-[#0F172A] group-hover:text-[#1997E6] transition-colors leading-tight">
                        {featuredArticle.title}
                      </h3>

                      <p className="text-[#64748B] text-xs md:text-sm leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>

                      <div className="pt-4 border-t border-[#EAECEF]">
                        <button
                          onClick={() => setSelectedArticle(featuredArticle)}
                          className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-heading text-xs font-bold tracking-wider uppercase px-6 py-3.5 flex items-center gap-2 cursor-pointer transition-colors"
                          style={{ borderRadius: "4px" }}
                        >
                          Read Full Article <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5.5 Article Grid (3-column layout on desktop) */}
                {gridArticles.length > 0 && (
                  <div className="space-y-8">
                    <h4 className="font-heading font-black text-xl text-[#0F172A] border-b border-slate-100 pb-4">
                      More Articles & Guides
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {gridArticles.map((post) => (
                        <div
                          key={post.id}
                          className="bg-white border border-[#EAECEF] overflow-hidden flex flex-col justify-between group hover:border-[#1997E6] transition-all duration-250 cursor-pointer"
                          style={{ borderRadius: "6px" }}
                          onClick={() => setSelectedArticle(post)}
                        >
                          <div className="space-y-5">
                            {/* Image */}
                            <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-[#EAECEF]">
                              <img
                                src={post.imageUrl}
                                alt={post.title}
                                referrerPolicy="no-referrer"
                                className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300"
                              />
                              <span className="absolute top-4 left-4 bg-[#1997E6] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1" style={{ borderRadius: "4px" }}>
                                {post.categoryLabel}
                              </span>
                            </div>

                            {/* Info */}
                            <div className="px-6 space-y-3">
                              <div className="flex items-center gap-3 text-[10px] text-[#64748B] font-bold">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>

                              <h3 className="font-heading font-bold text-sm md:text-base text-[#0F172A] leading-snug group-hover:text-[#1997E6] transition-colors">
                                {post.title}
                              </h3>

                              <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                                {post.excerpt}
                              </p>
                            </div>
                          </div>

                          {/* Clicker details */}
                          <div className="p-6 pt-4 border-t border-[#EAECEF] mt-6 flex justify-between items-center text-xs font-bold text-[#1997E6] bg-slate-50/20">
                            <span>By {post.author}</span>
                            <span className="flex items-center gap-1 group-hover:gap-1.5 transition-all">
                              Read More <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* 5.5 Right Sidebar (Desktop only) */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-40">
            {/* Trending Articles list */}
            <div className="bg-white border border-[#EAECEF] p-6 space-y-6" style={{ borderRadius: "6px" }}>
              <h4 className="font-heading font-black text-sm text-[#0F172A] uppercase tracking-wider border-b border-slate-100 pb-3 block">
                Trending Articles
              </h4>
              <ul className="space-y-5">
                {trendingArticles.map((t, i) => (
                  <li key={t.id} className="flex gap-4 items-start cursor-pointer group" onClick={() => setSelectedArticle(t)}>
                    <span className="font-heading font-extrabold text-2xl text-[#EAECEF] leading-none group-hover:text-[#EF233C] transition-colors">
                      0{i + 1}
                    </span>
                    <div className="space-y-1">
                      <h5 className="font-heading font-bold text-xs text-[#1E293B] leading-snug group-hover:text-[#1997E6] transition-colors line-clamp-2">
                        {t.title}
                      </h5>
                      <span className="text-[10px] text-[#64748B] font-semibold">{t.readTime}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category Counts Widget */}
            <div className="bg-white border border-[#EAECEF] p-6 space-y-4" style={{ borderRadius: "6px" }}>
              <h4 className="font-heading font-black text-sm text-[#0F172A] uppercase tracking-wider border-b border-slate-100 pb-3 block">
                Category Segments
              </h4>
              <ul className="space-y-2.5">
                {categories.slice(1).map((c) => (
                  <li key={c.id}>
                    <button
                      onClick={() => setCategoryFilter(c.id as any)}
                      className="w-full flex justify-between items-center text-xs font-semibold uppercase text-slate-600 hover:text-[#1997E6] py-1 cursor-pointer"
                    >
                      <span>{c.label}</span>
                      <span className="bg-slate-100 text-[#1E293B] px-2 py-0.5 rounded text-[10px]">{getCategoryCount(c.id)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter widget */}
            <div className="bg-gradient-to-tr from-[#0F172A] to-[#1E293B] p-6 text-white space-y-4 shadow-sm" style={{ borderRadius: "6px" }}>
              <span className="p-2 bg-[#1997E6]/10 text-[#1997E6] inline-block" style={{ borderRadius: "4px" }}>
                <Mail className="w-5 h-5 text-[#1997E6]" />
              </span>
              <h4 className="font-heading font-bold text-base">Resource Updates</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Join our newsletter list to receive SMS or email alerts regarding local tax compliance deadlines.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById("tumaini-footer");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-[#1997E6] hover:bg-sky-500 py-3 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ borderRadius: "4px" }}
                >
                  Join Alerts List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Article Overlay Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-[#0F172A]/90 z-200 flex items-center justify-center p-4 backdrop-blur-sm">
          <div
            className="bg-white border border-[#EAECEF] w-full max-w-2xl p-8 relative flex flex-col space-y-6 max-h-[90vh] overflow-y-auto font-sans"
            style={{ borderRadius: "6px" }}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-[#64748B] hover:text-[#EF233C] p-2 focus:outline-none cursor-pointer"
              aria-label="Close article browser"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Top metadata */}
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase text-[#EF233C] bg-red-50 px-2.5 py-1" style={{ borderRadius: "4px" }}>
                {selectedArticle.categoryLabel}
              </span>
              <h2 className="font-heading font-black text-xl md:text-3xl text-[#0F172A] leading-tight pt-1">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-[#64748B] font-semibold pt-1">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            {/* Large Picture */}
            <div className="aspect-video relative bg-slate-100 overflow-hidden" style={{ borderRadius: "6px" }}>
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Body text rendering Markdown styled elements manually is highly secure */}
            <div className="text-xs md:text-sm text-[#1E293B] leading-relaxed space-y-5 border-t border-[#EAECEF] pt-6 max-w-none">
              {selectedArticle.content.split("\n\n").map((para, i) => {
                if (para.startsWith("###")) {
                  return (
                    <h4 key={i} className="font-heading font-bold text-sm md:text-base text-[#0F172A] pt-4">
                      {para.replace("###", "").trim()}
                    </h4>
                  );
                }
                if (para.startsWith("*")) {
                  const listItems = para.split("\n").filter(li => li.trim());
                  return (
                    <ul key={i} className="list-disc pl-5 space-y-2">
                      {listItems.map((li, idx) => (
                        <li key={idx} className="font-medium">
                          {li.replace("*", "").trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{para}</p>;
              })}
            </div>

            {/* Footer action */}
            <div className="pt-6 border-t border-[#EAECEF] flex justify-end gap-3">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-3 border border-[#EAECEF] text-xs font-bold uppercase cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                Done Reading
              </button>
              <a
                href={`https://wa.me/254712345678?text=${encodeURIComponent(`Hello Tumaini Cyber, I read your article: "${selectedArticle.title}" and would like assistance with related services.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                Inquire on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
