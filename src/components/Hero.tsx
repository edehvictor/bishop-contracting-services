import Navbar from "./Header";
import CustomButton from "./ui/CustomButton";

const Hero = () => {
  return (
    <section className="bg-[url('/images/bg.svg')] md:h-screen bg-center bg-[#f7f5f4] w-full  left-0 right-0 top-0 ">
      <Navbar />
      <div className=" max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full pb-10  flex items-center justify-center h-full">
        <div className="flex md:flex-row flex-col-reverse w-full  h-full  pb-1 justify-center items-center gap-x-10 ">
          <div className="mt-14 w-full">
            <div className="mb-6 md:text-start text-start w-full">
              <p className="md:flex hidden justify-center items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-black text-sm md:text-base">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                Environmental stewards
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl  font-bold text-gray-800 sm:leading-12 md:leading-16 mb-3">
                Environmental{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Leaders
                </span>{" "}
                in Missouri & Illinois
              </h1>

              <p className="text-[16px] text-sm text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Trusted environmental remediation, demolition, and
                transportation services. We protect communities while delivering
                industry-leading solutions with safety and sustainability at our
                core.
              </p>
            </div>
            <CustomButton text="Get assessment" content="Contact us" />
          </div>
          <div className="w-full flex justify-center md:justify-end mt-10 relative mb-10">
            <div className="absolute inset-0 flex justify-center md:justify-end"></div>

            <img
              src="/images/turck.jpg"
              alt="Service"
              className="relative z-10 w-full mt-28 md:mt-24 md:w-[550px] h-[17rem] md:h-[28rem] object-cover transform  rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
