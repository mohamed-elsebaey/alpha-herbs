import { Accessibility } from "@/components/Accessibility";
import Profile from "@/components/profile/Profile";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Alpha Herbs | profile page",
  description: "alpha herbs ....... ",
};

async function page() {
  const ifLogin: any = await Accessibility();
  if (!ifLogin) {
    redirect("/");
  }
  return (
    <>
      <Profile />
    </>
  );
}

export default page;
