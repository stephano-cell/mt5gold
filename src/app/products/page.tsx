import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products - MT5Gold Expert Advisors",
  description:
    "MT5Phoenix and Golden Raven - Professional XAUUSD Expert Advisors for MetaTrader 5. Compare features and choose the right EA for your trading style.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Expert Advisors
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional gold trading bots built on the same proven engine.
            Choose your level of control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <ProductCard
            name="MT5Phoenix"
            description="The full-featured EA with 40+ configurable parameters. For experienced traders who want complete control over every aspect of the strategy."
            features={[
              "Full parameter control (EMAs, ATR, swing lookback)",
              "5 trailing stop modes (ATR, R-multiple, percentage, points, swing)",
              "Partial profit taking with break-even",
              "Session filters and daily risk limits",
              "BOS and pullback entry modes",
              "Long and short independently configurable",
              "Volume filter and ADX filter options",
              "Cooldown between trades",
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
            description="Same proven engine as MT5Phoenix, locked to optimized parameters. Just pick your risk profile and trade size. Perfect for traders who want results without complexity."
            features={[
              "Same core engine as MT5Phoenix",
              "Medium Risk: Conservative, steady growth",
              "High Risk: Aggressive, higher returns",
              "Only 2 settings: Risk Profile + Risk Amount",
              "Pre-optimized for XAUUSD specifically",
              "Push notifications on every trade",
              "Ideal for VPS set-and-forget",
              "Regular parameter updates included",
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

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Compare
          </h2>
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gold-400">
                    MT5Phoenix
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gold-400">
                    Golden Raven
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Core Engine", "Full", "Same"],
                  ["Parameters", "40+", "2"],
                  ["Risk Profiles", "Custom", "Medium / High"],
                  ["Symbol", "Any", "XAUUSD"],
                  ["Trailing Stops", "5 modes", "Pre-set"],
                  ["Session Filters", "Configurable", "Pre-set"],
                  ["Entry Modes", "BOS + Pullback", "Pre-set"],
                  ["Push Notifications", "Yes", "Yes"],
                  ["Updates", "Manual config", "Auto-optimized"],
                  ["Best For", "Experienced", "Beginners"],
                  ["Price", "$149 one-time", "$30/month"],
                ].map(([feature, phoenix, raven]) => (
                  <tr key={feature} className="hover:bg-white/[0.02]">
                    <td className="px-6 py-3 text-sm text-gray-300">
                      {feature}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-400 text-center">
                      {phoenix}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-400 text-center">
                      {raven}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mt-16 p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
          <h3 className="text-sm font-semibold text-yellow-400 mb-2">
            Risk Disclaimer
          </h3>
          <p className="text-xs text-gray-400">
            Trading forex and gold involves substantial risk of loss. Past
            performance and backtested results do not guarantee future results.
            These Expert Advisors are tools, not financial advice. Only trade
            with money you can afford to lose. Always test on a demo account
            first.
          </p>
        </div>
      </div>
    </div>
  );
}
