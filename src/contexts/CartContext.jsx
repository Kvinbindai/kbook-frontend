import { useState } from "react";
import { createContext } from "react";
import { getBookDetailById , addBasketItem , getAllBasketItemFromBasketId } from '../api/cart'
import { useEffect } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {

    const [allItem,setAllItem] = useState(null)


    const getAllCart = async () => {
        const res = await getAllBasketItemFromBasketId()
    }

    useEffect(()=>{
        getAllCart()
    },[])

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