import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";


const WrapperNoFooter = () => {
  return (
    <>
      <AdminNavbar />
     <div className="pt-[72px] w-[1024px] mx-auto">
        <Outlet />
     </div>
    </>
  );
};

export default WrapperNoFooter;
