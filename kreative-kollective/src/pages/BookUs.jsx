function BookUs() {
  return (
    <section className="font-['Rye'] bg-black text-white">
      {/* Hero */}
      <div className="relative min-h-[35vh] flex items-center justify-center px-6 border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-red-500 font-black uppercase tracking-[0.25em] mb-4">
            Performances - Workshops - Community Events
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
      </div>

      {/* Contact Section */}
      <div className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-500 font-black uppercase tracking-widest mb-3">
            Request a Booking
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
            Lets Make Your Event <span className="text-yellow-500">Memorable</span>
          </h2>

          <p className="mt-6 text-zinc-300 leading-relaxed">
            To book Kreative Kollective for your next event, reach out directly
            and someone from our team will follow up with availability, next
            steps, and booking information.
          </p>

          <div className="mt-10 bg-zinc-950 border border-zinc-800 p-8 space-y-6">
            <div>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-1">Email</p>
              <a href="mailto:kreativekollective@gmail.com" className="text-xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
                kreativekollective@gmail.com
              </a>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-1">Phone</p>
              <a href="tel:6466301333" className="text-xl font-bold text-white hover:text-yellow-500 transition-colors">
                646-630-1333
              </a>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-1">Service Areas</p>
              <p className="text-xl font-bold text-white">Any and All Locations</p>
            </div>
          </div>

          <p className="mt-8 text-zinc-400 text-sm">
            Please include your event date, location, audience size, and any
            specific requests when you reach out.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookUs;