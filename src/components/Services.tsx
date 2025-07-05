import { Leaf, Recycle, Tractor, Truck } from "lucide-react";

const Services = () => {
  return (
    <section className={`bg-[#000] text-white`} id="services">
      <div className={` max-w-7xl py-10 px-5 mx-auto flex-col flex gap-7`}>
        <div className={` w-full flex flex-col md:flex-row justify-between`}>
          <div className="w-full ">
            <h3
              className={`uppercase  flex items-center gap-3 font-bold text-3xl`}
            >
              <img
                height={25}
                width={29}
                src={`/images/pointerWhite.webp`}
                alt="pointer"
              />
              Services
            </h3>

            <img
              src={`/images/underStrokeWhite.svg`}
              alt="underline stroke"
              width={20}
              height={30}
              className={`w-full max-w-[460px]`}
            />
          </div>
          <div className="w-full">
            <p
              className={`font-normal text-[16px] max-w-[560px] w-full text-gray-400 mb-8 mt-5 md:text-right`}
            >
              From environmental remediation to safe demolition and specialized
              transport, we provide comprehensive services that protect
              communities and deliver results.
            </p>
          </div>
        </div>

        <div
          className={` flex py-5 lg:py-0 lg:h-[400px] w-full flex-col gap-15 lg:gap-0 lg:flex-row`}
        >
          <div className={`w-full flex flex-col gap-15`}>
            <div className={`flex gap-2`}>
              <div
                className={`w-16 h-16 bg-gradient-to-br  rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Leaf className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col `}>
                <h5 className={`text-lg font-bold md:text-xl`}>
                  Environmental Remediation
                </h5>
                <p
                  className={`font-normal text-sm text-gray-400  md:text-[16px]`}
                >
                  Safe cleanup of hazardous materials protecting people and
                  property. Complete Environmental Solutions.
                </p>
              </div>
            </div>
            <hr className={`text-white `} />
            <div className={`flex gap-2`}>
              <div
                className={`w-16 h-16 bg-gradient-to-br   rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Tractor className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-bold text-lg  md:text-xl`}>
                  Selective Demolition
                </h5>
                <p
                  className={`font-normal text-sm text-gray-400  md:text-[16px]`}
                >
                  Precision demolition services for occupied and sensitive
                  structures.Roll-off containers and hazmat transport solutions
                </p>
              </div>
            </div>
          </div>
          <hr className={`lg:hidden bg-white/10 text-white/10`} />
          <div
            className={`w-1 h-full hidden lg:flex bg-white/10 text-white/10 `}
          ></div>
          <div className={`w-full self-center flex flex-col gap-15`}>
            <div className={`flex lg:ps-5 gap-2`}>
              <div
                className={`w-16 h-16 bg-gradient-to-br   rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Truck className="h-10 w-10  text-white" />
              </div>

              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-bold text-lg  md:text-xl`}>
                  Transportation Services
                </h5>
                <p
                  className={`font-normal text-sm text-gray-400  md:text-[16px]`}
                >
                  Specialized hauling and emergency response for hazardous
                  materials. Roll-off containers and hazmat transport solutions.
                </p>
              </div>
            </div>
            <hr className={`text-white/10 bg-white/10`} />
            <div className={`flex lg:ps-5 gap-2`}>
              <div
                className={`w-16 h-16 bg-gradient-to-br   rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Recycle className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-bold text-lg  md:text-xl`}>
                  Debris Removal & Recycling
                </h5>
                <p
                  className={`font-normal text-sm text-gray-400  md:text-[16px]`}
                >
                  Sustainable waste management and material recovery solutions.
                  Eco-friendly debris removal with maximum material recover
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
