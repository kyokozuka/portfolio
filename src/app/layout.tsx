import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import PWARegister from "@/components/pwa-register";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kento Yokozuka — Software Engineer & UI/UX Designer",
  description:
    "Portfolio of Kento Yokozuka — 8+ years building scalable cloud infrastructure and crafting user-centered experiences.",
};

// PWA: モバイルのアドレスバー等の配色（背景色 canvas に合わせる）
export const viewport: Viewport = {
  themeColor: "#F7F5F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        {children}
        <PWARegister />
      </body>
    </html>
  );
}
