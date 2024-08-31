import FAQ from "@/components/faq/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alpha Herbs | FAQ",
  description: "Have a question ? Look Here!",
};

function page() {
  return (
    <>
      <FAQ/>
    </>
  );
}

export default page;
