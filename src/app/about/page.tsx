import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MT5Gold - Real Trader Building Gold Trading Expert Advisors",
  description:
    "DevOps engineer and automation specialist who trades XAUUSD and BTC with real money. The story behind MT5Phoenix and Golden Raven Expert Advisors for MetaTrader 5.",
  alternates: { canonical: "https://mt5gold.com/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h1 className="text-4xl font-bold text-white mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A] bg-clip-text text-transparent">
            MT5Gold
          </span>
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          Built by a professional DevOps engineer and automation specialist who trades with real money.
        </p>

        <div className="space-y-10 text-gray-300">

          {/* 1. Free Education */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-[#F5A623] to-[#E07820] bg-clip-text text-transparent">Free Education</span>
            </h2>
            <p>
              Everything on MT5Gold starts with education. I publish free trading courses and daily
              market analysis on YouTube covering gold, crypto, and automated trading. Whether you
              ever buy an EA or not, the content is free. Better-educated traders make better
              decisions and that is good for everyone in this market.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <a href="/courses"
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-semibold rounded-lg transition-all duration-300 text-sm">
                Browse Free Courses
              </a>
              <a href="/analysis"
                className="inline-flex items-center gap-2 px-5 py-2 border border-[#E07820]/40 hover:border-[#F5A623]/70 text-[#F5A623] hover:text-[#E07820] font-semibold rounded-lg transition-all duration-300 text-sm">
                Daily Analysis
              </a>
            </div>
          </div>

          {/* 2. TRW */}
          <div className="rounded-2xl border border-[#E07820]/30 bg-gradient-to-br from-[#1a0f00] to-[#0A0A0A] overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.jointherealworld.com/favicon.ico" alt="The Real World" className="w-10 h-10 rounded-xl" />
                <div>
                  <h3 className="text-lg font-bold text-white">The Real World Trading Campus</h3>
                  <p className="text-sm text-[#F5A623]">Where my trading journey levelled up</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                I graduated from The Real World (TRW) Trading Campus. If you are serious about learning
                how to trade and build real financial skills, this is where I would point you first. The
                campus covers everything from reading charts to advanced strategies, risk management, and
                building the mindset to stay consistent in the markets.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                It is not just theory. You get live sessions, experienced mentors, and a community of
                traders who are actually in the markets every day. The combination of structured education
                and real-world application is what separates it from anything else I have tried.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { icon: "📚", label: "Structured curriculum" },
                  { icon: "🎯", label: "Live trading sessions" },
                  { icon: "👥", label: "Active community" },
                  { icon: "🧠", label: "Mindset training" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://jointherealworld.com/a/nfjhj9ftnk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#E07820]/40 text-sm"
              >
                Join The Real World
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-xs text-gray-600 mt-3">Use my link to join the campus I personally graduated from</p>
            </div>
          </div>

          {/* 3. Bybit */}
          <div className="rounded-2xl border border-[#E07820]/30 bg-gradient-to-br from-[#1a0f00] to-[#0A0A0A] overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <img src="/bybit-logo.jpg" alt="Bybit" className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h3 className="text-lg font-bold text-white">Why I Trade on Bybit</h3>
                  <p className="text-sm text-[#F5A623]">My preferred exchange and a reward for you</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                I run my hybrid trading bot live on Bybit 24/5 with real money. I chose Bybit because
                of its low latency execution, deep liquidity on BTCUSDT and XAUUSD CFDs, and a reliable
                API that does not drop connections mid-session. When your bot depends on the exchange, you
                need one you can actually trust.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="rounded-lg border border-[#E07820]/20 bg-[#E07820]/5 p-3">
                  <div className="text-[#F5A623] font-bold text-lg">$20 USDT</div>
                  <div className="text-gray-400 text-xs mt-1">Sign up and complete identity verification in 2 steps</div>
                </div>
                <div className="rounded-lg border border-[#E07820]/20 bg-[#E07820]/5 p-3">
                  <div className="text-[#F5A623] font-bold text-lg">Up to $30,100</div>
                  <div className="text-gray-400 text-xs mt-1">Starter Rewards deposit bonus blast available now</div>
                </div>
                <div className="rounded-lg border border-[#E07820]/20 bg-[#E07820]/5 p-3">
                  <div className="text-[#F5A623] font-bold text-lg">12% APR</div>
                  <div className="text-gray-400 text-xs mt-1">Earn Carnival: stake USDT and XAUT for passive yield</div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { icon: "⚡", label: "Low latency execution" },
                  { icon: "🤖", label: "Reliable API for bots" },
                  { icon: "📊", label: "Deep liquidity" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://partner.bybit.com/b/THRIVENEX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#E07820]/40 text-sm"
              >
                Join Bybit & Claim Your Bonus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-xs text-gray-600 mt-3">Use my link to unlock new user rewards automatically</p>
            </div>
          </div>

          {/* 4. Who I Am */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-[#F5A623] to-[#E07820] bg-clip-text text-transparent">Who I Am</span>
            </h2>
            <p>
              I am a professional DevOps engineer with a passion for automation. I apply the same
              systems thinking from my day job: infrastructure, reliability, code that runs without
              you. MT5Phoenix and Golden Raven were built the same way you build
              production software: tested, iterated, and deployed with real stakes.
            </p>
          </div>

          {/* 5. Automated Trading */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-[#F5A623] to-[#E07820] bg-clip-text text-transparent">Automated Trading</span>
            </h2>
            <p>
              Automated trading is not a set-and-forget solution. That is the part nobody tells you.
              It requires constant backtesting, parameter tuning, and adapting to changing market
              conditions. A strategy that works in a trending year can fail in a ranging one. You
              need to understand what you are running, why it works, and when to step in.
            </p>
            <p className="mt-4">
              I run automated strategies on two markets: XAUUSD (Gold) on MetaTrader 5 using Expert
              Advisors, and BTC on Bybit using a custom Python bot. Both are live with real money.
              Both went through months of backtesting, forward testing, and iteration before going live.
            </p>
            <p className="mt-4">
              MT5Phoenix and Golden Raven are the result of that process on the gold side. The Bybit
              bot runs an ORB (Opening Range Breakout) strategy across multiple sessions. Neither is
              perfect. Both are profitable over time. That is all you can realistically ask for.
            </p>
          </div>

          {/* 7. Transparency */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-[#F5A623] to-[#E07820] bg-clip-text text-transparent">Transparency</span>
            </h2>
            <p>I do not make guarantees. Trading is risky and past performance does not predict the future. What I can promise:</p>
            <ul className="space-y-3 mt-4">
              {[
                "Every backtest result I share is real and reproducible",
                "I trade with these EAs using my own money",
                "The code does exactly what the documentation says",
                "I respond to every support message personally",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#F5A623] to-[#E07820] flex items-center justify-center flex-shrink-0 text-black text-xs font-bold">✓</span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="p-6 rounded-xl border border-[#E07820]/20 bg-gradient-to-r from-[#E07820]/5 to-transparent">
            <h3 className="text-lg font-semibold mb-2">
              <span className="bg-gradient-to-r from-[#F5A623] to-[#E07820] bg-clip-text text-transparent">Get in Touch</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Questions about the EAs? Want to discuss strategy or automation? Always happy to chat.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="https://t.me/thrivenex" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#F5A623] hover:text-[#E07820] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.12 14.073l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.696.513z"/>
                </svg>
                @thrivenex
              </a>
              <a href="https://x.com/thrivenex" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#F5A623] hover:text-[#E07820] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @thrivenex
              </a>
              <a href="https://www.mql5.com/en/users/thrivenex" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#F5A623] hover:text-[#E07820] transition-colors">
                <img src="https://c.mql5.com/favicon.ico" alt="MQL5" className="w-4 h-4 rounded-sm" />
                MQL5 Profile
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
