import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Contact Us */}
        <div>
          <h3 className="text-yellow-500 font-black uppercase text-sm tracking-wider mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white shrink-0" />
              info@kreativekollective.org
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-white shrink-0" />
              347-273-0720
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white shrink-0" />
              Brooklyn, NY | Bronx, NY
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            <FaInstagram className="text-2xl hover:text-yellow-500 cursor-pointer transition-colors" />
            <FaFacebookF className="text-2xl hover:text-yellow-500 cursor-pointer transition-colors" />
            <FaYoutube className="text-2xl hover:text-yellow-500 cursor-pointer transition-colors" />
            <FaTiktok className="text-2xl hover:text-yellow-500 cursor-pointer transition-colors" />
            <FaTwitter className="text-2xl hover:text-yellow-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h3 className="text-yellow-500 font-black uppercase text-sm tracking-wider mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-300">
            <a href="/about" className="hover:text-yellow-500 transition-colors">About Us</a>
            <a href="/events" className="hover:text-yellow-500 transition-colors">Events</a>
            <a href="/teams" className="hover:text-yellow-500 transition-colors">Our Teams</a>
            <a href="/book-us" className="hover:text-yellow-500 transition-colors">Book Us</a>
            <a href="/programs" className="hover:text-yellow-500 transition-colors">Programs</a>
            <a href="/donate" className="hover:text-yellow-500 transition-colors">Donate</a>
            <a href="/join" className="hover:text-yellow-500 transition-colors">Join KK</a>
            <a href="/contact" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>
        </div>

        {/* Col 3 — Stay Connected */}
        <div>
          <h3 className="text-yellow-500 font-black uppercase text-sm tracking-wider mb-4">Stay Connected</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Follow us on social media and stay updated on events, performances, and more!
          </p>
        </div>

        {/* Col 4 — Brand */}
        <div className="flex flex-col justify-center">
          <p className="font-black uppercase text-2xl leading-tight">
            <span className="text-red-600">Kreative</span> Kollective
          </p>
          <p className="text-yellow-500 text-xs uppercase tracking-widest mt-2 font-bold">
            Step. Lead. Create. Ascend.
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-zinc-800 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Kreative Kollective. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;