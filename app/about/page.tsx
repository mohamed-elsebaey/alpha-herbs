import AboutUs from "@/components/about/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Find out more about us !",
};

function page() {
  return (
    <>
      <AboutUs />
    </>
  );
}

export default page;
