import axios from '../config/axios'

const editUser = (formData) => {
  return  axios.patch('/users',formData)
}

export {editUser}