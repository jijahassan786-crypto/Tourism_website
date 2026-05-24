const packages = [
   {
    image:
      "/Assets/pg-MS.jpg",
    country: "Maldives",
    days: "5 Days",
    price: "$899",
  },
 {
  image:
    "/Assets/pg-SL.png",
  country: "Switzerland",
  days: "7 Days",
  price: "$1200",
},
  {
    image:
      "/Assets/pg-TR.jpg",
    country: "Turkey",
    days: "6 Days",
    price: "$950",
  },
  {
    image:
      "/Assets/pg-NZ.jpg",
    country: "New Zealand",
    days: "8 Days",
    price: "$1400",
  },
  {
    image:
  "/Assets/pg-SK.jpg",
    country: "South Korea",
    days: "4 Days",
    price: "$850",
  },
  {
    image:
      "/Assets/pg-IND.jpg",
    country: "Indonesia",
    days: "6 Days",
    price: "$990",
  },
];

function TourPackages() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Popular Tour Packages
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our best travel packages and enjoy unforgettable journeys
            around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >

              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.country}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.country}
                  </h3>

                  <span className="text-blue-600 font-semibold">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-500 mb-5">
                  {item.days} Tour Package
                </p>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition duration-300">
                  Book Now
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TourPackages;