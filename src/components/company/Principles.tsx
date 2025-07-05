import { ShieldCheckIcon, Building2Icon, TruckIcon } from "lucide-react";

const principles = [
  {
    icon: <ShieldCheckIcon className="w-6 h-6 text-white" />,
    title: "Safety First, Always",
    description:
      "We prioritize health, safety, and environmental responsibility on every job site—ensuring our teams and your property remain protected throughout the process.",
  },
  {
    icon: <Building2Icon className="w-6 h-6 text-white" />,
    title: "Precision in Demolition",
    description:
      "From interior clean-outs to complex structural takedowns, our selective demolition is engineered for control, minimal disruption, and structural integrity.",
  },
  {
    icon: <TruckIcon className="w-6 h-6 text-white" />,
    title: "Reliable Transportation",
    description:
      "We move materials, waste, and equipment efficiently and compliantly—supporting environmental cleanup and construction timelines with precision logistics.",
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
              [ Our Principles ]
            </p>
            <h2 className="text-4xl font-semibold">At our core</h2>
          </div>
          <p className="mt-6 md:mt-0 text-gray-300 max-w-xl md:text-right">
            Trusted by communities and contractors alike, we combine technical
            skill with integrity, precision, and a commitment to cleaner, safer
            environments.
          </p>
        </div>

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
