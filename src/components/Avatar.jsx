import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import useAuth from "../hooks/use-auth";
const Avatar = () => {
  const { authUser } = useAuth()
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-20 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
    </div>
     <SubMenu/>
    </div>
  );
};

export default Avatar;
