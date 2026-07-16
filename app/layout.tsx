import type { Metadata, Viewport } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const display = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "A Little Birthday Surprise 🎀",
  description: "A cute, heartfelt birthday wish page — just for you.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FFE1EE",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
