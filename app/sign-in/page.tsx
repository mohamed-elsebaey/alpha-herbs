import { Accessibility } from "@/components/Accessibility";
import SignIn from "@/components/sign-In-up/SignIn";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to watch more and more ...",
};

async function page() {
  const ifLogin: any = await Accessibility();
  if (ifLogin) {
    redirect("/");
  }
  return (
    <>
      <SignIn />
    </>
  );
}

export default page;
