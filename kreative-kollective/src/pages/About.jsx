function About() {
  return (
    <section className="bg-black text-white px-6 py-16 md:px-16 md:py-24">
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
                Kreative Kollective was created from a love for step, culture,
                mentorship, and youth empowerment.
              </p>

              <p>
                What began as a vision to build strong performers grew into
                something much bigger: a community where young people could be
                challenged, supported, and celebrated. Through step, students
                learn discipline, confidence, teamwork, leadership, and pride in
                who they are.
              </p>

              <p>
                Kreative Kollective exists to give youth more than choreography.
                It gives them structure, family, opportunity, and a platform to
                express themselves. Every practice, performance, competition,
                and community event is designed to help students grow both on
                and off the stage.
              </p>

              <p>
                Rooted in New York City culture and powered by the energy of its
                young people, Kreative Kollective continues to build leaders one
                count at a time.
              </p>
            </div>
          </div>

          {/* Story Image */}
          <div className="bg-zinc-950 border border-zinc-800 min-h-[520px] flex items-center justify-center overflow-hidden">
            {/* Add your image src later */}
            {/* 
            <img
              src="/images/your-story-image.jpg"
              alt="Kreative Kollective team"
              className="w-full h-full object-cover"
            />
            */}

            <p className="text-zinc-500 uppercase tracking-widest text-sm">
              Story Image
            </p>
          </div>
        </div>

        {/* Founder Bio Section */}
        <div className="border-t border-zinc-800 pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Kevin Image */}
            <div className="bg-zinc-950 border border-zinc-800 min-h-[420px] flex items-center justify-center overflow-hidden">
              {/* Add Kevin's image src later */}
              {/* 
              <img
                src="/images/kevin-mcgee.jpg"
                alt="Kevin McGee"
                className="w-full h-full object-cover"
              />
              */}

              <p className="text-zinc-500 uppercase tracking-widest text-sm">
                Kevin McGee Photo
              </p>
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
                  Kevin McGee is the founder and coach of Kreative Kollective, a
                  youth step and leadership organization dedicated to developing
                  young people through performance, discipline, mentorship, and
                  culture.
                </p>

                <p>
                  With a deep passion for step and youth development, Kevin
                  created Kreative Kollective to provide students with a space
                  where they could grow as performers, leaders, and individuals.
                  His coaching style centers on discipline, confidence,
                  teamwork, creativity, and accountability.
                </p>

                <p>
                  Through his leadership, Kreative Kollective has become more
                  than a team. It is a community built on hard work, family,
                  excellence, and purpose.
                </p>

                <p>
                  Kevin believes that step can teach young people lessons that
                  extend far beyond the stage, helping them develop the
                  confidence and character needed to succeed in life.
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
                    Youth Step Program
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
  );
}

export default About;
