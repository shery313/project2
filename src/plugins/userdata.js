import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
export const userdata=()=>{
    const refresh=Cookies.get('refresh_token')
    const access=Cookies.get('access_token')
    if(access && refresh){
        const decoded=jwt_decode(refresh)
        return decoded;
    }
    else{
        
    }
    
}