import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_HOST,
  timeout: 120000,
  withCredentials: false,
});
