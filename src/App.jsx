import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponet";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Router from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router />
      {/* <HomePage/> */}
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
