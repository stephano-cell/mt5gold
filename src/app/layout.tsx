import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mt5gold.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/golden-raven-logo.png", sizes: "360x360", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "MT5Gold - Best Gold Trading Expert Advisors for MetaTrader 5",
    template: "%s | MT5Gold",
  },
  description:
    "MT5Gold: automated gold trading EAs, daily XAUUSD analysis, free trading courses, and crypto bot development. MT5Phoenix and Golden Raven EAs built by a real trader using real money. Learn to trade gold and crypto from scratch.",
  keywords: [
    // EA / Gold trading
    "gold EA MT5",
    "XAUUSD expert advisor",
    "best gold trading bot",
    "MetaTrader 5 expert advisor",
    "MT5 automated trading",
    "XAUUSD trading bot",
    "MT5Phoenix EA",
    "Golden Raven EA",
    "gold trading strategy",
    "automated gold trading",
    "forex EA MetaTrader 5",
    "XAUUSD EA free download",
    "gold robot MT5",
    "best MT5 EA 2025",
    "profitable gold EA",
    "gold scalping EA",
    "XAUUSD trend following EA",
    "MT5 gold expert advisor free",
    // Crypto trading
    "BTC trading bot",
    "Bitcoin trading bot",
    "crypto trading automation",
    "crypto bot Bybit",
    "automated crypto trading",
    "BTC USDT trading bot",
    "crypto algo trading",
    "Bybit trading bot",
    "opening range breakout crypto",
    "ORB strategy Bitcoin",
    // Trading education
    "free trading courses",
    "how to trade gold",
    "how to trade XAUUSD",
    "trading lessons for beginners",
    "learn forex trading free",
    "gold trading education",
    "trading strategy course",
    "EMA strategy trading",
    "break of structure trading",
    "risk management trading",
    "how to use MetaTrader 5",
    "trading for beginners free",
    "how to build a trading bot",
    // Daily analysis
    "daily gold market analysis",
    "XAUUSD daily analysis",
    "gold price forecast today",
    "gold technical analysis",
    "XAUUSD chart analysis",
    "daily BTC analysis",
    "crypto market analysis daily",
    "gold trading signals free",
    // Exchanges
    "Bybit referral",
    "Bybit sign up bonus",
    "best crypto exchange 2025",
    "Bybit trading platform",
    "The Real World trading campus",
    "TRW trading course",
  ],
  authors: [{ name: "MT5Gold", url: "https://mt5gold.com" }],
  creator: "MT5Gold",
  publisher: "MT5Gold",
  alternates: {
    canonical: "https://mt5gold.com",
  },
  openGraph: {
    title: "MT5Gold - Best Gold Trading Expert Advisors for MetaTrader 5",
    description:
      "MT5Phoenix and Golden Raven EAs for automated XAUUSD trading with proven backtests, free daily analysis and trading courses. Built by a real trader.",
    url: "https://mt5gold.com",
    siteName: "MT5Gold",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MT5Gold - Automated Gold Trading Expert Advisors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thrivenex",
    creator: "@thrivenex",
    title: "MT5Gold - Best Gold Trading Expert Advisors",
    description:
      "MT5Phoenix and Golden Raven EAs for automated XAUUSD trading with proven backtests, free daily analysis and trading courses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification here when you have it
    // google: "your-verification-code",
  },
};

const GA_ID = "G-SX5P3B8BJ0";
const CF_BEACON = process.env.NEXT_PUBLIC_CF_BEACON; // Cloudflare Web Analytics token (add later)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {/* Google Analytics (GA4) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <ChatWidget />

        {/* Cloudflare Web Analytics */}
        {CF_BEACON && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token":"${CF_BEACON}"}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
