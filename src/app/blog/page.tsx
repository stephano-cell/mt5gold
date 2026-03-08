import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - MT5Gold",
  description: "Trading insights, EA updates, strategy breakdowns, and market commentary.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Strategy insights, EA updates, and trading lessons.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400">
              Blog posts are being written. Check back soon for strategy breakdowns,
              EA changelogs, and trading insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
