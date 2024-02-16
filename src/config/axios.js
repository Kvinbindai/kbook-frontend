import axios from 'axios'
import { getTokenFromLocal } from '../utils/token'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

axios.interceptors.request.use(
    config => {
        const token = getTokenFromLocal()
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

export default axios