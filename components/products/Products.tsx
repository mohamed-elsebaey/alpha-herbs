"use client";
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
