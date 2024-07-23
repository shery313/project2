import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { logout } from '../utils/auth'
import { Toast } from '../plugins/Toast'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Logout() {
    const navigate=useNavigate();

    const handleClick=()=>{
        logout();
        Toast('success','Logout successfully','You have been logout')
        navigate('/')
    }
  return (
    <><Navbar/>
    <div className='bg-orange-500 p-10 '>
        <div className=' bg-white flex flex-col md:m-20 m-10 p-5 md:-10 items-center content-center justify-normal shadow-lg rounded-lg  '>
            <div><FaSignOutAlt className='md:h-60 md:w-60 w-20 h-20 text-orange-500'/></div>
            <div className='my-4 md:text-lg text-xs'>
                <p>Oh no! You're leaving ...</p>
                <p className='mx-2'>Are you sure?</p>
            </div>
            <div className='flex flex-col justify-normal items-center content-center gap-4 my-4 text-xs md:text-lg'>
                <button className=' bg-blue-500 rounded-lg md:p-5 p-2 text-white hover:border-blue-500 hover:bg-red-500 hover:border ' ><Link to={'/'}>NaaH, Just kidding.</Link></button>
                <button onClick={handleClick} className='text-blue-500 border hover:bg-green-500 p-2 hover:text-white  border-blue-500 rounded-lg md:p-5 w-full' >Yes, Log me out</button>
            </div>

        </div>
        
      
    </div></>
  )
}


export default Logout
