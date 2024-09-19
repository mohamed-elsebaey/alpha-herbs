import React from "react";
// import type { Metadata } from "next";

import Blogs from "@/components/blogs/Blogs";

export const metadata = {
  title: "Herb of the Day: Discover its Amazing Health Benefits",
  description: "Explore the world of medicinal and aromatic plants...",
  alternates: {
    canonical: "https://www.alpha-herbs.com/blog",
  },
};

function BlogPage() {
  return <Blogs />;
}

export default BlogPage;
