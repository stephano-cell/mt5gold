import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MT5Gold - Support for Gold Trading Expert Advisors",
  description:
    "Get in touch with MT5Gold for EA support, trading questions, or collaboration. Reach us via Telegram, MQL5, YouTube, or email. Personal responses guaranteed.",
  alternates: { canonical: "https://mt5gold.com/contact" },
};

const contacts = [
  {
    href: "https://t.me/thrivenex",
    label: "Telegram",
    sub: "@thrivenex · Fastest response",
    border: "border-[#229ED9]/20 hover:border-[#229ED9]/50",
    bg: "hover:bg-[#229ED9]/5",
    iconBg: "from-[#229ED9]/20 to-[#1a7fa8]/20",
    iconColor: "text-[#229ED9]",
    shadow: "group-hover:shadow-[#229ED9]/30",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    href: "https://www.mql5.com/en/users/thrivenex",
    label: "MQL5 Profile",
    sub: "thrivenex · EA support",
    border: "border-[#F5A623]/20 hover:border-[#F5A623]/50",
    bg: "hover:bg-[#F5A623]/5",
    iconBg: "from-[#F5A623]/20 to-[#E07820]/20",
    iconColor: "text-[#F5A623]",
    shadow: "group-hover:shadow-[#F5A623]/30",
    icon: <img src="https://c.mql5.com/favicon.ico" alt="MQL5" className="w-6 h-6 rounded-sm" />,
  },
  {
    href: "https://www.youtube.com/@thrivenex",
    label: "YouTube",
    sub: "@thrivenex · Free courses",
    border: "border-red-500/20 hover:border-red-500/50",
    bg: "hover:bg-red-500/5",
    iconBg: "from-red-500/20 to-red-700/20",
    iconColor: "text-red-500",
    shadow: "group-hover:shadow-red-500/30",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path fill="#080B1A" d="M9.545 15.568V8.432L15.818 12z" />
      </svg>
    ),
  },
  {
    href: "mailto:info@mt5gold.com",
    label: "Email",
    sub: "info@mt5gold.com",
    border: "border-green-500/20 hover:border-green-500/50",
    bg: "hover:bg-green-500/5",
    iconBg: "from-green-500/20 to-green-700/20",
    iconColor: "text-green-400",
    shadow: "group-hover:shadow-green-500/30",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/thrivenex",
    label: "X (Twitter)",
    sub: "@thrivenex",
    border: "border-white/20 hover:border-white/40",
    bg: "hover:bg-white/5",
    iconBg: "from-white/10 to-gray-500/10",
    iconColor: "text-white",
    shadow: "group-hover:shadow-white/20",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-400 mb-12">
          Questions about the EAs, need support, or want to discuss trading strategy? I respond to every message personally.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className={`p-6 rounded-xl border bg-white/[0.02] transition-all duration-300 group ${c.border} ${c.bg}`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${c.iconBg} flex items-center justify-center ${c.iconColor} mb-4 transition-all duration-300 group-hover:shadow-md ${c.shadow}`}>
                {c.icon}
              </div>
              <h3 className={`text-lg font-semibold text-white transition-colors duration-300 ${c.iconColor.replace("text-", "group-hover:text-")}`}>
                {c.label}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{c.sub}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
