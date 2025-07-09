import { Container, FireExtinguisher, House } from "lucide-react";
import SiteCleanUp from "./SiteCleanUp";

const EnvironmentCard = () => {
  return (
    <div className="mb-10 bg-white md:p-6 p-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full">
        <div
          className={`$ group w-full relative bg-white rounded-2xl border p-4 md:p-8 border-green-100 shadow-4xl transition-all duration-300 shadow-green-100 overflow-hidden flex md:flex-row flex-col gap-y-4 max-w-7xl mx-auto`}
        >
          <div className=" w-full">
            <div className="relative">
              <p className="flex md:justify-center md:items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-600 text-sm md:text-base">
                <FireExtinguisher />
                Abstestos Removal
              </p>
            </div>

            <div className="mb-6 mt-4">
              <p className="text-gray-600 leading-relaxed mb-6">
                Safe and compliant asbestos abatement to protect your health and
                property from hazardous fibers. The best way to handle and
                dispose of asbestos is to hire licensed asbestos abatement
                professionals at Bishop Contracting Services.
              </p>
            </div>

            <div className=" flex md:flex-row flex-col gap-3">
              <div className="relative p-6  md:h-52 md:w-60 w-full flex flex-col bg-gradient-to-br from-green-50 to-green-50 rounded-2xl">
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-green-50 to-green-50 rounded-full border border-green-400 flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <House className="h-8 w-8 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900  group-hover:text-gray-800 transition-colors">
                      Residential
                      <div>Abstestos </div>
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">
                  Safe and compliant residential abstestos abatement
                </p>
              </div>
              <div className="relative p-6  h-52 md:h-52 md:w-60 w-full flex flex-col bg-gradient-to-br from-green-50 to-green-50 rounded-2xl">
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-green-50 to-green-50 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 border border-green-300`}
                  >
                    <Container className="h-8 w-8 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900  group-hover:text-gray-800 transition-colors">
                      Industrial
                      <div>Abstestos </div>
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">
                  Safe and compliant Industrial abstestos abatement
                </p>
              </div>
            </div>
          </div>

          <div className=" w-full flex justify-center items-center">
            <div className="">
              <img
                src="/images/absetos.webp"
                alt="absetos removal"
                className=" rounded-md w-full "
              />
            </div>
          </div>
        </div>
        {/* site cleanup and lead pain removal*/}
        <SiteCleanUp />
      </div>
    </div>
  );
};

export default EnvironmentCard;
