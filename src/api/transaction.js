import axios from '../config/axios'


const createTransaction = (formData) => {
    return axios.post('/transactions',formData)
}

const getTransactionAndBasketListByBasketId = (transactionId) => {
    return axios.get(`/transactions/${transactionId}`)
}

const updateTransactionStatus = (transactionId,details) => {
    return axios.patch(`/transactions/${transactionId}`,details)
}


export {createTransaction , getTransactionAndBasketListByBasketId , updateTransactionStatus}