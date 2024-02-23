import { useEffect } from "react";
import useAuth from "../hooks/use-auth";
import Avatar from "./Avatar";
import CartButton from "./CartButton";
import Toggle from "./Toggle";
const Dropdown = () => {
  const { authUser, fetchUser, refresh } = useAuth();
  useEffect(() => {
    fetchUser();
  }, [refresh]);
  return (
    <div className="flex gap-5 text-primary items-center">
      {authUser?.role === "ADMIN" ? (
        <Avatar />
      ) : (
        <>
          <Toggle />
          <CartButton />
          <Avatar />
        </>
      )}
    </div>
  );
};

export default Dropdown;
