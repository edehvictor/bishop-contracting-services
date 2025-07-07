import clsx from "clsx";
import { useState } from "react";

type DemoSection = "interior" | "structural" | "occupied";

const DemolitionBody = () => {
  const [activeSection, setActiveSection] = useState<DemoSection>("structural");

  const demolitionSections = [
    {
      key: "structural",
      title: "Structural Demolition",
      text: "From concrete slabs to steel frames, we execute precise takedowns of major load-bearing structures with engineered safety protocols.",
      image: "/images/structural-demolition.webp",
    },
    {
      key: "interior",
      title: "Interior Demolition",
      text: "We carefully dismantle non-structural elements like walls, ceilings, and fixtures—making way for upgrades without damaging the building’s core.",
      image: "/images/interior-demolition.webp",
    },
    {
      key: "occupied",
      title: "Occupied Buildings",
      text: "Our team works safely within active facilities, minimizing disruption while removing targeted areas. Ideal for hospitals, schools, and businesses.",
      image: "/images/occupied-building.webp",
    },
  ];

  return (
    <section className="bg-black text-white md:py-20 py-10 px-6 md:px-16">
      <div className="max-w-7xl py-5 px-5 mx-auto flex-col flex gap-7">
        <div className="max-w-[460px] w-full">
          <h3 className="uppercase flex items-center gap-3 font-bold text-lg">
            Interior | Structural | Occupied Buildings
          </h3>
          <img
            src="/images/underStrokeWhite.svg"
            alt="underline stroke"
            width={730}
            height={30}
            className="w-full"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="space-y-10">
          {demolitionSections.map((item) => (
            <div
              key={item.key}
              className={clsx(
                "cursor-pointer border-l-4 pl-4 transition-all duration-200",
                activeSection === item.key
                  ? "border-gray-600 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              )}
              onMouseEnter={() => setActiveSection(item.key as DemoSection)}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center relative mt-20 md:mt-0.5 mb-5 min-h-[300px]">
          {demolitionSections.map((item) => (
            <img
              key={item.key}
              src={item.image}
              alt={item.title}
              className={clsx(
                "absolute -[350px] sm:w-[420px] h-full rounded-xl shadow-xl transition-all duration-700 ease-in-out transform",
                activeSection === item.key
                  ? "opacity-100 scale-100 blur-0"
                  : "opacity-0 scale-95 blur-sm pointer-events-none"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemolitionBody;
