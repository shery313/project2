import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
const CategoryPage = () => {
    const [category,setCategory]=useState([])
    const [error,setError]=useState(null);


  useEffect(() => {
    async function fetchCategory() {
      try {
        const url = "http://127.0.0.1:8000/api/v1/post/category/list/";
        const response = await fetch(url);
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchCategory();
  }, []);

  console.log(category);
  console.log(Array.isArray(category));

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
        <div className="flex flex-row font-bold mt-2 text-white border justify-center gap-0 md:gap-4 border-black md:text-2xl bg-gray-500 p-2 ">
          {category.map((c,index)=><button className="mr-2 text-lg  md:inset-0  hover:text-red-500 cursor-pointer " key={index}>
          {c.title}</button>)}
        </div>
      
    </div>
  )
}

export default CategoryPage
