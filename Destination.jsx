import React, { useState } from "react";

const destinations = [
  {
    id: 1,
    country: "Japan",
    image: "/Assets/JP.jpg",
    description:
      "Experience modern cities, cherry blossoms, and peaceful temples.",
    gallery: [
      {
        place: "Mount Fuji",
        image: "/Assets/dj1.jpg",
      },
      {
        place: "Tokyo Tower",
        image: "/Assets/dj2.jpg",
      },
      {
        place: "Arashiyama Bamboo Forest",
        image: "/Assets/dj3.jpg",
      },
      {
        place: "Fushimi Inari Shrine",
        image: "/Assets/dj4.jpg",
      },
    ],
  },

  {
    id: 2,
    country: "Switzerland",
    image: "/Assets/SW.jpg",
    description:
      "Enjoy breathtaking mountains, lakes, and snowy landscapes.",
    gallery: [
      {
        place: "Interlaken",
        image: "/Assets/ds1.jpg",
      },
      {
        place: "Lake Geneva",
        image: "/Assets/ds2.jpg",
      },
      {
        place: "Zermatt",
        image: "/Assets/ds3.jpg",
      },
      {
        place: "Swiss Alps",
        image: "/Assets/ds4.jpg",
      },
    ],
  },

  {
    id: 3,
    country: "Turkey",
    image: "/Assets/TY.png",
    description:
      "Discover rich history, stunning mosques, and magical skies.",
    gallery: [
      {
        place: "Cappadocia",
        image: "/Assets/dt1.jpg",
      },
      {
        place: "Blue Mosque",
        image: "/Assets/dt2.jpg",
      },
      {
        place: "Pamukkale",
        image: "/Assets/dt3.jpg",
      },
      {
        place: "Istanbul",
        image: "/Assets/dt4.jpg",
      },
    ],
  },

  {
    id: 4,
    country: "Indonesia",
    image: "/Assets/ind.jpg",
    description:
      "Relax on tropical islands with crystal-clear beaches.",
    gallery: [
      {
        place: "Bali",
        image: "/Assets/di1.jpg",
      },
      {
        place: "Komodo Island",
        image: "/Assets/di2.jpg",
      },
      {
        place: "Jakarta",
        image: "/Assets/di3.jpg",
      },
      {
        place: "Raja Ampat",
        image: "/Assets/di4.jpg",
      },
    ],
  },

  {
    id: 5,
    country: "South Korea",
    image: "/Assets/SK.png",
    description:
      "Explore vibrant nightlife and beautiful modern culture.",
    gallery: [
      {
        place: "Seoul",
        image: "/Assets/dk1.jpg",
      },
      {
        place: "Jeju Island",
        image: "/Assets/dk2.jpg",
      },
      {
        place: "Busan",
        image: "/Assets/dk3.jpg",
      },
      {
        place: "Gyeongbokgung Palace",
        image: "/Assets/dk4.jpg",
      },
    ],
  },

  {
    id: 6,
    country: "Pakistan",
    image: "/Assets/PK.jpg",
    description:
      "Visit the majestic northern areas filled with beauty.",
    gallery: [
      {
        place: "Hunza Valley",
        image: "/Assets/dp1.jpg",
      },
      {
        place: "Skardu",
        image: "/Assets/dp2.jpg",
      },
      {
        place: "Fairy Meadows",
        image: "/Assets/dp3.jpg",
      },
      {
        place: "Swat Valley",
        image: "/Assets/dp4.jpg",
      },
    ],
  },

  {
    id: 7,
    country: "New Zealand",
    image: "/Assets/Nz.jpg",
    description:
      "Discover dreamy mountains, lakes, and green valleys.",
    gallery: [
      {
        place: "Queenstown",
        image: "/Assets/dn1.jpg",
      },
      {
        place: "Milford Sound",
        image: "/Assets/dn2.jpg",
      },
      {
        place: "Auckland",
        image: "/Assets/dn3.jpg",
      },
      {
        place: "Lake Tekapo",
        image: "/Assets/dn4.jpg",
      },
    ],
  },

  {
    id: 8,
    country: "Maldives",
    image: "/Assets/MV.png",
    description:
      "Enjoy luxurious water villas and peaceful ocean views.",
    gallery: [
      {
        place: "Male City",
        image: "/Assets/dm1.jpg",
      },
      {
        place: "Vaadhoo Island",
        image: "/Assets/dm2.jpg",
      },
      {
        place: "Maafushi",
        image: "/Assets/dm3.jpg",
      },
      {
        place: "Water Villas",
        image: "/Assets/dm4.jpg",
      },
    ],
  },

  {
    id: 9,
    country: "France",
    image: "/Assets/fr.jpg",
    description:
      "Experience romantic streets, fashion, and iconic landmarks.",
    gallery: [
      {
        place: "Eiffel Tower",
        image: "/Assets/df1.jpg",
      },
      {
        place: "Louvre Museum",
        image: "/Assets/df2.jpg",
      },
      {
        place: "Nice Beach",
        image: "/Assets/df3.jpg",
      },
      {
        place: "Paris Streets",
        image: "/Assets/df4.jpg",
      },
    ],
  },
];

const Destinations = () => {
  const [hovered, setHovered] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <>
      <section className="bg-[#f8fafc] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Explore Beautiful Destinations
            </h2>

            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              Discover the world’s most beautiful places and create unforgettable memories.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative overflow-hidden rounded-[30px] shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.country}
                  className={`w-full h-[430px] object-cover transition-all duration-700 ${
                    hovered === item.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10 border-t border-white/20">
                  
                  <h3 className="text-white text-3xl font-bold tracking-wide">
                    {item.country}
                  </h3>

                  <p className="text-gray-200 text-sm mt-3 leading-6">
                    {item.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => setSelectedCountry(item)}
                    className="mt-5 px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          
          <div className="bg-white w-full max-w-6xl rounded-[35px] p-8 relative animate-[zoomIn_0.4s_ease] overflow-y-auto max-h-[95vh]">

            {/* Close Button */}
            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute  top-5 right-5 w-11 h-11 rounded-full bg-blue-800 text-white text-xl hover:bg-black transition-all duration-300"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-5xl font-bold text-center text-gray-800 mb-3">
              {selectedCountry.country}
            </h2>

            <p className="text-center text-gray-500 mb-10 text-lg">
              Top Beautiful Places To Visit
            </p>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {selectedCountry.gallery.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl shadow-xl group"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.place}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Place Name */}
                  <h3 className="absolute bottom-5 left-5 text-white text-2xl font-bold tracking-wide">
                    {item.place}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Destinations;