import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { userdata } from "../plugins/userdata";
import apiInstance from "../utils/axios";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookmark,
  FaCalendar,
  FaComment,
  FaEye,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Toast } from "../plugins/Toast";
import Cookies from 'js-cookie'

function BlogCards() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const[loading,setLoading]=useState(false)
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPage = itemsPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const postItems = blogs.slice(indexOfFirstPage, indexOfLastPage);
  const pageSize = 12;
  const totalPages = Math.ceil(blogs.length / pageSize);
  const [category, setCategory] = useState(null);
  const [likedPosts, setLikedPosts] = useState(() => {
    const savedLikes = Cookies.get("likedPosts");
    return savedLikes ? JSON.parse(savedLikes) : {};
  });
  const [bookmarked, setbookMarked] = useState(() => {
    const ismarked = Cookies.get("bookmarked");
    return ismarked ? JSON.parse(ismarked) : {};
  });
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const fetchCategory = async () => {
    // let url = "https://sera-backend.up.railway.app/api/v1/post/category/list/";
    const response = await apiInstance.get('/post/category/list/')
    setCategory(response.data);
  };

  async function fetchBlogs() {
    try {
      setLoading(true)
      // const url = "https://sera-backend.up.railway.app/api/v1/post/lists/";
      const response = await apiInstance.get('/post/lists');
      const data = await response.data
      setLoading(false)
      const sorted = data?.sort((a, b) => b.view - a.view);
      setBlogs(sorted);
    } catch (error) {
      setLoading(false)
      setError(error);
    }
  }

  const handleLikePost = async (postId) => {
    const jsonData = {
      user_id: userdata()?.user_id,
      post_id: postId,
    };
    const response = await apiInstance.post("post/like-post/", jsonData);
    const message = response.data.message;
    setLikedPosts((prevLikedPosts) => {
      const updatedLikes = {
        ...prevLikedPosts,
        [postId]: message === "Post Liked",
      };
      console.log(updatedLikes);
      Cookies.set("likedPosts", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
    fetchBlogs();
    Toast("success", `${message}`);
  };

  const handleBookmarkPost = async (postId, slug) => {
    const jsonData = {
      user_id: userdata()?.user_id,
      post_id: postId,
    };
    const response = await apiInstance.post("post/bookmark-post/", jsonData);
    const message = response.data.message;
    setbookMarked((previousBookmarked) => {
      const updateBookmarked = {
        ...previousBookmarked,
        [slug]: message === "Post Bookmarked",
      };
      console.log(updateBookmarked);
      Cookies.set("bookmarked", JSON.stringify(updateBookmarked));
      return updateBookmarked;
    });
    fetchBlogs();

    Toast("success", response.data.message, "");
  };

  useEffect(() => {
    fetchBlogs();
    fetchCategory();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      
      
      {loading? <div className='flex justify-center items-center content-center'><img className="rounded-s-3xl h-20 w-20" src="loadinggif.gif" alt="Loading gif" /></div>:postItems.map((blog) => (
        <>
        <main className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <article key={blog.id} className="p-5 shadow-lg rounded cursor-pointer relative">
            <header>
              <Link to={`/blog/${blog.slug}`}>
                <img
                  src={blog.image ? blog.image : "/king.jpg"}
                  alt=""
                  className="h-[300px] w-full object-fill"
                />
              </Link>
              <Link
                to={`/blog/${blog.slug}`}
                className="mt-4 mb-2 hover:text-blue-600 cursor-pointer font-bold"
              >
                {blog.title}
              </Link>
              <p className="mb-2 text-gray-500">
                <FaUser className="inline-flex mr-2 items-center" />
                {blog.user.full_name}
              </p>
              <p className="text-sm text-gray-500">
                Published at: <FaCalendar className="inline" />{" "}
                {moment(blog.date).format("DD MMM YYYY")}
              </p>
            </header>
            <footer className="flex flex-col gap-2 m-2">
              <div className="flex gap-2">
                <button
                  onClick={() => handleLikePost(blog.id)}
                  className="inline-block text-sm"
                >
                  <FaHeart
                    className={`text-lg inline mr-1 ${
                      likedPosts[blog.id] ? "text-red-500" : "text-black"
                    } `}
                  />{" "}
                  {blog.likes.length > 0 ? blog.likes.length : null}
                </button>
                <p className="text-sm">
                  <FaComment className="text-lg inline" /> 5
                </p>
                <button onClick={() => handleBookmarkPost(blog.id, blog.slug)}>
                  <FaBookmark
                    className={`my-1 ${
                      bookmarked[blog.slug] ? "text-green-500" : ""
                    }`}
                  />
                </button>
              </div>
              <p className="text-sm">
                <FaEye className="text-lg inline" />{" "}
                {blog.view > 0 ? blog.view : null} Views{" "}
              </p>
            </footer>
          </article>
          </main>
        </>))}
      
      <nav className="flex mt-5 justify-center items-center gap-8 text-xl mb-5">
        <ul className="pagination">
          <li
            className={`page-item inline-block ${
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
        <ul className="pagination flex">
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
