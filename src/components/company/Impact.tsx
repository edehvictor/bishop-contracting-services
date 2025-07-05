import { stats } from "@/lib/list";
import { Card, CardContent } from "../ui/card";

import type { LucideIcon } from "lucide-react";

export interface StatItem {
  number: string;
  label: string;
  icon: LucideIcon;
}

const Impact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Impact by the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
