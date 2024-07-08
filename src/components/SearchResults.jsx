import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaUser ,FaCalendar,FaBookmark,FaHeart,FaComment,FaEye } from 'react-icons/fa';
import moment from 'moment';
import Search from "../components/Search";


function SearchResults() {
    const[products,setProdcuts]=useState([]);
    const [searchParams]=useSearchParams();
    const query=searchParams.get('query')
    const fetchData= async (endpoint,setDataFunction)=>{
        const response=await fetch(endpoint);
        const data= await response.json()
        console.log(data)
        setDataFunction(data)
        
    }
    useEffect(()=>{
        const url=`http://127.0.0.1:8000/api/v1/search/?query=${query}`
        fetchData(url,setProdcuts)
    },[query])
  return (
    <div className='mt-16'>
      <Search />
        <h1 className='text-center font-bold text-3xl mt-2 md:mr-24'>Search Results of : "{query}"</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 m-5">
        
        {products.length>0? products.map((blog) => (
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
        )):<div className='text-center bg-gray-500 w-full p-2 md:ml-96 '><h1 className='font-bold   text-3xl '> No Blog Found </h1></div>}
      </div>
      
    </div>
  )
}

export default SearchResults
