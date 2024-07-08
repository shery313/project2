import React from 'react'

function Login() {
  return (
    <div className='mt-10 pt-5'>
      <div className='flex md:flex-row flex-col gap-2'>
        <div className="login bg-orange-500 shadow-lg p-20">
            <h1 className='text-5xl mx-5 font-bold'>Login now</h1>
            <div className='flex flex-col m-5 gap-2'>
              <label htmlFor="email">Email</label>  
              <input placeholder='Enter you email id' className='my-1  blockS h-9 border border-gray-200 rounded-lg p-3 hover:outline outline-blue-500 outline-1' type="email" name="" id="" />
              <label htmlFor="password">Password</label>
              <input placeholder='Enter your password' className='my-1 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1'  type="password" name="" id="" />
              <button className='rounded-lg hover:bg-black hover:text-orange-500 bg-orange-200 h-fit my-1 p-3 text-black font-bold'>Login</button>
            </div>
        </div>
        <div className="img p-20 ">
            <img className='rounded-s-3xl ' src="/login.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
