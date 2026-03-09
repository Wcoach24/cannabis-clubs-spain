import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cannabis Clubs in Spain — Complete Guide 2026 | CannabisClubsSpain",
  description:
    "Your ultimate guide to cannabis clubs across Spain. Discover legal clubs in Barcelona, Madrid, Valencia, Málaga, Ibiza & Seville. Laws, prices, membership & more.",
  keywords: [
    "cannabis clubs spain",
    "weed clubs spain",
    "cannabis social clubs spain",
    "cannabis tourism spain",
    "is weed legal in spain",
  ],
  authors: [{ name: "Cannabis Clubs Spain" }],
  openGraph: {
    type: "website",
    url: "https://cannabisclubsspain.com",
    title: "Cannabis Clubs in Spain — Complete Guide 2026",
    description:
      "Discover cannabis clubs across Spain — Barcelona, Madrid, Valencia, Málaga, Ibiza & Seville. Laws, prices, how to join.",
    images: [
      {
        url: "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/cannabis-clubs-spain/og-homepage",
        width: 1200,
        height: 630,
        alt: "Cannabis Clubs Spain Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Clubs in Spain — Complete Guide 2026",
    description:
      "Your ultimate guide to cannabis clubs across Spain. Laws, prices, membership & more.",
    images: [
      "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/cannabis-clubs-spain/og-homepage",
    ],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://cannabisclubsspain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700;800;900&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cannabis Clubs Spain",
              url: "https://cannabisclubsspain.com",
              description:
                "Complete guide to cannabis clubs, laws, and culture across Spain",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },
            }),
          }}
        />
      </head>
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
