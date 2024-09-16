import { Accessibility } from "@/components/Accessibility";
import SignUp from "@/components/sign-In-up/SignUp";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Alpha Herbs | Sign Up",
  description: "Sign Up to watch more and more ...",
};

function page() {
  const ifLogin: any = Accessibility();
  if (ifLogin) {
    redirect("/");
  }
  return (
    <>
      <SignUp />
    </>
  );
}

export default page;
