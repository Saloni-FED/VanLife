 import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" border border-black display flex justify-between ">
      <div className="w-36 h-10 m-8">
        <h1 className="font-black text-3xl">#VanLife</h1>
      </div>

      <nav className="main display flex gap-5   w-32 h-5 mr-8 mt-10">
        <Link to="/" className='text-base text-gray-700'>Home</Link>
        <Link to="/about" className='text-base text-gray-700'>About</Link>
      </nav>
    </div>
  );
};
export default Header;
