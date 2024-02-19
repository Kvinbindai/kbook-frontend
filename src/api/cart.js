import axios from '../config/axios'

const getBookDetailById =  (id) => {
    return axios.get(`/books/${id}`)
}

const addBasketItem = (obj) => {
    return axios.post('/basketItem',obj)
}

const getAllBasketItemFromBasketId = () => {
    return axios.get('/basketItem')
}

export { getBookDetailById , addBasketItem , getAllBasketItemFromBasketId}