import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="px-5 py-10">
        <nav className="mt-4">
          <ul className="md:flex md:items-center md:justify-center sm: grid grid-cols-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 font-bold px-2 py-1 text-white" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/web-app"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 font-bold px-2 py-1 text-white" : ""
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
                  isActive ? "bg-green-500 font-bold px-2 py-1 text-white" : ""
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
                  isActive ? "bg-green-500 font-bold px-2 py-1 text-white" : ""
                }
              >
                Purpose
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
