import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import useAuth from "../hooks/use-auth";
import profile from '../assets/profile.png'
const Avatar = () => {
  const { authUser } = useAuth()
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-20 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src={authUser.profileImage ? authUser.profileImage : profile }
        />
      </div>
    </div>
     <SubMenu/>
    </div>
  );
};

export default Avatar;
