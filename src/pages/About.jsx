import React from 'react';
import Navbar from '../components/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <head>
        <title>About Us - SERA Innovations</title>
        <meta name="description" content="Learn more about SERA Innovations, your trusted partner for digital solutions including web development, mobile app development, and digital marketing." />
        <meta name="keywords" content="Serainnovations, Sera Innovations, about Sera Innovations, software development, web development, mobile app development, digital marketing, digital solutions" />
        <meta property="og:title" content="About Us - SERA Innovations" />
        <meta property="og:description" content="Learn more about SERA Innovations, your trusted partner for digital solutions." />
        <meta property="og:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
        <meta property="og:url" content="https://serainnovations.pro/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - SERA Innovations" />
        <meta name="twitter:description" content="Learn more about SERA Innovations, your trusted partner for digital solutions." />
        <meta name="twitter:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
      </head>
      <Navbar />
      <div className="py-36 bg-black text-white">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4 py-5 px-4 text-center">About Us</h1>
      </div>
      <div className='bg-orange-500 p-5'>
        <div className='bg-orange-500 p-10'>
          <div className='flex md:flex-row flex-col justify-between items-center'>
            <img className='rounded-full md:w-[400px] md:h-[400px] w-[200px] h-[200px]' src="/king.jpg" alt="Company Founder" />
            <div className='text-center'>
              <h1 className='md:text-5xl text-lg my-1 font-bold'>About Our Company</h1>
              <p className='md:text-xl text-lg my-1'>Welcome to SERA Innovations, your one-stop-shop for all your digital needs!</p>
            </div>
          </div>
          <h1 className='text-3xl text-center font-bold my-5 mx-5'>Our Team</h1>
          <div  >
            <Slider {...settings}>
              <div className='bg-blue-400 rounded-lg   text-white flex flex-col p-10  content-center text-center gap-2 justify-center items-center'>
                <img className='md:h-[200px] md:w-[200px] h-[100px] w-[100px] rounded-full mx-8 md:mx-[410px]' src="/s.jpg" alt="Sheryar Azhar" />
                <h1 className='font-bold text-xl text-center my-1'>Sheryar Azhar</h1>
                <p className='text-sm text-center my-1'>Web Developer</p>  
                <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
              </div>
              <div className='bg-blue-400 text-white rounded-lg  flex flex-col p-10 w-fit gap-2 justify-center items-center text-center '>
                <img className='md:h-[200px] md:w-[200px] w-[100px] h-[100px] rounded-full text-center mx-8 md:mx-[410px]' src="/alfred.jpg" alt="Alfred" />
                <h1 className='font-bold text-xl text-center my-1'>Alfred</h1>
                <p className='text-sm text-center my-1'>Web Developer</p>  
                <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
              </div>
              <div className='bg-blue-400 text-white rounded-lg  flex flex-col p-10 w-fit gap-2 justify-center items-center text-center content-center'>
                <img className='h-[100px] w-[100px] md:w-[200px] md:h-[200px] rounded-full text-center mx-8 md:mx-[410px]' src="/richard.jpg" alt="Richard" />
                <h1 className='font-bold text-xl text-center my-1 '>Richard</h1>
                <p className='text-sm text-center my-1'>Mobile Developer</p>  
                <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
              </div>
              <div className='bg-blue-400 text-white rounded-lg  flex flex-col p-10 w-fit gap-2 justify-center items-center text-center content-center'>
                <img className='h-[100px] w-[100px] md:h-[200px] md:w-[200px]  rounded-full text-center mx-8 md:mx-[410px]' src="/image.jpg" alt="Jamal Khan" />
                <h1 className='font-bold text-xl text-center my-1 '>Jamal Khan</h1>
                <p className='text-sm text-center my-1'>Digital Marketer</p>  
                <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
              </div>
              <div className='bg-blue-400 text-white flex rounded-lg  flex-col p-10 w-fit gap-2 justify-center  items-center text-center content-center'>
                <img className='h-[100px] w-[100px] md:w-[200px] md:h-[200px] rounded-full text-center mx-8 md:mx-[410px]' src="/Elly.jpg" alt="Elly Lesonjore" />
                <h1 className='font-bold text-xl text-center my-1'>Elly Lesonjore</h1>
                <p className='text-sm text-center my-1'>Backend Engineer</p>
                <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
              </div>
            </Slider>  
          </div>
        </div>
      </div>
    </>
  );
}
