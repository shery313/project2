import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Banner() {
  const [hoverPositionL, setHoverPositionL] = useState(false);
  const [hoverPositionR, setHoverPositionR] = useState(false);
  return (
    <div className="px-4 py-28 mx-auto bg-[var(--color-blue-bg-1)]">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and ideas. We offer
          everything you need to get started, from helpful tips and tutorials.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%]  sm:w-[40%]">
          <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between w-full items-center h-[50px] text-white text-[14px] ">
            <Link
              to="/"
              className="font-medium uppercase border border-[var(--color-orange)] rounded-3xl  hover:bg-[var(--color-orange)] px-4 py-2 hover:text-white flex justify-center items-center hover:border hover:border-[var(--color-orange)]"
              onMouseEnter={() => setHoverPositionL(true)}
              onMouseLeave={() => setHoverPositionL(false)}
            >
              <span> Learn More About SERA Technologies </span>
              <span className="">
                <FaArrowRight
                  className={`ml-2 rotate-[-45deg] duration-200 ${
                    hoverPositionL
                      ? "rotate-[0] text-[var(--color-orange)]"
                      : "rotate-[-45deg]"
                  }`}
                />
              </span>
            </Link>
            <Link
              to="/"
              className="font-medium uppercase hover:text-orange-500 py-1 flex justify-center items-center"
              onMouseEnter={() => setHoverPositionR(true)}
              onMouseLeave={() => setHoverPositionR(false)}
            >
              <span>Contact Us</span>
              <span>
                <FaArrowRight
                  className={`ml-2 rotate-[-45deg] duration-200 ${
                    hoverPositionR ? "rotate-[0]" : "rotate-[-45deg]"
                  }`}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
