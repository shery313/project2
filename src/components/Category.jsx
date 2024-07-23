import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import {
  FaBookmark,
  FaCalendar,
  FaComment,
  FaEye,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import CategoryPage from '../pages/CategoryPage';
import Search from './Search';
import { userdata } from "../plugins/userdata";
import apiInstance from "../utils/axios";
import { Toast } from "../plugins/Toast";
import Cookies from 'js-cookie'

function Category() {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState(() => {
    const savedLikes = Cookies.get('likedPosts');
    return savedLikes ? JSON.parse(savedLikes) : {};
  });
  const [bookmarked, setBookmarked] = useState(() => {
    const isMarked = Cookies.get('bookmarked');
    return isMarked ? JSON.parse(isMarked) : {};
  });
  const params = useParams();

  const fetchData = async () => {
    const response = await fetch(`https://sera-backend.up.railway.app/api/v1/post/category/posts/${params.slug}/`);
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, [params.slug]);

  const handleLikePost = async (postId) => {
    const jsonData = {
      user_id: userdata()?.user_id,
      post_id: postId,
    };
    const response = await apiInstance.post('post/like-post/', jsonData);
    const message = response.data.message;
    fetchData();
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
    fetchData();
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
    <div>
      <div className="py-36 bg-black text-white">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4 py-5 px-4 text-center">{params.slug}</h1>
      </div>
      <div className=''>
        <Search />
        <CategoryPage />
      </div>
      <main className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 m-5 mt-10">
        {posts.length > 0 ? posts.map((blog) => (
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
        )) : <h1 className='text-3xl font-bold text-center'>No Posts for this category</h1>}
      </main>
    </div>
  );
}

export default Category;
