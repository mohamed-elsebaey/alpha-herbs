"use client";

import basil1 from '@/public/images/products-images/BASIL/1.jpg'
import basil2 from '@/public/images/products-images/BASIL/2.jpg'
import basil3 from '@/public/images/products-images/BASIL/3.jpg'
import basil4 from '@/public/images/products-images/BASIL/4.jpg'
import basil5 from '@/public/images/products-images/BASIL/5.jpeg'
import basil6 from '@/public/images/products-images/BASIL/6.jpg'
import basil7 from '@/public/images/products-images/BASIL/7.jpg'

import mint1 from '@/public/images/products-images/Mint/1.jpg'
import mint2 from '@/public/images/products-images/Mint/2.jpg'
import mint3 from '@/public/images/products-images/Mint/3.jpg'
import mint4 from '@/public/images/products-images/Mint/4.jpg'
import mint5 from '@/public/images/products-images/Mint/5.jpeg'
import mint6 from '@/public/images/products-images/Mint/6.jpg'
import mint7 from '@/public/images/products-images/Mint/7.jpg'
import mint8 from '@/public/images/products-images/Mint/8.jpeg'
import mint9 from '@/public/images/products-images/Mint/9.jpeg'
import mint10 from '@/public/images/products-images/Mint/10.jpeg'
import mint11 from '@/public/images/products-images/Mint/11.jpeg'
import mint12 from '@/public/images/products-images/Mint/12.jpeg'
import mint13 from '@/public/images/products-images/Mint/13.jpeg'
import mint14 from '@/public/images/products-images/Mint/14.jpg'

import dill1 from '@/public/images/products-images/DILL/1.jpg'
import dill2 from '@/public/images/products-images/DILL/2.jpg'
import dill3 from '@/public/images/products-images/DILL/3.jpg'
import dill4 from '@/public/images/products-images/DILL/4.jpg'
import dill5 from '@/public/images/products-images/DILL/5.jpg'

import coriander1 from '@/public/images/products-images/CORIANDER/1.jpg'
import coriander2 from '@/public/images/products-images/CORIANDER/2.jpg'

import marjoram1 from '@/public/images/products-images/MARJORAM/1.jpg'

import parsley1 from '@/public/images/products-images/PARSLEY/1.jpg'

import chamomile1 from '@/public/images/products-images/CHAMOMILE/1.jpeg'
import chamomile2 from '@/public/images/products-images/CHAMOMILE/2.jpeg'

import cumin1 from '@/public/images/products-images/CUMIN/1.png'






function Products() {
  return (
    <div className="container py-[110px]">
      <div className="mx-auto max-w-[520px] text-center mb-3">
        <span className="mb-2 block text-lg font-semibold text-primary">
          Products
        </span>
        <h2 className="mb-4 text-3xl font-bold  sm:text-[40px]/[48px] text-nowrap">
          Our vital products
        </h2>
      </div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-primary hover:text-white border border-primary/60 bg-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/30 rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "
        >
          All categories
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "
        >
          Dried Leaves
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3  "
        >
          Flowers
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3  "
        >
          Seeds
        </button>
      </div>
      <div className="mx-auto w-[80%] grid grid-cols-2 md:grid-cols-3 gap-4">
        <ImageCard link={basil1.src} name=""/>
        <ImageCard link={basil2.src} name=""/>
        <ImageCard link={basil3.src} name=""/>
        <ImageCard link={basil4.src} name=""/>
        <ImageCard link={basil5.src} name=""/>
        <ImageCard link={basil6.src} name=""/>
        <ImageCard link={basil7.src} name=""/>

        <ImageCard link={mint1.src} name=""/>
        <ImageCard link={mint2.src} name=""/>
        <ImageCard link={mint3.src} name=""/>
        <ImageCard link={mint3.src} name=""/>
        <ImageCard link={mint4.src} name=""/>
        <ImageCard link={mint5.src} name=""/>
        <ImageCard link={mint6.src} name=""/>
        <ImageCard link={mint7.src} name=""/>
        <ImageCard link={mint8.src} name=""/>
        <ImageCard link={mint9.src} name=""/>
        <ImageCard link={mint10.src} name=""/>
        <ImageCard link={mint11.src} name=""/>
        <ImageCard link={mint12.src} name=""/>
        <ImageCard link={mint13.src} name=""/>
        <ImageCard link={mint14.src} name=""/>

        <ImageCard link={dill1.src} name=""/>
        <ImageCard link={dill2.src} name=""/>
        <ImageCard link={dill3.src} name=""/>
        <ImageCard link={dill4.src} name=""/>
        <ImageCard link={dill5.src} name=""/>

        <ImageCard link={coriander1.src} name=""/>
        <ImageCard link={coriander2.src} name=""/>

        <ImageCard link={marjoram1.src} name=""/>

        <ImageCard link={parsley1.src} name=""/>

        <ImageCard link={chamomile1.src} name=""/>
        <ImageCard link={chamomile2.src} name=""/>
        
        <ImageCard link={cumin1.src} name=""/>

      </div>
      {/* <div className="mx-auto w-[80%] grid grid-cols-2 md:grid-cols-3 gap-4">
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
          name=""
        />
        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
          name=""
        />

        <ImageCard
          link="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
          name="f"
        />
      </div> */}
    </div>
  );
}

export default Products;

const ImageCard = ({ link, name }: { link: any; name: any }) => {
  return (
    <div>
      <img className="h-auto max-w-full rounded-lg" src={link} alt="" />
    </div>
  );
};
