// Set NEXT_PUBLIC_SITE_URL once deployed (see .env.example) -- sitemap.xml,
// robots.txt, canonical URLs, and structured data all depend on this being
// the real, final URL, not a guess.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3006";
