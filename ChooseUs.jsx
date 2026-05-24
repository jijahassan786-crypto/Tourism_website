import { ShieldCheck, Headphones, Wallet, Plane} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Best Price Guarantee",
    desc: "Enjoy affordable travel packages with the best deals.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Travel",
    desc: "Your safety is our top priority.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Support team available anytime.",
  },
  {
    icon: Plane,
    title: "Easy Booking",
    desc: "Book your dream trip quickly.",
  },
];

function ChooseUs() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We provide unforgettable travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 hover:bg-blue-50 transition duration-300 rounded-3xl p-8 text-center shadow-md hover:shadow-xl"
              >
                <div className="flex justify-center mb-5 text-blue-600">
                  <Icon size={35} />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default ChooseUs;