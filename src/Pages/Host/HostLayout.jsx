import { Outlet, Link } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="flex gap-2">
        <Link to="/host">DashBoard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/Reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
