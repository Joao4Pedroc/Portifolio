import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LeftSidebar from "./_components/leftSidebar";
import RightContent from "./_components/RightSidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portífolio",
  description: "Portífolio do João Pedro",
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
        <div className="flex h-screen bg-zinc-900 text-zinc-200">
          <LeftSidebar />
          <RightContent>{children}</RightContent>
        </div>
      </body>
    </html>
  );
}
