import SignIn from "@/components/sign-In-up/SignIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alpha Herbs | Login",
  description: "Sign in to watch more and more ...",
};

function page() {
  return (
    <>
      <SignIn />
    </>
  );
}

export default page;
