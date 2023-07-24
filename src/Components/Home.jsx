import Image from "../assets/img.png";
const Home = () => {
  return (
    <div className="w-full  flex justify-center items-center h-96 px-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="w-96 h-64 ">
        <div className="h1">
          <h1 className='text-white font-extrabold text-3xl'>You got the travel plans, we got the travel vans</h1>
        </div>
        <div className=" mt-5 h-1/2 flex flex-col  gap-11">
          <h1 className='text-white font-medium'>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </h1>
          <button className=" w-full bg-orange-400 py-3 text-white font-medium rounded">Find Your Van</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
