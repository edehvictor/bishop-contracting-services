import {
  Twitter,
  ArrowUpRight,
  SatelliteIcon,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const Contact = () => {
  return (
    <section className=" py-40 px-6 md:px-12 bg-[url('/images/bg.svg')]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-start mb-16">
          Contact
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="group bg-white/95  border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-black rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Email sales
            </h3>
            <p className="text-gray-600 text-sm">
              For all things related to our services.
            </p>
          </div>
          <div className="group bg-white/95 border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-black rounded-full">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Follow us on X
            </h3>
            <p className="text-gray-600 text-sm">
              Stay updated via our official account on X (formerly Twitter).
            </p>
          </div>
          {/* Card 2 */}
          <div className="group bg-white/95  border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-black rounded-full">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Follow us on Instagram
            </h3>
            <p className="text-gray-600 text-sm">
              Get insights from the official Instagram account and engage with
              our posts.
            </p>
          </div>
          {/* Card 3 */}
          <div className="group  bg-white/95 border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-black rounded-full">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Join Us on Linkedin
            </h3>
            <p className="text-gray-600 text-sm">
              Be part of our official Linkedin platform.
            </p>
          </div>

          <div className="group bg-white/95  border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-black rounded-full">
                <SatelliteIcon className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Join Us on Discord
            </h3>
            <p className="text-gray-600 text-sm">
              Be part of our official Discord community and chat with others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
