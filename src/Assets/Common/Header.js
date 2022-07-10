import { Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";

const Header = () => {
  const navigate = useNavigate();
  const menuLink = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/">TO-DO</Link>
      </li>
      <li>
        <Link to="/">COMPLETE</Link>
      </li>
      <li>
        <Link to="/" className="bg">
          CALENDER
        </Link>
      </li>
    </>
  );

  const goLoin = () => {
    navigate("/logIn");
  };
  return (
    <>
      <nav className="bg-[#f6f9fd]">
        <div class="navbar container mx-auto py-3">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <i class="fa-solid fa-arrows-to-eye text-3xl"></i>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
              >
                {menuLink}
              </ul>
            </div>
            <p
              to="/"
              class="cursor-pointer text-3xl text-blue-400 font-bold siteName"
            >
              Take<span>T</span>ask
            </p>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0 font-bold text-purple-800">
              {menuLink}
            </ul>
          </div>
          <div class="navbar-end">
            <button onClick={goLoin} className="log-btn">
              <i class="fa-solid fa-arrow-right-from-bracket"></i> LogIn
            </button>
          </div>
        </div>
      </nav>

      <Home />
    </>
  );
};

export default Header;
