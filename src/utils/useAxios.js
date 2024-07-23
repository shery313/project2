import axios from "axios";
import { getRefreshToken, IsTokenExpired, setAuthUser } from "./auth";
import { useAuthStore } from "../store/auth";
import { SITE_URL } from "./Constant";

export const useAxios=()=>{
    const accessToken=Cookies.get('access_token')
    const refresh_token=Cookies.get('refresh_token')

    const axiosInstance= axios.create({
        baseURL:SITE_URL,
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    })
    axiosInstance.interceptors.request.use(async(req)=>{
        if (!IsTokenExpired(accessToken)){
            return req;
        }
        const response= await getRefreshToken(refresh_token);
        setAuthUser(response.data.access,response.data.refresh);
        req.headers=`Bearer${response?.data?.access}`
        
    });

}