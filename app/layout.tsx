import type { Metadata } from "next";
import "./globals.css";
import LeftSidebar from "./_components/LeftSidebar";
import RightContent from "./_components/RightContent";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
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
        className={`${poppins.variable} bg-zinc-900 text-zinc-200 antialiased `}
      >
        <div className="flex lg:flex-row flex-col h-screen lg:pl-[40%] px-[10%] py-12 lg:py-16   ">
          <LeftSidebar />

          <RightContent>{children}</RightContent>
        </div>
      </body>
    </html>
  );
}
