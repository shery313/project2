import React from "react";
import { Helmet } from "react-helmet";
import BlogCards from "../pages/BlogCards";
import CategoryPage from "../pages/CategoryPage";
import Search from "./Search";

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog - SERA Innovations</title>
        <meta name="description" content="Read the latest articles and updates from SERA Innovations. Stay informed about our services, technology trends, and more." />
        <meta name="keywords" content="Serainnovations, Sera Innovations, blog, articles, technology, updates" />
        <meta property="og:title" content="Blog - SERA Innovations" />
        <meta property="og:description" content="Read the latest articles and updates from SERA Innovations." />
        <meta property="og:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
        <meta property="og:url" content="https://serainnovations.pro/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - SERA Innovations" />
        <meta name="twitter:description" content="Read the latest articles and updates from SERA Innovations." />
        <meta name="twitter:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
      </Helmet>
      <Search />
      <div>
        <CategoryPage />
      </div>
      <div>
        <BlogCards />
      </div>
    </>
  );
}

export default BlogPage;
