import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero Deng",
  description: "Zero Deng's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gray-100 min-h-screen text-gray-800">
          {/* Header */}
          <div className="bg-white text-header border-header-border border-b font-sans">
            <div className="container mx-4 py-4 flex justify-start items-center">
              {/* Logo */}
              <div className="items-center ml-10 mr-14">
                <h1 className="text-2xl font-bold">
                  <Link href="/">Zero Deng</Link>
                </h1>
              </div>

              {/* Navbar */}
              <div className="hidden md:flex space-x-8 text-xl">
                <Link href="/about">About</Link>
                <Link href="/publications">Publications</Link>
                <Link href="/code">Code</Link>
                <Link href="/data">Data</Link>
              </div>
            </div>
          </div>
          <div className="bg-white">{children}</div>

          {/* Footer */}
          <footer className="bg-footer text-footer-text py-6 text-xs">
            <div className="container mx-auto text-center">
              <p>©2020 - 2024 by Zero Deng</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
