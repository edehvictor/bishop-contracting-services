import { certifications } from "@/lib/list";
import React from "react";

export interface CertificationItem {
  name: string;
  shortName: string;
  category:
    | "environmental"
    | "safety"
    | "business"
    | "industry"
    | "transportation";
}

const Certificatation: React.FC = () => {
  const getCategoryColor = (category: CertificationItem["category"]) => {
    switch (category) {
      case "environmental":
        return "text-white";
      case "safety":
        return "text-white";
      case "business":
        return "text-white";
      case "industry":
        return "text-white";
      case "transportation":
        return "text-white";
      default:
        return "text-white";
    }
  };

  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white text-lg font-medium tracking-[0.2em] uppercase mb-4">
            CERTIFICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-transparent border border-white/10 rounded-lg p-6 hover:border-gray-500 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div
                  className={`text-2xl md:text-2xl font-bold mb-2 ${getCategoryColor(
                    cert.category
                  )} group-hover:text-white transition-colors duration-300`}
                >
                  {cert.shortName}
                </div>

                <div className="text-gray-400 text-xs md:text-sm leading-tight group-hover:text-gray-300 transition-colors duration-300">
                  {cert.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificatation;
