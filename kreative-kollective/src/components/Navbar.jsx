import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import kklogo from "../assets/kreative_kollective_logo_transparent.png"



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" font-['Rye'] bg-black text-white border-b border-zinc-800">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">


          {/* Logo - Update to IMAGE LATER*/}
          <div className="flex items-center gap-3 flex-1">
            <img src={kklogo} alt="Kreative Kollective logo" className="h-20 w-20 object-contain" />
            {/* <div>
              <h1 className="font-bold uppercase tracking-wide">Kreative</h1>
              <p className="text-xs textred-400 uppercase">Kollective</p>
            </div> */}
          </div>


           {/* Hamburger Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>


          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase whitespace-nowrap">
            <li> <Link to="/" className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2">Home</Link></li>
            <li> <Link to="/about" className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2">About</Link></li>
            <li> <Link to="/teams" className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2">Teams</Link></li>
            {/* <li> <Link to="/programs" className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2">Programs</Link></li> */}
            <li> <Link to="/events" href="#" className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2">Events</Link></li>
            <li> <Link to="/bookus" className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2">Book Us</Link></li>
            <li> <Link to="/donate" className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2">Donate</Link></li>
            {/* <li><a href="#" className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2">Gallery</a></li> */}
            <li><Link to="/contact" className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2">Contact</Link></li>
          </ul>


        </div>
      </div>

           {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-zinc-800 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-semibold uppercase">
            <li> <Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
            <li> <Link to="/about" className="hover:text-red-600 transition-colors">About</Link></li>
            <li> <Link to="/teams" className="hover:text-red-600 transition-colors">Teams</Link></li>
            {/* <li> <Link to="/programs" className="hover:text-red-600 transition-colors">Programs</Link></li> */}
            {/* <li><a href="#" className="hover:text-red-600 transition-colors">Join KK</a></li> */}
            <li> <Link to="/events" className="hover:text-red-600 transition-colors">Events</Link></li>
            <li> <Link to="/bookus" className="hover:text-red-600 transition-colors">Book Us</Link></li>
            <li> <Link to="/donate" className="hover:text-red-600 transition-colors">Donate</Link></li>
            {/* <li><a href="#" className="hover:text-red-600 transition-colors">Gallery</a></li> */}
            <li> <Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
      )}


      
    </nav>
  );
}

export default Navbar;
