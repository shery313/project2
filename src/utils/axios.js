import axios from 'axios';


const apiInstance=axios.create({
    baseURL:'https://sera-backend.up.railway.app/api/v1/',
    timeout:50000,
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
    }
})

export default apiInstance;