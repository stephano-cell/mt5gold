import type { Metadata } from "next";
import { redirect } from "next/navigation";
import videoHistory from "@/data/video-history.json";

type VideoEntry = { id: string; title: string };
const videos = videoHistory as Record<string, VideoEntry>;

const latestDate = Object.keys(videos).sort().reverse()[0];
const latestVideo = videos[latestDate];
const thumbnail = latestVideo
  ? `https://i3.ytimg.com/vi/${latestVideo.id}/maxresdefault.jpg`
  : "https://mt5gold.com/og-image.jpg";

// Serve the latest video's metadata directly on /analysis too (for backward compat)
export const metadata: Metadata = {
  title: latestVideo
    ? `${latestVideo.title} | MT5Gold`
    : "Daily Market Analysis | MT5Gold",
  description:
    "Daily market analysis covering Gold (XAUUSD), Bitcoin, S&P 500, Oil, and more. Key levels, directional bias, and trade setups.",
  alternates: { canonical: `https://mt5gold.com/analysis/${latestDate}` },
  openGraph: {
    title: latestVideo?.title || "Daily Market Analysis",
    description:
      "Daily market analysis covering Gold (XAUUSD), Bitcoin, S&P 500, Oil, and more.",
    url: `https://mt5gold.com/analysis/${latestDate}`,
    images: [{ url: thumbnail, width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: latestVideo?.title || "Daily Market Analysis",
    description:
      "Daily market analysis covering Gold (XAUUSD), Bitcoin, S&P 500, Oil, and more.",
    images: [thumbnail],
  },
};

export default function AnalysisPage() {
  redirect(`/analysis/${latestDate}`);
}
