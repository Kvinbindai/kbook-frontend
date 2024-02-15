import { useState } from "react";
import Router from "./routes";
import {  ToastContainer , Slide } from 'react-toastify';

function App() {


  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        rtl={false}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
