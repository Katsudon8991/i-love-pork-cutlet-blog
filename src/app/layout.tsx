import { headers } from "next/headers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  const isKorean = acceptLanguage.toLowerCase().includes("ko");

  return {
    title: isKorean ? "사실, 저는 돈까스가 더 좋습니다." : "I Love Pork Cutlet",
    description: isKorean ? "가츠돈의 테크 블로그입니다." : "This is Katsudon's tech blog.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  const lang = acceptLanguage.toLowerCase().includes("ko") ? "ko" : "en";

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA]">{children}</body>
    </html>
  );
}
