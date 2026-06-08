import { GiFootprint } from "react-icons/gi";
import {FaUserFriends, FaGraduationCap, FaHandsHelping, FaMicrophone,} from "react-icons/fa";
// import programsImage from "../assets/programs-image.jpg";
import programsBg from "../assets/program_background.png";
import heroImage from "../assets/kk-nationals.JPEG";

function Programs() {
  return (
    <section
      className="text-white py-8 px-6 md:px-10 flex flex-col md:flex-row items-center gap-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${programsBg})` }}
    >
      {/* Left — Heading */}
      <div className="shrink-0">
        <h2 className="text-4xl font-black uppercase leading-tight"> Our <br /> <span className="text-yellow-500">Programs</span> </h2>
      </div>

      {/* Divider */}
      <div className="hidden md:block self-stretch w-px bg-white opacity-20 mx-2" />

      {/* Middle — Icons */}
      <div className="flex flex-row flex-wrap justify-center gap-6 flex-1">
        <div className="flex flex-col items-center text-center gap-2">
          <GiFootprint className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">
            Step
            <br />
            Training
          </span>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <FaUserFriends className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">
            Mentorship &<br />
            Leadership
          </span>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <FaGraduationCap className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">
            College &<br />
            Career Exposure
          </span>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <FaHandsHelping className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">
            Community
            <br />
            Service
          </span>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <FaMicrophone className="text-yellow-500 text-4xl" />
          <span className="text-xs font-bold uppercase tracking-wider leading-tight">
            Workshops &<br />
            Performances
          </span>
        </div>
      </div>

      {/* Right — Image with text overlay */}
      <div className="relative shrink-0 w-full md:w-64 h-32 overflow-hidden">
        <img
          src={heroImage}
          alt="Kreative Kollective team"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40" />
        <p className="absolute bottom-3 right-3 text-right font-black italic leading-tight">
          More than <br />a team. <br />
          <span className="text-yellow-500 text-xl">A KOLLECTIVE.</span>
        </p>
      </div>
    </section>
  );
}

export default Programs;
