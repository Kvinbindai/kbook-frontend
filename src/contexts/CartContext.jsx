import { useState } from "react";
import { createContext } from "react";
import { getBookDetailById , addBasketItem , getAllBasketItemFromBasketId } from '../api/cart'
import { getAllBook } from '../api/book'
import { useEffect } from "react";
import  useAuth from '../hooks/use-auth'

const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const {authUser ,refresh ,setRefresh} = useAuth()
    // const [allItem,setAllItem] = useState(null)
    const [bookData,setBookData] = useState([])
    const [queryBookList,setQueryBookList] = useState([])
    const [inputSearch,setInputSearch] = useState('')
    const allBookData = async ( ) => {
        const data = await getAllBook()
        setBookData(data.data.data)
        setRefresh(!refresh)
    }

    const getAllCart = async () => {
        const res = await getAllBasketItemFromBasketId()
        console.log(res.data.data)
        // setAllItem(res.data.data)
        setRefresh(!refresh)
    }

    useEffect(()=>{
        getAllCart()
        allBookData()
    },[])

    const getOneBookToDetail = async (id) => {
        const res = await getBookDetailById(id)
        return res.data.data
    }

    const addBasketItemToCart  = async (obj) => {
        const res = await addBasketItem(obj)
    }




  return <CartContext.Provider value={{getOneBookToDetail , inputSearch ,setInputSearch , addBasketItemToCart  , bookData ,setQueryBookList ,queryBookList }}>{children}</CartContext.Provider>;
}

export { CartContext }