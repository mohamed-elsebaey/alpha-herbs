import type { Metadata } from "next";
import { Inter, Open_Sans, Cairo } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const open_Sans = Open_Sans({ subsets: ["latin"] });

import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Template from "./template";
import { Accessibility } from "@/components/Accessibility";
import { getUserDataFromDB } from "@/db";

export const metadata: Metadata = {
  // metadataBase : new URL("https://www.alpha-herbs.com/"),
  title: {
    default: "Alpha Herbs",
    template: `%s | Alpha Herbs`,
  },
  description:
    "Discover the healing power of nature with our wide selection of organic herbs and plants.",
  // verification: {
  //   google: "google-site-verification",
  // },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ifLogin: any = await Accessibility();
  const { profilePath }: any = await getUserDataFromDB(ifLogin);
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${open_Sans.className} mx-auto max-w-[1800px]`}>
        <Header login={ifLogin} profilePath={profilePath} />
        {/* Template used to add framer motion to every child */}
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
