import { Accessibility } from "@/components/Accessibility";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: {
    absolute: "Account Settings",
    template: "%s | Account Settings ",
  },
  description: "alpha herbs ...... ",
  
  robots: {
    index: false,
    nocache: true,
  },
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ifLogin: any = await Accessibility();
  if (!ifLogin) {
    redirect("/");
  }
  return <>{children}</>;
}
