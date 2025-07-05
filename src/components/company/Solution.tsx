import { ShieldCheck, Building2, Truck, ActivitySquare } from "lucide-react";

const Solution = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-green-500 uppercase text-sm font-semibold mb-2">
            Our Solution
          </p>
          <h2 className="text-3xl text-gray-800 md:text-4xl font-bold mb-4">
            Complete environmental and demolition solutions.
          </h2>
          <p className="text-gray-600 text-base">
            Safe. Sustainable. Specialized. We provide remediation, selective
            demolition, and transportation services that meet the highest
            industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <ShieldCheck className="text-green-500 mb-4" />
            <h4 className="font-semibold mb-2">Certified Hazard Removal</h4>
            <p className="text-sm text-gray-500">
              Licensed asbestos, mold, and lead abatement with full compliance.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <Building2 className="text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Precision Demolition</h4>
            <p className="text-sm text-gray-500">
              Interior and structural demolition executed with engineered
              control.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <Truck className="text-yellow-600 mb-4" />
            <h4 className="font-semibold mb-2">Waste Transport Logistics</h4>
            <p className="text-sm text-gray-500">
              Safe and efficient transport of hazardous and general waste
              materials.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <ActivitySquare className="text-indigo-600 mb-4" />
            <h4 className="font-semibold mb-2">24/7 Project Monitoring</h4>
            <p className="text-sm text-gray-500">
              Get real-time updates, compliance tracking, and transparent
              reporting throughout the project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
