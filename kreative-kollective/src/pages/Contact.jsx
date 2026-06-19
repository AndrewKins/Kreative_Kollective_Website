function Contact() {
  const email = "kreativekollective@email.com";
  const instagramUrl = "https://www.instagram.com/your-instagram-here";
  const instagramHandle = "@yourinstagram";

  return (
    <main className="bg-black text-white font-['Rye']">
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Page Heading */}
          <div className="max-w-3xl mb-12">
            <p className="text-yellow-500 uppercase tracking-[0.25em] font-bold text-sm mb-4">
              Contact Us
            </p>

            <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
              Get In Touch With The{" "}
              <span className="text-red-600">Kollective</span>
            </h1>

            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
              Have a question about Kreative Kollective, our teams, programs,
              donations, events, or community partnerships? Send us a message
              and we’ll connect with you.
            </p>
          </div>

          {/* Main Contact Layout */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Contact Form */}
            <form className="bg-zinc-950 border border-zinc-800 p-6 md:p-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-black border border-zinc-800 px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-black border border-zinc-800 px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Optional"
                    className="w-full bg-black border border-zinc-800 px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="block text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2"
                >
                  What Is This About?
                </label>

                <select
                  id="topic"
                  className="w-full bg-black border border-zinc-800 px-4 py-4 text-white focus:outline-none focus:border-red-600"
                >
                  <option>General Question</option>
                  <option>Team Information</option>
                  <option>Programs</option>
                  <option>Events</option>
                  <option>Donations</option>
                  <option>Sponsorship</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="8"
                  placeholder="Tell us how we can help..."
                  className="w-full bg-black border border-zinc-800 px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-wide px-8 py-4 text-center transition-colors"
              >
                Submit Message
              </button>

              <p className="text-zinc-500 text-sm leading-relaxed">
                This form is visual right now. To make it send messages, connect
                it to Formspree, EmailJS, Netlify Forms, or your own backend.
              </p>
            </form>

            {/* Contact Side Panel */}
            <aside className="bg-zinc-950 border border-zinc-800 p-6 md:p-8">
              <p className="text-yellow-500 uppercase tracking-[0.25em] font-bold text-sm mb-4">
                Contact Details
              </p>

              <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6">
                Reach Out Directly
              </h2>

              <p className="text-zinc-300 leading-relaxed mb-8">
                For questions, support, partnerships, or general information,
                use the contact details below.
              </p>

              <div className="space-y-6">
                <div className="border-t border-zinc-800 pt-5">
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2">
                    Email
                  </p>

                  <a
                    href={`mailto:${email}`}
                    className="text-yellow-500 font-black break-words hover:text-yellow-400"
                  >
                    {email}
                  </a>
                </div>

                <div className="border-t border-zinc-800 pt-5">
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2">
                    Instagram
                  </p>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-500 font-black hover:text-yellow-400"
                  >
                    {instagramHandle}
                  </a>
                </div>

                <div className="border-t border-zinc-800 pt-5">
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2">
                    Best For
                  </p>

                  <ul className="text-zinc-300 leading-relaxed space-y-2">
                    <li>Team questions</li>
                    <li>Parent questions</li>
                    <li>Program information</li>
                    <li>Donations and sponsorships</li>
                    <li>Community partnerships</li>
                  </ul>
                </div>

                <div className="border-t border-zinc-800 pt-5">
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2">
                    Need To Book Us?
                  </p>

                  <a
                    href="/book-us"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-wide px-6 py-3 text-center transition-colors"
                  >
                    Go To Book Us
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;