import React from "react";
import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Banner />
      <Search />
      <BlogPage />
    </div>
  );
}

export default Home;
