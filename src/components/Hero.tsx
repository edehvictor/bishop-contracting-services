import Navbar from "./Header";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-[url('/images/bg.svg')] bg-center bg-[#f7f5f4] w-full  left-0 right-0 top-0 border-b-1 border-green-200">
      <Navbar />
      <div className=" max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full">
        <div className="flex md:flex-row flex-col w-full pt-40 pb-1 justify-start items-start ">
          <div className="mt-10 w-full">
            <div className="mb-6 md:text-start text-center w-full">
              <p className="flex justify-center items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                Environmental stewards
              </p>
              <h1 className="text-2xl sm:text-5xl  font-bold text-gray-800 leading-tight mb-6">
                Environmental{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Leaders
                </span>{" "}
                in
                <br />
                Missouri & Illinois
              </h1>

              <p className="md:text-lg text-[16px] text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Trusted environmental remediation, demolition, and
                transportation services. We protect communities while delivering
                industry-leading solutions with safety and sustainability at our
                core.
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
          <div className="w-full  mt-10">
            <img src="/images/green.jpeg" alt="" className=" w-[530px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
