import React from 'react'

function SignUp() {
  return (
    <div className='mt-10 pt-5'>
      <div className='flex md:flex-row flex-col gap-2'>
        <div className="login p-20 bg-orange-500 shadow-lg" >
            <h1 className='text-5xl mx-5 font-bold'>Sign up</h1>
            <div className='flex flex-col m-5'>
              <label htmlFor="email">Full Name</label>  
              <input placeholder='Name' className='my-2  blockS h-9 border border-gray-200 rounded-lg p-3 hover:outline outline-blue-500 outline-1' type="text" name="" id="" />
              <label htmlFor="email">Email</label>
              <input placeholder='Enter you email id' className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1'  type="email" name="" id="" />
              <label htmlFor="password">Password</label>
              <input placeholder='Create a Password' className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1'  type="password" name="" id="" />
              <label htmlFor="password">Confirm Password</label>
              <input placeholder='Re-type your Password' className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1'  type="password" name="" id="" />
              <button className='rounded-lg hover:bg-black hover:text-orange-500 bg-orange-200 h-fit my-1 p-3 text-black font-bold'>Sign up</button>
            </div>
        </div>
        <div className="img p-32 mx-20 ">
            <img className=' rounded-se-3xl ' src="/Signup.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignUp
