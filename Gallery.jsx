import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Maldives",
    cover: "/Assets/gl-MV.jpg",

    images: [
      "/Assets/cd-mv-1.jpg",
      "/Assets/cd-mv-2.jpg",
      "/Assets/cd-mv-3.png",
      "/Assets/cd-mv-4.jpg",
      "/Assets/cd-mv-5.jpg",
      "/Assets/cd-mv-6.jpg",
    ],
  },

  {
    id: 2,
    title: "Switzerland",
    cover: "/Assets/gl-SL.png",

    images: [
      "/Assets/cd-sw-1.jpg",
      "/Assets/cd-sw-2.jpg",
      "/Assets/cd-sw-3.jpg",
      "/Assets/cd-sw-4.png",
      "/Assets/cd-sw-5.jpg",
      "/Assets/cd-sw-6.jpg",
    ],
  },

  {
    id: 3,
    title: "Turkey",
    cover: "/Assets/gl-TK.jpg",

    images: [
      "/Assets/cd-ty-1.jpg",
      "/Assets/cd-ty-2.jpg",
      "/Assets/cd-ty-3.jpg",
      "/Assets/cd-ty-4.jpg",
      "/Assets/cd-ty-5.jpg",
      "/Assets/cd-ty-6.jpg",
    ],
  },

  {
    id: 4,
    title: "Japan",
    cover: "/Assets/gl-JP.jpg",

    images: [
      "/Assets/cd-jp-1.jpg",
      "/Assets/cd-jp-2.jpg",
      "/Assets/cd-jp-3.jpg",
      "/Assets/cd-jp-4.jpg",
      "/Assets/cd-jp-5.jpg",
      "/Assets/cd-jp-6.jpg",
    ],
  },

  {
    id: 5,
    title: "Indonesia",
    cover: "/Assets/gl-IND.jpg",

    images: [
      "/Assets/cd-in-1.jpg",
      "/Assets/cd-in-2.jpg",
      "/Assets/cd-in-3.jpg",
      "/Assets/cd-in-4.jpg",
      "/Assets/cd-in-5.jpg",
      "/Assets/cd-in-6.jpg",
    ],
  },

  {
    id: 6,
    title: "South Korea",
    cover: "/Assets/gl-SK.png",

    images: [
      "/Assets/cd-sk-1.png",
      "/Assets/cd-sk-2.jpg",
      "/Assets/cd-sk-3.jpg",
      "/Assets/cd-sk-4.jpg",
      "/Assets/cd-sk-5.jpg",
      "/Assets/cd-sk-6.jpg",
    ],
  },

  {
    id: 7,
    title: "New Zealand",
    cover: "/Assets/gl-NZ.jpg",

    images: [
      "/Assets/cd-nz-1.jpg",
      "/Assets/cd-nz-2.jpg",
      "/Assets/cd-nz-3.jpg",
      "/Assets/cd-nz-4.jpg",
      "/Assets/cd-nz-5.jpg",
      "/Assets/cd-nz-6.jpg",
    ],
  },

  {
    id: 8,
    title: "France",
    cover: "/Assets/gl-FR.jpg",

    images: [
      "/Assets/cd-fr-1.jpg",
      "/Assets/cd-fr-2.jpg",
      "/Assets/cd-fr-3.jpg",
      "/Assets/cd-fr-4.jpg",
      "/Assets/cd-fr-5.jpg",
      "/Assets/cd-fr-6.jpg",
    ],
  },

  {
    id: 9,
    title: "Pakistan",
    cover: "/Assets/PK.jpg",

    images: [
      "/Assets/cd-pk-1.jpg",
      "/Assets/cd-pk-2.jpg",
      "/Assets/cd-pk-3.jpg",
      "/Assets/cd-pk-4.jpg",
      "/Assets/cd-pk-5.jpg",
      "/Assets/cd-pk-6.jpg",
    ],
  },
];

const Gallery = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Open Popup
  const openPopup = (country) => {
    setSelectedCountry(country);
    setCurrentImage(0);
  };

  // Close Popup
  const closePopup = () => {
    setSelectedCountry(null);
  };

  // Next Image
  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedCountry.images.length - 1 ? 0 : prev + 1
    );
  };

  // Previous Image
  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedCountry.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800">
            Travel Gallery
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            Explore beautiful destinations around the world and make your next
            journey unforgettable.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onClick={() => openPopup(item)}
              className="relative overflow-hidden rounded-[30px] shadow-xl group cursor-pointer"
            >

              {/* Image */}
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition duration-500"></div>

              {/* Country Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition duration-500">
                  {item.title}
                </h3>
              </div>

              {/* Glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
            </div>
          ))}
        </div>

        {/* POPUP MODAL */}
        {selectedCountry && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4">

            {/* Modal Box */}
            <div className="relative w-full max-w-5xl bg-white/10 border border-white/20 backdrop-blur-xl rounded-[35px] overflow-hidden shadow-2xl">

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-5 right-5 z-50 bg-white/20 hover:bg-white text-white p-2 rounded-full transition"
              >
                <X size={28} />
              </button>

              {/* Main Image */}
              <img
                src={selectedCountry.images[currentImage]}
                alt=""
                className="w-full h-[75vh] object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Country Title */}
              <div className="absolute bottom-8 left-8">
                <h2 className="text-white text-5xl font-bold drop-shadow-lg">
                  {selectedCountry.title}
                </h2>

                <p className="text-gray-200 mt-2">
                  Beautiful memories from {selectedCountry.title}
                </p>
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white hover:text-black text-white p-4 rounded-full transition"
              >
                <ChevronLeft size={35} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white hover:text-black text-white p-4 rounded-full transition"
              >
                <ChevronRight size={35} />
              </button>

              {/* Bottom Thumbnails */}
              <div className="absolute bottom-5 right-5 flex gap-3">
                {selectedCountry.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setCurrentImage(index)}
                    className={`w-16 h-16 object-cover rounded-xl cursor-pointer border-2 transition ${
                      currentImage === index
                        ? "border-white scale-110"
                        : "border-transparent opacity-70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;