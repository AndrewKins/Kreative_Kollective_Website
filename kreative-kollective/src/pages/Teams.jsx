import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import kontrollogo from "../assets/kreative_kontrol_logo_transparent.png";
import kaliberlogo from "../assets/kreative_kaliber_logo_transparent.png";
import kingzlogo from "../assets/kreative_kingz_logo_transparent.png";

import kontrolgalleryOne from "../assets/kreative_kontrol_gallery.JPEG";
import kontrolgalleryTwo from "../assets/kontrol_gallery_2.JPEG";
import kontrolgalleryThree from "../assets/kontrol_gallery_3.JPEG";

import kalibergalleryOne from "../assets/kaliber_gallery_1.JPG";
import kalibergalleryTwo from "../assets/kaliber_gallery_2.JPEG";
import kalibergalleryThree from "../assets/kaliber_gallery_3.JPG";

import kingzgalleryOne from "../assets/kingz_gallery_1.JPG";
import kingzgalleryTwo from "../assets/kingz_gallery_2.JPG";
import kingzgalleryThree from "../assets/kingz_gallery_3.JPG";

const validTeams = ["kontrol", "kaliber", "kingz"];

function Teams() {
  const [searchParams] = useSearchParams();

  const teamFromUrl = searchParams.get("team");

  const [activeTeam, setActiveTeam] = useState(
    validTeams.includes(teamFromUrl) ? teamFromUrl : "kontrol"
  );

  const [activePhoto, setActivePhoto] = useState(0);

  const teams = {
    kontrol: {
      label: "Kreative Kontrol",
      logo: kontrollogo,
      title: "The Story of Kreative Kontrol",
      division: "Middle School Division",
      grades: "Grades 5–8",
      teamType: "Co-Ed Team",
      logoLabel: "Kreative Kontrol Logo",
      principles: ["Knowledge", "Optimism", "Never Be Normal", "Transcendence", "Respect", "Opulence", "Leadership"  ],
      story: [
        "Founded in 2021, Kreative Kontrol is the founding team of Kreative Kollective, serving students in grades 5-8. ",

        "Through stepping, mentorship, leadership development, and community engagement, Kontrol empowers young people to become confident performers, leaders, and changemakers.",
        
        "Through Kreative Kontrol, students learn that step is more than choreography. It is culture, focus, unity, and expression. The team gives young performers the opportunity to build confidence, represent their community, and grow as leaders both on and off the stage.",
      ],
      photos: [kontrolgalleryOne, kontrolgalleryTwo, kontrolgalleryThree],
    },

    kaliber: {
      label: "Kreative Kaliber",
      logo: kaliberlogo,
      title: "The Story of Kreative Kaliber",
      division: "High School Division",
      grades: "Grades 9–12",
      teamType: "Co-Ed Team",
      logoLabel: "Kreative Kaliber Logo",
      principles: ["Knowledge", "Ambition", "Leadership", "Integrity", "Boldness","Excellence", "Resilience"],
      story: [
        "Kreative Kaliber is the co-ed high school performance team of Kreative Kollective and the proud 2026 House Party National Step Show Champions.",
        
        "Comprised of talented and dedicated student performers, the team exemplifies excellence through advanced stepping, leadership, discipline, and artistic expression.",

        "As champions, Kreative Kaliber represents the next generation of performers who are committed to teamwork, creativity, and community impact. Their achievements on the national stage reflect countless hours of hard work, perseverance, and a shared passion for the art of stepping.",
      ],
      photos: [kalibergalleryOne, kalibergalleryTwo , kalibergalleryThree],
    },

    kingz: {
      label: "Kreative Kingz",
      logo: kingzlogo,
      title: "The Story of Kreative Kingz",
      division: "All Divisions",
      grades: "Grades 6–12",
      teamType: "All Boys Team",
      logoLabel: "Kreative Kingz Logo",
      principles: ["Knowledge ", "Innovation ", "Nobility", "Greatness", "Zeal"],
      story: [
        "Kreative Kingz was created to give young men a space to build discipline, confidence, brotherhood, and leadership through step.",
        "This team focuses on strength, precision, accountability, and unity. Through step, members learn how to carry themselves with pride, support one another, and develop the confidence to lead both on and off the stage.",
        "Kreative Kingz represents more than performance. It is a brotherhood built on respect, growth, and purpose. The team gives young men a place to be challenged, celebrated, and developed into leaders.",
      ],
      photos: [kingzgalleryOne, kingzgalleryTwo, kingzgalleryThree],
    },
  };

  const currentTeam = teams[activeTeam];

  function handleTeamChange(teamKey) {
    setActiveTeam(teamKey);
    setActivePhoto(0);
  }

  function nextPhoto() {
    setActivePhoto((prevPhoto) =>
      prevPhoto === currentTeam.photos.length - 1 ? 0 : prevPhoto + 1
    );
  }

  function previousPhoto() {
    setActivePhoto((prevPhoto) =>
      prevPhoto === 0 ? currentTeam.photos.length - 1 : prevPhoto - 1
    );
  }

  return (
    <section className="font-['Rye'] bg-black text-white px-6 py-16 md:px-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Page Intro */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
            Our <span className="text-red-600">Teams</span>
          </h1>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Each team within Kreative Kollective has its own identity, story,
            division, and purpose. Explore each team to learn who they serve,
            what they stand for, and how they help young people grow through
            step.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12 border-b border-zinc-800 pb-6">
          {Object.keys(teams).map((teamKey) => (
            <button
              key={teamKey}
              onClick={() => handleTeamChange(teamKey)}
              className={`px-5 py-3 uppercase font-black text-sm tracking-wide border transition-colors ${
                activeTeam === teamKey
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-red-600 hover:text-white"
              }`}
            >
              {teams[teamKey].label}
            </button>
          ))}
        </div>

        {/* Team Profile */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          {/* Team Info Panel */}
          <div className="bg-zinc-950 border border-zinc-800 p-6 md:p-8">
            {/* Logo Placeholder */}
            <div className="bg-black border border-zinc-800 h-[220px] mb-8 flex items-center justify-center overflow-hidden">
              {/* Add logo later */}
              
              <img
                src={currentTeam.logo}
                alt={`${currentTeam.label} logo`}
                className="max-h-full max-w-full object-contain p-6"
              />
             

             
            </div>

            <p className="text-yellow-500 uppercase tracking-[0.25em] font-bold text-sm mb-3">
              {currentTeam.division}
            </p>

            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">
              {currentTeam.label}
            </h2>

            {/* Team Details */}
            <div className="space-y-4 mb-8">
              <div className="border-t border-zinc-800 pt-4">
                <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-1">
                  Grades Served
                </p>
                <p className="text-white font-bold">{currentTeam.grades}</p>
              </div>

              <div className="border-t border-zinc-800 pt-4">
                <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-1">
                  Team Type
                </p>
                <p className="text-white font-bold">{currentTeam.teamType}</p>
              </div>

              <div className="border-t border-zinc-800 pt-4">
                <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-1">
                  Division
                </p>
                <p className="text-white font-bold">{currentTeam.division}</p>
              </div>
            </div>

            {/* Principles */}
            <div>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-4">
                Team Principles
              </p>

              <div className="grid grid-cols-2 gap-3">
                {currentTeam.principles.map((principle) => (
                  <div
                    key={principle}
                    className="border border-zinc-800 bg-black px-4 py-3"
                  >
                    <p className="text-yellow-500 font-black uppercase text-sm">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Story */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
              {currentTeam.title}
            </h3>

            <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
              {currentTeam.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Slideshow */}
        <div className="mt-20 border-t border-zinc-800 pt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="text-yellow-500 uppercase tracking-[0.25em] font-bold text-sm mb-3">
                Recent Photos
              </p>

              <h3 className="text-3xl md:text-4xl font-black uppercase">
                {currentTeam.label} Gallery
              </h3>
            </div>

            <div className="flex gap-3">
              <button
                onClick={previousPhoto}
                className="border border-zinc-700 hover:border-red-600 px-5 py-3 uppercase font-black text-sm"
              >
                Previous
              </button>

              <button
                onClick={nextPhoto}
                className="bg-red-600 hover:bg-red-700 px-5 py-3 uppercase font-black text-sm"
              >
                Next
              </button>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 h-[420px] md:h-[620px] flex items-center justify-center overflow-hidden">
            {/* Replace placeholder with image later */}
            
            <img
              src={currentTeam.photos[activePhoto]}
              alt={`${currentTeam.label} recent photo ${activePhoto + 1}`}
              className="max-h-[620px] w-auto object-contain"
            />
           

          
          </div>

          {/* Photo Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {currentTeam.photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setActivePhoto(index)}
                className={`h-3 w-3 rounded-full ${
                  activePhoto === index ? "bg-red-600" : "bg-zinc-700"
                }`}
                aria-label={`Show ${currentTeam.label} photo ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teams;