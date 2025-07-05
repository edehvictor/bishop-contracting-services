import React from "react";
import { Crown, type LucideIcon } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FeatureList } from "@/lib/list";

export interface IFeature {
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

const Feature: React.FC = () => {
  const FeatureCard = ({ about }: { about: IFeature }) => {
    const IconComponent = about.icon;

    return (
      <div className="rounded-xl border border-gray-200 bg-white hover:border-green-300 transition-all duration-300 p-6">
        <div className="flex items-start space-x-4 mb-6">
          <div className="p-2 rounded-lg border border-gray-300 hover:border-green-400 transition-colors">
            <IconComponent className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-green-600 transition-colors">
              {about.title}
            </h3>
            <p className="text-sm text-gray-500">{about.subtitle}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {about.description}
        </p>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white" id="Feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-2 text-sm text-zinc-600 border border-green-300 w-fit mx-auto px-4 py-2 rounded-full bg-white">
            <Crown size={16} /> Industry Leader
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            All Your Environmental
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 ml-2">
              Solutions in One Place
            </span>
          </h2>
          <p className="text-gray-600 text-base mt-4 max-w-3xl mx-auto">
            When environmental challenges demand expertise, reliability, and
            results, industry leaders trust Bishop. Here's why we're the
            preferred choice for critical projects.
          </p>
        </div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}
        >
          <Masonry gutter="1.5rem">
            {FeatureList.map((about) => (
              <FeatureCard key={about.id} about={about} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};

export default Feature;
