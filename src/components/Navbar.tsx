import Logo from "../assets/logo-text.png"

const Navbar = () => {
     return (
          <div className="container mx-auto">
               <nav className="flex  justify-between gap-6 py-6">
                    <img src={Logo} alt="" />
                    <ul className="flex gap-6 items-center text-[#475569]">
                         <li><a href=""><span className="text-[#DB2777]">Home</span></a></li>
                         <li><a href="">Technologies</a></li>
                         <li><a href="">Projects</a></li>
                         <li><a href="">About</a></li>
                         <li><a href="">Contact</a></li>
                    </ul>
                    <div className="flex gap-6 items-center" >
                         <button>Sign In</button>
                         <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-full">Sign Up</button>
                    </div>
               </nav>
          </div>
     );
};

export default Navbar;