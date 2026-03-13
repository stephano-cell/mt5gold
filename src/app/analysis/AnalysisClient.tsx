"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import EmailSignup from "@/components/EmailSignup";
import ShareButtons from "@/components/ShareButtons";
import AffiliateBanner from "@/components/AffiliateBanner";

const PLAYLIST_ID = "PL0jl9MLZ-srbzGxfFgGZxA6nw46nt6Bh2";

interface AnalysisClientProps {
  videoId?: string;
  videoTitle?: string;
}

export default function AnalysisClient({ videoId: propVideoId, videoTitle: propVideoTitle }: AnalysisClientProps = {}) {
  const pathname = usePathname();
  const shareUrl = `https://mt5gold.com${pathname}`;
  const [latestVideoId, setLatestVideoId] = useState<string | null>(propVideoId || null);
  const [videoTitle, setVideoTitle] = useState<string | null>(propVideoTitle || null);
  const [videoDate, setVideoDate] = useState<string | null>(null);

  useEffect(() => {
    // If we already have a video from props, skip RSS fetch
    if (propVideoId) return;

    // Fetch latest video from YouTube RSS directly (no third-party API)
    fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`)
      .then((r) => r.text())
      .then((xml) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "text/xml");
        const entry = doc.querySelector("entry");
        if (!entry) return;

        const id = entry.querySelector("videoId")?.textContent || null;
        const title = entry.querySelector("title")?.textContent || null;
        const published = entry.querySelector("published")?.textContent || null;

        if (id) setLatestVideoId(id);
        if (title) setVideoTitle(title);
        if (published) {
          const d = new Date(published);
          const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          setVideoDate(`${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`);
        }
      })
      .catch(() => null);
  }, [propVideoId]);

  const embedSrc = latestVideoId
    ? `https://www.youtube.com/embed/${latestVideoId}?autoplay=0&rel=0`
    : `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&rel=0`;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Daily Market Analysis
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            XAUUSD, BTC, S&P 500, Oil, and more. Key levels, directional
            bias, and trade setups every trading day.
          </p>
        </div>

        {/* Main layout: video + playlist sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Video player - takes 2/3 width on large screens */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={embedSrc}
                  title="Daily Gold Analysis"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            {/* Video info */}
            <div className="mt-4 space-y-2">
              {videoTitle && (
                <h2 className="text-lg font-semibold text-white leading-snug">
                  {videoTitle}
                </h2>
              )}
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                {videoDate && (
                  <span className="text-sm text-gray-400">
                    Published {videoDate}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <ShareButtons
                  url={shareUrl}
                  text={videoTitle || "Daily Market Analysis - MT5Gold"}
                />
              </div>
            </div>
            {/* Affiliate banner below video */}
            <AffiliateBanner size="300x250" placement="analysis-below-video" className="mt-6" />
          </div>

          {/* Sidebar: full playlist */}
          <div className="lg:col-span-1">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl">
              <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                </svg>
                <span className="text-sm font-semibold text-white">Full Playlist</span>
              </div>
              <div className="relative" style={{ height: "400px" }}>
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&rel=0`}
                  title="Analysis Playlist"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Subscribe CTA */}
            <a
              href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#E07820]/40"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch Full Playlist on YouTube
            </a>
          </div>
        </div>

        {/* Info strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              title: "Daily",
              desc: "New analysis every trading day",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Key Levels",
              desc: "Support, resistance and targets",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Multi-Market",
              desc: "XAUUSD, BTC, S&P 500, Oil and more",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 flex gap-4 items-start transition-all duration-300 hover:border-[#E07820]/40 hover:bg-gradient-to-br hover:from-[#E07820]/5 hover:to-transparent hover:shadow-lg hover:shadow-[#E07820]/10 hover:-translate-y-0.5"
            >
              <div className="text-gray-400 group-hover:text-[#F5A623] flex-shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-white">{item.title}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <EmailSignup />
      </div>
    </div>
  );
}
