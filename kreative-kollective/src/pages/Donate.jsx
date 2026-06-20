import kreativekollectiveteam from "../assets/kreative-kollective.JPG"
import Footer from "../components/Footer";
function Donate() {
  const goFundMeLink = "https://gofund.me/70b2d59fb";
  const cashAppLink = "https://cash.app/$kreativekollective21";
  const cashAppName = "$kreativekollective21";

  return (
    <>
    <main className="bg-black text-white font-['Rye']">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-16 md:py-28 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Hero Text */}
          <div>
            <p className="text-yellow-500 uppercase tracking-[0.25em] font-bold text-sm mb-4">
              Support The Movement
            </p>

            <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
              Help Us Keep The{" "}
              <span className="text-red-600">Kollective</span> Moving
            </h1>

            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              Your donation helps Kreative Kollective provide young performers
              with opportunities to train, travel, compete, perform, and grow
              through the art of step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={goFundMeLink}
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-wide px-8 py-4 text-center transition-colors"
              >
                Donate on GoFundMe
              </a>

              <a
                href={cashAppLink}
                target="_blank"
                rel="noreferrer"
                className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-black uppercase tracking-wide px-8 py-4 text-center transition-colors"
              >
                Send via Cash App
              </a>
            </div>

            <p className="text-zinc-500 text-sm mt-5">
              Cash App:{" "}
              <span className="text-yellow-500 font-bold">{cashAppName}</span>
            </p>
          </div>

          {/* Team Image */}
          <div className="bg-zinc-950 border border-zinc-800 h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={kreativekollectiveteam}
              alt="Kreative Kollective team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-yellow-500 uppercase tracking-[0.25em] font-bold text-sm mb-3">
              Why It Matters
            </p>

            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
              Your Support Creates Access
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Kreative Kollective is more than performance. It is mentorship,
              discipline, leadership, creativity, and community. Your gift helps
              remove barriers so students can focus on learning, growing, and
              showing up with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <p className="text-red-600 text-4xl font-black mb-4">01</p>

              <h3 className="text-xl font-black uppercase mb-3">
                Uniforms & Gear
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Help provide students with team uniforms, performance apparel,
                shoes, and other essentials needed to represent their team with
                pride.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <p className="text-red-600 text-4xl font-black mb-4">02</p>

              <h3 className="text-xl font-black uppercase mb-3">
                Travel & Competitions
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Support transportation, registration fees, and competition costs
                so our teams can perform on bigger stages.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <p className="text-red-600 text-4xl font-black mb-4">03</p>

              <h3 className="text-xl font-black uppercase mb-3">
                Youth Development
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Help fund workshops, team-building experiences, mentorship
                opportunities, and resources that support our students beyond
                the stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 md:px-16 md:py-24 bg-red-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            Invest In The Next Generation
          </h2>

          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            When you donate to Kreative Kollective, you are helping young people
            gain confidence, discipline, leadership, and unforgettable
            opportunities through step.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={goFundMeLink}
              target="_blank"
              rel="noreferrer"
              className="bg-black hover:bg-zinc-900 text-white font-black uppercase tracking-wide px-8 py-4 text-center transition-colors"
            >
              Donate on GoFundMe
            </a>

            <a
              href={cashAppLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-wide px-8 py-4 text-center transition-colors"
            >
              Donate via Cash App
            </a>
          </div>

          <p className="text-white/80 text-sm mt-5">
            Cash App: <span className="font-bold">{cashAppName}</span>
          </p>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

export default Donate;