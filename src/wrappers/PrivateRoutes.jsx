import React from 'react'
import { useAuthStore } from '../store/auth';
import { Navigate, Outlet } from 'react-router-dom';
function PrivateRoutes() {
    const isLoggedIn=useAuthStore((state)=>(state.isLoggedIn))();
    console.log(isLoggedIn)
    
  return (
    <div>
        {isLoggedIn?<Outlet/> :<Navigate to={'/login'}/>}
      
    </div>
  )
}

export default PrivateRoutes;
