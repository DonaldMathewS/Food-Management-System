import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"YOUR BACKEND URL",
    headers:{},
});

axiosInstance.interceptors.response.use((response)=>{
return response?.data
}, (error)=>{
    return error;
})

export default axiosInstance
