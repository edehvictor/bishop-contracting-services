import Navbar from "../Header";
import CustomButton from "../ui/CustomButton";

const CompanyHero = () => {
  return (
    <section className="bg-[url('/images/bg.svg')] md:h-screen bg-center bg-[#f7f5f4] w-full  left-0 right-0 top-0 ">
      <Navbar />
      <div className=" max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full pb-10  flex items-center justify-center h-full">
        <div className="flex md:flex-row flex-col-reverse w-full  h-full  pb-1 justify-center items-center gap-x-10 ">
          <div className="md:mt-14 w-full">
            <div className="mb-6 md:text-start text-start w-full">
              <p className="flex justify-center items-center gap-3 w-fit md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-500 text-sm md:text-base mb-2">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                About us
              </p>
              <h1 className="text-2xl sm:text-4xl  font-bold text-gray-800 md:leading-11 mb-6">
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
            <CustomButton content="Contact us" text="Get assessment" />
          </div>
          <div className="w-full flex justify-center md:justify-end mt-10 relative mb-10">
            <div className="absolute inset-0 flex justify-center md:justify-end"></div>

            <img
              src="/images/ceo.jpg"
              alt="Service"
              className="relative z-10 w-full  md:w-[550px] mt-28 md:mt-24 h-[20rem] md:h-[28rem] object-cover transform rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
