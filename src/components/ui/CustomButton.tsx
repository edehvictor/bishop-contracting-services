import { Button } from "./button";

interface ButtonProps {
  text: string;
  content: string;
}

const CustomButton = ({ text, content }: ButtonProps) => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center md:justify-start md:items-start gap-6">
      <Button
        asChild
        className="w-fit bg-[#00AC41]  px-6 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-white "
      >
        <a href="#assessment-form">{text}</a>
      </Button>
      <div className="w-[180px] cursor-pointer text-center  px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-gray-800 outline-2 outline-green-300">
        <a href="/contact">{content}</a>
      </div>
    </div>
  );
};

export default CustomButton;
