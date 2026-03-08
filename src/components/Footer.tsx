import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060912] border-t border-gold-500/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gold-gradient mb-3">
              MT5Gold.com
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              Automated gold trading with expert advisors for MetaTrader 5.
              Built by a trader, for traders. No guarantees, just honest tools
              and transparent results.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.youtube.com/@thrivenex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                  <path fill="#080B1A" d="M9.545 15.568V8.432L15.818 12z" />
                </svg>
              </a>
              <a
                href="https://t.me/thrivenex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="https://x.com/thrivenex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.mql5.com/en/users/thrivenex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold-400 transition-colors text-sm font-bold"
              >
                MQL5
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/products", label: "Products" },
                { href: "/courses", label: "Courses" },
                { href: "/analysis", label: "Daily Analysis" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trading */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Start Trading
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.mql5.com/en/market/product/127380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                >
                  MT5Phoenix EA
                </a>
              </li>
              <li>
                <a
                  href="https://www.bybit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Open Bybit Account
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MT5Gold.com. All
            rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2 sm:mt-0">
            Trading involves risk. Past performance does not guarantee future
            results.
          </p>
        </div>
      </div>
    </footer>
  );
}
