import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const Dropdown = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="flex gap-5">
      <CartButton />
      <Avatar />
    </div>
  );
};

export default Dropdown;
