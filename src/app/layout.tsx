import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontNineties = localFont({ src: '../fonts/perfectly-nineties.otf',variable: '--font-nineties' });

const fontNinetiesDisplay = localFont({ src: '../fonts/NinetiesDisplay.otf',variable: '--font-nineties-display' });

const fontNature = localFont({ src: '../fonts/nature.ttf',variable: '--font-nature' });
const fontNatureMED = localFont({ src: '../fonts/nature-medium.otf',variable: '--font-nature-med' });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight:"400",
});

export const metadata: Metadata = {
  title: "Corascale",
  description: "Ad Scaling Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${inter.variable} ${bebas.variable} ${fontNineties.variable} ${fontNature.variable} ${fontNatureMED.variable} ${fontNinetiesDisplay.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
