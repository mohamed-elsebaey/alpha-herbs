"use client";
import React, { useState } from "react";
import image1 from "@/public/images/imageGallery/1.jpeg";
import image2 from "@/public/images/imageGallery/2.jpeg";
import image3 from "@/public/images/imageGallery/3.jpg";
import image4 from "@/public/images/imageGallery/4.jpg";
import image5 from "@/public/images/imageGallery/6.jpeg";
export function Products() {
  const data = [
    {
      imgelink:image1.src
    },
    {
      imgelink:image2.src
    },
    {
      imgelink:image3.src
    },
    {
      imgelink: image4.src,
    },
    {
      imgelink: image5.src,
    },
  ];

  const [active, setActive] = useState(image1.src);

  return (
    <div className="grid gap-4 container my-[110px] px-20 w-[60%]">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg  object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
