import AboutUs from "@/components/about/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Find out more about us !",
  alternates: {
    canonical: "https://www.alpha-herbs.com/about",
  },
};

function page() {
  return (
    <>
      <AboutUs />
    </>
  );
}

export default page;
