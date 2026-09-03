import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Fraunces, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScheduleProvider } from "@/components/ScheduleProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import { LightLines } from "@/components/LightLines";
import { BackToTop } from "@/components/BackToTop";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

// Loaded via next/font/google (self-hosted at build time, no external CDN
// request) rather than the raw @font-face + jsdelivr CDN link that was
// pasted in, for the same reasons the other two typefaces are loaded this
// way: automatic subsetting, font-display handling, and no runtime
// dependency on a third-party host. Scoped to a dedicated --font-stat
// variable rather than replacing --font-display: Fraunces was deliberately
// swapped out site-wide earlier (it's one of the two most common LLM
// default-font tells) for Cormorant Garamond, so this is a narrow,
// explicit accent for the Impact section's stat numbers only, not a
// reversion of that decision.
const fraunces = Fraunces({
  variable: "--font-stat",
  subsets: ["latin"],
  weight: "variable",
});

const title = "David Herrera · AI Systems Architect";
const description =
  "I build AI agents you can actually audit: evidence-backed extraction, automated systems, and full-stack products engineered for trust, not demos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#14171c",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground font-sans"
      >
        <LightLines />
        <StructuredData />
        <ThemeProvider>
          <LocaleProvider>
            <ScheduleProvider>
              <Nav />
              <main className="flex-1">{children}</main>
              <Footer />
              <BackToTop />
            </ScheduleProvider>
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
