import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://protfolio-backend.netlify.app/.netlify/functions/server/',
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance;
