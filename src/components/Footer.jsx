import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <section className="bg-blue-600 flex md:flex-row flex-col-reverse text-white p-20 justify-center">
        <div className="pt-5 mt-2 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold">Professional Web Designs</h2>
          <p className="text-xl md:w-1/2 w-auto mt-1">
            Hi! My name is Sheryar Azhar, and I am an expert in web design and branding. I can help you make your website more attractive and enhance your brand presence.
          </p>
          <div className="my-5">
            <button className="text-center bg-black rounded-lg text-lg pt-2 pb-2 pr-5 pl-5 w-fit h-fit outline outline-white outline-1">
              <Link to="/contact">Get Started</Link>
            </button>
          </div>
        </div>
        <div>
          <img src="/random.avif" className="h-[200px] w-full rounded-lg" alt="Web Design Illustration" />
        </div>
      </section>
      <section className="bg-black text-white p-10 flex md:flex-row flex-col justify-between gap-2">
        <div>
          <img className="rounded-full h-[100px] w-[100px]" src="/seeera.png" alt="Company Logo" />
          <p className="md:w-1/2 w-auto">
            High-level experience in web design and development knowledge, producing quality work.
          </p>
        </div>
        <div className="flex-col">
          <div className="flex font-bold">
            <h3 className="text-sm">Use Cases</h3>
            <h3 className="mx-32">Company</h3>
          </div>
          <div className="flex">
            <ul className="flex-col">
              <li>Web Designers</li>
              <li>Marketers</li>
              <li>Small Businesses</li>
              <li>Website Builders</li>
            </ul>
            <ul className="flex-col mx-20">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex gap-1 md:gap-2">
            <Link to="https://facebook.com" className="hover:text-orange-600"><FaFacebook aria-label="Facebook" /></Link>
            <Link to="https://instagram.com" className="hover:text-orange-600"><FaInstagram aria-label="Instagram" /></Link>
            <Link to="https://linkedin.com" className="hover:text-orange-600"><FaLinkedin aria-label="LinkedIn" /></Link>
            <Link to="https://twitter.com" className="hover:text-orange-600"><FaTwitter aria-label="Twitter" /></Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
