import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import PageTransition from "./_components/PageTransition";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadashar.vercel.app"),
  title: {
    default: "Muhammad Ashar - Software Engineer",
    template: "%s | Muhammad Ashar",
  },
  description:
    "Muhammad Ashar is a software engineer specializing in backend and complex systems.",
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
        <main className="relative isolate min-h-screen m-auto bg-slate-50">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              '--mid': 0.1, // opacity at the left/right edges: 0 = gone, 1 = fully visible
              backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              maskImage: 'linear-gradient(to right, rgba(0,0,0,var(--mid)) 0%, black 35%, black 65%, rgba(0,0,0,var(--mid)) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,var(--mid)) 0%, black 35%, black 65%, rgba(0,0,0,var(--mid)) 100%)',
            } as React.CSSProperties}
          />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </main>
      </body>
    </html>
  );
}
