import { useState } from "react";
import { createContext } from "react";
import { getBookDetailById , addBasketItem , getAllBasketItemFromBasketId } from '../api/cart'
import { useEffect } from "react";
import  useAuth from '../hooks/use-auth'

const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const {authUser} = useAuth()
    const [allItem,setAllItem] = useState(null)


    const getAllCart = async () => {
        const res = await getAllBasketItemFromBasketId()
        console.log(res.data.data)
        setAllItem(res.data.data)
    }

    useEffect(()=>{
        getAllCart()
    },[authUser])

    const getOneBookToDetail = async (id) => {
        const res = await getBookDetailById(id)
        return res.data.data
    }

    const addBasketItemToCart  = async (obj) => {
        const res = await addBasketItem(obj)
        const newValue = res.data
        setAllItem({
            ...allItem,
            ...newValue
        })
    }



  return <CartContext.Provider value={{getOneBookToDetail , addBasketItemToCart}}>{children}</CartContext.Provider>;
}

export { CartContext }