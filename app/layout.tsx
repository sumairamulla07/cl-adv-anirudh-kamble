import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import JsonLd from "@/components/JsonLd";
import { Toaster } from "sonner";
import MarketingPopup from "@/components/MarketingPopup";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advanirudhkamble.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
  title: {
    default: "Advocate Anirudh Kamble – Pune's Trusted Real Estate Lawyer & Notary",
    template: "%s | Adv. Anirudh Kamble – Property Lawyer Pune",
  },
  description:
    "Advocate Anirudh Kamble – Pune's trusted real estate lawyer and notary with 24+ years of experience. Expert in property due diligence, title verification, sale deed drafting, and RERA compliance. Call 9922836682.",
  keywords: [
    "property lawyer Pune",
    "real estate lawyer Pune",
    "notary Pune",
    "title verification Pune",
    "property registration Pune",
    "RERA lawyer Pune",
    "advocate Pune",
    "sale deed drafting Pune",
    "property due diligence Pune",
    "Anirudh Kamble advocate",
  ],
  authors: [{ name: "Advocate Anirudh Kamble" }],
  creator: "Advocate Anirudh Kamble",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://advanirudhkamble.com",
    siteName: "Advocate Anirudh Kamble",
    title: "Advocate Anirudh Kamble – Pune's Trusted Real Estate Lawyer & Notary",
    description:
      "24+ years of expertise in real estate law, property documentation, and notary services in Pune, Maharashtra. Schedule an appointment today.",
    images: [
      {
        url: "/assets/advocate-portrait.jpg",
        width: 768,
        height: 1024,
        alt: "Advocate Anirudh Kamble – Property Lawyer Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Anirudh Kamble – Pune's Trusted Real Estate Lawyer",
    description:
      "Expert real estate law, notary, and property documentation services in Pune. 24+ years of experience. Schedule an appointment.",
    images: ["/assets/advocate-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://advanirudhkamble.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <MarketingPopup />
        <JsonLd />
        <Toaster richColors position="top-right" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}