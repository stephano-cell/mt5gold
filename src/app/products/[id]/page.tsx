import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};

  const image = product.screenshots?.[0] || product.logo || "/og-image.jpg";
  const absoluteImage = image.startsWith("http") ? image : `https://mt5gold.com${image}`;
  const url = `https://mt5gold.com/products/${product.id}`;

  return {
    title: `${product.name} — ${product.free ? "Free" : product.price} ${product.type} | MT5Gold`,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} — ${product.free ? "Free" : product.price} ${product.type}`,
      description: product.description,
      url,
      images: [{ url: absoluteImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — ${product.free ? "Free" : product.price} ${product.type}`,
      description: product.description,
      images: [absoluteImage],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.screenshots?.[0]
      ? `https://mt5gold.com${product.screenshots[0]}`
      : product.logo
      ? `https://mt5gold.com${product.logo}`
      : "https://mt5gold.com/og-image.jpg",
    brand: { "@type": "Organization", name: "MT5Gold" },
    offers: {
      "@type": "Offer",
      price: product.free ? "0" : product.pricing?.[0]?.price.replace("$", "") || "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </div>
  );
}
