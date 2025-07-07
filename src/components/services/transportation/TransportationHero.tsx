import Navbar from "@/components/Header";
import CustomButton from "@/components/ui/CustomButton";

const TransportationHero = () => {
  return (
    <section className="bg-[url('/images/circle-shape.svg')] h-scr een bg-center bg-[#f7f5f4] w-full  left-0 right-0 top-0 border-b-1 border-green-200">
      <Navbar />
      <div className=" max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full pb-10">
        <div className="flex md:flex-row flex-col-reverse w-full  h-full pt-36 pb-1 justify-start items-start gap-x-10 ">
          <div className="mt-10 w-full">
            <div className="mb-3 text-start  w-full">
              <p className="flex justify-center items-center gap-3 w-fit md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                Transportation stewards
              </p>
              <h1 className="text-2xl sm:text-4xl  font-bold text-gray-800 leading-16 ">
                Safe. Reliable. Always on Time.
              </h1>

              <p className="md:text-[16px] text-sm text-gray-600 mb-5 max-w-2xl mx-auto lg:mx-0">
                Whether it’s hauling equipment, managing hazardous materials, or
                providing custom tours, our certified drivers and
                well-maintained fleet get you there — safely and efficiently.
              </p>
            </div>
            <CustomButton content="Contact us" text="Get assessement" />
          </div>
          <div className="w-full flex justify-center md:justify-end mt-10 relative mb-10">
            <div className="absolute inset-0 flex justify-center md:justify-end"></div>

            <img
              src="/images/transp.jpeg"
              alt="Service"
              className="relative z-10 w-full  md:w-[550px]  h-[17rem] md:h-[27rem] object-cover transform rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportationHero;
