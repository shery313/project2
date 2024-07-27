import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

function Service() {
  return (
    <>
      <Helmet>
        <title>Services - SERA Innovations</title>
        <meta name="description" content="Discover the range of services offered by SERA Innovations, including web development, mobile app development, and software solutions." />
        <meta name="keywords" content="Serainnovations, Sera Innovations, services, web development, mobile app development, software solutions" />
        <meta property="og:title" content="Services - SERA Innovations" />
        <meta property="og:description" content="Discover the range of services offered by SERA Innovations." />
        <meta property="og:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
        <meta property="og:url" content="https://serainnovations.pro/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - SERA Innovations" />
        <meta name="twitter:description" content="Discover the range of services offered by SERA Innovations." />
        <meta name="twitter:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
      </Helmet>
      <Navbar />
      <div className="py-36 bg-black text-white">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4 py-5 px-4 text-center">
          Services
        </h1>
      </div>
      <div className="bg-orange-500 flex md:flex-row flex-col-reverse items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full p-5">
          <div className="bg-blue-400 p-10 m-5 w-fit h-fit flex flex-col justify-center items-center">
            <img
              className="w-[100px] h-[100px] rounded-full mb-3"
              src="/webdev.png"
              alt="Web Development"
            />
            <h1 className="font-bold text-center my-1">Web Development</h1>
            <p className="text-sm text-center">Professional web development and design services</p>
          </div>

          <div className="bg-blue-400 p-10 m-5 w-fit h-fit flex flex-col justify-center items-center">
            <img
              className="w-[100px] h-[100px] rounded-full mb-3"
              src="/webdesi.jpeg"
              alt="Web Designing"
            />
            <h1 className="font-bold text-center my-1">Web Designing</h1>
            <p className="text-sm text-center">Creative and responsive web design</p>
          </div>
          <div className="bg-blue-400 p-10 m-5 w-fit h-fit flex flex-col justify-center items-center">
            <img
              className="w-[100px] h-[100px] rounded-full mb-3"
              src="/sim.jpg"
              alt="Mobile Development"
            />
            <h1 className="font-bold text-center my-1">Mobile Development</h1>
            <p className="text-sm text-center">Innovative mobile app development</p>
          </div>
          <div className="bg-blue-400 p-10 m-5 w-fit h-fit flex flex-col justify-center items-center">
            <img
              className="w-[100px] h-[100px] rounded-full mb-3"
              src="/softdev.webp"
              alt="Software Development"
            />
            <h1 className="font-bold text-center my-1">Software Development</h1>
            <p className="text-sm text-center">Custom software development solutions</p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img className="w-full max-w-[600px] mt-10 md:mt-0 md:w-auto" src="/ddd.webp" alt="Services Illustration" />
        </div>
      </div>
    </>
  );
}

export default Service;
