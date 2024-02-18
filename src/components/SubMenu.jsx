import useAuth from "../hooks/use-auth";
import { useNavigate ,Link } from "react-router-dom";
const SubMenu = () => {
  const { authUser , logout } = useAuth();
  const navigate = useNavigate()
  return (
    <ul
      tabIndex={0}
      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
    >
      {authUser?.role === "ADMIN" ? (
        <>
          <li>
            <div
              role="button"
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="text-2xl"
            >
              Logout
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/">
              <h1 className="text-2xl">Edit Profile</h1>
            </Link>
          </li>
          <li>
            <a className="text-2xl">View Transactions</a>
          </li>
          <li>
            <div
              role="button"
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="text-2xl"
            >
              Logout
            </div>
          </li>
        </>
      )}
    </ul>
  );
};

export default SubMenu;
