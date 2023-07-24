import Image from "../assets/van.png";
const About = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={Image} alt="Image" srcset="" className="mt-0 w-full h-96" />
      <div className=" mt-5 w-1/2">
        <h1 className=" font-bold text-3xl ">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
      </div>
      <div className="border mt-10 w-1/2 flex flex-col items-center gap-5 ">
        <h2 className="font-medium text-base">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉).
        </h2>
        <h2 className="font-medium text-base">
          {" "}
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </h2>
      </div>
      <div className="w-1/2 border border-black p-10 mt-11 rounded-xl bg-[#FFCC8D]">
        <div className="main">
          <h1 className="text-2xl font-bold">Your destination is waiting.</h1>
          <h1 className="text-2xl font-bold">Your van is ready</h1>
          <button className="mt-8  p-3 rounded-lg bg-black text-white font-bold">
            Explore Your Vans
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
