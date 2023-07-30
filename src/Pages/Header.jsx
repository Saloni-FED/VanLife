import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Header = () => {
  return (
    <>
      <div className=" border border-black display flex justify-between ">
        <div className="w-36 h-10 m-8">
          <NavLink to="/">
            <h1 className="font-black text-3xl">#VanLife</h1>
          </NavLink>
        </div>
        <nav className="main display flex gap-5   w-32 h-5 mr-8 mt-10">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-bold " : "text-gray-500"
            }
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-bold " : "text-gray-500"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-bold " : "text-gray-500"
            }
          >
            Vans
          </NavLink>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
export default Header;
