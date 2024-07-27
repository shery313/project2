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
      <meta name="keywords" content="Serainnovations, Sera Innovations, software development, web development, mobile app development, digital marketing, innovative solutions, digital services" />
      <meta name="author" content="Sera Innovations" /> 
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
            Transforming ideas into digital solutions that drive your business forward. Our services are designed to enhance your online presence, streamline operations, and empower growth.
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
          <h2 className=" md:text-2xl text-xl font-bold">Services We Offer</h2>
          <p className="text-sm text-gray-500 ">
            At Sera Innovations, we provide a wide range of services tailored to your business needs, including web development, mobile app development, custom software solutions, business intelligence services, desktop application development, and API development & integration.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center content-center items-center text-center">
          <div className="flex flex-col  items-center content-center w-fit md:m-5  p-5 text-gray-500 justify-center text-center">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaLaptopCode className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Web Development Solutions</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5  p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaMobileAlt className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Mobile App Development</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5 mt-2  p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaCog className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Custom Software Solutions</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5 mt-2  p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaChartLine className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Business Intelligence Services</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5 mt-2  p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaDesktop className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">Desktop Application Development</p>
          </div>
          <div className="flex flex-col items-center content-center w-fit md:m-5  mt-2 p-5">
            <div className="h-20 w-20 rounded-br-none rounded-full bg-orange-500">
              <FaCode className="text-white w-10 h-10 mx-5 my-5" aria-hidden="true" />
            </div>
            <p className="text-center text-sm w-1/2">API Development & Integration</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
