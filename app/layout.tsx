import type { Metadata } from "next";
import { Inter, Open_Sans, Cairo } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const open_Sans = Open_Sans({ subsets: ["latin"] });

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Template from "./template";

export const metadata: Metadata = {
  title: "Alpha Herbs",
  description:
    "Discover the healing power of nature with our wide selection of organic herbs and plants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${open_Sans.className} mx-auto max-w-[1500px]`}>
        <Header />
        {/* Teplate used to add framer motion to evry child */}
        <Template>{children}</Template>
        {/* website speed insights */}
        <SpeedInsights />
        {/* website Analytics  */}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
