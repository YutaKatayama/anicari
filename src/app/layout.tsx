import type { Metadata, Viewport } from "next";
import { Lato, Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { COMPANY } from "@/constants/company";
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

export const metadata: Metadata = {
  title: `${COMPANY.name} | ペット業界特化型キャリア支援`,
  description: COMPANY.mission,
};

export const viewport: Viewport = {
  themeColor: "#DFA3B1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${lato.variable} ${notoSansJp.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
