

function BookUs() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-[35vh] flex items-center justify-center px-6 border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-red-500 font-black uppercase tracking-[0.25em] mb-4">
            Performances • Workshops • Community Events
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
            Book <span className="text-yellow-500">Us</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Bring Kreative Kollective to your next event for high-energy step
            performances, youth workshops, school programs, and community
            experiences.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
          {/* Left Text */}
          <div>
            <p className="text-red-500 font-black uppercase tracking-widest mb-3">
              Request a Booking
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
              Let’s Make Your Event{" "}
              <span className="text-yellow-500">Memorable</span>
            </h2>

            <p className="mt-6 text-zinc-300 leading-relaxed">
              Complete the form with your event details and someone from
              Kreative Kollective will follow up with availability, next steps,
              and booking information.
            </p>

            <div className="mt-8 space-y-4 text-zinc-300">
              <p>
                <span className="text-white font-bold">Email:</span>{" "}
                info@kreativekollective.org
              </p>

              <p>
                <span className="text-white font-bold">Phone:</span>{" "}
                347-273-0720
              </p>

              <p>
                <span className="text-white font-bold">Service Areas:</span>{" "}
                Brooklyn, Bronx, NYC, and surrounding areas
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <form className="bg-zinc-950 border border-zinc-800 p-6 md:p-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-yellow-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-yellow-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-yellow-500"
                  placeholder="School, company, or organization"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                  Event Type
                </label>
                <select className="w-full bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-yellow-500">
                  <option>Performance</option>
                  <option>Workshop</option>
                  <option>School Program</option>
                  <option>Community Event</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  className="w-full bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                  Event Location
                </label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-yellow-500"
                  placeholder="Venue or borough"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                Message
              </label>
              <textarea
                rows="6"
                className="w-full bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-yellow-500 resize-none"
                placeholder="Tell us about your event, expected audience size, performance needs, timing, and any special requests."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 transition-colors duration-200"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default BookUs;