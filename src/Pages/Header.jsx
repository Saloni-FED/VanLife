 import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" border border-black display flex justify-between ">
      <div className="w-36 h-10 m-8">
       <Link to='/'><h1 className="font-black text-3xl">#VanLife</h1></Link> 
      </div>

      <nav className="main display flex gap-5   w-32 h-5 mr-8 mt-10">
        <Link to="/about" className='text-base text-gray-700'>Home</Link>
        <Link to="/vans" className='text-base text-gray-700'>Vans</Link>
      </nav>
    </div>
  );
};
export default Header;
