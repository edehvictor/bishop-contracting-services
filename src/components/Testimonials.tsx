import { Leaf, Recycle, Tractor, Truck } from "lucide-react";

const services = [
  {
    icon: <Leaf className="h-8 w-8 text-white" />,
    title: "Environmental Remediation",
    desc: "Safe cleanup of hazardous materials protecting people and property. Complete environmental solutions.",
  },
  {
    icon: <Tractor className="h-8 w-8 text-white" />,
    title: "Selective Demolition",
    desc: "Precision demolition services for occupied and sensitive structures. Roll-off containers and hazmat transport solutions.",
  },
  {
    icon: <Truck className="h-8 w-8 text-white" />,
    title: "Transportation Services",
    desc: "Specialized hauling and emergency response for hazardous materials. 24/7 roll-off and hazmat logistics.",
  },
  {
    icon: <Recycle className="h-8 w-8 text-white" />,
    title: "Debris Removal & Recycling",
    desc: "Eco-conscious disposal and recycling of construction and industrial waste. Sustainable and efficient.",
  },
];

const Services = () => {
  return (
    <section
      className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-bold uppercase flex items-center gap-3">
              <img
                src="/images/pointerWhite.webp"
                width={30}
                height={30}
                alt="pointer"
              />
              Services
            </h3>
            <img
              src="/images/underStrokeWhite.svg"
              className="mt-2 w-full max-w-xs"
              alt="underline"
            />
          </div>
          <p className="text-gray-400 max-w-xl text-base md:text-right">
            From environmental remediation to safe demolition and specialized
            transport, we provide comprehensive services that protect
            communities and deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-white/10 hover:border-green-500 rounded-2xl p-6 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
