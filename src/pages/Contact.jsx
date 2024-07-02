import React from 'react'
import { FaAddressBook, FaGlassMartiniAlt, FaLocationArrow, FaMailBulk, FaMailchimp, FaPhone, FaSearchLocation, FaSeedling, FaShare, FaVoicemail } from 'react-icons/fa'

function Contact() {
  return (
    <div>
       <div className="py-36 bg-black text-white">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4 py-5 px-4 text-center">Contact Us</h1>
        </div>
        <div className=' flex flex-col-reverse md:flex-row '>
          <div className='m-10 p-20 '>
            <h1 className='text-black text-3xl font-bold'>Lets talk with us</h1>
            <p className='text-sm w-fit my-2'>Questions,connenctions or suggestions? Simply fill in the form and will be in touch shortly </p>
            <p className='font-bold my-1'><FaLocationArrow className='inline'/> Islamabad, Pakistan</p>
            <p className='font-bold my-1'><FaPhone className='inline'/> +923075304856</p>
            <p className='font-bold my-1'><FaMailBulk className='inline'/> Sheryarsattti6@gmail.com</p>
          </div>
          <div className="login bg-orange-500  p-10 m-10 shadow-2xl">
            <div className='flex flex-col  gap-2'>  
              <div className='flex gap-2'>
              <input placeholder='Name' className='my-2   blockS h-9 border border-gray-200 rounded-lg p-3 hover:outline outline-blue-500 outline-1' type="text" name="" id="" />
              <input placeholder='Email' className='my-2 h-9  rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1'  type="email" name="" id="" />
              </div>
              <input placeholder='Subject' className='my-2 h-9 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1'  type="text" name="" id="" />
              <textarea placeholder='Your Message' className='my-2 h-32 rounded-lg border border-gray-200 p-3 hover:outline outline-blue-500 outline-1'  type="text" name="" id="" />
              <button className='rounded-lg hover:bg-black hover:text-orange-500 bg-orange-200 h-fit my-1 p-3 text-black font-bold'>Send Message</button>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Contact
