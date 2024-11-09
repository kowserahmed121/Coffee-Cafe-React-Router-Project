import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 py-8 -ml-2  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-6 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-warning font-semibold" : "hover:text-warning"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/coffees"
              className={({ isActive }) =>
                `${
                  isActive ? "text-warning font-semibold" : "hover:text-warning"
                }`
              }
            >
              Coffee
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${
                  isActive ? "text-warning font-semibold" : "hover:text-warning"
                }`
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          Coffee Cafe
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-8 px-1 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-warning font-semibold" : "hover:text-warning"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/coffees"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-warning font-semibold" : "hover:text-warning"
              }`
            }
          >
            Coffee
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-warning font-semibold" : "hover:text-warning"
              }`
            }
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
