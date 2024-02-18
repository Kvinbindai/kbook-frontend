import useAuth from "../hooks/use-auth";
import Avatar from "./Avatar";
import CartButton from "./CartButton";

const Dropdown = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex gap-5">
      {authUser?.role === "ADMIN" ? (
        <Avatar />
      ) : (
        <>
          <CartButton />
          <Avatar />
        </>
      )}
    </div>
  );
};

export default Dropdown;
