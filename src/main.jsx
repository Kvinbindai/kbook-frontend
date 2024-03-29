import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </AuthContextProvider>
);
