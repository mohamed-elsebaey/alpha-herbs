import { Accessibility } from "@/components/Accessibility";
import SignUp from "@/components/sign-In-up/SignUp";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Join the vibrant Alpha Herb community and explore the world of natural herbs. Share your knowledge with our community, learn from our experts, and discover new recipes daily. Sign up now and start your journey with us!",
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
