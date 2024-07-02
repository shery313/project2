import React from 'react'

function Service() {
  return (
    <div>
       <div className="py-36 bg-black text-white">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4 py-5 px-4 text-center">Services</h1>
      </div>
      <div className='bg-orange-500 flex md:flex-row  flex-col-reverse '>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          <div className='bg-blue-400 p-10 m-10 w-fit h-fit'>
            <img className='w-[100px] h-[100px] rounded-full text-center mx-12' src="/webdev.png" alt="" />
            <h1 className='font-bold text-center my-1'>Web Development</h1>
            <p className='text-sm text-center'>web development and designing</p>
          </div>
          
          <div className='bg-blue-400 p-10 m-10 w-fit h-fit'>
            <img className='w-[100px] h-[100px] rounded-full mx-12' src="/webdesi.jpeg" alt="" />
            <h1 className='font-bold text-center my-1'>Web Designing</h1>
            <p className='text-sm text-center' >web development and designing</p>
          </div>
          <div className='bg-blue-400 p-10 m-10 w-fit h-fit'>
            <img className='w-[100px] h-[100px] rounded-full mx-12' src="/sim.jpg" alt="" />
            <h1 className='font-bold text-center my-1'>Mobile Development</h1>
            <p className='text-sm text-center' >web development and designing</p>
          </div>
          <div className='bg-blue-400 p-10 m-10 w-fit h-fit'>
            <img className='w-[100px] h-[100px] rounded-full mx-12' src="/softdev.webp" alt="" />
            <h1 className='font-bold text-center my-1'>Software Development</h1>
            <p className='text-sm text-center' >web development and designing</p>
          </div>
          
        </div>
        <div>
            <img className='mt-10' src="/ddd.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Service
