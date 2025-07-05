import { Instagram } from "lucide-react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-zinc-500 hover:text-gray-900 transition-colors"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-[#f7f5f4] py-16 px-4 border-t-2">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8   ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center mb-3">
              <div className="flex items-centerS">
                <img src="/images/logo.png" alt="logo " className="w-16" />
              </div>
            </div>
            <p className="text-gray-500 mb-4">
              All Your Environmental Solutions in One Place
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg f text-gray-800">
              Quick Links
            </h3>
            <div className="flex flex-col text-gray-600 font-medium text-sm space-y-2 ">
              <FooterLink href="/#">About us</FooterLink>
              <FooterLink href="/#services">Services</FooterLink>
              <FooterLink href="/about">Company</FooterLink>
            </div>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg f text-zinc-700">More</h3>
            <div className="flex flex-col space-y-2 text-gray-600 text-sm font-medium ">
              <FooterLink href="/#">Resources</FooterLink>
              <FooterLink href="/#">Certifications</FooterLink>
              <FooterLink href="/#">Testimonials</FooterLink>
            </div>
          </div>

          {/* Legal & Policy Links */}
          <div className="space-y-4">
            <h3 className="f text-gray-800  font-semibold ">
              Legal & Policy Links
            </h3>
            <div className="flex flex-col space-y-2 text-gray-600 font-medium text-sm ">
              <FooterLink href="/#">Privacy Policy</FooterLink>
              <FooterLink href="/#">Cookie Policy</FooterLink>
              <FooterLink href="/#">Terms and condition</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="font-bold">Bishop Contracting Services</span>. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-6 opacity-60">
            <a
              href={"#"}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <img src="/icons/facebook.svg" className="w-5 h-5" />
            </a>
            <a
              href={"#"}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={"#"}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <img src="/icons/x-dark.svg" className="w-5 h-5" />
            </a>
            <a
              href={"#"}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <img src="/icons/reddit.svg" className="w-5 h-5" />
            </a>
            <a
              href={"#"}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <img src="/icons/linkedIn.svg" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
