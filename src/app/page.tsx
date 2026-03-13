import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProductCard from "@/components/ProductCard";
import EmailSignup from "@/components/EmailSignup";
import AffiliateBanner from "@/components/AffiliateBanner";

export const metadata: Metadata = {
  title: "MT5Gold - Best Gold Trading Expert Advisors for MetaTrader 5",
  description:
    "MT5Phoenix and Golden Raven: professional XAUUSD Expert Advisors built by a real trader. Proven backtests, free daily analysis, and free trading courses.",
  alternates: { canonical: "https://mt5gold.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mt5gold.com/#website",
      url: "https://mt5gold.com",
      name: "MT5Gold",
      description: "Automated Gold Trading Expert Advisors for MetaTrader 5",
      publisher: { "@id": "https://mt5gold.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://mt5gold.com/#organization",
      name: "MT5Gold",
      url: "https://mt5gold.com",
      sameAs: [
        "https://x.com/thrivenex",
        "https://t.me/thrivenex",
        "https://www.youtube.com/@thrivenex",
        "https://www.mql5.com/en/users/thrivenex",
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Golden Raven EA",
      applicationCategory: "FinanceApplication",
      operatingSystem: "MetaTrader 5",
      description:
        "Beginner-friendly XAUUSD Expert Advisor. Pre-optimized with just 2 settings. Choose your risk profile and go.",
      offers: { "@type": "Offer", price: "30", priceCurrency: "USD", priceValidUntil: "2026-12-31" },
      url: "https://www.mql5.com/en/market/product/168148",
    },
    {
      "@type": "SoftwareApplication",
      name: "MT5Phoenix EA",
      applicationCategory: "FinanceApplication",
      operatingSystem: "MetaTrader 5",
      description:
        "Advanced XAUUSD Expert Advisor with 40+ parameters. Full control over every aspect of the strategy.",
      offers: { "@type": "Offer", price: "149", priceCurrency: "USD", priceValidUntil: "2026-12-31" },
      url: "https://www.mql5.com/en/market/product/150332",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />

      {/* Affiliate Banner */}
      <AffiliateBanner size="728x90" placement="homepage-below-hero" className="py-6" />

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Expert Advisors
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional-grade Expert Advisors for MetaTrader 5. From fully automated
              trading to single-trade execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ProductCard
              name="MT5Phoenix"
              description="The full-featured EA with 40+ configurable parameters. For experienced traders who want complete control over every aspect of the strategy."
              features={[
                "Full parameter control (EMAs, ATR, swing lookback)",
                "Multiple trailing stop modes",
                "Partial profit taking with break-even",
                "Session filters and daily risk limits",
                "BOS and pullback entry modes",
                "Long and short independently configurable",
              ]}
              stats={[
                { label: "Expected Value", value: "2.21R" },
                { label: "Win Rate", value: "24-45%*" },
                { label: "Profit Factor", value: "1.74" },
                { label: "Sales", value: "33+" },
              ]}
              mql5Link="https://www.mql5.com/en/market/product/150332"
              price="from $30/mo"
              badge="ESTABLISHED"
              logo="/mt5phoenix-logo.jpg"
              highlight
            />

            <ProductCard
              name="Golden Raven"
              description="Same proven engine as MT5Phoenix, pre-configured with optimized parameters. Just pick your risk profile and go. Perfect for beginners."
              features={[
                "Same core engine as MT5Phoenix",
                "Two risk profiles: Medium and High",
                "Only 2 settings to configure",
                "Pre-optimized for XAUUSD",
                "Push notifications included",
                "Ideal for VPS set-and-forget",
              ]}
              stats={[
                { label: "Risk Profiles", value: "2" },
                { label: "Setup Time", value: "2 min" },
                { label: "Parameters", value: "2" },
                { label: "Symbol", value: "XAUUSD" },
              ]}
              mql5Link="https://www.mql5.com/en/market/product/168148"
              price="from $30/mo"
              badge="NEW"
              logo="/golden-raven-logo.png"
            />

            <ProductCard
              name="One Shot"
              description="Set your trade conditions and walk away. One Shot fires a single trade when your setup triggers, manages SL/TP and partial close, then removes itself. For any symbol, any timeframe."
              features={[
                "One trade, then done. No re-entries",
                "4 stop loss modes: Manual, EMA, ATR, Wick",
                "Partial TP with breakeven move",
                "Auto lot sizing from USD or % risk",
                "Expiry timer (auto-cancel if not triggered)",
                "Push notifications for every event",
              ]}
              stats={[
                { label: "Symbols", value: "All" },
                { label: "Timeframes", value: "All" },
                { label: "SL Modes", value: "4" },
                { label: "Price", value: "FREE" },
              ]}
              mql5Link="https://www.mql5.com/en/market/product/168796"
              price="FREE"
              badge="FREE"
              logo="/oneshot-logo.jpg"
            />
          </div>
        </div>
      </section>

      <FeatureSection />

      <EmailSignup />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-gold-500/20 bg-gradient-to-b from-gold-500/10 to-transparent p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to automate your gold trading?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join 33+ traders using MT5Phoenix. Start with Golden Raven if you
              want simplicity, or go full control with MT5Phoenix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.mql5.com/en/market/product/168148"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#E07820]/30 hover:scale-105"
              >
                Get Golden Raven
              </a>
              <a
                href="https://t.me/mt5goldcom"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-[#0088cc]/40 hover:border-[#0088cc]/70 text-gray-300 hover:text-[#0088cc] font-semibold rounded-lg transition-all duration-300 hover:bg-[#0088cc]/10 hover:shadow-lg hover:shadow-[#0088cc]/20 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Join Telegram
              </a>
              <a
                href="/blog"
                className="px-8 py-3 border border-white/10 hover:border-[#E07820]/40 text-gray-300 hover:text-[#F5A623] font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#E07820]/10 hover:scale-105"
              >
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
