import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScheduleProvider } from "@/components/ScheduleProvider";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "David Herrera — AI Systems Architect";
const description =
  "I build AI agents you can actually audit — evidence-backed extraction, automated systems, and full-stack products engineered for trust, not demos.";

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
  },
};

export const viewport: Viewport = {
  themeColor: "#14171c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground font-sans"
      >
        <StructuredData />
        <ScheduleProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ScheduleProvider>
        <Analytics />
      </body>
    </html>
  );
}
