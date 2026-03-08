# MT5Gold.com - Website Plan

## Overview
Trading education & EA marketplace site for ImmuneTraders brand.
Domain: mt5gold.com (already owned)

## Tech Stack
- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS
- **Hosting**: Cloudflare Pages (free, global CDN, auto SSL)
- **CMS**: Markdown files in repo (I update directly)
- **Live Chat**: Tawk.to (free)
- **Analytics**: Google Analytics 4

## Pages

### 1. Homepage (`/`)
- Hero: Bold headline + Golden Raven backtest video
- Feature cards: MT5Phoenix, Golden Raven
- Trust signals: MQL5 reviews, years trading, live results
- CTA: "Get Started" → Products page
- Testimonials section (pull from MQL5 reviews)

### 2. Products (`/products`)
- MT5Phoenix EA card (33 sales, established)
  - Description, features, backtest results
  - Link to MQL5 marketplace
  - Price display
- Golden Raven EA card (new, simplified)
  - Description, features, risk profiles
  - Link to MQL5 marketplace
  - Price display
- Comparison table: Phoenix vs Raven

### 3. Courses (`/courses`)
- Trading Lessons playlist (embedded YouTube)
- Market Analysis series
- Each video as a card with thumbnail + description
- Filter by category/difficulty

### 4. Daily Analysis (`/analysis`)
- Latest market analysis video (auto-updated)
- Archive of past analyses
- Key levels, bias, trade ideas (text summary)
- Updated daily by me via markdown files

### 5. News/Blog (`/blog`)
- Market updates
- Strategy insights
- EA updates and changelogs
- Written in markdown, rendered as pages

### 6. About (`/about`)
- Solo developer story
- Trading journey
- Why gold (XAUUSD)
- ImmuneTraders brand

### 7. Contact (`/contact`)
- Tawk.to live chat widget
- Email: contact@mt5gold.com (or similar)
- Telegram link
- MQL5 profile link

### 8. Affiliates (`/affiliates`)
- Bybit referral link + signup bonus info
- Broker comparisons
- VPS recommendations
- Tools we use

## SEO Strategy
- Schema.org markup (Product, Course, Article, Organization)
- Dynamic sitemap.xml
- Open Graph + Twitter cards
- Fast loading (static export, optimized images)
- Blog content for organic traffic
- Keywords: gold EA, XAUUSD bot, MT5 expert advisor, gold trading

## Design Direction
- Dark theme (trading vibe - dark navy/black)
- Gold accents (#D4AF37 or similar)
- Clean, professional, not flashy
- Mobile-first responsive
- Fast loading, minimal JS

## Content I Auto-Update
- Daily analysis page (new video + text summary)
- Blog posts (market insights)
- Product pages (backtest results, version updates)
- News section

## Revenue Streams
1. EA sales via MQL5 marketplace links
2. Bybit affiliate commissions
3. Future: Paid courses / membership area
4. Future: Premium signals / analysis

## File Structure
```
mt5gold/
├── app/
│   ├── layout.tsx          # Root layout (nav, footer)
│   ├── page.tsx            # Homepage
│   ├── products/page.tsx   # Products
│   ├── courses/page.tsx    # Courses
│   ├── analysis/page.tsx   # Daily Analysis
│   ├── blog/
│   │   ├── page.tsx        # Blog list
│   │   └── [slug]/page.tsx # Blog post
│   ├── about/page.tsx      # About
│   ├── contact/page.tsx    # Contact
│   └── affiliates/page.tsx # Affiliate links
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   ├── VideoCard.tsx
│   └── AnalysisCard.tsx
├── content/
│   ├── blog/              # Markdown blog posts
│   ├── analysis/          # Daily analysis markdown
│   └── products.json      # Product data
├── public/
│   ├── images/
│   └── videos/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Deployment
1. Push to GitHub
2. Connect Cloudflare Pages to repo
3. Auto-deploy on every push
4. Custom domain: mt5gold.com → Cloudflare DNS

## Phase 1 (MVP)
- [x] Repository setup
- [ ] Next.js + Tailwind scaffold
- [ ] Homepage with hero + product cards
- [ ] Navbar + Footer
- [ ] Products page
- [ ] About page
- [ ] Deploy to Cloudflare Pages
- [ ] Connect mt5gold.com domain

## Phase 2
- [ ] Courses page with YouTube embeds
- [ ] Daily Analysis page
- [ ] Blog with markdown rendering
- [ ] SEO meta tags + sitemap
- [ ] Tawk.to live chat
- [ ] Google Analytics

## Phase 3
- [ ] Affiliate pages
- [ ] Contact form
- [ ] Newsletter signup
- [ ] Testimonials from MQL5
- [ ] Performance dashboard (live backtest stats)
