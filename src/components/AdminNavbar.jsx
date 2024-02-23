import { Link } from "react-router-dom";
import Logo from "./Logo";
import Avatar from "./Avatar";

import useDashboard from "../hooks/use-dashboard";

const AdminNavbar = () => {
  const { currentPath  , navListForAdmin , handleLink} = useDashboard()
 

  return (
    <div className="flex fixed right-0 left-0 p-3 bg-secondary  px-5 justify-between items-center z-50 border-b-2 border-black min-h-[72px]">
      <div className="text-4xl font-bold  text-black">
        <Logo />
      </div>
      <div className="w-[500px] flex justify-between text-xl">
        {
          navListForAdmin.map((e)=>{
            return (
              <Link to={`/dashboard/${e.path}`} key={e.id} className={currentPath === e.path ? "link link-info" : "link"} onClick={()=>handleLink(e.path)}>{e.title}</Link>
            )
          })
        }

      </div>

      <Avatar />
    </div>
  );
};

export default AdminNavbar;
