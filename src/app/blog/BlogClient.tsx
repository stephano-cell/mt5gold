"use client";

import { useState } from "react";
import { posts } from "@/data/posts";
import AffiliateBanner from "@/components/AffiliateBanner";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

const SITE_URL = "https://mt5gold.com";

function BybitCTA() {
  return (
    <div className="mt-5 p-4 rounded-xl border border-[#E07820]/20 bg-gradient-to-r from-[#E07820]/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white leading-snug">
          New to crypto trading? Sign up on Bybit and claim up to{" "}
          <span className="text-[#F5A623]">$20 USDT</span> in rewards.
        </p>
        <p className="text-[10px] text-gray-600 mt-1">
          ⚠️ Not financial advice. This is an affiliate link — I earn a small commission at no cost to you.
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
  );
}

function ShareBar({ slug, headline }: { slug: string; headline: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}/blog/${slug}`;
  const text = encodeURIComponent(headline);
  const encodedUrl = encodeURIComponent(url);

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex items-center gap-2 mt-6 pt-5 border-t border-white/10">
      <span className="text-xs text-gray-600 mr-1">Share</span>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}&via=thrivenex`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.738-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        Post
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${text}%20${encodedUrl}`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-400 hover:text-green-400 hover:border-green-500/20 transition-all"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Share
      </a>

      {/* Copy link */}
      <button
        onClick={copyLink}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border text-xs transition-all
          ${copied ? "border-[#F5A623]/40 text-[#F5A623]" : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"}`}
      >
        {copied ? (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}

const categoryColors: Record<string, string> = {
  "evening-review": "from-[#F5A623] to-[#E07820]",
  "morning-analysis": "from-[#E07820] to-[#C43A1A]",
  "analysis": "from-[#E07820] to-[#C43A1A]",
  "education": "from-[#E07820] to-[#C43A1A]",
  "strategy": "from-[#2ECC71] to-[#27AE60]",
  "market-pulse": "from-[#F5A623] to-[#C43A1A]",
  "market-review": "from-[#F5A623] to-[#E07820]",
  "article": "from-[#9B59B6] to-[#8E44AD]",
  "review": "from-[#E74C3C] to-[#C0392B]",
  "guide": "from-[#1ABC9C] to-[#16A085]",
};

const categoryLabels: Record<string, string> = {
  "evening-review": "End of Day Review",
  "morning-analysis": "Morning Analysis",
  "analysis": "Analysis",
  "education": "Article",
  "strategy": "Strategy",
  "market-pulse": "Mid-Day Pulse",
  "market-review": "Market Review",
  "article": "Article",
  "review": "Review",
  "guide": "Guide",
};

type FilterTab = "all" | "daily-analysis" | "articles";

const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "daily-analysis", label: "Daily Analysis" },
  { key: "articles", label: "Articles" },
];

const FILTER_CATEGORIES: Record<FilterTab, string[] | null> = {
  "all": null,
  "daily-analysis": ["morning-analysis", "market-pulse", "evening-review", "market-review", "analysis"],
  "articles": ["article", "review", "guide", "education", "strategy"],
};

const POSTS_PER_PAGE = 15;

export default function BlogClient() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const latestSlug = sorted[0]?.slug ?? null;
  const [expanded, setExpanded] = useState<string | null>(latestSlug);
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [page, setPage] = useState(1);

  // Filter posts by active tab
  const allowedCategories = FILTER_CATEGORIES[activeTab];
  const filtered = allowedCategories
    ? sorted.filter((p) => allowedCategories.includes(p.category))
    : sorted;

  // Pagination only for "all" and "daily-analysis"
  const needsPagination = activeTab === "all" || activeTab === "daily-analysis";
  const totalPages = needsPagination ? Math.ceil(filtered.length / POSTS_PER_PAGE) : 1;
  const displayPosts = needsPagination
    ? filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
    : filtered;

  function handleTabChange(tab: FilterTab) {
    setActiveTab(tab);
    setPage(1);
    setExpanded(null);
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-sm text-gray-500 mb-6">
          Daily market reviews, gold and crypto analysis, and trading insights.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border
                ${activeTab === tab.key
                  ? "bg-gradient-to-r from-[#F5A623] to-[#E07820] text-black border-transparent"
                  : "border-white/10 text-gray-400 hover:border-[#E07820]/30 hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {displayPosts.map((post, idx) => {
            const isOpen = expanded === post.slug;
            // "Latest" badge only on the absolute newest post, and only when it's visible
            const isLatest = post.slug === latestSlug;
            return (
              <>{/* Affiliate banner after every 3rd post */}
              {idx > 0 && idx % 3 === 0 && (
                <AffiliateBanner size="728x90" placement={`blog-feed-after-${idx}`} className="my-2" />
              )}
              <article
                key={post.slug}
                className={`rounded-2xl border overflow-hidden transition-all duration-300
                  ${isLatest
                    ? "border-[#E07820]/40 bg-gradient-to-br from-[#E07820]/5 to-transparent"
                    : "border-white/10 bg-white/[0.02] hover:border-[#E07820]/30"
                  }`}
              >
                {/* Card header — always visible */}
                <button
                  className="w-full text-left p-6"
                  onClick={() => setExpanded(isOpen ? null : post.slug)}
                >
                  {/* Badge + date + chevron */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${categoryColors[post.category]} text-black whitespace-nowrap`}>
                        {categoryLabels[post.category]}
                      </span>
                      {isLatest && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full border border-[#F5A623]/40 text-[#F5A623]">
                          Latest
                        </span>
                      )}
                      <span className="text-xs text-gray-500">{formatDate(post.date)} · {post.time}</span>
                    </div>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full border border-[#E07820]/30 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <svg className="w-4 h-4 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Article headline */}
                  <h2 className="text-xl font-black text-white mb-3 leading-snug">
                    {post.headline || post.title}
                  </h2>

                  {/* Image — full width, below headline, always visible */}
                  {post.image && (
                    <div className="rounded-xl overflow-hidden border border-white/10 mb-3">
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.headline || post.title}
                        className="w-full h-52 object-cover"
                      />
                      {post.imageAlt && (
                        <p className="text-[10px] text-gray-600 px-3 py-1.5 bg-white/[0.02]">{post.imageAlt}</p>
                      )}
                    </div>
                  )}

                  {/* Excerpt when collapsed */}
                  {!isOpen && (
                    <p className="text-sm text-gray-400 line-clamp-2">{post.excerpt}</p>
                  )}
                </button>

                {/* Expanded article content */}
                {isOpen && (
                  <div className="px-6 pb-8 border-t border-white/5 pt-6">
                    <div className="article-body text-gray-300 text-sm leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    {/* Sources */}
                    {post.sources && post.sources.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Sources & References</h3>
                        <ul className="space-y-2">
                          {post.sources.map((source) => (
                            <li key={source.url}>
                              <a href={source.url} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-[#F5A623] hover:text-[#E07820] transition-colors">
                                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                {source.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Bybit affiliate */}
                    <BybitCTA />

                    {/* Share */}
                    <ShareBar slug={post.slug} headline={post.headline || post.title} />
                  </div>
                )}
              </article>
              </>
            );
          })}
        </div>

        {/* Pagination */}
        {needsPagination && totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => { setPage((p) => Math.max(1, p - 1)); setExpanded(null); }}
              disabled={page === 1}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                ${page === 1
                  ? "bg-white/[0.02] border border-white/5 text-gray-600 cursor-not-allowed"
                  : "bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-[#E07820]/30"
                }`}
            >
              Previous
            </button>
            <span className="text-sm text-gray-500">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); setExpanded(null); }}
              disabled={page === totalPages}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                ${page === totalPages
                  ? "bg-white/[0.02] border border-white/5 text-gray-600 cursor-not-allowed"
                  : "bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-[#E07820]/30"
                }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Empty state */}
        {displayPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-sm">No posts in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
