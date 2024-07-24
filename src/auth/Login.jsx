import React, { useState } from 'react'
import { login } from '../utils/auth';
import { json, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Toast } from '../plugins/Toast';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state

    const { error } = await login(email, password);
    if (error) {
      alert(JSON.stringify(error));
    } else {
      navigate("/");
    }

  };

  return (
    <><Navbar />
      <div className='mt-10 pt-5'>
        <div className='flex md:flex-row flex-col-reverse gap-2'>
          <div className="login bg-orange-500 shadow-lg p-20">
            <h1 className=' md:text-5xl text-3xl mx-5 font-bold'>Login now</h1>
            <div className='flex flex-col m-5 gap-2'>
              <label htmlFor="email">Email</label>
              <input placeholder='Enter you email id' onChange={(e) => (setEmail(e.target.value))} className='my-1  blockS h-9 border border-gray-200 rounded-lg p-3 hover:outline outline-blue-500 outline-1' type="email" name="" id="" />
              <label htmlFor="password">Password</label>
              <input placeholder='Enter your password' onChange={(e) => (setPassword(e.target.value))} className='my-1 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' type="password" name="" id="" />
              <button onClick={handleSubmit} type='submit' className='rounded-lg hover:bg-black hover:text-orange-500 bg-orange-200 h-fit my-1 p-3 text-black font-bold'>Login</button>
              <div class="flex items-center">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-4 text-gray-500">OR</span>
                <div class="flex-grow border-t border-gray-300"></div>
              </div>
              <button  type='submit' className='rounded-lg hover:bg-black hover:text-orange-500  bg-red-500 h-fit my-1 p-3 text-white font-bold '>Sign in with Google</button>
            </div>
          </div>
          <div className="img ml-40 md:block hidden">
            <img className='rounded-s-3xl h-[700px] w-[700px]' src="/login-now.png" alt="" />
          </div>
        </div>
      </div></>
  )
}

export default Login
