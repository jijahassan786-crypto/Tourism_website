import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="flex max-w-7xl mx-auto px-6 py-2 justify-between items-center">

        <div className="flex items-center gap-1">
          <img
            src="/Assets/Logo.jpeg"
            alt="logo"
            className="rounded-full cursor-pointer w-12 h-12"
          />

          <h1 className="text-3xl font-bold text-blue-600">
            Travel<span className="text-orange-500">World</span>
          </h1>
        </div>

        <div>
          <ul className="hidden md:flex gap-8 text-blue-700 font-semibold">

            <li className="hover:text-blue-800 cursor-pointer hover:underline duration-300">
              Home
            </li>

            <li className="hover:text-blue-800 cursor-pointer hover:underline duration-300">
              About
            </li>

            <li className="hover:text-blue-800 cursor-pointer hover:underline duration-300">
              Destinations
            </li>

            <li className="hover:text-blue-800 cursor-pointer hover:underline duration-300">
              Tours
            </li>

            <li className="hover:text-blue-800 cursor-pointer hover:underline duration-300">
              Contact
            </li>

          </ul>
        </div>

        <div>
          <button className="hidden md:block bg-blue-500 cursor-pointer text-white px-5 py-2 rounded-full hover:bg-blue-700 duration-300">
            Explore Now
          </button>
        </div>

        <div>
          <div className="md:hidden text-3xl cursor-pointer">
            ☰
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;