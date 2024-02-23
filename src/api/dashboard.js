import axios from "../config/axios";

const getAllBookList =  () => {
    return axios.get('/books')
}
const getAllCategoryList =  () => {
    return axios.get('/category')
}
const getAllTransactionList =  () => {
    return axios.get('/transactions')
}


export { getAllBookList , getAllCategoryList , getAllTransactionList}