import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">

     
          <button className="md:hidden text-2xl">
            <RxHamburgerMenu />
          </button>

          <img src={Logo} alt="" className="w-24 sm:w-28 md:w-auto" />

     
          <ul className=" md:flex items-center gap-4 lg:gap-6 text-[#475569] hidden">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>


          <div className="flex item-center gap-3 border-no lg:gap-6 ">
            <button className="hidden md:block">
              Sign In
            </button>

            <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-full">
              Sign Up
            </button>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;