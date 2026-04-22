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

export const metadata = {
  title: "Eric's Lottery",
  description: "Lottery ticket checker",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <nav className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6">
            <Link href="/" className="text-lg font-semibold">
              Eric&apos;s lottery
            </Link>
            <div className="flex items-center gap-4 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/checkticket">Check Ticket</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
