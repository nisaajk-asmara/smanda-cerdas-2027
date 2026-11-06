import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:2000");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Festival Smanda Cerdas 2027",
    template: "%s | Festival Smanda Cerdas 2027",
  },
  description:
    "Festival pendidikan, seni, bazar, Creative Expo, dan kompetisi pelajar SMP se-Kota Lubuklinggau. Januari 2027 di SMAN 2 Kota Lubuklinggau.",
  keywords: [
    "Festival Smanda Cerdas 2027",
    "SMAN 2 Lubuklinggau",
    "kompetisi SMP Lubuklinggau",
    "bazar sekolah",
    "Creative Expo",
  ],
  openGraph: {
    title: "Festival Smanda Cerdas 2027",
    description:
      "Kreativitas, prestasi, dan inovasi dalam satu perayaan besar. Januari 2027 di SMAN 2 Kota Lubuklinggau.",
    locale: "id_ID",
    siteName: "Festival Smanda Cerdas 2027",
    type: "website",
    images: [
      {
        url: "/images/smanda-school-event.jpg",
        width: 1083,
        height: 768,
        alt: "Siswa berfoto bersama di depan gedung SMAN 2 Kota Lubuklinggau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Festival Smanda Cerdas 2027",
    description:
      "Kreativitas, prestasi, dan inovasi dalam satu perayaan besar.",
    images: ["/images/smanda-school-event.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
