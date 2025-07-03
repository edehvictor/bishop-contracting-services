import Navbar from "@/components/Header";
import { Button } from "@/components/ui/button";

const DemolitionHero = () => {
  return (
    <section className="relative bg-[url('/images/spiral-shapes.svg')] mb-10  bg-center object-center bg-blend-multiply w-full ">
      <div className="relative z-10 py-36 pb-10 max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full">
        <Navbar />
        <div className="mt-10 w-full flex flex-col items-center justify-center">
          <div className="mb-6  text-center flex flex-col justify-center items-center w-full">
            <p className="flex justify-center items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              Selective Demolition
            </p>
            <h1 className="text-3xl sm:text-5xl  font-bold text-gray-800 md:leading-tight mb-6">
              Precision Demolition
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Without Disruption
              </span>{" "}
            </h1>

            <p className="md:text-lg text-[16px] text-gray-600 mb-8 max-w-2xl w-full mx-auto lg:mx-0">
              Interior, Structural, and Occupied Building Demolition — Safely
              Executed. Minimally Invasive. Maximum Control
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center gap-6">
            <Button
              asChild
              className="w-fit bg-[#00AC41]  px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-white "
            >
              <a href="#quote">Get Free Assessment</a>
            </Button>
            <div className="w-[180px] text-center  px-7 py-1 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-gray-800 outline-2 outline-green-300">
              <a href="#quote">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemolitionHero;
