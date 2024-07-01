import React from 'react'
import BlogPage from '../components/BlogPage'


function Blogs() {
  return (
    <div>
        <div className="py-36 bg-black text-white">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4 py-5 px-4 text-center">Blogs</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <BlogPage/>
        </div>
    </div>
  )
}

export default Blogs
