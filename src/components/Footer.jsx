import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='bg-blue-600 flex md:flex-row flex-col-reverse text-white p-20 justify-center'>
            <div className='pt-5 mt-2 md:mt-0'>
                <h1 className='text-3xl md:text-5xl font-bold'>Professional Web Designs</h1>
                <p className='text-x1 md:w-1/2 w-auto mt-1'>Hi! My name is Sheryar Azhar and i am expert in web designs and Branding.I can help you make your website more attractive and branding.  </p>
                <div className='my-5 '>
                    <button className='text-center bg-black rounded-lg text-lg pt-2 pb-2 pr-5 pl-5 w-fit h-fit outline outline-white outline-1 '>Get Started</button>
                </div>
            </div>
            <div>
                <img src="/random.avif" className='h-[200px] w-full rounded-lg' alt="" />
            </div>

        </div>
        <div className='bg-black text-white p-10 flex md:flex-row flex-col justify-between gap-2'>
            <div>
                <h1 className='text-3xl'>Site <span className='font-bold'>Logo</span></h1>
                <p className=' md:w-1/2 w-auto'>High Level experience in web design and development knowledge , producing quality work </p>

            </div>
            <div className='flex-col'>
                <div className='flex font-bold'>
                    <h1>Use Cases</h1>
                    <h1 className='mx-32'>Company</h1>
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <h1>Web Designers</h1>
                        <h1>Marketers</h1>
                        <h1>Small bussinesses</h1>
                        <h1>website Builders</h1>
                    </div>
                    <div className='flex-col mx-20' >
                        <h1>About Us</h1>
                        <h1>Career</h1>
                        <h1> FAQS</h1>
                        <h1>Teams</h1>
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-xl'>Follow Us</h1>
                <div className='flex gap-1 md:gap-2'>
                    <Link className="hover:text-orange-600"><FaFacebook/></Link>
                    <Link className="hover:text-orange-600"><FaInstagram/></Link>
                    <Link className="hover:text-orange-600"><FaLinkedin/></Link>
                    <Link className="hover:text-orange-600"><FaTwitter/></Link>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
