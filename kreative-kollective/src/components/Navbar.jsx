import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Update to IMAGE LATER*/}
          <div className="flex items-center gap-3">
            <div className="text-red-600 text-4xl font-black">KK</div>

            <div>
              <h1 className="font-bold uppercase tracking-wide">Kreative</h1>

              <p className="text-xs text-zinc-400 uppercase">Kollective</p>
            </div>
          </div>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase whitespace-nowrap">
            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                HOME
              </a>
            </li>

            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                ABOUT
              </a>
            </li>

            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                TEAMS
              </a>
            </li>

            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                PROGRAMS
              </a>
            </li>

            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                JOIN KK
              </a>
            </li>

            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                EVENTS
              </a>
            </li>

            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                BOOK US
              </a>
            </li>

            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                DONATE
              </a>
            </li>

            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                GALLERY
              </a>
            </li>

            <li>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-red-600 hover:text-red-600 pb-2"
              >
                CONTACT
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="lg:hidden">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
