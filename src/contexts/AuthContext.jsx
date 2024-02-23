import { createContext } from "react";
import { getMe, login, register } from "../api/auth";
import { useState } from "react";
import { deleteToken, saveTokenToLocalStorage } from "../utils/token";
import { useEffect } from "react";
import { editUser } from "../api/user";
const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [refresh,setRefresh] = useState(false)
  const fetchUser = async () => {
    try {
      const res = await getMe();
      console.log(res);
      setAuthUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const loginUser = async (body) => {
    const res = await login(body);
    setAuthUser(res.data.user);
    saveTokenToLocalStorage(res.data.accessToken);
  };

  const registerUser = async (body) => {
    const res = await register(body);
    // console.log(res.data.data)
    setAuthUser(res.data.data);
    saveTokenToLocalStorage(res.data.accessToken);
  };

  const logout = async () => {
    setAuthUser(null);
    deleteToken();
  };

  const updateUser = async (user) => {
    const res = await editUser(user);
    console.log(res.data);
    setAuthUser({
      ...res.data.updateUser,
    });
    // fetchUser()
  };

  const updateAddressWhenSuccess = async (data) => {
    // { data
    //   contactName: "pie123456";
    //   contactNumber: "0873542719";
    //   createdAt: "2024-02-20T12:40:06.000Z";
    //   district: "เขตพระนคร";
    //   id: 1;
    //   postCode: "10200";
    //   province: "กรุงเทพมหานคร";
    //   subDistrict: "พระบรมมหาราชวัง";
    //   updatedAt: "2024-02-21T03:43:33.000Z";
    //   userId: 9;
    // }
    setAuthUser((prev)=>({
      ...authUser,
      contact : {
        ...data
      }
    }))
  };

  const updateBasketWhenSuccess = async (data) => {
    let newTotalPrice = 0;
    let newTotalAmount = 0;
    for (let i = 0; i < data.length; i++) {
      data[i]["price"] = data[i]["book"]["price"][0]["price"];
      newTotalAmount += data[i]["amount"];
      newTotalPrice += data[i]["amount"] * data[i]["book"]["price"][0]["price"];
    }
    setAuthUser((prev) => ({
      ...authUser,
      allItem: data,
      totalAmount: newTotalAmount,
      totalPrice: newTotalPrice,
    }));
  };

  const updateNewBasketToAuthUser = async (data) => {
    setAuthUser((prev)=>({
      ...authUser,
      basketId : data.newBasketId,
      allItem : data.allItem,
      totalAmount : 0,
      totalPrice : 0
    }))
  } 

  



  return (
    <AuthContext.Provider
      value={{
        loginUser,
        authUser,
        registerUser,
        logout,
        updateUser,
        fetchUser,
        updateBasketWhenSuccess,
        updateAddressWhenSuccess,
        updateNewBasketToAuthUser,
        setRefresh,
        refresh
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
