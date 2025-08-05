import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    template: "%s - X App",
    default: ''
  },
  description: "Front-end insights, styled like X.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      // className="bg-[var(--background)] text-[var(--foreground)]"
    >
      <body className={`${geistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
