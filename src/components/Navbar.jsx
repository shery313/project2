import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaBlog, FaBell, FaBlogger } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useAuthStore } from "../store/auth";
import { userdata } from "../plugins/userdata";
import apiInstance from "../utils/axios";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState('');
  const userId = userdata()?.user_id;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const fetchProfile = () => {
    apiInstance.get(`user/profile/${userId}/`).then((res) => {
      setProfileData(res.data);
    });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <header className="bg-[var(--color-blue-bg-1)] hover:bg-[var(--color-blue-bg-2)] transition-colors duration-300 ease-in-out text-white fixed top-0 left-0 right-0 z-10">
      <nav className="navbar px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="w-10 h-10">
            {isMenuOpen ? (
              <IoCloseOutline size={30} />
            ) : (
              <IoIosMenu size={30} />
            )}
          </button>
        </div>
        <Link to="/" className="font-bold text-white md:text-2xl">
          SERA <span className="text-[var(--color-orange)]">Innovations</span>
        </Link>
        <ul className="md:flex md:gap-6 gap-5 hidden uppercase font-bold md:text-[12px]">
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
            <li>About</li>
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Blogs</li>
          </NavLink>
        </ul>
        <div className="text-white flex lg:flex md:gap-4 gap-2 items-center text-[12px]">
          {isLoggedIn ? (
            <div className="flex gap-3">
              <button onClick={toggleProfile}>
                <img
                  className="w-10 h-10 rounded-full border-orange-600 border-2"
                  src={`${profileData.image || 'default.jpg'}`}
                  alt="User Profile"
                />
              </button>
              <button className="bg-[var(--color-orange)] md:px-4 md:py-2 py-1 px-2 font-medium text-white rounded hover:bg-white hover:text-[var(--color-orange)] transition-all duration-200 ease-in">
                <Link to="/logout">Log out</Link>
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="bg-[var(--color-orange)] md:px-4 md:py-2 py-1 px-2 font-medium text-white rounded hover:bg-white hover:text-[var(--color-orange)] transition-all duration-200 ease-in">
                <Link to="/login">Log in</Link>
              </button>
              <button className="bg-[var(--color-orange)] md:px-4 md:py-2 py-2 px-2 font-medium rounded hover:bg-white hover:text-[var(--color-orange)] transition-all duration-200 ease-in">
                <Link to="/signup">Sign up</Link>
              </button>
            </div>
          )}
        </div>
      </nav>
      <ul
        className={`md:flex-col md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 right-0 text-black bg-white ${
          isMenuOpen
            ? "fixed top-5 left-0 w-fit rounded-lg transition-all ease-out duration-150"
            : "hidden"
        }`}
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
          <li onClick={toggleMenu}>About</li>
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li onClick={toggleMenu}>Blogs</li>
        </NavLink>
      </ul>
      <ul
        className={`md:flex-col gap-12 md:text-lg text-sm block space-y-4 px-4 py-6 mt-14 text-black rounded-lg bg-white ${
          isProfileOpen
            ? "fixed top-5 right-0 transition-all ease-out duration-150 w-fit ml-52"
            : "hidden"
        }`}
      >
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li onClick={toggleProfile}>
            <FaUser className="inline" /> Profile
          </li>
        </NavLink>
        <NavLink
          to="/add-blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li onClick={toggleProfile}>
            <FaBlog className="inline" /> Add Blog
          </li>
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li onClick={toggleProfile}>
            <FaBell className="inline" /> Notifications
          </li>
        </NavLink>
        <NavLink
          to="/profile-blogs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li onClick={toggleProfile}>
            <FaBlogger className="inline" /> My Blogs
          </li>
        </NavLink>
      </ul>
    </header>
  );
}

export default Navbar;
