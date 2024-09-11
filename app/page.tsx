// Alpha Herbs Main Page

import Hero from "@/components/Hero";
import Newsletter from "@/components/newsletter/Newsletter";
import Products from "@/components/products/Product";
import Video from "@/components/Video";
import Stats from "@/components/stats/Stats";
import Images from "@/components/Images";


export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Images />
      <Stats />
      <Products />
      <Newsletter />
    </>
  );
}
