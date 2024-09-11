// "use client";
// import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getAllBlogs } from "@/db";

async function EnglishPage() {
  // const [blogs, setBlogs] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedBlogs: any = await getAllBlogs();
  //     setBlogs(fetchedBlogs);
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);
  const blogs: any = await getAllBlogs();
  return (
    <>
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[850px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Our Blogs
            </span>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              Discover the Power of Organic Medicinal and Aromatic Plants
            </h2>
            <p className="text-base text-secondary">
              Explore the world of organic medicinal and aromatic plants. Learn
              about their benefits, cultivation, and uses in various
              applications.
            </p>
          </div>
        </div>
      </div>

      <div className="-mx-4 flex flex-wrap">
        {blogs.map((blog: any) => (
          <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={blog.id}>
            <div className="mb-10 w-full">
              <div className="mb-8 overflow-hidden rounded">
                <Image
                  width={350}
                  height={350}
                  src={`/images/medicinal-plants/${blog["image-path"]}`}
                  alt={blog.title}
                  className="w-full"
                />
              </div>
              <div>
                <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                  {blog.date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <h3>
                  <Link
                    href={`/blog/${blog.title
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-")
                      .replace(/--+/g, "-")
                      .replace(/^-+/, "")
                      .replace(/-+$/, "")}`}
                    className="mb-4 inline-block text-xl font-semibold  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-base text-secondary ">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EnglishPage;
