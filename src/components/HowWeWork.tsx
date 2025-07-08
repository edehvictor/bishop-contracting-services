import { Hammer, Truck, ClipboardCheck, FileSearch } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Project Assessment",
    description:
      "We evaluate your site and service needs—whether it's environmental hazards, demolition areas, or materials to be transported.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Planning",
    description:
      "Our team prepares safety protocols, obtains permits, and ensures all processes align with environmental and regulatory standards.",
  },
  {
    icon: Hammer,
    title: "Execution & Remediation",
    description:
      "We carry out selective demolition or remove contaminants such as asbestos, mold, or lead with certified professionals.",
  },
  {
    icon: Truck,
    title: "Safe Waste Transport",
    description:
      "We responsibly haul hazardous materials, demolition debris, or site waste using DOT-certified equipment and methods.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full mb-10 p-10">
        <p className="flex text-center gap-3 w-fit justify-center items-center mx-auto px-3 py-1 border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          Our Process
        </p>
        <h1 className="text-xl md:text-3xl my-3 font-bold text-gray-900 text-center">
          From Site Assessment to Clean Handover
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center leading-relaxed">
          We follow a proven 4-step process to deliver safe, compliant, and
          efficient solutions for remediation, demolition, and transportation.
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
                    <step.icon className="w-6 h-6 text-green-600" />
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

          <div className="w-full h-[22rem] lg:max-w-md mt-10 lg:mt-0 mb-10">
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
