import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - MT5Gold",
  description: "Get in touch for support, questions, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-400 mb-12">
          Questions about the EAs, need support, or want to discuss trading
          strategy? I respond to every message personally.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <a
            href="https://t.me/thrivenex"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-white/10 hover:border-gold-500/30 bg-white/[0.02] transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
              Telegram
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              @thrivenex - Fastest response
            </p>
          </a>

          <a
            href="https://www.mql5.com/en/users/immunetraders"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-white/10 hover:border-gold-500/30 bg-white/[0.02] transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
              <span className="text-lg font-bold">M5</span>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
              MQL5 Profile
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              ImmuneTraders - EA support
            </p>
          </a>

          <a
            href="https://www.youtube.com/@ImmuneTraders"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-white/10 hover:border-gold-500/30 bg-white/[0.02] transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <path fill="#080B1A" d="M9.545 15.568V8.432L15.818 12z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
              YouTube
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              @ImmuneTraders - Free courses
            </p>
          </a>

          <a
            href="mailto:contact@mt5gold.com"
            className="p-6 rounded-xl border border-white/10 hover:border-gold-500/30 bg-white/[0.02] transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
              Email
            </h3>
            <p className="text-sm text-gray-400 mt-1">contact@mt5gold.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}
