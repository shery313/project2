// App.jsx
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
import PrivateRoutes from "./wrappers/PrivateRoutes";
import Logout from "./auth/Logout";
import MainWrapper from "./wrappers/MainWrapper";
import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound";
import Profile from "./Dashboard/Profile";
import AddBlog from "./Dashboard/AddBlog";
import Notifications from "./Dashboard/Notifications";
import ProfileBlogs from "./Dashboard/ProfileBlogs";
import EditBlog from "./Dashboard/EditBlog";
import CreatePassword from "./auth/CreatePassword";
import ForgetPassword from "./auth/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/category/:slug" element={<Category />} />m
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-blog" element={<AddBlog />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile-blogs" element={<ProfileBlogs />} />
            <Route path="/edit-blog/:id" element={<EditBlog />} />

          </Route>
        </Routes>
        <Footer />
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
