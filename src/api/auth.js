import axios from '../config/axios'

const login = (body) => {
  return  axios.post('/auth/login',body)
}


export { login }