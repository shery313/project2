import React, { useEffect, useState } from 'react'
import { setUser } from '../utils/auth';

function MainWrapper({children}) {
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        const handler=()=>{
            setLoading(true);
            setUser();
            setLoading(false);

        }
        handler();
    })
  return (
    
    <div>
        {loading?null:<>{children}</>}
      
    </div>
  )
}

export default MainWrapper
