import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Gold and Bitcoin Market Analysis Blog - Daily Trading Insights",
  description:
    "Daily gold and Bitcoin market analysis, trading insights, and expert commentary. Morning analysis, mid-day pulse, and end of day reviews for XAUUSD and crypto traders.",
  alternates: { canonical: "https://mt5gold.com/blog" },
};

export default function BlogPage() {
  return <BlogClient />;
}
