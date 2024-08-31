"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// --------------------
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductData = [
  {
    id: 1,
    name: "Chamomile",
    text: "Metrication chamomile",
    img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b32c305d32e3a5d64635_Chamomile-min.jpg",
  },
  {
    id: 2,
    name: "Peppermint",
    text: "Mentha piperita",
    img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b734afef3a78e2f0e411_Peppermint-min.jpg",
  },
  {
    id: 3,
    name: "Rosemary",
    text: "Rosmarinus officinalis",
    img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b793cbb1c204aa171751_Rosemary-min.jpg",
  },
  {
    id: 4,
    name: "Parsley Flat",
    text: "Petroselinum cirspum",
    img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b49fca4f789985739b11_Parsley%20Flat-min.jpg",
  },
  {
    id: 5,
    name: "Spearmint",
    text: "Mentha spicata",
    img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b850b1ed28e579797d9f_Spearmint-min.jpg",
  },
  {
    id: 6,
    name: "Thyme",
    text: "Thymus Vulgaris",
    img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b890e4e533c8adab3731_Thyme-min.jpg",
  },
];

// --------------------


var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function AutoSlides() {
  return (
    <div data-aos="zoom-in">
          <Slider {...settings}>
            {ProductData.map((data) => (
              <div className="my-6" key={data.id}>
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-white relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-md w-40 h-40"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <h1 className="text-xl font-bold font-cursive2">
                        {data.name}
                      </h1>
                      <p className="text-xs text-secondary">{data.text}</p>
                    </div>
                  </div>
                  <p className="text-primary2 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
  );
}
