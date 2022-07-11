import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const menuLink = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/toDo">TO-DO</Link>
      </li>
      <li>
        <Link to="/complete">COMPLETE</Link>
      </li>
      <li>
        <Link to="/calender" className="bg">
          CALENDER
        </Link>
      </li>
    </>
  );

  const goLoin = () => {
    navigate("/logIn");
  };

  const goLogOut = () => {
    signOut(auth);
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
            {user ? (
              <>
                <button onClick={goLogOut} className="log-btn">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> LogOut
                </button>
              </>
            ) : (
              <>
                <button onClick={goLoin} className="log-btn">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> LogIn
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
