import { Accessibility } from "@/components/Accessibility";
import SignUp from "@/components/sign-In-up/SignUp";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up to watch more and more ...",
};

async function page() {
  const ifLogin: any = await Accessibility();
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
