"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import ShareButtons from "@/components/ShareButtons";

const badgeColors: Record<string, string> = {
  RECOMMENDED: "from-[#F5A623] to-[#E07820]",
  ADVANCED: "from-[#9B59B6] to-[#6C3483]",
  FREE: "from-[#2ECC71] to-[#27AE60]",
  NEW: "from-[#3A7BD5] to-[#2255A4]",
};

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
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <img
        src={images[index]}
        alt={`Screenshot ${index + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-400">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const screenshots = product.screenshots || [];
  const openLightbox = (i: number) => { setLightboxIdx(i); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImg = useCallback(() => setLightboxIdx((i) => (i - 1 + screenshots.length) % screenshots.length), [screenshots.length]);
  const nextImg = useCallback(() => setLightboxIdx((i) => (i + 1) % screenshots.length), [screenshots.length]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#F5A623] transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        All Products
      </Link>

      {/* Header */}
      <div className="flex items-start gap-5 mb-8">
        {product.logo && (
          <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-white/10 bg-black/20">
            <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-3xl sm:text-4xl font-black text-white">{product.name}</h1>
            {product.badge && (
              <span className={`text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r ${badgeColors[product.badge] || "from-[#F5A623] to-[#E07820]"} text-black`}>
                {product.badge}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-gray-500 border border-white/10 px-2.5 py-0.5 rounded-full">{product.type}</span>
            <span className={`text-lg font-bold ${product.free ? "text-green-400" : "text-[#F5A623]"}`}>
              {product.price}
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && screenshots.length > 0 && (
        <Lightbox
          images={screenshots}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImg}
          onNext={nextImg}
        />
      )}

      {/* Screenshots gallery */}
      {screenshots.length > 0 && (
        <div className="mb-8">
          {/* Main image */}
          <div
            className="rounded-xl overflow-hidden border border-white/10 mb-3 cursor-pointer hover:border-[#E07820]/50 transition-colors"
            onClick={() => openLightbox(activeImg)}
          >
            <img
              src={screenshots[activeImg]}
              alt={`${product.name} screenshot ${activeImg + 1}`}
              className="w-full max-h-[500px] object-contain bg-black/20"
            />
          </div>
          {/* Thumbnails */}
          {screenshots.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {screenshots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 h-16 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    i === activeImg ? "border-[#F5A623]" : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <img src={src} alt={`Thumbnail ${i + 1}`} className="h-full w-auto" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-300 text-base leading-relaxed mb-8">{product.description}</p>

      {/* Stats */}
      {product.stats && product.stats.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {product.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Features</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="mt-0.5 text-[#F5A623] font-bold flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing */}
      {product.pricing && product.pricing.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4">Pricing</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {product.pricing.map((p) => (
              <div
                key={p.label}
                className={`rounded-xl border p-4 text-center ${
                  p.label === "Lifetime"
                    ? "border-[#E07820]/40 bg-[#E07820]/5"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="text-xs text-gray-500 mb-1">{p.label}</div>
                <div className={`text-xl font-black ${p.label === "Lifetime" ? "text-[#F5A623]" : "text-white"}`}>
                  {p.price}
                </div>
                {p.note && <div className="text-[10px] text-green-400 mt-1">{p.note}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
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
      </div>

      {/* Share */}
      <div className="pt-6 border-t border-white/10 mb-12">
        <ShareButtons
          url={`https://mt5gold.com/products/${product.id}`}
          text={`${product.name} — ${product.free ? "Free" : product.price} ${product.type} on MT5Gold`}
        />
      </div>

      {/* Bybit CTA */}
      <div className="p-4 rounded-xl border border-[#E07820]/20 bg-gradient-to-r from-[#E07820]/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white leading-snug">
            New to crypto trading? Sign up on Bybit and claim up to{" "}
            <span className="text-[#F5A623]">$20 USDT</span> in rewards.
          </p>
          <p className="text-[10px] text-gray-600 mt-1">
            ⚠️ Not financial advice. This is an affiliate link.
          </p>
        </div>
        <a
          href="https://partner.bybit.com/b/THRIVENEX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-4 py-2 rounded-lg bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black text-xs font-bold transition-all hover:scale-105 whitespace-nowrap"
        >
          Get $20 on Bybit →
        </a>
      </div>

      {/* Browse more */}
      <div className="text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-[#F5A623] hover:text-[#E07820] transition-colors"
        >
          Browse all products
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
