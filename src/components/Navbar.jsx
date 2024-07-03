import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaAddressBook,
  FaBars,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaMaxcdn,
  FaSearch,
  FaTwitter,
  FaXbox,
} from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Banner from "./Banner";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log("clicked");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-[var(--color-blue-bg-1)] hover:bg-[var(--color-blue-bg-2)] transition-colors duration-300 ease-in-out text-white fixed top-0 left-0 right-0 z-10">
      <nav className="navbar px-4 py-4 max-w-7xl mx-auto flex justify-between items-center ">
        <Link to="/" className=" font-bold text-white text-2xl">
          {" "}
          {/* <img className="h-[80px] w-[80px] rounded-full" src="/seeera.png" alt="" /> */}
          SERA <span className="text-[var(--color-orange)]">Innovations</span>
        </Link>
        <ul className="md:flex gap-12 hidden uppercase font-bold text-[14px]">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            <li>About</li>
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Blogs</li>
          </NavLink>
        </ul>
        <div className="text-white lg:flex gap-4 items-center hidden">
          {/* <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <div className="relative ">
            <input
              type="search"
              className="pl-10 pr-10 py-2 border text-black w-5 border-gray-300 rounded-lg"
              placeholder="Search"
            />
            <label
              className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-gray-400"
              htmlFor="search"
            >
              <FaSearch />
            </label>
          </div> */}

          <button className="bg-[var(--color-orange)] px-6 py-2 font-medium text-white rounded hover:bg-white hover:text-[var(--color-orange)] transition-all duration-200 ease-in">
            <Link to={"/login"}>Log in</Link>
          </button>
          <button className="bg-[var(--color-orange)] px-6 py-2 font-medium rounded hover:bg-white hover:text-[var(--color-orange)] transition-all duration-200 ease-in">
            <Link to={"/signup"}>Sign up</Link>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="w-10 h-10">
            {isMenuOpen ? <MdOutlineClose size={40} /> : <FaBars size={30} />}
          </button>
        </div>
      </nav>
      <ul
        className={`md:flex-col  md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 text-black bg-white ${
          isMenuOpen
            ? "fixed top-8 left-0 w-full transition-all ease-out duration-150"
            : "hidden"
        } `}
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li onClick={toggleMenu}>Home</li>
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li onClick={toggleMenu}>Services</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li onClick={toggleMenu}>Contact</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <li onClick={toggleMenu}>About</li>
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li onClick={toggleMenu}>Blogs</li>
        </NavLink>
      </ul>
    </header>
  );
}
export default Navbar;
