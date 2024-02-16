import { Link } from "react-router-dom";
const Avatar = () => {
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
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
      >
        <li>
          <Link>
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
              navigate("/");
            }}
            className="text-2xl"
          >
            Logout
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
