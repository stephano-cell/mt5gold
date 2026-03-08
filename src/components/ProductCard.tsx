interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
  mql5Link: string;
  price: string;
  badge?: string;
  highlight?: boolean;
}

export default function ProductCard({
  name,
  description,
  features,
  stats,
  mql5Link,
  price,
  badge,
  highlight,
}: ProductCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 border transition-all hover:scale-[1.02] ${
        highlight
          ? "border-gold-500/40 bg-gradient-to-b from-gold-500/10 to-transparent gold-glow"
          : "border-white/10 bg-white/[0.02] hover:border-gold-500/20"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded-full">
          {badge}
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/5 rounded-lg p-3 text-center"
          >
            <div className="text-lg font-bold text-gold-400">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start text-sm text-gray-300">
            <svg
              className="w-4 h-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-white">{price}</span>
        </div>
        <a
          href={mql5Link}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
            highlight
              ? "bg-gold-500 hover:bg-gold-400 text-navy-950"
              : "border border-gold-500/30 hover:border-gold-500/60 text-gold-400 hover:bg-gold-500/5"
          }`}
        >
          View on MQL5
        </a>
      </div>
    </div>
  );
}
