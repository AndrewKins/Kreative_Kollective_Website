import heroImage from "../assets/kk-nationals.JPEG";
function Hero() {
  return (
    <section className="relative h-[420px] md:h-[520px] text-white overflow-hidden">
      <img
        src={heroImage}
        alt="Kreative Kollective dancers"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

      <div className="relative z-10 flex flex-col justify-center items-center text-center md:items-start md:text-left h-full px-6 md:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
          <span className="text-red-600">Kreative</span>
          <br />
          Kollective
        </h1>

        <p className="mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-yellow-500">
          Step. Lead. Create. Ascend.
        </p>

        <p className="mt-2 md:mt-3 max-w-sm text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
          Empowering youth through step, creativity, leadership, and culture.
        </p>

        <div className="mt-4 md:mt-6 flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3">
          <a
            href="#join"
            className="text-center bg-red-600 md:hover:bg-red-700 active:bg-red-900 active:scale-95 text-white font-bold uppercase tracking-wider px-5 py-2.5 text-xs md:text-sm transition-all duration-200"
          >
            Join the Kollective
          </a>
          <a
            href="#book"
            className="text-center border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold uppercase tracking-wider px-5 py-2.5 text-xs md:text-sm transition-colors duration-200"
          >
            Book Us
          </a>
          <a
            href="#donate"
            className="text-center border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider px-5 py-2.5 text-xs md:text-sm transition-colors duration-200"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
