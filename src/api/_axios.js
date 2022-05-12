import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 0,
  headers: {
    "X-Authorization": process.env.VUE_APP_PUBLIC_KEY,
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
