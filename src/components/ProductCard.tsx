interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
  mql5Link: string;
  price: string;
  badge?: string;
  highlight?: boolean;
  logo?: string;
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
  logo,
}: ProductCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] ${
        highlight
          ? "border-[#E07820]/40 bg-gradient-to-b from-[#E07820]/10 to-transparent hover:shadow-xl hover:shadow-[#E07820]/20"
          : "border-white/10 bg-white/[0.02] hover:border-[#E07820]/30 hover:bg-[#E07820]/5"
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-[#F5A623] to-[#E07820] text-black text-xs font-bold rounded-full shadow-md shadow-[#E07820]/30">
          {badge}
        </div>
      )}

      {/* Logo + Title */}
      <div className="flex items-center gap-5 mb-5">
        {logo ? (
          <img src={logo} alt={name} className="w-32 h-32 object-contain flex-shrink-0 drop-shadow-2xl" />
        ) : (
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#C43A1A] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#E07820]/30">
            <span className="text-5xl font-black text-black">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A] bg-clip-text text-transparent">
            {name}
          </h3>
        </div>
      </div>

      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{description}</p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg p-3 text-center border border-[#E07820]/10 bg-[#E07820]/5 hover:border-[#E07820]/30 transition-colors"
          >
            <div className="text-2xl font-black bg-gradient-to-r from-[#F5A623] to-[#E07820] bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start text-sm text-gray-300">
            <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#F5A623] to-[#E07820] flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-black text-[10px] font-bold">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div>
          <span className="text-2xl font-bold text-white">{price}</span>
        </div>
        <a
          href={mql5Link}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
            highlight
              ? "bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black transform hover:scale-105 hover:shadow-lg hover:shadow-[#E07820]/40"
              : "border border-[#E07820]/30 hover:border-[#F5A623]/60 text-[#F5A623] hover:bg-[#E07820]/10 hover:text-[#F5A623]"
          }`}
        >
          View on MQL5 →
        </a>
      </div>
    </div>
  );
}
