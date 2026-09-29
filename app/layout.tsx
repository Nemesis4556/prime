import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Single modern, corporate, premium typeface for the whole site.
// Headings use weights 700–800, body copy uses 400–500.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Time Training Club | Manisa Spor Salonu",

  description:
    "Prime Time Training Club — Manisa Yunusemre Güzelyurt'ta spor salonu. Fitness, personal training ve online ders.",

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

    siteName: "Prime Time Training Club",

    locale: "tr_TR",

    type: "website",

    // WhatsApp, Facebook, LinkedIn vb. için bağlantı önizleme görseli
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Time Training Club | Manisa Spor Salonu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Prime Time Training Club | Manisa Spor Salonu",

    description:
      "Manisa Yunusemre Güzelyurt'ta spor salonu. Fitness, personal training ve online ders.",

    images: ["/images/og-image.jpg"],
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

        <main className="w-full bg-background">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
