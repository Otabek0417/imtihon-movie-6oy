import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FcLike } from "react-icons/fc";
import { CiUser } from "react-icons/ci";
<CiUser />;
function Navbar() {
  const { state } = useGlobalContext();

  return (
    <header className="pt-2 pb-2 shadow-lg shadow-indigo-500/40">
      <div className="cite-conotainer flex items-center justify-between">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              Movies
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FcLike className="text-2xl" />
                  <span className="badge badge-sm indicator-item">
                    {state.length}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-50 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body ">
                  <span className="font-bold text-lg">
                    {state.length} Items
                  </span>
                  <div className="card-actions">
                    <Link to="/favourite" className="btn btn-primary btn-block">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-10 rounded-full">
                  <CiUser className="text-4xl" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/login" className="justify-between">
                    Login
                    {/* <span className="badge">New</span> */}
                  </Link>
                </li>

                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
