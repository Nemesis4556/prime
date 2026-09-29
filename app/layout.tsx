import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OG_IMAGE } from "@/lib/images";
import "./globals.css";

// Single modern, corporate, premium typeface for the whole site.
// Headings use weights 700–800, body copy uses 400–500 (see tailwind.config.ts).
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

// Canlı site adresin. Vercel/hosting ayarlarında NEXT_PUBLIC_SITE_URL tanımlayabilir
// ya da aşağıdaki adresi gerçek alan adınla değiştirebilirsin.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.primetimetrainingclub.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "Prime Time Training Club | Manisa Spor Salonu",
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
    url: "/",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${manrope.variable} font-body-md text-body-md bg-background text-on-surface antialiased`}
      >
        <Header />
        <main className="w-full bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
