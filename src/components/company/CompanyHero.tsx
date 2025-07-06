import Navbar from "../Header";
import CustomButton from "../ui/CustomButton";

const CompanyHero = () => {
  return (
    <section className="bg-[url('/images/bg.svg')] h-scr een bg-center bg-[#f7f5f4] w-full  left-0 right-0 top-0 border-b-1 border-green-200">
      <Navbar />
      <div className=" max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full pb-10">
        <div className="flex md:flex-row flex-col w-full  h-full pt-36 pb-1 justify-start items-start gap-x-10 ">
          <div className="mt-10 w-full">
            <div className="mb-6 md:text-start text-center w-full">
              <p className="flex justify-center items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                About us
              </p>
              <h1 className="text-2xl sm:text-4xl  font-bold text-gray-800 leading-11 mb-6">
                More Than a Service — A Commitment to Safety, Sustainability &
                Integrity
              </h1>

              <p className="text-[16px] text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                We are specialists in environmental remediation, precision
                demolition, and specialized transport. Our mission is to protect
                communities, restore environments, and build a cleaner, safer
                tomorrow.
              </p>
            </div>
            <CustomButton content="View projects" text="Get free assessment" />
          </div>
          <div className="w-full flex justify-center md:justify-end mt-10 relative mb-10">
            <div className="absolute inset-0 flex justify-center md:justify-end">
              <div className="w-full md:w-[550px] h-[17rem] md:h-[27rem] transform rotate-[-2deg] bg-green-100 rounded-3xl z-0"></div>
            </div>

            <img
              src="/images/ceo.jpg"
              alt="Service"
              className="relative z-10 w-full  md:w-[550px]  h-[20rem] md:h-[27rem] object-cover transform rotate-[2deg] rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
