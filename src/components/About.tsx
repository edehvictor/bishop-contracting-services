import React from "react";
import { Crown, type LucideIcon } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AboutList } from "@/lib/list";

export interface IAbout {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  cardBg: string;
  features: string[];
  height?: "tall" | "medium" | "short";
}

const About: React.FC = () => {
  const AboutCard = ({ about, index }: { about: IAbout; index: number }) => {
    const IconComponent = about.icon;
    const heightClass =
      about.height === "tall"
        ? "min-h-[50px]"
        : about.height === "short"
        ? "min-h-[70px]"
        : "min-h-[80px]";

    return (
      <div
        className={`group relative rounded-2xl border border-gray-200 hover:border-gray-300  hover:shadow-xl transition-all duration-500 hover:scale-[1] overflow-hidden ${heightClass}`}
        style={{
          animationDelay: `${index * 100}ms`,
          animation: "fadeInUp 0.6s ease-out forwards",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${about.cardBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>

        <div className="relative p-6  h-full flex flex-col">
          <div className="flex items-start space-x-4 mb-6">
            <div
              className={`w-16 h-16  rounded-xl flex items-center justify-center group-hover:scale-95 transition-transform duration-300 shadow-sm flex-shrink-0 bg-gradient-to-br ${about.iconBg}`}
            >
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                {about.title}
              </h3>
              <p className="text-sm font-medium text-gray-500">
                {about.subtitle}
              </p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
            {about.description}
          </p>
        </div>

        <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </div>
    );
  };

  return (
    <section className="py-10 bg-white relative overflow-hidden" id="About">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block text-zinc-500 px-6 py-3  mb-6 ">
            <p className="flex md:justify-center md:items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 tracking-wide rounded-2xl shadow-inner bg-white text-zinc-500 text-sm md:text-base">
              <Crown />
              Industry Leader
            </p>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">
            All Your Environmental
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}
              Solutions in One Place
            </span>
          </h2>
          <p className="text-[16px] text-gray-600 max-w-3xl mx-auto mb-8">
            When environmental challenges demand expertise, reliability, and
            results, industry leaders trust Bishop. Here's why we're the
            preferred choice for critical projects.
          </p>
        </div>

        <div className="mb-16">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}
          >
            <Masonry gutter="1.5rem">
              {AboutList.map((about, index) => (
                <AboutCard key={about.id} about={about} index={index} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export default About;
