export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(224,120,32,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(224,120,32,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Phoenix radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#E07820]/10 via-[#C43A1A]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#E07820]/40 bg-[#E07820]/10 text-[#F5A623] text-sm mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#F5A623] rounded-full mr-2 animate-pulse shadow-[0_0_6px_#F5A623]" />
          Built by a Real Trader &nbsp;·&nbsp; Traded with Real Money
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-white">Trade Smarter.</span>
          <br />
          <span className="bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A] bg-clip-text text-transparent">
            Build Bots. Win.
          </span>
        </h1>

        {/* Sub */}
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Expert Advisors, daily market analysis, trading insights and crypto
          bot development. Everything you need to trade profitably, built by
          someone who actually does it.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href="/products"
            className="group relative px-8 py-3 bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#E07820]/40"
          >
            <span className="flex items-center justify-center gap-2">
              View Expert Advisors
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="/analysis"
            className="group px-8 py-3 border border-[#E07820]/40 hover:border-[#F5A623]/70 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:bg-[#E07820]/10 hover:shadow-lg hover:shadow-[#E07820]/20 hover:text-[#F5A623]"
          >
            Daily Analysis
          </a>
          <a
            href="/blog"
            className="group px-8 py-3 border border-white/10 hover:border-[#F5A623]/40 text-gray-400 hover:text-[#F5A623] font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
          >
            Blog
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { value: "33+", label: "EA Sales" },
            { value: "2.21R", label: "Expected Value" },
            { value: "Daily", label: "Market Analysis" },
            { value: "Free", label: "Trading Courses" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl border border-[#E07820]/10 bg-[#E07820]/5 hover:border-[#E07820]/30 hover:bg-[#E07820]/10 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#F5A623] to-[#E07820] bg-clip-text text-transparent group-hover:from-[#E07820] group-hover:to-[#C43A1A] transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
