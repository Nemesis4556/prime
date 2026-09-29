import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OG_IMAGE } from "@/lib/images";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Prime Time Training Club | Manisa Spor Salonu",
    template: "%s | Prime Time Training Club",
  },
  description:
    "Prime Time Training Club — Manisa Yunusemre Güzelyurt'ta spor salonu. Fitness, personal training ve online ders. Google'da 5,0 puan.",
  keywords: [
    "Manisa spor salonu",
    "Yunusemre spor salonu",
    "Güzelyurt fitness",
    "Prime Time Training Club",
    "personal training Manisa",
    "online ders",
  ],
  openGraph: {
    title: "Prime Time Training Club | Manisa Spor Salonu",
    description:
      "Manisa Yunusemre Güzelyurt'ta spor salonu. Fitness, personal training ve online ders.",
    locale: "tr_TR",
    type: "website",
    siteName: "Prime Time Training Club",
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Time Training Club | Manisa Spor Salonu",
    description:
      "Manisa Yunusemre Güzelyurt'ta spor salonu. Fitness, personal training ve online ders.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`dark ${manrope.variable}`}>
      <body className="font-sans text-body-md bg-background text-on-surface antialiased min-h-screen flex flex-col">
        <Header />
        <main className="w-full flex-1 bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
