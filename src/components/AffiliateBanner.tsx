'use client';

import { useEffect, useState } from 'react';

// Regions
const EU_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
  'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK',
  'SI', 'ES', 'SE', // EU
  'IS', 'LI', 'NO', // EEA
];
const UK_AU = ['GB', 'AU'];
const XM_BLOCKED = [...EU_COUNTRIES, ...UK_AU];

type BannerSize = '300x250' | '728x90';
type Provider = 'xm' | 'bybit';

// XM banners (non-EU/UK/AU only)
const XM_BANNERS: Record<BannerSize, { src: string; href: string; width: number; height: number }> = {
  '300x250': {
    src: 'https://ads.pipaffiliates.com/i/131312?c=1183957',
    href: 'https://clicks.pipaffiliates.com/c?m=131312&c=1183957',
    width: 300,
    height: 250,
  },
  '728x90': {
    src: 'https://ads.pipaffiliates.com/i/132324?c=1183957',
    href: 'https://clicks.pipaffiliates.com/c?m=132324&c=1183957',
    width: 728,
    height: 90,
  },
};

// Bybit links (EU gets bybit.eu, UK/AU gets bybit.com global)
const BYBIT_EU_LINK = 'https://partner.bybit.eu/b/aff_7_145927';
const BYBIT_GLOBAL_LINK = 'https://partner.bybit.com/b/aff_7_145927';

interface AffiliateBannerProps {
  size: BannerSize;
  placement: string;
  className?: string;
}

export default function AffiliateBanner({ size, placement, className = '' }: AffiliateBannerProps) {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [bybitLink, setBybitLink] = useState(BYBIT_GLOBAL_LINK);
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    const checkGeo = async () => {
      try {
        const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
        const text = await res.text();
        const locMatch = text.match(/loc=([A-Z]{2})/);
        const country = locMatch ? locMatch[1] : null;

        if (!country) {
          // Unknown → show XM (safer default)
          setProvider('xm');
          return;
        }

        if (XM_BLOCKED.includes(country)) {
          // EU/EEA/UK/AU → show Bybit (always global link — redirects EU automatically)
          setProvider('bybit');
          setBybitLink(BYBIT_GLOBAL_LINK);
        } else {
          // Rest of world → show XM
          setProvider('xm');
        }
      } catch {
        setProvider('xm');
      }
    };
    checkGeo();
  }, []);

  // Track impression
  useEffect(() => {
    if (provider && !tracked && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_impression', {
        event_category: 'affiliate',
        event_label: `${provider}_${size}_${placement}`,
        banner_size: size,
        banner_placement: placement,
        banner_provider: provider,
      });
      setTracked(true);
    }
  }, [provider, tracked, size, placement]);

  if (!provider) return null;

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: `${provider}_${size}_${placement}`,
        banner_size: size,
        banner_placement: placement,
        banner_provider: provider,
      });
    }
  };

  // Render XM banner
  if (provider === 'xm') {
    const banner = XM_BANNERS[size];
    return (
      <div className={`flex justify-center ${className}`}>
        <a
          href={banner.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          referrerPolicy="no-referrer-when-downgrade"
          onClick={handleClick}
          className="inline-block transition-opacity hover:opacity-90"
        >
          <img
            src={banner.src}
            width={banner.width}
            height={banner.height}
            alt="Trade with XM - $30 Free"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            loading="lazy"
          />
        </a>
      </div>
    );
  }

  // Render Bybit banner (custom styled, works for all sizes)
  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href={bybitLink}
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={handleClick}
        className={`inline-block transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/20 rounded-xl overflow-hidden ${
          size === '728x90' ? 'max-w-[728px] w-full' : 'max-w-[300px]'
        }`}
      >
        {size === '300x250' ? (
          <div className="relative w-[300px] h-[250px] bg-black rounded-xl overflow-hidden border border-white/10">
            <img
              src="/banners/bybit-starter-rewards.jpg"
              alt="Bybit Starter Rewards - Get up to $30,100 USDT"
              className="w-full h-full object-contain bg-black"
              loading="lazy"
            />
          </div>
        ) : (
          /* 728x90 leaderboard version */
          <div className="relative w-full h-[90px] bg-black rounded-xl overflow-hidden border border-white/10 flex items-center px-6 gap-4"
               style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
            <img src="/banners/bybit-starter-rewards.jpg" alt="Bybit" className="h-[70px] w-auto rounded-lg object-cover" loading="lazy" />
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm sm:text-base">Bybit Starter Rewards</div>
              <div className="text-orange-400 text-xs sm:text-sm font-semibold">Get up to $30,100 USDT</div>
            </div>
            <div className="flex-shrink-0 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm px-4 py-2 rounded-lg transition-colors">
              Claim Now →
            </div>
          </div>
        )}
      </a>
    </div>
  );
}
