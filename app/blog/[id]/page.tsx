import React from "react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h1 className="font-bold text-6xl text-primary my-5">Blog Section</h1>
          <h2 className="font-semibold text-3xl text-primary2 my-5">Soon ... </h2>
        </div>
      </div>
    </section>
  );
}

export default BlogPostPage;
