import ContactUs from "@/components/contact/ContactUs";
import Newsletter from "@/components/newsletter/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Have a question or need assistance? We&apos;re happy to help!",
  alternates: {
    canonical: "https://www.alpha-herbs.com/contact",
  },
};

function page() {
  return (
    <>
      <ContactUs />
      <Newsletter />
    </>
  );
}

export default page;
