import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';
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
import CategoryPage from '../pages/CategoryPage';
  

function Category() {
    const[posts,setPosts]=useState([]);
    const params=useParams();
    console.log(params)

    const fetchData=async ()=>{
        const response=await fetch(`http://127.0.0.1:8000/api/v1/post/category/posts/${params.slug}/`);
        const data=await response.json();
        console.log(data)
        setPosts(data)

    }

    useEffect(()=>{
        fetchData();
    })
  return (
    <div>
        <div className='mt-20'>
            <CategoryPage/>

        </div>
        
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 m-5 mt-10">
        {posts.length>0? posts.map((blog) => (
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
        )):<h1 className='text-3xl font-bold text-center'>No Posts for this category</h1>}
      </div>
      
    </div>
  )
}

export default Category
