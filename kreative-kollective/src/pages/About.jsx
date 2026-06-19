import kkteamphoto from "../assets/kreative_kollective_team_photo.JPEG"
import kevbio from "../assets/kevin_bio.JPG"
import Footer from "../components/Footer";


function About() {
  return (
    <>
    <section className=" font-['Rye'] bg-black text-white px-6 py-16 md:px-16 md:py-24">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
              The Story of{" "}
              <span className="text-red-600">Kreative Kollective</span>
            </h1>

            <div className="space-y-4 text-zinc-200 text-lg leading-relaxed">
              <p>
                Kreative Kollective was founded in 2021 by <span className="text-red-500"> Kevin “Koach K” McGee</span>, an educator and lifelong stepper from the South Bronx. Inspired by the coaches and mentors who shaped his own journey, Koach K set out to create a space where young people could grow through stepping, leadership, and creative expression.
              </p>

              <p>
                What began as Kreative Kontrol Step Team in the basement of Brownsville Collegiate Charter School with just 11 founding members has grown into Kreative Kollective—a nationally recognized youth arts organization with three competitive teams: Kreative Kontrol, Kreative Kaliber, and Kreative Kingz.
              </p>

              <p>
                Today, we continue to empower youth through our core values of Kreativity, Knowledge, Kommunity, and Kharakter, developing confident leaders both on and off the stage.
              </p>

            </div>
          </div>

          {/* Story Image */}
          <div className="bg-zinc-950 border border-zinc-800 min-h-[520px] flex items-center justify-center overflow-hidden">
            {/* Add your image src later */}
            
            <img
              src={kkteamphoto}
              alt="Kreative Kollective team"
              className="w-full h-full object-cover"
            />
           
          </div>
        </div>

        {/* Founder Bio Section */}
        <div className="border-t border-zinc-800 pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Kevin Image */}
            <div className="bg-zinc-950 border border-zinc-800 min-h-[420px] flex items-center justify-center overflow-hidden">
              {/* Add Kevin's image src later */}
              
              <img
                src={kevbio}
                alt="Kevin McGee"
                className="w-full h-full object-cover"
              />
            
            </div>

            {/* Kevin Bio */}
            <div>
              <h2 className="text-yellow-500 uppercase tracking-[0.25em] font-bold text-sm mb-3">
                Founder & Coach
              </h2>

              <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
                Kevin <span className="text-red-600">McGee</span>
              </h3>

              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Kevin “Koach K” McGee is an educator, performing artist, and youth mentor from the South Bronx, New York. He began stepping in 2012 at his alma mater, MS 223: The Laboratory School of Finance & Technology, as a member of Quiet Storm Step Team. He later continued his stepping journey with Mecca Unleashed Step Team in Brooklyn, where he served as Team Captain during his senior year of high school.
                </p>

                <p>
                  A Dance major at Lower Manhattan Arts Academy High School and graduate of Morehouse College with a Bachelor of Arts in Theatre & Performance, Kevin founded Kreative Kollective in 2021 to empower youth through stepping, leadership, and the performing arts.
                </p>

                <p>
                  Today, he continues to develop the next generation through Kreative Kollective’s core values:

                </p>

                <p>
                 Kreativity. Knowledge. Kommunity. Kharakter.
                </p>
              </div>

              {/* Highlight Boxes */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border border-zinc-800 p-4 bg-black">
                  <p className="text-yellow-500 font-black uppercase">
                    Founder
                  </p>
                  <p className="text-sm text-zinc-400 mt-1">
                    Kreative Kollective
                  </p>
                </div>

                <div className="border border-zinc-800 p-4 bg-black">
                  <p className="text-yellow-500 font-black uppercase">Coach</p>
                  <p className="text-sm text-zinc-400 mt-1">
                    Youth Arts & Leadership Organization
                  </p>
                </div>

                <div className="border border-zinc-800 p-4 bg-black">
                  <p className="text-yellow-500 font-black uppercase">Mentor</p>
                  <p className="text-sm text-zinc-400 mt-1">
                    Leadership Development
                  </p>
                </div>

                <div className="border border-zinc-800 p-4 bg-black">
                  <p className="text-yellow-500 font-black uppercase">
                    Creative
                  </p>
                  <p className="text-sm text-zinc-400 mt-1">
                    Culture & Performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default About;
