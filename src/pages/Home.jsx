import React from "react";
import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { Fa500Px, FaAccusoft, FaAd, FaAddressCard, FaAdjust, FaHackerNews, FaPlane, FaPlay } from "react-icons/fa";

function Home() {
  return (
    <div className="">
      <Banner />
      <div className=" w-full bg-orange-500 flex md:flex-row flex-col justify-center items-center content-center  ">
        <div className="mx-20 my-5">
          <h1 className=" md:text-3xl text-2xl font-bold text-white">We're building softwares</h1>
          <h1 className="md:text-3xl text-2xl font-bold text-white">For your Bussiness</h1>
          <p className="text-sm md:w-1/2 text-white">Celebrated delightful and especially instruments am. Indulgence contrasted sufficent to unpleasent in insensible favouraitable.</p>
          <div className="flex space-x-2 space-y-2 my-2">
        <button className="bg-orange-200 px-6 py-2 font-medium rounded hover:bg-black hover:text-[var(--color-orange)] transition-all duration-200 ease-in">
          <Link to={"/contact"}>Get Started</Link>
        </button>
        <div className="rounded-full h-12 w-12 ml-2 border border-orange-200  content-center">
          <FaPlay className="mx-4 text-orange-200"/>
        </div>
        </div>
       
        </div>
        <div className="mr-20">
          <img src="/hg.webp" alt="" />
        </div>


      </div>
      <div className="custom-shape-divider-bottom-1720429552  ">
        <svg className="bg-orange-500" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <section className="m-10">
        <h1 className="text-center md:text-2xl text-x1 font-bold">Features We Provide To Client</h1>
        <p className="text-sm mx-10 md:text-center text-balance md:mx-72 md:w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quae sunt facilis alias atque praesentium ipsam totam distinctio voluptatibus, fugiat dolorum ut dolorem fugit incidunt vitae obcaecati a dolore ad.</p>
      <div>
        

      </div>
      </section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className=" flex flex-col  items-center content-center w-fit m-5 p-5 ">
            <div className="h-20 w-20 rounded-br-none  rounded-full bg-orange-500 "><FaPlane className="text-white w-10 h-10 mx-5 my-5 "/></div>
            <p className="text-center text-sm w-1/2">Lorem ipsum dolor sit amet qui non, officia magni id li</p>
          </div>
          <div className=" flex flex-col  items-center content-center w-fit m-5 p-5 ">
            <div className="h-20 w-20 rounded-br-none  rounded-full bg-orange-500 "><FaAccusoft className="text-white w-10 h-10 mx-5 my-5 "/></div>
            <p className="text-center text-sm w-1/2">Lorem ipsum dolor sit amet qui non, officia magni id li</p>
          </div>
          <div className=" flex flex-col  items-center content-center w-fit m-5 p-5 ">
            <div className="h-20 w-20 rounded-br-none  rounded-full bg-orange-500 "><FaAdjust className="text-white w-10 h-10 mx-5 my-5 "/></div>
            <p className="text-center text-sm w-1/2">Lorem ipsum dolor sit amet qui non, officia magni id li</p>
          </div>
          <div className=" flex flex-col  items-center content-center w-fit m-5 p-5 ">
            <div className="h-20 w-20 rounded-br-none  rounded-full bg-orange-500 "><Fa500Px className="text-white w-10 h-10 mx-5 my-5 "/></div>
            <p className="text-center text-sm w-1/2">Lorem ipsum dolor sit amet qui non, officia magni id li</p>
          </div>
          <div className=" flex flex-col  items-center content-center w-fit m-5 p-5 ">
            <div className="h-20 w-20 rounded-br-none  rounded-full bg-orange-500 "><FaAddressCard className="text-white w-10 h-10 mx-5 my-5 "/></div>
            <p className="text-center text-sm w-1/2">Lorem ipsum dolor sit amet qui non, officia magni id li</p>
          </div>
          <div className=" flex flex-col  items-center content-center w-fit m-5 p-5 ">

            <div className="h-20 w-20 rounded-br-none  rounded-full bg-orange-500 "><FaAd className="text-white w-10 h-10 mx-5 my-5 "/></div>
            <p className="text-center text-sm w-1/2">Lorem ipsum dolor sit amet qui non, officia magni id li</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
