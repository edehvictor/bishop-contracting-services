import Navbar from "@/components/Header";
import CustomButton from "@/components/ui/CustomButton";

const DemolitionHero = () => {
  return (
    <section className="relative bg-[url('/images/spiral-shapes.svg')] mb-10  bg-center object-center bg-blend-multiply w-full ">
      <div className="relative z-10 py-36 pb-10 max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full">
        <Navbar />
        <div className="mt-10 w-full flex flex-col md:items-center justify-start items-start md:justify-center">
          <div className="mb-3 md:text-center text-start flex flex-col md:justify-center justify-start md:items-center items-start w-full">
            <p className="flex justify-center items-center j gap-3 w-fit md:mx-auto px-3 py-1 md:text-center text-start border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              Selective Demolition
            </p>
            <h1 className="text-2xl sm:text-5xl  font-bold text-gray-800 md:leading-tight mb-3 mt-2">
              Precision Demolition
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Without Disruption
              </span>{" "}
            </h1>

            <p className="md:text-[16px] text-sm text-gray-600 mb-3 max-w-2xl w-full mx-auto lg:mx-0">
              Interior, Structural, and Occupied Building Demolition — Safely
              Executed. Minimally Invasive. Maximum Control
            </p>
          </div>
          <CustomButton content="Contact us" text="Get assessement" />
        </div>
      </div>
    </section>
  );
};

export default DemolitionHero;
