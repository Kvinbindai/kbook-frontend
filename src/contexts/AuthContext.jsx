import { createContext } from "react";
import { login } from '../api/auth'
import { useState } from "react";
const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [authUser,setAuthUser] = useState(null)

   

    const loginUser = async (body) => {
        const res = await login(body)
        setAuthUser(res)
    }

    return <AuthContext.Provider value={{
        loginUser
    }}>{children}</AuthContext.Provider>
}

export { AuthContext , AuthContextProvider }