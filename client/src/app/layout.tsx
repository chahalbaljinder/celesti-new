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

export const metadata: Metadata = {
  title: "Celesti | Digital Experiences That Inspire",
  description: "We create beautiful websites and applications with modern design that deliver exceptional digital experiences.",
  icons: {
    icon: '/celestial-logo.png',
    apple: '/celestial-logo.png',
    shortcut: '/celestial-logo.png',
  },
  openGraph: {
    title: "Celesti | Digital Experiences That Inspire",
    description: "We create beautiful websites and applications with modern design that deliver exceptional digital experiences.",
    images: ['/celestial-logo.png'],
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
