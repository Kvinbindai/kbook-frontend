import { createContext } from "react";
import { getMe, login , register  } from "../api/auth";
import { useState } from "react";
import {deleteToken, saveTokenToLocalStorage} from '../utils/token'
import { useEffect } from "react";
const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState({
    email : 'kavin'
  });

  const fetchUser =  async() => {
    try{
      const data = await getMe()
      console.log(data)
      setAuthUser(data.data.user)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchUser()
  },[])

  const loginUser = async (body) => {
    const res = await login(body);
    setAuthUser(res.data.user);
    saveTokenToLocalStorage(res.data.accessToken);
  };

  const registerUser = async (body) => {
    const res = await register(body);
    // console.log(res.data.data)
    setAuthUser(res.data.data)
    saveTokenToLocalStorage(res.data.accessToken)
  };

  const logout = async () => {
    setAuthUser(null)
    deleteToken()
  }

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        authUser,
        registerUser,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
