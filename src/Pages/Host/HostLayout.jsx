import { Outlet, NavLink } from "react-router-dom";
const HostLayout = () => {
  return (
    <>
      <nav className="flex gap-2">
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-200" : null)}
          end
          to="/host"
        >
          DashBoard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-200" : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-200" : null)}
          to="/host/vansDetail"
        >
          Vans
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-red-200" : null)}
          to="/host/Reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
