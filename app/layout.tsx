import type { Metadata } from "next";
import { Inter, Open_Sans, Cairo } from "next/font/google";
import "./globals.css";

const open_Sans = Open_Sans({ subsets: ["latin"] });

import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      <body className={open_Sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
