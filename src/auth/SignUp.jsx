import React, { useState } from 'react';
import { register } from '../utils/auth';
import Navbar from '../components/Navbar';
import { Toast } from '../plugins/Toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function SignUp() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const[isLoading,setIsLoading]=useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    if (password !== password2) {
      Toast("error", "Passwords do not match", "Please ensure that the passwords match.");
      setIsLoading(false)
      return;
    }
   

    console.log(fullName, email, password, password2);
    
    const { data, error } = await register(fullName, email, password, password2);
    
    if (data) {
      navigate('/login');
      setIsLoading(false)
    } else {
      setIsLoading(false)
      Toast("error", error, 'Try again later!');
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - SERA Innovations</title>
        <meta name="description" content="Create an account with SERA Innovations to get started on managing your projects efficiently. Sign up now to access all our digital solutions." />
        <meta name="keywords" content="Serainnovations, Sera Innovations, sign up, register, account creation, project management, digital solutions" />
        <meta property="og:title" content="Sign Up - SERA Innovations" />
        <meta property="og:description" content="Create an account with SERA Innovations to get started on managing your projects efficiently." />
        <meta property="og:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
        <meta property="og:url" content="https://serainnovations.pro/signup" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign Up - SERA Innovations" />
        <meta name="twitter:description" content="Create an account with SERA Innovations to get started on managing your projects efficiently." />
        <meta name="twitter:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="mt-10 pt-5">
        <section className='flex md:flex-row flex-col gap-2'>
          <div className="login p-20 bg-orange-500 shadow-lg">
            <header>
              <h1 className='md:text-5xl text-3xl mx-5 font-bold'>Sign up</h1>
            </header>
            <form className='flex flex-col m-5'>
              <label htmlFor="fullName">Full Name</label>
              <input 
                onChange={(e) => setFullName(e.target.value)} 
                placeholder='Name' 
                className='my-2 blockS h-9 border border-gray-200 rounded-lg p-3 hover:outline outline-blue-500 outline-1' 
                type="text" 
                id="fullName" 
                required 
              />
              <label htmlFor="email">Email</label>
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Enter your email id' 
                className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' 
                type="email" 
                id="email" 
                required 
              />
              <label htmlFor="password">Password</label>
              <input 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Create a Password' 
                className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' 
                type="password" 
                id="password" 
                required 
              />
              <label htmlFor="password2">Confirm Password</label>
              <input 
                onChange={(e) => setPassword2(e.target.value)} 
                placeholder='Re-type your Password' 
                className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' 
                type="password" 
                id="password2" 
                required 
              />
              <button 
                onClick={handleSubmit} 
                className='rounded-lg hover:bg-black hover:text-orange-500 bg-orange-200 h-fit my-1 p-3 text-black font-bold'
                type="button"
              >
                { isLoading ? <div className='flex justify-center items-center content-center'><img className="rounded-s-3xl w-5 h-5" src="loadinggif.gif" alt="Loading gif" /></div> :'Sign up'}
              </button>
            </form>
          </div>
          <aside className="img hidden md:block ml-56 md:ml-20">
            <img className='h-[500px] w-[500px] flex-wrap' src="/signup-now.png" alt="Sign up" />
          </aside>
        </section>
      </main>
    </>
  );
}

export default SignUp;
