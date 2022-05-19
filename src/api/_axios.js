import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 0,
  headers: {
    "X-Authorization": process.env.VUE_APP_SECRET_KEY,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
