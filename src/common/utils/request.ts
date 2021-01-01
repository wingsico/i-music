import axios from 'axios';

export const baseURL = "http://localhost:4000"

const instance = axios.create({
  baseURL,
})

instance.interceptors.response.use(
  res => res.data,
)

export default instance;

