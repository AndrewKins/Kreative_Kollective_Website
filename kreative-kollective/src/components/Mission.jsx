import { FaCrown, FaTrophy, FaShieldAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

function Mission() {
  return (
    <section className="bg-gradient-to-br from-black via-zinc-900 to-stone-800 text-white py-6 px-6 md:px-10">
    {/* Mission Section with Dark Smoky Background */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Main layout: stacks on mobile, sits side by side on desktop */}
        <div className="md:w-1/4 shrink-0 flex flex-col items-center text-center md:items-start md:text-left">
        {/* Mission text: centered on mobile, left-aligned on desktop */}
          <FaCrown className="text-yellow-500 text-3xl mb-2" />
          <h2 className="text-3xl font-black uppercase">
            Our <span className="text-yellow-500">Mission</span>
          </h2>
          <p className="mt-3 text-gray-300 leading-relaxed text-sm">
            Kreative Kollective is a youth arts organization empowering young
            people through step, mentorship, leadership, and community. We build
            character, confidence, and champions both on and off the stage.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block self-stretch w-px bg-yellow-500 opacity-40" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-around flex-1 gap-6 md:gap-0">

          <div className="flex flex-col items-center text-center px-4">
            <FaTrophy className="text-yellow-500 text-3xl mb-2" />
            <span className="text-4xl font-black">3X</span>
            <span className="text-yellow-500 font-bold uppercase text-xs tracking-wider mt-1 leading-tight">
              National<br />Champions
            </span>
          </div>

          <div className="hidden md:block self-stretch w-px bg-yellow-500 opacity-40" />

          <div className="flex flex-col items-center text-center px-4">
            <FaShieldAlt className="text-yellow-500 text-3xl mb-2" />
            <span className="text-white font-black uppercase text-sm tracking-wide leading-tight">Multiple-Time</span>
            <span className="text-yellow-500 font-bold uppercase text-xs tracking-wider mt-1 leading-tight">
              Battle of<br />the Thrones<br />Champions
            </span>
          </div>

          <div className="hidden md:block self-stretch w-px bg-yellow-500 opacity-40" />

          <div className="flex flex-col items-center text-center px-4">
            <FaUsers className="text-yellow-500 text-3xl mb-2" />
            <span className="text-4xl font-black">40+</span>
            <span className="text-yellow-500 font-bold uppercase text-xs tracking-wider mt-1 leading-tight">
              Youth Served<br />Annually
            </span>
          </div>

          <div className="hidden md:block self-stretch w-px bg-yellow-500 opacity-40" />

          <div className="flex flex-col items-center text-center px-4">
            <FaMapMarkerAlt className="text-yellow-500 text-3xl mb-2" />
            <span className="text-4xl font-black">NYC</span>
            <span className="text-yellow-500 font-bold uppercase text-xs tracking-wider mt-1 leading-tight">
              Based Community<br />Program
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Mission;