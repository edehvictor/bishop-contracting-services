import React, { useState } from "react";
import { Menu, X, Leaf, ChevronDown, HardHat, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileHeader from "./MobileHeader";
import { navItems } from "@/lib/list";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <main className="">
      <nav
        className={`fixed top-12 rounded-full md:left-11 md:right-11 sm:left-2 sm:right-2 left-4 right-4 z-50 transition-all duration-300 backdrop-blur-md shadow-lg 
        bg-white py-[7px] max-w-7xl mx-auto
       ${className}`}
      >
        <div>
          <div className="m px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center space-x-3">
                <img src="/images/logo.png" alt="logo " className="w-15" />
              </a>

              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="text-white/90 hover:text-green-400 font-sm transition-all duration-200 flex items-center space-x-1 py-2 hover:scale-105 relative group/nav"
                    >
                      <span className="text-gray-600 text-sm font-medium inline-flex items-center justify-center gap-x-1 align-middle">
                        {item.name}{" "}
                        {item.name === "Services" && (
                          <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        )}
                      </span>

                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover/nav:w-full"></span>
                    </a>

                    {item.hasDropdown && (
                      <div className="absolute  text-sm top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="py-2">
                          <a
                            href="environment"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          >
                            <Leaf className="h-4 w-4 mr-3 text-green-500" />
                            Environmental remediation
                          </a>
                          <a
                            href="demolition"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          >
                            <HardHat className="h-4 w-4 mr-3 text-orange-500" />
                            Selective demolition
                          </a>
                          <a
                            href="/transportation"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          >
                            <Truck className="h-4 w-4 mr-3 text-blue-500" />
                            Transportation
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="hidden lg:flex items-center space-x-4">
                <Button
                  asChild
                  className="bg-[#00AC41] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  <a href="#assessment-form">Get Assessment</a>
                </Button>
              </div>

              <div className="lg:hidden">
                {isOpen ? (
                  <X className="h-8 w-8" onClick={toggleMenu} />
                ) : (
                  <Menu className="h-8 w-8" onClick={toggleMenu} />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </main>
  );
};

export default Navbar;
