import axios from '../config/axios'

const login = (body) => {
  return  axios.post('/auth/login',body)
}

const register = (body) => {
    return axios.post('/auth/register',body)
}

const getMe = () => {
  return axios.get('/auth/getMe')
}


export { login , register , getMe }