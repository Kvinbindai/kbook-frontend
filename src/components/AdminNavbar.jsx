import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import useAuth from "../hooks/use-auth";

const Navbar = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex fixed right-0 left-0 p-3 bg-white  px-5 justify-between items-center z-50 border-b-2 border-black min-h-[72px]">
      <div className="text-4xl font-bold  text-black">
        <Logo />
      </div>
      <div className="w-[500px]">
        <SearchBar />
      </div>

      {authUser ? (
        <Dropdown />
      ) : (
        <div>
          <Link to="/login">
            <Button>LOG IN</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
