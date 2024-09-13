import SignUp from "@/components/sign-In-up/SignUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alpha Herbs | Sign Up",
  description: "Sign Up to watch more and more ...",
};

function page() {
  return (
    <>
      <SignUp />
    </>
  );
}

export default page;
