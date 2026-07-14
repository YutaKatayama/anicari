import type { Viewport } from "next";
import { Lato, Noto_Sans_JP } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { createSiteMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata = createSiteMetadata();

export const viewport: Viewport = {
  themeColor: "#DFA3B1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${lato.variable} ${notoSansJp.variable}`}>
      <body className="min-h-screen overflow-x-hidden antialiased">
        <GoogleAnalytics />
        <JsonLd />
        <Header />
        {children}
      </body>
    </html>
  );
}
