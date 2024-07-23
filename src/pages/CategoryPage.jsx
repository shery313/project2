import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const CategoryPage = () => {
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const url = "https://sera-backend.up.railway.app/api/v1/post/category/list/";
        const response = await fetch(url);
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchCategory();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className="flex flex-row font-bold mt-2 text-white border justify-center gap-0 md:gap-4 border-black md:text-2xl bg-gray-500 p-2 ">
        <Link to={'/blogs'} className="mr-2 text-lg  md:inset-0   cursor-pointer active:text-red-500">All</Link>
        {category.map((c, index) => (
          <Link to={`/category/${c.slug}`}
            className="mr-2 text-lg  md:inset-0  hover:text-red-500 cursor-pointer "
            key={index}
          >
            {c.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
