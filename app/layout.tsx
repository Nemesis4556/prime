import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prime Time Training Club",
  description:
    "Prime Time Training Club — modern ve profesyonel antrenman deneyimi.",

  openGraph: {
    title: "Prime Time Training Club",
    description:
      "Prime Time Training Club — modern ve profesyonel antrenman deneyimi.",
    url: "https://SITEN.COM",
    siteName: "Prime Time Training Club",
    images: [
      {
        url: "https://SITEN.COM/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Time Training Club",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prime Time Training Club",
    description:
      "Prime Time Training Club — modern ve profesyonel antrenman deneyimi.",
    images: ["https://SITEN.COM/images/og-image.jpg"],
  },
};
