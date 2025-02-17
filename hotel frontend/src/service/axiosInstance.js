import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:2004",
    headers:{},
});

axiosInstance.interceptors.response.use((response)=>{
return response?.data
}, (error)=>{
    return error;
})

export default axiosInstance
