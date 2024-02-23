import useAuth from "../hooks/use-auth";
import { useNavigate , Link  } from "react-router-dom";
const SubMenu = () => {
  const { authUser , logout } = useAuth();
  const navigate = useNavigate()
  return (
    <ul
      tabIndex={0}
      className="mt-3 z-[1] p-2  text-secondary shadow menu menu-sm dropdown-content bg-primary rounded-box w-60"
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
            <Link to={`/profile/edit`}>
              <h1 className="text-2xl">Edit Profile</h1>
            </Link>
          </li>
          <li>
          <Link to={`/profile/history`}>
            <h1 className="text-2xl">View Transactions</h1>
            </Link>
          </li>
          <li>
            <div
              role="button"
              onClick={() => {
                logout();
                navigate("/login");
                window.location.reload()
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
