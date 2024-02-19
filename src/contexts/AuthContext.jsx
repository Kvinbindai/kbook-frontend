import { createContext } from "react";
import { getMe, login, register } from "../api/auth";
import { useState } from "react";
import { deleteToken, saveTokenToLocalStorage } from "../utils/token";
import { useEffect } from "react";
import { editUser } from "../api/user";
const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

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
    console.log(res.data)
    setAuthUser({
      ...res.data.updateUser,
    });
    fetchUser()
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        authUser,
        registerUser,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
