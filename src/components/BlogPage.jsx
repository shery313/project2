import React from "react";
import BlogCards from "../pages/BlogCards";
import { useState, useEffect } from "react";
import CategoryPage from "../pages/CategoryPage";

function BlogPage() {
  return (
    <div>
      {/* page category */}
      <div>
        <CategoryPage />
      </div>
      {/* blogs  */}
              <div><BlogCards/></div>
    </div>
  );
}

export default BlogPage;
