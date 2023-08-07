import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="p-5 2xl:px-20">
        <div>
            <NavLink to='/'>
            <h2 className="text-3xl">
            <span className="bg-black text-white px-2 rounded-full mr-0.5">
              B
            </span>
            lackSciPioneers👨🏾‍🔬🌍
          </h2>
            </NavLink>

        </div>
        {isOpen && (
          <nav className="mt-4">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-green-500 font-bold px-2 py-1 text-white"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/web-app"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-green-500 font-bold px-2 py-1 text-white"
                      : ""
                  }
                >
                  Web App
                </NavLink>
              </li>
              <li>
                <a href="https://black-scientists-api-c34142d28576.herokuapp.com/scientists">
                  View API
                </a>
              </li>
              <li>
                <NavLink
                  to="/documentation"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-green-500 font-bold px-2 py-1 text-white"
                      : ""
                  }
                >
                  Documentation
                </NavLink>
              </li>
              <li>
                <a href="https://github.com/derrick-code11/black-scientists-api">
                  {" "}
                  GitHub Repo
                </a>
              </li>
              <li>
                <NavLink
                  to="/purpose"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-green-500 font-bold px-2 py-1 text-white"
                      : ""
                  }
                >
                  Purpose
                </NavLink>
              </li>
            </ul>
          </nav>
        )}

        <div className="absolute top-5 right-5 2xl:right-20">
          <button
            className="text-3xl 2xl:px-32"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars></FaBars>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
