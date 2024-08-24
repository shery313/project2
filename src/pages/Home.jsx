import React from "react";
import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCog,
  FaChartLine,
  FaDesktop,
  FaCode,
  FaPlay,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Sera Innovations - Your Trusted Software and Digital Services Partner</title>
        <meta name="description" content="Sera Innovations provides top-tier software and digital services including web development, mobile app development, and digital marketing. Partner with us for innovative solutions tailored to your needs." />
        <meta name="keywords" content="Sera Innovations, serainnovations, Sera Innovations software development, web development, mobile app development, digital marketing, innovative solutions, digital services" />
        <meta name="author" content="Sera Innovations" />
        <meta property="og:title" content="Sera Innovations - Your Trusted Software and Digital Services Partner" />
        <meta property="og:description" content="Sera Innovations provides top-tier software and digital services including web development, mobile app development, and digital marketing." />
        <meta property="og:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
        <meta property="og:url" content="https://serainnovations.pro" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sera Innovations - Your Trusted Software and Digital Services Partner" />
        <meta name="twitter:description" content="Sera Innovations provides top-tier software and digital services including web development, mobile app development, and digital marketing." />
        <meta name="twitter:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
      </Helmet>
      <Navbar />
      <Banner />
      <section className="w-full bg-orange-500 flex md:flex-row flex-col justify-center items-center content-center">
        <div className="mx-20 my-5">
          <h2 className="md:text-3xl text-2xl font-bold text-white">
            We're building software
          </h2>
          <h2 className="md:text-3xl text-2xl font-bold text-white">
            For your Business
          </h2>
          <p className="text-sm md:w-1/2 text-white">
            Transforming ideas into digital solutions that drive your business forward. Sera Innovations are designed to enhance your online presence, streamline operations, and empower growth.
          </p>
          <div className="flex space-x-2 space-y-2 my-2">
            <button className="bg-orange-200 px-6 py-2 font-medium rounded hover:bg-black hover:text-[var(--color-orange)] transition-all duration-200 ease-in">
              <Link to="/contact">Get Started</Link>
            </button>
            <div className="rounded-full h-12 w-12 ml-2 border border-orange-200 content-center">
              <FaPlay className="mx-4 text-orange-200" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="mr-20">
          <img src="/hg.webp" alt="Business Solutions" />
        </div>
      </section>
      <div className="custom-shape-divider-bottom-1720429552">
        <svg
          className="bg-orange-500"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <section className="m-10">
        <div className="text-center">
          <h2 className="md:text-2xl text-xl font-bold">Services We Offer</h2>
          <p className="text-sm text-gray-500">
            At Sera Innovations, we provide a wide range of services tailored to your business needs, including web development, mobile app development, custom software solutions, business intelligence services, desktop application development, and API development & integration.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center content-center items-center text-center">
          <div className="flex flex-col items-center content-center w-fit md:m-5 p-5 text-gray-500 justify-center text-center">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaLaptopCode className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Web Development Solutions</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5 p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaMobileAlt className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Mobile App Development</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5 mt-2 p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaCog className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Custom Software Solutions</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5 mt-2 p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaChartLine className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Business Intelligence Services</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5 mt-2 p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaDesktop className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Desktop Application Development</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5 mt-2 p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaCode className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">API Development & Integration</p>
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt=""/>
    <figure className="mt-10">
      <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
      </blockquote>
      <figcaption className="mt-10">
        <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">Judith Black</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div className="text-gray-600">CEO of Workcation</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>

     
<div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
        <div className="mt-6 flex max-w-md gap-x-4">
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
          <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
          </div>
          <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
          <dd className="mt-2 leading-7 text-gray-400">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</dd>
        </div>
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
            </svg>
          </div>
          <dt className="mt-4 font-semibold text-white">No spam</dt>
          <dd className="mt-2 leading-7 text-gray-400">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</dd>
        </div>
      </dl>
    </div>
  </div>
  <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    {/* <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> */}
  </div>
</div>

      
    </div>
  );
}

export default Home;
