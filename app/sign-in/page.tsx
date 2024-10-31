import { Accessibility } from "@/components/Accessibility";
import SignIn from "@/components/sign-In-up/SignIn";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Join the Alpha Herb community and sign in to unlock more features. Share your knowledge, learn from experts, and connect with fellow herb enthusiasts.",
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
