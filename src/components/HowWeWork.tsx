import { Construction, FileSearch, ShieldCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Site Evaluation",
    description: "We inspect site conditions and identify risks or hazards.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Setup",
    description:
      "We secure the area with proper containment and safety measures.",
  },
  {
    icon: Construction,
    title: "Remediation & Demo",
    description:
      "We remove hazards and perform precise demolition where needed.",
  },
  {
    icon: Truck,
    title: "Waste Transport",
    description: "We clear, haul, and dispose of materials responsibly.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full mb-10 p-10">
        <p className="flex text-center gap-3 w-fit justify-center items-center mx-auto px-3 py-1 border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          Process flow
        </p>
        <h1 className="text-xl md:text-3xl my-3 font-bold text-gray-900 text-center">
          How our selective demolition service works
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center leading-relaxed">
          Our simple four-step process gets you the help you need quickly and
          efficiently.
        </p>

        <div className="flex flex-col-reverse lg:flex-row">
          <div className="relative flex flex-col w-full md:pl-10 pl-3">
            <div className="flex flex-col gap-10 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 top-12 w-px h-[calc(100%+20px)] bg-gray-300" />
                  )}
                  <div className="relative z-10 w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-white border-2 border-green-300 flex items-center justify-center shadow">
                    <step.icon className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[22rem] lg:ma x-w-md mt-10 lg:mt-0 mb-10">
            <img
              src="/images/process-step.webp"
              alt="Site assessment in progress"
              className="rounded-2xl shadow-md object-cover w-full h-full max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
