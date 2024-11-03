"use client";
import React, { useState } from "react";

const Products2 = () => {
  const [driedLeaves, setDriedLeaves] = useState(true);
  const [flowers, setFlowers] = useState(false);
  const [seeds, setSeeds] = useState(false);

  const onChangeHandler = (type: number) => {
    setDriedLeaves(type === 1 ? true : false);
    setFlowers(type === 2 ? true : false);
    setSeeds(type === 3 ? true : false);
  };
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] ">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto">
        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Products
          </span>
          <h2 className="mb-4 text-3xl font-bold  sm:text-[40px]/[48px] text-nowrap">
            Our vital products
          </h2>
        </div>
        <ul className="w-full flex flex-wrap flex-col gap-5 md:flex-row md:gap-10 justify-center items-center text-center">
          <li
            onClick={() => onChangeHandler(1)}
            className={`${
              driedLeaves ? "bg-primary2 rounded-lg" : "border-transparent"
            } py-2 min-w-48 max-w-48 cursor-pointer`}
          >
            Dried Leaves
          </li>
          <li
            onClick={() => onChangeHandler(2)}
            className={`${
              flowers ? "bg-primary2 rounded-lg" : "border-transparent"
            } py-2 min-w-48 max-w-48 cursor-pointer`}
          >
            Flowers
          </li>
          <li
            onClick={() => onChangeHandler(3)}
            className={`${
              seeds ? "bg-primary2 rounded-lg" : "border-transparent"
            } py-2 min-w-48 max-w-48 cursor-pointer`}
          >
            Seeds
          </li>
        </ul>

        {driedLeaves && <h1>1</h1>}
        {flowers && <h1>2</h1>}
        {seeds && <h1>3</h1>}
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Products2;
