// import heroImage from "../assets/kk-nationals.JPEG";
import kontrolCompImage from "../assets/kreative_kontrol_komp.JPG"
import kaliberCompImage from "../assets/kreative_kaliber_komp.JPG"
import kingzCompImage from "../assets/kreative_kingz_photo.JPG"

function Teams() {
  return (
    <section className=" font-['Rye'] bg-neutral-900 text-white py-16 px-6 md:px-12">
      {/* Header with golden lines */}
      <div className="flex items-center gap-4 mb-10 ">
        <div className="flex-1 h-px bg-yellow-500" />
        <h2 className="text-3xl font-black uppercase">
          {" "}
          OUR <span>TEAMS</span>{" "}
        </h2>
        <div className="flex-1 h-px bg-yellow-500" />
      </div>

      {/* Cards Grid*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col items-center text-center">
          <img
            src={kontrolCompImage}
            className="w-full object-cover border-2 border-red-600 mb-4"
            alt="Kreative Kontrol"
          />
          <h3 className="text-xl font-black uppercase">KREATIVE KONTROL</h3>
          <p className="text-red-500 font-bold uppercase text-sm tracking-wider mt-1">Middle School Co-Ed</p>
          <p className="text-gray-300 text-sm met-2">Grades 6-8</p>
          <p className="text-gray-300 text-sm mt-2">
            Building the Foundation, Learning Discipline & Teamwork.
            
          </p>
          <button className="mt-4 border-2 border-white text-white font-bold uppercse tracking-wider px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200 ">Learn More</button>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src={kaliberCompImage } alt="Kreative Kaliber" className="w-full object-cover border-2 border-yellow-500 mb-4"/>
          <h3 className="text-xl font-black uppercase">KREATIVE KALIBER</h3>
          <p className="text-red-500 font-bold uppercase text-sm tracking-wider mt-1">HIGH SCHOOL CO-ED</p>
          <p className="text-gray-300 text-sm mt-2">Grades 9-12</p>
          <p className="text-gray-300 text-sm mt-2">
            Elevating Skill, Leadership & Performance at the Highest Level.
          </p>
          <button className="mt-4 border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200">Learn More</button>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src={kingzCompImage} className="w-full object-cover border-2 border-white mb-4" alt="Kreative Kontrol" />
          <h3 className="text-xl font-black uppercase">KREATIVE KINGZ</h3>
          <p className="text-red-500 font-bold uppercase text-sm tracking-wider mt-1">ALL MALE TEAM</p>
          <p className="text-gray-300 text-sm mt-2">Grades 6-12</p>
          <p className="text-gray-300 text-sm mt-2">
            Developing Young Men of Character, Strength & Excellence.
          </p>
          <button className="mt-4 border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Teams;
