import { GiFootprint } from "react-icons/gi";
import {FaUserFriends, FaGraduationCap, FaHandsHelping, FaMicrophone,} from "react-icons/fa";
// import programsImage from "../assets/programs-image.jpg";
import programsBg from "../assets/programsbg.png";

function Programs() {
  return (
    <section
      className="font-['Rye'] text-white py-8 px-6 md:px-10 flex flex-col md:flex-row items-center gap-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${programsBg})` }}
    >
      {/* Left — Heading */}
      <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl font-black uppercase leading-tight">
          Our <br />
          <span className="text-yellow-500">Programs</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="hidden md:block self-stretch w-px bg-white opacity-20 mx-2" />

      {/* Icons */}
      <div className="flex flex-row flex-wrap justify-around gap-6 flex-1">
        <div className="flex flex-col items-center text-center gap-2">
          <GiFootprint className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">Step<br />Training</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <FaUserFriends className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">Mentorship &<br />Leadership</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <FaGraduationCap className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">College &<br />Career Exposure</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <FaHandsHelping className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">Community<br />Service</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <FaMicrophone className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">Workshops &<br />Performances</span>
        </div>
      </div>

    </section>
  );
}

export default Programs;
