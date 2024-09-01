import Mint from "@/components/blogs/article/Mint";
import React from "react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// export const metadata = {
//   title: "soon ...",
//   description: "Explore the world of medicinal and aromatic plants...",
// };

export async function generateMetadata({ params }: BlogPostPageProps) {
  return {
    title: `alpha herbs | ${params.slug}`,
    description:
      params.slug === "Mint"
        ? "Explore the world of mint, its benefits, and how to use it."
        : "Explore the world of medicinal and aromatic plants...",
  };
}

function BlogPostPage({ params }: BlogPostPageProps) {
  let data = (
    <>
      <h1 className="font-bold text-6xl text-primary my-5">Blog Section</h1>
      <h2 className="font-semibold text-3xl text-primary2 my-5">Soon ...</h2>
    </>
  );

  if (params.slug == "Mint") {
    data = <Mint />;
  }

  return (
    <>
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto">
          <div
            className={`flex flex-col justify-center text-primary ${
              params.slug !== "Mint" ? "text-center" : ""
            }`}
          >
            {data}
          </div>
        </div>
      </section>
      <hr className="text-primary" />
    </>
  );
}

export default BlogPostPage;
