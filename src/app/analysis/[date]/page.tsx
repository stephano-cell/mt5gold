import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnalysisClient from "../AnalysisClient";
import videoHistory from "@/data/video-history.json";

type VideoEntry = { id: string; title: string };
const videos = videoHistory as Record<string, VideoEntry>;

// Generate static pages for all known dates
export function generateStaticParams() {
  return Object.keys(videos).map((date) => ({ date }));
}

// Dynamic metadata per date — unique og:tags for each video
export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>;
}): Promise<Metadata> {
  const { date } = await params;
  const video = videos[date];
  if (!video) return {};

  const thumbnail = `https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`;

  return {
    title: `${video.title} | MT5Gold`,
    description: `Daily market analysis covering Gold (XAUUSD), Bitcoin, S&P 500, Oil, and more. Key levels, directional bias, and trade setups.`,
    alternates: { canonical: `https://mt5gold.com/analysis/${date}` },
    openGraph: {
      title: video.title,
      description: `Daily market analysis covering Gold (XAUUSD), Bitcoin, S&P 500, Oil, and more.`,
      url: `https://mt5gold.com/analysis/${date}`,
      images: [{ url: thumbnail, width: 1280, height: 720 }],
    },
    twitter: {
      card: "summary_large_image",
      title: video.title,
      description: `Daily market analysis covering Gold (XAUUSD), Bitcoin, S&P 500, Oil, and more.`,
      images: [thumbnail],
    },
  };
}

function getVideoSchema(date: string, video: VideoEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: `Daily market analysis covering Gold (XAUUSD), Bitcoin, S&P 500, Oil, and more. Key levels, directional bias, and trade setups for ${date}.`,
    thumbnailUrl: `https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
    uploadDate: `${date}T07:00:00Z`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    publisher: {
      "@type": "Organization",
      name: "MT5Gold",
      url: "https://mt5gold.com",
      logo: { "@type": "ImageObject", url: "https://mt5gold.com/golden-raven-logo.png" },
    },
  };
}

export default async function AnalysisDatePage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const video = videos[date];
  if (!video) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getVideoSchema(date, video)) }}
      />
      <AnalysisClient videoId={video.id} videoTitle={video.title} />
    </>
  );
}
