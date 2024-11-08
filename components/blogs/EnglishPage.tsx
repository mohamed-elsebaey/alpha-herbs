import Link from "next/link";

import { getAllBlogs } from "@/db";
import AuthorSection from "./card/AuthorSection";
import LikesSection from "./card/LikesSection";
import Image from "next/image";

async function EnglishPage() {
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

      <div className=" flex flex-wrap justify-center ">
        {blogs.map((blog: any) => (
          <div
            className="mx-4 relative flex flex-col my-6 bg-white shadow-md border border-gray-200 hover:shadow-primary rounded-lg max-w-md" // max-w-sm
            key={blog.id}
          >
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <Image
                width={500}
                height={500}
                src={`/images/medicinal-plants/${blog["image-path"]}`}
                alt="card-image"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                POPULAR
              </div>
              <Link
                href={`/blog/${blog.title
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, "")
                  .replace(/\s+/g, "-")
                  .replace(/--+/g, "-")
                  .replace(/^-+/, "")
                  .replace(/-+$/, "")}`}
              >
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  {blog.title}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  {blog.description}
                </p>
              </Link>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <AuthorSection id={blog.author_id} />
                <div className="flex flex-col ml-3 text-sm">
                  <span className="text-slate-800 font-semibold">
                    {blog.author}
                  </span>
                  <span className="text-slate-600">
                    {blog.date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <LikesSection id={blog.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EnglishPage;
