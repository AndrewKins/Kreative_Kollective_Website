import { Link } from "react-router-dom";
import { useState } from "react";
import kklogo from "../assets/kreative_kollective_logo_transparent.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/teams", label: "Teams" },
    { to: "/events", label: "Events" },
    { to: "/bookus", label: "Book Us" },
    { to: "/donate", label: "Donate" },
    { to: "/contact", label: "Contact" },
  ];

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="font-['Rye'] bg-black text-white border-b border-zinc-800 relative z-50">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3 flex-1">
            <img src={kklogo} alt="Kreative Kollective logo" className="h-20 w-20 object-contain" />
          </div>

          {/* Hamburger Button — morphs into X */}
          <button
            className="lg:hidden relative z-50 h-8 w-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/70 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "80px" }}
        onClick={closeMenu}
      />

      {/* Mobile Menu — slides down and fades */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black border-t border-zinc-800 overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {navItems.map((item, index) => (
            <li
              key={item.to}
              className={`border-b border-zinc-900 last:border-none transition-all duration-300 ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 60}ms` : "0ms" }}
            >
              <Link
                to={item.to}
                onClick={closeMenu}
                className="block py-4 text-base font-semibold uppercase tracking-wide hover:text-red-600 hover:pl-2 transition-all duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;