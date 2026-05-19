import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { DemoProvider } from "@/components/demo-provider";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OEMHUB | Kurumsal Tedarik Zekası",
  description: "OEM eşleştirme ve maliyet analizi platformu. Tedarik zincirinizdeki gizli maliyetleri görünür kılın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DemoProvider>{children}</DemoProvider>
      </body>
    </html>
  );
}
