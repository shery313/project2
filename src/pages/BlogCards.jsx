import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookmark,
  FaCalendar,
  FaComment,
  FaEye,
  FaHeart,
  FaStreetView,
  FaUser,
} from "react-icons/fa";

function BlogCards() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPage = itemsPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const postItems = blogs.slice(indexOfFirstPage, indexOfLastPage);
  const pageSize = 12;
  const totalPages = Math.ceil(blogs.length / pageSize);
  const [category, setCategory] = useState(null);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const fetchCategory = async () => {
    let url = "http://127.0.0.1:8000/api/v1/post/category/list/";
    const response = await fetch(url);
    setCategory(response.data);
  };

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const url = "http://127.0.0.1:8000/api/v1/post/lists/";
        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchBlogs();
    fetchCategory();
  }, []);

  console.log(blogs);
  console.log(Array.isArray(blogs));

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {postItems.map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs`}
            className="p-5 shadow-lg rounded cursor-pointer"
          >
            <div>
              <img
                src={blog.image === null ? "/king.jpg" : blog.image}
                alt=""
                className="h-[300px] w-full object-fill "
              />
            </div>
            <h1 className="mt-4 mb-2 hover:text-blue-600 cursor-pointer font-bold">
              {blog.title}
            </h1>
            {/* <p>{blog.description}</p> */}
            <p className="mb-2 text-gray-500">
              <FaUser className="inline-flex mr-2 items-center" />
              {blog.user.full_name}
            </p>
            {/* <p>{blog.tags}</p> */}
            <p className="text-sm text-gray-500">
              Published at: <FaCalendar className="inline" />{" "}
              {moment(blog.date).format("DD MMM YYYY")}
            </p>
            <div className="flex gap-2 m-2">
              <p>
                <FaBookmark className="text-green-600 my-1" />
              </p>{" "}
              <p className="inline-block text-sm">
                <FaHeart
                  className={`text-lg inline  ${
                    blog.likes.length > 0 ? "text-red-500" : ""
                  }`}
                />{" "}
                {blog.likes.length > 0 ? blog.likes.length : null}
              </p>
              <p className="text-sm">
                <FaComment className="text-lg inline" /> 5
              </p>
            </div>
            <p className="text-sm m-2">
              <FaEye className="text-lg inline" />{" "}
              {blog.view > 0 ? blog.view : null} Views{" "}
            </p>
          </Link>
        ))}
      </div>
      <nav className="flex mt-5 justify-center items-center gap-8 text-xl mb-5">
        <ul className="pagination ">
          <li
            className={` page-item inline-block ${
              currentPage === 1 ? "hidden" : ""
            }`}
          >
            <button
              className="page-link me-1 inline-block"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <i className="inline-block mx-1">
                <FaArrowLeft />
              </i>
              Previous
            </button>
          </li>
        </ul>
        <ul className="pagination flex gap-2">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item border p-2 ${
                currentPage === number ? "pressed" : ""
              }`}
            >
              <button
                className="page-link w-fit"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>

        <ul className="pagination flex ">
          <li
            className={`page-item ${
              currentPage === totalPages ? "hidden" : ""
            }`}
          >
            <button
              className="page-link ms-1"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
              <i className="inline-block mx-1">
                <FaArrowRight />
              </i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BlogCards;
