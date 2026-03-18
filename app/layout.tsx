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
  title: "MemoKeep",
  description: "Write. Organize. Remember.",
  icons: {
    icon : [
      {
        media: "(prefers-color-scheme: light)",
        url : "/Memologo.png",
        href : "/Memologo.png",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url : "/Memologo-dark.png",
        href : "/Memologo-dark.png",
      }  
    ]
  }
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
        {children}
      </body>
    </html>
  );
}
