export type ProductType = "Expert Advisor" | "Indicator" | "TradingView Script" | "Course";

export type PricingOption = {
  label: string;
  price: string;
  note?: string;
};

export type Product = {
  id: string;
  name: string;
  type: ProductType;
  free: boolean;
  price: string;           // starting price shown in filter/badge
  pricing?: PricingOption[];
  badge?: string;
  logo?: string;
  description: string;
  features: string[];
  stats?: { label: string; value: string }[];
  mql5Link?: string;
  tradingviewLink?: string;
  demoLink?: string;
  highlight?: boolean;
  screenshots?: string[];
};

export const products: Product[] = [
  {
    id: "golden-raven",
    name: "Golden Raven",
    type: "Expert Advisor",
    free: false,
    price: "from $30/mo",
    badge: "RECOMMENDED",
    logo: "/golden-raven-logo.png",
    highlight: true,
    description:
      "Fully automated XAUUSD Expert Advisor with just 2 settings. Pick your risk profile, set your risk amount, and let it trade. No optimization needed — everything is pre-tuned and regularly updated.",
    features: [
      "Only 2 settings: Risk Profile + Risk Amount",
      "High Risk: aggressive, larger wins, ~28% win rate",
      "Medium Risk: conservative, steady growth, ~50% win rate",
      "Multi-timeframe: H1 trend bias, M30 BOS entries",
      "Dynamic trailing stop, no martingale or grid",
      "Daily loss limit to protect capital",
      "Push notifications on every trade",
      "Regular parameter updates included",
    ],
    stats: [
      { label: "Risk Profiles", value: "2" },
      { label: "Setup Time", value: "2 min" },
      { label: "Parameters", value: "2" },
      { label: "Symbol", value: "XAUUSD" },
    ],
    pricing: [
      { label: "1 Month", price: "$30" },
      { label: "3 Months", price: "$70", note: "Save 22%" },
      { label: "1 Year", price: "$120", note: "Save 33%" },
      { label: "Lifetime", price: "$149" },
    ],
    mql5Link: "https://www.mql5.com/en/market/product/168148",
  },
  {
    id: "mt5phoenix",
    name: "MT5Phoenix",
    type: "Expert Advisor",
    free: false,
    price: "from $30/mo",
    badge: "ADVANCED",
    logo: "/mt5phoenix-logo.jpg",
    description:
      "Full-featured multi-timeframe EA with 40+ configurable parameters. Uses higher timeframe bias and lower timeframe BOS or EMA entries. For experienced traders who want complete control over every aspect of the strategy.",
    features: [
      "Full parameter control (EMAs, ATR, swing lookback)",
      "5 trailing stop modes: ATR, R-multiple, percentage, points, swing",
      "Partial profit taking with break-even management",
      "Session filters and daily risk limits",
      "BOS and EMA crossover entry modes",
      "Long and short independently configurable",
      "Volume, ADX and EMA spread filters",
      "Cooldown between trades",
    ],
    stats: [
      { label: "Expected Value", value: "2.21R" },
      { label: "Win Rate", value: "24-45%*" },
      { label: "Profit Factor", value: "1.74" },
      { label: "Sales", value: "33+" },
    ],
    pricing: [
      { label: "1 Month", price: "$30" },
      { label: "3 Months", price: "$80", note: "Save 11%" },
      { label: "6 Months", price: "$130", note: "Save 29%" },
      { label: "Lifetime", price: "$300" },
    ],
    mql5Link: "https://www.mql5.com/en/market/product/150332",
  },
  {
    id: "one-shot",
    name: "One Shot",
    type: "Expert Advisor",
    free: true,
    price: "Free",
    badge: "FREE",
    logo: "/oneshot-logo.jpg",
    description:
      "Set your trade conditions and walk away. One Shot fires a single trade when your setup triggers, manages the position with SL/TP and partial close, then removes itself from the chart. Works on any symbol and any timeframe.",
    features: [
      "One trade, then done. No re-entries or over-trading",
      "4 stop loss modes: Manual, EMA, ATR, Last Candle Wick",
      "Partial take profit with automatic breakeven move",
      "Auto lot sizing from fixed USD or % of balance",
      "Market or pending order (auto-detects stop vs limit)",
      "Bidirectional: Long, Short, or Both (First Wins / Hedge)",
      "Expiry timer: auto-cancel if not triggered in X hours",
      "Push notifications for every event on your phone",
    ],
    stats: [
      { label: "Symbols", value: "All" },
      { label: "Timeframes", value: "All" },
      { label: "SL Modes", value: "4" },
      { label: "Price", value: "Free" },
    ],
    mql5Link: "https://www.mql5.com/en/market/product/oneshot",
  },
  {
    id: "5-ema-cross",
    name: "5 EMA Cross",
    type: "TradingView Script",
    free: true,
    price: "Free",
    badge: "FREE",
    description:
      "Multi-timeframe trend and momentum indicator for TradingView. Plot 5 fully customizable EMAs with automatic cross detection, dynamic trend coloring, and an EMA 200 trend filter. Run two independent EMA strategies on the same chart without switching tabs.",
    features: [
      "Two independent cross pairs with separate colors",
      "Dynamic EMA coloring: green uptrend, red downtrend",
      "Optional fill zones between cross pairs",
      "EMA 200 trend filter suppresses counter-trend signals",
      "Customizable cross arrows with adjustable size",
      "6 built-in alert conditions",
      "Full visibility toggles for every EMA",
      "Works on any asset and any timeframe",
    ],
    stats: [
      { label: "EMAs", value: "5" },
      { label: "Cross Pairs", value: "2" },
      { label: "Alerts", value: "6" },
      { label: "Price", value: "Free" },
    ],
    screenshots: [
      "/products/5ema-cross-1.jpg",
      "/products/5ema-cross-2.jpg",
      "/products/5ema-cross-3.jpg",
      "/products/5ema-cross-4.jpg",
      "/products/5ema-cross-5.jpg",
      "/products/5ema-cross-6.jpg",
      "/products/5ema-cross-7.jpg",
    ],
    tradingviewLink: "https://www.tradingview.com/script/w70OhK9I-5-EMA-Cross/",
  },
];
