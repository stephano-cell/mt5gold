"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { products, ProductType } from "@/data/products";
import ShareButtons from "@/components/ShareButtons";

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      {images.length > 1 && (
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}
      <img src={images[index]} alt={`Screenshot ${index + 1}`} className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
      {images.length > 1 && (
        <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-400">{index + 1} / {images.length}</div>
    </div>
  );
}



const ALL_TYPES: ProductType[] = ["Expert Advisor", "Indicator", "TradingView Script", "Course"];

const badgeColors: Record<string, string> = {
  RECOMMENDED: "from-[#F5A623] to-[#E07820]",
  ADVANCED: "from-[#9B59B6] to-[#6C3483]",
  FREE: "from-[#2ECC71] to-[#27AE60]",
  NEW: "from-[#3A7BD5] to-[#2255A4]",
};

export default function ProductsClient() {
  // Read URL params on mount
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const initialQ = searchParams?.get("q") || "";
  const initialType = searchParams?.get("type") || "All";
  const initialPrice = searchParams?.get("price") || "all";

  const [search, setSearch] = useState(initialQ);
  const [activeType, setActiveType] = useState<ProductType | "All">(
    ALL_TYPES.includes(initialType as ProductType) ? initialType as ProductType : "All"
  );
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">(
    (["all", "free", "paid"] as const).includes(initialPrice as any) ? initialPrice as "all" | "free" | "paid" : "all"
  );
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const openLightbox = (images: string[], i: number) => setLightbox({ images, index: i });
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevLb = useCallback(() => setLightbox((lb) => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : null), []);
  const nextLb = useCallback(() => setLightbox((lb) => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null), []);

  function toggleSection(type: string) {
    setCollapsedSections(prev => ({ ...prev, [type]: !prev[type] }));
  }

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        search.trim() === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchType = activeType === "All" || p.type === activeType;
      const matchPrice =
        priceFilter === "all" ||
        (priceFilter === "free" && p.free) ||
        (priceFilter === "paid" && !p.free);
      return matchSearch && matchType && matchPrice;
    });
  }, [search, activeType, priceFilter]);

  // Count per type for badge
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { All: products.length };
    ALL_TYPES.forEach((t) => {
      counts[t] = products.filter((p) => p.type === t).length;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen py-20">
      {lightbox && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={closeLightbox} onPrev={prevLb} onNext={nextLb} />
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filters */}
        <div className="space-y-4 mb-10">

          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Expert Advisors, indicators, scripts, built and tested with real money"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E07820]/50 transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Type filter — pill buttons */}
            <div className="flex flex-wrap gap-2 flex-1">
              {(["All", ...ALL_TYPES] as const).map((type) => (
                typeCounts[type] > 0 || type === "All" ? (
                  <button
                    key={type}
                    onClick={() => setActiveType(type as any)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border
                      ${activeType === type
                        ? "bg-gradient-to-r from-[#F5A623] to-[#E07820] text-black border-transparent"
                        : "border-white/10 text-gray-400 hover:border-[#E07820]/30 hover:text-white"
                      }`}
                  >
                    {type}
                    {typeCounts[type] !== undefined && (
                      <span className={`ml-1.5 ${activeType === type ? "opacity-70" : "opacity-40"}`}>
                        {typeCounts[type]}
                      </span>
                    )}
                  </button>
                ) : null
              ))}
            </div>

            {/* Price filter — 3-way toggle */}
            <div className="flex rounded-xl border border-white/10 overflow-hidden flex-shrink-0 self-start">
              {(["all", "free", "paid"] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setPriceFilter(opt)}
                  className={`px-4 py-1.5 text-xs font-semibold capitalize transition-all duration-200
                    ${priceFilter === opt
                      ? "bg-gradient-to-r from-[#F5A623] to-[#E07820] text-black"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  {opt === "all" ? "All Prices" : opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No products match your filters.
          </div>
        ) : (
          <div className="space-y-10">
            {ALL_TYPES.filter(type => filtered.some(p => p.type === type)).map(type => {
              const group = filtered.filter(p => p.type === type);
              const isCollapsed = !!collapsedSections[type];
              return (
                <div key={type}>
                  {/* Section header */}
                  <button
                    onClick={() => toggleSection(type)}
                    className="w-full flex items-center justify-between mb-5 group"
                  >
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A] bg-clip-text text-transparent">
                        {type === "Expert Advisor" ? "Expert Advisors" : type === "TradingView Script" ? "TradingView Indicators" : type}
                      </h2>
                      <span className="text-xs text-gray-600 border border-white/10 px-2 py-0.5 rounded-full">{group.length}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-[#E07820]/30 flex items-center justify-center transition-transform duration-300 ${isCollapsed ? "" : "rotate-180"}`}>
                      <svg className="w-4 h-4 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Cards */}
                  {!isCollapsed && (
                    <div className="space-y-6">
                      {group.map((product) => (
              <article
                key={product.id}
                id={product.id}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-[#E07820]/60 hover:bg-gradient-to-br hover:from-[#E07820]/5 hover:to-transparent"
              >
                {/* Card header */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-5">
                    {/* Logo */}
                    {product.logo && (
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border border-white/10 bg-black/20">
                        <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <a href={`/products/${product.id}`} className="text-2xl font-black text-white hover:text-[#F5A623] transition-colors">{product.name}</a>
                        {product.badge && (
                          <span className={`text-xs font-black px-2.5 py-1 rounded-full bg-gradient-to-r ${badgeColors[product.badge] || "from-[#F5A623] to-[#E07820]"} text-black`}>
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">{product.type}</span>
                        <span className={`text-sm font-bold ${product.free ? "text-green-400" : "text-[#F5A623]"}`}>
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">{product.description}</p>

                  {/* Stats */}
                  {product.stats && product.stats.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                      {product.stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                          <div className="text-xl font-black text-white">{stat.value}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-0.5 text-[#F5A623] font-bold flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing options */}
                  {product.pricing && product.pricing.length > 0 && (
                    <div className="mt-6">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Pricing</div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {product.pricing.map((p) => (
                          <div key={p.label} className={`rounded-xl border p-3 text-center ${p.label === "Lifetime" ? "border-[#E07820]/40 bg-[#E07820]/5" : "border-white/10 bg-white/[0.02]"}`}>
                            <div className="text-xs text-gray-500 mb-1">{p.label}</div>
                            <div className={`text-lg font-black ${p.label === "Lifetime" ? "text-[#F5A623]" : "text-white"}`}>{p.price}</div>
                            {p.note && <div className="text-[10px] text-green-400 mt-0.5">{p.note}</div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Screenshots gallery */}
                  {product.screenshots && product.screenshots.length > 0 && (
                    <div className="mt-6">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Screenshots</div>
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                        {product.screenshots.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt={`${product.name} screenshot ${i + 1}`}
                            className="h-32 sm:h-40 rounded-lg border border-white/10 hover:border-[#E07820]/50 transition-colors cursor-pointer flex-shrink-0"
                            onClick={() => openLightbox(product.screenshots!, i)}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {product.mql5Link && (
                      <a
                        href={product.mql5Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-bold text-sm rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                      >
                        Get on MQL5
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {product.tradingviewLink && (
                      <a
                        href={product.tradingviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2196F3] to-[#1565C0] hover:from-[#1565C0] hover:to-[#0D47A1] text-white font-bold text-sm rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                      >
                        Get on TradingView
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {product.demoLink && (
                      <a href={product.demoLink} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-[#E07820]/30 text-[#F5A623] text-sm font-semibold rounded-xl hover:bg-[#E07820]/10 transition-all">
                        View Demo
                      </a>
                    )}
                  </div>

                  {/* Share */}
                  <div className="mt-5 pt-5 border-t border-white/5">
                    <ShareButtons
                      url={`https://mt5gold.com/products/${product.id}`}
                      text={`${product.name} — ${product.free ? "Free" : product.price} ${product.type} on MT5Gold`}
                    />
                  </div>
                </div>
              </article>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-16 p-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
          <h3 className="text-xs font-semibold text-yellow-400 mb-1">Risk Disclaimer</h3>
          <p className="text-xs text-gray-500">
            Trading forex and gold involves substantial risk of loss. Past performance and backtested results do not guarantee future results.
            These products are tools, not financial advice. Only trade with money you can afford to lose. Always test on a demo account first.
          </p>
        </div>
      </div>
    </div>
  );
}
