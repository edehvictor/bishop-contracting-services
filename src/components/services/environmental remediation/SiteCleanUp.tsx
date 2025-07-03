import { BrushCleaningIcon, PaintbrushIcon, Sparkle } from "lucide-react";

const SiteCleanUp = () => {
  return (
    <div className="mt-10">
      <div className=" flex md:flex-row flex-col gap-4 ">
        <div
          className={`$ group w-full relative bg-white rounded-2xl border-3 p-8 border-green-100 shadow-4xl  duration-300 shadow-green-100 overflow-hidden flex flex-col gap-y-4 justify-center`}
        >
          <div className="w-full">
            <div className="rlative">
              <p className="flex md:justify-center md:items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-600 text-sm md:text-base">
                <PaintbrushIcon />
                Lead Paint Removal
              </p>
            </div>

            <div className="mb-6 mt-4">
              <p className="text-gray-600 leading-relaxed mb-6">
                Lead paint removal involves safely eliminating lead-based paint
                from surfaces to prevent health hazards. Worried about lead in
                your home? If you are living in an older establishment you
                should be informed. Lead can be a serious danger.
              </p>
            </div>

            <div className="flex flex-col gap-y-2 md:flex-row md:justify-start  justify-center gap-x-6">
              <p className=" px-2 gap-x-1.5 text-zinc-600 py-1 bg-gradient-to-br from-green-50 to-green-50 rounded-full border border-green-300 flex items-center justify-center shadow-lg flex-shrink-0">
                <Sparkle className=" animate-pulse text-green-400" />{" "}
                Encapsulation
              </p>
              <p className=" px-2 gap-x-1.5 text-zinc-600 py-1 bg-gradient-to-br from-green-50 to-green-50 rounded-full border border-green-300 flex items-center justify-center shadow-lg flex-shrink-0">
                <Sparkle className=" animate-pulse text-green-400" /> Enclosure
              </p>
              <p className=" px-2 gap-x-1.5 text-zinc-600 py-1 bg-gradient-to-br from-green-50 to-green-50 rounded-full border border-green-300 flex items-center justify-center shadow-lg flex-shrink-0">
                <Sparkle className=" animate-pulse text-green-400" /> Removal
              </p>
            </div>
          </div>

          <div className=" w-full  justify-center items-center">
            <img
              src="/images/lead-paint-removal.webp"
              alt="lead paint removal"
              className=" w-full rounded-md "
            />
          </div>
        </div>

        <div
          className={`$ group relative bg-white rounded-2xl  border-3 p-8 border-green-100 shadow-4xl  duration-300 shadow-green-100 overflow-hidden flex flex-col gap-y-4 justify-center`}
        >
          <div>
            <div className="relative">
              <p className="flex md:justify-center md:items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-600 text-sm md:text-base">
                <BrushCleaningIcon />
                Site Cleanup
              </p>
            </div>

            <div className="mb-6 mt-4">
              <p className="text-gray-600 leading-relaxed mb-6">
                It involves a systematic approach to remove waste, materials,
                and tools from the construction site, making it ready for the
                next phase or for final occupancy.
              </p>
            </div>

            <div className="flex flex-col gap-y-2 md:flex-row md:justify-start  justify-center gap-x-6">
              <p className=" gap-x-1.5 text-zinc-600 py-1 bg-gradient-to-br px-2 from-green-50 to-green-50 rounded-full border border-green-300 flex items-center justify-center shadow-lg flex-shrink-0">
                <Sparkle className=" animate-pulse text-green-400" />
                Debris removal
              </p>
              <p className=" gap-x-1.5 text-zinc-600 py-1 bg-gradient-to-br px-2 from-green-50 to-green-50 rounded-full border border-green-300 flex items-center justify-center shadow-lg flex-shrink-0">
                <Sparkle className=" animate-pulse text-green-400" />
                Dusting
              </p>
              <p className=" gap-x-1.5 text-zinc-600 py-1 bg-gradient-to-br px-2 from-green-50 to-green-50 rounded-full border border-green-300 flex items-center justify-center shadow-lg flex-shrink-0">
                <Sparkle className=" animate-pulse text-green-400" />
                Floor cleaning
              </p>
            </div>
          </div>

          <div className=" w-full  justify-center items-center">
            <img
              src="/images/site-cleanup.jpeg"
              alt="site cleanup"
              className=" rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteCleanUp;
