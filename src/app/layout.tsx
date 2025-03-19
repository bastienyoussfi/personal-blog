import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://yourblog.com'),
  title: {
    default: "My Personal Blog",
    template: "%s | My Personal Blog"
  },
  description: "A beautiful space to share thoughts, ideas, and stories on technology, development, and engineering insights.",
  keywords: ["blog", "technology", "programming", "web development", "engineering"],
  authors: [{ name: "Bastien Youssfi" }],
  creator: "Bastien Youssfi",
  publisher: "Bastien Youssfi",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'My Personal Blog',
    title: 'My Personal Blog',
    description: 'A beautiful space to share thoughts, ideas, and stories on technology, development, and engineering insights.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Personal Blog'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Personal Blog',
    description: 'A beautiful space to share thoughts, ideas, and stories on technology, development, and engineering insights.',
    creator: '@bastienyoussfi_',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
