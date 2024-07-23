import React from "react";
import BlogCards from "../pages/BlogCards";
import { useState, useEffect } from "react";
import CategoryPage from "../pages/CategoryPage";
import Search from "./Search";

function BlogPage() {
  return (
    <div>
      <Search/>
      <div>
        <CategoryPage />
      </div>
      {/* blogs  */}
              <div><BlogCards/></div>
    </div>
  );
}

export default BlogPage;
