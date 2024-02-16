import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const WrapperNoFooter = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[72px]">
        <Outlet />
      </div>
    </>
  );
};

export default WrapperNoFooter;
