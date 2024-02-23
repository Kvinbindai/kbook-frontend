import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Wrapper = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[72px] w-[1024px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Wrapper;
