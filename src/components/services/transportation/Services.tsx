import { MapPin, Circle, Calendar, Clock, ChevronDown } from "lucide-react";

const Services = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
            [ Transportation Services ]
          </p>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Seamless Hauling & Hazmat Logistics
          </h1>
          <p className="text-gray-300 mb-8">
            From roll-off containers to emergency hazmat transport—we offer
            safe, fast, and fully compliant delivery and waste removal services
            anywhere, anytime.
          </p>

          <div className="space-y-4 opacity-70 ">
            <div className="relative">
              <input
                type="text"
                readOnly
                disabled
                value="Pickup location"
                className="w-full bg-zinc-900 text-white border border-white/10 rounded-lg p-3 pl-10 placeholder:text-gray-400 pointer-events-none"
              />
              <Circle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>

            <div className="relative">
              <input
                type="text"
                readOnly
                disabled
                value="Dropoff location"
                className="w-full bg-zinc-900 text-white border border-white/10 rounded-lg p-3 pl-10 placeholder:text-gray-400 pointer-events-none"
              />
              <Circle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>

            <div className="flex gap-4">
              <div className="relative w-1/2">
                <input
                  type="text"
                  readOnly
                  disabled
                  value="Today"
                  className="w-full bg-zinc-900 text-white border border-white/10 rounded-lg p-3 pl-10 pointer-events-none"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              </div>
              <div className="relative w-1/2">
                <input
                  type="text"
                  readOnly
                  disabled
                  value="Now"
                  className="w-full bg-zinc-900 text-white border border-white/10 rounded-lg p-3 pl-10 pr-8 pointer-events-none"
                />
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center border border-white/10 rounded-xl p-10">
          <img
            src="/images/transport.jpeg"
            alt="Transport Service"
            className="rounded-md mb-6 h-[20rem]"
          />
          <h3 className="text-xl font-semibold mb-2">
            Always Ready, Always On Time
          </h3>
          <p className="text-gray-400 text-sm">
            Our fleet is equipped for scheduled, emergency, and hazardous
            materials transportation—24/7 reliability at your service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
