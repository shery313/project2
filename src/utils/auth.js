import { useAuthStore } from "../store/auth";
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import axios from "./axios";
import { Toast } from "../plugins/Toast";
import { useNavigate } from "react-router-dom";


// This function will get the access and refresh token , store that to  cookie for later user and giving user information to the zustand store user variable

export const setAuthUser=(access_token,refresh_token)=>{
    Cookies.set('access_token',access_token,{
        expires:1,
        secure:true
    })
    Cookies.set('refresh_token',refresh_token,{
        expires:7,
        secure:true
    })
    const user=jwt_decode(access_token) ?? null;
    if (user){
        useAuthStore.getState().setUser(user)
    }
    useAuthStore.getState().setLoading(false)

}

// this function will be used to get newly access and refresh token 
export const getRefreshToken=()=>{
    const refresh=Cookies.get('refresh_token');
    const response=axios.post('/user/token/refresh',{
        refresh
    })
    return response.data;
}
export const IsTokenExpired=(access_token)=>{
    let decoded=jwt_decode(access_token)
    if(decoded.exp< Date.now()/1000){
        getRefreshToken(access_token)
    }
    return false

}

export const setUser=()=>{
    console.log('i am set user')
    let token=Cookies.get('access_token')
    let refresh=Cookies.get('refresh_token')
    console.log(token,refresh)
    if (!token || !refresh){
        return;
    }
    if (IsTokenExpired(token)){
        let data=getRefreshToken(token);
        setAuthUser(data.access,data.refresh)
    }
    setAuthUser(token,refresh)

}
export const login=async (email,password)=>{
    
    const {data,status}=await axios.post('user/token/',{
        email,password
    });
    if(status===200){
        setAuthUser(data.access,data.refresh)
        Toast("success","login Successfully!",`Login successfully with ${email}`)

    }else{
        Toast('error','Oops!','Something Went Wrong!')
    }
    
    return {data,error:null}
}

export const register = async(
    full_name,email,password,password2)=>{
    try{
        const {data}= await axios.post("user/register/",{
            full_name,email,password,password2
        })
        Toast('success','Sign Up Successfully',`An Email has been sent to ${email} to verify your account`)

        
        return {data,error:null}


    }catch(error){
        return {data:null , error:error.response.data||"Something Went Wrong "}

    }

}

export const logout=()=>{
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
    useAuthStore.getState().setUser(null)
}