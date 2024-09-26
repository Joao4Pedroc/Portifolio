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
  icons: "icon-kuromi.svg",
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
        <div className="fixed lg:absolute inset-0 z-30 overflow-auto">
          <div className=" mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 ">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <LeftSidebar />

              <RightContent>{children}</RightContent>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
