import { Hammer, Leaf, Recycle, Truck } from "lucide-react";

const OverviewTab = () => {
  return (
    <section className={`bg-[#1B1E20] text-white`} id="services">
      <div className={`m max-w-7xl py-10 px-5 mx-auto flex-col flex gap-7`}>
        <div className={`max-w-[460px] w-full`}>
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
            width={730}
            height={30}
            className={`w-full`}
          />
        </div>
        <h5 className={`font-medium text-[24px] md:text-3xl  capitalize`}>
          Complete Environmental Solutions
        </h5>
        <p className={`font-normal text-lg max-w-[560px] w-full`}>
          From environmental remediation to safe demolition and specialized
          transport, we provide comprehensive services that protect communities
          and deliver results.
        </p>
        <div
          className={` flex py-5 lg:py-0 lg:h-[400px] w-full flex-col gap-15 lg:gap-0 lg:flex-row`}
        >
          <div className={`w-full flex flex-col gap-15`}>
            <div className={`flex gap-2`}>
              <div
                className={`w-16 h-16 bg-gradient-to-br  from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Leaf className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-medium text-lg  md:text-2xl`}>
                  Environmental Remediation
                </h5>
                <p className={`font-normal text-sm  md:text-lg`}>
                  Complete Environmental Solutions
                </p>
              </div>
            </div>
            <hr className={`text-white`} />
            <div className={`flex gap-2`}>
              <div
                className={`w-16 h-16 bg-gradient-to-br  from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Hammer className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-medium text-lg  md:text-2xl`}>
                  Selective Demolition
                </h5>
                <p className={`font-normal text-sm  md:text-lg`}>
                  Safe & Efficient Demolition
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
                className={`w-16 h-16 bg-gradient-to-br  from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Truck className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-medium text-lg  md:text-2xl`}>
                  Transportation Services
                </h5>
                <p className={`font-normal text-sm  md:text-lg`}>
                  Specialized Material Transport
                </p>
              </div>
            </div>
            <hr className={`text-white`} />
            <div className={`flex lg:ps-5 gap-2`}>
              <div
                className={`w-16 h-16 bg-gradient-to-br  from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Recycle className="h-10 w-10  text-white" />
              </div>
              <div className={`flex flex-col gap-2`}>
                <h5 className={`font-medium text-lg  md:text-2xl`}>
                  Debris Removal & Recycling
                </h5>
                <p className={`font-normal text-sm  md:text-lg`}>
                  Professional demolition services for all structures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewTab;
