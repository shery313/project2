import React, { useState } from 'react'
import { register } from '../utils/auth'
import Navbar from '../components/Navbar'
import { Toast } from '../plugins/Toast'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate=useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const handleSubmit =async () => {
    console.log(fullName, email, password, password2)
    const{data,error}=await register(fullName, email, password, password2)
    if (data){
      navigate('/login')      
    }else{
      Toast("error",error,'Try again later !')
    }
  }
  return (
    <><Navbar />
      <div className='mt-10 pt-5'>
        <div className='flex md:flex-row flex-col gap-2'>
          <div className="login p-20 bg-orange-500 shadow-lg" >
            <h1 className='text-5xl mx-5 font-bold'>Sign up</h1>
            <div className='flex flex-col m-5'>
              <label htmlFor="email">Full Name</label>
              <input onChange={(e) => setFullName(e.target.value)} placeholder='Name' className='my-2  blockS h-9 border border-gray-200 rounded-lg p-3 hover:outline outline-blue-500 outline-1' type="text" name="" id="" />
              <label htmlFor="email">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} placeholder='Enter you email id' className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' type="email" name="" id="" />
              <label htmlFor="password">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} placeholder='Create a Password' className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' type="password" name="" id="" />
              <label htmlFor="password">Confirm Password</label>
              <input onChange={(e) => setPassword2(e.target.value)} placeholder='Re-type your Password' className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' type="password" name="" id="" />
              <button onClick={handleSubmit} className='rounded-lg hover:bg-black hover:text-orange-500 bg-orange-200 h-fit my-1 p-3 text-black font-bold'>Sign up</button>
            </div>
          </div>
          <div  className="img p-32 pt-10 pb-10 mx-20 hidden md:block ">
            <img className=' h-[500px] w-[500px]  ' src="/signup-now.png" alt="" />
          </div>
        </div>
      </div></>
  )
}

export default SignUp
