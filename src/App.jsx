import { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import SearchResults from "./components/SearchResults";
import Category from "./components/Category";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/category/:slug" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
