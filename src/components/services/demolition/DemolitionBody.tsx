import { CheckCircle, HardHat, Recycle, Swords, ToolCase } from "lucide-react";

const DemolitionBody = () => {
  return (
    <div className={`bg-[#1B1E20] text-white`}>
      <div className={`m max-w-7xl py-10 px-5 mx-auto flex-col flex gap-7`}>
        <div className={`max-w-[460px] w-full`}>
          <h3
            className={`uppercase  flex items-center gap-3 font-bold text-lg`}
          >
            Interior | Structural | Occupied Buildings
          </h3>
          <img
            src={`/images/underStrokeWhite.svg`}
            alt="underline stroke"
            width={730}
            height={30}
            className={`w-full`}
          />
        </div>
        <h5 className={`font-medium text-[24px] md:text-3xl  capitalize`}>
          What is Selective Demolition?
        </h5>
        <p className={`font-normal text-sm md:text-lg max-w-[560px] w-full`}>
          Selective demolition is the careful and controlled removal of specific
          interior or structural components of a building, while protecting the
          integrity of remaining areas. This process is especially valuable in
          renovation projects, building upgrades, or when operating within
          occupied or high-traffic environments.
        </p>
        <div
          className={` flex py-5 lg:py-0 lg:h-[400px] w-full flex-col gap-15 lg:gap-0 lg:flex-row`}
        >
          <div className={`w-full flex flex-col gap-15`}>
            <div className={`flex gap-2`}>
              <div
                className={`w-32 md:w-16 h-16 bg-gradient-to-br  from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <ToolCase className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-medium text-lg  md:text-2xl space-Y-5`}>
                  Interior Demolition
                </h5>
                <p className={`font-normal text-sm  md:text-lg`}>
                  <span className=" flex flex-row gap-1 items-center">
                    {" "}
                    <CheckCircle /> Removal of walls, ceilings, floors, fixtures
                    and finishes
                  </span>
                  <span className=" flex flex-row gap-1 items-center">
                    <CheckCircle /> Dust and noise control in active
                    environments
                  </span>
                </p>
              </div>
            </div>
            <hr className={`text-white`} />
            <div className={`flex gap-2`}>
              <div
                className={`w-32 md:w-16 h-16 bg-gradient-to-br  from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <HardHat className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-medium text-lg  md:text-2xl`}>
                  Structural Demolition
                </h5>
                <p className={`font-normal text-sm  md:text-lg`}>
                  <span className=" flex flex-row gap-1 ">
                    <CheckCircle /> Demolition of beams, columns, slabs, and
                    structural walls
                  </span>
                  <span className=" flex flex-row gap-1 items-center">
                    {" "}
                    <CheckCircle />
                    Engineered dismantling to preserve building stability
                  </span>
                </p>
              </div>
            </div>
          </div>
          <hr className={`lg:hidden text-white`} />
          <div
            className={`w-1 h-full hidden lg:flex bg-white text-white `}
          ></div>
          <div className={`w-full self-center flex flex-col gap-15`}>
            <div className={`flex lg:ps-5 gap-2`}>
              <div
                className={`w-32 md:w-16 h-16 bg-gradient-to-br  from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Swords className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-medium text-lg  md:text-2xl`}>
                  Occupied Buildings
                </h5>
                <p className={`font-normal text-sm  md:text-lg`}>
                  <span className=" flex flex-row gap-1 items-center">
                    <CheckCircle /> Zero-disruption strategies for schools, and
                    businesses
                  </span>
                  <span className=" flex flex-row gap-1 items-center">
                    {" "}
                    <CheckCircle />
                    Night and weekend scheduling available
                  </span>
                </p>
              </div>
            </div>
            <hr className={`text-white`} />
            <div className={`flex lg:ps-5 gap-2`}>
              <div
                className={`w-20 md:w-16 h-16 bg-gradient-to-br  from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Recycle className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-medium text-lg  md:text-2xl`}>
                  Debris Removal & Recycling
                </h5>
                <p className={`font-normal text-sm  md:text-lg`}>
                  <span className=" flex flex-row gap-1 items-center">
                    <CheckCircle /> We recycle materials responsibly.
                  </span>
                  <span className=" flex flex-row gap-1 items-center">
                    {" "}
                    <CheckCircle />
                    We dispose materials responsibly.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemolitionBody;
