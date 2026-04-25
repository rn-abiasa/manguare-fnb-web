import type { Metadata } from "next";
import { Manrope, Krona_One } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const kronaOne = Krona_One({
  weight: "400",
  variable: "--font-krona-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kembang | Bandung Flavors",
  description:
    "Bandung heritage flavors woodfired and unforgettable — Paris van Java.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${kronaOne.variable} smooth-scroll h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
