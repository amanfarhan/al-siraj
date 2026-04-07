import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gold Jewellery in Abu Dhabi | Al Siraj Jewellery",
  description:
    "Discover premium gold, diamond & bridal jewellery in Abu Dhabi at Al Siraj Jewellery.",
  keywords: [
    "gold jewellery Abu Dhabi",
    "bridal jewellery UAE",
    "diamond jewellery Abu Dhabi",
    "22k gold Abu Dhabi","Gold jewellery dalma mall","Gold jewellery madinatzayed","Gold jewellery","jewellery shop in dubai"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased font-montserrat flex flex-col min-h-screen text-cream overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Global Velvet Background System */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              name: "Al Siraj Jewellery",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abu Dhabi",
                addressCountry: "UAE"
              },
              telephone: "+97126347640"
            }),
          }}
        />
        <div className="fixed inset-0 -z-50">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center md:animate-luxuryFlow"
            style={{
              backgroundImage: "url('/images/premium-velvet.jpg')",
            }}
          />
          {/* Balanced Gradient Overlay (Lighter, more even) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

          {/* Cinematic Lighting Layers */}
          {/* Ambient Warm Gold Glow (Increased spread and slight brightness for clarity) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.12),transparent_70%)]" />

          {/* Deep Red Ambient Falloff (Softens the edges without making them black) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(80,10,20,0.3),transparent_60%)]" />

          {/* Reduced Vignette (Soft shadow, no distinct heavy corners) */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.3)]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
