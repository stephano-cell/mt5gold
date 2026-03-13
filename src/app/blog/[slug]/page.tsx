import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getAllSlugs } from "@/data/posts";
import { notFound } from "next/navigation";
import ShareBar from "./ShareBar";
import AffiliateBanner from "@/components/AffiliateBanner";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${days[d.getDay()]}, ${d.getFullYear() !== new Date().getFullYear() ? `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}` : `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`}`;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const seoTitle = `${post.headline || post.title} - XAUUSD and Crypto Analysis`;
  const absoluteImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://mt5gold.com${post.image}`
    : "https://mt5gold.com/og-image.jpg";
  return {
    title: seoTitle,
    description: post.excerpt,
    alternates: { canonical: `https://mt5gold.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: absoluteImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [absoluteImage],
    },
  };
}

const categoryColors: Record<string, string> = {
  "market-review": "from-[#F5A623] to-[#E07820]",
  "evening-review": "from-[#F5A623] to-[#E07820]",
  "morning-analysis": "from-[#E07820] to-[#C43A1A]",
  "analysis": "from-[#E07820] to-[#C43A1A]",
  "education": "from-[#E07820] to-[#C43A1A]",
  "strategy": "from-[#2ECC71] to-[#27AE60]",
  "market-pulse": "from-[#F5A623] to-[#C43A1A]",
};

const categoryLabels: Record<string, string> = {
  "market-review": "Market Review",
  "evening-review": "End of Day Review",
  "morning-analysis": "Morning Analysis",
  "analysis": "Analysis",
  "education": "Article",
  "strategy": "Strategy",
  "market-pulse": "Mid-Day Pulse",
};

function getArticleSchema(post: NonNullable<ReturnType<typeof getPost>>) {
  const absoluteImage = post.image
    ? post.image.startsWith("http") ? post.image : `https://mt5gold.com${post.image}`
    : "https://mt5gold.com/og-image.jpg";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: absoluteImage,
    datePublished: `${post.date}T${post.time ? post.time.replace(/\s*(UTC|EST|GMT).*/i, ":00Z") : "12:00:00Z"}`,
    dateModified: `${post.date}T${post.time ? post.time.replace(/\s*(UTC|EST|GMT).*/i, ":00Z") : "12:00:00Z"}`,
    author: { "@type": "Organization", name: "MT5Gold", url: "https://mt5gold.com" },
    publisher: {
      "@type": "Organization",
      name: "MT5Gold",
      url: "https://mt5gold.com",
      logo: { "@type": "ImageObject", url: "https://mt5gold.com/golden-raven-logo.png" },
    },
    mainEntityOfPage: `https://mt5gold.com/blog/${post.slug}`,
    articleSection: categoryLabels[post.category] || post.category,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema(post)) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#F5A623] transition-colors mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${categoryColors[post.category]} text-black`}>
              {categoryLabels[post.category]}
            </span>
            <span className="text-sm text-gray-500">{formatDate(post.date)} · {post.time}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-lg text-gray-400">{post.excerpt}</p>
          )}
        </div>

        {/* Hero image */}
        {post.image && (
          <div className="rounded-xl overflow-hidden mb-8 border border-white/10">
            <img src={post.image} alt={post.imageAlt || post.title} className="w-full" />
            {post.imageAlt && (
              <p className="text-xs text-gray-600 text-center py-2 bg-white/[0.02]">{post.imageAlt}</p>
            )}
          </div>
        )}

        {/* Affiliate banner before content */}
        <AffiliateBanner size="728x90" placement="blog-top" className="mb-8" />

        {/* Content */}
        <div
          className="article-body max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Affiliate banner after content */}
        <AffiliateBanner size="300x250" placement="blog-after-content" className="my-10" />

        {/* Sources */}
        {post.sources && post.sources.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Sources & References</h3>
            <ul className="space-y-2">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#F5A623] hover:text-[#E07820] transition-colors"
                  >
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

        {/* Bybit CTA */}
        <div className="mt-12 p-4 rounded-xl border border-[#E07820]/20 bg-gradient-to-r from-[#E07820]/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center gap-3">
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

        {/* Share */}
        <ShareBar slug={post.slug} headline={post.headline || post.title} />

      </div>
    </div>
  );
}
