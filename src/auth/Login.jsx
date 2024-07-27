import React, { useState } from 'react';
import { login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state

    const { error } = await login(email, password);
    setLoading(false); // Reset loading state

    if (error) {
      alert(JSON.stringify(error));
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - SERA Innovations</title>
        <meta name="description" content="Login to your SERA Innovations account to access your personalized dashboard and manage your projects efficiently." />
        <meta name="keywords" content="Serainnovations, Sera Innovations, login, account access, project management" />
        <meta property="og:title" content="Login - SERA Innovations" />
        <meta property="og:description" content="Login to your SERA Innovations account to access your personalized dashboard and manage your projects efficiently." />
        <meta property="og:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
        <meta property="og:url" content="https://serainnovations.pro/login" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login - SERA Innovations" />
        <meta name="twitter:description" content="Login to your SERA Innovations account to access your personalized dashboard and manage your projects efficiently." />
        <meta name="twitter:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="mt-10 pt-5">
        <section className="flex md:flex-row flex-col-reverse gap-2">
          <div className="login bg-orange-500 shadow-lg p-20">
            <header>
              <h1 className="md:text-5xl text-3xl mx-5 font-bold">Login now</h1>
            </header>
            <form onSubmit={handleSubmit} className="flex flex-col m-5 gap-2">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter your email id"
                onChange={(e) => setEmail(e.target.value)}
                className="my-1 block h-9 border border-gray-200 rounded-lg p-3 hover:outline outline-blue-500 outline-1"
                type="email"
                id="email"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="my-1 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1"
                type="password"
                id="password"
                required
              />
              <button
                type="submit"
                className="rounded-lg hover:bg-black hover:text-orange-500 bg-orange-200 h-fit my-1 p-3 text-black font-bold"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <button
                type="button"
                className="rounded-lg hover:bg-black hover:text-orange-500 bg-red-500 h-fit my-1 p-3 text-white font-bold"
              >
                Sign in with Google
              </button>
            </form>
          </div>
          <aside className="img ml-40 md:block hidden">
            <img className="rounded-s-3xl h-[700px] w-[700px]" src="/login-now.png" alt="Login illustration" />
          </aside>
        </section>
      </main>
    </>
  );
}

export default Login;
