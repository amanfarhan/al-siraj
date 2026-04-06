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

export const metadata: Metadata = {
  title: "Al Siraj Jewellery | Timeless Elegance",
  description: "Exquisite gold craftsmanship since 1999. Al Siraj Jewellery offers a premium collection of 18KT, 21KT, 22KT, and 24KT gold jewellery.",
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
        <div className="fixed inset-0 -z-50">
          <div
            className="absolute inset-0 bg-[length:100%_100%] md:bg-cover bg-no-repeat bg-top md:bg-center animate-luxuryFlow"
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
