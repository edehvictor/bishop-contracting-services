import { Leaf, Shredder, Truck } from "lucide-react";

const principles = [
  {
    icon: <Leaf className="w-6 h-6 text-white" />,
    title: "Environmental Remediation",
    description:
      "Safe cleanup of hazardous materials protecting people and property",
  },
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Transportation Services",
    description:
      "Specialized hauling and emergency response for hazardous materials",
  },
  {
    icon: <Shredder className="w-6 h-6 text-white" />,
    title: "Selective Demolition",
    description:
      "Precision demolition services for occupied and sensitive structures",
  },
];

const CorePrinciples = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-2">
              [ Our Services ]
            </p>
            <h2 className="text-2xl font-semibold">
              Complete Environmental Solutions
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-gray-300 text-sm max-w-xl md:text-right">
            From environmental remediation to safe demolition and specialized
            transport, we provide comprehensive services that protect
            communities and deliver results.ected by our curiosity, commitment,
            and unwavering drive.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 border-t border-white/10 pt-8">
          {principles.map((item, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 border-l border-white/10 pl-6"
            >
              <div>{item.icon}</div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
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

export default CorePrinciples;
