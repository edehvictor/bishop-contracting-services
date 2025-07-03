const Solution = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 ">
      <div className=" flex flex-col md:flex-row text-center gap-x-7 gap-y-4 py-6 w-full  rounded-2xl bg-[#00AC41] px-4">
        <div className=" w-full flex flex-col space-y-20">
          <h3 className="text-4xl text-start w-full text-white font-bold mb-4 mt-10">
            Need our Solution?
          </h3>
          <p className="text-white text-start mb-6 max-w-2xl mx-auto">
            At Bishop Contracting Services, every project is unique. Our team
            combines these services to create tailored solutions that meet your
            specific environmental, demolition, and transportation needs. We
            don’t just offer services — we design solutions that fit your
            specific goals, timelines, and compliance requirements.
          </p>
          <div className="flex flex-col gap-4 md:justify-start md:items-start  sm:flex-row justify-center  items-center text-center w-full">
            <a
              href="#"
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Get free assement
            </a>
            <a
              href="#services"
              className=" text-gray-800 bg-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              View All Services
            </a>
          </div>
        </div>

        <div className="w-full">
          <div className="">
            <img
              src="/images/handling-asbestos.jpg"
              alt=" solution"
              className=" w-full object-contain rounded-md h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
