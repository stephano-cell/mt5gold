import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - MT5Gold",
  description:
    "Solo developer building automated gold trading tools. The story behind MT5Phoenix and Golden Raven Expert Advisors.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">About MT5Gold</h1>

        <div className="prose prose-invert prose-gold max-w-none space-y-6 text-gray-300">
          <p className="text-lg">
            I&apos;m Stephanos, a DevOps engineer and trader based in Cyprus. I
            built MT5Phoenix because I wanted a gold trading bot that actually
            works - not a black box with fake promises, but a transparent tool I
            use with my own money.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Why Gold?
          </h2>
          <p>
            Gold (XAUUSD) is one of the most liquid and trending instruments in
            the market. It respects technical levels, trends cleanly, and trades
            almost 24 hours a day. After testing strategies on forex pairs,
            crypto, and indices, I kept coming back to gold. The price action is
            clean, the moves are real, and the setups repeat.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            The Journey
          </h2>
          <p>
            I started with manual trading, moved to Pine Script on TradingView,
            then MQL5 for MetaTrader 5. MT5Phoenix went through dozens of
            iterations - testing EMA combinations, swing lookback periods, ATR
            multipliers, trailing stop modes, and entry types. Every parameter
            exists because I tested it against years of market data.
          </p>
          <p>
            The EA started as a personal tool. When I saw consistent results
            across multiple years of backtesting, I decided to share it on the
            MQL5 marketplace. 33 traders have picked it up since, and the
            feedback has helped me improve it further.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Golden Raven
          </h2>
          <p>
            Golden Raven came from a simple observation: most traders who bought
            MT5Phoenix didn&apos;t want 40+ parameters. They wanted something
            that just works. So I took the same engine, locked the parameters to
            my optimized settings, and exposed only two controls: Risk Profile
            and Risk Amount.
          </p>
          <p>
            Same engine, same logic, same results. Just simpler. I run both EAs
            on my own accounts.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Transparency
          </h2>
          <p>
            I don&apos;t make guarantees. Trading is risky and past performance
            doesn&apos;t predict the future. What I can promise:
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <span className="text-gold-400 mr-2">-</span>
              Every backtest result I share is real and reproducible
            </li>
            <li className="flex items-start">
              <span className="text-gold-400 mr-2">-</span>I trade with these
              EAs using my own money
            </li>
            <li className="flex items-start">
              <span className="text-gold-400 mr-2">-</span>
              The code does exactly what the documentation says
            </li>
            <li className="flex items-start">
              <span className="text-gold-400 mr-2">-</span>I respond to every
              support message personally
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Free Education
          </h2>
          <p>
            I also publish free trading courses and daily market analysis on
            YouTube. Whether you use my EAs or not, the education is free. I
            believe better-educated traders make better decisions, and that helps
            everyone.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-gold-500/20 bg-gold-500/5">
            <h3 className="text-lg font-semibold text-gold-400 mb-2">
              Get in Touch
            </h3>
            <p className="text-gray-400">
              Questions about the EAs? Want to discuss strategy? I&apos;m
              always happy to chat.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://t.me/thrivenex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold-400 hover:text-gold-300 transition-colors"
              >
                Telegram: @thrivenex
              </a>
              <a
                href="https://www.mql5.com/en/users/immunetraders"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold-400 hover:text-gold-300 transition-colors"
              >
                MQL5 Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
