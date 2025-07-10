interface ButtonProps {
  text: string;
  content: string;
}

const CustomButton = ({ text, content }: ButtonProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-stretch gap-4 md:gap-6 w-full">
      <div className="w-full md:w-fit bg-[#00AC41] px-5 py-3 rounded-[5px] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-white text-center">
        <a href="#assessment-form" className="block w-full">
          {text}
        </a>
      </div>
      <div className="w-full md:w-[180px] text-center px-5 py-3 rounded-[5px] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-gray-800 outline outline-green-300">
        <a href="/contact" className="block w-full">
          {content}
        </a>
      </div>
    </div>
  );
};

export default CustomButton;
