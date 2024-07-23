import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaUser, FaCalendar, FaBookmark, FaHeart, FaComment, FaEye } from 'react-icons/fa';
import moment from 'moment';
import Search from '../components/Search';
import Navbar from './Navbar';
import { userdata } from "../plugins/userdata";
import apiInstance from "../utils/axios";
import { Toast } from "../plugins/Toast";
import Cookies from 'js-cookie'

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [likedPosts, setLikedPosts] = useState(() => {
    const savedLikes = Cookies.get('likedPosts');
    return savedLikes ? JSON.parse(savedLikes) : {};
  });
  const [bookmarked, setBookmarked] = useState(() => {
    const isMarked = Cookies.get('bookmarked');
    return isMarked ? JSON.parse(isMarked) : {};
  });

  const fetchData = async (endpoint, setDataFunction) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setDataFunction(data);
  };

  useEffect(() => {
    const url = `https://sera-backend.up.railway.app/api/v1/search/?query=${query}`;
    fetchData(url, setProducts);
  }, [query,bookmarked,likedPosts]);

  const handleLikePost = async (postId) => {
    const jsonData = {
      user_id: userdata()?.user_id,
      post_id: postId,
    };
    const response = await apiInstance.post('post/like-post/', jsonData);
    const message = response.data.message;
    setLikedPosts((prevLikedPosts) => {
      const updatedLikes = {
        ...prevLikedPosts,
        [postId]: message === 'Post Liked',
      };
      Cookies.set('likedPosts', JSON.stringify(updatedLikes));
      return updatedLikes;
    });
    Toast("success", `${message}`);
  };

  const handleBookmarkPost = async (postId, slug) => {
    const jsonData = {
      user_id: userdata()?.user_id,
      post_id: postId,
    };
    const response = await apiInstance.post('post/bookmark-post/', jsonData);
    const message = response.data.message;
    setBookmarked((previousBookmarked) => {
      const updateBookmarked = {
        ...previousBookmarked,
        [slug]: message === 'Post Bookmarked',
      };
      Cookies.set('bookmarked', JSON.stringify(updateBookmarked));
      return updateBookmarked;
    });
    Toast("success", response.data.message);
  };

  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <Search />
        <h1 className='text-center font-bold text-3xl mt-2 md:mr-24'>Search Results for: "{query}"</h1>
        <main className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 m-5">
          {products.length > 0 ? products.map((blog) => (
            <article key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
              <header>
                <Link to={`/blog/${blog.slug}`}>
                  <img
                    src={blog.image === null ? "/king.jpg" : blog.image}
                    alt=""
                    className="h-[300px] w-full object-fill"
                  />
                </Link>
                <h2 className="mt-4 mb-2 hover:text-blue-600 cursor-pointer font-bold">
                  {blog.title}
                </h2>
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
          )) : <div className='text-center bg-gray-500 w-full p-2 md:ml-96 '><h1 className='font-bold text-3xl'>No Blog Found</h1></div>}
        </main>
      </div>
    </>
  );
}

export default SearchResults;
