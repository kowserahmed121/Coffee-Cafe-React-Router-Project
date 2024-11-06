import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 py-8 -ml-2">
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
            <Link to="/">Home</Link>
            <Link className="my-2" to="/coffees">
              Coffees
            </Link>
            <Link to="/dashboard">Dashboard</Link>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          Coffee Cafe
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-8 px-1 text-xl">
          <Link to="/">Home</Link>
          <Link to="/coffees">Coffees</Link>
          <Link to="/dashboard">Dashboard</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
