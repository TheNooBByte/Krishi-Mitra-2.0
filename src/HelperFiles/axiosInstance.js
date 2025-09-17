import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000", 
  baseURL: "https://krishibackend.up.railway.app/",
  withCredentials: true, // Important for sending cookies
});

export default axiosInstance;
