import { Bubbles, TentTree, BadgeMinus, Shield } from "lucide-react";

const steps = [
  {
    icon: TentTree,
    title: "Site Assessment & Planning",
    description:
      "We evaluate the building layout, materials, and scope of work.",
  },
  {
    icon: Shield,
    title: "Isolation & Protection",
    description:
      "Barriers and containment systems are set to protect active areas.",
  },
  {
    icon: BadgeMinus,
    title: "Selective Removal",
    description: "Our crew performs precise demolition with minimal impact.",
  },
  {
    icon: Bubbles,
    title: "Cleanup & Final Inspection",
    description:
      "We remove debris and ensure the site is clean for the next phase.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="bg-white  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full mb-10 p-10">
        <p className="flex text-center gap-3 w-fit  justify-center items-center mx-auto px-3 py-1 border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse "></span>
          Process
        </p>
        <h1 className="text-xl md:text-3xl my-3 font-bold text-gray-900 text-center">
          We have changed the game —hear it from our customers
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center leading-relaxed">
          Our simple four-step process gets you the help you need quickly and
          efficiently.
        </p>
        <div className=" py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col justify-between items-start gap-4 flex-wrap sm:flex-row">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden  bg-gray-400 sm:block absolute top-8 right-0 w-full h-px  translate-x-1/2 " />
                )}

                <div className="relative  w-16 h-16 mx-auto bg-white rounded-full shadow flex items-center justify-center border border-green-400">
                  <step.icon className="w-6 h-6 text-green-500 font-bold" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-600">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
