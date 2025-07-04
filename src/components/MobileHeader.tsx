import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { serviceItems } from "@/lib/list";

type NavItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
};

const MobileHeader = ({
  isOpen,
  setIsOpen,
  navItems,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navItems: NavItem[];
}) => {
  const [showServices, setShowServices] = useState(false);
  const handleServicesClick = () => {
    setShowServices(true);
  };

  const handleBackClick = () => {
    setShowServices(false);
  };
  return (
    <div
      className={`fixed lg:hidden h-[320px] bg-white transition-all duration-300 ease-in-out w-[300px] flex justify-end z-50  right-10  top-32 ${
        isOpen ? " opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="flex-1 overflow-hidden relative">
        <div
          className={`absolute inset-0 p-4 transform transition-transform duration-300 ease-in-out ${
            showServices ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <nav className="space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <a
                    onClick={handleServicesClick}
                    href={item.href}
                    className="w-full flex items-center justify-between text-gray-700 hover:text-green-600 font-medium py-3 px-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-700 text-sm hover:text-green-600 font-medium py-3 px-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>
          <div className="pt-3 mt-3 border-t border-blue-700/50 space-y-3">
            <Button
              asChild
              className="w-fit bg-[#00AC41]  px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-white "
            >
              <a href="#quote">Get Free Assessment</a>
            </Button>
          </div>

          <div
            className={`absolute inset-0 p-4 transform transition-transform duration-300 ease-in-out ${
              showServices ? "translate-x-full" : "translate-x-full"
            }`}
          >
            <div className="flex items-center mb-6">
              <button
                onClick={handleBackClick}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors mr-3"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h4 className="text-lg font-semibold text-gray-900">Services</h4>
            </div>

            <nav className="space-y-3">
              {serviceItems.map((service) => {
                const IconComponent = service.icon;
                return (
                  <a
                    key={service.name}
                    href={service.href}
                    className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                    onClick={() => setIsOpen(true)}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <IconComponent className={`h-5 w-5 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        {service.name}
                      </h5>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
