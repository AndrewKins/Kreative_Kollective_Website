import { Link } from "react-router-dom";

import kontrolCompImage from "../assets/kreative_kontrol_komp.JPG";
import kaliberCompImage from "../assets/kreative_kaliber_komp.JPG";
import kingzCompImage from "../assets/kreative_kingz_photo.JPG";

function Teams() {
  return (
    <section className="font-['Rye'] bg-black text-white py-16 px-6 md:px-12">
      {/* Header with golden lines */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-yellow-500" />

        <h2 className="text-3xl font-black uppercase">
          OUR <span className="text-red-600">TEAMS</span>
        </h2>

        <div className="flex-1 h-px bg-yellow-500" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kreative Kontrol */}
        <div className="group rounded-2xl overflow-hidden bg-black border border-zinc-800 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-950/40">
          <img
            src={kontrolCompImage}
            className="w-full h-[300px] object-cover border-b-2 border-red-600 transition-transform duration-500 group-hover:scale-105"
            alt="Kreative Kontrol"
          />

          <div className="flex flex-col items-center text-center p-6">
            <h3 className="text-xl font-black uppercase">
              KREATIVE KONTROL
            </h3>

            <p className="text-red-500 font-bold uppercase text-sm tracking-wider mt-1">
              Middle School Co-Ed
            </p>

            <p className="text-gray-300 text-sm mt-2">Grades 6-8</p>

            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              Building the Foundation, Learning Discipline & Teamwork.
            </p>

            <Link
              to="/teams?team=kontrol"
              className="mt-5 rounded-full border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Kreative Kaliber */}
        <div className="group rounded-2xl overflow-hidden bg-black border border-zinc-800 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-950/40">
          <img
            src={kaliberCompImage}
            alt="Kreative Kaliber"
            className="w-full h-[300px] object-cover border-b-2 border-yellow-500 transition-transform duration-500 group-hover:scale-105"
          />

          <div className="flex flex-col items-center text-center p-6">
            <h3 className="text-xl font-black uppercase">
              KREATIVE KALIBER
            </h3>

            <p className="text-red-500 font-bold uppercase text-sm tracking-wider mt-1">
              High School Co-Ed
            </p>

            <p className="text-gray-300 text-sm mt-2">Grades 9-12</p>

            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              Elevating Skill, Leadership & Performance at the Highest Level.
            </p>

            <Link
              to="/teams?team=kaliber"
              className="mt-5 rounded-full border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Kreative Kingz */}
        <div className="group rounded-2xl overflow-hidden bg-black border border-zinc-800 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-700/40">
          <img
            src={kingzCompImage}
            className="w-full h-[300px] object-cover border-b-2 border-white transition-transform duration-500 group-hover:scale-105"
            alt="Kreative Kingz"
          />

          <div className="flex flex-col items-center text-center p-6">
            <h3 className="text-xl font-black uppercase">
              KREATIVE KINGZ
            </h3>

            <p className="text-red-500 font-bold uppercase text-sm tracking-wider mt-1">
              All Male Team
            </p>

            <p className="text-gray-300 text-sm mt-2">Grades 6-12</p>

            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              Developing Young Men of Character, Strength & Excellence.
            </p>

            <Link
              to="/teams?team=kingz"
              className="mt-5 rounded-full border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teams;