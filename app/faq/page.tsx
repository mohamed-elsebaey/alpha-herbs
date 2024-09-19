import FAQ from "@/components/faq/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Have a question ? Look Here!",
  alternates: {
    canonical: "https://www.alpha-herbs.com/faq",
  },
};

function page() {
  return (
    <>
      <FAQ />
    </>
  );
}

export default page;
