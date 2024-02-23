import axios from "../config/axios";

const createBook = (formData) => {
  return axios.post("/books",formData);
};
const updateBook = (formData,bookId) => {
  return axios.patch(`/books/${bookId}`,formData);
};

const getAllBook =  () => {
  return axios.get(`/books`)
}


export { createBook , updateBook  ,getAllBook };
