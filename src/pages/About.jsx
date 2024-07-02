import React from 'react'

function About() {
  return (
    <div>
      <div className="py-36 bg-black text-white">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4 py-5 px-4 text-center">About Us</h1>
      </div>
      <div className='bg-orange-500 p-5'>
        <div className='bg-orange-500 p-10'>
          <div className='flex md:flex-row flex-col justify-between items-center '>
            <img className='rounded-full md:w-[400px] md:h-[400px] w-[200px] h-[200px] ' src="/king.jpg" alt="" />
            <div clas>
              <h1 className='md:text-5xl text-2xl my-1  font-bold ml-10 md:w-0 inline  '>About Our Company</h1>
              <p className='text-xl text-center'>Welcome to SERA innovations, your one-stop-shop for all your digital needs!</p>
            </div>
          </div>
          <h1 className='text-3xl text-center font-bold my-5 mx-5'>Our Team</h1>
          <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
            <div className='bg-blue-400 text-white  flex-col p-10 w-fit gap-2 justify-center items-center'>
              <img className='h-[100px] w-[100px] mx-4 rounded-full text-center' src="/s.jpg" alt="" />
              <h1 className='font-bold text-x1 text-center my-1'>Sheryar Azhar</h1>
              <p className='text-sm text-center my-1'>Web Developer</p>  
              <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
            </div>
            <div className='bg-blue-400 text-white  flex-col p-10 w-fit gap-2 justify-center items-center'>
              <img className='h-[100px] w-[100px] mx-4 rounded-full text-center' src="/alfred.jpg" alt="" />
              <h1 className='font-bold text-x1 text-center my-1'>Alfred</h1>
              <p className='text-sm text-center my-1'>Web Developer</p>  
              <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
            </div>
            <div className='bg-blue-400 text-white  flex-col p-10 w-fit gap-2 justify-center items-center'>
              <img className='h-[100px] w-[100px] mx-4 rounded-full text-center' src="/richard.jpg" alt="" />
              <h1 className='font-bold text-x1 text-center my-1'>Richard</h1>
              <p className='text-sm text-center my-1'>Mobile Developer</p>  
              <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
            </div>
            <div className='bg-blue-400 text-white  flex-col p-10 w-fit gap-2 justify-center items-center'>
              <img className='h-[100px] w-[100px] mx-4 rounded-full text-center' src="/image.jpg" alt="" />
              <h1 className='font-bold text-x1 text-center my-1'>Jamal Khan</h1>
              <p className='text-sm text-center my-1'>Digital Marketer</p>  
              <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
            </div>
            <div className='bg-blue-400 text-white  flex-col p-10 w-fit gap-2 justify-center items-center'>
              <img className='h-[100px] w-[100px] mx-4 rounded-full text-center' src="/Elly.jpg" alt="" />
              <h1 className='font-bold text-x1 text-center my-1'>Elly Lesonjore</h1>
              <p className='text-sm text-center my-1'>Backend Engineer</p>
              <button className='bg-orange-500 text-center px-6 py-2 my-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Read More</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About
