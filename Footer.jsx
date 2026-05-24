export default function EndingSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden py-28 px-6">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Small Tag */}
        <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm tracking-widest uppercase text-gray-300 mb-8">
          Explore The World
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Thanks For Visiting ✈️
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-9 mt-8">
          Your next unforgettable journey starts here. Explore breathtaking
          destinations, discover hidden gems, and create memories that last
          forever with TravelWorld.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition duration-300 px-10 py-4 rounded-full text-lg font-semibold shadow-2xl shadow-cyan-500/20">
            Start Your Journey
          </button>

          <button className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition duration-300 px-10 py-4 rounded-full text-lg font-semibold">
            Explore Destinations
          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:-translate-y-2 transition duration-300">
            <h2 className="text-4xl font-bold text-cyan-400">50+</h2>
            <p className="text-gray-300 mt-3">
              Beautiful Destinations
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:-translate-y-2 transition duration-300">
            <h2 className="text-4xl font-bold text-pink-400">10K+</h2>
            <p className="text-gray-300 mt-3">
              Happy Travelers
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:-translate-y-2 transition duration-300">
            <h2 className="text-4xl font-bold text-blue-400">24/7</h2>
            <p className="text-gray-300 mt-3">
              Customer Support
            </p>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <h2 className="text-3xl font-bold">
            Travel<span className="text-cyan-400">World</span>
          </h2>

          <div className="flex gap-6 text-gray-400 text-sm md:text-base">
            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <a href="#" className="hover:text-white transition">
              Destinations
            </a>

            <a href="#" className="hover:text-white transition">
              Tours
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2026 TravelWorld — All Rights Reserved
          </p>

        </div>
      </div>
    </section>
  );
}