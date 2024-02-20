import axios from '../config/axios'


const addOrUpdateAddress = (obj) => {
    return axios.post('/address',obj)
}

export {addOrUpdateAddress}