import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MT5Gold - Automated Gold Trading Expert Advisors for MetaTrader 5",
  description:
    "Professional XAUUSD Expert Advisors for MetaTrader 5. Trend-following EAs with proven backtests, risk management, and push notifications. Built by a real trader.",
  keywords: [
    "gold EA",
    "XAUUSD expert advisor",
    "MetaTrader 5",
    "MT5 bot",
    "gold trading bot",
    "automated trading",
    "forex EA",
    "MT5Phoenix",
    "Golden Raven",
  ],
  openGraph: {
    title: "MT5Gold - Automated Gold Trading",
    description: "Professional XAUUSD Expert Advisors for MetaTrader 5",
    url: "https://mt5gold.com",
    siteName: "MT5Gold",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MT5Gold - Automated Gold Trading",
    description: "Professional XAUUSD Expert Advisors for MetaTrader 5",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
