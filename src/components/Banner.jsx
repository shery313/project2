import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Banner() {
  const [hoverPositionL, setHoverPositionL] = useState(false);
  const [hoverPositionR, setHoverPositionR] = useState(false);

  return (
    <section className="px-4 py-28 mx-auto bg-[var(--color-blue-bg-1)]">
      <div className="text-white text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl  leading-snug font-bold mb-4">
          Welcome to Sera Innovations
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Explore the latest in web development, coding tips, and tech insights.
          Join a community of developers and enthusiasts sharing their expertise
          and ideas. Whether you're starting out or diving deep, find everything
          you need to enhance your skills and build amazing web experiences.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] sm:w-[40%]">
          <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between w-full items-center h-[50px] text-white text-[12px]">
            <Link
              to="/about"
              className="font-medium uppercase border border-[var(--color-orange)] rounded-3xl hover:bg-[var(--color-orange)] px-4 py-2 hover:text-white flex justify-center items-center hover:border hover:border-[var(--color-orange)]"
              onMouseEnter={() => setHoverPositionL(true)}
              onMouseLeave={() => setHoverPositionL(false)}
              aria-label="Learn More About SERA Technologies"
            >
              <span> Learn More About SERA Technologies </span>
              <span className="">
                <FaArrowRight
                  className={`ml-2 rotate-[-45deg] duration-200 ${
                    hoverPositionL
                      ? "rotate-[0] text-[var(--color-orange)]"
                      : "rotate-[-45deg]"
                  }`}
                  aria-hidden="true"
                />
              </span>
            </Link>
            <Link
              to="/contact"
              className="font-medium uppercase hover:text-orange-500 py-1 flex justify-center items-center"
              onMouseEnter={() => setHoverPositionR(true)}
              onMouseLeave={() => setHoverPositionR(false)}
              aria-label="Contact Us"
            >
              <span className="sm:mx-2">Contact Us</span>
              <span>
                <FaArrowRight
                  className={`ml-2 rotate-[-45deg] duration-200 ${
                    hoverPositionR ? "rotate-[0]" : "rotate-[-45deg]"
                  }`}
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
