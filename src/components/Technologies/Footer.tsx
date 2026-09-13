import LogoText from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className=" mt-30">
      <div className="container mx-auto py-10">

        <div className="grid grid-cols-4 gap-10">

          <div>
            <img className="w-36 mb-4" src={LogoText} alt="" />

            <p className="text-sm text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <ul className="flex gap-5 mt-5">
              <li><a href="">GitHub</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">LinkedIn</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-semibold mb-5">PRODUCT</h2>

            <ul className="flex flex-col gap-3">
              <li><a href="">Technologies</a></li>
              <li><a href="">Home</a></li>
              <li><a href="">Projects</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-semibold mb-5">COMPANY</h2>

            <ul className="flex flex-col gap-3">
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Careers</a></li>
            </ul>
          </div>


           <div className="flex flex-col items-center">
            <h2 className="font-semibold mb-5">LEGAL</h2>
              <ul className="flex flex-col gap-3">
              <li><a href="">privacy policy</a></li>
              <li><a href="">Trems of service</a></li>
            </ul>
          </div>

        </div>
       <div className="divider"></div>
        <div className=" mt-10  flex justify-between">
          <p className="text-sm text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;