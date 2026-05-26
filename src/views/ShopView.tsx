/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Search, ShoppingBag, Eye, X, Check, Plus, Minus, CreditCard, ChevronRight, AlertCircle } from "lucide-react";
import { shopProducts } from "../data/shopData";
import { Product, CartItem } from "../types";
import Confetti from "../components/Confetti";

interface ShopViewProps {
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateCartQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  cartOpen: boolean;
  onCloseCart: () => void;
  onOpenCart: () => void;
  id?: string;
}

export default function ShopView({
  cart,
  onAddToCart,
  onUpdateCartQuantity,
  onRemoveFromCart,
  cartOpen,
  onCloseCart,
  onOpenCart,
  id = "shop-view"
}: ShopViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "stationery" | "packages" | "computer" | "phone">("all");
  const [maxPrice, setMaxPrice] = useState(4000); // Max product price is 3500 (Bulk printer bundle)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const categories = [
    { id: "all", label: "All Items" },
    { id: "stationery", label: "Stationery" },
    { id: "packages", label: "Printing Packages" },
    { id: "computer", label: "Computer Access." },
    { id: "phone", label: "Phone Accessories" }
  ];

  // Filtering Logic
  const filteredProducts = shopProducts.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Calculate cart metrics
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Generate WhatsApp pre-filled order string
  const generateWhatsAppOrderLink = () => {
    let orderDetail = "Hello Tumaini Cyber, I'd like to place an order for the following items:\n\n";
    cart.forEach((item, idx) => {
      orderDetail += `${idx + 1}. ${item.product.name} (Qty: ${item.quantity}) - KSh ${item.product.price * item.quantity}\n`;
    });
    orderDetail += `\n*TOTAL AMOUNT: KSh ${cartSubtotal}*\n`;
    orderDetail += "\nPlease advise on checkout payment codes and delivery timelines. Thank you!";
    return `https://wa.me/254759607619?text=${encodeURIComponent(orderDetail)}`;
  };

  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth relative">
      {showConfetti && <Confetti />}
      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#EF233C]">In-Store Retail</span>
            <h1 className="font-heading font-extrabold text-[#0F172A] text-3xl md:text-5xl tracking-tight">
              Stationery & Digital Accessories Store
            </h1>
            <p className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Retailing only realistic, high-quality office essentials, printing bundle packages, and certified hardware peripherals direct from our Rongai hub.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container: Sidebar + Product Grid */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sidebar Filters (Desktop Only, transforms to Top Bar on Mobile) */}
          <div className="lg:col-span-3 space-y-8 bg-white p-6 border border-[#EAECEF]" style={{ borderRadius: "6px" }}>
            <h3 className="font-heading font-bold text-sm text-[#0F172A] uppercase tracking-wider border-b border-slate-100 pb-3 block">
              Filter Options
            </h3>

            {/* Search */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase text-[#64748B] tracking-wider block">Search Store</span>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Keyword search..."
                  className="w-full bg-[#F8FAFC] border border-[#EAECEF] text-[#1E293B] pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-[#1997E6]"
                  style={{ borderRadius: "4px" }}
                />
                <Search className="w-4 h-4 text-[#64748B] absolute left-3" />
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase text-[#64748B] tracking-wider block">Categories</span>
              <div className="flex flex-col gap-1.5">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id as any)}
                    className={`w-full text-left text-xs px-3 py-2 uppercase font-semibold transition-all cursor-pointer ${
                      selectedCategory === c.id
                        ? "bg-[#1997E6] text-white"
                        : "text-[#1E293B] hover:bg-slate-50 hover:text-[#1997E6]"
                    }`}
                    style={{ borderRadius: "4px" }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] font-black uppercase text-[#64748B]">
                <span>Max Price Limit</span>
                <span className="font-mono text-[#EF233C]">KSh {maxPrice}</span>
              </div>
              <input
                type="range"
                min="100"
                max="4000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#1997E6] bg-[#EAECEF] h-1 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[9px] font-bold text-slate-400">
                <span>KSh 100</span>
                <span>KSh 4,000</span>
              </div>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-9 space-y-8">
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-[#EAECEF] p-12 text-center space-y-4" style={{ borderRadius: "6px" }}>
                <AlertCircle className="w-12 h-12 text-[#64748B] mx-auto" />
                <h3 className="font-heading font-bold text-lg text-[#0F172A]">No products found matching filters</h3>
                <p className="text-xs text-[#64748B]">Try resetting your search parameter or price ceiling.</p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all"); setMaxPrice(4000); }}
                  className="bg-[#1997E6] text-white text-xs font-bold uppercase tracking-wide px-5 py-2.5"
                  style={{ borderRadius: "4px" }}
                >
                  Reset Shop Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white border border-[#EAECEF] flex flex-col justify-between group hover:border-[#1997E6] transition-all relative overflow-hidden"
                    style={{ borderRadius: "6px" }}
                  >
                    <div className="space-y-4">
                      {/* Product Thumbnail with hover view icon overlay */}
                      <div className="aspect-square bg-slate-50 relative overflow-hidden border-b border-[#EAECEF]">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          referrerPolicy="no-referrer"
                          className="object-cover w-full h-full group-hover:scale-101 transition-transform duration-300"
                        />

                        {/* Interactive overlay card */}
                        <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <button
                            onClick={() => setQuickViewProduct(prod)}
                            className="bg-white text-[#1E293B] p-2.5 shadow-md hover:bg-[#1997E6] hover:text-white transition-colors cursor-pointer"
                            style={{ borderRadius: "4px" }}
                            title="Quick View Details"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Stock status badge */}
                        <span
                          className={`absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 ${
                            prod.stockStatus === "In Stock" ? "bg-emerald-100 text-emerald-800" :
                            prod.stockStatus === "Low Stock" ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-00"
                          }`}
                          style={{ borderRadius: "4px" }}
                        >
                          {prod.stockStatus}
                        </span>
                      </div>

                      {/* Header metrics */}
                      <div className="px-5 space-y-1">
                        <span className="text-[10px] font-black uppercase text-slate-400 font-mono tracking-widest">{prod.category}</span>
                        <h3 className="font-heading font-bold text-sm text-[#0F172A] leading-snug line-clamp-2">
                          {prod.name}
                        </h3>
                      </div>
                    </div>

                    {/* Footer price & Add button */}
                    <div className="px-5 pb-5 pt-3 flex justify-between items-center mt-4 border-t border-slate-50">
                      <span className="font-heading font-black text-base text-[#EF233C]">KSh {prod.price}</span>
                      <button
                        onClick={() => onAddToCart(prod)}
                        className="bg-[#1997E6] hover:bg-[#1481c4] text-white p-2.5 shadow-sm transition-all flex items-center gap-1.5 text-xs font-bold uppercase cursor-pointer select-none"
                        style={{ borderRadius: "4px" }}
                      >
                        <ShoppingBag className="w-4 h-4" /> Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick View Modal Overlay */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-[#0F172A]/80 z-200 flex items-center justify-center p-4 backdrop-blur-sm">
          <div
            className="bg-white border border-[#EAECEF] w-full max-w-md p-8 relative flex flex-col space-y-6 max-h-[90vh] overflow-y-auto"
            style={{ borderRadius: "6px" }}
          >
            {/* Close */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 text-[#64748B] hover:text-[#EF233C] p-2 focus:outline-none cursor-pointer"
              aria-label="Close product browser"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header info */}
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase text-slate-400 font-mono tracking-widest block">{quickViewProduct.category}</span>
              <h2 className="font-heading font-black text-lg text-[#0F172A] leading-tight pt-1">
                {quickViewProduct.name}
              </h2>
            </div>

            {/* Central Image container */}
            <div className="aspect-square bg-slate-50 overflow-hidden relative" style={{ borderRadius: "6px" }}>
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full"
              />
              <span className="absolute top-3 left-3 bg-[#EAECEF] text-[#1E293B] text-[9px] font-bold px-2 py-0.5 rounded uppercase font-mono tracking-wide">
                {quickViewProduct.stockStatus}
              </span>
            </div>

            {/* Description texts */}
            <p className="text-xs text-[#64748B] leading-relaxed">
              {quickViewProduct.description}
            </p>

            {/* Footer triggers */}
            <div className="flex justify-between items-center pt-6 border-t border-[#EAECEF]">
              <span className="font-heading font-black text-xl text-[#EF233C]">KSh {quickViewProduct.price}</span>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setQuickViewProduct(null)}
                  className="px-4 py-2 text-xs border border-[#EAECEF] font-bold uppercase transition"
                  style={{ borderRadius: "4px" }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onAddToCart(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="bg-[#1997E6] hover:bg-sky-500 text-white px-5 py-2.5 text-xs font-bold uppercase flex items-center gap-1.5 transition select-none cursor-pointer"
                  style={{ borderRadius: "4px" }}
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide-out Cart Panel Drawer on the Right */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/50 z-200 backdrop-blur-xs flex justify-end">
          {/* Backdrop dismissal */}
          <div className="absolute inset-0" onClick={onCloseCart} />

          {/* Slding actual card */}
          <div className="bg-white border-l border-[#EAECEF] w-full max-w-md h-full relative z-10 flex flex-col justify-between shadow-2xl">
            
            {/* Cart Header */}
            <div className="p-6 border-b border-[#EAECEF] flex justify-between items-center text-[#0F172A] bg-slate-50/50">
              <span className="flex items-center gap-2 font-heading font-black text-sm uppercase tracking-wider">
                <ShoppingBag className="w-5 h-5 text-[#1997E6]" />
                Your Shopping Cart ({cart.length})
              </span>
              <button onClick={onCloseCart} className="text-[#64748B] hover:text-[#EF233C] p-2 focus:outline-none cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Item List */}
            <div className="flex-grow p-6 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <div className="py-20 text-center space-y-4 flex flex-col items-center">
                  <ShoppingBag className="w-14 h-14 text-slate-200" />
                  <h4 className="font-heading font-bold text-base text-[#1E293B]">Your cart is completely empty</h4>
                  <p className="text-xs text-[#64748B] max-w-xs mx-auto">Browse our stores, add some premium stationery reams or office printing bundle vouchers to proceed.</p>
                  <button onClick={onCloseCart} className="bg-[#1997E6] text-white text-xs font-bold uppercase px-6 py-3 mt-4" style={{ borderRadius: "4px" }}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4 border b-slate-100 p-4 relative" style={{ borderRadius: "6px" }}>
                    {/* Thumbnail */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-cover bg-slate-50 flex-shrink-0"
                      style={{ borderRadius: "4px" }}
                    />

                    {/* Details block */}
                    <div className="flex-grow flex flex-col justify-between space-y-1">
                      <h4 className="font-heading font-bold text-xs text-[#0F172A] leading-snug pr-4 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="font-heading font-black text-xs text-[#EF233C]">KSh {item.product.price}</div>

                      {/* Quantity adjuster controls */}
                      <div className="flex items-center gap-2 pt-1.5">
                        <button
                          onClick={() => onUpdateCartQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-100 border border-slate-200 transition text-[#0f172a]"
                          style={{ borderRadius: "4px" }}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-bold px-2">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateCartQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-100 border border-slate-200 transition text-[#0f172a]"
                          style={{ borderRadius: "4px" }}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Delete trigger */}
                    <button
                      onClick={() => onRemoveFromCart(item.product.id)}
                      className="absolute top-4 right-4 text-[#64748B] hover:text-[#EF233C]"
                      title="Remove Item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Subtotals & Proceed */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#EAECEF] space-y-4 bg-slate-50">
                <div className="flex justify-between items-center text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">
                  <span>Cart Subtotal</span>
                  <span className="font-mono text-base font-black text-[#EF233C]">KSh {cartSubtotal}</span>
                </div>
                
                <p className="text-[10px] text-[#64748B] leading-normal pt-1 flex items-start gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  We compile your items into a customized list and generate a pre-filled WhatsApp link with exact totals for immediate order checkout.
                </p>

                <div className="pt-2">
                  <a
                    href={generateWhatsAppOrderLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setShowConfetti(true);
                      setTimeout(() => setShowConfetti(false), 5000);
                    }}
                    className="w-full text-center bg-[#25D366] hover:bg-emerald-600 font-heading text-xs font-bold tracking-wider uppercase py-4 px-6 text-white block select-none cursor-pointer shadow-md transition-all active:scale-95"
                    style={{ borderRadius: "4px" }}
                  >
                    Proceed to WhatsApp Order (KSh {cartSubtotal})
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
