import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blue Ridge Construction | Residential Renovations & Custom Builds",
    template: "%s | Blue Ridge Construction",
  },
  description:
    "Blue Ridge Construction specializes in residential renovations and custom new home builds. Expert craftsmanship, trusted results.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueridgeconstruction.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Blue Ridge Construction",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
