import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import kontrolCompImage from "../assets/kreative_kontrol_komp.JPG";
import kaliberCompImage from "../assets/kreative_kaliber_komp.JPG";
import kingzCompImage from "../assets/kreative_kingz_photo.JPG";

function useInView() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

function Teams() {
  const [kontrolRef, kontrolInView] = useInView();
  const [kaliberRef, kaliberInView] = useInView();
  const [kingzRef, kingzInView] = useInView();

  return (
    <section className="font-['Rye'] bg-black text-white py-16 px-6 md:px-12 overflow-x-hidden">
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
        {/* Kreative Kontrol — slams in from the left */}
        <div
          ref={kontrolRef}
          className={`group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-lg shadow-black/60 ring-1 ring-red-600/0 transition-all duration-500 ease-out active:ring-red-600 active:shadow-2xl active:shadow-red-600/40 hover:-translate-y-2 hover:ring-red-600/50 hover:shadow-2xl hover:shadow-red-600/20 ${
            kontrolInView
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 -translate-x-24 -rotate-6"
          }`}
          style={{
            transitionTimingFunction: kontrolInView
              ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
              : undefined,
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 origin-left transition-transform duration-700 delay-300 z-10"
            style={{ transform: kontrolInView ? "scaleX(1)" : "scaleX(0)" }}
          />

          <img
            src={kontrolCompImage}
            className="w-full h-[300px] object-cover border-b-2 border-red-600 transition-transform duration-500 group-hover:scale-105 group-active:scale-110"
            alt="Kreative Kontrol"
          />

          <div className="flex flex-col items-center text-center p-6">
            <h3 className="text-xl font-black uppercase">KREATIVE KONTROL</h3>
            <p className="text-red-500 font-bold uppercase text-sm tracking-wider mt-1">
              Middle School Co-Ed
            </p>
            <p className="text-gray-300 text-sm mt-2">Grades 6-8</p>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              Building the Foundation, Learning Discipline & Teamwork.
            </p>
            <Link
              to="/teams?team=kontrol"
              className="mt-5 rounded-full border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-2 text-sm transition-all duration-150 hover:bg-white hover:text-black active:scale-90 active:bg-red-600 active:border-red-600 active:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Kreative Kaliber — slams in from the bottom */}
        <div
          ref={kaliberRef}
          className={`group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-lg shadow-black/60 ring-1 ring-yellow-500/0 transition-all duration-500 ease-out active:ring-yellow-500 active:shadow-2xl active:shadow-yellow-500/40 hover:-translate-y-2 hover:ring-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20 ${
            kaliberInView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-20 scale-90"
          }`}
          style={{
            transitionTimingFunction: kaliberInView
              ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
              : undefined,
            transitionDelay: kaliberInView ? "120ms" : "0ms",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-yellow-500 origin-left transition-transform duration-700 delay-500 z-10"
            style={{ transform: kaliberInView ? "scaleX(1)" : "scaleX(0)" }}
          />

          <img
            src={kaliberCompImage}
            alt="Kreative Kaliber"
            className="w-full h-[300px] object-cover border-b-2 border-yellow-500 transition-transform duration-500 group-hover:scale-105 group-active:scale-110"
          />

          <div className="flex flex-col items-center text-center p-6">
            <h3 className="text-xl font-black uppercase">KREATIVE KALIBER</h3>
            <p className="text-red-500 font-bold uppercase text-sm tracking-wider mt-1">
              High School Co-Ed
            </p>
            <p className="text-gray-300 text-sm mt-2">Grades 9-12</p>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              Elevating Skill, Leadership & Performance at the Highest Level.
            </p>
            <Link
              to="/teams?team=kaliber"
              className="mt-5 rounded-full border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-2 text-sm transition-all duration-150 hover:bg-white hover:text-black active:scale-90 active:bg-yellow-500 active:border-yellow-500 active:text-black"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Kreative Kingz — slams in from the right */}
        <div
          ref={kingzRef}
          className={`group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-lg shadow-black/60 ring-1 ring-white/0 transition-all duration-500 ease-out active:ring-white active:shadow-2xl active:shadow-white/30 hover:-translate-y-2 hover:ring-white/40 hover:shadow-2xl hover:shadow-white/10 ${
            kingzInView
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 translate-x-24 rotate-6"
          }`}
          style={{
            transitionTimingFunction: kingzInView
              ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
              : undefined,
            transitionDelay: kingzInView ? "240ms" : "0ms",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-white origin-left transition-transform duration-700 delay-700 z-10"
            style={{ transform: kingzInView ? "scaleX(1)" : "scaleX(0)" }}
          />

          <img
            src={kingzCompImage}
            className="w-full h-[300px] object-cover border-b-2 border-white transition-transform duration-500 group-hover:scale-105 group-active:scale-110"
            alt="Kreative Kingz"
          />

          <div className="flex flex-col items-center text-center p-6">
            <h3 className="text-xl font-black uppercase">KREATIVE KINGZ</h3>
            <p className="text-red-500 font-bold uppercase text-sm tracking-wider mt-1">
              All Male Team
            </p>
            <p className="text-gray-300 text-sm mt-2">Grades 6-12</p>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              Developing Young Men of Character, Strength & Excellence.
            </p>
            <Link
              to="/teams?team=kingz"
              className="mt-5 rounded-full border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-2 text-sm transition-all duration-150 hover:bg-white hover:text-black active:scale-90 active:bg-white active:text-black"
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
