import { Car, UserCheck, ShieldCheck, Smile } from "lucide-react";

const principles = [
  {
    icon: <Car className="w-6 h-6  text-gray-400" />,
    title: "Top-Quality Vehicles",
    description:
      "Our fleet is modern, clean, and maintained for safety and comfort on every trip.",
  },
  {
    icon: <UserCheck className="w-6 h-6  text-gray-400" />,
    title: "Experienced Drivers",
    description:
      "Our professional drivers are courteous, punctual, and dedicated to your safety.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6  text-gray-400" />,
    title: "Secure & Reliable",
    description:
      "We ensure every journey is smooth, secure, and worry-free with strict safety standards.",
  },
  {
    icon: <Smile className="w-6 h-6  text-gray-400" />,
    title: "Exceptional Service",
    description:
      "From booking to arrival, we focus on delivering a seamless, pleasant experience.",
  },
];

const WhyChooseTransport = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-sm tracking-widest uppercase  text-gray-400 mb-2">
              [ Why Choose Us ]
            </p>
            <h2 className="text-4xl font-semibold">
              Your Trusted Transport Partner
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 border-t border-white/10 pt-8">
          {principles.map((item, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 border-l border-white/10 pl-6"
            >
              <div>{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTransport;
