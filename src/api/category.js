import axios from '../config/axios'

const addCategory = (obj) => {
    return axios.post('/category',obj)
}
const editCategory = (obj,categoryId) => {
    return axios.patch(`/category/${categoryId}`,obj)
}


export { addCategory  , editCategory}