import { useState } from "react";
import { FiMenu } from "react-icons/fi"
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }


  return (
    <div className="containiner mx-auto font-roboto">
      <nav className="hidden md:flex md:justify-between md:items-center md:mx-auto md:max-w-[1200px] md:my-8 md:px-8">
        <div>
          <img src="images/Frame 246 (2).png" alt="" />
        </div>
        <ul className="flex items-center gap-4 md:text-[15px] font-light md:gap-8">
          <li>Features</li>
          <li>How it started</li>
        </ul>
        <div>
          <Link to="/auth">
          <button className=" font-medium text-[16px]">Get Started</button>
          </Link>
        </div>
      </nav>
      
      <nav className="md:hidden my-6">
        <div className="flex justify-between items-center mx-6">
          <img src="images/Frame 246 (2).png" alt="" className=" cursor-pointer"/>
          <div className="text-2xl cursor-pointer" onClick={handleMenu}>
           <FiMenu />
          </div>
        </div>
        <ul className={`${isOpen ? "text-center bg-primar-300 w-full h-[200px] transition-all ease-out divide-purple-300 text-white pt-16 mt-2" : "hidden"}`}>
          <li className="mb-4">Features</li>
          <li>How it started</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
