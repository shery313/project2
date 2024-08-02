import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';

export default function About() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return (
    <>
      <Helmet>
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
      </Helmet>
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
          <div>
            <Slider {...settings}>
              {[
                { name: 'Sheryar Azhar', role: 'Web Developer', img: '/s.jpg' },
                { name: 'Alfred', role: 'Web Developer', img: '/alfred.jpg' },
                { name: 'Richard', role: 'Mobile Developer', img: '/profile5.jpeg' },
                { name: 'Jamal Khan', role: 'Digital Marketer', img: '/image.jpg' },
                { name: 'Elly Lesonjore', role: 'Backend Engineer', img: '/Elly.jpg' },
              ].map((member, index) => (
                <div key={index}>
                  <div className='flex flex-col items-center justify-center bg-blue-400 h-[250px] w-[250px] md:w-full md:h-full text-white p-3 md:p-6'>
                    <img className='md:h-[200px] md:w-[200px] h-[100px] w-[100px] rounded-full mb-4' src={member.img} alt={member.name} />
                    <h1 className='font-bold md:text-xl text-sm text-center'>{member.name}</h1>
                    <p className='md:text-sm text-xs text-center'>{member.role}</p>
                    <button className='bg-orange-500 text-center px-4 py-2 my-2 text-xs font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
