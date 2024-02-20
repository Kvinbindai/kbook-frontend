import axios from "axios";

export const getAllData =  () => {
    return axios.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json')
}