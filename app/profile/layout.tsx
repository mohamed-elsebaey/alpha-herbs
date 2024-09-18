import { Accessibility } from "@/components/Accessibility";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Alpha Herbs | profile page",
  description: "alpha herbs ...... ",
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
