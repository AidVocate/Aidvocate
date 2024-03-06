import axios from 'axios';
import router from './router';

const axiosClient = axios.create({
  baseURL: `${(import.meta as any).env.VITE_API_BASE_URL}`,
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${"TempToken"}`
  return config; // Return the modified config
}, (error) => {
  return Promise.reject(error);
})

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status == 401) {
    router.navigate('/login')
    return error;
  }
  throw error;
})

export default axiosClient;