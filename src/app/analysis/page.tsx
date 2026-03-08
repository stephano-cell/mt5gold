import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Market Analysis - MT5Gold",
  description: "Daily XAUUSD gold market analysis with key levels, bias direction, and trade setups.",
};

export default function AnalysisPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Daily Market Analysis
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fresh XAUUSD analysis every trading day. Key levels, directional bias,
            and what I&apos;m watching.
          </p>
        </div>

        {/* Placeholder for latest analysis */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400 mb-6">
              Daily analysis posts will appear here. In the meantime, catch the latest on YouTube.
            </p>
            <a
              href="https://www.youtube.com/@thrivenex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-lg transition-colors"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
