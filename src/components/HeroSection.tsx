export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          Live Trading Since 2024
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">Automated</span>
          <br />
          <span className="text-gold-gradient">Gold Trading</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Expert Advisors for MetaTrader 5 that trade XAUUSD with proven
          strategies. Built by a trader who uses them with real money.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="px-8 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-gold-500/20"
          >
            View Expert Advisors
          </a>
          <a
            href="/courses"
            className="px-8 py-3 border border-gold-500/30 hover:border-gold-500/60 text-gold-400 font-semibold rounded-lg transition-all hover:bg-gold-500/5"
          >
            Free Courses
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { value: "33+", label: "EA Sales" },
            { value: "2.21", label: "Expected Value" },
            { value: "XAUUSD", label: "Speciality" },
            { value: "24/5", label: "Auto Trading" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
