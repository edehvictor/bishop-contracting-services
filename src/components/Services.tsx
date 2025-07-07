import { Leaf, Recycle, Tractor, Truck } from "lucide-react";

const services = [
  {
    title: "Environmental Remediation",
    icon: <Leaf className="h-10 w-10 text-green-600" />,
    description:
      "Safe cleanup of hazardous materials to protect people, property, and the environment.",
  },
  {
    title: "Selective Demolition",
    icon: <Tractor className="h-10 w-10 text-green-600" />,
    description:
      "Precision demolition for occupied or sensitive structures using controlled techniques.",
  },
  {
    title: "Transportation Services",
    icon: <Truck className="h-10 w-10 text-green-600" />,
    description:
      "Specialized hauling and emergency response for hazardous and non-hazardous materials.",
  },
  {
    title: "Debris Removal & Recycling",
    icon: <Recycle className="h-10 w-10 text-green-600" />,
    description:
      "Eco-friendly waste removal with a focus on recycling and sustainability.",
  },
];

const Services = () => {
  return (
    <section className=" text-black md:py-20 py-10 px-5" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-start flex flex-col items-start justify-start mb-16">
          <p className="flex items-center justify-start gap-2 text-sm text-zinc-600 border border-green-300 w-fit px-4 py-2 rounded-full bg-white">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>{" "}
            Services
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
            Our Extensive Services
          </h2>

          <p className="text-gray-600 text-left text-base mt-4 max-w-3xl">
            Our team is here to support your environmental remediation,
            demolition, or logistics needs — from assessments to execution.
            Reach out for fast, compliant, and professional assistance.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center shadow-inner">
                  {service.icon}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
