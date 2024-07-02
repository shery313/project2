import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaAddressBook,
  FaBars,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaMaxcdn,
  FaTwitter,
  FaXbox,
} from "react-icons/fa";
import Banner from "./Banner";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log("clicked");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="navbar px-4 py-4 max-w-7xl mx-auto flex justify-between items-center ">
        <Link to="/" className="text-xl font-bold text-white">
          {" "}
          <img className="h-[80px] w-[80px] rounded-full" src="/seeera.png" alt="" />
          {/* SERA <span className="text-orange-500">Innovations</span> */}
        </Link>
        <ul className="md:flex gap-12 text-lg hidden">
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
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            <Link to={"/login"}>Log in</Link>
          </button>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            <Link to={"/signup"}>Sign up</Link>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="w-5 h-5">
            {isMenuOpen ? <FaXbox /> : <FaBars />}
          </button>
        </div>
      </nav>
      <ul
        className={`md:flex-col  md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 text-black bg-white ${
          isMenuOpen
            ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
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
