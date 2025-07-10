import Navbar from "@/components/Header";

const EnvironmentHero = () => {
  return (
    <section className="relative  bg-[url('/images/net.png')] mb-10 bg-center bg-cover w-full ">
      <div className="relative z-10 py-36 pb-10 max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full">
        <Navbar />
        <div className="mt-10 w-full flex flex-col items-start justify-start md:items-center md:justify-center">
          <div className="mb-6  md:text-center text-start flex flex-col md:justify-center md:items-center justify-start items-start w-full">
            <p className="flex justify-center items-center text-center gap-3 w-fit md:mx-auto  px-3 py-1  border border-green-300 rounded-2xl bg-white align-middle text-zinc-500 text-sm md:text-base">
              <span className="w-3 h-3 bg-green-400 text-center align-middle rounded-full animate-pulse"></span>
              Environmental remediation
            </p>
            <h1 className="text-2xl sm:text-5xl mt-2  font-bold text-gray-800 md:leading-tight mb-3">
              Safe. Certified. Complete
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Environmental Remediation
              </span>{" "}
            </h1>

            <p className="md:text-[16px] text-sm text-gray-600 mb-4 max-w-2xl w-full mx-auto lg:mx-0">
              From asbestos and mold removal to lead paint abatement and full
              site cleanup, we help you reclaim your space—safely, efficiently,
              and in full regulatory compliance
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 md:gap-6 w-full">
            <div className="w-full md:w-fit bg-[#00AC41] px-5 py-3 rounded-[5px] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-white text-center">
              <a href="#assessment-form" className="block w-full">
                Get assessment
              </a>
            </div>
            <div className="w-full md:w-[180px] text-center px-5 py-3 rounded-[5px] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-gray-800 outline outline-green-300">
              <a href="/contact" className="block w-full">
                content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentHero;
