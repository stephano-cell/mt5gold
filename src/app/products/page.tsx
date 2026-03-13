import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Gold Trading Expert Advisors and Tools for MetaTrader 5",
  description:
    "MT5Phoenix and Golden Raven - automated gold trading Expert Advisors for MetaTrader 5. Proven 2.21R expected value with 24-45% win rate depending on configuration. Indicators and scripts included.",
  alternates: { canonical: "https://mt5gold.com/products" },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
