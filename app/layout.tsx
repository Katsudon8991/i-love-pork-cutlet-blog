import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I Love Pork Cutlet Blog",
  description: "Vercel과 Supabase를 기반으로 하는 테크 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
