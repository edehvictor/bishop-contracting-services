import React from "react";
import { Plane, Hotel, Bus, Car } from "lucide-react";

const features = [
  {
    title: "Private Airport Transportation",
    description: "Reliable service to and from major airports.",
    icon: Plane,
  },
  {
    title: "Private Hotel Transportation",
    description: "Comfortable rides to any hotel destination.",
    icon: Hotel,
  },
  {
    title: "Tours",
    description: "Discover the best local tours and attractions.",
    icon: Bus,
  },
  {
    title: "V.I.P Service",
    description: "Premium travel service for your comfort and privacy.",
    icon: Car,
  },
];

const Features: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto md:p-12 p-5 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8"></h2>

      <h2 className="text-xl md:text-3xl my-3 font-bold text-gray-900 text-center">
        Seamless Transportation & Unforgettable Tours
      </h2>
      <p className="text-gray-500 mt-2 pb-2">
        From safe, modern vehicles to knowledgeable drivers, we deliver smooth
        transportation and memorable tours — tailored to your needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 ">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative rounded-xl border border-dashed p-6 bg-gradient-to-br from-white via-green-50 to-pink-50 shadow-sm flex flex-col items-center py-8"
          >
            <div className="w-12 h-12 mb-4 rounded-full bg-white border flex items-center justify-center border-green-300">
              <feature.icon className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="font-semibold mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
