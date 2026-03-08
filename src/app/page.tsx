import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Expert Advisors
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Two EAs, one proven engine. Choose based on your experience level
              and risk tolerance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                { label: "Win Rate", value: "24.5%" },
                { label: "Profit Factor", value: "1.74" },
                { label: "Sales", value: "33+" },
              ]}
              mql5Link="https://www.mql5.com/en/market/product/127380"
              price="$149"
              badge="ESTABLISHED"
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
              mql5Link="https://www.mql5.com/en/market/product/golden-raven"
              price="$30/mo"
              badge="NEW"
            />
          </div>
        </div>
      </section>

      <FeatureSection />

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
                href="https://www.mql5.com/en/market/product/127380"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-gold-500/20"
              >
                Get MT5Phoenix
              </a>
              <a
                href="/courses"
                className="px-8 py-3 border border-white/10 hover:border-gold-500/30 text-gray-300 hover:text-gold-400 font-semibold rounded-lg transition-all"
              >
                Watch Free Courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
