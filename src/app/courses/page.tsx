import type { Metadata } from "next";
import EmailSignup from "@/components/EmailSignup";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Free Gold and Crypto Trading Courses - Learn to Trade XAUUSD",
  description:
    "Free trading courses covering gold and crypto. Learn EMA strategies, risk management, market structure, and how to trade XAUUSD profitably. No fluff, no upsells.",
  alternates: { canonical: "https://mt5gold.com/courses" },
};

const courses = [
  {
    title: "Getting Started with Gold Trading",
    description: "Understand what moves gold, how to read XAUUSD charts, and how to structure a trade.",
    status: "coming-soon",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Risk Management Masterclass",
    description: "Position sizing, stop placement, and how to protect your account. The foundation of every profitable trader.",
    status: "coming-soon",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "EMA Strategy Breakdown",
    description: "The exact EMA crossover + BOS entry method used by the MT5Phoenix EA. Fully explained, free.",
    status: "coming-soon",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Reading Market Structure",
    description: "How to identify swing highs/lows, break of structure, and trend direction on any timeframe.",
    status: "coming-soon",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Free Trading Courses
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn gold trading from practical experience. No fluff, no upsells,
            just real education.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6 flex gap-4 items-start transition-all duration-300 hover:border-[#E07820]/40 hover:bg-gradient-to-br hover:from-[#E07820]/5 hover:to-transparent hover:shadow-lg hover:shadow-[#E07820]/10 hover:-translate-y-0.5"
            >
              <div className="text-gray-400 flex-shrink-0 mt-0.5">
                {course.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-white">{course.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#E07820]/10 text-[#F5A623] border border-[#E07820]/20">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="rounded-xl border border-[#E07820]/30 bg-gradient-to-br from-[#1a0f00] to-[#0A0A0A] p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Watch on YouTube in the meantime</h2>
          <p className="text-gray-400 mb-6">
            Strategy walkthroughs, trade reviews, and tutorials are already live on the channel.
          </p>
          <a
            href="https://www.youtube.com/@thrivenex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#E07820]/40"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>

        <EmailSignup />

        <div className="mt-8">
          <ShareButtons url="https://mt5gold.com/courses" text="Free trading courses from MT5Gold - Gold, BTC, EMA strategies and more" />
        </div>
      </div>
    </div>
  );
}
