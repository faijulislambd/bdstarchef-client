import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../Providers/AuthProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logout } = useContext(UserContext);

  let userName = user?.displayName;
  let userImage = user?.photoURL;

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
    toast.success("You Have Logged Out");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="navbar bg-base-100 flex-col sm:flex-row gap-8 sm:gap-0">
        <div className="navbar-start sm:w-1/2 w-full sm:justify-normal justify-center">
          <Link
            to="/"
            className="btn bg-base-200 uppercase text-3xl logo-font border-0 hover:bg-base-200 "
          >
            <span className="me-1">
              <em className="text-red-400 logo-font">B</em>
              <em className="text-green-400 logo-font">D</em>
            </span>
            ChefStars
          </Link>
        </div>
        <div className="navbar-end sm:w-1/2 w-full sm:justify-end justify-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden me-4">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:mr-3">
            <ul className="menu menu-horizontal px-1 gap-3">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          {!user ? (
            <>
              <Link to="/login" className="btn btn-primary me-3">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </>
          ) : (
            <>
              {" "}
              <div className="tooltip" data-tip={userName}>
                <div className="btn btn-ghost btn-circle hover:bg-transparent avatar ">
                  <div className="w-10 rounded-full">
                    <LazyLoadImage
                      src={
                        userImage
                          ? userImage
                          : "/assets/images/default-profile-img.jpg"
                      }
                      srcSet={
                        userImage
                          ? userImage
                          : "/assets/images/default-profile-img.jpg"
                      }
                      className="w-12 h-12 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-blue-400 ring-offset-gray-800"
                    />
                  </div>
                </div>
              </div>
              <button onClick={handleLogOut} className="ms-5 btn btn-primary">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
