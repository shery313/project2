import React from 'react';
import { FaLocationArrow, FaPhone, FaMailBulk } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';
import { Toast } from '../plugins/Toast';
import { useState } from 'react';
import apiInstance from '../utils/axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiInstance.post('/contact', formData)
      .then(response => {
        Toast('success','Message sent successfully')
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - SERA Innovations</title>
        <meta name="description" content="Get in touch with SERA Innovations. Contact us for questions, connections, or suggestions. We are here to help you." />
        <meta name="keywords" content="contact, SERA Innovations, Islamabad, Pakistan, phone, email, address" />
        <meta property="og:title" content="Contact Us - SERA Innovations" />
        <meta property="og:description" content="Get in touch with SERA Innovations. Contact us for questions, connections, or suggestions. We are here to help you." />
        <meta property="og:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
        <meta property="og:url" content="https://serainnovations.pro/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - SERA Innovations" />
        <meta name="twitter:description" content="Get in touch with SERA Innovations. Contact us for questions, connections, or suggestions. We are here to help you." />
        <meta name="twitter:image" content="https://serainnovations.pro/path-to-your-image.jpg" />
      </Helmet>
      <Navbar />
      <header className="py-36 bg-black text-white">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4 py-5 px-4 text-center">Contact Us</h1>
      </header>
      <main className='flex flex-col md:flex-row justify-center items-center content-center'>
        <section className='p-10'>
          <h2 className='text-black text-3xl font-bold'>Let's talk with us</h2>
          <p className='text-sm w-fit my-2'>Questions, connections, or suggestions? Simply fill in the form and we'll be in touch shortly.</p>
          <p className='font-bold my-1'><FaLocationArrow className='inline' /> Islamabad, Pakistan</p>
          <p className='font-bold my-1'><FaPhone className='inline' /> +923075304856</p>
          <p className='font-bold my-1'><FaMailBulk className='inline' /> Sheryarsattti6@gmail.com</p>
          <div className='bg-black rounded-full h-[300px] w-[300px] shadow-lg mt-4 flex items-center'>
            <img className='rounded-full h-[300px] w-[300px]  mt-10' src="/seeera.png" alt="Contact Us" />
          </div>
          
        </section>
        <section className="login bg-orange-500 p-10 m-10 shadow-2xl rounded-2xl">
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row gap-2'>
              <input placeholder='Name' onChange={handleChange} className='my-2 blockS h-9 border border-gray-200 rounded-lg p-3 hover:outline outline-blue-500 outline-1' type="text" name="name" required />
              <input onChange={handleChange} placeholder='Email' className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' type="email" name="email" required />
            </div>
            <input onChange={handleChange} placeholder='Subject' className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' type="text" name="subject" required />
            <textarea onChange={handleChange} placeholder='Your Message' className='my-2 h-32 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1' name="message" required />
            <button className='rounded-lg hover:bg-black hover:text-orange-500 bg-orange-200 h-fit my-1 p-3 text-black font-bold' type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contact;
