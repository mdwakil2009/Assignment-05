import BannerImage from "../assets/banner-stack.png"
const Banner = () => {
  return (
    <div className="flex items-center justify-between container mx-auto">
      <div>
        <h1 className="text-5xl font-bold">Build Your Ideal <br /> 
        <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Development Stack</span></h1>
        <p className="mt-8">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
        <div className=" mt-8 flex items-center gap-4">  
        <button className="bg-linear-to-r from-[#EC4899] to-[#F97316] text-white px-4 py-2 rounded-md ">Explore Technologies</button>
        <button className=" border px-4 py-2 rounded-md btn">Learn More</button>
        </div>
      </div>
      <img src={BannerImage} alt="" />
    </div>
  );
};

export default Banner;
