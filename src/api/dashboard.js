import axios from "../config/axios";

const getAllList =  (path) => {
    return axios.get(`/${path}`)
}

export { getAllList}