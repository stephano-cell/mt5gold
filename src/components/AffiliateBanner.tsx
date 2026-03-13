'use client';

import { useEffect, useState } from 'react';

// EU + EEA + UK + AU country codes (XM restricted regions)
const BLOCKED_COUNTRIES = [
  'GB', 'AU', // UK + Australia
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
  'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK',
  'SI', 'ES', 'SE', // EU members
  'IS', 'LI', 'NO', // EEA
];

type BannerSize = '300x250' | '728x90' | '120x600';

const BANNERS: Record<BannerSize, { src: string; href: string; width: number; height: number }> = {
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
  '120x600': {
    src: 'https://ads.pipaffiliates.com/i/131252?c=1183957',
    href: 'https://clicks.pipaffiliates.com/c?m=131252&c=1183957',
    width: 120,
    height: 600,
  },
};

interface AffiliateBannerProps {
  size: BannerSize;
  placement: string; // e.g. "analysis-below-video", "blog-mid", "homepage-hero"
  className?: string;
}

export default function AffiliateBanner({ size, placement, className = '' }: AffiliateBannerProps) {
  const [visible, setVisible] = useState(false);
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    // Check geo via Cloudflare header (free) or fallback to ipapi
    const checkGeo = async () => {
      try {
        // Try Cloudflare trace first (free, fast, no API key)
        const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
        const text = await res.text();
        const locMatch = text.match(/loc=([A-Z]{2})/);
        const country = locMatch ? locMatch[1] : null;

        if (country && !BLOCKED_COUNTRIES.includes(country)) {
          setVisible(true);
        }
      } catch {
        // Fallback: show banner (better to show than miss a click)
        setVisible(true);
      }
    };
    checkGeo();
  }, []);

  // Track impression when banner becomes visible
  useEffect(() => {
    if (visible && !tracked && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_impression', {
        event_category: 'affiliate',
        event_label: `xm_${size}_${placement}`,
        banner_size: size,
        banner_placement: placement,
      });
      setTracked(true);
    }
  }, [visible, tracked, size, placement]);

  if (!visible) return null;

  const banner = BANNERS[size];

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: `xm_${size}_${placement}`,
        banner_size: size,
        banner_placement: placement,
      });
    }
  };

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
          alt="Trade with XM"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
          loading="lazy"
        />
      </a>
    </div>
  );
}
