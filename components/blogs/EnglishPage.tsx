import Link from "next/link";
import { Heart } from "lucide-react";

import { getAllBlogs } from "@/db";
import AuthorSection from "./AuthorSection";

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
              <img
                src={`/images/medicinal-plants/${blog["image-path"]}`}
                alt="card-image"
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
              <div className="flex ">
                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                  <Heart size={18} />
                  <span className="ml-1">0</span>
                </span>
                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                  <svg
                    className="h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                  <span className="ml-1">0 Comments</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EnglishPage;
