interface ButtonProps {
  text: string;
  content: string;
}

const CustomButton = ({ text, content }: ButtonProps) => {
  return (
    <div className="flex flex-row justify-start items-start gap-6">
      <div className="w-fit bg-[#00AC41] px-5 py-3  rounded-[5px] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-white ">
        <a href="#assessment-form">{text}</a>
      </div>
      <div className="w-[180px] cursor-pointer text-center  px-5 py-3 rounded-[5px] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-gray-800 outline-2 outline-green-300">
        <a href="/contact">{content}</a>
      </div>
    </div>
  );
};

export default CustomButton;
